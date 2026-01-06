# 🎨 Bonnilda Design System

## Filosofía Visual

**Premium Artesanal**: Balance entre lo hecho a mano y lo profesional. Cálido sin ser infantil, elegante sin ser corporativo.

## Paleta de Colores

### Base
```css
--color-background: #FAF7F2        /* Crema suave - fondo principal */
--color-background-soft: #FFF9F0   /* Crema claro - variaciones */
--color-surface: #FFFFFF           /* Blanco - cards */
--color-surface-hover: #FFF5EB     /* Hover cálido */
```

### Acentos Frutales
```css
--color-accent-peach: #F4A261            /* Durazno - CTA principal */
--color-accent-peach-light: #F9C9A0      /* Durazno claro - badges */
--color-accent-raspberry: #C85C5C        /* Frambuesa - acento */
--color-accent-raspberry-light: #E89B9B  /* Frambuesa clara */
```

### Textos
```css
--color-text-primary: #3E2723      /* Marrón chocolate oscuro - títulos */
--color-text-secondary: #5D4037    /* Marrón medio - cuerpo */
--color-text-muted: #8D6E63        /* Marrón suave - hints */
--color-text-inverse: #FFFFFF      /* Blanco - sobre fondos oscuros */
```

### Bordes
```css
--color-border: #E8DFD4            /* Borde suave */
--color-border-light: #F2EDE6      /* Borde muy suave - cards */
```

## Tipografía

### Fuentes

**Serif - Playfair Display**
- Uso: Títulos, headlines, logo
- Peso: Bold (700)
- Carácter: Elegante, refinada, artesanal

**Sans - Inter**
- Uso: Cuerpo, UI, navegación
- Pesos: Regular (400), Medium (500), Semibold (600)
- Carácter: Moderna, legible, profesional

### Escala Tipográfica

| Token | Size | Line Height | Uso |
|-------|------|-------------|-----|
| `text-xs` | 0.75rem (12px) | 1rem | Meta info, footnotes |
| `text-sm` | 0.875rem (14px) | 1.25rem | Labels, captions |
| `text-base` | 1rem (16px) | 1.5rem | Párrafos, body |
| `text-lg` | 1.125rem (18px) | 1.75rem | Subtítulos |
| `text-xl` | 1.25rem (20px) | 1.75rem | Títulos pequeños |
| `text-2xl` | 1.5rem (24px) | 2rem | Títulos sección |
| `text-3xl` | 1.875rem (30px) | 2.25rem | Títulos destacados |
| `text-4xl` | 2.25rem (36px) | 2.5rem | Hero mobile |
| `text-5xl` | 3rem (48px) | 1.16 | Hero desktop |
| `text-6xl` | 3.75rem (60px) | 1.1 | Display XL |

### Jerarquía

```
H1: text-5xl md:text-6xl - font-serif - font-bold
H2: text-4xl md:text-5xl - font-serif - font-bold
H3: text-3xl md:text-4xl - font-serif - font-bold
H4: text-2xl md:text-3xl - font-serif - font-bold
P: text-base md:text-lg - font-sans - text-secondary
```

## Espaciado

### Sistema
Basado en la escala estándar de Tailwind (múltiplos de 4px)

```
0.25rem (1) = 4px
0.5rem (2) = 8px
0.75rem (3) = 12px
1rem (4) = 16px
1.25rem (5) = 20px
1.5rem (6) = 24px
2rem (8) = 32px
3rem (12) = 48px
4rem (16) = 64px
6rem (24) = 96px
```

### Secciones
- **Padding vertical**: `py-16 md:py-24` (64px/96px)
- **Margin entre bloques**: `mb-12 md:mb-16` (48px/64px)
- **Gap en grids**: `gap-8` (32px)

### Componentes
- **Button padding**: `px-6 py-3` (24px/12px)
- **Card padding**: `p-6 md:p-8` (24px/32px)
- **Container horizontal**: `px-4 sm:px-6 lg:px-8`

## Border Radius

```css
rounded-sm: 0.5rem (8px)     /* Pequeños elementos */
rounded-md: 0.75rem (12px)   /* Badges, inputs pequeños */
rounded-lg: 1rem (16px)      /* Botones, inputs */
rounded-xl: 1.5rem (24px)    /* Cards */
rounded-2xl: 2rem (32px)     /* Imágenes destacadas */
```

**Filosofía**: Radius generosos para transmitir suavidad y artesanalidad.

## Sombras

```css
shadow-soft: 0 2px 8px rgba(62, 39, 35, 0.06)      /* Cards por defecto */
shadow-medium: 0 4px 16px rgba(62, 39, 35, 0.08)   /* Hover states */
shadow-large: 0 8px 32px rgba(62, 39, 35, 0.12)    /* Modals, destacados */
```

**Características**: Sutiles, con el color del texto (marrón) para mantener calidez.

## Componentes

### Button

#### Variants

**Primary** (Acción principal)
- Background: `accent-peach`
- Text: `text-inverse` (blanco)
- Hover: `accent-raspberry`
- Shadow: `soft` → `medium`

**Secondary** (Acción secundaria)
- Background: `surface` (blanco)
- Text: `text-primary`
- Border: `2px border`
- Hover: `surface-hover` + `border-accent-peach`

**Ghost** (Acción terciaria)
- Background: `transparent`
- Text: `text-primary`
- Hover: `surface-hover`

#### Sizes
- **sm**: `px-4 py-2 text-sm`
- **md**: `px-6 py-3 text-base`
- **lg**: `px-8 py-4 text-lg`

### Card

- Background: `surface` (blanco)
- Border: `1px border-light`
- Radius: `rounded-xl`
- Shadow: `shadow-soft`
- Hover (opcional): `shadow-large` + `translate-y-1`

### Badge

#### Variants
- **peach**: fondo `accent-peach-light`, texto `accent-raspberry`
- **raspberry**: fondo `accent-raspberry-light`, texto `accent-raspberry`
- **neutral**: fondo `surface`, texto `text-secondary`, con borde

### Container

- Max width: `1280px`
- Padding horizontal: `px-4 sm:px-6 lg:px-8`
- Centrado: `mx-auto`

## Estados Interactivos

### Hover
- Transición: `transition-all duration-200`
- Botones: cambio de color + shadow
- Cards: shadow + transform (opcional)
- Links: cambio de color

### Focus
- Ring: `ring-2 ring-accent-peach`
- Offset: `ring-offset-2 ring-offset-background`
- Aplicado a todos los elementos interactivos

### Disabled
- Opacity: `opacity-50`
- Cursor: `cursor-not-allowed`

## Responsive

### Breakpoints Tailwind
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First
Todo el diseño parte de mobile y se expande:

```tsx
// Base = mobile
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

### Grids Responsive
```tsx
// 1 columna móvil, 2 tablet, 3 desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

## Accesibilidad

### Contraste
- Texto principal sobre fondo: **AAA** (7.5:1+)
- Texto secundario sobre fondo: **AA** (4.5:1+)
- Botones: **AAA**

### Focus States
Todos los elementos interactivos tienen un estado de focus visible con `focus-visible:`.

### Semántica
- Uso correcto de heading hierarchy (h1 → h2 → h3)
- Landmarks: `<header>`, `<main>`, `<section>`, `<footer>`
- Labels en formularios
- ARIA labels cuando es necesario

## Animaciones y Transiciones

### Duración
- **Rápidas** (200ms): hover de botones, cambios de color
- **Medias** (300ms): hover de cards con transform
- **Lentas** (500ms): acordeones, modales

### Easing
Por defecto usa el easing de Tailwind: `ease-in-out`

### Ejemplo
```tsx
className="transition-all duration-200 hover:shadow-medium"
```

## Iconos

Usamos **inline SVG** con estilo Heroicons.

### Tamaños comunes
- Pequeño: `w-4 h-4` (16px)
- Normal: `w-5 h-5` (20px)
- Grande: `w-6 h-6` (24px)
- XL: `w-8 h-8` (32px)

### Color
Heredan del parent o usan tokens:
```tsx
<svg className="w-5 h-5 text-accent-peach" />
```

## Mejores Prácticas

### Composición
```tsx
// ✅ Bueno: Usar componentes
<Button variant="primary" size="lg">
  Comprar
</Button>

// ❌ Malo: Duplicar clases
<button className="bg-accent-peach text-white px-8 py-4...">
  Comprar
</button>
```

### Tokens vs. Valores Directos
```tsx
// ✅ Bueno: Usar tokens
className="text-text-primary bg-surface"

// ❌ Malo: Valores directos
className="text-[#3E2723] bg-[#FFFFFF]"
```

### Responsive
```tsx
// ✅ Bueno: Mobile-first
className="text-4xl md:text-5xl"

// ❌ Malo: Desktop-first
className="text-5xl md:text-4xl"
```

---

**Versión**: 1.0  
**Última actualización**: Enero 2026

