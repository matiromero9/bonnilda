'use client'

import React, { useState } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  const faqs = [
    
    {
      question: '¿Cuál es la cantidad mínima para compra mayorista?',
      answer: 'Para revendedores y mayoristas, la compra mínima es de 16 cajas (cada caja trae 56 unidades). Contamos con precios especiales y descuentos según la cantidad. Consultanos por WhatsApp para más info.',
    },
    {
      question: '¿Hacen envíos a todo el país?',
      answer: 'Sí, despachamos a todo el país. En San Luis y Córdoba capital el envío es gratis en compras mayores a 4 cajas. Para el resto del país trabajamos con Vía Cargo, coordinando la mejor opción según tu ubicación.',
    },
    {
      question: '¿Cuánto duran los bombones?',
      answer: 'Los bombones tienen 6 meses de vencimiento desde la fecha de elaboración que figura en el packaging. Deben conservarse en lugar fresco, seco y alejado de la luz solar.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 md:py-20 -mt-16 md:-mt-28 pt-24 md:pt-36 bg-background-soft relative">
      {/* Elemento decorativo de overlap superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-accent-peach text-white px-6 py-3 rounded-full shadow-large font-bold text-sm md:text-base whitespace-nowrap rotate-[-3deg] hover:rotate-0 transition-all duration-300">
          ❓ ¿Tenés dudas?
        </div>
      </div>

      <Container>
        <SectionHeading
          title="Preguntas frecuentes"
          subtitle="Todo lo que necesitás saber sobre Bonnilda"
          className="mb-12 md:mb-16"
        />

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.slice(0, showAll ? faqs.length : 2).map((faq, index) => {
            const isOpen = openIndex === index
            const headingId = `faq-heading-${index}`
            const panelId = `faq-panel-${index}`
            
            return (
              <div
                key={index}
                className={`
                  bg-surface rounded-xl shadow-soft border overflow-hidden 
                  transition-all duration-300 group/faq
                  ${isOpen
                    ? 'border-accent-peach shadow-artisan-medium' 
                    : 'border-border-light hover:border-accent-peach/50 hover:shadow-medium'
                  }
                `}
              >
                <h3 id={headingId}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-surface-hover transition-colors relative focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-inset rounded-xl"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    {/* Indicador visual de hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-peach scale-y-0 group-hover/faq:scale-y-100 transition-transform duration-300 origin-top" aria-hidden="true" />
                    
                    <span className={`
                      font-semibold text-base md:text-lg transition-colors duration-300 pl-2
                      ${isOpen ? 'text-accent-raspberry' : 'text-text-primary group-hover/faq:text-accent-peach'}
                    `}>
                      {faq.question}
                    </span>
                    <svg
                      className={`
                        w-5 h-5 text-accent-peach transition-all duration-300 flex-shrink-0
                        group-hover/faq:scale-125
                        ${isOpen ? 'rotate-180' : ''}
                      `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h3>
                
                {isOpen && (
                  <div 
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-4 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-text-secondary leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
          
          {/* Botón Ver más / Ver menos */}
          {!showAll && faqs.length > 2 && (
            <div className="text-center pt-4">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover text-text-primary font-semibold rounded-lg border-2 border-border hover:border-accent-peach transition-all hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2"
                aria-label={`Mostrar ${faqs.length - 2} preguntas adicionales`}
              >
                <span>Ver todas las preguntas</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default FAQSection

