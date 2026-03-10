"use client";

import Image from "@/components/Img";
import { useState, useEffect, useCallback, useRef } from "react";
import type { HeroCardSlide } from "@/app/data/hero-card-slides";

const AUTO_ADVANCE_MS = 4000;

interface HeroCardProps {
  slides: HeroCardSlide[];
}

const PROGRESS_INTERVAL_MS = 50;

export function HeroCard({ slides }: HeroCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndexRef = useRef(0);
  currentIndexRef.current = currentIndex;

  const goToSlide = useCallback(
    (index: number) => {
      const next = (index + slides.length) % slides.length;
      setCurrentIndex(next);
      setProgress(0);
    },
    [slides.length]
  );

  const goToNext = useCallback(() => {
    const next = (currentIndexRef.current + 1) % slides.length;
    setCurrentIndex(next);
    setProgress(0);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + (PROGRESS_INTERVAL_MS / AUTO_ADVANCE_MS) * 100;
        if (next >= 100) {
          goToNext();
          return 0;
        }
        return next;
      });
    }, PROGRESS_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [goToNext, isPaused]);


  if (slides.length === 0) return null;

  const slide = slides[currentIndex];

  return (
    <article
      className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] overflow-hidden rounded-2xl bg-white shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Card image - stacked for smooth crossfade */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
        {slides.map((s, index) => (
          <Image
            key={index}
            src={s.image}
            alt={s.alt}
            fill
            className={`object-cover transition-opacity duration-300 ease-in-out ${
              index === currentIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 380px"
            unoptimized
          />
        ))}
      </div>

      {/* Content area - fixed min-height for consistent size */}
      <div className="flex min-h-[128px] flex-col p-6 pr-20">
        <div className="relative min-h-[3.5rem] flex-1">
          {slides.map((s, index) => (
            <h2
              key={index}
              className={`absolute inset-0 line-clamp-2 text-lg font-semibold leading-snug text-gray-900 transition-opacity duration-300 ease-in-out sm:text-xl ${
                index === currentIndex ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {s.title}
            </h2>
          ))}
        </div>

        {/* Carousel indicators - active expands with progress bar, inactive shrinks */}
        <div className="mt-4 flex shrink-0 items-center gap-2" role="tablist" aria-label="Seleccionar proyecto">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ver proyecto ${index + 1}`}
              onClick={() => goToSlide(index)}
              className="shrink-0 overflow-hidden rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-diensten-orange focus:ring-offset-2"
            >
              <span
                className={`relative flex h-2 rounded-full bg-gray-200 transition-[width] duration-250 ease-out hover:bg-gray-300 ${
                  index === currentIndex ? "w-16" : "w-4"
                }`}
              >
                {index === currentIndex && (
                  <span
                    className="absolute left-0 top-0 h-full rounded-full bg-diensten-orange transition-[width] duration-150 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* CTA button - bottom right */}
      <div className="absolute bottom-6 right-6">
        <a
          href={slide.url}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-diensten-orange text-white shadow-md transition-colors hover:bg-diensten-orange-dark focus:outline-none focus:ring-2 focus:ring-diensten-orange focus:ring-offset-2"
          aria-label={`Ver artículo: ${slide.title}`}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.5 19.5L19.5 4.5M19.5 4.5H10.5M19.5 4.5V13.5"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
