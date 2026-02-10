import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-sans font-semibold
      rounded-lg
      transition-all duration-200
      disabled:opacity-50 disabled:cursor-not-allowed
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-peach focus-visible:ring-offset-2
    `

    const variants = {
      primary: `
        bg-accent-peach text-text-inverse
        hover:bg-accent-raspberry
        shadow-soft hover:shadow-medium
      `,
      secondary: `
        bg-surface text-text-primary
        border-2 border-border
        hover:bg-surface-hover hover:border-accent-peach
        shadow-soft hover:shadow-medium
      `,
      ghost: `
        bg-transparent text-text-primary
        hover:bg-surface-hover
      `,
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

