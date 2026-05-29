# AGENTS.md

## Cursor Cloud specific instructions

- Comandos estándar del proyecto: ver `README.md` para `npm run dev`, `npm run build` y `npm run start`.
- Este repo separa artefactos de compilación por entorno:
  - Desarrollo: `/.next-dev`
  - Producción (build/start): `/.next`
  Esto evita errores de chunks cuando se ejecutan flujos de dev y producción en la misma VM.
- Si aparece un error tipo `Cannot find module './<chunk>.js'`, limpiar artefactos con `npm run clean`, luego ejecutar de nuevo `npm run build` y `npm run start`.
- El lint se ejecuta con ESLint CLI (`npm run lint`) para evitar prompts interactivos de `next lint` en sesiones no-TTY.
