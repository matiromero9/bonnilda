# 🔍 Checklist SEO - Bonnilda

Esta guía te ayuda a completar la configuración SEO antes del lanzamiento.

---

## ✅ Ya Implementado

### Meta Tags
- ✅ Title optimizado con palabras clave
- ✅ Meta description atractiva (bajo 160 caracteres)
- ✅ Keywords relevantes
- ✅ Canonical URL
- ✅ Language (es-AR)
- ✅ Viewport responsive

### Open Graph (Facebook, WhatsApp, LinkedIn)
- ✅ og:type = website
- ✅ og:title
- ✅ og:description
- ✅ og:image (1200x630px recomendado)
- ✅ og:url
- ✅ og:locale = es_AR

### Twitter Cards
- ✅ twitter:card = summary_large_image
- ✅ twitter:title
- ✅ twitter:description
- ✅ twitter:image

### Structured Data (JSON-LD)
- ✅ Organization schema
- ✅ LocalBusiness schema
- ✅ Product schema
- ✅ Breadcrumb schema

### Technical SEO
- ✅ Sitemap.xml generado automáticamente
- ✅ Robots.txt configurado
- ✅ Manifest.json (PWA)
- ✅ Semantic HTML
- ✅ Alt texts en imágenes
- ✅ Heading hierarchy (H1, H2, H3)
- ✅ Internal linking

---

## 📋 Tareas Pendientes (Antes del Deploy)

### 1. **Favicon** ⚠️ IMPORTANTE

**Dónde:** `/public/favicon.ico`

**Qué hacer:**
1. Crear favicon con tu logo
2. Tamaños recomendados: 16x16, 32x32, 48x48
3. Herramientas online: [favicon.io](https://favicon.io) o [realfavicongenerator.net](https://realfavicongenerator.net)
4. Colocar archivo en `/public/favicon.ico`

**También recomendado:**
```
/public/apple-touch-icon.png (180x180)
/public/android-chrome-192x192.png
/public/android-chrome-512x512.png
```

---

### 2. **Dominio Real** ✅ COMPLETADO

**Estado:** Ya configurado con `https://bonnilda.vercel.app`

**Archivos actualizados:**
- ✅ `app/layout.tsx`
- ✅ `app/robots.ts`
- ✅ `app/sitemap.ts`
- ✅ `components/StructuredData.tsx`

**Nota:** Si en el futuro comprás un dominio custom (ej: `bonnilda.com`), actualizá estas URLs nuevamente.

---

### 3. **Google Search Console** 🔧

**Pasos:**
1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Agregar propiedad (tu dominio)
3. Verificar propiedad (opción recomendada: DNS)
4. Obtener código de verificación
5. Agregar en `app/layout.tsx`:

```typescript
verification: {
  google: 'TU-CODIGO-AQUI',
},
```

6. Enviar sitemap: `https://tudominio.com/sitemap.xml`

---

### 4. **Información de Contacto** ⚠️ IMPORTANTE

**Actualizar en `components/StructuredData.tsx`:**

```typescript
// Línea 21
telephone: '+54 9 11 1234-5678', // ← TU NÚMERO REAL

// Línea 22
email: 'hola@bonnilda.com', // ← TU EMAIL REAL
```

---

### 5. **Redes Sociales** (Opcional pero recomendado)

**Actualizar en `components/StructuredData.tsx`:**

```typescript
// Línea 31-34
sameAs: [
  'https://www.instagram.com/bonnilda',  // ← TU INSTAGRAM
  'https://www.facebook.com/bonnilda',   // ← TU FACEBOOK
],
```

---

### 6. **Geolocalización** (Si tenés local físico)

**Actualizar en `components/StructuredData.tsx`:**

```typescript
// Líneas 54-57
geo: {
  '@type': 'GeoCoordinates',
  latitude: -34.6037,   // ← TU LATITUD
  longitude: -58.3816,  // ← TU LONGITUD
},
```

**Cómo obtener coordenadas:**
1. Ir a Google Maps
2. Click derecho en tu ubicación
3. Copiar coordenadas

---

### 7. **Horarios de Atención** (Opcional)

**Actualizar en `components/StructuredData.tsx` (líneas 59-66):**

```typescript
openingHoursSpecification: [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',  // ← TU HORARIO
    closes: '18:00', // ← TU HORARIO
  },
],
```

---

## 🚀 Después del Deploy

### 1. **Verificar indexación en Google**

Buscar en Google:
```
site:tudominio.com
```

Si no aparece nada después de 1 semana, revisar Google Search Console.

---

### 2. **Probar preview en redes sociales**

**Facebook/LinkedIn:**
- [Debugger de Facebook](https://developers.facebook.com/tools/debug/)
- Pegar tu URL
- Click en "Scrape Again"

**Twitter:**
- [Card Validator de Twitter](https://cards-dev.twitter.com/validator)
- Pegar tu URL

**WhatsApp:**
- Simplemente enviar tu URL en un chat y ver el preview

---

### 3. **Verificar Structured Data**

- [Rich Results Test de Google](https://search.google.com/test/rich-results)
- Pegar tu URL
- Verificar que no haya errores

---

### 4. **Performance Check**

- [PageSpeed Insights](https://pagespeed.web.dev/)
- Objetivo: Score > 90 en mobile y desktop

---

## 📊 Monitoreo Continuo

### Google Analytics (Opcional)

1. Crear cuenta en [analytics.google.com](https://analytics.google.com)
2. Crear propiedad para tu sitio
3. Obtener ID de medición (ej: `G-XXXXXXXXXX`)
4. Instalar en Next.js:

```bash
npm install @next/third-parties
```

```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

---

### Google Search Console (Revisión mensual)

Revisar:
- ✅ Errores de indexación
- ✅ Cobertura de páginas
- ✅ Rendimiento de búsqueda (clicks, impresiones)
- ✅ Core Web Vitals

---

## 🎯 Objetivos SEO (3-6 meses)

- [ ] Aparecer en primera página para "bombones artesanales buenos aires"
- [ ] Aparecer en primera página para "bombones de fruta naturales"
- [ ] Rich snippets en resultados de búsqueda
- [ ] Tráfico orgánico > 100 visitas/mes

---

## 💡 Tips Extra

### Crear contenido adicional (futuro)

- Blog con recetas o historias del proceso artesanal
- Página de cada sabor con descripción detallada
- Página "Sobre nosotros" con historia de la marca
- Página de preguntas frecuentes más extensa

### Link building

- Aparecer en directorios locales de emprendimientos
- Colaborar con influencers gastronómicos
- Instagram + link a tu web en bio
- Google My Business (si tenés local)

---

**¿Dudas?** Revisá la documentación oficial de Next.js sobre [metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

