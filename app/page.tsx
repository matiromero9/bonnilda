import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import WholesalersSection from '@/components/sections/WholesalersSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'

export const metadata: Metadata = {
  title: 'Bonnilda | Bombones Artesanales de Fruta - Compra Minorista y Mayorista',
  description: 'Descubrí los mejores bombones artesanales de fruta en Buenos Aires. 100% naturales, sin conservantes. Ideales para regalar o revender. Envíos a todo el país.',
  openGraph: {
    title: 'Bonnilda - Bombones Artesanales de Fruta',
    description: 'Bombones 100% artesanales y naturales. Dulzura auténtica sin conservantes. Para vos o para revender.',
    images: ['/images/hero-product.jpeg'],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WholesalersSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
