import type { MetadataRoute } from "next";
import { OBRAS } from "@/lib/obras";

export const dynamic = "force-static";

const BASE_URL = "https://diensten.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1, changeFrequency: "monthly" },
    { url: `${BASE_URL}/la-empresa`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/obras`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/clientes`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contacto`, priority: 0.7, changeFrequency: "yearly" },
  ];

  const obraRoutes: MetadataRoute.Sitemap = OBRAS.map((obra) => ({
    url: `${BASE_URL}/obras/${obra.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...obraRoutes];
}
