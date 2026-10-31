'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import { ORDER_INFO, SOCIAL_MEDIA } from '@/constants/contact'
import { analytics, type WhatsAppClickLocation } from '@/lib/analytics'

type WhatsAppLinkProps = {
  location: WhatsAppClickLocation
  message?: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'>

/**
 * Único punto de salida a wa.me: dispara whatsapp_click con la sección de origen.
 */
export default function WhatsAppLink({
  location,
  message = ORDER_INFO.whatsappMessage,
  children,
  variant,
  size,
  onClick,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...rest
}: WhatsAppLinkProps) {
  const href = SOCIAL_MEDIA.whatsapp.urlWithMessage(message)

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    analytics.trackWhatsAppClick(location)
    onClick?.(event)
  }

  if (variant) {
    return (
      <Button
        variant={variant}
        size={size}
        href={href}
        target={target}
        rel={rel}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Button>
    )
  }

  return (
    <a href={href} target={target} rel={rel} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
