'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { analytics } from '@/lib/analytics'

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative py-12 md:py-20 lg:py-28 pb-24 md:pb-36 overflow-hidden">
      {/* Formas orgánicas de fondo - Artesanal (decorativo) */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background-soft to-background" />
        <div 
          className="absolute top-20 -right-20 w-96 h-96 bg-accent-peach/15 blur-3xl"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', animation: 'blob 7s infinite' }}
        />
        <div 
          className="absolute bottom-20 -left-20 w-[32rem] h-[32rem] bg-accent-raspberry/10 blur-3xl"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animation: 'blob 8s infinite 2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-peach-light/10 blur-2xl"
          style={{ borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%', animation: 'blob 9s infinite 4s' }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Content con parallax */}
          <div 
            className="space-y-8 relative z-10"
            style={{ transform: `translateY(${scrollY * 0.1}px)`, transition: 'transform 0.1s ease-out' }}
          >
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-balance relative text-4xl md:text-5xl lg:text-6xl">
                <span className="absolute inset-0 blur-sm text-accent-peach/20 translate-y-2 select-none hidden md:block">Dulzura natural,</span>
                <span className="relative block">Dulzura natural,</span>
                <span className="relative block text-accent-raspberry italic mt-1 md:mt-2">sabor artesanal</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-xl leading-relaxed">
                Bombones de fruta 100% artesanales de San Luis. Sin conservantes, sin culpa. Cada bocado es una explosión de sabor auténtico.
              </p>
              <div className="inline-flex items-baseline gap-2 bg-accent-peach/10 px-4 py-2 rounded-full border-2 border-accent-peach/30">
                <span className="text-sm md:text-base text-text-secondary font-medium">Desde</span>
                <span className="text-2xl md:text-3xl font-bold text-accent-raspberry">$11.000</span>
                <span className="text-sm md:text-base text-text-muted">por caja</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" onClick={() => analytics.trackCTAClick('Comprar ahora', 'hero')}>
                <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                  <span className="flex items-center gap-2">
                    Comprar ahora
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </Button>
              </a>
              <a href="#mayoristas" onClick={() => analytics.trackCTAClick('Quiero revender', 'hero')}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">Quiero revender</Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6 border-t border-border-light">
              {[
                { icon: '✓', text: '100% artesanal' },
                { icon: '✓', text: 'Sin conservantes' },
                { icon: '✓', text: 'Envíos a todo el país' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-peach/20 text-accent-raspberry text-xs font-bold">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image con diseño artesanal, parallax y efecto hover de 2 imágenes */}
          <div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            style={{ transform: `translateY(${scrollY * -0.15}px)`, transition: 'transform 0.1s ease-out' }}
            role="img"
            aria-label="Bombones artesanales Bonnilda - Caja de producto que al pasar el mouse revela los bombones en su interior"
          >
            <div className="absolute inset-0 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 group">
              <div className="relative w-full h-full bg-gradient-to-br from-accent-peach to-accent-raspberry rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(200,92,92,0.3)] overflow-hidden">
                
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src="/images/hero-caja-cerrada.jpeg"
                    alt="Caja de bombones Bonnilda cerrada, con diseño de packaging rojo estilo vintage."
                    fill
                    className="object-cover transition-opacity duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  <Image
                    src="/images/hero-caja-abierta.jpeg"
                    alt="Caja de bombones Bonnilda abierta mostrando el interior con bombones de fruta de multiples colores."
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>

              </div>
            </div>

            <div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-peach-light rounded-full opacity-40 blur-xl"
              style={{ animation: 'float 6s ease-in-out infinite' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
