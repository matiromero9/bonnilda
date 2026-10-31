/**
 * Google tag (contenedor GTM).
 * Se puede overridear con NEXT_PUBLIC_GTM_ID (o el alias NEXT_PUBLIC_GA_MEASUREMENT_ID).
 */
export const DEFAULT_GTM_ID = 'GTM-NN2HMFH2'

export const GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID?.trim() ||
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ||
  DEFAULT_GTM_ID
