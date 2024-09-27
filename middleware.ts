import createMiddleware from "next-intl/middleware";
import {
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
} from "./config/config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
  localeDetection: true,
});

export const config = {
  matcher: ["/", "/(en|es)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
