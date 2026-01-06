# 🍑 Bonnilda - Landing Page

Landing page premium para Bonnilda: bombones de fruta 100% artesanales.

**Stack:** Next.js 15 + TypeScript + TailwindCSS

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm start
```

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build optimizado para producción
npm run start    # Servidor de producción
npm run lint     # Linter de código
```

---

## 📁 Estructura del Proyecto

```
bonnilda/
├── app/
│   ├── layout.tsx          # Layout raíz + fuentes
│   ├── page.tsx            # Homepage (ensambla secciones)
│   └── globals.css         # Design System tokens + estilos globales
│
├── components/
│   ├── ui/                 # Componentes base reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SkipLink.tsx
│   │   └── Skeleton*.tsx   # Loading states
│   │
│   └── sections/           # Secciones de la landing
│       ├── Header.tsx      # Header sticky con navegación
│       ├── Hero.tsx        # Hero principal con CTAs
│       ├── WholesalersSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── FAQSection.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
│
├── lib/                    # Lógica de negocio
│   ├── validations.ts      # Validaciones de formularios
│   └── security.ts         # Sanitización y protección anti-spam
│
├── hooks/                  # Custom hooks
│   └── useFormValidation.ts
│
└── tailwind.config.ts      # Configuración de Tailwind + tokens
```

---

## 🎨 Design System

### Filosofía Visual

**Premium Artesanal**: Balance entre lo hecho a mano y lo profesional. Cálido sin ser infantil, elegante sin ser corporativo.

### Paleta de Colores

```css
/* Base */
--color-background: #FAF7F2        /* Crema suave */
--color-surface: #FFFFFF           /* Blanco para cards */

/* Acentos */
--color-accent-peach: #F4A261      /* Durazno - Principal */
--color-accent-raspberry: #C85C5C  /* Frambuesa - Secundario */

/* Textos */
--color-text-primary: #3E2723      /* Marrón chocolate */
--color-text-secondary: #5D4037    /* Marrón medio */
--color-text-muted: #8D6E63        /* Marrón suave */
```

### Tipografía

- **Playfair Display** (Serif): Títulos y headlines
- **Inter** (Sans): Cuerpo y UI

Escala: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`

### Componentes Base

#### Button

```tsx
<Button variant="primary" size="lg">
  Comprar ahora
</Button>
```

Variantes: `primary`, `secondary`, `ghost`  
Tamaños: `sm`, `md`, `lg`

#### Container

```tsx
<Container>
  {/* Contenido responsive con max-width y padding automático */}
</Container>
```

#### SectionHeading

```tsx
<SectionHeading
  title="Título de Sección"
  subtitle="Subtítulo descriptivo"
  align="center"
/>
```

#### Card

```tsx
<Card hover padding="lg">
  {/* Contenido con sombra y border */}
</Card>
```

---

## 🛡️ Seguridad y Validación

El formulario de contacto incluye:

- ✅ **Validación robusta** (nombres, teléfonos, mensajes)
- ✅ **Sanitización de inputs** (escape de HTML peligroso)
- ✅ **Rate limiting** (30 seg entre envíos, máx 5 por hora)
- ✅ **Honeypot field** (trampa invisible para bots)
- ✅ **Verificación de tiempo mínimo** (anti-bots rápidos)

Ver: `lib/validations.ts` y `lib/security.ts`

---

## ♿ Accesibilidad

Cumple con **WCAG 2.1 Level AA**:

- ✅ Navegación completa por teclado
- ✅ Compatible con screen readers (NVDA, JAWS, VoiceOver)
- ✅ Skip link para saltar al contenido principal
- ✅ Patrones ARIA apropiados (accordion, carousel, forms)
- ✅ Focus states visibles en todos los elementos interactivos
- ✅ Landmarks semánticos correctos
- ✅ Contraste de colores adecuado

Ver: `ACCESSIBILITY_IMPROVEMENTS.md`

---

## 📱 Responsive

Optimizado para:

- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`

---

## 📝 TODOs Pendientes

### Contenido a reemplazar

- [ ] **Imagen del Hero**: Reemplazar placeholder con imagen real del producto (`Hero.tsx`)
- [ ] **Número de WhatsApp**: Actualizar en Header, ContactSection y Footer
- [ ] **Links de redes sociales**: Configurar Instagram, Facebook, WhatsApp en Footer
- [ ] **Logo**: Reemplazar texto "Bonnilda" con imagen/SVG si está disponible

### Funcionalidad

- [ ] **Envío de formulario**: Implementar integración real con API/email service (`ContactSection.tsx`)
  - Opciones: Formspree, Resend, EmailJS, o WhatsApp Business API
- [ ] **Google Analytics**: Agregar tracking (opcional)

---

## 🚢 Deploy

### Vercel (Recomendado)

1. Push a GitHub/GitLab
2. Importar proyecto en [vercel.com](https://vercel.com)
3. Deploy automático en cada push

### Netlify

```bash
Build command: npm run build
Publish directory: .next
```

### Otro hosting

```bash
npm run build
npm start
# Servidor en puerto 3000
```

---

## ✅ Checklist Pre-Launch

- [ ] Reemplazar todas las imágenes placeholder
- [ ] Actualizar número de WhatsApp en todos los lugares
- [ ] Configurar links de redes sociales
- [ ] Implementar envío real del formulario
- [ ] Probar en mobile/tablet/desktop
- [ ] Verificar navegación por teclado (Tab)
- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] Configurar meta tags SEO (`layout.tsx`)
- [ ] Probar en Chrome, Firefox, Safari
- [ ] Validar con Lighthouse (Performance, Accessibility, SEO)

---

## 🎯 Características Implementadas

- ✅ Design System completo con tokens
- ✅ Componentes reutilizables
- ✅ Header sticky con navegación responsive
- ✅ Hero con parallax y efectos visuales
- ✅ Sección de mayoristas con beneficios
- ✅ Testimonios con carousel mobile
- ✅ FAQ con accordion accesible
- ✅ Formulario con validación completa
- ✅ Footer optimizado para mobile
- ✅ Scroll progress indicator
- ✅ Hover states y micro-interacciones
- ✅ Loading states con skeletons
- ✅ Overlaps entre secciones
- ✅ Optimización mobile (vertical reducida)
- ✅ Accesibilidad WCAG 2.1 AA

---

## 🛠️ Tecnologías

- **Next.js 15**: Framework React con App Router
- **TypeScript**: Type safety
- **TailwindCSS**: Utility-first CSS
- **Google Fonts**: Playfair Display + Inter
- **React Hooks**: Estado y efectos
- **CSS Variables**: Design tokens

---

## 📚 Documentación Adicional

- `ACCESSIBILITY_IMPROVEMENTS.md` - Detalles de mejoras de accesibilidad implementadas

---

**Hecho con ❤️ para Bonnilda**
