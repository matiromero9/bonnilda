import React from 'react'
import { SOCIAL_MEDIA, PHONE_NUMBER, LOCATION, SITE_URL } from '@/constants/contact'

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
    description: 'Bombones frutales 100% artesanales de Los Molles, San Luis. Hechos a mano con la receta de siempre. Para vos o para revender.',
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
    description: `Bombones frutales 100% artesanales. Elaborados a mano con la receta tradicional en ${LOCATION.displayShort}.`,
    image: `${SITE_URL}/images/hero-caja-abierta.jpeg`,
    brand: {
      '@type': 'Brand',
      name: 'Bonnilda',
    },
  }

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: SITE_URL,
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

export default StructuredData

