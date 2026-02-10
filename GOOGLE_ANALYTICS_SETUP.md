# 📊 Configuración de Google Analytics 4

## Paso 1: Obtener el Measurement ID

1. Ve a https://analytics.google.com/
2. Sigue los pasos de configuración
3. Copia tu **Measurement ID** (formato: `G-XXXXXXXXXX`)

## Paso 2: Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Reemplaza `G-XXXXXXXXXX` con tu ID real.

## Paso 3: Deploy en Vercel

1. Ve a tu proyecto en Vercel: https://vercel.com/
2. Settings → Environment Variables
3. Agrega la variable:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
4. Redeploy el proyecto

## 🎯 Eventos que se trackean automáticamente:

- ✅ Page views (vistas de página)
- ✅ Form submissions (envíos de formulario)
- ✅ WhatsApp clicks
- ✅ Social media clicks (Instagram, Facebook)
- ✅ CTA clicks
- ✅ FAQ expansions

## 📈 Ver los datos:

- Ve a https://analytics.google.com/
- Selecciona tu propiedad "Bonnilda"
- Reportes → Tiempo real (para ver visitantes ahora)
- Reportes → Adquisición (para ver de dónde vienen)
- Reportes → Engagement (para ver qué hacen)

