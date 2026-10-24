import type { Metadata } from 'next'
import { Fraunces, Nunito_Sans } from 'next/font/google'
import './globals.css'
import SkipLink from '@/components/ui/SkipLink'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['500', '600', '700'],
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bonnilda | Bombones frutales artesanales de Los Molles, San Luis',
  description: 'Bombones frutales artesanales desde 2013 en Los Molles, San Luis. 6 sabores, hechos a mano. Pedí por WhatsApp o consultá para revender. Envíos a todo el país.',
  authors: [{ name: 'Bonnilda' }],
  creator: 'Bonnilda',
  publisher: 'Bonnilda',
  metadataBase: new URL('https://www.bonnilda.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.bonnilda.com.ar',
    siteName: 'Bonnilda',
    title: 'Bonnilda | Bombones frutales artesanales de Los Molles, San Luis',
    description: 'Bombones frutales artesanales desde 2013 en Los Molles, San Luis. 6 sabores, hechos a mano. Pedí por WhatsApp o consultá para revender. Envíos a todo el país.',
    images: [
      {
        url: '/images/og-bonnilda.jpg',
        width: 1200,
        height: 630,
        alt: 'Bombones frutales artesanales Bonnilda - Caja abierta mostrando bombones de colores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonnilda | Bombones frutales artesanales de Los Molles, San Luis',
    description: 'Bombones frutales artesanales desde 2013 en Los Molles, San Luis. 6 sabores, hechos a mano. Pedí por WhatsApp o consultá para revender.',
    images: ['/images/og-bonnilda.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="es-AR" className={`${fraunces.variable} ${nunitoSans.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        {gaId && <GoogleAnalytics measurementId={gaId} />}
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
