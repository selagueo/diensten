import Image from "@/components/Img";
import Link from "next/link";
import { Container } from "../Container";

const LEGAL_LINKS_LEFT = [
  { label: "Sede Central - Buenos Aires", address: "Av. Segurola 1502 CP 1407 CABA, Bs As, Argentina", href: "https://maps.app.goo.gl/FTZET2ND16uVfYG29", targetBlank: true, icon: "location" },
  { label: "Sede Cuyo - Mendoza", address: "Mitre 825, Mendoza, Argentina", href: "https://maps.app.goo.gl/W8ziXJHHJ5sgcd118", targetBlank: true, icon: "location" },
];

const LEGAL_LINKS_RIGHT = [
  { label: "Política de Privacidad", href: "#", icon: "privacy" },
  { label: "Contactanos", href: "/contacto", icon: "contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/obras-y-servicios-diensten-sa/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/osdiensten", icon: "instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[#1E3A42]" role="contentinfo">
      {/* Top divider */}
      <div className="border-t border-gray-500/40" />

      <Container>
        {/* Mobile: stacked layout. Desktop: 4-column grid from 1024px */}
        <div className="flex flex-col gap-10 py-12 min-[1024px]:grid min-[1024px]:grid-cols-[1fr,auto,auto,1fr] min-[1024px]:items-center min-[1024px]:gap-x-8 min-[1024px]:gap-y-0 min-[1024px]:py-12">
          {/* Block 1: Logo + Contact - row on all sizes */}
          <div className="flex min-w-0 flex-row items-center gap-6 min-[1024px]:gap-8">
            <Link href="/" className="w-fit shrink-0" aria-label="Diensten - Inicio">
              <Image
                src="/diensten-logo-simple.png"
                alt="Diensten"
                width={96}
                height={96}
                className="h-24 w-24 sm:h-28 sm:w-28 min-[1024px]:h-32 min-[1024px]:w-32"
                unoptimized
              />
            </Link>
            <div className="flex min-w-0 flex-col gap-2 text-sm text-white min-[1024px]:text-xs">
              <span className="-mx-1 -my-0.5 inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-1 py-1.5 text-white">
                <span className="shrink-0 text-gray-400">
                  <LegalLinkIcon name="phone" />
                </span>
                +54 9 4567-0841
              </span>
              <span className="-mx-1 -my-0.5 inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-1 py-1.5 text-white">
                <span className="shrink-0 text-gray-400">
                  <LegalLinkIcon name="phone" />
                </span>
                +54 9 4567-0851
              </span>
              <a href="mailto:info@diensten.com" className="-mx-1 -my-0.5 inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-1 py-1.5 text-white hover:text-gray-200">
                <span className="shrink-0 text-gray-400">
                  <LegalLinkIcon name="mail" />
                </span>
                info@diensten.com.ar
              </a>
            </div>
          </div>

          {/* Block 2: Legal links - single column on mobile, 2 columns on desktop */}
          <div className="flex flex-col gap-6 min-[1024px]:contents">
            {/* Mobile: all links in one vertical list */}
            <nav className="flex flex-col gap-4 text-sm min-[1024px]:hidden" aria-label="Enlaces legales y políticas">
              {LEGAL_LINKS_LEFT.map((link) => {
                const linkContent = (
                  <>
                    {"icon" in link && link.icon && (
                      <span className="shrink-0 text-gray-400">
                        <LegalLinkIcon name={link.icon} />
                      </span>
                    )}
                    <span className="flex flex-col">
                      <span>{link.label}</span>
                      {"address" in link && link.address && (
                        <span className="mt-0.5 text-[11px] leading-tight text-gray-400">{link.address}</span>
                      )}
                    </span>
                  </>
                );
                return "targetBlank" in link && link.targetBlank ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-1 -my-0.5 inline-flex shrink-0 items-start gap-1.5 px-1 py-1.5 text-gray-300 hover:text-gray-200"
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className="-mx-1 -my-0.5 inline-flex shrink-0 items-start gap-1.5 px-1 py-1.5 text-gray-300 hover:text-gray-200">
                    {linkContent}
                  </Link>
                );
              })}
              {LEGAL_LINKS_RIGHT.map((link) => {
                const linkClass = "-mx-1 -my-0.5 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-1 py-1.5 text-gray-300 hover:text-gray-200";
                const content = (
                  <>
                    {"icon" in link && link.icon && (
                      <span className="shrink-0 text-gray-400">
                        <LegalLinkIcon name={link.icon} />
                      </span>
                    )}
                    {link.label}
                  </>
                );
                return (
                  <Link key={link.label} href={link.href} className={linkClass}>
                    {content}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop: column 1 - Sede links */}
            <nav className="hidden flex-col gap-4 text-sm min-[1024px]:ml-12 min-[1024px]:flex min-[1024px]:text-xs" aria-label="Enlaces legales">
              {LEGAL_LINKS_LEFT.map((link) => {
                const linkContent = (
                  <>
                    {"icon" in link && link.icon && (
                      <span className="shrink-0 text-gray-400">
                        <LegalLinkIcon name={link.icon} />
                      </span>
                    )}
                    <span className="flex flex-col">
                      <span>{link.label}</span>
                      {"address" in link && link.address && (
                        <span className="mt-0.5 text-[11px] leading-tight text-gray-400">{link.address}</span>
                      )}
                    </span>
                  </>
                );
                const linkClass = "-mx-1 -my-0.5 inline-flex shrink-0 items-start gap-1.5 px-1 py-1.5 text-gray-300 hover:text-gray-200";
                return "targetBlank" in link && link.targetBlank ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {linkContent}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className={linkClass}>
                    {linkContent}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop: column 2 - Políticas links */}
            <nav className="hidden flex-col gap-2 text-sm min-[1024px]:ml-4 min-[1024px]:flex min-[1024px]:text-xs" aria-label="Políticas">
              {LEGAL_LINKS_RIGHT.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="-mx-1 -my-0.5 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-1 py-1.5 text-gray-300 hover:text-gray-200"
                >
                  {"icon" in link && link.icon && (
                    <span className="shrink-0 text-gray-400">
                      <LegalLinkIcon name={link.icon} />
                    </span>
                  )}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Block 3: Social icons - right-aligned, shrink to fit on desktop */}
          <div className="flex w-full items-start justify-end gap-3 min-[1024px]:ml-auto min-[1024px]:w-fit">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-gray-800 transition-colors hover:bg-diensten-orange hover:text-white"
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright + Powered by halfpipe */}
        <div className="border-t border-gray-500/30 py-6">
          <p className="text-right text-sm text-gray-400 min-[1024px]:text-xs">
            © {new Date().getFullYear()} Diensten. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function LegalLinkIcon({ name }: { name: string }) {
  const iconClass = "h-3.5 w-3.5";
  switch (name) {
    case "location":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "privacy":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case "mail":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "terms":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "contact":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      );
    default:
      return null;
  }
}

function SocialIcon({ name }: { name: string }) {
  const iconClass = "h-4 w-4";
  switch (name) {
    case "linkedin":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    default:
      return null;
  }
}
