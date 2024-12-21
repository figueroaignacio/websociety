import createMiddleware from "next-intl/middleware";

import { routing } from "./config/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!_next|_vercel|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/",
    "/(en|es)/:path*",
  ],
};
