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

const SERVICIOS_OBRAS = [
  { num: "01", title: "Obras Civiles" },
  { num: "02", title: "Obras Eléctricas" },
  { num: "03", title: "Obras Termomecánicas" },
];

const SERVICIOS_TELECOM = [
  { num: "04", title: "Diseño y despliegue de redes de voz y datos" },
  {
    num: "05",
    title: "Provisión de equipamiento de telecomunicaciones para voz y datos",
  },
  {
    num: "06",
    title: "Provisión de infraestructura para redes de telecomunicaciones",
  },
  {
    num: "07",
    title:
      "Instalación, puesta en servicio y mantenimiento de redes de telecomunicaciones",
  },
];

const VALORES = [
  {
    label: "Calidad",
    desc: "Estándares técnicos exigentes en cada etapa, desde el diseño hasta la entrega final.",
  },
  {
    label: "Experiencia",
    desc: "+19 años en el mercado nos respaldan, con proyectos a nivel nacional e internacional.",
  },
  {
    label: "Compromiso",
    desc: "Asociaciones a largo plazo basadas en la confianza, la ética y los resultados.",
  },
];

const LOGROS = [
  { value: "30.000", unit: "m²", label: "construidos" },
  { value: "70.000", unit: "m²", label: "de oficinas comerciales" },
  { value: "+1.000", unit: "", label: "sitios de Telefonía" },
  { value: "+150", unit: "", label: "locales comerciales" },
  { value: "+19", unit: "", label: "años de trayectoria" },
];

const MERCADOS = [
  { label: "Empresas", icon: "office" },
  { label: "Operadores", icon: "tower" },
  { label: "Cooperativas", icon: "handshake" },
  { label: "Gobierno", icon: "government" },
  { label: "Countries", icon: "home" },
];

const POLITICA_PUNTOS = [
  {
    num: "01",
    title: "Estándares de calidad",
    desc: "Implementamos los más altos estándares en cada proceso para asegurar el cumplimiento de los requerimientos de nuestros clientes.",
  },
  {
    num: "02",
    title: "Precios competitivos",
    desc: "Trabajamos constantemente sobre la optimización de compras y contrataciones para ofrecer al mercado precios ajustados a la realidad del país.",
  },
  {
    num: "03",
    title: "Costos a largo plazo",
    desc: "La alta calidad de nuestros productos y servicios reduce los costos de mantenimiento y operación de las redes a futuro.",
  },
];

// Blueprint grid pattern as inline style for backgrounds
const BLUEPRINT_GRID =
  "[background-image:linear-gradient(to_right,_rgba(15,23,42,0.06)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(15,23,42,0.06)_1px,_transparent_1px)] [background-size:32px_32px]";

const BLUEPRINT_GRID_DARK =
  "[background-image:linear-gradient(to_right,_rgba(255,255,255,0.06)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.06)_1px,_transparent_1px)] [background-size:40px_40px]";

export default function LaEmpresaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative flex min-h-[80vh] items-center justify-start overflow-hidden pt-28 pb-20 sm:min-h-[70vh] sm:pt-32 lg:pt-36">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/la-empresa-hero.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/40" />
            <div
              className={`absolute inset-0 opacity-40 ${BLUEPRINT_GRID_DARK}`}
            />
          </div>

          {/* Year badge */}
          <div className="absolute right-4 top-28 z-10 sm:right-8 sm:top-32 lg:top-36">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-diensten-orange animate-blink" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
                Desde 2007
              </span>
            </div>
          </div>

          <Container className="relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-diensten-orange sm:text-sm md:text-base">
                Proyectar <span className="text-white/40">·</span> Construir{" "}
                <span className="text-white/40">·</span> Desarrollar
              </p>
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
                La Empresa
              </h1>
              <div className="mt-6 flex items-start gap-4">
                <span
                  className="mt-2 hidden h-12 w-1 shrink-0 bg-diensten-orange sm:block"
                  aria-hidden
                />
                <p className="max-w-xl text-base text-white/90 sm:text-lg">
                  Contribuyendo al desarrollo de obras mediante productos y
                  servicios de alta calidad en todo el país.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* STATS — moved up for impact */}
        <section className="relative overflow-hidden bg-[#15303A] py-12 sm:py-16 lg:py-20">
          <div
            className={`absolute inset-0 opacity-50 ${BLUEPRINT_GRID_DARK}`}
            aria-hidden
          />
          <Container className="relative">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-start gap-2 border-l-2 border-diensten-orange pl-4 sm:pl-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-diensten-orange sm:text-xs">
                  [ Trayectoria ]
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Desde 2007 generamos valor para cada cliente
                </h2>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-8 lg:mt-12 lg:grid-cols-5 lg:gap-x-6">
                {LOGROS.map((l, i) => (
                  <div
                    key={l.label}
                    className="relative border-l border-white/15 pl-4 sm:pl-5"
                  >
                    <span
                      className="absolute -left-px top-0 h-8 w-px bg-diensten-orange"
                      aria-hidden
                    />
                    <span className="block text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-diensten-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <dt className="sr-only">{l.label}</dt>
                    <dd>
                      <span
                        className="mt-2 block text-3xl font-bold italic leading-none tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
                        style={{
                          fontFamily:
                            "var(--font-archivo), system-ui, sans-serif",
                        }}
                      >
                        {l.value}
                        {l.unit && (
                          <span className="text-2xl sm:text-3xl lg:text-[2rem]">
                            {l.unit}
                          </span>
                        )}
                      </span>
                      <span className="mt-3 block text-xs leading-snug text-white/70 sm:text-sm">
                        {l.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6 sm:mt-12">
                <span
                  className="h-px w-8 shrink-0 bg-diensten-orange"
                  aria-hidden
                />
                <p className="text-sm text-white/70 sm:text-base">
                  Asociaciones a largo plazo con empresas multinacionales y
                  proyectos a nivel nacional e internacional.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICIOS */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 max-w-3xl border-l-2 border-diensten-orange pl-4 sm:mb-16 sm:pl-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-diensten-orange sm:text-xs">
                  [ Servicios ]
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Soluciones integrales de alta calidad
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Trabajamos con estándares técnicos exigentes, personal
                  capacitado y procesos eficientes que garantizan resultados
                  confiables y duraderos. Adaptamos cada solución al proyecto,
                  con compromiso, mejora continua y respeto por el entorno.
                </p>
              </div>

              {/* Two service categories */}
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                {/* Obras */}
                <div>
                  <CategoryHeader title="Obras" range="01 — 03" />
                  <ul className="mt-6 space-y-3">
                    {SERVICIOS_OBRAS.map((s) => (
                      <ServiceCard key={s.num} num={s.num} title={s.title} />
                    ))}
                  </ul>
                </div>

                {/* Telecomunicaciones */}
                <div>
                  <CategoryHeader title="Telecomunicaciones" range="04 — 07" />
                  <ul className="mt-6 space-y-3">
                    {SERVICIOS_TELECOM.map((s) => (
                      <ServiceCard key={s.num} num={s.num} title={s.title} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* VISIÓN, MISIÓN, VALORES */}
        <section
          id="vision"
          className={`relative bg-gray-50 py-16 sm:py-20 lg:py-24 ${BLUEPRINT_GRID}`}
        >
          <Container className="relative">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl border-l-2 border-diensten-orange pl-4 sm:pl-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-diensten-orange sm:text-xs">
                  [ Visión · Misión · Valores ]
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Donde la calidad es nuestro estándar
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                  En 2007 iniciamos nuestro camino con la misión de aportar al
                  desarrollo de obras mediante productos y servicios de alta
                  calidad. Hoy ofrecemos soluciones integrales guiados por una
                  filosofía orientada a la excelencia.
                </p>
              </div>

              {/* Visión + Misión cards */}
              <div className="mt-12 grid gap-4 sm:gap-6 lg:grid-cols-2">
                <PillarCard
                  num="01"
                  label="Visión"
                  text="Ser líderes en la provisión de servicios y productos combinando prestaciones a través de una creativa ingeniería de producto."
                />
                <PillarCard
                  num="02"
                  label="Misión"
                  text="Brindamos soluciones orientadas a la satisfacción del cliente, actuando con ética y compromiso, generando valor a través de un equipo motivado y en constante desarrollo."
                />
              </div>

              {/* Valores: 3 pillars with descriptions */}
              <div className="mt-4 sm:mt-6">
                <div className="rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-diensten-orange">
                      03
                    </span>
                    <span className="h-px flex-1 bg-gray-200" aria-hidden />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-900 sm:text-xs">
                      Valores
                    </span>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
                    {VALORES.map((v, i) => (
                      <div key={v.label} className="relative">
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-2xl font-bold italic text-diensten-orange sm:text-3xl"
                            style={{
                              fontFamily:
                                "var(--font-archivo), system-ui, sans-serif",
                            }}
                          >
                            0{i + 1}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {v.label}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                          {v.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* POLÍTICA DE CUMPLIMIENTO */}
        <section className="relative py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[5fr,7fr] lg:gap-14 lg:items-start">
                {/* Image with overlay */}
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[4/5] lg:sticky lg:top-24">
                    <Image
                      src="/obras-hero.png"
                      alt="Obras y proyectos Diensten"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <div className="flex items-center gap-2 text-white/90">
                        <span
                          className="h-px w-6 bg-diensten-orange"
                          aria-hidden
                        />
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em]">
                          OBRAS Y SERVICIOS DIENSTEN S.A.
                        </span>
                      </div>
                      <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                        Calidad técnica, costos optimizados, resultados
                        duraderos.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border-l-2 border-diensten-orange pl-4 sm:pl-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-diensten-orange sm:text-xs">
                      [ Política de Cumplimiento ]
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                      Compromiso con la excelencia
                    </h2>
                  </div>

                  <ul className="mt-8 space-y-5 sm:space-y-6">
                    {POLITICA_PUNTOS.map((p) => (
                      <li
                        key={p.num}
                        className="group relative flex gap-4 rounded-xl border border-gray-200/80 bg-white p-5 transition-colors hover:border-diensten-orange/40 sm:gap-5 sm:p-6"
                      >
                        <span
                          className="font-mono text-2xl font-bold leading-none text-diensten-orange sm:text-3xl"
                          style={{
                            fontFamily:
                              "var(--font-archivo), system-ui, sans-serif",
                          }}
                        >
                          {p.num}
                        </span>
                        <div className="min-w-0 flex-1 border-l border-gray-200 pl-4 sm:pl-5">
                          <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                            {p.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-gray-600 sm:text-base">
                            {p.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CLIENTES + MERCADO */}
        <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Clientes */}
                <div className="border-l-2 border-diensten-orange pl-4 sm:pl-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-diensten-orange sm:text-xs">
                    [ Clientes ]
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Nuestro activo más importante
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                    Diensten considera a los clientes como su activo más
                    importante. Buscamos superar las expectativas, cubriendo no
                    sólo las necesidades manifiestas sino también aquellas que
                    pudieran existir sin descubrir.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                    Así seremos elegidos permanentemente como proveedores
                    confiables y atractivos.
                  </p>
                  <Link
                    href="/clientes"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-diensten-orange transition-colors hover:text-diensten-orange-dark sm:text-base"
                  >
                    Ver clientes
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

                {/* Mercado */}
                <div>
                  <div className="border-l-2 border-diensten-orange pl-4 sm:pl-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-diensten-orange sm:text-xs">
                      [ Mercado ]
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Atención segmentada
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                      Contamos con áreas diferenciadas según el tipo de
                      compañía y sus objetivos, brindando soluciones
                      específicas y eficientes para cada proyecto.
                    </p>
                  </div>

                  <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
                    {MERCADOS.map((m, i) => (
                      <li
                        key={m.label}
                        className={`group flex items-center gap-3 rounded-xl border border-gray-200/80 bg-white px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-diensten-orange/40 hover:shadow-md ${
                          i === MERCADOS.length - 1 && MERCADOS.length % 2 !== 0
                            ? "col-span-2"
                            : ""
                        }`}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-diensten-orange/10 text-diensten-orange transition-colors group-hover:bg-diensten-orange group-hover:text-white">
                          <MercadoIcon name={m.icon} />
                        </span>
                        <span className="text-sm font-semibold text-gray-900 sm:text-base">
                          {m.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-diensten-orange/20 bg-diensten-orange/5 p-4">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-diensten-orange"
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
                    <p className="text-sm font-medium text-gray-800 sm:text-base">
                      Capacidad operativa para realizar obras en todo el
                      territorio nacional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA — Experiencia */}
        <section className="relative overflow-hidden bg-[#15303A] py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/hero-background.png"
              alt=""
              fill
              className="object-cover object-center opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#15303A] via-[#15303A]/85 to-[#15303A]/60" />
            <div
              className={`absolute inset-0 opacity-40 ${BLUEPRINT_GRID_DARK}`}
            />
          </div>

          <Container className="relative">
            <div className="mx-auto max-w-4xl">
              <div className="border-l-2 border-diensten-orange pl-4 sm:pl-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-diensten-orange sm:text-xs">
                  [ Experiencia ]
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Experiencia que construye confianza
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Fortalecimos procesos y capacidades a lo largo de nuestra
                  trayectoria, construyendo vínculos sólidos con cada cliente y
                  garantizando un servicio profesional de calidad.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-diensten-orange px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-diensten-orange-dark sm:px-8 sm:py-4"
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
                <Link
                  href="/clientes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:px-8 sm:py-4"
                >
                  Ver clientes
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CategoryHeader({ title, range }: { title: string; range: string }) {
  return (
    <div className="flex items-center gap-4">
      <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
        {title}
      </h3>
      <span className="h-px flex-1 bg-gray-200" aria-hidden />
      <span
        className="font-mono text-xs font-semibold tracking-[0.2em] text-diensten-orange"
        aria-hidden
      >
        {range}
      </span>
    </div>
  );
}

function ServiceCard({ num, title }: { num: string; title: string }) {
  return (
    <li className="group relative flex items-start gap-4 rounded-xl border border-gray-200/80 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-diensten-orange/40 hover:shadow-md sm:p-5">
      <span
        className="text-2xl font-bold italic leading-none text-diensten-orange sm:text-3xl"
        style={{
          fontFamily: "var(--font-archivo), system-ui, sans-serif",
        }}
      >
        {num}
      </span>
      <div className="min-w-0 flex-1 border-l border-gray-200 pl-4 transition-colors group-hover:border-diensten-orange/40 sm:pl-5">
        <p className="text-sm font-semibold leading-snug text-gray-900 sm:text-base">
          {title}
        </p>
      </div>
    </li>
  );
}

function PillarCard({
  num,
  label,
  text,
}: {
  num: string;
  label: string;
  text: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition-all hover:border-diensten-orange/40 hover:shadow-md sm:p-8">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-semibold text-diensten-orange">
          {num}
        </span>
        <span className="h-px flex-1 bg-gray-200" aria-hidden />
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-900 sm:text-xs">
          {label}
        </span>
      </div>
      <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
        {text}
      </p>
    </div>
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m4 0v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4M9 7h.01M9 11h.01M9 15h.01M15 7h.01M15 11h.01M15 15h.01"
          />
        </svg>
      );
    case "tower":
      // Telecom tower with antenna and signal waves
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
            d="M5.636 5.636a9 9 0 0112.728 0M8.464 8.464a5 5 0 017.072 0M12 13v8m-3 0h6"
          />
          <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    case "government":
      // Courthouse / government building with columns
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
            d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4"
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
