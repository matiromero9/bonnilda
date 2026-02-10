#!/bin/bash

# Script para generar favicon desde el logo existente
# Uso: ./scripts/create-favicon.sh

echo "🎨 Generando favicon desde logo..."

# Verificar que existe el logo
if [ ! -f "public/images/logo.jpeg" ]; then
    echo "❌ Error: No se encontró public/images/logo.jpeg"
    echo "   Por favor asegurate de que el logo esté en esa ubicación."
    exit 1
fi

# Crear favicon usando sips (viene con macOS)
if command -v sips &> /dev/null; then
    echo "✓ Usando sips para redimensionar..."
    sips -z 32 32 public/images/logo.jpeg --out public/favicon.ico
    echo "✅ Favicon creado en public/favicon.ico"
    
# Alternativa: ImageMagick
elif command -v convert &> /dev/null; then
    echo "✓ Usando ImageMagick para redimensionar..."
    convert public/images/logo.jpeg -resize 32x32 public/favicon.ico
    echo "✅ Favicon creado en public/favicon.ico"
    
else
    echo "⚠️  No se encontró 'sips' ni 'convert' (ImageMagick)"
    echo ""
    echo "📝 Soluciones alternativas:"
    echo "   1. Usá favicon.io (online, más completo):"
    echo "      → https://favicon.io/favicon-converter/"
    echo ""
    echo "   2. Instalá ImageMagick:"
    echo "      → brew install imagemagick"
    echo ""
    echo "   3. Redimensioná manualmente tu logo a 32x32 píxeles"
    echo "      y guardalo como 'public/favicon.ico'"
    exit 1
fi

# Instrucciones finales
echo ""
echo "🎉 ¡Listo! Próximos pasos:"
echo "   1. Reiniciá el servidor: npm run dev"
echo "   2. Refrescá el navegador: Cmd+Shift+R"
echo "   3. Verificá la pestaña del navegador"
echo ""
echo "💡 Para una mejor calidad, recomendamos usar:"
echo "   → https://favicon.io/favicon-converter/"
echo "   (genera múltiples tamaños y formatos)"


