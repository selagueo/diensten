import { FEATURED_OBRAS } from "./featured-obras";

/**
 * All obras. First 4 are from FEATURED_OBRAS (shared with Home hero cards).
 * Changes to FEATURED_OBRAS reflect on both Home and Obras pages.
 */
export const OBRAS = [...FEATURED_OBRAS] as const;

export type Obra = (typeof OBRAS)[number];
