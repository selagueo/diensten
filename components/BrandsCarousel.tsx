"use client";

import { useEffect, useRef } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const LOGOS: { src: string; alt: string; wide?: boolean }[] = [
  // Telcos
  { src: "/logo-telecom.png", alt: "Telecom" },
  { src: "/logo-movistar.png", alt: "Movistar" },
  { src: "/logo-personal.png", alt: "Personal" },
  { src: "/logo-claro.png", alt: "Claro" },
  { src: "/logo-telefonica.png", alt: "Telefónica" },
  // Media
  { src: "/logo-radio-nacional.png", alt: "Radio Nacional", wide: true },
  { src: "/logo-telefe.png", alt: "Telefe" },
  // Banks
  { src: "/logo-banco-nacion.png", alt: "Banco Nación", wide: true },
  { src: "/logo-supervielle.png", alt: "Supervielle" },
  { src: "/logo-hsbc.png", alt: "HSBC" },
  // Industry & energy
  { src: "/logo-impsa.png", alt: "IMPSA", wide: true },
  { src: "/logo-ypf.png", alt: "YPF" },
  { src: "/Stellantis.png", alt: "Stellantis", wide: true },
  // Government / municipalities
  { src: "/logo-buenos-aires.png", alt: "Buenos Aires Gobierno de la Ciudad", wide: true },
  { src: "/3defebrero.png", alt: "Municipalidad de 3 de Febrero" },
  { src: "/vicentelopez.png", alt: "Vivamos Vicente López" },
  // Education & consulting
  { src: "/LogoUADE.png", alt: "UADE" },
  { src: "/logo-accenture.png", alt: "Accenture" },
  // Transport & infrastructure
  { src: "/logo-trenes-argentinos.png", alt: "Trenes Argentinos" },
  { src: "/logo_enohsaa.png", alt: "ENOHSA", wide: true },
];

// Pixels per second — tune to taste
const SPEED = 60;

export function BrandsCarousel() {
  const logos = [...LOGOS, ...LOGOS]; // Duplicate for seamless loop
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // Honor reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let lastTs = 0;
    let pos = 0; // float accumulator (scrollLeft is integer-rounded)
    let userInteracting = false;

    const step = (ts: number) => {
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      // scrollWidth = total content; we duplicated logos so half is one full set.
      const half = viewport.scrollWidth / 2;

      if (!userInteracting && half > 0) {
        // If the user has scrolled, sync our accumulator with the real position.
        if (Math.abs(pos - viewport.scrollLeft) > 2) pos = viewport.scrollLeft;

        pos = pos + SPEED * dt;
        if (pos >= half) pos -= half;
        viewport.scrollLeft = pos;
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    const onTouchStart = () => {
      userInteracting = true;
    };
    const onTouchEnd = () => {
      userInteracting = false;
      lastTs = 0; // avoid jump after pause
      pos = viewport.scrollLeft; // resume from wherever the user left it
    };

    viewport.addEventListener("touchstart", onTouchStart, { passive: true });
    viewport.addEventListener("touchend", onTouchEnd, { passive: true });
    viewport.addEventListener("touchcancel", onTouchEnd, { passive: true });

    // Pause when tab hidden
    const onVisibility = () => {
      if (document.hidden) {
        userInteracting = true; // re-use the flag to halt
      } else {
        userInteracting = false;
        lastTs = 0;
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchend", onTouchEnd);
      viewport.removeEventListener("touchcancel", onTouchEnd);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

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

      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-20"
          aria-hidden
        />

        <div
          ref={viewportRef}
          className="brands-viewport overflow-x-auto overflow-y-hidden"
        >
          <div className="flex w-max items-center gap-14 sm:gap-20 md:gap-24">
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
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
