import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bonnilda - Bombones Artesanales',
    short_name: 'Bonnilda',
    description: 'Bombones de fruta 100% artesanales de Buenos Aires',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F6',
    theme_color: '#F4A261',
    icons: [
      {
        src: '/images/logo.jpeg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}


