'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const WholesalersSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Márgenes competitivos',
      description: 'Hasta 40% de ganancia en cada venta. Precios especiales para revendedores.',
      highlight: '40%',
      emoji: '💰',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: 'Producto de calidad',
      description: 'Bombones premium que se venden solos. Tus clientes siempre vuelven por más.',
      highlight: '100%',
      emoji: '⭐',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Envíos rápidos',
      description: 'Despachamos en 24/48hs. Stock permanente y entregas coordinadas.',
      highlight: '24hs',
      emoji: '⚡',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Soporte dedicado',
      description: 'Te acompañamos en todo el proceso. Asesoramiento y atención personalizada.',
      highlight: '24/7',
      emoji: '🤝',
    },
  ]

  return (
    <section id="mayoristas" className="py-12 md:py-20 -mt-16 md:-mt-28 pt-24 md:pt-36 bg-gradient-to-b from-background to-background-soft relative overflow-hidden">
      {/* Formas decorativas de fondo con parallax */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 bg-accent-peach/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(scrollY - 500) * 0.08}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 bg-accent-raspberry/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(scrollY - 500) * -0.06}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      <Container>
        {/* Elemento decorativo de overlap - card flotante */}
        <div className="relative -mt-16 md:-mt-24 mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="bg-surface rounded-xl md:rounded-2xl shadow-artisan-large p-4 md:p-6 lg:p-8 border-2 border-accent-peach/20 rotate-[-0.5deg] hover:rotate-0 transition-all duration-300">
            <div className="flex items-center gap-3 md:gap-6">
              <div className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent-peach to-accent-raspberry flex items-center justify-center text-2xl md:text-4xl">
                💰
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-2xl font-serif font-bold text-text-primary mb-1 md:mb-2">
                  ¿Querés vender Bonnilda?
                </h3>
                <p className="text-text-secondary text-xs md:text-base">
                  Descubrí cómo empezar tu negocio con nuestros bombones premium
                </p>
              </div>
              <div className="hidden sm:block">
                <svg className="w-8 h-8 text-accent-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <SectionHeading
          title="Revendé Bonnilda"
          subtitle="Sumá un producto de calidad premium a tu catálogo. Simple, rentable y con respaldo."
          className="mb-12 md:mb-16"
        />

        {/* Grid de beneficios con animaciones - Mobile optimizado */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <Card 
                padding="md"
                className={`
                  relative overflow-hidden
                  transition-all duration-300
                  ${hoveredCard === index ? 'shadow-large -translate-y-2' : 'shadow-soft'}
                `}
              >
                {/* Emoji de fondo grande */}
                <div className={`
                  absolute -top-2 -right-2 md:-top-4 md:-right-4 text-5xl md:text-7xl opacity-5 
                  transition-all duration-500
                  ${hoveredCard === index ? 'scale-110 rotate-12 opacity-10' : 'scale-100 rotate-0'}
                `}>
                  {benefit.emoji}
                </div>

                <div className="space-y-2 md:space-y-4 relative z-10">
                  {/* Ícono con animación */}
                  <div className={`
                    text-accent-peach
                    transition-all duration-300
                    ${hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100'}
                  `}>
                    <div className="[&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Título con highlight animado */}
                  <div>
                    <h3 className="text-sm md:text-xl font-serif font-bold text-text-primary mb-1 leading-tight">
                      {benefit.title}
                    </h3>
                    <span className={`
                      inline-block text-lg md:text-2xl font-black text-accent-raspberry
                      transition-all duration-300
                      ${hoveredCard === index ? 'scale-125' : 'scale-100'}
                    `}>
                      {benefit.highlight}
                    </span>
                  </div>

                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed hidden md:block">
                    {benefit.description}
                  </p>
                </div>

                {/* Borde animado en hover */}
                <div className={`
                  absolute inset-0 border-2 border-accent-peach rounded-xl
                  transition-opacity duration-300
                  ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
                `} />
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Card con diseño mejorado */}
        <div className="relative group/cta">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-accent-peach to-accent-raspberry opacity-20 group-hover/cta:opacity-40 blur-3xl rounded-3xl transition-opacity duration-500" />
          
          <Card 
            className="relative bg-gradient-to-br from-accent-peach via-accent-raspberry to-accent-raspberry text-white overflow-hidden hover:shadow-[0_20px_60px_rgba(244,162,97,0.4)] transition-all duration-500" 
            padding="lg"
          >
            {/* Overlay animado en hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 ease-out" />

            {/* Patrón decorativo */}
            <div className="absolute inset-0 opacity-10 group-hover/cta:opacity-20 transition-opacity duration-500">
              <svg width="100%" height="100%">
                <pattern id="wholesaler-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#wholesaler-pattern)" />
              </svg>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 relative z-10 text-center">
              {/* Badge pequeño arriba */}
              <div className="inline-block">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                  🎉 Programa para revendedores
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold">
                ¿Querés empezar a vender?
              </h3>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Completá el formulario de contacto o escribinos directo por WhatsApp. 
                Te contamos todo sobre precios, cantidades mínimas y condiciones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="group shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    WhatsApp directo
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                >
                  Formulario de contacto
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default WholesalersSection

