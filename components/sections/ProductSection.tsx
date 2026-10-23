import React from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

const ProductSection: React.FC = () => {
  const products = [
    {
      name: 'Frutilla',
      description: 'Dulce, suave y delicada. Frutillas frescas transformadas en pequeñas joyas de sabor.',
      emoji: '🍓',
      rotation: 'rotate-[-1.5deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(232,155,155,0.25)]',
    },
    {
      name: 'Naranja',
      description: 'El cítrico que refresca. Naranja natural con un sabor intenso y vibrante.',
      emoji: '🍊',
      rotation: 'rotate-[0.5deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(244,162,97,0.25)]',
    },
    {
      name: 'Manzana',
      description: 'El clásico de siempre. Manzana fresca con ese toque dulce que enamora.',
      emoji: '🍏',
      rotation: 'rotate-[-0.8deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(144,238,144,0.25)]',
    },
    {
      name: 'Ananá',
      description: 'Tropical y exótico. El sabor del ananá en cada bocado.',
      emoji: '🍍',
      rotation: 'rotate-[0.8deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(255,223,0,0.25)]',
    },
    {
      name: 'Uva',
      description: 'Suave y elegante. El sabor de la uva en su máxima expresión.',
      emoji: '🍇',
      rotation: 'rotate-[-0.5deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(128,0,128,0.25)]',
    },
    {
      name: 'Cereza',
      description: 'Intenso y seductor. Cerezas seleccionadas para un sabor inolvidable.',
      emoji: '🍒',
      rotation: 'rotate-[1deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(200,92,92,0.25)]',
    },
  ]

  return (
    <section id="producto" className="py-16 md:py-24 bg-background-soft relative overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="product-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-accent-peach" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#product-pattern)" />
        </svg>
      </div>

      <Container>
        <SectionHeading
          title="Nuestros sabores"
          subtitle="Cada bombón es único, hecho con frutas seleccionadas y mucho amor"
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`
                ${product.rotation}
                ${product.hoverRotation}
                transition-all duration-300
              `}
            >
              <Card 
                padding="md"
                className={`
                  relative
                  border-2 border-text-primary/5
                  ${product.shadowColor}
                  hover:shadow-[8px_8px_0px_0px_rgba(62,39,35,0.15)]
                  hover:-translate-y-2
                  transition-all duration-300
                  group
                  text-center
                `}
              >
                <div className="space-y-3 relative z-10">
                  <span className="text-5xl block">{product.emoji}</span>
                  <h3 className="text-lg font-serif font-bold text-text-primary">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA adicional con diseño artesanal */}
        <div className="mt-12 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-2 bg-accent-peach/10 blur-xl rounded-full" />
            <p className="relative text-text-muted text-sm">
              ¿No sabés cuál elegir? Cada sabor es una experiencia única. ¡Consultá precios por WhatsApp!
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductSection

