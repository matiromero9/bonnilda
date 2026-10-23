import React from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

/**
 * Sección "Sobre Bonnilda" - OPCIONAL
 * 
 * Para usar esta sección, importarla en app/page.tsx:
 * import AboutSection from '@/components/sections/AboutSection'
 * 
 * Y agregarla después del Hero o donde prefieras:
 * <AboutSection />
 */

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: '👵',
      title: 'Receta de la abuela',
      description: 'La misma receta que nos hacía la abuela Nilda cuando éramos chicos.',
    },
    {
      icon: '🍓',
      title: 'La fruta es protagonista',
      description: 'Sin moldes, cada bombón es distinto. Hechos a mano con fruta de verdad.',
    },
    {
      icon: '❤️',
      title: 'Hecho con cariño',
      description: 'Crecimos, sumamos herramientas, pero mantenemos el mismo amor de siempre.',
    },
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-peach-light to-accent-raspberry-light shadow-large flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🍓</div>
                <p className="text-white/60 text-sm font-medium">
                  Desde Los Molles, San Luis
                </p>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2 space-y-6">
            <SectionHeading
              title="Nuestra historia"
              align="left"
            />
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Bonnilda nació para recrear los bombones que nos hacía la abuela Nilda cuando éramos chicos.
              </p>
              <p>
                En 2013, nuestros padres empezaron a elaborarlos a mano en Los Molles, San Luis: sin moldes, 
                cada uno distinto, con la fruta como protagonista.
              </p>
              <p className="font-medium text-text-primary">
                Con los años fuimos creciendo, sumamos maquinaria y herramientas de fábrica, pero mantenemos 
                la misma receta y el mismo cariño de siempre.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <SectionHeading
          title="Lo que nos define"
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} padding="lg" className="text-center">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-serif font-bold text-text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutSection

