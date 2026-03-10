"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/Container";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Plano no encontrado";
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section
        className="relative flex min-h-0 flex-1 flex-col pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
        aria-labelledby="not-found-heading"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/404-bg.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" aria-hidden />
        </div>

        <div className="relative z-10 flex flex-1 items-center justify-start">
          <Container>
            <div className="max-w-3xl text-left">
              <h1
                id="not-found-heading"
                className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                404 — Plano no encontrado
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/95 sm:text-xl">
                Parece que el plano que buscabas no está en nuestros archivos
              </p>
            </div>
          </Container>
        </div>
      </section>
      <Footer />
    </div>
  );
}
