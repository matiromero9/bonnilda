import React from 'react'
import { SOCIAL_MEDIA, PHONE_NUMBER, EMAIL, LOCATION, SITE_URL, BUSINESS_HOURS } from '@/constants/contact'

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
    description: `Bombones de fruta artesanales de ${LOCATION.displayShort}`,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.jpeg`,
    image: `${SITE_URL}/images/hero-product.jpeg`,
    telephone: PHONE_NUMBER.formatted,
    email: EMAIL,
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
      SOCIAL_MEDIA.facebook.url,
    ],
  }

  // Schema.org LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: 'Bonnilda',
    description: 'Bombones de fruta 100% artesanales. Sin conservantes, dulzura natural. Para vos o para revender.',
    url: SITE_URL,
    telephone: PHONE_NUMBER.formatted,
    email: EMAIL,
    image: `${SITE_URL}/images/hero-product.jpeg`,
    priceRange: '$$',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: BUSINESS_HOURS.weekdays.days,
        opens: BUSINESS_HOURS.weekdays.open,
        closes: BUSINESS_HOURS.weekdays.close,
      },
    ],
  }

  // Schema.org Product
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Bombones Artesanales de Fruta',
    description: `Bombones de fruta 100% artesanales, sin conservantes ni aditivos. Elaborados con frutas seleccionadas en ${LOCATION.displayShort}.`,
    image: `${SITE_URL}/images/hero-product.jpeg`,
    brand: {
      '@type': 'Brand',
      name: 'Bonnilda',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      url: SITE_URL,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '500',
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

