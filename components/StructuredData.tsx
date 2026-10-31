import React from 'react'
import { SOCIAL_MEDIA, PHONE_NUMBER, LOCATION, SITE_URL } from '@/constants/contact'
import { FAQS } from '@/constants/faq'

/**
 * Structured Data (JSON-LD) para SEO
 *
 * No incluir schema Product: Google exige offers, review o aggregateRating
 * para un rich result válido. El sitio no publica precios y no se reutilizan
 * reseñas de Google Business como Review/AggregateRating. Un Product incompleto
 * genera el error de Search Console "must specify offers, review or aggregateRating".
 */
const StructuredData: React.FC = () => {
  const areaServed = {
    '@type': 'Country',
    name: LOCATION.country,
  }

  // Localidad/región/país sí; nunca streetAddress (negocio sin local a la calle).
  const postalAddress = {
    '@type': 'PostalAddress',
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.province,
    addressCountry: LOCATION.countryCode,
  }

  // Schema.org Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bonnilda',
    description: `Bombones frutales artesanales de ${LOCATION.displayShort}`,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-bonnilda.png`,
    image: `${SITE_URL}/images/hero-caja-abierta.jpeg`,
    telephone: PHONE_NUMBER.formatted,
    areaServed,
    address: postalAddress,
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
    logo: `${SITE_URL}/images/logo-bonnilda.png`,
    telephone: PHONE_NUMBER.formatted,
    image: `${SITE_URL}/images/hero-caja-abierta.jpeg`,
    areaServed,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LOCATION.coordinates.latitude,
      longitude: LOCATION.coordinates.longitude,
    },
    paymentAccepted: ['Efectivo', 'Transferencia bancaria', 'Mercado Pago'],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export default StructuredData

