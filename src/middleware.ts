import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import i18nConfig from "./i18n.config";

// Middleware function to handle 404 errors
export function handle404(req: any) {
  const url = req.nextUrl.clone();
  // Check if the requested path matches any existing page or API route
  if (url.pathname === "/_error") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Middleware function to handle i18n redirection
export function i18nRedirect(req: any) {
  let lng;
  if (req.cookies.has(i18nConfig.cookieName))
    lng = acceptLanguage.get(req.cookies.get(i18nConfig.cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = i18nConfig.defaultLocale;
  // Redirect if lng in path is not supported
  if (
    !i18nConfig.locales.some((loc) =>
      req.nextUrl.pathname.startsWith(`/${loc}`)
    ) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = i18nConfig.locales.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(i18nConfig.cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}

// Middleware function for authentication
function checkAuth(req: any) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/home")) {
    // TODO: Add your authentication logic here
    const isAuthenticated = true; // TODO: Replace with actual auth check
    if (!isAuthenticated) {
      return NextResponse.redirect("/login");
    }
  }

  return NextResponse.next();
}

// Main middleware function to orchestrate the execution
export function middleware(req: any) {
  let response: any = null;

  // Execute i18n redirection middleware next
  response = i18nRedirect(req);
  if (response) return response;

  // Execute 404 handling middleware last
  response = handle404(req);
  if (response) return response;

  // Execute authentication middleware next
  response = checkAuth(req);
  if (response) return response;

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/:path*", // Apply 404 and i18n handling to all routes
    "/home/:path*", // Apply authentication to home routes
    "/((?!api|_next/static|_next/image|favicon.ico).*)", // Exclude static files and API routes
  ],
};
