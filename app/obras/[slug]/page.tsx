import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "@/components/Img";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { Container } from "@/components/Container";
import { OBRAS } from "@/lib/obras";
import { OBRA_DETAILS, type ObraSection } from "@/lib/obra-details";

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

type GalleryItem = {
  src: string;
  area: string;
  index: number;
  isBefore: boolean;
};

type AreaGroup = {
  area: string;
  isBefore: boolean;
  items: GalleryItem[];
};

const BEFORE_RE = /situaci[oó]n\s+existente|sit\s+existente/i;

function parseImage(folder: string, filename: string): GalleryItem {
  const noExt = filename.replace(/\.[^.]+$/, "");
  // Strip a trailing " 2" / " 3" index from the area name.
  const m = noExt.match(/^(.*?)(?:\s+(\d+))?$/);
  const baseRaw = (m?.[1] ?? noExt).trim();
  const index = m?.[2] ? parseInt(m[2], 10) : 1;
  // Title-case first letter, normalize separators ("_" → "·"), tidy a typo
  // we saw ("sala te teleconferencia" → "sala de teleconferencia").
  const cleaned = baseRaw
    .replace(/\s*_\s*/g, " · ")
    .replace(/\bte\b/i, "de");
  const area = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  return {
    src: `${folder.replace(/\/$/, "")}/${filename}`,
    area,
    index,
    isBefore: BEFORE_RE.test(area),
  };
}

function groupImages(folder: string): AreaGroup[] {
  const abs = path.join(process.cwd(), "public", folder.replace(/^\//, ""));
  let files: string[];
  try {
    files = fs.readdirSync(abs).filter((f) => IMAGE_EXT.test(f));
  } catch {
    return [];
  }

  const items = files.map((f) => parseImage(folder, f));

  // Group by normalized area key.
  const groups = new Map<string, AreaGroup>();
  for (const item of items) {
    const key = item.area.toLowerCase();
    let g = groups.get(key);
    if (!g) {
      g = { area: item.area, isBefore: item.isBefore, items: [] };
      groups.set(key, g);
    }
    g.items.push(item);
  }
  for (const g of groups.values()) {
    g.items.sort((a, b) => a.index - b.index);
  }

  // Order: "before" groups first, then alphabetical by area name.
  return Array.from(groups.values()).sort((a, b) => {
    if (a.isBefore !== b.isBefore) return a.isBefore ? -1 : 1;
    return a.area.localeCompare(b.area, "es");
  });
}

export function generateStaticParams() {
  return OBRAS.map((obra) => ({ slug: obra.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const obra = OBRAS.find((o) => o.slug === slug);
  if (!obra) return { title: "Obra no encontrada" };
  return {
    title: obra.title,
    description: obra.description,
  };
}

export default async function ObraDetailPage({ params }: Props) {
  const { slug } = await params;
  const obra = OBRAS.find((o) => o.slug === slug);
  if (!obra) notFound();

  const detail = OBRA_DETAILS[slug];
  const sections: (ObraSection & { groups: AreaGroup[] })[] =
    detail?.sections.map((s) => ({ ...s, groups: groupImages(s.folder) })) ?? [];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-end pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-[70vh] lg:pt-36">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={obra.image}
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden />
          </div>
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                {detail?.sector ? `${detail.sector} · ` : ""}
                {obra.location}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {obra.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                {obra.description}
              </p>
            </div>
          </Container>
        </section>

        {/* Sections */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            {sections.length === 0 && (
              <p className="text-center text-sm text-gray-500">
                Imágenes próximamente.
              </p>
            )}

            <div className="space-y-24 lg:space-y-32">
              {sections.map((section) => {
                const beforeGroups = section.groups.filter((g) => g.isBefore);
                const afterGroups = section.groups.filter((g) => !g.isBefore);

                return (
                  <article key={section.folder}>
                    <header className="mb-10 sm:mb-12">
                      <div className="border-l-2 border-gray-900 pl-5">
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                          {section.title}
                        </h2>
                        <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm text-gray-600 sm:text-base">
                          {section.subtitle && <span>{section.subtitle}</span>}
                          {section.meta && (
                            <span className="font-medium uppercase tracking-wider text-gray-400">
                              {section.meta}
                            </span>
                          )}
                        </div>
                      </div>
                    </header>

                    {section.groups.length === 0 && (
                      <p className="text-sm text-gray-400">Imágenes próximamente.</p>
                    )}

                    {/* Antes — situación existente */}
                    {beforeGroups.length > 0 && (
                      <div className="mb-12 sm:mb-16">
                        <div className="mb-4 flex items-center gap-3">
                          <span className="inline-flex items-center rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                            Antes
                          </span>
                          <span className="text-sm uppercase tracking-wider text-gray-500">
                            Situación existente
                          </span>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                          {beforeGroups.flatMap((g) =>
                            g.items.map((item) => (
                              <figure
                                key={item.src}
                                className="group relative overflow-hidden bg-gray-100"
                              >
                                <div className="relative aspect-[4/3] w-full">
                                  <Image
                                    src={item.src}
                                    alt={`${item.area} — situación existente`}
                                    fill
                                    className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.02]"
                                    sizes="(min-width: 640px) 50vw, 100vw"
                                  />
                                </div>
                              </figure>
                            )),
                          )}
                        </div>
                      </div>
                    )}

                    {/* Después — grouped by area */}
                    {afterGroups.length > 0 && (
                      <>
                        {beforeGroups.length > 0 && (
                          <div className="mb-6 flex items-center gap-3">
                            <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                              Después
                            </span>
                            <span className="text-sm uppercase tracking-wider text-gray-500">
                              Intervención Diensten
                            </span>
                          </div>
                        )}
                        <div className="space-y-12 sm:space-y-16">
                          {afterGroups.map((group) => (
                            <div key={group.area}>
                              <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                                {group.area}
                              </h3>
                              <div
                                className={`grid gap-4 lg:gap-6 ${
                                  group.items.length === 1
                                    ? "grid-cols-1"
                                    : "grid-cols-1 sm:grid-cols-2"
                                } ${
                                  group.items.length >= 3
                                    ? "lg:grid-cols-3"
                                    : ""
                                }`}
                              >
                                {group.items.map((item) => (
                                  <figure
                                    key={item.src}
                                    className="group relative overflow-hidden bg-gray-100"
                                  >
                                    <div className="relative aspect-[4/3] w-full">
                                      <Image
                                        src={item.src}
                                        alt={item.area}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                      />
                                    </div>
                                  </figure>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
