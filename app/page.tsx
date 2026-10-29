import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import ProductSection from '@/components/sections/ProductSection'
import AboutSection from '@/components/sections/AboutSection'
import HowToOrderSection from '@/components/sections/HowToOrderSection'
import WholesalersSection from '@/components/sections/WholesalersSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'


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
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
