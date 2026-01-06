# 🔌 Ejemplos de Integración

Este archivo contiene ejemplos de cómo integrar servicios externos en la landing de Bonnilda.

## WhatsApp Business

### Opción 1: Link Directo Simple

```tsx
// En cualquier componente
const whatsappNumber = "5491112345678" // Sin el +
const message = encodeURIComponent("Hola! Me gustaría hacer un pedido de Bonnilda")
const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`

<Button 
  variant="primary" 
  onClick={() => window.open(whatsappURL, '_blank')}
>
  WhatsApp directo
</Button>
```

### Opción 2: Con Variables de Entorno

```tsx
// Crear lib/constants.ts
export const WHATSAPP = {
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, ''),
  messages: {
    minorista: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE_MINORISTA,
    mayorista: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE_MAYORISTA,
  }
}

// Usar en componentes
import { WHATSAPP } from '@/lib/constants'

const whatsappURL = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.messages.minorista)}`
```

### Opción 3: Botón Flotante

```tsx
// components/WhatsAppButton.tsx
'use client'

import React from 'react'

const WhatsAppButton: React.FC = () => {
  const whatsappURL = "https://wa.me/5491112345678?text=Hola!"
  
  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-large transition-all duration-200 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  )
}

export default WhatsAppButton

// Agregar en app/layout.tsx
import WhatsAppButton from '@/components/WhatsAppButton'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
```

## Formulario de Contacto

### Opción 1: Formspree (Más Simple)

```bash
# 1. Crear cuenta en https://formspree.io
# 2. Crear nuevo form y copiar el endpoint
```

```tsx
// components/sections/ContactSection.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      alert('¡Mensaje enviado! Te contactaremos pronto.')
      setFormData({ name: '', whatsapp: '', type: 'minorista', message: '' })
    }
  } catch (error) {
    alert('Hubo un error. Intentá de nuevo.')
  }
}
```

### Opción 2: EmailJS (Frontend Only)

```bash
npm install @emailjs/browser
```

```tsx
// components/sections/ContactSection.tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    await emailjs.send(
      'tu_service_id',
      'tu_template_id',
      {
        from_name: formData.name,
        whatsapp: formData.whatsapp,
        type: formData.type,
        message: formData.message,
      },
      'tu_public_key'
    )
    
    alert('¡Mensaje enviado!')
    setFormData({ name: '', whatsapp: '', type: 'minorista', message: '' })
  } catch (error) {
    alert('Error al enviar. Intentá de nuevo.')
  }
}
```

### Opción 3: API Route + Resend (Más Profesional)

```bash
npm install resend
```

```tsx
// app/api/contact/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { name, whatsapp, type, message } = body

  try {
    const data = await resend.emails.send({
      from: 'Bonnilda Web <contacto@bonnilda.com>',
      to: ['info@bonnilda.com'],
      subject: `Nuevo contacto: ${type}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Tipo:</strong> ${type}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message || 'Sin mensaje'}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
```

```tsx
// components/sections/ContactSection.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    const data = await response.json()
    
    if (data.success) {
      alert('¡Mensaje enviado!')
      setFormData({ name: '', whatsapp: '', type: 'minorista', message: '' })
    } else {
      alert('Error al enviar')
    }
  } catch (error) {
    alert('Error de conexión')
  }
}
```

## Google Analytics

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Meta Pixel (Facebook)

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Smooth Scroll

```css
/* app/globals.css - agregar al final */
html {
  scroll-behavior: smooth;
}
```

## Optimización de Imágenes

```tsx
// Usar componente Image de Next.js
import Image from 'next/image'

<Image
  src="/images/producto.jpg"
  alt="Bombones de fruta Bonnilda"
  width={600}
  height={600}
  priority // Para imágenes above the fold
  placeholder="blur" // Opcional: efecto blur mientras carga
/>
```

## Carga Progresiva (Loading States)

```tsx
// components/sections/ContactSection.tsx
const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    // ... lógica de envío
  } finally {
    setIsSubmitting(false)
  }
}

// En el botón
<Button type="submit" disabled={isSubmitting}>
  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
</Button>
```

## SEO Mejorado

```tsx
// app/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bonnilda | Bombones de Fruta Artesanales',
  description: 'Bombones de fruta 100% artesanales. Dulzura natural, calidad premium. Envíos a todo el país.',
  keywords: 'bombones artesanales, dulces de fruta, golosinas naturales, mayorista',
  openGraph: {
    title: 'Bonnilda - Bombones de Fruta Artesanales',
    description: 'Bombones 100% artesanales. Sin conservantes, sin culpa.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

---

**Recomendación**: Empezá con las opciones más simples (Formspree, WhatsApp directo) y después migrá a soluciones más complejas si lo necesitás.

