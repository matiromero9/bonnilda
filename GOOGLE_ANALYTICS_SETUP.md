# Google tag (GTM-NN2HMFH2)

El sitio carga el Google tag una sola vez en el layout raíz, en todas las páginas.

- Contenedor: `GTM-NN2HMFH2`
- Snippet: `gtm.js?id=GTM-NN2HMFH2` + `dataLayer` / `gtag` + `gtag('js', new Date())`
- ID: `constants/gtm.ts`, override opcional con `NEXT_PUBLIC_GTM_ID`
- No hay banner de cookies por ahora

## Variable de entorno (opcional)

El default ya es `GTM-NN2HMFH2`. Solo hace falta `.env.local` si se quiere otro contenedor:

```bash
NEXT_PUBLIC_GTM_ID=GTM-NN2HMFH2
```

En Vercel el ID queda hardcodeado de default; `NEXT_PUBLIC_GTM_ID` es opcional.

## Evento `whatsapp_click`

Cada enlace a `wa.me/5492664580822` (componente `WhatsAppLink`) dispara:

```js
window.gtag?.('event', 'whatsapp_click', { location: '<sección>' })
```

Valores de `location`: `header`, `hero`, `como-pedir`, `mayoristas`, `contacto`, `formulario`, `footer`, `floating-cta`.

El envío del formulario de contacto también abre WhatsApp y dispara `whatsapp_click` con `location: formulario`.

---

## Para Matias: marcar `whatsapp_click` como evento clave (conversión) en GA4

Hacerlo **después del deploy**, con el tag ya en producción.

1. Entrá a [Google Analytics](https://analytics.google.com/) y elegí la propiedad de Bonnilda.
2. Abre **Administrar** (engranaje, abajo a la izquierda).
3. En **Visualización de datos** → **Eventos**.
4. Esperá a que aparezca `whatsapp_click` (puede tardar unas horas; en **Informes → Tiempo real** se ve antes).
5. En la fila de `whatsapp_click`, activá **Marcar como evento clave** (interruptor o estrella).
6. Si el evento todavía no está en la lista, andá a **Eventos clave** → **Nuevo evento clave** y creá exactamente `whatsapp_click`.
7. Comprobación: en el sitio, hacé clic en un botón de WhatsApp (se abre en otra pestaña). En **Tiempo real** debería verse el evento `whatsapp_click` y el parámetro `location`.

No hace falta un trigger extra en GTM si el Google tag ya recibe `gtag('event', ...)`. El nombre tiene que coincidir **exactamente**: `whatsapp_click`.

## Cómo verificar en local

```bash
npm run build
npm start
```

En el navegador, DevTools → Red: `gtm.js?id=GTM-NN2HMFH2`. Consola: `dataLayer` después de un clic en WhatsApp.
