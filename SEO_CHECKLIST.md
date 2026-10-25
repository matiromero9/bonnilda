# Checklist SEO — Bonnilda

**Actualizado 2026-10-25.** Estado real post PRs #7 / #8 / #9. Dominio en prod: `https://www.bonnilda.com.ar` (apex `bonnilda.com.ar` redirige a www con 308).

No inventar claims. En copy y schema: no prometer Sin TACC, vegano, sin conservantes ni “fruta natural”.

---

## Ya implementado

### Meta tags (`app/layout.tsx`)

- Title: “Bonnilda | Bombones frutales artesanales de Los Molles, San Luis”
- Description (bajo 160 caracteres)
- Canonical (`metadataBase` + `alternates.canonical`)
- `lang="es-AR"` en `<html>`
- Viewport responsive (default de Next.js)
- Robots: index/follow + `googleBot` con preview grande

**Nota:** Next.js `Metadata` no emite `<meta name="keywords">` salvo que se declare `keywords`. Este sitio no lo declara. No hace falta: Google ignora keywords meta.

### Open Graph

- `og:type` = website
- `og:title` / `og:description`
- `og:image` = `/images/og-bonnilda.jpg` (1200×630)
- `og:url` = `https://www.bonnilda.com.ar`
- `og:locale` = es_AR

### Twitter Cards

- `twitter:card` = summary_large_image
- title, description, image (`/images/og-bonnilda.jpg`)

### Structured Data (JSON-LD en `components/StructuredData.tsx`)

Hay cuatro schemas, no más:

- Organization
- LocalBusiness
- Product
- FAQPage (sale de `constants/faq.ts`)

**No hay** `BreadcrumbList`. No marcarlo como hecho.

Contacto y geo en schema:

- Teléfono: `+54 9 266 458-0822` (el de `constants/contact.ts`)
- Email: N/A. No hay mail oficial. No inventar uno. No agregar `email` al schema hasta que Matias lo pida.
- `sameAs`: solo Instagram `https://www.instagram.com/bonnildadulzuras` (handle **con s**, confirmado por Matias 2026-10-25). No “corregir” quitando la s.
- Google Business Profile en `sameAs`: pendiente (ver abajo).
- Localidad: Los Molles, San Luis, AR. Coords aproximadas en schema: OK.
- **No publicar dirección de calle.** Negocio sin local a la calle.

### Técnico

- Sitemap: `https://www.bonnilda.com.ar/sitemap.xml` (`app/sitemap.ts`)
- Robots: `https://www.bonnilda.com.ar/robots.txt` (`app/robots.ts`)
- Manifest PWA (`app/manifest.ts` + `public/site.webmanifest`)
- HTML semántico, alt texts, jerarquía de headings, linking interno
- Favicon: **hecho**. Están `/public/favicon.ico`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png` (también `favicon-16x16.png` y `favicon-32x32.png`)

### Analytics (código)

- GA4 ya está cableado (`components/GoogleAnalytics.tsx` + `NEXT_PUBLIC_GA_MEASUREMENT_ID`).
- Confirmar el ID en Vercel es opcional (ver pendientes).

---

## Pendientes reales

Nada de esto es “antes del deploy”: el sitio ya está en `www.bonnilda.com.ar`.

### 1. Google Search Console

1. Agregar propiedad `https://www.bonnilda.com.ar` (URL-prefix o dominio).
2. Verificar (DNS o meta `verification.google` en `app/layout.tsx` si hace falta).
3. Enviar sitemap: `https://www.bonnilda.com.ar/sitemap.xml`

### 2. Bing Webmaster Tools

Misma propiedad y mismo sitemap.

### 3. Google Business Profile

- Reclamar / verificar GBP como **área (Argentina)**, sin calle pública.
- Recién después de verificado, agregar la URL de GBP a `sameAs` en `StructuredData.tsx`.
- Hasta entonces: no poner `sameAs` de GBP.

### 4. Fotos reales de los 6 sabores

Hoy la grilla usa emojis (frutilla, naranja, manzana, ananá, uva, cereza). Matias está en proceso de reemplazarlos por fotos. No tocar copy ni claims al subirlas.

### 5. GA en Vercel (opcional)

Confirmar que `NEXT_PUBLIC_GA_MEASUREMENT_ID` está seteado en el proyecto de Vercel. Si no hay ID, el componente no renderiza: no rompe el sitio.

---

## Después de Search Console / Bing

### Indexación

```
site:www.bonnilda.com.ar
```

Si no hay nada a la semana, mirar cobertura en Search Console.

### Previews

- Facebook/LinkedIn: [Sharing Debugger](https://developers.facebook.com/tools/debug/) → `https://www.bonnilda.com.ar`
- WhatsApp: mandar la URL y chequear la card (usa OG)

### Structured Data

- [Rich Results Test](https://search.google.com/test/rich-results) sobre `https://www.bonnilda.com.ar`
- Esperable: Organization / LocalBusiness / Product / FAQ. **No** Breadcrumb.

### Performance

- [PageSpeed Insights](https://pagespeed.web.dev/)
- Objetivo: > 90 mobile y desktop

---

## Objetivos SEO (3–6 meses)

Orientar a búsquedas reales de la marca, sin claims de dieta ni “fruta natural”:

- [ ] Aparecer para “bombones de fruta artesanales”
- [ ] Aparecer para “bombones Los Molles”
- [ ] Aparecer para “bombones San Luis”
- [ ] Aparecer para “bombones abuela Nilda”
- [ ] Rich snippets (FAQ / producto) cuando Search Console los habilite
- [ ] Tráfico orgánico > 100 visitas/mes

No apuntar a “fruta naturales”, “Sin TACC”, vegano ni “sin conservantes”.

---

## Tips

- **GBP / Google Business:** perfil de área Argentina. Sin dirección de calle. El negocio no tiene local a la calle.
- **Instagram:** bio con `www.bonnilda.com.ar`. Handle oficial: `@bonnildadulzuras`.
- Contenido futuro (si se suma): recetas/proceso, página por sabor, sobre nosotros, FAQ más larga. Sin claims prohibidos.
- Link building: directorios de emprendimientos, colaboradores gastronómicos, IG → www. No listar una calle.

---

Docs de Next.js sobre [metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).
