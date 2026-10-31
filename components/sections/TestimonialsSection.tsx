'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import {
  GOOGLE_REVIEW_URL,
  TESTIMONIALS,
  TESTIMONIAL_SOURCE_LABEL,
} from '@/constants/testimonials'

const ROTATE_MS = 4000
const REDUCED_ROTATE_MS = 12000
const FADE_MS = 400

const chevronButtonClass =
  'absolute top-1/2 z-20 inline-flex h-11 w-11 min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-accent-peach/40 bg-surface/95 text-accent-peach shadow-soft transition-colors hover:border-accent-peach hover:bg-accent-peach hover:text-text-inverse focus:outline-none focus:ring-2 focus:ring-accent-peach focus:ring-offset-2'

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.5}
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const TestimonialsSection: React.FC = () => {
  const total = TESTIMONIALS.length
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const indexRef = useRef(0)
  const fadeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setPrefersReducedMotion(motionQuery.matches)

    updateMotion()
    motionQuery.addEventListener('change', updateMotion)
    return () => motionQuery.removeEventListener('change', updateMotion)
  }, [])

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current)
      }
    }
  }, [])

  const goTo = useCallback(
    (nextIndex: number) => {
      const normalized = ((nextIndex % total) + total) % total
      if (normalized === indexRef.current) return

      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current)
        fadeTimeoutRef.current = null
      }

      if (prefersReducedMotion) {
        setIsVisible(true)
        setIndex(normalized)
        return
      }

      setIsVisible(false)
      fadeTimeoutRef.current = window.setTimeout(() => {
        setIndex(normalized)
        setIsVisible(true)
        fadeTimeoutRef.current = null
      }, FADE_MS)
    },
    [prefersReducedMotion, total]
  )

  useEffect(() => {
    if (isPaused || total < 2) return

    const timerId = window.setInterval(() => {
      goTo(indexRef.current + 1)
    }, prefersReducedMotion ? REDUCED_ROTATE_MS : ROTATE_MS)

    return () => window.clearInterval(timerId)
  }, [goTo, isPaused, prefersReducedMotion, total])

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget
    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) {
      return
    }
    setIsPaused(false)
  }

  const testimonial = TESTIMONIALS[index]

  return (
    <section
      id="testimonios"
      data-hide-fab
      className="relative bg-background scroll-mt-28 pt-16 pb-28 md:scroll-mt-36 md:pt-24 md:pb-40"
    >
      <Container>
        <SectionHeading
          title="Lo que dicen quienes los probaron"
          subtitle="Reseñas reales publicadas en Google."
          className="mb-10 md:mb-14"
        />

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonios de clientes"
          className="mx-auto max-w-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={handleBlur}
        >
          <div className="relative">
            <button
              type="button"
              onClick={() => goTo(indexRef.current - 1)}
              aria-label="Ver testimonio anterior"
              aria-controls="testimonios-slide"
              className={`${chevronButtonClass} left-0 -translate-x-1/3 md:-translate-x-1/2`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              id="testimonios-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonio ${index + 1} de ${total}`}
              aria-live="polite"
              className={`transition-opacity ease-in-out motion-reduce:transition-none ${
                prefersReducedMotion ? 'duration-0' : 'duration-[400ms]'
              } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <Card padding="lg" className="relative overflow-hidden border-2 border-text-primary/5 shadow-artisan-soft">
                <span
                  className="pointer-events-none absolute -top-3 left-4 font-title text-7xl leading-none text-accent-peach/20 select-none md:left-6 md:text-8xl"
                  aria-hidden="true"
                >
                  “
                </span>

                <div className="relative z-10 space-y-5 px-2 md:px-0">
                  <div
                    className="flex gap-1 text-[#C9A227]"
                    role="img"
                    aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= testimonial.rating} />
                    ))}
                  </div>

                  <blockquote className="min-h-[7.5rem] md:min-h-[6.5rem]">
                    <p className="text-base leading-relaxed text-text-primary md:text-lg">
                      {testimonial.text}
                    </p>
                  </blockquote>

                  <div className="border-t-2 border-dashed border-border-light pt-4">
                    <p className="font-title text-lg font-semibold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-text-muted">
                      {TESTIMONIAL_SOURCE_LABEL[testimonial.source]}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <button
              type="button"
              onClick={() => goTo(indexRef.current + 1)}
              aria-label="Ver testimonio siguiente"
              aria-controls="testimonios-slide"
              className={`${chevronButtonClass} right-0 translate-x-1/3 md:translate-x-1/2`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-10 flex justify-center md:mt-12">
            <Button
              variant="primary"
              size="md"
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 w-full sm:w-auto"
            >
              Dejanos tu opinión
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
