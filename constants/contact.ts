/**
 * Información de contacto centralizada para Bonnilda
 * Actualizar aquí para que se refleje en toda la aplicación
 */

// Número de WhatsApp
export const PHONE_NUMBER = {
  raw: '2664580822',
  formatted: '+54 9 266 458-0822',
  display: '266 458-0822',
  whatsappApi: '5492664580822',
}

// Redes sociales
export const SOCIAL_MEDIA = {
  instagram: {
    handle: '@bonnildadulzuras',
    url: 'https://www.instagram.com/bonnildadulzuras',
  },
  whatsapp: {
    url: `https://wa.me/${PHONE_NUMBER.whatsappApi}`,
    urlWithMessage: (message: string) => 
      `https://wa.me/${PHONE_NUMBER.whatsappApi}?text=${encodeURIComponent(message)}`,
  },
}

// Ubicación - Los Molles, San Luis
export const LOCATION = {
  city: 'Los Molles',
  province: 'San Luis',
  country: 'Argentina',
  countryCode: 'AR',
  displayShort: 'Los Molles, San Luis',
  displayLong: 'Los Molles, San Luis, Argentina',
  // Coordenadas aproximadas de Los Molles, San Luis
  coordinates: {
    latitude: -32.4833,
    longitude: -65.5167,
  },
}

// URLs del sitio
export const SITE_URL = 'https://www.bonnilda.com.ar'

// Metadata para SEO
export const BUSINESS_INFO = {
  name: 'Bonnilda',
  legalName: 'Bonnilda Dulzuras Artesanales',
  description: 'Bombones frutales 100% artesanales de Los Molles, San Luis. Hechos a mano con la receta de siempre.',
  slogan: 'Dulzura auténtica, sabor artesanal',
}

// Información de pedidos
export const ORDER_INFO = {
  whatsappMessage: '¡Hola! Me interesa hacer un pedido de bombones Bonnilda. 🍑',
  whatsappMessageWholesale: '¡Hola! Me interesa revender bombones Bonnilda. ¿Me pasan info sobre precios mayoristas? 🍑',
  whatsappMessageGeneral: '¡Hola! Me interesa conocer más sobre los bombones Bonnilda. 🍑',
  paymentMethods: ['Efectivo', 'Transferencia bancaria', 'Mercado Pago'],
  shipping: 'Envíos a todo el país',
}

