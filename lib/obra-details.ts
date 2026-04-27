/**
 * Per-obra detail content. Each section maps to a folder under /public
 * — images inside that folder are listed alphabetically at build time
 * and rendered as a gallery. Drop new images into the folder and rebuild.
 */
export type ObraSection = {
  title: string;
  subtitle?: string;
  meta?: string;
  folder: string;
};

export type ObraDetail = {
  sector?: string;
  sections: ObraSection[];
};

export const OBRA_DETAILS: Record<string, ObraDetail> = {
  "telefonica-remodelacion-republica": {
    sector: "Telecomunicaciones",
    sections: [
      {
        title: "Accesos · Áreas Comunes",
        subtitle: "Planta Baja + Entrepiso",
        meta: "1.410 m²",
        folder: "/obras/telecomunicaciones/telefonica-remodelacion-republica/accesos-areas-comunes",
      },
      {
        title: "Oficina Presidencia",
        subtitle: "Piso 19",
        meta: "500 m²",
        folder: "/obras/telecomunicaciones/telefonica-remodelacion-republica/oficina-presidencia",
      },
    ],
  },
};
