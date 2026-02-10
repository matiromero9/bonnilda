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
      icon: '🍑',
      title: '100% Artesanal',
      description: 'Cada bombón está hecho a mano, con amor y paciencia. Sin máquinas, sin atajos.',
    },
    {
      icon: '🌱',
      title: 'Ingredientes Naturales',
      description: 'Sólo fruta, azúcar y tiempo. Sin conservantes, sin colorantes, sin engaños.',
    },
    {
      icon: '❤️',
      title: 'Con Propósito',
      description: 'Creemos en lo auténtico, en el sabor real y en construir una marca honesta.',
    },
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            {/* TODO: Reemplazar con imagen real del proceso o de la marca */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-peach-light to-accent-raspberry-light shadow-large flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🍓</div>
                <p className="text-white/60 text-sm font-medium">
                  Imagen del proceso artesanal
                </p>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2 space-y-6">
            <SectionHeading
              title="La historia de Bonnilda"
              align="left"
            />
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Bonnilda nació de la pasión por lo artesanal y el amor por los sabores auténticos. 
                Cansados de los dulces industriales llenos de químicos, decidimos hacer las cosas diferentes.
              </p>
              <p>
                Empezamos en nuestra cocina, experimentando con frutas frescas y recetas tradicionales. 
                Cada bombón lleva horas de trabajo, pero el resultado vale la pena: un producto único, 
                natural y delicioso.
              </p>
              <p className="font-medium text-text-primary">
                Hoy, Bonnilda es sinónimo de calidad premium, y estamos orgullosos de cada bocado que sale de nuestras manos.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <SectionHeading
          title="Nuestros valores"
          subtitle="Lo que nos mueve todos los días"
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

