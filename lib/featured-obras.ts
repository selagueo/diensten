/**
 * Single source of truth for the first 4 featured obras.
 * Used by both the Home hero cards and the Obras page grid.
 * Changes here reflect on both pages.
 */
export const FEATURED_OBRAS = [
  {
    slug: "telefonica-remodelacion-republica",
    image: "/hero-card-office.png",
    title: "Telefónica: Obra Remodelación República",
    location: "BUENOS AIRES, ARGENTINA",
    description:
      "Remodelación integral de oficinas corporativas para Telefónica. Espacios colaborativos y modernas instalaciones en el centro de Buenos Aires.",
  },
  {
    slug: "torre-boston-oficinas-stellantis",
    image: "/hero-card-boston.png",
    title: "Torre Boston: Oficinas Stellantis",
    location: "BUENOS AIRES, ARGENTINA",
    description:
      "Construcción de oficinas corporativas para Stellantis en Torre Boston. Proyecto integral de obras corporativas con alta exigencia técnica.",
  },
  {
    slug: "palomar-nuevo-recorrido-suramericana",
    image: "/hero-card-palomar.png",
    title: "Palomar: Nuevo Recorrido Suramericana",
    location: "BUENOS AIRES, ARGENTINA",
    description:
      "Nuevo recorrido y obras de infraestructura para Suramericana en la zona de Palomar. Integración de sistemas y espacios de trabajo.",
  },
  {
    slug: "telefonica-movistar-local-comercial",
    image: "/hero-card-movistar.png",
    title: "Telefónica Movistar: Local Comercial",
    location: "BUENOS AIRES, ARGENTINA",
    description:
      "Edificio de oficinas y locales comerciales para Movistar. Integración de espacios comerciales con infraestructura de telecomunicaciones.",
  },
] as const;

export type FeaturedObra = (typeof FEATURED_OBRAS)[number];
