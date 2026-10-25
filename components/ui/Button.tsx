import React from 'react'

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const buttonStyles = {
  base: `
    relative
    inline-flex items-center justify-center
    font-sans font-semibold
    rounded-lg
    touch-manipulation
    cursor-pointer
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-peach focus-visible:ring-offset-2
  `,
  variants: {
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
  },
  sizes: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  },
}

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return 'href' in props && props.href !== undefined
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { variant = 'primary', size = 'md', className = '', children, ...rest } = props
    
    const combinedClassName = `${buttonStyles.base} ${buttonStyles.variants[variant]} ${buttonStyles.sizes[size]} ${className}`

    if (isLinkProps(props)) {
      const { href, ...linkRest } = rest as Omit<ButtonAsLink, keyof ButtonBaseProps>
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...linkRest}
        >
          {children}
        </a>
      )
    }

    const buttonRest = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...buttonRest}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

