// middleware.ts
import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.url

  // Verifica si el usuario está autenticado
  const isAuthenticated = checkAuthentication(request)

  // Si no está autenticado, redirige a /login, incluso si está en la raíz '/'
  if (!isAuthenticated) {
    console.log('No autenticado, redirigiendo a /login')
    return NextResponse.redirect(new URL('/login', url)) // Redirige directamente a /login
  }

  return NextResponse.next() // Si está autenticado, continúa con la solicitud
}

// Función para verificar si el usuario está autenticado
function checkAuthentication(request: NextRequest): boolean {
  // Aquí implementas tu lógica de autenticación
  const token = request.cookies.get('auth_token') // Por ejemplo, un token en las cookies
  return Boolean(token) // Si el token existe, consideramos que está autenticado
}

export const config = {
  matcher: ['/', '/admin/:path*'], // Aplica a la raíz y cualquier ruta dentro de /admin
}
