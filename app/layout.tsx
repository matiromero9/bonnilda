import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import SkipLink from '@/components/ui/SkipLink'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bonnilda | Bombones de Fruta Artesanales - Buenos Aires',
  description: 'Bombones de fruta 100% artesanales de Buenos Aires. Sin conservantes, dulzura natural. Compra para vos o reventa mayorista. Envíos a todo el país.',
  keywords: [
    'bombones artesanales',
    'bombones de fruta',
    'dulces artesanales',
    'golosinas naturales',
    'sin conservantes',
    'bombones buenos aires',
    'reventa mayorista',
    'dulces para revender',
    'bombones naturales',
    'artesanal argentina'
  ],
  authors: [{ name: 'Bonnilda' }],
  creator: 'Bonnilda',
  publisher: 'Bonnilda',
  metadataBase: new URL('https://bonnilda.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://bonnilda.vercel.app',
    siteName: 'Bonnilda',
    title: 'Bonnilda | Bombones de Fruta Artesanales',
    description: 'Bombones de fruta 100% artesanales de Buenos Aires. Sin conservantes, dulzura natural. Compra para vos o reventa mayorista.',
    images: [
      {
        url: '/images/hero-product.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bombones artesanales Bonnilda - Dulces de fruta naturales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonnilda | Bombones de Fruta Artesanales',
    description: 'Bombones de fruta 100% artesanales. Sin conservantes, dulzura natural. Para vos o para revender.',
    images: ['/images/hero-product.jpeg'],
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
  verification: {
    // google: 'tu-codigo-de-verificacion-aqui', // TODO: Agregar cuando tengas Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="es" className={`${lora.variable} ${inter.variable}`}>
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
