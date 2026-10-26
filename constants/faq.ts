/**
 * Preguntas frecuentes de Bonnilda
 * Usado en FAQSection y StructuredData (FAQPage JSON-LD)
 */

export interface FAQ {
  question: string
  answer: string
}

export const FAQS: FAQ[] = [
  {
    question: '¿Cómo hago para pedir?',
    answer: 'Muy fácil: escribinos por WhatsApp al 266 458-0822, contanos qué sabores y cantidad querés, y coordinamos el pago y envío. Aceptamos efectivo, transferencia bancaria y Mercado Pago.',
  },
  {
    question: '¿Hacen envíos a todo el país?',
    answer: 'Sí, despachamos a todo el país desde Los Molles, San Luis. El envío se coordina por WhatsApp cuando confirmás el pedido.',
  },
  {
    question: '¿Tienen local a la calle?',
    answer: 'No, no tenemos local a la calle. Pedidos y consultas por WhatsApp.',
  },
  {
    question: '¿Cuánto tardan en despachar?',
    answer: 'Despachamos en 48 hs a todo el país. Una vez que coordinamos el pago, preparamos tu pedido y lo enviamos lo antes posible.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer: 'Aceptamos efectivo, transferencia bancaria y Mercado Pago. Coordinamos todo por WhatsApp antes del envío.',
  },
  {
    question: '¿Cuál es la cantidad mínima para revender?',
    answer: 'Para revendedores, la compra mínima es de 16 cajas (cada caja trae 56 unidades). Consultanos por WhatsApp para más info sobre precios.',
  },
  {
    question: '¿Cuánto duran los bombones?',
    answer: 'Los bombones tienen 6 meses de vencimiento desde la fecha de elaboración que figura en el packaging. Deben conservarse en lugar fresco, seco y alejado de la luz solar.',
  },
  {
    question: '¿Qué sabores tienen?',
    answer: 'Tenemos 6 sabores: frutilla, naranja, manzana, ananá, uva y cereza.',
  },
]
