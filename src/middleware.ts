import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { verifyToken } from './modules/login/services/api'

export async function middleware(request: NextRequest) {
  const { origin, pathname } = request.nextUrl
  const token = request.cookies.get('auth')?.value

  if (!token) return NextResponse.redirect(new URL('/login', origin))

  if (pathname === '/') {
    try {
      const data = await verifyToken(token)
      if (data.statusCode === 200) {
        return NextResponse.redirect(new URL('/dashboard', origin))
      }
    } catch (error) {
      console.error('Error al verificar el token en middleware:', error)
      return NextResponse.redirect(new URL('/login', origin))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/admin/:path*'],
}
