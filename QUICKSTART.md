# 🚀 Quickstart - Bonnilda Landing

## Instalación Rápida

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## Comandos Disponibles

```bash
npm run dev      # Desarrollo (con hot reload)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Revisar código
```

## Estructura Rápida

```
app/
  ├── layout.tsx              # Layout principal + fuentes
  ├── page.tsx                # Página home (ensambla secciones)
  └── globals.css             # Tokens del Design System

components/
  ├── ui/                     # Componentes reutilizables
  │   ├── Button.tsx
  │   ├── Card.tsx
  │   ├── Container.tsx
  │   ├── SectionHeading.tsx
  │   └── Badge.tsx
  └── sections/               # Secciones de la landing
      ├── Header.tsx
      ├── Hero.tsx
      ├── ProductSection.tsx
      ├── WholesalersSection.tsx
      ├── TestimonialsSection.tsx
      ├── FAQSection.tsx
      ├── ContactSection.tsx
      └── Footer.tsx
```

## TODOs Prioritarios

### 🖼️ Reemplazar Placeholders

#### Imágenes
1. **Hero** (`components/sections/Hero.tsx`): Línea ~50 - Imagen principal del producto
2. **Product Cards** (`components/sections/ProductSection.tsx`): Agregar imágenes de cada sabor

#### Textos y Links
1. **WhatsApp** - Reemplazar `+54 9 11 XXXX-XXXX` en:
   - `components/sections/Header.tsx`
   - `components/sections/WholesalersSection.tsx`
   - `components/sections/ContactSection.tsx`

2. **Redes Sociales** (`components/sections/Footer.tsx`):
   - Instagram: Línea ~38
   - Facebook: Línea ~44
   - WhatsApp Business: Línea ~50

3. **Logo**: Actualmente es texto "Bonnilda" - reemplazar con imagen si tenés

### ⚙️ Configurar Funcionalidad

1. **Formulario de Contacto** (`components/sections/ContactSection.tsx`):
   - Línea ~17: Implementar envío real (API, email service, WhatsApp)
   - Opciones sugeridas: Formspree, EmailJS, Resend, o WhatsApp API

2. **Smooth Scroll**: Agregar en `app/layout.tsx`:
   ```css
   html {
     scroll-behavior: smooth;
   }
   ```

## Customización Rápida

### Cambiar Colores

Editar `app/globals.css` (líneas 9-23):

```css
:root {
  --color-accent-peach: #F4A261;        /* Tu color principal */
  --color-accent-raspberry: #C85C5C;    /* Tu color secundario */
  /* ... */
}
```

### Cambiar Fuentes

Editar `app/layout.tsx` (líneas 4-15):

```tsx
import { Tu_Font_Serif, Tu_Font_Sans } from 'next/font/google'
```

Ver fuentes disponibles: [Google Fonts](https://fonts.google.com/)

### Agregar Sección Nueva

1. Crear archivo en `components/sections/TuSeccion.tsx`
2. Importar en `app/page.tsx`
3. Agregar en el orden deseado

Ejemplo:

```tsx
// app/page.tsx
import TuSeccion from '@/components/sections/TuSeccion'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TuSeccion />  {/* Nueva sección */}
        <ProductSection />
        {/* ... */}
      </main>
      <Footer />
    </>
  )
}
```

## Deploy

### Vercel (Recomendado)

1. Push a GitHub
2. Importar en [vercel.com](https://vercel.com)
3. Deploy automático

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`

### Otro hosting

```bash
npm run build
npm start
```

## Soporte

Ver documentación completa en:
- `README.md` - Documentación general
- `DESIGN_SYSTEM.md` - Guía de diseño completa

## Checklist Pre-Launch

- [ ] Reemplazar todas las imágenes placeholder
- [ ] Actualizar número de WhatsApp
- [ ] Configurar links de redes sociales
- [ ] Implementar envío de formulario
- [ ] Probar en mobile/tablet/desktop
- [ ] Verificar accesibilidad (navegación con Tab)
- [ ] Optimizar imágenes (WebP, tamaños adecuados)
- [ ] Configurar SEO metadata (en `app/layout.tsx`)
- [ ] Agregar Google Analytics (opcional)
- [ ] Probar en diferentes navegadores

---

**¿Dudas?** Todo el código está documentado con comentarios. Buscá `// TODO` para ver qué falta completar.

