'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import WhatsAppLink from '@/components/ui/WhatsAppLink'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Sabores', href: '#producto' },
    { label: 'Historia', href: '#sobre' },
    { label: 'Cómo pedir', href: '#como-pedir' },
    { label: 'Mayoristas', href: '#mayoristas' },
    { label: 'Opiniones', href: '#testimonios' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <>
    {mobileMenuOpen && (
      <button
        type="button"
        className="fixed inset-0 z-40 bg-text-primary/50 md:hidden"
        aria-label="Cerrar menú"
        onClick={() => setMobileMenuOpen(false)}
      />
    )}
    <header
      className={`sticky top-0 z-50 border-b border-border-light ${
        mobileMenuOpen ? 'bg-background' : 'bg-background/95 backdrop-blur-sm'
      }`}
    >
      {/* Scroll Progress Bar - Decorativo */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-border-light overflow-hidden" 
        aria-hidden="true"
        role="presentation"
      >
        <div 
          className="h-full bg-gradient-to-r from-accent-peach via-accent-raspberry to-accent-peach transition-all duration-150 ease-out"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: scrollProgress > 0 ? '0 0 10px rgba(244, 162, 97, 0.5)' : 'none'
          }}
        />
      </div>

      <Container>
        <nav className="relative z-20 flex items-center justify-between py-5 md:py-6" aria-label="Navegación principal">
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Bonnilda - Ir al inicio"
          >
            <Image
              src="/images/logo-bonnilda.png"
              alt="Bonnilda"
              width={861}
              height={456}
              className="h-14 md:h-18 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-accent-peach font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <WhatsAppLink
              location="header"
              variant="primary"
              size="md"
            >
              Hacer pedido
            </WhatsAppLink>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <WhatsAppLink
              location="header"
              variant="primary"
              size="sm"
              className="relative z-10 min-h-11 px-4"
            >
              Pedir
            </WhatsAppLink>
            <button
              className="inline-flex items-center justify-center min-h-11 min-w-11 text-text-primary hover:text-accent-peach transition-colors focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu — panel opaco a ancho completo, por encima del contenido */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-20 md:hidden bg-background border-b border-border-light shadow-large"
          role="menu"
          aria-label="Menú de navegación"
        >
          <Container>
            <div className="flex flex-col py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className="flex items-center min-h-11 text-text-secondary hover:text-accent-peach font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <WhatsAppLink
                location="header"
                variant="primary"
                size="md"
                className="mt-3 mb-3 w-full min-h-11"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hacer pedido
              </WhatsAppLink>
            </div>
          </Container>
        </div>
      )}
    </header>
    </>
  )
}

export default Header
