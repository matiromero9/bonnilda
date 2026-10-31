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
  { name: 'Gabriel G.', rating: 5, text: 'Los mejores bombones de fruta, recomiendo los de membrillo, los de higo y los rojos', source: 'Google' },
  { name: 'Alejandra B.', rating: 5, text: 'Los bombones frutales, riquísimos..! Ideal para los amantes de lo dulce..! 😋', source: 'Google' },
  { name: 'Nidia B.', rating: 5, text: 'Exquisitos!!! Excelentes para un presente o consumición personal. Packaging: muy delicado', source: 'Google' },
  { name: 'Claudio R.', rating: 5, text: 'Para los fanáticos de lo dulce es imprescindible tener unos bombones de fruta siempre a mano.', source: 'Google' },
  { name: 'Liliana R.', rating: 5, text: 'Los bombones frutales son de excelente calidad, sabor y textura. Los de higo con nuez, típicos regionales, muy buena combinación, si te gusta el higo, es un 10. Muy buen servicio de entrega.', source: 'Google' },
  { name: 'María Hortensia R.', rating: 5, text: 'Bombones frutales deliciosos', source: 'Google' },
  { name: 'Cinthia T.', rating: 5, text: 'Son muy ricos!! Tienen muy buena presentación 🫶🏼', source: 'Google' },
  { name: 'Nadia C.', rating: 5, text: 'Los más ricos bombones de fruta del país!!! Me encantaron!!! 🙌🏼🙌🏼🙌🏼', source: 'Google' },
]

export const GOOGLE_REVIEW_URL = 'https://g.page/r/CUNtGMK9Fi6BEBE/review'

export const TESTIMONIAL_SOURCE_LABEL: Record<TestimonialSource, string> = {
  Google: 'Reseña en Google',
}
