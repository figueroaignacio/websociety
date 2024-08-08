import createMiddleware from "next-intl/middleware";

import { locales } from "./config/langConfig";

export default createMiddleware({
  locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|es)/:path*"],
};
