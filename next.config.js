/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV !== 'production'

const nextConfig = {
  reactStrictMode: true,
  // Evita conflictos entre `next dev` y builds de producción en paralelo.
  distDir: isDevelopment ? '.next-dev' : '.next',
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'bonnilda.vercel.app',
          },
        ],
        destination: 'https://www.bonnilda.com.ar/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

