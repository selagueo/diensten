"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Container } from "../Container";

const SCROLL_THRESHOLD = 80;

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "INICIO", href: "/" },
  { label: "LA EMPRESA", href: "/la-empresa" },
  { label: "OBRAS", href: "/obras" },
  { label: "CLIENTES", href: "/clientes" },
  { label: "CONTACTO", href: "/contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-t-[3px] border-diensten-orange bg-gray-100/80 backdrop-blur-md transition-all duration-300 ease-in-out"
      role="banner"
    >
      <Container>
        <nav
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
          }`}
          aria-label="Navegación principal"
        >
          <Link
            href="/"
            className="relative flex items-center shrink-0 transition-all duration-300 ease-in-out"
            aria-label="Diensten - Obras y Servicios - Inicio"
          >
            <span className="relative flex items-center">
              <Image
                src="/diensten-logo.png"
                alt="Diensten - Obras y Servicios"
                width={377}
                height={118}
                className={`transition-all duration-300 ease-in-out ${
                  isScrolled
                    ? "absolute opacity-0 pointer-events-none h-0 w-0"
                    : "h-12 w-auto sm:h-14 md:h-16 opacity-100"
                }`}
                priority
              />
              <Image
                src="/diensten-logo-simple.png"
                alt="Diensten"
                width={96}
                height={96}
                className={`transition-all duration-300 ease-in-out ${
                  isScrolled
                    ? "h-8 w-8 opacity-100 sm:h-9 sm:w-9 md:h-10 md:w-10"
                    : "absolute opacity-0 pointer-events-none h-0 w-0"
                }`}
              />
            </span>
          </Link>

          <ul className="ml-auto hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href.startsWith("#")
                  ? pathname === "/" && hash === item.href
                  : pathname === item.href;
              return (
                <li key={item.href} className="flex items-center">
                  <a
                    href={item.href}
                    className="relative block pb-1.5 pt-1.5 text-xs font-bold uppercase tracking-widest text-black hover:text-black/80"
                  >
                    {item.label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-diensten-orange"
                        aria-hidden
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black hover:text-black/80 md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <ul className="border-t border-gray-200 py-4 md:hidden">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href.startsWith("#")
                  ? pathname === "/" && hash === item.href
                  : pathname === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-widest text-black ${
                      active ? "text-diensten-orange" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {active && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-diensten-orange"
                        aria-hidden
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </header>
  );
}
