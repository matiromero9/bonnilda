import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

/**
 * Google Analytics 4 Component
 * Tracks page views, events, and conversions
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // No renderizar en desarrollo para no contaminar los datos
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

