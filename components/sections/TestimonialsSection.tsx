'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

const TestimonialsSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const testimonials = [
    {
      quote: 'Los bombones de Bonnilda son una locura. Se venden solos en mi kiosco y mis clientes siempre vuelven a buscar más. El de frambuesa es lo más.',
      author: 'María Laura',
      role: 'Revendedora en San Isidro',
      rating: 5,
      avatar: '👩🏻',
      highlight: 'Se venden solos',
    },
    {
      quote: 'Compro para mí y para regalar. Es el regalo perfecto: original, rico y se nota que está hecho con amor. El packaging es hermoso.',
      author: 'Joaquín',
      role: 'Cliente particular',
      rating: 5,
      avatar: '👨🏽',
      highlight: 'Regalo perfecto',
    },
    {
      quote: 'Empecé revendiendo hace 6 meses y no paro de crecer. La calidad es impecable y el soporte de Bonnilda es excelente. 100% recomendable.',
      author: 'Carolina',
      role: 'Revendedora en Palermo',
      rating: 5,
      avatar: '👩🏼',
      highlight: 'Excelente soporte',
    },
  ]

  const rotations = ['rotate-[-1deg]', 'rotate-[0.5deg]', 'rotate-[-0.5deg]']
  const shadows = [
    'shadow-[6px_6px_0px_0px_rgba(244,162,97,0.2)]',
    'shadow-[6px_6px_0px_0px_rgba(200,92,92,0.2)]',
    'shadow-[6px_6px_0px_0px_rgba(249,201,160,0.2)]',
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="py-12 md:py-20 pb-24 md:pb-36 bg-background relative overflow-hidden">
      {/* Decoración de fondo con parallax */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent-peach/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(scrollY - 1200) * 0.1}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-raspberry/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${(scrollY - 1200) * -0.08}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      <Container>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Lo que dicen nuestros clientes"
            subtitle="La mejor publicidad son las palabras de quienes ya probaron Bonnilda"
            className="mb-12 md:mb-16"
          />

          {/* Mobile: Carousel | Desktop: Grid */}
          
          {/* Carousel Mobile */}
          <div 
            className="md:hidden relative" 
            role="region" 
            aria-label="Testimonios de clientes"
            aria-roledescription="carousel"
          >
            <div 
              className="overflow-hidden"
              aria-live="polite"
              aria-atomic="false"
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                role="group"
                aria-label={`Testimonio ${currentSlide + 1} de ${testimonials.length}`}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card 
                      padding="lg"
                      className={`
                        relative
                        h-full
                        border-2 border-text-primary/5
                        ${shadows[index]}
                        transition-all duration-300
                      `}
                    >
                      {/* Badge flotante con highlight */}
                      <div className="absolute -top-3 -right-3 bg-accent-peach text-white px-3 py-1 rounded-full text-xs font-bold shadow-md rotate-6">
                        {testimonial.highlight}
                      </div>

                      <div className="space-y-5">
                        {/* Estrellas de rating */}
                        <div className="flex gap-1" role="img" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="w-5 h-5 text-accent-peach" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Quote */}
                        <div className="relative">
                          <svg 
                            className="absolute -top-2 -left-2 w-8 h-8 text-accent-peach-light" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <p className="text-text-primary leading-relaxed pl-6 relative z-10 text-sm">
                            {testimonial.quote}
                          </p>
                        </div>

                        {/* Author info */}
                        <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-border-light">
                          <div className="relative flex-shrink-0">
                            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent-peach-light to-accent-raspberry-light flex items-center justify-center text-2xl shadow-sm">
                              {testimonial.avatar}
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-text-primary text-sm">
                              {testimonial.author}
                            </p>
                            <p className="text-xs text-text-muted">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-surface shadow-medium border border-border flex items-center justify-center text-accent-peach hover:bg-accent-peach hover:text-white transition-all z-10 focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2"
              aria-label="Ver testimonio anterior"
              aria-controls="testimonials-carousel"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-surface shadow-medium border border-border flex items-center justify-center text-accent-peach hover:bg-accent-peach hover:text-white transition-all z-10 focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2"
              aria-label="Ver testimonio siguiente"
              aria-controls="testimonials-carousel"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-accent-peach w-6' 
                      : 'bg-border hover:bg-accent-peach/50'
                  }`}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid Desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`
                  ${rotations[index]}
                  hover:rotate-0
                  transition-all duration-300
                  ${index === 1 ? 'md:translate-y-8' : ''}
                `}
              >
                <Card 
                  padding="lg"
                  className={`
                    relative
                    h-full
                    border-2 border-text-primary/5
                    ${shadows[index]}
                    hover:shadow-[8px_8px_0px_0px_rgba(62,39,35,0.15)]
                    hover:-translate-y-2
                    transition-all duration-300
                    group
                  `}
                >
                  {/* Badge flotante con highlight */}
                  <div className="absolute -top-3 -right-3 bg-accent-peach text-white px-3 py-1 rounded-full text-xs font-bold shadow-md rotate-6 group-hover:rotate-0 transition-transform">
                    {testimonial.highlight}
                  </div>

                  <div className="space-y-5">
                    {/* Estrellas de rating */}
                    <div className="flex gap-1" role="img" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-accent-peach" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote con mejor diseño */}
                    <div className="relative">
                      <svg 
                        className="absolute -top-2 -left-2 w-8 h-8 text-accent-peach-light" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-text-primary leading-relaxed pl-6 relative z-10">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author info con diseño mejorado */}
                    <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-border-light group-hover:border-accent-peach/30 transition-colors duration-300">
                      {/* Avatar emoji con hover effect */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-accent-peach/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent-peach-light to-accent-raspberry-light flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          {testimonial.avatar}
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-bold text-text-primary group-hover:text-accent-raspberry transition-colors duration-300">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Elemento de confianza al final */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-surface px-6 py-4 rounded-2xl shadow-soft border border-border-light hover:shadow-artisan-medium hover:border-accent-peach/30 hover:-translate-y-1 transition-all duration-300 group/trust">
              <div className="flex -space-x-2">
                {['👨🏻', '👩🏽', '👨🏼', '👩🏻', '👨🏽'].map((emoji, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-peach-light to-accent-raspberry-light flex items-center justify-center border-2 border-white text-lg group-hover/trust:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-text-primary group-hover/trust:text-accent-raspberry transition-colors duration-300">+500 clientes felices</p>
                <p className="text-sm text-text-muted group-hover/trust:text-text-secondary transition-colors duration-300">y sumando cada día</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection

