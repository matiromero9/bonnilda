import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-accent-raspberry mb-4">404</h1>
        <h2 className="text-2xl font-bold text-text-primary mb-4">Página no encontrada</h2>
        <p className="text-text-secondary mb-8">
          Lo sentimos, la página que buscás no existe.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-accent-peach text-white font-semibold rounded-lg hover:bg-accent-raspberry transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

