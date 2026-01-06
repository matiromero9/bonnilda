# 🍑 Bonnilda - Landing Page

Landing page premium para Bonnilda: bombones de fruta 100% artesanales.

## 📁 Estructura del Proyecto

```
bonnilda/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes
│   ├── page.tsx            # Home page (ensambla todas las secciones)
│   └── globals.css         # Design System tokens + estilos globales
├── components/
│   ├── ui/                 # Componentes base del Design System
│   │   ├── Button.tsx      # Botón con variants (primary, secondary, ghost)
│   │   ├── Container.tsx   # Container responsive
│   │   ├── SectionHeading.tsx  # Títulos de sección
│   │   ├── Card.tsx        # Card con shadow y hover
│   │   └── Badge.tsx       # Badge/etiqueta
│   └── sections/           # Secciones de la landing
│       ├── Header.tsx      # Header sticky con nav
│       ├── Hero.tsx        # Hero con headline + CTAs
│       ├── ProductSection.tsx      # 3 sabores/productos
│       ├── WholesalersSection.tsx  # Para mayoristas
│       ├── TestimonialsSection.tsx # 3 testimonios
│       ├── FAQSection.tsx  # Preguntas frecuentes (acordeón)
│       ├── ContactSection.tsx      # Formulario de contacto
│       └── Footer.tsx      # Footer con links y redes
├── tailwind.config.ts      # Configuración Tailwind + tokens
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Design System

### Tokens de Diseño

Todos los tokens están definidos como CSS variables en `app/globals.css` y mapeados en `tailwind.config.ts`.

#### Colores

- **Background**: Crema suave (#FAF7F2) y crema claro (#FFF9F0)
- **Surface**: Blanco puro para cards
- **Accent Peach**: Durazno (#F4A261) - Color principal
- **Accent Raspberry**: Frambuesa (#C85C5C) - Color secundario
- **Text**: Marrón chocolate oscuro (#3E2723), medio y suave

#### Tipografía

- **Serif**: Playfair Display (títulos, headlines)
- **Sans**: Inter (cuerpo, UI)
- **Escala**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl

#### Espaciado

Usa la escala estándar de Tailwind (4, 6, 8, 12, 16, 24, 32, etc.)

#### Border Radius

- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px

#### Shadows

- soft: Sombra suave
- medium: Sombra media
- large: Sombra pronunciada

### Componentes Base

#### Button

Tres variantes: `primary`, `secondary`, `ghost`
Tres tamaños: `sm`, `md`, `lg`

```tsx
<Button variant="primary" size="lg">
  Comprar ahora
</Button>
```

#### Container

Wrapper responsive con max-width y padding automático.

```tsx
<Container>
  {/* Contenido */}
</Container>
```

#### SectionHeading

Título + subtítulo para secciones.

```tsx
<SectionHeading
  title="Nuestros sabores"
  subtitle="Cada bombón es único"
  align="center"
/>
```

#### Card

Card con sombra, border y hover opcional.

```tsx
<Card hover padding="lg">
  {/* Contenido */}
</Card>
```

#### Badge

Etiquetas con variantes de color.

```tsx
<Badge variant="peach">Nuevo</Badge>
```

## 🚀 Instalación y Desarrollo

### Requisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
npm run build
npm start
```

## ✅ Checklist de Implementación

- [x] Estructura de carpetas (Design System)
- [x] Tokens de diseño (colores, tipografía, espaciado, radius, shadows)
- [x] Componentes base (Button, Container, SectionHeading, Card, Badge)
- [x] Header con navegación responsive
- [x] Hero con headline + CTAs
- [x] Sección Producto (3 sabores)
- [x] Sección Mayoristas (beneficios + CTA)
- [x] Sección Testimonios (3 quotes)
- [x] Sección FAQ (acordeón)
- [x] Sección Contacto (formulario)
- [x] Footer (links + redes)
- [x] Responsive mobile-first
- [x] Accesibilidad (focus states, semántica)
- [x] Copys en español rioplatense

## 📝 TODOs

### Imágenes

- [ ] Reemplazar placeholder del Hero con imagen real del producto
- [ ] Agregar imágenes a las cards de productos
- [ ] Agregar fotos de clientes en testimonios
- [ ] Agregar logo real de Bonnilda (actualmente es texto)

### Links y Configuración

- [ ] Actualizar número de WhatsApp en Header, Hero, Mayoristas y Contacto
- [ ] Configurar links de redes sociales en Footer (Instagram, Facebook, WhatsApp)
- [ ] Configurar navegación anchor links (#producto, #mayoristas, etc.)
- [ ] Implementar lógica de envío del formulario de contacto

### Funcionalidad

- [ ] Implementar envío de formulario (API, email service, o WhatsApp API)
- [ ] Agregar smooth scroll a las secciones
- [ ] Agregar animaciones de entrada (opcional)

## 🎯 Próximas Iteraciones

1. **Galería de Productos**: Sección con carrusel de imágenes de los bombones, close-ups, packaging.

2. **Integración WhatsApp Business**: Botón flotante de WhatsApp, mensajes pre-cargados según contexto (mayorista/minorista).

3. **Sistema de Pedidos**: Implementar carrito básico o formulario de pedido con cantidades y sabores.

4. **Microanimaciones**: 
   - Fade-in en scroll para secciones
   - Hover effects más elaborados en cards
   - Loading states en formularios

5. **Sección "Sobre Bonnilda"**: 
   - Historia de la marca
   - Proceso artesanal
   - Valores y compromiso
   - Fotos del proceso de elaboración

## 🛠 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Fonts**: Google Fonts (Playfair Display + Inter)
- **Icons**: Inline SVG (Heroicons style)

## 📱 Responsive

La landing está optimizada para:
- Mobile: 320px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

Breakpoints de Tailwind: `sm`, `md`, `lg`, `xl`, `2xl`

## ♿️ Accesibilidad

- Semántica HTML correcta
- Focus states visibles en todos los elementos interactivos
- Contraste de colores AAA
- Labels en formularios
- ARIA labels en botones sin texto

---

**Hecho con ❤️ para Bonnilda**

