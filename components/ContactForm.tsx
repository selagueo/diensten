"use client";

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface ContactFormProps {
  className?: string;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm({ className = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!accessKey) {
      setErrorMessage("Configuración faltante. Por favor, contactanos por email.");
      return;
    }

    if (siteKey && !hcaptchaToken) {
      setErrorMessage("Por favor, completá la verificación de seguridad.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const payload: Record<string, string> = {
        access_key: accessKey,
        subject: "Nuevo mensaje desde diensten.com.ar",
        from_name: String(formData.get("name") ?? ""),
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        message: String(formData.get("message") ?? ""),
      };
      if (hcaptchaToken) {
        payload["h-captcha-response"] = hcaptchaToken;
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Error al enviar el mensaje");
      }

      setStatus("success");
      setHcaptchaToken(null);
      form.reset();
      hcaptchaRef.current?.resetCaptcha();
    } catch (err) {
      setStatus("error");
      setHcaptchaToken(null);
      setErrorMessage(err instanceof Error ? err.message : "Error al enviar el mensaje. Intentá de nuevo.");
      hcaptchaRef.current?.resetCaptcha();
    }
  };

  if (status === "success") {
    return (
      <div
        className={`flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-8 py-16 text-center sm:min-h-[360px] sm:py-20 ${className}`}
        role="status"
        aria-live="polite"
      >
        <p className="text-xl font-semibold text-gray-900 sm:text-2xl lg:text-3xl">
          Gracias por tu mensaje. Te responderemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
          Nombre <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-diensten-orange focus:ring-1 focus:ring-diensten-orange"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-diensten-orange focus:ring-1 focus:ring-diensten-orange"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
          Teléfono <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-diensten-orange focus:ring-1 focus:ring-diensten-orange"
          placeholder="+54 9 11 1234-5678"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-diensten-orange focus:ring-1 focus:ring-diensten-orange"
          placeholder="Escribí tu mensaje..."
        />
      </div>

      {/* Honeypot field - bots fill this, humans don't see it */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {siteKey && (
        <HCaptcha
          ref={hcaptchaRef}
          sitekey={siteKey}
          onVerify={(token) => setHcaptchaToken(token)}
          onExpire={() => setHcaptchaToken(null)}
          onError={() => setHcaptchaToken(null)}
        />
      )}

      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting" || (!!siteKey && !hcaptchaToken)}
        className="w-full rounded-full bg-diensten-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-diensten-orange-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
