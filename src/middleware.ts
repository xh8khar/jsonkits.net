import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  if (!hostname.startsWith('www.') && hostname.includes('jsonkits.net')) {
    return NextResponse.redirect(
      new URL(`https://www.${hostname}${request.nextUrl.pathname}${request.nextUrl.search}`),
      301
    )
  }
  return NextResponse.next()
}
