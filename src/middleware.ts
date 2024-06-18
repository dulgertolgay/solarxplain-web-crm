import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import i18nConfig from "./i18n.config";

// Middleware function to handle i18n redirection
export function i18nRedirect(req: NextRequest) {
  let lng;
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
}

// Middleware function for authentication
function checkAuth(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const lng = pathname.split("/")[1];
  // TODO: Add your authentication logic here
  const isAuthenticated = true; // TODO: Replace with actual auth check
  if (!isAuthenticated && pathname.includes("/home/")) {
    return NextResponse.redirect(new URL(`/${lng}/signin`, req.url));
  }
}

// Main middleware function to orchestrate the execution
export function middleware(req: NextRequest) {
  let response: any = null;

  // Execute i18n redirection middleware next
  response = i18nRedirect(req);
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
