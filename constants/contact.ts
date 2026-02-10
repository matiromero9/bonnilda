/**
 * Información de contacto centralizada para Bonnilda
 * Actualizar aquí para que se refleje en toda la aplicación
 */

// Número de WhatsApp
export const PHONE_NUMBER = {
  raw: '2664580822',
  formatted: '+54 9 266 458-0822', // Formato legible
  display: '266 458-0822', // Para mostrar en la UI
  whatsappApi: '5492664580822', // Para WhatsApp API (sin espacios ni guiones)
}

// Email
export const EMAIL = 'hola@bonnilda.com' // TODO: Actualizar con email real si tienen

// Redes sociales
export const SOCIAL_MEDIA = {
  instagram: {
    handle: '@bonnildadulzuras',
    url: 'https://www.instagram.com/bonnildadulzuras',
  },
  facebook: {
    handle: '@bonnildadulzuras',
    url: 'https://www.facebook.com/bonnildadulzuras',
  },
  whatsapp: {
    url: `https://wa.me/${PHONE_NUMBER.whatsappApi}`,
    urlWithMessage: (message: string) => 
      `https://wa.me/${PHONE_NUMBER.whatsappApi}?text=${encodeURIComponent(message)}`,
  },
}

// Ubicación
export const LOCATION = {
  city: 'San Luis',
  province: 'San Luis',
  country: 'Argentina',
  countryCode: 'AR',
  displayShort: 'San Luis, Argentina',
  displayLong: 'San Luis, San Luis, Argentina',
  // Coordenadas aproximadas de San Luis capital
  coordinates: {
    latitude: -33.3017,
    longitude: -66.3378,
  },
}

// Horarios (opcional - ajustar según sea necesario)
export const BUSINESS_HOURS = {
  weekdays: {
    open: '09:00',
    close: '18:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  display: 'Lun - Vie: 9:00 - 18:00 hs',
  note: 'Atención por WhatsApp las 24hs',
}

// URLs del sitio
export const SITE_URL = 'https://bonnilda.vercel.app'

// Metadata para SEO
export const BUSINESS_INFO = {
  name: 'Bonnilda',
  legalName: 'Bonnilda Dulzuras Artesanales',
  description: 'Bombones de fruta 100% artesanales de San Luis, Argentina. Sin conservantes, dulzura natural.',
  slogan: 'Dulzura natural, sabor artesanal',
}

