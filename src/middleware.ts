import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales, pathnames } from "./config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
  localeDetection: true,
});

export const config = {
  matcher: [
    "/",
    "/(en|es)/:path*",
    "/(en|es)/posts/:slug*",
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
