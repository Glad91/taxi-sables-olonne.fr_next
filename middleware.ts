import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Vérifier si c'est un environnement de preview/développement
  if (process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV !== 'production') {
    // Vérifier l'authentification basique
    const basicAuth = request.headers.get('authorization')
    const url = request.nextUrl

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      // Remplacez par vos identifiants
      if (user === 'test' && pwd === 'taxi2024') {
        return NextResponse.next()
      }
    }

    url.pathname = '/api/auth'

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}