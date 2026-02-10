import { useState, useCallback } from 'react'
import { validateForm, ContactFormData, FormErrors } from '@/lib/validations'

export type FieldName = keyof ContactFormData

interface UseFormValidationReturn {
  errors: FormErrors
  touched: { [key in FieldName]?: boolean }
  validateField: (fieldName: FieldName, value: string) => void
  validateAllFields: (formData: ContactFormData) => boolean
  clearError: (fieldName: FieldName) => void
  clearAllErrors: () => void
  markAsTouched: (fieldName: FieldName) => void
  markAllAsTouched: () => void
}

/**
 * Hook personalizado para validación de formularios
 * Maneja validación por campo y validación completa del formulario
 */
export const useFormValidation = (): UseFormValidationReturn => {
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<{ [key in FieldName]?: boolean }>({})

  /**
   * Valida un campo específico
   */
  const validateField = useCallback((fieldName: FieldName, value: string) => {
    const tempFormData: ContactFormData = {
      name: '',
      whatsapp: '',
      type: 'minorista',
      message: '',
      [fieldName]: value,
    }

    const { errors: validationErrors } = validateForm(tempFormData)

    setErrors((prev) => {
      const newErrors = { ...prev }
      
      if (validationErrors[fieldName]) {
        newErrors[fieldName] = validationErrors[fieldName]
      } else {
        delete newErrors[fieldName]
      }
      
      return newErrors
    })
  }, [])

  /**
   * Valida todos los campos del formulario
   * Retorna true si el formulario es válido
   */
  const validateAllFields = useCallback((formData: ContactFormData): boolean => {
    const { isValid, errors: validationErrors } = validateForm(formData)
    setErrors(validationErrors)
    return isValid
  }, [])

  /**
   * Limpia el error de un campo específico
   */
  const clearError = useCallback((fieldName: FieldName) => {
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[fieldName]
      return newErrors
    })
  }, [])

  /**
   * Limpia todos los errores
   */
  const clearAllErrors = useCallback(() => {
    setErrors({})
  }, [])

  /**
   * Marca un campo como "touched" (interactuado)
   */
  const markAsTouched = useCallback((fieldName: FieldName) => {
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }))
  }, [])

  /**
   * Marca todos los campos como "touched"
   */
  const markAllAsTouched = useCallback(() => {
    setTouched({
      name: true,
      whatsapp: true,
      type: true,
      message: true,
    })
  }, [])

  return {
    errors,
    touched,
    validateField,
    validateAllFields,
    clearError,
    clearAllErrors,
    markAsTouched,
    markAllAsTouched,
  }
}

