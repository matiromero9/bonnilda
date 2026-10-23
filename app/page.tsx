import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import ProductSection from '@/components/sections/ProductSection'
import AboutSection from '@/components/sections/AboutSection'
import HowToOrderSection from '@/components/sections/HowToOrderSection'
import WholesalersSection from '@/components/sections/WholesalersSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'

export const metadata: Metadata = {
  title: 'Bonnilda | Bombones Artesanales de Fruta - Compra Minorista y Mayorista',
  description: 'Descubrí los mejores bombones artesanales de fruta de Los Molles, San Luis. 100% naturales, sin conservantes. Ideales para regalar o revender. Envíos a todo el país.',
  openGraph: {
    title: 'Bonnilda - Bombones Artesanales de Fruta',
    description: 'Bombones 100% artesanales y naturales de Los Molles, San Luis. Dulzura auténtica sin conservantes. Para vos o para revender.',
    images: ['/images/hero-caja-abierta.jpeg'],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProductSection />
        <AboutSection />
        <HowToOrderSection />
        <WholesalersSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
