import React from 'react'
import { SOCIAL_MEDIA, PHONE_NUMBER, LOCATION, SITE_URL } from '@/constants/contact'
import { FAQS } from '@/constants/faq'

/**
 * Structured Data (JSON-LD) para SEO
 * Ayuda a Google a entender mejor el contenido de la página
 * y mostrar rich snippets en los resultados de búsqueda
 */
const StructuredData: React.FC = () => {
  // Schema.org Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bonnilda',
    description: `Bombones frutales artesanales de ${LOCATION.displayShort}`,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.jpeg`,
    image: `${SITE_URL}/images/hero-caja-abierta.jpeg`,
    telephone: PHONE_NUMBER.formatted,
    address: {
      '@type': 'PostalAddress',
      addressLocality: LOCATION.city,
      addressRegion: LOCATION.province,
      addressCountry: LOCATION.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: PHONE_NUMBER.formatted,
      availableLanguage: 'Spanish',
    },
    sameAs: [
      SOCIAL_MEDIA.instagram.url,
    ],
  }

  // Schema.org LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: 'Bonnilda',
    description: 'Bombones de fruta de Los Molles, San Luis. Receta familiar desde 2013, inspirada en la abuela Nilda. Pedidos por WhatsApp.',
    url: SITE_URL,
    telephone: PHONE_NUMBER.formatted,
    image: `${SITE_URL}/images/hero-caja-abierta.jpeg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: LOCATION.city,
      addressRegion: LOCATION.province,
      addressCountry: LOCATION.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LOCATION.coordinates.latitude,
      longitude: LOCATION.coordinates.longitude,
    },
    paymentAccepted: ['Efectivo', 'Transferencia bancaria', 'Mercado Pago'],
  }

  // Schema.org Product
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Bombones Artesanales de Fruta',
    description: `Bombones de fruta con la receta familiar de Bonnilda, elaborados en ${LOCATION.displayShort}.`,
    image: `${SITE_URL}/images/hero-caja-abierta.jpeg`,
    brand: {
      '@type': 'Brand',
      name: 'Bonnilda',
    },
  }

  // Schema.org FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export default StructuredData

