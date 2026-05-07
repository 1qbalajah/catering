import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const token = request.cookies.get('session_token')?.value

  // Jika tidak ada token & akses dashboard → redirect ke login
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // Jika ada token, verifikasi & cek role
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-change-in-prod')
      const { payload } = await jwtVerify(token, secret)
      const userLevel = payload.level as string

      // Jika sudah login tapi buka halaman login → redirect ke dashboard role
      if (pathname === '/auth/login') {
        return NextResponse.redirect(new URL(`/${userLevel}/dashboard`, request.url))
      }

      // Proteksi: cegah akses lintas role
      if (pathname.startsWith('/dashboard/')) {
        const requestedRole = pathname.split('/')[2]
        if (requestedRole !== userLevel) {
          return NextResponse.redirect(new URL(`/${userLevel}/dashboard`, request.url))
        }
      }
    } catch {
      // Token invalid/expired → hapus & redirect ke login
      const response = NextResponse.redirect(new URL('/auth/login', request.url))
      response.cookies.delete('session_token')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}