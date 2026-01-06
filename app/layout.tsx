import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import SkipLink from '@/components/ui/SkipLink'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bonnilda | Bombones de Fruta Artesanales',
  description: 'Bombones de fruta 100% artesanales. Dulzura natural, calidad premium. Para vos o para revender.',
  keywords: 'bombones artesanales, dulces de fruta, golosinas naturales, mayorista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  )
}

