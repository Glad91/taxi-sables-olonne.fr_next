import { NextRequest, NextResponse } from 'next/server'
import { submitToIndexNow, submitAllPagesToIndexNow } from '@/lib/indexnow'

/**
 * IndexNow API Route
 * POST /api/indexnow - Submit specific URLs or all pages to search engines
 * 
 * Body options:
 * - { urls: string[] } - Submit specific URLs
 * - { all: true } - Submit all site pages
 * - { url: string } - Submit single URL
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request
    if (!body || (typeof body !== 'object')) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    let result

    // Submit all pages
    if (body.all === true) {
      console.log('📡 IndexNow: Submitting all pages...')
      result = await submitAllPagesToIndexNow()
    }
    // Submit specific URLs array
    else if (body.urls && Array.isArray(body.urls)) {
      console.log(`📡 IndexNow: Submitting ${body.urls.length} URLs...`)
      result = await submitToIndexNow(body.urls)
    }
    // Submit single URL
    else if (body.url && typeof body.url === 'string') {
      console.log(`📡 IndexNow: Submitting single URL: ${body.url}`)
      result = await submitToIndexNow([body.url])
    }
    else {
      return NextResponse.json(
        { 
          error: 'Invalid request format', 
          expected: 'One of: { all: true } | { urls: string[] } | { url: string }' 
        },
        { status: 400 }
      )
    }

    // Return results
    const successCount = result.results.filter(r => r.success).length
    const totalEndpoints = result.results.length

    return NextResponse.json({
      success: result.success,
      message: `IndexNow submission completed: ${successCount}/${totalEndpoints} endpoints successful`,
      results: result.results,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ IndexNow API error:', error)
    
    return NextResponse.json(
      { 
        error: 'IndexNow submission failed',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/indexnow - Get IndexNow status and configuration
 */
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow API',
    status: 'active',
    key: '88f276d7dbb82450e30ce16fd18deeb0',
    keyLocation: 'https://www.taxi-sables-olonne.fr/88f276d7dbb82450e30ce16fd18deeb0.txt',
    supportedEngines: [
      'Bing (api.indexnow.org)',
      'Yandex',
      'Seznam.cz',
      'Naver'
    ],
    usage: {
      'Submit all pages': 'POST /api/indexnow with { "all": true }',
      'Submit specific URLs': 'POST /api/indexnow with { "urls": ["url1", "url2"] }',
      'Submit single URL': 'POST /api/indexnow with { "url": "https://example.com/page" }'
    }
  })
}