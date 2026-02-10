/**
 * Skip Link Component
 * 
 * Permite a usuarios de teclado y screen readers saltar directamente
 * al contenido principal sin tener que navegar por todo el header
 */

import React from 'react'

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[100]
        bg-accent-peach text-white
        px-6 py-3 rounded-lg
        font-bold text-sm
        shadow-large
        focus:outline-none focus:ring-4 focus:ring-accent-peach/50
        transition-all
      "
    >
      Saltar al contenido principal
    </a>
  )
}

export default SkipLink

