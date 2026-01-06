'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

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
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-soft to-background" />
        
        {/* Blob 1 - Durazno */}
        <div 
          className="absolute top-20 -right-20 w-96 h-96 bg-accent-peach/15 blur-3xl"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: 'blob 7s infinite',
          }}
        />
        
        {/* Blob 2 - Frambuesa */}
        <div 
          className="absolute bottom-20 -left-20 w-[32rem] h-[32rem] bg-accent-raspberry/10 blur-3xl"
          style={{
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            animation: 'blob 8s infinite 2s',
          }}
        />
        
        {/* Blob 3 - Peach light */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-peach-light/10 blur-2xl"
          style={{
            borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
            animation: 'blob 9s infinite 4s',
          }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Content con parallax */}
          <div 
            className="space-y-8 relative z-10"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="space-y-4 md:space-y-6">
              {/* Headline con efecto de profundidad */}
              <h1 className="text-balance relative text-4xl md:text-5xl lg:text-6xl">
                <span className="absolute inset-0 blur-sm text-accent-peach/20 translate-y-2 select-none hidden md:block">
                  Dulzura natural,
                </span>
                <span className="relative block">
                  Dulzura natural,
                </span>
                <span className="relative block text-accent-raspberry italic mt-1 md:mt-2">
                  sabor artesanal
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-xl leading-relaxed">
                Bombones de fruta 100% artesanales. Sin conservantes, sin culpa. 
                Cada bocado es una explosión de sabor auténtico.
              </p>
            </div>

            {/* CTAs con hover mejorado */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="group">
                <span className="flex items-center gap-2">
                  Comprar ahora
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              <a href="#mayoristas">
                <Button variant="secondary" size="lg">
                  Quiero revender
                </Button>
              </a>
            </div>

            {/* Trust indicators mejorados */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6 border-t border-border-light">
              {[
                { icon: '✓', text: '100% artesanal' },
                { icon: '✓', text: 'Sin conservantes' },
                { icon: '✓', text: 'Envíos a todo el país' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-peach/20 text-accent-raspberry text-xs font-bold">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image con diseño artesanal y parallax */}
          <div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            style={{
              transform: `translateY(${scrollY * -0.15}px)`,
              transition: 'transform 0.1s ease-out',
            }}
            role="img"
            aria-label="Bombones artesanales Bonnilda - Producto destacado elaborado con frutas naturales"
          >
            {/* TODO: Reemplazar con imagen real del producto */}
            
            {/* Container principal con rotación sutil */}
            <div className="absolute inset-0 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 group">
              <div 
                className="relative w-full h-full bg-gradient-to-br from-accent-peach to-accent-raspberry rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(200,92,92,0.3)] overflow-hidden"
              >
                {/* Textura de fondo sutil */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" aria-hidden="true">
                  <svg width="100%" height="100%">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>

                {/* Overlay con efecto reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Contenido del placeholder */}
                <div className="relative flex flex-col items-center justify-center h-full p-8 group-hover:scale-105 transition-transform duration-500" aria-hidden="true">
                  {/* Ícono grande */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full group-hover:bg-white/40 transition-all duration-500" />
                    <svg className="w-40 h-40 text-white/90 relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                    </svg>
                  </div>
                  
                  <p className="text-white text-lg font-medium mb-2 group-hover:scale-110 transition-transform duration-500">Imagen del producto</p>
                  <p className="text-white/70 group-hover:text-white/90 text-sm text-center max-w-xs transition-colors duration-500">
                    Foto de alta calidad de tus bombones artesanales
                  </p>
                </div>

                {/* Badge "sticker" artesanal */}
                <div className="absolute -top-4 -right-4 rotate-12 hover:rotate-6 transition-transform" aria-hidden="true">
                  <div className="bg-accent-raspberry text-white px-5 py-3 rounded-full shadow-lg border-4 border-white">
                    <p className="text-sm font-bold uppercase tracking-wide">Artesanal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento decorativo flotante */}
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

