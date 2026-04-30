import type { Metadata } from "next";
import Image from "@/components/Img";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { Container } from "@/components/Container";
import { ObraCard } from "@/components/ObraCard";
import { OBRAS } from "@/lib/obras";

export const metadata: Metadata = {
  title: "Obras",
  description: "Conocé los proyectos y obras realizadas por Diensten.",
};

export default function ObrasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero / Banner section - image extends behind fixed header */}
        <section className="relative flex min-h-[70vh] items-center justify-start pt-28 pb-24 sm:pt-32 lg:pt-36">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/obras-hero.webp"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden />
          </div>
          <Container className="relative z-10 flex flex-1 flex-col items-start justify-center">
            <div className="max-w-3xl text-left">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
                Obras
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Proyectos de Obras Corporativas y Obras Generales que reflejan nuestra experiencia y compromiso constructivo
              </p>
            </div>
          </Container>
        </section>

        {/* Projects grid */}
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <div className="mb-10 flex flex-col items-start gap-2 border-l-2 border-diensten-orange pl-4 sm:mb-14 sm:pl-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-diensten-orange sm:text-xs">
                [ Selección de proyectos ]
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                Algunas de nuestras obras
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-600 sm:text-base">
                Una muestra representativa de los proyectos que realizamos. No incluye la totalidad de las obras ejecutadas.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {OBRAS.map((obra) => (
                <ObraCard key={obra.slug} obra={obra} />
              ))}
            </div>
          </Container>
        </section>

        {/* Contact CTA - full-width section before footer */}
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
