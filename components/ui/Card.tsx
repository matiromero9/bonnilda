import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = false,
  padding = 'md'
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  }

  const hoverClasses = hover 
    ? 'transition-all duration-300 hover:shadow-large hover:-translate-y-1' 
    : ''

  return (
    <div 
      className={`
        bg-surface 
        rounded-xl 
        shadow-soft 
        border border-border-light
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card

