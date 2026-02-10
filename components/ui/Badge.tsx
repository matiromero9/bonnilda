import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'peach' | 'raspberry' | 'neutral'
  className?: string
  sticker?: boolean // Nuevo: estilo sticker artesanal
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'peach',
  className = '',
  sticker = false
}) => {
  const variants = {
    peach: {
      base: 'bg-accent-peach-light text-accent-raspberry',
      sticker: 'bg-accent-peach text-white border-accent-peach/50',
    },
    raspberry: {
      base: 'bg-accent-raspberry-light text-accent-raspberry',
      sticker: 'bg-accent-raspberry text-white border-accent-raspberry/50',
    },
    neutral: {
      base: 'bg-surface text-text-secondary border border-border',
      sticker: 'bg-text-primary text-white border-text-primary/50',
    },
  }

  const baseClasses = sticker
    ? `
        inline-flex items-center
        px-4 py-2
        text-xs font-bold uppercase tracking-wide
        rounded-full
        border-2
        shadow-sm
        ${variants[variant].sticker}
        transition-all duration-200
        hover:scale-105
      `
    : `
        inline-flex items-center
        px-3 py-1
        text-sm font-medium
        rounded-full
        ${variants[variant].base}
      `

  return (
    <span className={`${baseClasses} ${className}`}>
      {children}
    </span>
  )
}

export default Badge

