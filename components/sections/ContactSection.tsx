'use client'

import React, { useState, useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import FormSkeleton from '@/components/ui/FormSkeleton'
import { useFormValidation, FieldName } from '@/hooks/useFormValidation'
import { sanitizeName, sanitizePhone, sanitizeText, rateLimiter, checkHoneypot, checkMinimumTime } from '@/lib/security'
import { ContactFormData } from '@/lib/validations'

type SubmitState = 'idle' | 'validating' | 'submitting' | 'success' | 'error'

const ContactSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const formLoadTime = useRef<number>(Date.now())
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    whatsapp: '',
    type: 'minorista',
    message: '',
  })

  // Honeypot field (invisible para usuarios, visible para bots)
  const [honeypot, setHoneypot] = useState('')

  const { errors, touched, validateField, validateAllFields, markAsTouched, markAllAsTouched, clearAllErrors } = useFormValidation()

  // Simular carga inicial del formulario
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      formLoadTime.current = Date.now()
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Estado: validando
    setSubmitState('validating')
    markAllAsTouched()

    // 1. Verificar honeypot (protección contra bots)
    if (!checkHoneypot(honeypot)) {
      setSubmitState('error')
      setSubmitMessage('Error de validación. Por favor intentá de nuevo.')
      return
    }

    // 2. Verificar tiempo mínimo (protección contra bots rápidos)
    if (!checkMinimumTime(formLoadTime.current, 3)) {
      setSubmitState('error')
      setSubmitMessage('Por favor completá el formulario con más cuidado.')
      return
    }

    // 3. Validar rate limiting
    const rateLimitCheck = rateLimiter.canSubmit(30000, 5)
    if (!rateLimitCheck.allowed) {
      setSubmitState('error')
      setSubmitMessage(rateLimitCheck.reason || 'Demasiados intentos')
      return
    }

    // 4. Sanitizar datos
    const sanitizedData: ContactFormData = {
      name: sanitizeName(formData.name),
      whatsapp: sanitizePhone(formData.whatsapp),
      type: formData.type,
      message: sanitizeText(formData.message, 1000),
    }

    // 5. Validar todos los campos
    const isValid = validateAllFields(sanitizedData)
    if (!isValid) {
      setSubmitState('error')
      setSubmitMessage('Por favor corregí los errores en el formulario.')
      return
    }

    // Estado: enviando
    setSubmitState('submitting')

    try {
      // Simular envío (aquí iría la llamada a API)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // TODO: Implementar lógica de envío real (ej: API, email, WhatsApp)
      console.log('Form submitted:', sanitizedData)
      
      // Registrar submit exitoso
      rateLimiter.recordSubmit()
      
      // Estado: éxito
      setSubmitState('success')
      setSubmitMessage('¡Gracias por tu mensaje! Te contactaremos pronto.')
      
      // Limpiar formulario
      setFormData({
        name: '',
        whatsapp: '',
        type: 'minorista',
        message: '',
      })
      clearAllErrors()
      
      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setSubmitState('idle')
        setSubmitMessage('')
      }, 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitState('error')
      setSubmitMessage('Hubo un error al enviar el mensaje. Por favor intentá de nuevo.')
      
      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setSubmitState('idle')
        setSubmitMessage('')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Validar campo en tiempo real si ya fue tocado
    if (touched[name as FieldName]) {
      validateField(name as FieldName, value)
    }
  }

  const handleBlur = (fieldName: FieldName) => {
    markAsTouched(fieldName)
    validateField(fieldName, formData[fieldName])
  }

  const isSubmitting = submitState === 'submitting' || submitState === 'validating'
  const showSuccessMessage = submitState === 'success'
  const showErrorMessage = submitState === 'error'

  return (
    <section id="contacto" className="py-16 md:py-24 pb-32 md:pb-40 bg-background">
      <Container>
        <SectionHeading
          title="Hablemos"
          subtitle="¿Tenés dudas? ¿Querés hacer un pedido? Escribinos y te respondemos al toque."
          className="mb-12 md:mb-16"
        />

        <div className="max-w-2xl mx-auto">
          {isLoading ? (
            <FormSkeleton />
          ) : (
            <Card padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (invisible para usuarios) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Nombre completo <span className="text-accent-raspberry">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    disabled={isSubmitting}
                    aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      touched.name && errors.name
                        ? 'border-accent-raspberry focus:border-accent-raspberry focus:ring-accent-raspberry/20'
                        : 'border-border focus:border-accent-peach focus:ring-accent-peach/20'
                    }`}
                    placeholder="Tu nombre"
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-accent-raspberry" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-text-primary mb-2">
                    WhatsApp <span className="text-accent-raspberry">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    onBlur={() => handleBlur('whatsapp')}
                    disabled={isSubmitting}
                    aria-invalid={touched.whatsapp && errors.whatsapp ? 'true' : 'false'}
                    aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      touched.whatsapp && errors.whatsapp
                        ? 'border-accent-raspberry focus:border-accent-raspberry focus:ring-accent-raspberry/20'
                        : 'border-border focus:border-accent-peach focus:ring-accent-peach/20'
                    }`}
                    placeholder="+54 9 11 1234-5678"
                  />
                  {touched.whatsapp && errors.whatsapp && (
                    <p id="whatsapp-error" className="mt-2 text-sm text-accent-raspberry" role="alert">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Type */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-text-primary mb-2">
                    Tipo de compra <span className="text-accent-raspberry">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    onBlur={() => handleBlur('type')}
                    disabled={isSubmitting}
                    aria-invalid={touched.type && errors.type ? 'true' : 'false'}
                    aria-describedby={errors.type ? 'type-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      touched.type && errors.type
                        ? 'border-accent-raspberry focus:border-accent-raspberry focus:ring-accent-raspberry/20'
                        : 'border-border focus:border-accent-peach focus:ring-accent-peach/20'
                    }`}
                  >
                    <option value="minorista">Compra para consumo personal</option>
                    <option value="mayorista">Compra mayorista / Quiero revender</option>
                  </select>
                  {touched.type && errors.type && (
                    <p id="type-error" className="mt-2 text-sm text-accent-raspberry" role="alert">
                      {errors.type}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    disabled={isSubmitting}
                    aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                      touched.message && errors.message
                        ? 'border-accent-raspberry focus:border-accent-raspberry focus:ring-accent-raspberry/20'
                        : 'border-border focus:border-accent-peach focus:ring-accent-peach/20'
                    }`}
                    placeholder="Contanos qué necesitás o qué te gustaría saber..."
                  />
                  {touched.message && errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-accent-raspberry" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit message (success/error) */}
                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${
                      showSuccessMessage
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {submitMessage}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {submitState === 'validating' ? 'Validando...' : 'Enviando...'}
                    </span>
                  ) : (
                    'Enviar mensaje'
                  )}
                </Button>

                <p className="text-sm text-text-muted text-center">
                  También podés escribirnos directamente por WhatsApp al{' '}
                  {/* TODO: Agregar número real */}
                  <a href="#" className="text-accent-peach hover:text-accent-raspberry font-medium transition-colors">
                    +54 9 11 XXXX-XXXX
                  </a>
                </p>
              </form>
            </Card>
          )}
        </div>
      </Container>
    </section>
  )
}

export default ContactSection

