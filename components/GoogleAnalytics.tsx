import Script from 'next/script'

interface GoogleAnalyticsProps {
  gtmId: string
}

/**
 * Google tag en el layout raíz (una vez, todas las páginas).
 * Snippet de "Instalar manualmente": gtm.js + dataLayer/gtag + gtag('js', new Date()).
 */
export default function GoogleAnalytics({ gtmId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
    </>
  )
}
