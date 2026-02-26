import { type NextRequest, NextResponse } from 'next/server';

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path !== '/') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static & _next/image
     * - manifest files (manifest.json, manifest.webmanifest)
     * - all images (png, jpg, jpeg, gif, svg, webp, ico, bmp, tiff, avif, apng)
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|manifest\\.(?:json|webmanifest)$|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|bmp|tiff?|avif|apng)$).*)',
  ],
};
