import Image from "@/components/Img";
import Link from "next/link";
import { Container } from "../Container";

const PHONES = ["+54 9 4567-0841", "+54 9 4567-0851"];
const EMAIL = "info@diensten.com.ar";
const SEDE = {
  label: "Sede Central - Buenos Aires",
  address: "Av. Segurola 1502 CP 1407 CABA, Bs As, Argentina",
  href: "https://maps.app.goo.gl/FTZET2ND16uVfYG29",
};

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/obras-y-servicios-diensten-sa/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/osdiensten",
    icon: "instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1E3A42] text-white" role="contentinfo">
      {/* Subtle top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <Container>
        {/* Main grid — mobile-first, scales to 12 cols on lg */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 sm:py-16 lg:grid-cols-12 lg:gap-x-12 lg:py-20">
          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              aria-label="Diensten — Inicio"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <Image
                src="/diensten-logo-simple.png"
                alt="Diensten"
                width={160}
                height={160}
                className="h-20 w-20 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
                unoptimized
              />
            </Link>
          </div>

          {/* Contact block */}
          <div className="lg:col-span-3">
            <SectionLabel>Contacto</SectionLabel>
            <ul className="mt-5 space-y-3 text-sm">
              {PHONES.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="group inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                  >
                    <IconBadge>
                      <PhoneIcon />
                    </IconBadge>
                    <span className="tabular-nums">{phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <IconBadge>
                    <MailIcon />
                  </IconBadge>
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Office block */}
          <div className="lg:col-span-3">
            <SectionLabel>Oficina</SectionLabel>
            <a
              href={SEDE.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-start gap-3 text-sm text-white/90 transition-colors hover:text-white"
            >
              <IconBadge>
                <LocationIcon />
              </IconBadge>
              <span>
                <span className="block font-medium text-white">
                  {SEDE.label}
                </span>
                <span className="mt-1 block text-white/65 group-hover:text-white/80">
                  {SEDE.address}
                </span>
              </span>
            </a>
          </div>

          {/* Connect block */}
          <div className="lg:col-span-2">
            <SectionLabel>Seguinos</SectionLabel>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-diensten-orange/60 hover:bg-diensten-orange hover:text-white"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
              <Link
                href="/contacto"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-xs font-medium tracking-wide text-white/85 transition-all hover:-translate-y-0.5 hover:border-diensten-orange/60 hover:bg-diensten-orange hover:text-white"
              >
                Contactanos
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col-reverse items-start gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Diensten.</p>
          <p>
            Powered by{" "}
            <a
              href="https://gudcod.com"
              target="_blank"
              rel="noopener noreferrer"
              className="italic transition-colors hover:text-diensten-orange"
              style={{
                color: "#90A0BF",
                fontFamily: "var(--font-archivo), system-ui, sans-serif",
                letterSpacing: "-0.06em",
                fontWeight: 900,
              }}
            >
              GUDCOD
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
      {children}
    </h2>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:border-diensten-orange/40 group-hover:text-diensten-orange">
      {children}
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  const iconClass = "h-4 w-4";
  switch (name) {
    case "linkedin":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    default:
      return null;
  }
}
