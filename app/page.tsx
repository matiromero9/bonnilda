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
  title: 'Bonnilda | Bombones Frutales Artesanales - Compra Minorista y Mayorista',
  description: 'Descubrí los mejores bombones frutales artesanales de Los Molles, San Luis. Hechos a mano con la receta de siempre. Ideales para regalar o revender. Envíos a todo el país.',
  openGraph: {
    title: 'Bonnilda - Bombones Frutales Artesanales',
    description: 'Bombones frutales 100% artesanales de Los Molles, San Luis. Sabor auténtico hecho a mano. Para vos o para revender.',
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
