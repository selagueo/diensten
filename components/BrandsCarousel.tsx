"use client";

import Image from "next/image";

const LOGOS = [
  { src: "/logo-ypf.png", alt: "YPF" },
  { src: "/logo-telecom.png", alt: "Telecom" },
  { src: "/logo-telefonica.png", alt: "Telefónica" },
  { src: "/logo-personal.png", alt: "Personal" },
  { src: "/logo-claro.png", alt: "Claro" },
  { src: "/logo-movistar.png", alt: "Movistar" },
  { src: "/logo-trenes-argentinos.png", alt: "Trenes Argentinos" },
  { src: "/logo-hsbc.png", alt: "HSBC" },
  { src: "/logo-accenture.png", alt: "Accenture" },
  { src: "/logo-banco-nacion.png", alt: "Banco Nación" },
  { src: "/logo-supervielle.png", alt: "Supervielle" },
  { src: "/logo-impsa.png", alt: "IMPSA" },
  { src: "/logo-telefe.png", alt: "Telefe" },
  { src: "/logo-buenos-aires.png", alt: "Buenos Aires Gobierno de la Ciudad", wide: true },
  { src: "/logo-radio-nacional.png", alt: "Radio Nacional" },
];

export function BrandsCarousel() {
  const logos = [...LOGOS, ...LOGOS]; // Duplicate for seamless loop

  return (
    <section
      className="block overflow-hidden border-y border-gray-200 bg-white py-12 sm:py-14"
      aria-labelledby="brands-heading"
    >
      <p
        id="brands-heading"
        className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-black"
      >
        Confían en nosotros
      </p>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-20"
          aria-hidden
        />

        <div className="brands-scroll flex w-max items-center gap-12 sm:gap-16 md:gap-24">
          {logos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex h-12 shrink-0 items-center justify-center sm:h-14"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.wide ? 200 : 140}
                height={logo.wide ? 60 : 56}
                className={`h-10 w-auto object-contain sm:h-12 ${logo.wide ? "max-w-[180px] sm:max-w-[200px]" : "max-w-[120px] sm:max-w-[140px]"}`}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
