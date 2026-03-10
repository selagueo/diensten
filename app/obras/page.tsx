import type { Metadata } from "next";
import Image from "next/image";
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
              src="/obras-hero.png"
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
