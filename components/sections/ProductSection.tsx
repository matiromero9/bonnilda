import React from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

const ProductSection: React.FC = () => {
  const products = [
    {
      name: 'Durazno & Miel',
      description: 'La combinación perfecta entre lo frutal y lo dulce. Durazno natural con un toque de miel artesanal.',
      benefits: ['Alto en fibra', 'Sin azúcar añadida', 'Energía natural'],
      badge: 'Más pedido',
      emoji: '🍑',
      rotation: 'rotate-[-1.5deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(244,162,97,0.25)]',
    },
    {
      name: 'Frambuesa Silvestre',
      description: 'Frambuesas seleccionadas con ese toque ácido que conquista. Intenso, vibrante y adictivo.',
      benefits: ['Antioxidantes', 'Sabor intenso', 'Bajo en calorías'],
      badge: 'Favorito',
      emoji: '🫐',
      rotation: 'rotate-[0.5deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(200,92,92,0.25)]',
    },
    {
      name: 'Frutilla del Bosque',
      description: 'Dulce, suave y delicada. Frutillas frescas transformadas en pequeñas joyas de sabor.',
      benefits: ['Vitamina C', 'Sabor clásico', 'Para toda la familia'],
      badge: 'Clásico',
      emoji: '🍓',
      rotation: 'rotate-[-0.8deg]',
      hoverRotation: 'hover:rotate-0',
      shadowColor: 'shadow-[6px_6px_0px_0px_rgba(232,155,155,0.25)]',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
                padding="lg"
                className={`
                  relative
                  border-2 border-text-primary/5
                  ${product.shadowColor}
                  hover:shadow-[8px_8px_0px_0px_rgba(62,39,35,0.15)]
                  hover:-translate-y-2
                  transition-all duration-300
                  group
                `}
              >
                {/* Emoji decorativo grande en el fondo */}
                <div className="absolute -top-4 -right-4 text-[120px] opacity-5 select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                  {product.emoji}
                </div>

                <div className="space-y-5 relative z-10">
                  {/* Header con badge estilo sticker */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-text-primary mb-1">
                        {product.name}
                      </h3>
                      <span className="text-4xl">{product.emoji}</span>
                    </div>
                    
                    {/* Badge artesanal tipo sticker */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent-peach/20 blur-md rounded-full" />
                      <div className="relative bg-accent-peach-light text-accent-raspberry px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border-2 border-accent-peach/30 shadow-sm rotate-3 group-hover:rotate-0 transition-transform">
                        {product.badge}
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed text-base">
                    {product.description}
                  </p>

                  {/* Beneficios con diseño mejorado */}
                  <div className="pt-4 space-y-3 border-t border-border-light">
                    {product.benefits.map((benefit, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 text-sm text-text-secondary group/benefit"
                      >
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-peach/20 text-accent-raspberry flex-shrink-0 group-hover/benefit:bg-accent-peach/30 transition-colors">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA adicional con diseño artesanal */}
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-2 bg-accent-peach/10 blur-xl rounded-full" />
            <p className="relative text-text-muted text-sm mb-4">
              ¿No sabés cuál elegir? Cada sabor es una experiencia única
            </p>
          </div>
        </div>

        {/* TODO: Agregar galería de imágenes de productos */}
      </Container>
    </section>
  )
}

export default ProductSection

