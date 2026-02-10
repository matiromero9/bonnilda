'use client'

import React, { useState, useEffect } from 'react'
import { SOCIAL_MEDIA } from '@/constants/contact'
import { analytics } from '@/lib/analytics'

/**
 * CTA Flotante que aparece después de scrollear
 * Aumenta conversión al mantener el CTA siempre visible
 */
const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de scrollear 300px
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    analytics.trackWhatsAppClick('floating-cta')
  }

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-40 
        transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}
      role="complementary"
      aria-label="Acción rápida de contacto"
    >
      {/* Mobile: Botón circular con icono */}
      <a
        href={SOCIAL_MEDIA.whatsapp.urlWithMessage('Hola! Quiero hacer un pedido de bombones Bonnilda 🍑')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="
          md:hidden
          flex items-center justify-center
          w-14 h-14
          bg-gradient-to-br from-accent-peach to-accent-raspberry
          rounded-full
          shadow-[0_8px_30px_rgba(244,162,97,0.4)]
          hover:shadow-[0_12px_40px_rgba(244,162,97,0.6)]
          hover:scale-110
          active:scale-95
          transition-all duration-300
          group
          focus:outline-none focus:ring-4 focus:ring-accent-peach/50
        "
        aria-label="Hacer pedido por WhatsApp"
      >
        <svg 
          className="w-7 h-7 text-white group-hover:scale-110 transition-transform" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Indicador de "pulso" */}
        <span 
          className="absolute inset-0 rounded-full bg-accent-peach animate-ping opacity-20"
          aria-hidden="true"
        />
      </a>

      {/* Desktop: Botón expandido con texto */}
      <a
        href={SOCIAL_MEDIA.whatsapp.urlWithMessage('Hola! Quiero hacer un pedido de bombones Bonnilda 🍑')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="
          hidden md:flex
          items-center gap-3
          px-6 py-4
          bg-gradient-to-br from-accent-peach to-accent-raspberry
          text-white font-bold text-lg
          rounded-full
          shadow-[0_8px_30px_rgba(244,162,97,0.4)]
          hover:shadow-[0_12px_40px_rgba(244,162,97,0.6)]
          hover:scale-105
          active:scale-95
          transition-all duration-300
          group
          focus:outline-none focus:ring-4 focus:ring-accent-peach/50
        "
        aria-label="Hacer pedido por WhatsApp"
      >
        <svg 
          className="w-6 h-6 group-hover:scale-110 transition-transform" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="flex flex-col items-start">
          <span className="text-sm font-normal opacity-90">Hacer pedido</span>
          <span className="text-base font-bold">WhatsApp</span>
        </span>

        {/* Indicador de "pulso" */}
        <span 
          className="absolute inset-0 rounded-full bg-accent-peach animate-ping opacity-20"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}

export default FloatingCTA

