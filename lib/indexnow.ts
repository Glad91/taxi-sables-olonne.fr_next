/**
 * IndexNow API Integration
 * Automatically notifies search engines when content is updated
 * Supports Bing, Yandex, Seznam.cz, and Naver
 */

interface IndexNowSubmission {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

const INDEXNOW_KEY = '88f276d7dbb82450e30ce16fd18deeb0'
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.taxi-sables-olonne.fr').trim()

// IndexNow supported search engines
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  'https://search.seznam.cz/indexnow',
  'https://searchadvisor.naver.com/indexnow'
]

/**
 * Submit URLs to IndexNow API
 * @param urls Array of URLs to submit
 * @returns Promise with submission results
 */
export async function submitToIndexNow(urls: string[]): Promise<{
  success: boolean
  results: Array<{ endpoint: string; success: boolean; error?: string }>
}> {
  if (!urls || urls.length === 0) {
    throw new Error('No URLs provided for IndexNow submission')
  }

  // Ensure URLs are absolute and clean
  const cleanUrls = urls.map(url => {
    if (url.startsWith('/')) {
      return `${SITE_URL}${url}`
    }
    return url
  }).filter(url => url.startsWith('http'))

  const submission: IndexNowSubmission = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: cleanUrls
  }

  console.log('📡 IndexNow submission:', {
    host: submission.host,
    urlCount: cleanUrls.length,
    urls: cleanUrls
  })

  const results = await Promise.allSettled(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'TaxiSablesOlonne-IndexNow/1.0'
          },
          body: JSON.stringify(submission)
        })

        if (response.ok) {
          console.log(`✅ IndexNow success: ${endpoint}`)
          return { endpoint, success: true }
        } else {
          const error = await response.text()
          console.warn(`⚠️ IndexNow error ${response.status}: ${endpoint} - ${error}`)
          return { endpoint, success: false, error: `HTTP ${response.status}: ${error}` }
        }
      } catch (error) {
        console.error(`❌ IndexNow failed: ${endpoint}`, error)
        return { endpoint, success: false, error: String(error) }
      }
    })
  )

  const processedResults = results.map(result => 
    result.status === 'fulfilled' ? result.value : { 
      endpoint: 'unknown', 
      success: false, 
      error: result.reason 
    }
  )

  const successCount = processedResults.filter(r => r.success).length
  const success = successCount > 0

  console.log(`📊 IndexNow results: ${successCount}/${INDEXNOW_ENDPOINTS.length} successful`)

  return {
    success,
    results: processedResults
  }
}

/**
 * Submit single URL to IndexNow
 * @param url Single URL to submit
 */
export async function submitUrlToIndexNow(url: string): Promise<{
  success: boolean
  results: Array<{ endpoint: string; success: boolean; error?: string }>
}> {
  return submitToIndexNow([url])
}

/**
 * Submit all site pages to IndexNow
 * Useful for initial indexing or major updates
 */
export async function submitAllPagesToIndexNow(): Promise<{
  success: boolean
  results: Array<{ endpoint: string; success: boolean; error?: string }>
}> {
  const allPages = [
    '/',
    '/reservation',
    '/contact',
    '/tarifs',
    '/aeroport-nantes',
    '/gare-sables-olonne',
    '/transport-medical',
    '/longue-distance',
    '/avis-clients',
    '/guide-taxi-sables-olonne',
    '/mentions-legales'
  ]

  return submitToIndexNow(allPages)
}

/**
 * Auto-submit pages after content updates
 * Call this in API routes or after data mutations
 */
export async function autoSubmitAfterUpdate(updatedPaths: string[]): Promise<void> {
  try {
    const result = await submitToIndexNow(updatedPaths)
    if (result.success) {
      console.log('✅ Auto IndexNow submission successful')
    } else {
      console.warn('⚠️ Auto IndexNow submission had errors')
    }
  } catch (error) {
    console.error('❌ Auto IndexNow submission failed:', error)
    // Don't throw - IndexNow failures shouldn't break the main functionality
  }
}