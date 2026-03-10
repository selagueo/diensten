import type { Metadata } from "next";
import Image from "@/components/Img";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Diensten - Obras y Servicios. Estamos en Buenos Aires y Mendoza.",
};

const CONTACT_INFO = [
  {
    label: "Email",
    value: "info@diensten.com.ar",
    href: "mailto:info@diensten.com.ar",
    icon: "mail",
  },
  {
    label: "Teléfonos",
    icon: "phone",
    phones: [
      { value: "+54 9 4567-0841" },
      { value: "+54 9 4567-0851" },
    ],
  },
  {
    label: "Sede Central",
    value: "Av. Segurola 1502 CP 1407 CABA, Bs As, Argentina",
    href: "https://maps.app.goo.gl/FTZET2ND16uVfYG29",
    icon: "location",
    targetBlank: true,
  },
  {
    label: "Sede Cuyo",
    value: "Mitre 825, Mendoza, Argentina",
    href: "https://maps.app.goo.gl/W8ziXJHHJ5sgcd118",
    icon: "location",
    targetBlank: true,
  },
];

function ContactIcon({ name }: { name: string }) {
  const iconClass = "h-5 w-5 shrink-0 text-diensten-orange";
  switch (name) {
    case "mail":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case "location":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero / Banner section - image extends behind fixed header */}
        <section className="relative flex min-h-[70vh] items-center justify-start pt-28 pb-24 sm:pt-32 lg:pt-36">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/contacto-hero.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden />
          </div>
          <Container className="relative z-10 flex flex-1 flex-col items-start justify-center">
            <div className="max-w-3xl text-left">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
                Contacto
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Estamos para ayudarte. Escribinos o visitanos en nuestras sedes.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact form + info */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-[1fr,380px] lg:gap-12 lg:items-start">
                {/* Contact form */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Escribinos</h2>
                  <p className="mt-2 text-gray-600">
                    Completá el formulario y nos pondremos en contacto a la brevedad.
                  </p>
                  <ContactForm className="mt-6" />
                </div>

                {/* Contact info */}
                <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 lg:p-8">
                  <h2 className="text-2xl font-bold text-gray-900">Dónde estamos</h2>
                  <p className="mt-2 text-gray-600">
                    Visitanos en Buenos Aires o Mendoza, o contactanos por teléfono o email.
                  </p>
                  <ul className="mt-6 space-y-5">
                    {CONTACT_INFO.map((item) => (
                      <li key={item.label} className="flex gap-4">
                        <ContactIcon name={item.icon} />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                          {"phones" in item && item.phones ? (
                            <div className="mt-0.5 space-y-1">
                              {item.phones.map((phone) => (
                                <span
                                  key={phone.value}
                                  className="block text-gray-600"
                                >
                                  {phone.value}
                                </span>
                              ))}
                            </div>
                          ) : item.href !== "#" ? (
                            <a
                              href={item.href}
                              target={item.targetBlank ? "_blank" : undefined}
                              rel={item.targetBlank ? "noopener noreferrer" : undefined}
                              className="mt-0.5 block text-gray-600 hover:text-diensten-orange"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-gray-600">{item.value}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
