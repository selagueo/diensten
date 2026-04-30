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
  "torre-boston-oficinas-stellantis": {
    sector: "Automotriz",
    sections: [
      {
        title: "Áreas Comunes · Oficinas",
        subtitle: "Piso 21 y Piso 22",
        meta: "Torre Boston",
        folder: "/obras/automotriz/torre-boston-oficinas-stellantis/areas-comunes-oficinas",
      },
    ],
  },
  "palomar-nuevo-recorrido-suramericana": {
    sector: "Logística",
    sections: [
      {
        title: "Sector 01",
        subtitle: "Accesos y veredas perimetrales",
        folder: "/obras/logistica/palomar-nuevo-recorrido-suramericana/sector-01",
      },
      {
        title: "Sector 02",
        subtitle: "Rampas y caminos peatonales",
        folder: "/obras/logistica/palomar-nuevo-recorrido-suramericana/sector-02",
      },
      {
        title: "Sector 03",
        subtitle: "Plaza, sendas y luminarias",
        folder: "/obras/logistica/palomar-nuevo-recorrido-suramericana/sector-03",
      },
      {
        title: "Sector 04",
        subtitle: "Acceso vehicular y garita",
        folder: "/obras/logistica/palomar-nuevo-recorrido-suramericana/sector-04",
      },
      {
        title: "Sector 05",
        subtitle: "Patios y solados",
        folder: "/obras/logistica/palomar-nuevo-recorrido-suramericana/sector-05",
      },
      {
        title: "Sector 06",
        subtitle: "Canteros y terminaciones",
        folder: "/obras/logistica/palomar-nuevo-recorrido-suramericana/sector-06",
      },
    ],
  },
  "telefonica-movistar-local-comercial": {
    sector: "Telecomunicaciones",
    sections: [
      {
        title: "CEC Callao",
        subtitle: "Av. Callao 1065, CABA",
        folder: "/obras/telecomunicaciones/telefonica-movistar-local-comercial/cec-callao",
      },
    ],
  },
};
