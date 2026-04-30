import type { Metadata } from "next";
import Image from "@/components/Img";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Conocé a los clientes que confían en Diensten.",
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Client = { src: string; alt: string };

const CLIENT_CATEGORIES: { title: string; clients: Client[] }[] = [
  {
    title: "Telecomunicaciones y Medios",
    clients: [
      { src: "/logo-telecom.webp", alt: "Telecom" },
      { src: "/logo-movistar.webp", alt: "Movistar" },
      { src: "/logo-personal.webp", alt: "Personal" },
      { src: "/logo-claro.webp", alt: "Claro" },
      { src: "/logo-telefonica.webp", alt: "Telefónica" },
      { src: "/logo-radio-nacional.webp", alt: "Radio Nacional" },
      { src: "/logo-telefe.webp", alt: "Telefe" },
    ],
  },
  {
    title: "Bancos y Finanzas",
    clients: [
      { src: "/logo-banco-nacion.webp", alt: "Banco Nación" },
      { src: "/logo-supervielle.webp", alt: "Supervielle" },
      { src: "/logo-hsbc.webp", alt: "HSBC" },
    ],
  },
  {
    title: "Industria y Energía",
    clients: [
      { src: "/logo-impsa.webp", alt: "IMPSA" },
      { src: "/logo-ypf.webp", alt: "YPF" },
      { src: "/Stellantis.webp", alt: "Stellantis" },
    ],
  },
  {
    title: "Gobierno",
    clients: [
      { src: "/logo-buenos-aires.webp", alt: "Buenos Aires Gobierno de la Ciudad" },
      { src: "/3defebrero.webp", alt: "Municipalidad de 3 de Febrero" },
      { src: "/vicentelopez.webp", alt: "Vivamos Vicente López" },
    ],
  },
  {
    title: "Otros Sectores",
    clients: [
      { src: "/LogoUADE.webp", alt: "UADE" },
      { src: "/logo-accenture.webp", alt: "Accenture" },
      { src: "/logo-trenes-argentinos.webp", alt: "Trenes Argentinos" },
      { src: "/logo_enohsaa.webp", alt: "ENOHSA" },
    ],
  },
];

export default function ClientesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero / Banner section - image extends behind fixed header */}
        <section className="relative flex min-h-[70vh] items-center justify-start pt-28 pb-24 sm:pt-32 lg:pt-36">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/clientes-hero.webp"
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
                Clientes
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Nuestro activo más importante. Empresas líderes que eligen a
                Diensten como proveedor confiable para sus proyectos.
              </p>
            </div>
          </Container>
        </section>

        {/* Philosophy */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
                Nuestra filosofía
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Superamos expectativas en cada proyecto
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Diensten considera a los clientes como su activo más importante,
                por lo cual todos sus integrantes tienen como objetivo lograr la
                satisfacción de los mismos, tratando continuamente de superar
                las expectativas, cubriendo no sólo las necesidades manifiestas
                sino también aquellas que pudieran existir sin descubrir.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Entendemos que de esta manera seremos elegidos permanentemente
                como proveedores confiables y atractivos para nuestros clientes.
              </p>
            </div>
          </Container>
        </section>

        {/* Categorized clients grid */}
        <section
          className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20 lg:py-24"
          aria-labelledby="clients-heading"
        >
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
                  Nuestros clientes
                </p>
                <h2
                  id="clients-heading"
                  className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Presentes en múltiples sectores
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                  Trabajamos con compañías líderes en telecomunicaciones,
                  finanzas, industria, gobierno y más.
                </p>
              </div>

              <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-16 lg:space-y-20">
                {CLIENT_CATEGORIES.map((cat) => (
                  <div key={cat.title}>
                    {/* Category header with divider line */}
                    <div className="mb-6 flex items-center gap-4 sm:mb-8">
                      <h3 className="shrink-0 text-xs font-bold uppercase tracking-[0.28em] text-gray-900 sm:text-sm">
                        {cat.title}
                      </h3>
                      <span
                        className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent"
                        aria-hidden
                      />
                      <span
                        className="shrink-0 font-mono text-xs font-semibold text-diensten-orange sm:text-sm"
                        aria-hidden
                      >
                        {String(cat.clients.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Logos grid */}
                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:gap-6">
                      {cat.clients.map((c) => (
                        <li key={c.alt}>
                          <div className="group flex aspect-[5/2] items-center justify-center rounded-xl border border-gray-200/70 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-diensten-orange/40 hover:shadow-md sm:p-5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`${BASE_PATH}${c.src}`}
                              alt={c.alt}
                              title={c.alt}
                              className="max-h-12 w-auto max-w-[85%] object-contain transition-transform duration-200 group-hover:scale-[1.04] sm:max-h-14"
                              loading="lazy"
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
