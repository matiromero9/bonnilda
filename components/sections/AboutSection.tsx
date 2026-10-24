'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(false)

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

  const handlePlayClick = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      const percent = (video.currentTime / video.duration) * 100
      setProgress(isNaN(percent) ? 0 : percent)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const video = videoRef.current
    const progressBar = progressRef.current
    if (!video || !progressBar) return

    let clientX: number
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }

    const rect = progressBar.getBoundingClientRect()
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    video.currentTime = percent * video.duration
  }, [])

  const values = [
    {
      icon: '👵',
      title: 'Receta de la abuela',
      description: 'La misma receta que nos hacía la abuela Nilda cuando éramos chicos.',
    },
    {
      icon: '🏭',
      title: 'La receta de la abuela',
      description: 'La misma receta familiar desde 2013, ahora con la precisión de nuestra fábrica.',
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
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              onTouchStart={() => setShowControls(true)}
            >
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-large bg-text-primary relative">
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
                
                {/* Controls overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 pointer-events-none ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Play/Pause button - always accessible */}
                <button
                  onClick={handlePlayClick}
                  className={`absolute inset-0 flex items-center justify-center transition-all focus:outline-none ${
                    showPlayButton ? 'bg-black/30 hover:bg-black/40' : ''
                  }`}
                  aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                >
                  <div className={`w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 ${
                    isPlaying && !showControls ? 'opacity-0 scale-75' : 'opacity-100 scale-100 hover:scale-110'
                  }`}>
                    {isPlaying ? (
                      <svg className="w-8 h-8 text-accent-raspberry" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-accent-raspberry ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Progress bar - thin, at bottom, above subtitles area */}
                <div 
                  ref={progressRef}
                  className={`absolute bottom-14 left-3 right-3 h-1 bg-white/30 rounded-full cursor-pointer transition-opacity duration-300 ${
                    showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                  }`}
                  onClick={handleSeek}
                  onTouchStart={handleSeek}
                  onTouchMove={handleSeek}
                  role="slider"
                  aria-label="Progreso del video"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  tabIndex={0}
                >
                  <div 
                    className="absolute inset-y-0 left-0 bg-accent-peach rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                {/* Mute/Unmute button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute()
                  }}
                  className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2 ${
                    showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                  }`}
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

