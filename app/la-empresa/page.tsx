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
  "Obras Eléctricas (baja y media tensión)",
  "Obras Termomecánicas",
  "Obras cloacales",
  "Diseño y despliegue de redes de voz y datos",
  "Provisión de equipamiento de telecomunicaciones para voz y datos",
  "Provisión de infraestructura para redes de telecomunicaciones",
  "Servicios de Instalación, Puesta en Servicio y Mantenimiento de redes de telecomunicaciones",
];

const MERCADOS = [
  { label: "Operadores", icon: "tower" },
  { label: "Cooperativas", icon: "handshake" },
  { label: "Gobierno", icon: "building" },
  { label: "Countries", icon: "home" },
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
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
                La Empresa
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Contribuyendo a la realización de obras con productos y servicios
                de alta calidad en todo el país.
              </p>
            </div>
          </Container>
        </section>

        {/* La Empresa - Quiénes somos y servicios */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-[1fr,400px] lg:gap-16 lg:items-start">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Obras y Servicios Diensten S.A.
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Hemos sido creados con el objetivo fundamental de contribuir
                    a la realización de obras con productos y servicios de alta
                    calidad. Bajo esta premisa, nos hemos especializado en las
                    siguientes prestaciones:
                  </p>
                  <ul className="space-y-3">
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
                  <p className="text-lg leading-relaxed text-gray-600">
                    El <strong className="text-gray-900">GRUPO DIENSTEN</strong>{" "}
                    busca ofrecer a través de sus empresas soluciones integrales
                    con el objetivo de satisfacer las demandas de nuestros
                    clientes. Cada una tiene objetivos distintos pero comparten
                    la filosofía de ofrecer productos y servicios de alta
                    calidad.
                  </p>
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

        {/* Visión, Misión y Valores */}
        <section id="vision" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nuestra Visión, Valores y Compromisos
              </h2>

              <div className="mt-12 grid gap-10 lg:gap-16">
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
                  <ol className="mt-3 space-y-2 text-gray-600">
                    <li>
                      <strong>1.</strong> Obtener satisfacción de nuestros
                      clientes brindando servicios acorde a sus necesidades y
                      exhibiendo en cada operación compromiso de superar sus
                      expectativas.
                    </li>
                    <li>
                      <strong>2.</strong> Construir un ambiente de trabajo
                      agradable alcanzando un alto grado de motivación,
                      promoviendo la capacitación permanente y desarrollando la
                      actitud de servicio.
                    </li>
                    <li>
                      <strong>3.</strong> Mantener un compromiso ético en las
                      operaciones comerciales.
                    </li>
                    <li>
                      <strong>4.</strong> Generar valor para los clientes,
                      proveedores, empleados y accionistas.
                    </li>
                  </ol>
                </div>
              </div>

              <p className="mt-10 text-center text-gray-600 lg:mx-auto lg:max-w-3xl">
                Para cumplir con las prestaciones indicadas, GRUPO DIENSTEN
                articula una importante sinergia con diversas empresas del
                mercado que comparten su visión y Política de Cumplimiento,
                actuando como representante comercial o asociado según los
                requerimientos del cliente.
              </p>
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
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Clientes
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    OBRAS Y SERVICIOS DIENSTEN S.A. considera a los clientes
                    como su activo más importante. Todos nuestros integrantes
                    tienen como objetivo lograr la satisfacción de los mismos,
                    tratando continuamente de superar las expectativas, cubriendo
                    no sólo las necesidades manifiestas sino también aquellas
                    que pudieran existir sin descubrir.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Entendemos que de esta manera seremos elegidos
                    permanentemente como proveedores confiables y atractivos para
                    nuestros clientes.
                  </p>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Mercado
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Dado que no todos los clientes tienen las mismas
                    necesidades, y con el objetivo de contar con verdaderos
                    especialistas a la hora de asesorarlos, DIENSTEN cuenta con
                    áreas diferenciadas por tipo de compañía:
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
                    Tenemos la capacidad de realizar obras en todo el país.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Experiencia y Equipo */}
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-[1fr,400px] lg:gap-16 lg:items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Experiencia y Equipo
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Nuestra experiencia nos ha permitido crecer, desarrollarnos y
                    generar relaciones perdurables con nuestros clientes, con
                    un objetivo claro y fundamental: generar la satisfacción de
                    los mismos, con los cuales hemos estrechado vínculos de
                    mutua confianza y seguridad.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Para la ejecución de los proyectos se utilizan recursos
                    humanos propios y de terceros, como así también los
                    servicios de nuestros asesores externos con los que se
                    trabaja de manera habitual.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    El éxito en cada uno de los trabajos y el crecimiento de
                    nuestra empresa se basa en un equipo de trabajo
                    multidisciplinario integrado por distintos profesionales que
                    comparten la misma filosofía de trabajo enfocada en el
                    desarrollo, la excelencia y en el impulso de nuevas
                    iniciativas sustentadas en la responsabilidad profesional.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Obras y Servicios Diensten cuenta con procesos definidos de
                    Implementación de Proyectos, que contemplan planes de
                    auditorías, planes de mejoras, capacitación y una continua
                    entrega de información a la parte Operativa, asegurando con
                    ello óptima calidad en los servicios ofrecidos.
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
