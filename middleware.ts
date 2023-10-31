import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => { name: 'nextjs', value: 'fast', Path: '/' }
  

  if (request.nextUrl.pathname.startsWith('/clientes')) {
    return NextResponse.rewrite(new URL('/login', request.url))
  }
}