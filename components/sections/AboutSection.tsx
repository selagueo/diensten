import Image from "@/components/Img";
import Link from "next/link";
import { Container } from "../Container";

export function AboutSection() {
  return (
    <section
      className="relative z-0 min-h-[100dvh] bg-white"
      aria-labelledby="about-heading"
    >
      {/* Subtle dotted pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Image - absolute left edge, desktop only */}
      <div className="pointer-events-none absolute left-0 top-20 hidden w-[40%] min-w-[380px] lg:block lg:bottom-20">
        <Image
          src="/about-section.webp"
          alt="Profesionales de construcción trabajando en obra"
          fill
          className="object-cover"
          sizes="40vw"
        />
      </div>

      <Container className="relative z-10 flex min-h-[100dvh] flex-col justify-center">
        <div className="flex flex-col items-center gap-12 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-end lg:gap-16 lg:py-24 lg:max-w-[55%] lg:ml-auto">
          {/* Left: Text content */}
          <div className="flex-1 w-full max-w-2xl space-y-6 text-center lg:max-w-none lg:pr-8 lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
              Sobre nosotros
            </p>
            <h2
              id="about-heading"
              className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[3rem]"
            >
              Soluciones integrales en obras e infraestructura
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
              En Diensten desarrollamos obras y servicios de infraestructura con un
              enfoque integral, brindando soluciones confiables para proyectos
              públicos y privados en todo el país. Nuestra trayectoria se refleja
              en altos estándares de ejecución y en un compromiso permanente con
              cada cliente.
            </p>
            <Link
              href="/la-empresa#vision"
              className="inline-flex items-center gap-3 rounded-full bg-diensten-orange px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-diensten-orange-dark sm:text-base"
            >
              Nuestra Visión, Valores y Compromisos
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
        </div>
      </Container>
    </section>
  );
}
