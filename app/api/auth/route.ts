import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return new Response('Authentification requise', {
    status: 401,
    headers: {
      'WWW-authenticate': 'Basic realm="Site de test"'
    }
  })
}