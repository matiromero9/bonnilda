'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { analytics } from '@/lib/analytics'
import { SOCIAL_MEDIA, ORDER_INFO } from '@/constants/contact'

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isParallaxEnabled, setIsParallaxEnabled] = useState(false)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateParallaxMode = () => {
      setIsParallaxEnabled(desktopQuery.matches && !reducedMotionQuery.matches)
    }

    updateParallaxMode()

    desktopQuery.addEventListener('change', updateParallaxMode)
    reducedMotionQuery.addEventListener('change', updateParallaxMode)

    return () => {
      desktopQuery.removeEventListener('change', updateParallaxMode)
      reducedMotionQuery.removeEventListener('change', updateParallaxMode)
    }
  }, [])

  useEffect(() => {
    if (!isParallaxEnabled) {
      setScrollY(0)
      return
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isParallaxEnabled])

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
            style={
              isParallaxEnabled
                ? { transform: `translateY(${scrollY * 0.1}px)`, transition: 'transform 0.1s ease-out' }
                : undefined
            }
          >
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-balance relative text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="relative block">Dulzura auténtica,</span>
                <span className="relative block text-accent-peach mt-1 md:mt-2">sabor artesanal</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-xl leading-relaxed">
                Bombones frutales 100% artesanales de Los Molles, San Luis. Hechos a mano con la receta de siempre. Cada bocado es una explosión de sabor.
              </p>
              <div className="inline-flex items-center gap-2 bg-accent-peach/10 px-4 py-2 rounded-full border-2 border-accent-peach/30">
                <span className="text-sm md:text-base text-text-secondary font-medium">📦 Envíos a todo el país</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={SOCIAL_MEDIA.whatsapp.urlWithMessage(ORDER_INFO.whatsappMessage)} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => analytics.trackCTAClick('Comprar ahora', 'hero')}
              >
                <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Pedir por WhatsApp
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
                { icon: '✓', text: 'Hecho a mano' },
                { icon: '✓', text: 'Envíos a todo el país' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-peach/20 text-accent-peach text-xs font-bold">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image con diseño artesanal, parallax y efecto hover de 2 imágenes */}
          <div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            style={
              isParallaxEnabled
                ? { transform: `translateY(${scrollY * -0.15}px)`, transition: 'transform 0.1s ease-out' }
                : undefined
            }
            role="img"
            aria-label="Bombones artesanales Bonnilda - Caja de producto que al pasar el mouse revela los bombones en su interior"
          >
            <div className="absolute inset-0 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 group">
              <div className="relative w-full h-full bg-gradient-to-br from-accent-peach to-accent-raspberry rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(254,3,0,0.3)] overflow-hidden">
                
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
                    alt="Caja de bombones Bonnilda abierta mostrando el interior con bombones frutales de múltiples colores."
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
