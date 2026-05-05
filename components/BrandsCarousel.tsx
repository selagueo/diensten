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
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Honor reduced-motion preference
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let rafId = 0;
    let lastTs = 0;

    const step = (ts: number) => {
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      if (!pausedRef.current) {
        // Half the track width is one full set of logos (we duplicated above)
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          offsetRef.current = (offsetRef.current + SPEED * dt) % halfWidth;
          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
      lastTs = 0; // Avoid jump after long pause
    };

    // Pause on real interaction; resume when it ends
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume, { passive: true });
    track.addEventListener("touchcancel", resume, { passive: true });
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    // Pause when tab is hidden, resume when visible
    const onVisibility = () => {
      if (document.hidden) pause();
      else resume();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
      track.removeEventListener("touchcancel", resume);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
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

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-20"
          aria-hidden
        />

        <div
          ref={trackRef}
          className="flex w-max items-center gap-14 will-change-transform sm:gap-20 md:gap-24"
        >
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
