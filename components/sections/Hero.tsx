import Image from "@/components/Img";
import { Container } from "../Container";
import { HeroCard } from "../HeroCard";
import { HERO_CARD_SLIDES } from "@/app/data/hero-card-slides";

export function Hero() {
  return (
    <section
      className="relative z-10 flex min-h-[100dvh] flex-col justify-center pt-40 pb-24 sm:pt-44 sm:pb-28 lg:h-[100dvh] lg:pt-44 lg:pb-32 lg:overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/65"
          aria-hidden
        />
      </div>

      <div className="relative z-10">
        <Container>
          <div className="mx-auto flex max-w-6xl flex-col gap-16 sm:gap-20 lg:grid lg:grid-cols-[1fr,minmax(320px,420px)] lg:items-center lg:gap-16">
            {/* Left: Text content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1
                id="hero-heading"
                className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-[4.25rem]"
              >
                Experiencia que construye futuro
              </h1>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/95 sm:text-xl lg:mx-0 lg:max-w-lg">
                Somos un grupo de profesionales de la Arquitectura e Ingeniería con
                una larga trayectoria en diversas empresas y proyectos
                desarrollados en el interior y exterior del país.
              </p>
            </div>

            {/* Right: Content card */}
            <div className="flex justify-center lg:justify-end">
              <HeroCard slides={HERO_CARD_SLIDES} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

