/**
 * Google Analytics Helper Functions
 * Para trackear eventos personalizados
 */

// Definición de tipos para eventos
export type GAEventName = 
  | 'form_submit'
  | 'whatsapp_click'
  | 'cta_click'
  | 'social_click'
  | 'faq_expand'

interface GAEventParams {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: any
}

/**
 * Envía un evento a Google Analytics
 * @param eventName - Nombre del evento
 * @param params - Parámetros adicionales del evento
 */
export const trackEvent = (eventName: GAEventName, params?: GAEventParams) => {
  // Solo trackear en producción
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 [GA Event]', eventName, params)
    return
  }

  // Verificar que gtag esté disponible
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params)
  }
}

/**
 * Eventos específicos del negocio
 */
export const analytics = {
  // Tracking de formulario
  trackFormStart: () => {
    trackEvent('form_submit', {
      event_category: 'engagement',
      event_label: 'form_started',
    })
  },

  trackFormSubmit: (formType: 'minorista' | 'mayorista') => {
    trackEvent('form_submit', {
      event_category: 'conversion',
      event_label: `form_submitted_${formType}`,
      value: 1,
    })
  },

  // Tracking de WhatsApp
  trackWhatsAppClick: (source: 'hero' | 'footer' | 'contact' | 'mayoristas' | 'floating-cta') => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: `whatsapp_${source}`,
    })
  },

  // Tracking de CTAs
  trackCTAClick: (ctaText: string, location: string) => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: `${location}_${ctaText}`,
    })
  },

  // Tracking de redes sociales
  trackSocialClick: (platform: 'instagram' | 'facebook' | 'whatsapp') => {
    trackEvent('social_click', {
      event_category: 'engagement',
      event_label: platform,
    })
  },

  // Tracking de FAQ
  trackFAQExpand: (question: string) => {
    trackEvent('faq_expand', {
      event_category: 'engagement',
      event_label: question.substring(0, 50), // Limitar longitud
    })
  },
}
