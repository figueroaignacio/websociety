// Next
import { NextResponse } from "next/server";

// utils
import { auth } from "@/modules/auth/lib/auth";
import createMiddleware from "next-intl/middleware";
import { routing } from "./config/i18n/routing";

const publicPages = ["/auth/login", "/auth/register", "/"];

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: any) {
  if (request.nextUrl.pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const isPublicPage = publicPages.some((page) =>
    request.nextUrl.pathname.endsWith(page)
  );

  if (isPublicPage) {
    return intlMiddleware(request);
  }

  const session = await auth();
  if (!session && !isPublicPage) {
    const loginUrl = new URL("/auth/login", request.url);
    const locale = request.nextUrl.pathname.split("/")[1];

    if (locale === "en" || locale === "es") {
      loginUrl.pathname = `/${locale}${loginUrl.pathname}`;
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next|_vercel|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/",
    "/(en|es)/:path*",
  ],
};
