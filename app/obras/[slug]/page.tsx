import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/Container";
import { OBRAS } from "@/lib/obras";

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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                {obra.location}
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {obra.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {obra.description}
              </p>
              <p className="mt-8 text-sm text-gray-500">
                Página de detalle del proyecto en desarrollo.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
