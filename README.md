# Diensten — Landing Page Boilerplate

A minimal, production-ready landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles & Tailwind imports
│   ├── layout.tsx       # Root layout & SEO metadata
│   └── page.tsx         # Home page (hero section)
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── next.config.ts       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## Where to Edit

- **Hero content** — `app/page.tsx`
- **Metadata (SEO)** — `app/layout.tsx` (metadata export)
- **Global styles** — `app/globals.css`
- **Layout structure** — `app/layout.tsx`
