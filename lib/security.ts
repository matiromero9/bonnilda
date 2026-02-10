/**
 * Funciones de seguridad y sanitización
 */

/**
 * Escapa caracteres HTML peligrosos
 */
export const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  
  return text.replace(/[&<>"'/]/g, (char) => map[char])
}

/**
 * Sanitiza input de texto general
 * - Trim espacios
 * - Escapa HTML
 * - Limita longitud
 */
export const sanitizeText = (text: string, maxLength: number = 1000): string => {
  let sanitized = text.trim()
  sanitized = escapeHtml(sanitized)
  
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }
  
  return sanitized
}

/**
 * Sanitiza nombre
 * - Solo letras, espacios, acentos y algunos caracteres
 */
export const sanitizeName = (name: string): string => {
  let sanitized = name.trim()
  // Remover múltiples espacios consecutivos
  sanitized = sanitized.replace(/\s+/g, ' ')
  // Limitar a 100 caracteres
  sanitized = sanitized.substring(0, 100)
  return sanitized
}

/**
 * Sanitiza número de teléfono
 * - Mantiene solo números, +, -, espacios, paréntesis
 */
export const sanitizePhone = (phone: string): string => {
  let sanitized = phone.trim()
  // Mantener solo caracteres válidos para teléfonos
  sanitized = sanitized.replace(/[^\d\s\-\+\(\)]/g, '')
  // Limitar a 20 caracteres
  sanitized = sanitized.substring(0, 20)
  return sanitized
}

/**
 * Rate limiter del lado del cliente
 */
class RateLimiter {
  private lastSubmit: number = 0
  private attempts: number[] = []
  
  /**
   * Verifica si se puede hacer submit
   * @param cooldownMs Tiempo mínimo entre submits (default: 30 segundos)
   * @param maxAttempts Máximo de intentos por hora (default: 5)
   */
  canSubmit(cooldownMs: number = 30000, maxAttempts: number = 5): { allowed: boolean; reason?: string } {
    const now = Date.now()
    
    // Verificar cooldown mínimo
    if (now - this.lastSubmit < cooldownMs) {
      const remainingSeconds = Math.ceil((cooldownMs - (now - this.lastSubmit)) / 1000)
      return { 
        allowed: false, 
        reason: `Por favor esperá ${remainingSeconds} segundos antes de enviar otro mensaje` 
      }
    }
    
    // Limpiar intentos antiguos (más de 1 hora)
    const oneHourAgo = now - 3600000
    this.attempts = this.attempts.filter(time => time > oneHourAgo)
    
    // Verificar máximo de intentos por hora
    if (this.attempts.length >= maxAttempts) {
      return { 
        allowed: false, 
        reason: 'Demasiados intentos. Por favor intentá más tarde' 
      }
    }
    
    return { allowed: true }
  }
  
  /**
   * Registra un intento de submit
   */
  recordSubmit(): void {
    const now = Date.now()
    this.lastSubmit = now
    this.attempts.push(now)
  }
  
  /**
   * Resetea el rate limiter (útil para testing)
   */
  reset(): void {
    this.lastSubmit = 0
    this.attempts = []
  }
}

// Instancia singleton del rate limiter
export const rateLimiter = new RateLimiter()

/**
 * Verifica honeypot (campo trampa para bots)
 * @param value Valor del campo honeypot (debe estar vacío)
 */
export const checkHoneypot = (value: string): boolean => {
  return value === ''
}

/**
 * Verifica tiempo mínimo de interacción
 * @param startTime Timestamp de cuando se cargó el formulario
 * @param minSeconds Tiempo mínimo en segundos (default: 3)
 */
export const checkMinimumTime = (startTime: number, minSeconds: number = 3): boolean => {
  const elapsedSeconds = (Date.now() - startTime) / 1000
  return elapsedSeconds >= minSeconds
}

