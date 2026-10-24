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
  const [showOpenBox, setShowOpenBox] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateParallaxMode = () => {
      setIsParallaxEnabled(desktopQuery.matches && !reducedMotionQuery.matches)
    }

    const updateMobileMode = () => {
      setIsMobile(mobileQuery.matches)
    }

    updateParallaxMode()
    updateMobileMode()

    desktopQuery.addEventListener('change', updateParallaxMode)
    mobileQuery.addEventListener('change', updateMobileMode)
    reducedMotionQuery.addEventListener('change', updateParallaxMode)

    return () => {
      desktopQuery.removeEventListener('change', updateParallaxMode)
      mobileQuery.removeEventListener('change', updateMobileMode)
      reducedMotionQuery.removeEventListener('change', updateParallaxMode)
    }
  }, [])

  const toggleImage = () => {
    setShowOpenBox(!showOpenBox)
  }

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
        <div className="absolute inset-0 bg-gradient-to-b from-background-soft to-background pointer-events-none" />
        <div 
          className="absolute top-20 -right-20 w-96 h-96 bg-accent-peach/15 blur-3xl pointer-events-none"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', animation: 'blob 7s infinite' }}
        />
        <div 
          className="absolute bottom-20 -left-20 w-[32rem] h-[32rem] bg-accent-raspberry/10 blur-3xl pointer-events-none"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animation: 'blob 8s infinite 2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-peach-light/10 blur-2xl pointer-events-none"
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
                <span className="relative block">Bombones frutales artesanales</span>
                <span className="relative block text-accent-peach mt-1 md:mt-2">de Los Molles, San Luis</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-xl leading-relaxed">
                Hechos a mano con la receta de siempre. Cada bocado es una explosión de sabor.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="group w-full sm:w-auto min-h-12"
                href={SOCIAL_MEDIA.whatsapp.urlWithMessage(ORDER_INFO.whatsappMessage)} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => analytics.trackCTAClick('Comprar ahora', 'hero')}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Pedir por WhatsApp
                </span>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto"
                href="#mayoristas" 
                onClick={() => analytics.trackCTAClick('Quiero revender', 'hero')}
              >
                Quiero revender
              </Button>
            </div>
          </div>

          {/* Image con diseño artesanal y parallax */}
          <div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            style={
              isParallaxEnabled
                ? { transform: `translateY(${scrollY * -0.15}px)`, transition: 'transform 0.1s ease-out' }
                : undefined
            }
          >
            <button
              onClick={toggleImage}
              className="absolute inset-0 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 cursor-pointer focus:outline-none focus:ring-4 focus:ring-accent-peach/50 rounded-[2.5rem]"
              aria-label={showOpenBox ? 'Mostrar caja cerrada' : 'Mostrar caja abierta'}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-accent-peach to-accent-raspberry rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(254,3,0,0.3)] overflow-hidden">
                <Image
                  src={showOpenBox ? '/images/hero-caja-abierta.jpeg' : '/images/hero-caja-cerrada.jpeg'}
                  alt={showOpenBox 
                    ? 'Caja de bombones Bonnilda abierta mostrando bombones de fruta artesanales de múltiples colores y sabores' 
                    : 'Caja de bombones Bonnilda cerrada con el packaging'}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </button>

            {/* Hint mobile */}
            {isMobile && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full pointer-events-none">
                Tocá la foto
              </div>
            )}

            <div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-peach-light rounded-full opacity-40 blur-xl pointer-events-none"
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
