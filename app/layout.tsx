import type { Metadata } from "next";
import "./globals.css";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://diensten.com.ar"),
  title: {
    default: "Diensten Argentina",
    template: "%s | Diensten",
  },
  icons: {
    icon: [
      { url: `${bp}/favicon.ico`, sizes: "32x32", type: "image/x-icon" },
      { url: `${bp}/diensten-logo-simple.png`, type: "image/png" },
    ],
  },
  description:
    "En Diensten, nos asociamos con nuestros clientes para dar vida a sus ambiciones, entregando proyectos que marcan una diferencia duradera y significativa.",
  keywords: [
    "arquitectura",
    "ingeniería",
    "construcción",
    "obras",
    "proyectos",
    "Argentina",
    "Diensten",
    "empresa constructora",
    "infraestructura",
  ],
  authors: [{ name: "halfpipe", url: "https://halfpipe.dev" }],
  openGraph: {
    title: "Diensten Argentina",
    description:
      "En Diensten, nos asociamos con nuestros clientes para dar vida a sus ambiciones, entregando proyectos que marcan una diferencia duradera y significativa.",
    type: "website",
    images: [
      {
        url: "/about-section.png",
        width: 1200,
        height: 630,
        alt: "Diensten Argentina — Arquitectura e Ingeniería",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
