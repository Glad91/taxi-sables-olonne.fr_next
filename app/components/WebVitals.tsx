'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { useGoogleAnalytics } from './GoogleTag'

export default function WebVitals() {
  const { trackEvent } = useGoogleAnalytics()

  useReportWebVitals(metric => {
    // Envoyer les métriques à Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(
          metric.name === 'CLS' ? metric.value * 1000 : metric.value
        ),
        non_interaction: true,
        custom_map: {
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_rating: metric.rating,
          metric_entries: metric.entries?.length || 0,
        },
      })
    }

    // Logger pour le développement
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      })
    }

    // Tracking spécifique par métrique
    switch (metric.name) {
      case 'FCP': // First Contentful Paint
        if (metric.value > 1800) {
          trackEvent(
            'poor_fcp',
            'performance',
            'first_contentful_paint',
            metric.value
          )
        }
        break
      case 'LCP': // Largest Contentful Paint
        if (metric.value > 2500) {
          trackEvent(
            'poor_lcp',
            'performance',
            'largest_contentful_paint',
            metric.value
          )
        }
        break
      case 'CLS': // Cumulative Layout Shift
        if (metric.value > 0.1) {
          trackEvent(
            'poor_cls',
            'performance',
            'cumulative_layout_shift',
            Math.round(metric.value * 1000)
          )
        }
        break
      case 'FID': // First Input Delay
        if (metric.value > 100) {
          trackEvent(
            'poor_fid',
            'performance',
            'first_input_delay',
            metric.value
          )
        }
        break
      case 'TTFB': // Time to First Byte
        if (metric.value > 800) {
          trackEvent(
            'poor_ttfb',
            'performance',
            'time_to_first_byte',
            metric.value
          )
        }
        break
      case 'INP': // Interaction to Next Paint
        if (metric.value > 200) {
          trackEvent(
            'poor_inp',
            'performance',
            'interaction_to_next_paint',
            metric.value
          )
        }
        break
    }
  })

  return null // Ce composant ne rend rien visuellement
}

// Hook pour mesurer des métriques personnalisées
export function usePerformanceMonitoring() {
  const measurePageLoad = (pageName: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming

      const metrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        ssl: navigation.connectEnd - navigation.secureConnectionStart,
        ttfb: navigation.responseStart - navigation.requestStart,
        download: navigation.responseEnd - navigation.responseStart,
        dom_processing:
          navigation.domContentLoadedEventStart - navigation.responseEnd,
        total_load_time: navigation.loadEventStart - navigation.fetchStart,
      }

      // Envoyer à Google Analytics
      if (window.gtag) {
        Object.entries(metrics).forEach(([key, value]) => {
          window.gtag('event', 'page_load_timing', {
            event_category: 'Performance',
            event_label: `${pageName}_${key}`,
            value: Math.round(value),
            custom_map: { page: pageName },
          })
        })
      }

      return metrics
    }
    return null
  }

  const measureResourceLoad = (resourceName: string, url: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const resources = performance.getEntriesByName(url)
      if (resources.length > 0) {
        const resource = resources[0] as PerformanceResourceTiming

        const timing = {
          duration: resource.duration,
          size: resource.transferSize || 0,
          cache_hit:
            resource.transferSize === 0 && resource.decodedBodySize > 0,
        }

        // Envoyer à Google Analytics
        if (window.gtag) {
          window.gtag('event', 'resource_timing', {
            event_category: 'Performance',
            event_label: resourceName,
            value: Math.round(timing.duration),
            custom_map: {
              resource_size: timing.size,
              cache_hit: timing.cache_hit,
            },
          })
        }

        return timing
      }
    }
    return null
  }

  return {
    measurePageLoad,
    measureResourceLoad,
  }
}
