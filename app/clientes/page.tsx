import type { Metadata } from "next";
import Image from "@/components/Img";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Conocé a los clientes que confían en Diensten.",
};

export default function ClientesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero / Banner section - image extends behind fixed header */}
        <section className="relative flex min-h-[70vh] items-center justify-start pt-28 pb-24 sm:pt-32 lg:pt-36">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/clientes-hero.png"
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
                Clientes
              </h1>
              <p className="mt-6 text-lg text-white/90">
                [Placeholder: Introducción o subtítulo de la página]
              </p>
            </div>
          </Container>
        </section>

        {/* Section 1 - placeholder */}
        <section className="py-20">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900">
              [Placeholder: Sección 1]
            </h2>
            <p className="mt-4 text-gray-600">
              [Placeholder: Contenido de la primera sección]
            </p>
          </Container>
        </section>

        {/* Section 2 - placeholder */}
        <section className="bg-gray-50 py-20">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900">
              [Placeholder: Sección 2]
            </h2>
            <p className="mt-4 text-gray-600">
              [Placeholder: Contenido de la segunda sección]
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
