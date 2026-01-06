# 🗺️ Roadmap - Bonnilda Landing

## Próximas 5 Iteraciones Concretas

### 1. 📸 Galería de Productos Interactiva

**Objetivo**: Mostrar los bombones de forma atractiva con zoom y detalle.

**Componentes a crear**:
- `components/sections/GallerySection.tsx` - Galería con grid
- `components/ui/Lightbox.tsx` - Modal para ver imágenes en grande
- `components/ui/ImageZoom.tsx` - Efecto hover con zoom

**Funcionalidades**:
- Grid masonry o carousel
- Click para ver imagen full
- Navegación con flechas
- Categorías (por sabor, proceso, packaging)
- Lazy loading de imágenes

**Bibliotecas sugeridas**:
- `yet-another-react-lightbox` - Lightbox moderno
- `swiper` - Si preferís carousel
- `react-zoom-pan-pinch` - Para zoom interactivo

**Estimación**: 4-6 horas

---

### 2. 💬 Integración WhatsApp Business Completa

**Objetivo**: Facilitar contacto directo desde cualquier punto de la web.

**Implementaciones**:

1. **Botón flotante** (siempre visible):
   - Fixed bottom-right
   - Badge con "En línea" si estás disponible
   - Mensajes predefinidos según contexto

2. **Links inteligentes**:
   - Pre-cargar mensaje según sección
   - "Comprar ahora" → mensaje de compra minorista
   - "Quiero revender" → mensaje mayorista
   - FAQ → pregunta específica

3. **Horarios de atención**:
   - Mostrar si estás online/offline
   - Mensaje automático fuera de horario

**Código base**:
```tsx
// components/WhatsAppWidget.tsx
const getContextMessage = () => {
  const hour = new Date().getHours()
  const isBusinessHours = hour >= 9 && hour <= 18
  
  return {
    available: isBusinessHours,
    message: isBusinessHours 
      ? "Hola! Estoy navegando en la web de Bonnilda..."
      : "Hola! Vi la web de Bonnilda y me gustaría info..."
  }
}
```

**Estimación**: 3-4 horas

---

### 3. ✨ Microanimaciones y Mejoras UX

**Objetivo**: Hacer la experiencia más fluida y profesional.

**Animaciones a implementar**:

1. **Scroll reveal** (elementos aparecen al scrollear):
   - Usar `framer-motion` o `AOS` (Animate On Scroll)
   - Fade in + slide up para cards
   - Stagger para listas

2. **Hover states mejorados**:
   - Cards con scale + shadow
   - Botones con shimmer effect
   - Imágenes con parallax sutil

3. **Loading states**:
   - Skeleton loaders para imágenes
   - Spinner en formulario
   - Progress bar al hacer scroll

4. **Transiciones de página**:
   - Smooth scroll mejorado
   - Fade entre secciones

**Código ejemplo**:
```bash
npm install framer-motion
```

```tsx
// components/ui/AnimatedCard.tsx
import { motion } from 'framer-motion'

const AnimatedCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Card>{children}</Card>
  </motion.div>
)
```

**Estimación**: 4-5 horas

---

### 4. 🛒 Sistema de Pedidos Básico

**Objetivo**: Permitir que los clientes armen su pedido antes de contactar.

**Funcionalidades**:

1. **Selector de productos**:
   - Cards de productos con botón "Agregar"
   - Counter (+/-) para cantidad
   - Variantes de sabor

2. **Mini-cart/Sidebar**:
   - Resumen del pedido
   - Cálculo de total (si mostrás precios)
   - Botón "Enviar pedido por WhatsApp"

3. **WhatsApp con pedido pre-cargado**:
   ```
   Hola! Quiero hacer el siguiente pedido:
   - 2x Durazno & Miel
   - 1x Frambuesa Silvestre
   Total: $X
   ```

4. **Persistencia**:
   - Guardar carrito en localStorage
   - Recuperar al volver a entrar

**Componentes**:
- `components/sections/ShopSection.tsx`
- `components/ui/ProductCard.tsx` (con selector)
- `components/ui/Cart.tsx` (sidebar o modal)
- `hooks/useCart.ts` (lógica del carrito)

**Estimación**: 8-10 horas

---

### 5. 📊 Dashboard Mayorista (Portal Revendedores)

**Objetivo**: Área privada para revendedores con recursos y materiales.

**Funcionalidades**:

1. **Login simple** (sin backend complejo):
   - Password única para todos (MVP)
   - O login con Google
   - Proteger ruta `/mayoristas`

2. **Recursos descargables**:
   - Lista de precios actualizada (PDF)
   - Catálogo digital
   - Imágenes en alta para redes
   - Templates de historias de Instagram
   - Guía de venta

3. **Calculadora de ganancias**:
   - Input: cantidad a comprar
   - Output: precio por unidad, margen, ganancia

4. **Formulario de pedido mayorista**:
   - Pre-lleno con cantidades mínimas
   - Envío por WhatsApp o email

**Estructura**:
```
app/
  mayoristas/
    page.tsx           # Dashboard principal
    login/
      page.tsx         # Login
    recursos/
      page.tsx         # Recursos descargables
    calculadora/
      page.tsx         # Calculadora
```

**Autenticación simple**:
```tsx
// middleware.ts
export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('mayorista-auth')
  
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/mayoristas')) {
    return NextResponse.redirect(new URL('/mayoristas/login', request.url))
  }
}
```

**Estimación**: 10-12 horas

---

## Iteraciones Adicionales (Futuro)

### 6. Blog de Recetas y Contenido
- Sección de recetas con los bombones
- Tips de conservación
- Historia de cada sabor
- SEO-friendly

### 7. Reviews y Social Proof
- Widget de reviews de Google
- Feed de Instagram embebido
- Counter de clientes felices
- Mapa de revendedores

### 8. Notificaciones y Alertas
- Newsletter (Mailchimp, ConvertKit)
- Popup de descuento al salir
- Notificación de nuevo sabor
- Push notifications

### 9. Programa de Referidos
- Código único por revendedor
- Tracking de referidos
- Comisiones automáticas

### 10. Checkout Completo con Mercado Pago
- Integración de pagos
- Gestión de stock
- Seguimiento de pedidos

---

## Priorización Sugerida

**Semana 1-2** (Quick Wins):
- ✅ Landing base (COMPLETADO)
- [ ] Integración WhatsApp (#2)
- [ ] Reemplazar placeholders

**Semana 3-4** (Engagement):
- [ ] Galería de productos (#1)
- [ ] Microanimaciones (#3)

**Mes 2** (Conversión):
- [ ] Sistema de pedidos básico (#4)

**Mes 3+** (Escalabilidad):
- [ ] Dashboard mayorista (#5)
- [ ] Blog y contenido (#6)

---

## Métricas a Trackear

Una vez lanzado, seguí estas métricas:

1. **Tráfico**:
   - Visitantes únicos
   - Páginas más vistas
   - Tiempo en sitio

2. **Conversión**:
   - Clics en "Comprar ahora"
   - Mensajes por WhatsApp
   - Formularios enviados
   - Tasa de conversión minorista vs mayorista

3. **Comportamiento**:
   - Scroll depth (qué tan abajo llegan)
   - Qué sección genera más engagement
   - Dispositivos más usados

4. **Fuentes**:
   - De dónde vienen (Instagram, Facebook, Google, directo)
   - Qué campañas funcionan mejor

**Herramientas**:
- Google Analytics
- Hotjar (heatmaps)
- Meta Pixel
- Google Search Console

---

**Última actualización**: Enero 2026

