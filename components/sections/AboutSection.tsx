'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
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

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return

    const step = 5
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      video.currentTime = Math.min(video.duration, video.currentTime + step)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      video.currentTime = Math.max(0, video.currentTime - step)
    }
  }, [])

  const resetHideControlsTimer = useCallback(() => {
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current)
    }
    setShowControls(true)
    hideControlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false)
    }, 2500)
  }, [])

  const handleTouchInteraction = useCallback(() => {
    resetHideControlsTimer()
  }, [resetHideControlsTimer])

  useEffect(() => {
    return () => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-x-12 lg:gap-y-8 items-start">
          <div className="lg:col-span-5 lg:row-span-2 lg:pt-6">
            <div 
              ref={containerRef}
              className="relative max-w-[360px] mx-auto lg:mx-0 lg:-rotate-1"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              onTouchStart={handleTouchInteraction}
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

                {/* Play/Pause button - min 44x44px for accessibility */}
                <button
                  onClick={handlePlayClick}
                  className={`absolute inset-0 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-inset ${
                    showPlayButton ? 'bg-black/30 hover:bg-black/40' : ''
                  }`}
                  aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                >
                  <div className={`w-14 h-14 min-w-[44px] min-h-[44px] rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 ${
                    isPlaying && !showControls ? 'opacity-0 scale-75' : 'opacity-100 scale-100 hover:scale-110'
                  }`}>
                    {isPlaying ? (
                      <svg className="w-7 h-7 text-accent-raspberry" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7 text-accent-raspberry ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Progress bar - larger hit area for accessibility */}
                <div 
                  ref={progressRef}
                  className={`absolute bottom-12 left-3 right-3 h-6 flex items-center cursor-pointer transition-opacity duration-300 ${
                    showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                  }`}
                  onClick={handleSeek}
                  onTouchStart={handleSeek}
                  onTouchMove={handleSeek}
                  onKeyDown={handleKeyDown}
                  role="slider"
                  aria-label="Progreso del video"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuetext={`${Math.round(progress)}% del video`}
                  tabIndex={0}
                >
                  <div className="w-full h-1 bg-white/30 rounded-full relative">
                    <div 
                      className="absolute inset-y-0 left-0 bg-accent-peach rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                
                {/* Mute/Unmute button - min 44x44px for accessibility */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute()
                  }}
                  className={`absolute bottom-4 right-4 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2 ${
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
              
              <p className="text-center lg:text-left text-text-muted text-sm mt-3 italic">
                El proceso de hoy, con la receta de siempre.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:pt-4">
            <p className="text-sm font-semibold tracking-wide uppercase text-accent-raspberry">
              Desde 2013 · Los Molles, San Luis
            </p>
            <SectionHeading
              title="Nuestra historia"
              align="left"
            />
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Bonnilda nació para recrear los bombones de fruta que nos hacía la abuela Nilda
                cuando éramos chicos. En 2013, nuestros padres empezaron a elaborarlos a mano
                en Los Molles, San Luis: sin moldes, cada uno distinto.
              </p>
              <p>
                Con los años sumamos herramientas de fábrica, pero la receta no cambió:
                ácido cítrico, pectina, esencia de cada fruta, glucosa y azúcar. Cinco ingredientes,
                seis sabores. No usamos fruta natural ni tenemos local a la calle.
              </p>
              <p className="font-medium text-text-primary">
                Sigue siendo un negocio de familia. Los pedidos se cierran por WhatsApp
                y despachamos en 48 hs a todo el país.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-6 lg:col-start-7">
            <blockquote className="relative bg-background-soft border-l-4 border-accent-peach rounded-r-2xl px-6 py-5 md:px-8 md:py-6">
              <p className="font-title text-xl md:text-2xl text-text-primary leading-snug">
                Los bombones de la abuela Nilda, ahora con las manos de la misma familia.
              </p>
              <p className="mt-3 text-sm text-text-muted">
                2013 · Los Molles · frutilla, naranja, manzana, ananá, uva y cereza
              </p>
            </blockquote>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection

