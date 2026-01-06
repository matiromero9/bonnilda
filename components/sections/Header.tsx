'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

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

  const navLinks = [
    { label: 'Producto', href: '#producto' },
    { label: 'Mayoristas', href: '#mayoristas' },
    { label: 'Sobre Bonnilda', href: '#sobre' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border-light">
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
        <nav className="flex items-center justify-between py-4 md:py-5" aria-label="Navegación principal">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl md:text-3xl font-serif font-bold text-text-primary hover:text-accent-raspberry transition-colors"
            aria-label="Bonnilda - Ir al inicio"
          >
            Bonnilda
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
            <Button variant="primary" size="md">
              Hacer pedido
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary hover:text-accent-peach transition-colors focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2 rounded-lg"
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
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden py-4 border-t border-border-light"
            role="menu"
            aria-label="Menú de navegación"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-accent-peach font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" size="md" className="mt-2">
                Hacer pedido
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header

