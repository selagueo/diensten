import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";

export function ContactCTASection() {
  return (
    <section
      className="relative py-16 sm:py-20 overflow-hidden"
      aria-labelledby="contact-cta-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/contact-cta-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-black/65"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-cta-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Estamos para asesorarte
          </h2>
          <p className="mt-4 text-lg text-white/90">
            ¿Tenés un proyecto en mente? Escribinos y te responderemos a la brevedad.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-diensten-orange transition-colors hover:bg-gray-100"
          >
            Contacto
            <svg
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
