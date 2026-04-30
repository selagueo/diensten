"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Original display string, e.g. "30.000", "+1.000", "+19". */
  value: string;
  /** Animation duration in ms. */
  duration?: number;
  /** Delay before the count-up starts after entering the viewport. */
  delay?: number;
  className?: string;
};

function parseValue(raw: string): { prefix: string; number: number } {
  const prefixMatch = raw.match(/^[+-]/);
  const prefix = prefixMatch?.[0] ?? "";
  const number = parseInt(raw.replace(/[^\d]/g, ""), 10) || 0;
  return { prefix, number };
}

function format(n: number) {
  // Spanish thousand separator = "."
  return n.toLocaleString("es-AR");
}

/**
 * Counts up from 0 to the target value once the element scrolls into view.
 * Respects prefers-reduced-motion.
 */
export function CountUpNumber({
  value,
  duration = 2600,
  delay = 0,
  className,
}: Props) {
  const { prefix, number } = parseValue(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || startedRef.current) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setCurrent(number);
      startedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startAt = performance.now() + delay;
            const tick = (now: number) => {
              if (now < startAt) {
                requestAnimationFrame(tick);
                return;
              }
              const t = Math.min((now - startAt) / duration, 1);
              // easeOutExpo — long, smooth decelerate
              const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
              setCurrent(Math.round(eased * number));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [number, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(current)}
    </span>
  );
}
