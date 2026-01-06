# ⚡ Cheat Sheet - Bonnilda

Comandos y referencias rápidas para trabajar con la landing de Bonnilda.

---

## 🚀 Comandos

```bash
# Instalar
npm install

# Desarrollo
npm run dev              # → http://localhost:3000

# Producción
npm run build
npm start

# Linter
npm run lint
```

---

## 📂 Archivos Clave

| Archivo | Qué hace |
|---------|----------|
| `app/page.tsx` | Página principal (ensambla secciones) |
| `app/layout.tsx` | Layout + fuentes + metadata |
| `app/globals.css` | Design System tokens |
| `tailwind.config.ts` | Configuración Tailwind + tokens |
| `components/ui/` | Componentes base |
| `components/sections/` | Secciones de la landing |

---

## 🎨 Colores (Tailwind)

```tsx
// Backgrounds
bg-background          // Crema suave
bg-background-soft     // Crema claro
bg-surface             // Blanco

// Acentos
bg-accent-peach        // Durazno
bg-accent-raspberry    // Frambuesa

// Textos
text-text-primary      // Marrón oscuro
text-text-secondary    // Marrón medio
text-text-muted        // Marrón suave
text-text-inverse      // Blanco

// Bordes
border-border          // Borde suave
border-border-light    // Borde muy suave
```

---

## 🔘 Componentes Rápidos

```tsx
// Botón
<Button variant="primary" size="lg">Texto</Button>

// Card
<Card hover padding="lg">Contenido</Card>

// Container
<Container>Contenido centrado</Container>

// Heading
<SectionHeading title="Título" subtitle="Sub" />

// Badge
<Badge variant="peach">Nuevo</Badge>
```

---

## 📱 Responsive

```tsx
// Tipografía
className="text-4xl md:text-5xl lg:text-6xl"

// Espaciado
className="py-12 md:py-16 lg:py-24"

// Grid
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// Mostrar/Ocultar
className="hidden md:block"        // Solo desktop
className="block md:hidden"        // Solo mobile
```

---

## 🔍 Buscar TODOs

```bash
# Buscar todos los TODOs en el código
grep -r "TODO" components/ app/

# Archivos con TODOs:
# - Hero.tsx (imagen)
# - ProductSection.tsx (galería)
# - WholesalersSection.tsx (WhatsApp)
# - ContactSection.tsx (formulario)
# - Footer.tsx (redes sociales)
```

---

## ✏️ Ediciones Rápidas

### Cambiar Colores

`app/globals.css` línea 9-23:
```css
--color-accent-peach: #F4A261;
--color-accent-raspberry: #C85C5C;
```

### Cambiar Fuentes

`app/layout.tsx` línea 4-15:
```tsx
import { Tu_Font, Otra_Font } from 'next/font/google'
```

### Agregar Sección

1. Crear `components/sections/MiSeccion.tsx`
2. Importar en `app/page.tsx`
3. Agregar `<MiSeccion />` en el orden deseado

### Cambiar Copys

Todos los textos están en los archivos de secciones:
- `Hero.tsx` → Headlines y CTAs
- `ProductSection.tsx` → Productos
- `WholesalersSection.tsx` → Mayoristas
- etc.

---

## 🔗 Links Importantes

### Integraciones

**WhatsApp**:
```tsx
const url = `https://wa.me/5491112345678?text=${encodeURIComponent('Mensaje')}`
```

**Formspree** (formulario):
```tsx
fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  body: JSON.stringify(data)
})
```

**Google Analytics** (en `layout.tsx`):
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />
```

Ver `INTEGRATION_EXAMPLES.md` para código completo.

---

## 📐 Espaciado Común

```tsx
// Padding de secciones
className="py-16 md:py-24"

// Margin entre elementos
className="mb-12 md:mb-16"

// Gap en grids
className="gap-8"

// Espaciado vertical entre elementos
className="space-y-4"    // 16px
className="space-y-8"    // 32px
```

---

## 🎨 Gradientes

```tsx
// Durazno a Frambuesa
className="bg-gradient-to-br from-accent-peach to-accent-raspberry"

// Background suave
className="bg-gradient-to-b from-background-soft to-background"
```

---

## 🖼️ Imágenes (Next.js)

```tsx
import Image from 'next/image'

<Image
  src="/images/producto.jpg"
  alt="Descripción"
  width={600}
  height={600}
  priority  // Para above the fold
/>
```

---

## 🔧 Debugging

```bash
# Ver errores de compilación
npm run dev

# Ver errores de linter
npm run lint

# Limpiar caché
rm -rf .next
npm run dev
```

---

## 📦 Deploy a Vercel

```bash
# 1. Commit y push
git add .
git commit -m "Landing Bonnilda v1"
git push

# 2. En vercel.com:
# - Importar repo
# - Deploy automático
# - Configurar dominio (opcional)
```

---

## 🎯 Checklist Rápido

- [ ] `npm install`
- [ ] Reemplazar imágenes (`Hero.tsx`, `ProductSection.tsx`)
- [ ] Actualizar WhatsApp (buscar `XXXX-XXXX`)
- [ ] Configurar redes sociales (`Footer.tsx`)
- [ ] Implementar formulario (`ContactSection.tsx`)
- [ ] Probar responsive (DevTools → Toggle device)
- [ ] `npm run build` (verificar que compile)
- [ ] Deploy

---

## 📚 Documentación

| Archivo | Qué contiene |
|---------|--------------|
| `README.md` | Documentación general |
| `QUICKSTART.md` | Inicio rápido |
| `DESIGN_SYSTEM.md` | Guía completa del Design System |
| `COMPONENT_EXAMPLES.md` | Ejemplos de uso de componentes |
| `INTEGRATION_EXAMPLES.md` | Código para integraciones |
| `VISUAL_GUIDE.md` | Guía visual de secciones |
| `ROADMAP.md` | Próximas iteraciones |
| `ENTREGA.md` | Resumen ejecutivo |

---

## 🆘 Ayuda Rápida

**¿Cómo cambio un color?**
→ `app/globals.css` líneas 9-23

**¿Cómo agrego una sección?**
→ Crear en `components/sections/`, importar en `app/page.tsx`

**¿Cómo cambio el texto del Hero?**
→ Editar `components/sections/Hero.tsx`

**¿Cómo integro WhatsApp?**
→ Ver `INTEGRATION_EXAMPLES.md` sección WhatsApp

**¿Dónde están los TODOs?**
→ Buscar `// TODO` en el código

**¿Cómo hago que el formulario funcione?**
→ Ver `INTEGRATION_EXAMPLES.md` sección Formulario

---

## 🎨 Customización Rápida

### Cambiar Headline del Hero

```tsx
// components/sections/Hero.tsx línea 16
<h1 className="text-balance">
  Tu nuevo headline aquí
  <span className="text-accent-raspberry">con acento</span>
</h1>
```

### Agregar Producto

```tsx
// components/sections/ProductSection.tsx línea 8
const products = [
  // ... productos existentes
  {
    name: 'Nuevo Sabor',
    description: 'Descripción...',
    benefits: ['Beneficio 1', 'Beneficio 2', 'Beneficio 3'],
    badge: 'Nuevo',
  },
]
```

### Cambiar Footer Links

```tsx
// components/sections/Footer.tsx línea 10
const footerLinks = {
  product: [
    { label: 'Tu link', href: '#seccion' },
    // ...
  ],
}
```

---

**🎯 Todo está documentado. Buscá en los archivos .md para más info.**

