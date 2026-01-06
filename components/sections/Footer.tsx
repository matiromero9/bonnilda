import React from 'react'
import Container from '@/components/ui/Container'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Nuestros sabores', href: '#producto' },
      { label: 'Cómo compramos', href: '#sobre' },
      { label: 'Envíos y entregas', href: '#faq' },
    ],
    business: [
      { label: 'Quiero revender', href: '#mayoristas' },
      { label: 'Precios mayoristas', href: '#mayoristas' },
      { label: 'Contacto', href: '#contacto' },
    ],
  }

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#', // TODO: Agregar link real
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#', // TODO: Agregar link real
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: '#', // TODO: Agregar link real de WhatsApp Business
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-text-primary text-white py-8 md:py-14 -mt-16 md:-mt-28 pt-20 md:pt-36 relative" role="contentinfo">
      {/* Elemento decorativo de overlap superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
        <div className="bg-surface px-8 py-4 rounded-2xl shadow-artisan-large border-2 border-accent-peach/30 rotate-[2deg] hover:rotate-0 transition-all duration-300">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📧</span>
            <div className="text-left">
              <p className="text-text-primary font-bold text-sm">¡Hablemos!</p>
              <p className="text-text-muted text-xs">Estamos para ayudarte</p>
            </div>
          </div>
        </div>
      </div>

      <Container>
        {/* Mobile: Compacto | Desktop: Completo */}
        
        {/* Mobile Footer - Ultra compacto */}
        <div className="md:hidden space-y-6 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-2">Bonnilda</h3>
            <p className="text-white/80 text-sm mb-4">
              Bombones artesanales de Buenos Aires 🇦🇷
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-3 justify-center mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent-peach hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2 focus:ring-offset-text-primary"
                  aria-label={`Seguinos en ${social.name}`}
                >
                  <span aria-hidden="true">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Info de contacto compacta */}
            <div className="space-y-2 text-sm text-white/70">
              <p>📱 WhatsApp: +54 9 11 XXXX-XXXX</p>
              <p>✉️ info@bonnilda.com</p>
            </div>
          </div>

          {/* Links rápidos en 2 columnas */}
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div>
              <h4 className="font-bold text-white mb-2">Producto</h4>
              {footerLinks.product.slice(0, 2).map((link) => (
                <a key={link.href} href={link.href} className="block text-white/70 hover:text-accent-peach py-1">
                  {link.label}
                </a>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Negocio</h4>
              {footerLinks.business.slice(0, 2).map((link) => (
                <a key={link.href} href={link.href} className="block text-white/70 hover:text-accent-peach py-1">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Footer - Completo */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand - Más amplio */}
          <div className="md:col-span-5">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Bonnilda</h3>
            <p className="text-white/80 text-base mb-6 leading-relaxed">
              Bombones de fruta 100% artesanales. Dulzura natural, sabor auténtico.
              Cada bombón está hecho a mano con frutas seleccionadas y mucho amor en Buenos Aires, Argentina.
            </p>
            
            {/* Info de contacto destacada */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/70 hover:text-accent-peach transition-colors group">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">WhatsApp: +54 9 11 XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 hover:text-accent-peach transition-colors group">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@bonnilda.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Buenos Aires, Argentina 🇦🇷</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <p className="text-white/60 text-sm mb-3 font-medium">Seguinos en redes</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent-peach hover:text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2 focus:ring-offset-text-primary"
                    aria-label={`Seguinos en ${social.name}`}
                  >
                    <span aria-hidden="true">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links - Producto */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4 text-lg">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent-peach transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-peach opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Negocios */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4 text-lg">Revendedores</h4>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent-peach transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-peach opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios y beneficios */}
          <div className="md:col-span-3">
            <h4 className="font-bold mb-4 text-lg">¿Por qué elegirnos?</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <svg className="w-5 h-5 text-accent-peach flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% artesanal y natural</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <svg className="w-5 h-5 text-accent-peach flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Envíos a todo el país</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <svg className="w-5 h-5 text-accent-peach flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Precios mayoristas disponibles</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <svg className="w-5 h-5 text-accent-peach flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Atención personalizada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom - Mejorado */}
        <div className="pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Bonnilda. Todos los derechos reservados. Hecho con ❤️ en Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs md:text-sm text-center">
              <a href="#" className="text-white/60 hover:text-accent-peach transition-colors">Términos y Condiciones</a>
              <a href="#" className="text-white/60 hover:text-accent-peach transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

