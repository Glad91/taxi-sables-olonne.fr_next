'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface GoogleTagProps {
  gtag_id?: string
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export default function GoogleTag({ gtag_id }: GoogleTagProps) {
  const GA_TRACKING_ID = gtag_id || process.env.NEXT_PUBLIC_GA_TRACKING_ID

  useEffect(() => {
    if (!GA_TRACKING_ID || process.env.NODE_ENV !== 'production') {
      return
    }

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || []

    // gtag function
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }

    // Configure Google Analytics
    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID, {
      // Respect user privacy
      anonymize_ip: true,
      // Cookie configuration
      cookie_flags: 'SameSite=None;Secure',
      // Page view settings
      send_page_view: true,
    })

    // Track initial page view
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [GA_TRACKING_ID])

  // Only render in production with valid tracking ID
  if (!GA_TRACKING_ID || process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      {/* Google Analytics Configuration */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure',
                  send_page_view: true
                });
              } catch(e) {
                console.warn('GoogleTag error:', e);
              }
            })();
          `,
        }}
      />
    </>
  )
}

// Hook for tracking custom events
export function useGoogleAnalytics() {
  const trackEvent = (
    action: string,
    category: string = 'engagement',
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  const trackPageView = (url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
        page_title: title,
        page_location: url,
      })
    }
  }

  const trackConversion = (
    event_name: string,
    parameters?: Record<string, unknown>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event_name, {
        ...parameters,
        send_to: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
      })
    }
  }

  return {
    trackEvent,
    trackPageView,
    trackConversion,
  }
}
