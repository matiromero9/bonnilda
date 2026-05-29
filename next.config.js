/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV !== 'production'

const nextConfig = {
  reactStrictMode: true,
  // Evita conflictos entre `next dev` y builds de producción en paralelo.
  distDir: isDevelopment ? '.next-dev' : '.next',
}

module.exports = nextConfig

