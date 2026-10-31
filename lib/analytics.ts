/**
 * Google tag / dataLayer helpers
 */

export type GAEventName =
  | 'form_submit'
  | 'whatsapp_click'
  | 'cta_click'
  | 'social_click'
  | 'faq_expand'

export type WhatsAppClickLocation =
  | 'header'
  | 'hero'
  | 'como-pedir'
  | 'mayoristas'
  | 'contacto'
  | 'formulario'
  | 'footer'
  | 'floating-cta'

interface GAEventParams {
  event_category?: string
  event_label?: string
  value?: number
  location?: WhatsAppClickLocation | string
  [key: string]: unknown
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const pushToDataLayer = (payload: Record<string, unknown>) => {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

/**
 * Envía un evento a Google tag (gtag) o, si no está listo, a dataLayer.
 */
export const trackEvent = (eventName: GAEventName, params?: GAEventParams) => {
  if (typeof window === 'undefined') return

  if (process.env.NODE_ENV === 'development') {
    console.log('📊 [GA Event]', eventName, params)
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
    return
  }

  pushToDataLayer({ event: eventName, ...params })
}

/**
 * Eventos específicos del negocio
 */
export const analytics = {
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

  trackWhatsAppClick: (location: WhatsAppClickLocation) => {
    trackEvent('whatsapp_click', { location })
  },

  trackCTAClick: (ctaText: string, location: string) => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: `${location}_${ctaText}`,
    })
  },

  trackSocialClick: (platform: 'instagram' | 'facebook' | 'whatsapp') => {
    trackEvent('social_click', {
      event_category: 'engagement',
      event_label: platform,
    })
  },

  trackFAQExpand: (question: string) => {
    trackEvent('faq_expand', {
      event_category: 'engagement',
      event_label: question.substring(0, 50),
    })
  },
}
