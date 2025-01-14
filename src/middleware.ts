import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { verifyToken } from './modules/login/services/api'

export async function middleware(request: NextRequest) {
  const baseUrl = request.nextUrl.origin
  const path = request.nextUrl.pathname

  const isAuthenticated = checkAuthentication(request)

  if (!isAuthenticated) return NextResponse.redirect(new URL('/login', baseUrl))

  if (path === '/') {
    const token = request.cookies.get('auth')
    if (token) {
      try {
        const data = await verifyToken(token.value)
        if (data.statusCode === 200)
          return NextResponse.redirect(new URL('/dashboard', baseUrl))
      } catch (error) {
        console.log('Error in middleware with checking token', error)
        return NextResponse.redirect(new URL('/login', baseUrl))
      }
    }
  }
  return NextResponse.next()
}

function checkAuthentication(request: NextRequest): boolean {
  const token = request.cookies.get('auth')
  return Boolean(token)
}

export const config = {
  matcher: ['/', '/admin/:path*'],
}
