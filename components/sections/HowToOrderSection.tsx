import React from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import WhatsAppLink from '@/components/ui/WhatsAppLink'
import { ORDER_INFO } from '@/constants/contact'

const HowToOrderSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Escribinos por WhatsApp',
      description: 'Mandanos un mensaje contándonos qué sabores querés y la cantidad.',
    },
    {
      number: '2',
      title: 'Confirmá tu pedido',
      description: 'Te pasamos el total y coordinamos la forma de pago: efectivo, transferencia o Mercado Pago.',
    },
    {
      number: '3',
      title: 'Despacho en 48 hs',
      description: 'Confirmado el pago, despachamos en 48 hs a todo el país.',
    },
  ]

  return (
    <section id="como-pedir" className="py-16 md:py-24 bg-background-soft relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <pattern id="order-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-accent-peach" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#order-pattern)" />
        </svg>
      </div>

      <Container>
        <SectionHeading
          title="¿Cómo pedir?"
          subtitle="Escribinos por WhatsApp, coordinamos el pago y despachamos en 48 hs."
          className="mb-12 md:mb-16"
        />

        <ol className="mb-12 max-w-2xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex gap-4 md:gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-peach text-white font-bold flex items-center justify-center text-lg shadow-md">
                {step.number}
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="text-xl font-serif font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="relative z-10 bg-surface rounded-2xl p-8 shadow-soft border border-border-light">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-text-primary">
                Formas de pago
              </h3>
              <ul className="space-y-3">
                {ORDER_INFO.paymentMethods.map((method, index) => (
                  <li key={index} className="flex items-center gap-3 text-text-secondary">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-peach/20 text-accent-raspberry flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-medium">{method}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm md:text-base text-text-secondary">
                Despacho en 48 hs desde San Luis, a todo el país.
              </p>
            </div>
            <div className="relative z-10 text-center md:text-right">
              <WhatsAppLink
                location="como-pedir"
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto min-h-12"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hacer mi pedido
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowToOrderSection
