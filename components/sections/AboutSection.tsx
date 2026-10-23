'use client'

import React, { useRef, useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)
    setShowPlayButton(motionQuery.matches)

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
      setShowPlayButton(e.matches)
    }
    motionQuery.addEventListener('change', handleMotionChange)
    return () => motionQuery.removeEventListener('change', handleMotionChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {
              setShowPlayButton(true)
            })
          } else {
            video.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
      }
    }
  }

  const values = [
    {
      icon: '👵',
      title: 'Receta de la abuela',
      description: 'La misma receta que nos hacía la abuela Nilda cuando éramos chicos.',
    },
    {
      icon: '🍓',
      title: 'Sabor frutal único',
      description: 'Sin moldes, cada bombón es distinto. Hechos a mano con dedicación.',
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
          {/* Video */}
          <div className="order-2 lg:order-1">
            <div 
              ref={containerRef}
              className="relative max-w-[360px] mx-auto lg:mx-0"
            >
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-large bg-text-primary">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/proceso-poster.jpg"
                  muted={isMuted}
                  playsInline
                  loop
                  preload="none"
                  aria-label="Video del proceso de elaboración de bombones Bonnilda"
                >
                  <source src="/videos/proceso-sonido.mp4" type="video/mp4" />
                </video>
                
                {/* Mute/Unmute button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2"
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>

                {/* Play button for reduced motion or autoplay failure */}
                {showPlayButton && (
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all focus:outline-none"
                    aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                  >
                    {!isPlaying && (
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <svg className="w-8 h-8 text-accent-raspberry ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </button>
                )}
              </div>
              
              {/* Caption */}
              <p className="text-center text-text-muted text-sm mt-3 italic">
                Así hacemos nuestros bombones
              </p>
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
                cada uno distinto, con el sabor frutal como protagonista.
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

