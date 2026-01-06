# 🧩 Guía de Uso de Componentes

Esta guía muestra cómo usar cada componente del Design System con ejemplos prácticos.

---

## 🔘 Button

### Uso Básico

```tsx
import Button from '@/components/ui/Button'

// Botón primary (por defecto)
<Button>
  Comprar ahora
</Button>

// Con variant y size
<Button variant="secondary" size="lg">
  Quiero revender
</Button>
```

### Todas las Variantes

```tsx
// Primary - Acción principal
<Button variant="primary">
  Acción principal
</Button>

// Secondary - Acción secundaria
<Button variant="secondary">
  Acción secundaria
</Button>

// Ghost - Acción terciaria
<Button variant="ghost">
  Ver más
</Button>
```

### Tamaños

```tsx
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>
```

### Con onClick

```tsx
<Button 
  variant="primary" 
  onClick={() => alert('Click!')}
>
  Hacer algo
</Button>
```

### Disabled

```tsx
<Button disabled>
  No disponible
</Button>
```

### Como Link (truco)

```tsx
<a href="#contacto">
  <Button variant="primary">
    Contactar
  </Button>
</a>

// O mejor, envolver en <a> y quitar padding del link
```

---

## 📦 Container

### Uso Básico

```tsx
import Container from '@/components/ui/Container'

<Container>
  <p>Este contenido está centrado con max-width</p>
</Container>
```

### Como Section

```tsx
<Container as="section">
  <h2>Título de sección</h2>
  <p>Contenido...</p>
</Container>
```

### Con Padding Custom

```tsx
<Container className="py-16 md:py-24">
  <p>Con padding vertical</p>
</Container>
```

---

## 📝 SectionHeading

### Uso Básico

```tsx
import SectionHeading from '@/components/ui/SectionHeading'

<SectionHeading
  title="Nuestros sabores"
  subtitle="Cada bombón es único"
/>
```

### Alineación

```tsx
// Centrado (por defecto)
<SectionHeading
  title="Título"
  align="center"
/>

// Izquierda
<SectionHeading
  title="Título"
  align="left"
/>

// Derecha
<SectionHeading
  title="Título"
  align="right"
/>
```

### Sin Subtítulo

```tsx
<SectionHeading title="Solo título" />
```

### Con Margin

```tsx
<SectionHeading
  title="Título"
  subtitle="Subtítulo"
  className="mb-12"
/>
```

---

## 🎴 Card

### Uso Básico

```tsx
import Card from '@/components/ui/Card'

<Card>
  <h3>Título</h3>
  <p>Contenido de la card</p>
</Card>
```

### Con Hover Effect

```tsx
<Card hover>
  <p>Esta card tiene efecto hover</p>
</Card>
```

### Padding Custom

```tsx
// Pequeño
<Card padding="sm">
  <p>Padding pequeño</p>
</Card>

// Mediano (por defecto)
<Card padding="md">
  <p>Padding mediano</p>
</Card>

// Grande
<Card padding="lg">
  <p>Padding grande</p>
</Card>
```

### Card Clickeable

```tsx
<a href="/destino" className="block">
  <Card hover>
    <h3>Click me</h3>
  </Card>
</a>
```

### Card con Imagen

```tsx
<Card padding="sm" className="overflow-hidden">
  <img 
    src="/producto.jpg" 
    alt="Producto" 
    className="w-full h-48 object-cover rounded-t-lg mb-4"
  />
  <div className="p-4">
    <h3>Título</h3>
    <p>Descripción</p>
  </div>
</Card>
```

---

## 🏷️ Badge

### Uso Básico

```tsx
import Badge from '@/components/ui/Badge'

<Badge>Nuevo</Badge>
```

### Variantes

```tsx
// Peach (por defecto)
<Badge variant="peach">
  Más pedido
</Badge>

// Raspberry
<Badge variant="raspberry">
  Favorito
</Badge>

// Neutral
<Badge variant="neutral">
  Agotado
</Badge>
```

### En un Card

```tsx
<Card>
  <div className="flex items-start justify-between mb-4">
    <h3>Producto</h3>
    <Badge variant="peach">Nuevo</Badge>
  </div>
  <p>Descripción</p>
</Card>
```

---

## 🎨 Combinaciones Comunes

### Card de Producto

```tsx
<Card hover padding="lg">
  <div className="flex items-start justify-between mb-4">
    <h3 className="text-2xl font-serif font-bold">
      Durazno & Miel
    </h3>
    <Badge variant="peach">Más pedido</Badge>
  </div>
  
  <p className="text-text-secondary mb-6">
    La combinación perfecta entre lo frutal y lo dulce.
  </p>
  
  <Button variant="primary" className="w-full">
    Agregar al pedido
  </Button>
</Card>
```

### Sección Completa

```tsx
<section className="py-16 md:py-24 bg-background-soft">
  <Container>
    <SectionHeading
      title="Nuestros Productos"
      subtitle="Elegí tu favorito"
      className="mb-12"
    />
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productos.map((producto) => (
        <Card key={producto.id} hover padding="lg">
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
        </Card>
      ))}
    </div>
  </Container>
</section>
```

### Hero Simple

```tsx
<section className="py-24">
  <Container>
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <h1>
        Tu headline <br />
        <span className="text-accent-raspberry">increíble</span>
      </h1>
      
      <p className="text-xl text-text-secondary">
        Descripción que explica tu propuesta de valor
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="primary" size="lg">
          CTA Principal
        </Button>
        <Button variant="secondary" size="lg">
          CTA Secundario
        </Button>
      </div>
    </div>
  </Container>
</section>
```

### Grid de Features

```tsx
<Container>
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {features.map((feature) => (
      <Card key={feature.id} padding="md">
        <div className="text-accent-peach mb-3">
          {feature.icon}
        </div>
        <h3 className="text-xl font-serif font-bold mb-2">
          {feature.titulo}
        </h3>
        <p className="text-text-secondary text-sm">
          {feature.descripcion}
        </p>
      </Card>
    ))}
  </div>
</Container>
```

### CTA Destacado

```tsx
<Card className="bg-gradient-to-br from-accent-peach to-accent-raspberry text-white text-center">
  <div className="max-w-2xl mx-auto space-y-6">
    <h2 className="text-3xl md:text-4xl font-serif font-bold">
      ¿Listo para empezar?
    </h2>
    <p className="text-lg text-white/90">
      Unite a cientos de revendedores felices
    </p>
    <div className="flex gap-4 justify-center">
      <Button variant="secondary" size="lg">
        Contactar ahora
      </Button>
    </div>
  </div>
</Card>
```

---

## 🎨 Uso de Colores (Tailwind)

### Backgrounds

```tsx
// Fondos principales
<div className="bg-background">...</div>
<div className="bg-background-soft">...</div>
<div className="bg-surface">...</div>

// Acentos
<div className="bg-accent-peach">...</div>
<div className="bg-accent-raspberry">...</div>
```

### Textos

```tsx
// Textos
<p className="text-text-primary">Texto principal</p>
<p className="text-text-secondary">Texto secundario</p>
<p className="text-text-muted">Texto suave</p>

// Acentos
<span className="text-accent-peach">Destacado</span>
<span className="text-accent-raspberry">Importante</span>
```

### Bordes

```tsx
<div className="border border-border">...</div>
<div className="border border-border-light">...</div>
<div className="border-2 border-accent-peach">...</div>
```

---

## 📱 Responsive Helpers

### Tipografía Responsive

```tsx
// Mobile → Desktop
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Título responsive
</h1>

<p className="text-base md:text-lg">
  Párrafo responsive
</p>
```

### Padding/Margin Responsive

```tsx
<section className="py-12 md:py-16 lg:py-24">
  <Container className="px-4 md:px-6 lg:px-8">
    ...
  </Container>
</section>
```

### Grids Responsive

```tsx
// 1 columna móvil, 2 tablet, 3 desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>

// 1 columna móvil, 2 desktop
<div className="grid lg:grid-cols-2 gap-12">
  <div>Contenido izquierda</div>
  <div>Contenido derecha</div>
</div>
```

### Mostrar/Ocultar según pantalla

```tsx
// Ocultar en mobile
<div className="hidden md:block">
  Solo en tablet y desktop
</div>

// Mostrar solo en mobile
<div className="block md:hidden">
  Solo en mobile
</div>

// Diferentes layouts
<div className="flex flex-col md:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## ✨ Tips y Trucos

### Espaciado Consistente

```tsx
// Usar la escala de spacing
<div className="space-y-4">      {/* 16px entre elementos */}
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>

<div className="space-y-8">      {/* 32px entre elementos */}
  <Card>Card 1</Card>
  <Card>Card 2</Card>
</div>
```

### Max Width para Legibilidad

```tsx
// Textos largos
<p className="max-w-2xl mx-auto">
  Texto largo que no debería ocupar todo el ancho
</p>

// Secciones centradas
<div className="max-w-4xl mx-auto">
  <SectionHeading title="..." />
  <p>Contenido</p>
</div>
```

### Aspect Ratio para Imágenes

```tsx
// Cuadrado
<div className="aspect-square">
  <img src="..." className="w-full h-full object-cover" />
</div>

// 16:9
<div className="aspect-video">
  <img src="..." className="w-full h-full object-cover" />
</div>
```

### Truncar Texto

```tsx
// Una línea
<p className="truncate">
  Texto muy largo que se cortará con...
</p>

// Múltiples líneas
<p className="line-clamp-3">
  Texto que se mostrará en máximo 3 líneas...
</p>
```

### Loading State Simple

```tsx
const [loading, setLoading] = useState(false)

<Button disabled={loading}>
  {loading ? 'Cargando...' : 'Enviar'}
</Button>
```

---

## 🚀 Crear Componente Nuevo

Si necesitás crear un componente nuevo, seguí este patrón:

```tsx
// components/ui/TuComponente.tsx
import React from 'react'

export interface TuComponenteProps {
  children: React.ReactNode
  variant?: 'option1' | 'option2'
  className?: string
}

const TuComponente: React.FC<TuComponenteProps> = ({ 
  children, 
  variant = 'option1',
  className = '' 
}) => {
  const variants = {
    option1: 'clases-especificas-1',
    option2: 'clases-especificas-2',
  }

  return (
    <div className={`clases-base ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

export default TuComponente
```

---

**¿Necesitás algo más específico?** Todos estos componentes están en `/components/ui/` y podés leer el código fuente para ver la implementación completa.

