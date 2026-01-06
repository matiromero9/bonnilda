import React from 'react'

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={`space-y-3 ${alignClasses[align]} ${className}`}>
      <h2 className="text-balance">{title}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading

