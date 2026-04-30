"use client";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const LOGOS: { src: string; alt: string; wide?: boolean }[] = [
  // Telcos
  { src: "/logo-telecom.webp", alt: "Telecom" },
  { src: "/logo-movistar.webp", alt: "Movistar" },
  { src: "/logo-personal.webp", alt: "Personal" },
  { src: "/logo-claro.webp", alt: "Claro" },
  { src: "/logo-telefonica.webp", alt: "Telefónica" },
  // Media
  { src: "/logo-radio-nacional.webp", alt: "Radio Nacional", wide: true },
  { src: "/logo-telefe.webp", alt: "Telefe" },
  // Banks
  { src: "/logo-banco-nacion.webp", alt: "Banco Nación", wide: true },
  { src: "/logo-supervielle.webp", alt: "Supervielle" },
  { src: "/logo-hsbc.webp", alt: "HSBC" },
  // Industry & energy
  { src: "/logo-impsa.webp", alt: "IMPSA", wide: true },
  { src: "/logo-ypf.webp", alt: "YPF" },
  { src: "/Stellantis.webp", alt: "Stellantis", wide: true },
  // Government / municipalities
  { src: "/logo-buenos-aires.webp", alt: "Buenos Aires Gobierno de la Ciudad", wide: true },
  { src: "/3defebrero.webp", alt: "Municipalidad de 3 de Febrero" },
  { src: "/vicentelopez.webp", alt: "Vivamos Vicente López" },
  // Education & consulting
  { src: "/LogoUADE.webp", alt: "UADE" },
  { src: "/logo-accenture.webp", alt: "Accenture" },
  // Transport & infrastructure
  { src: "/logo-trenes-argentinos.webp", alt: "Trenes Argentinos" },
  { src: "/logo_enohsaa.webp", alt: "ENOHSA", wide: true },
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

        <div className="brands-scroll flex w-max items-center gap-14 sm:gap-20 md:gap-24">
          {logos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex h-14 shrink-0 items-center justify-center sm:h-16"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE_PATH}${logo.src}`}
                alt={logo.alt}
                className={`h-12 w-auto object-contain sm:h-14 ${logo.wide ? "max-w-[200px] sm:max-w-[220px]" : "max-w-[130px] sm:max-w-[150px]"}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
