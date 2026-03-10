import { FEATURED_OBRAS } from "./featured-obras";

/**
 * All obras. First 4 are from FEATURED_OBRAS (shared with Home hero cards).
 * Changes to FEATURED_OBRAS reflect on both Home and Obras pages.
 */
const ADDITIONAL_OBRAS = [
  {
    slug: "centro-logistico-caba",
    image: "/hero-card-office.png",
    location: "CABA, ARGENTINA",
    title: "Centro Logístico CABA",
    description:
      "Centro de distribución y logística en la zona sur de la Ciudad Autónoma de Buenos Aires. Estructuras metálicas y naves industriales.",
  },
  {
    slug: "thacker-pass-phase-i",
    image: "/hero-background.png",
    location: "NEVADA, U.S.",
    title: "Thacker Pass Phase I",
    description:
      "Proyecto de minería de litio en Nevada. Participamos en la construcción de infraestructura crítica para la primera fase de extracción de este mineral estratégico.",
  },
] as const;

export const OBRAS = [
  ...FEATURED_OBRAS,
  ...ADDITIONAL_OBRAS,
] as const;

export type Obra = (typeof OBRAS)[number];
