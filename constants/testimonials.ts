/**
 * Reseñas reales de Google de Bonnilda.
 * Para agregar una nueva: una línea en TESTIMONIALS.
 */

export type TestimonialSource = 'Google'

export interface Testimonial {
  name: string
  rating: number
  text: string
  source: TestimonialSource
}

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Magali C.', rating: 5, text: 'Los mejores bombones frutales!! Son como gomitas pero más suavecitas. La cantidad de azúcar es clave', source: 'Google' },
  { name: 'Flavia L.', rating: 5, text: 'Son bombones de fruta como los que comía en mi infancia, ricos todos en especial el de uva. La atención de Matías 10/10', source: 'Google' },
  { name: 'Edith S.', rating: 5, text: 'Exquisitos los bombones!! El pedido llegó en tiempo y forma. Muy amables!! Gracias!!', source: 'Google' },
  { name: 'Mario R.', rating: 5, text: 'Excelente relación de precio calidad', source: 'Google' },
]

export const GOOGLE_REVIEW_URL = 'https://g.page/r/CUNtGMK9Fi6BEBE/review'

export const TESTIMONIAL_SOURCE_LABEL: Record<TestimonialSource, string> = {
  Google: 'Reseña en Google',
}
