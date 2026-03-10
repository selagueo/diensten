import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter: max 5 requests per IP per 10 minutes
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const ipRequestMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequestMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    ipRequestMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

const REQUIRED_FIELDS = ["name", "email", "phone", "message"] as const;

function validateBody(body: unknown): { name: string; email: string; phone: string; message: string } | { error: string } {
  if (!body || typeof body !== "object") {
    return { error: "Cuerpo de la solicitud inválido" };
  }

  const data = body as Record<string, unknown>;

  for (const field of REQUIRED_FIELDS) {
    const value = data[field];
    if (value === undefined || value === null || String(value).trim() === "") {
      return { error: `El campo ${field} es requerido` };
    }
  }

  const name = String(data.name).trim();
  const email = String(data.email).trim();
  const phone = String(data.phone).trim();
  const message = String(data.message).trim();

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Email inválido" };
  }

  // Sanitize length limits
  if (name.length > 200) return { error: "Nombre demasiado largo" };
  if (email.length > 254) return { error: "Email demasiado largo" };
  if (phone.length > 50) return { error: "Teléfono demasiado largo" };
  if (message.length > 5000) return { error: "Mensaje demasiado largo" };

  return { name, email, phone, message };
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: secretKey, response: token }),
  });

  const result = await response.json();
  return result.success === true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Por favor, esperá unos minutos e intentá de nuevo." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate Turnstile token
    const token = body.turnstileToken;
    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "Verificación de seguridad requerida. Por favor, completá el captcha." },
        { status: 400 }
      );
    }

    const captchaValid = await verifyTurnstileToken(token);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "La verificación de seguridad falló. Por favor, intentá de nuevo." },
        { status: 400 }
      );
    }

    // Validate form fields
    const validation = validateBody(body);
    if ("error" in validation) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { name, email, phone, message } = validation;

    // Send email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Error del servidor. Por favor, intentá más tarde." },
        { status: 500 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "contacto@diensten.com";

    const toEmail = process.env.RESEND_TO_EMAIL;
    if (!toEmail) {
      console.error("RESEND_TO_EMAIL is not configured");
      return NextResponse.json(
        { error: "Error del servidor. Por favor, intentá más tarde." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "Nuevo mensaje desde la web - Diensten",
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Por favor, intentá más tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error del servidor. Por favor, intentá más tarde." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
