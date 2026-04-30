"use client";

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  const isDemoMode = !accessKey;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (siteKey && !captchaToken) {
      setErrorMessage("Por favor, completá la verificación de seguridad.");
      return;
    }

    if (isDemoMode) {
      setStatus("success");
      e.currentTarget.reset();
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const payload: Record<string, string> = {
        access_key: accessKey!,
        subject: "Nuevo mensaje desde la web — Diensten",
        from_name: "Web Diensten",
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        message: String(formData.get("message") ?? ""),
        botcheck: String(formData.get("botcheck") ?? ""),
      };
      if (captchaToken) payload["h-captcha-response"] = captchaToken;

      const response = await fetch("https://api.web3forms.com/submit", {
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
      setCaptchaToken(null);
      form.reset();
      captchaRef.current?.resetCaptcha();
    } catch (err) {
      setStatus("error");
      setCaptchaToken(null);
      setErrorMessage(err instanceof Error ? err.message : "Error al enviar el mensaje. Intentá de nuevo.");
      captchaRef.current?.resetCaptcha();
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
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
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

      {siteKey && (
        <HCaptcha
          ref={captchaRef}
          sitekey={siteKey}
          onVerify={setCaptchaToken}
          onExpire={() => setCaptchaToken(null)}
          onError={() => setCaptchaToken(null)}
        />
      )}

      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting" || (!!siteKey && !captchaToken)}
        className="w-full rounded-full bg-diensten-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-diensten-orange-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
