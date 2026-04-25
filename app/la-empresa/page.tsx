import type { Metadata } from "next";
import Image from "@/components/Img";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "La Empresa",
  description:
    "Conocé Obras y Servicios Diensten S.A. - Especialistas en obras civiles, eléctricas, termomecánicas y telecomunicaciones.",
};

const SERVICIOS = [
  "Obras Civiles",
  "Obras Eléctricas",
  "Obras Termomecánicas",
  "Diseño y despliegue de redes de voz y datos",
  "Provisión de equipamiento de telecomunicaciones para voz y datos",
  "Provisión de infraestructura para redes de telecomunicaciones",
  "Servicios de Instalación, Puesta en Servicio y Mantenimiento de redes de telecomunicaciones",
];

const MERCADOS = [
  { label: "Empresas", icon: "office" },
  { label: "Operadores", icon: "tower" },
  { label: "Cooperativas", icon: "handshake" },
  { label: "Gobierno", icon: "building" },
  { label: "Countries", icon: "home" },
];

const VALORES = ["Calidad", "Experiencia", "Compromiso"];

const LOGROS = [
  { value: "30.000", unit: "m²", label: "construidos" },
  { value: "70.000", unit: "m²", label: "de oficinas comerciales" },
  { value: "+1.000", unit: "", label: "sitios de Telefonía" },
  { value: "+150", unit: "", label: "locales comerciales" },
  { value: "+19", unit: "", label: "años de trayectoria" },
];

export default function LaEmpresaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center justify-start pt-28 pb-24 sm:pt-32 lg:pt-36">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/la-empresa-hero.png"
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-diensten-orange sm:text-base">
                Proyectar <span className="text-white/60">·</span> Construir <span className="text-white/60">·</span> Desarrollar
              </p>
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
                La Empresa
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Contribuyendo al desarrollo de obras mediante productos y servicios
                de alta calidad en todo el país.
              </p>
            </div>
          </Container>
        </section>

        {/* Servicios - Qué hacemos y prestaciones */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-[1fr,400px] lg:gap-16 lg:items-start">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
                    Servicios
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Soluciones integrales de alta calidad
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    En Diensten nuestro objetivo fundamental es contribuir al
                    desarrollo de obras mediante la provisión de productos y
                    servicios de alta calidad. Trabajamos con estándares técnicos
                    exigentes, personal capacitado y procesos eficientes que
                    garantizan resultados confiables y duraderos.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Buscamos superar las expectativas de nuestros clientes,
                    ofreciendo soluciones integrales, responsables y seguras,
                    adaptadas a cada proyecto. Nuestra misión se basa en el
                    compromiso, la mejora continua y el respeto por el tiempo,
                    los recursos y el entorno para un futuro sostenible común.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {SERVICIOS.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-diensten-orange"
                          aria-hidden
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square lg:sticky lg:top-24">
                  <Image
                    src="/about-section.png"
                    alt="Profesionales de Diensten en obra"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Logros / Stats */}
        <section className="bg-[#1E3A42] py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
                  Trayectoria
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Desde 2007 generamos valor para cada cliente
                </h2>
              </div>
              <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
                {LOGROS.map((l) => (
                  <div key={l.label} className="text-center">
                    <dt className="sr-only">{l.label}</dt>
                    <dd>
                      <span className="block text-3xl font-bold text-diensten-orange sm:text-4xl">
                        {l.value}
                        {l.unit && (
                          <span className="text-2xl sm:text-3xl">{l.unit}</span>
                        )}
                      </span>
                      <span className="mt-2 block text-sm text-white/80">
                        {l.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-10 text-center text-white/80">
                Asociaciones a largo plazo con empresas multinacionales y
                ejecución de proyectos a nivel nacional e internacional.
              </p>
            </div>
          </Container>
        </section>

        {/* Visión, Misión y Valores */}
        <section id="vision" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
                  Visión, Misión y Valores
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Donde la calidad es nuestro estándar
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
                  En 2007 iniciamos nuestro camino con la misión de aportar al
                  desarrollo de obras mediante productos y servicios de alta
                  calidad. Hoy, como Grupo Diensten, ofrecemos soluciones
                  integrales guiados por una filosofía común orientada a la
                  excelencia y a la satisfacción de nuestros clientes.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
                {/* Visión */}
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="text-xl font-bold text-diensten-orange">
                    Visión
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Ser líderes en la provisión de servicios y productos
                    combinando prestaciones a través de una creativa ingeniería
                    de producto.
                  </p>
                </div>

                {/* Misión */}
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="text-xl font-bold text-diensten-orange">
                    Misión
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Brindamos soluciones orientadas a la satisfacción del
                    cliente, actuando con ética y compromiso, y generando valor
                    a través de un equipo motivado y en constante desarrollo.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:mt-8">
                <h3 className="text-xl font-bold text-diensten-orange">
                  Valores
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                  {VALORES.map((v, i) => (
                    <div key={v} className="flex items-center gap-3 sm:gap-4">
                      <span className="rounded-full bg-diensten-orange/10 px-5 py-2 text-base font-semibold text-diensten-orange sm:text-lg">
                        {v}
                      </span>
                      {i < VALORES.length - 1 && (
                        <span className="text-gray-300" aria-hidden>
                          —
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Política de Cumplimiento */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-[380px,1fr] lg:gap-16 lg:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[3/4]">
                  <Image
                    src="/obras-hero.png"
                    alt="Obras y proyectos Diensten"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Política de Cumplimiento
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    OBRAS Y SERVICIOS DIENSTEN S.A. implementa en sus procesos
                    los más altos estándares de calidad, con el objetivo de
                    asegurar el cumplimiento de los requerimientos de los
                    clientes.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Entre estos requerimientos se encuentra el de obtención de
                    precios ajustados a la realidad del mercado y del país. Para
                    ello trabajamos constantemente sobre la optimización de las
                    compras y contrataciones, a fin de ofrecer al mercado los
                    precios más competitivos.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    La alta calidad de los productos y servicios suministrados
                    asegura la reducción de los costos de mantenimiento para el
                    futuro, con la consecuente reducción en los costos de
                    operación de las redes.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Clientes y Mercado */}
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
                    Clientes
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Nuestro activo más importante
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Diensten considera a los clientes como su activo más
                    importante, por lo cual todos sus integrantes tienen como
                    objetivo lograr la satisfacción de los mismos, tratando
                    continuamente de superar las expectativas, cubriendo no sólo
                    las necesidades manifiestas sino también aquellas que
                    pudieran existir sin descubrir.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Entendemos que de esta manera seremos elegidos
                    permanentemente como proveedores confiables y atractivos
                    para nuestros clientes.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
                    Mercado
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Atención segmentada con alcance nacional
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Dado que no todos los clientes poseen las mismas necesidades
                    y con el objetivo de brindar un asesoramiento especializado,
                    Diensten cuenta con áreas diferenciadas según el tipo de
                    compañía y sus objetivos. Esta organización nos permite
                    ofrecer soluciones específicas y eficientes para cada
                    proyecto.
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {MERCADOS.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-diensten-orange/10 text-diensten-orange">
                          <MercadoIcon name={m.icon} />
                        </span>
                        <span className="font-semibold text-gray-900">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg font-medium text-gray-700">
                    Capacidad operativa para realizar obras en todo el
                    territorio nacional.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Experiencia */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-[1fr,400px] lg:gap-16 lg:items-center">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-diensten-orange">
                    Experiencia
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Experiencia que construye confianza
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Nuestra experiencia nos ha permitido crecer y consolidar
                    relaciones duraderas con nuestros clientes, basadas en la
                    confianza, la seguridad y la satisfacción mutua.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    A lo largo de nuestra trayectoria fortalecimos procesos y
                    capacidades, permitiéndonos desarrollarnos y construir
                    vínculos sólidos con cada cliente, con el objetivo de
                    garantizar su satisfacción mediante un servicio profesional
                    de calidad.
                  </p>
                  <Link
                    href="/contacto"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-diensten-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-diensten-orange-dark"
                  >
                    Contactanos
                    <svg
                      className="h-5 w-5 shrink-0"
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
                  </Link>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
                  <Image
                    src="/hero-background.png"
                    alt="Equipo Diensten en obra"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
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

function MercadoIcon({ name }: { name: string }) {
  const iconClass = "h-5 w-5";
  switch (name) {
    case "office":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "tower":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case "handshake":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0m-3 6a1.5 1.5 0 013 0m0 0v.5"
          />
        </svg>
      );
    case "building":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case "home":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    default:
      return null;
  }
}
