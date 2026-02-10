/**
 * Funciones de validación para formularios
 */

export interface ValidationResult {
  isValid: boolean
  error?: string
}

/**
 * Valida nombre completo
 * - Mínimo 2 caracteres
 * - Solo letras, espacios, acentos y algunos caracteres especiales
 */
export const validateName = (name: string): ValidationResult => {
  const trimmedName = name.trim()
  
  if (trimmedName.length === 0) {
    return { isValid: false, error: 'El nombre es obligatorio' }
  }
  
  if (trimmedName.length < 2) {
    return { isValid: false, error: 'El nombre debe tener al menos 2 caracteres' }
  }
  
  if (trimmedName.length > 100) {
    return { isValid: false, error: 'El nombre es demasiado largo' }
  }
  
  // Permitir letras (incluidas acentuadas), espacios, guiones y apóstrofes
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/
  if (!nameRegex.test(trimmedName)) {
    return { isValid: false, error: 'El nombre solo puede contener letras y espacios' }
  }
  
  return { isValid: true }
}

/**
 * Valida número de teléfono argentino
 * - Formatos aceptados: +54 9 11 1234-5678, 1112345678, +541112345678, etc.
 */
export const validatePhone = (phone: string): ValidationResult => {
  const trimmedPhone = phone.trim()
  
  if (trimmedPhone.length === 0) {
    return { isValid: false, error: 'El WhatsApp es obligatorio' }
  }
  
  // Remover espacios, guiones y paréntesis para validar solo números
  const digitsOnly = trimmedPhone.replace(/[\s\-\(\)\+]/g, '')
  
  // Debe tener entre 8 y 15 dígitos (teléfonos internacionales)
  if (digitsOnly.length < 8) {
    return { isValid: false, error: 'El número es demasiado corto' }
  }
  
  if (digitsOnly.length > 15) {
    return { isValid: false, error: 'El número es demasiado largo' }
  }
  
  // Solo números
  if (!/^\d+$/.test(digitsOnly)) {
    return { isValid: false, error: 'El número solo puede contener dígitos' }
  }
  
  return { isValid: true }
}

/**
 * Valida mensaje
 * - Opcional pero si se completa debe cumplir requisitos
 */
export const validateMessage = (message: string): ValidationResult => {
  const trimmedMessage = message.trim()
  
  // Mensaje es opcional
  if (trimmedMessage.length === 0) {
    return { isValid: true }
  }
  
  if (trimmedMessage.length < 10) {
    return { isValid: false, error: 'El mensaje debe tener al menos 10 caracteres' }
  }
  
  if (trimmedMessage.length > 1000) {
    return { isValid: false, error: 'El mensaje es demasiado largo (máximo 1000 caracteres)' }
  }
  
  return { isValid: true }
}

/**
 * Valida tipo de compra
 */
export const validateType = (type: string): ValidationResult => {
  const validTypes = ['minorista', 'mayorista']
  
  if (!validTypes.includes(type)) {
    return { isValid: false, error: 'Tipo de compra inválido' }
  }
  
  return { isValid: true }
}

/**
 * Valida todos los campos del formulario
 */
export interface ContactFormData {
  name: string
  whatsapp: string
  type: string
  message: string
}

export interface FormErrors {
  name?: string
  whatsapp?: string
  type?: string
  message?: string
}

export const validateForm = (formData: ContactFormData): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {}
  
  const nameValidation = validateName(formData.name)
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error
  }
  
  const phoneValidation = validatePhone(formData.whatsapp)
  if (!phoneValidation.isValid) {
    errors.whatsapp = phoneValidation.error
  }
  
  const typeValidation = validateType(formData.type)
  if (!typeValidation.isValid) {
    errors.type = typeValidation.error
  }
  
  const messageValidation = validateMessage(formData.message)
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

