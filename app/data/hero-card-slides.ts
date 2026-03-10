import { FEATURED_OBRAS } from "@/lib/featured-obras";

export interface HeroCardSlide {
  image: string;
  title: string;
  url: string;
  alt: string;
}

/**
 * Derived from FEATURED_OBRAS - changes there reflect here automatically.
 */
export const HERO_CARD_SLIDES: HeroCardSlide[] = FEATURED_OBRAS.map((obra) => ({
  image: obra.image,
  title: obra.title,
  url: `/obras/${obra.slug}`,
  alt: obra.title,
}));
