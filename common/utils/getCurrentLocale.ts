// Config
import { locales } from "@/config/i18n/routing";

export function getCurrentLocale(pathname: string): string {
  return (
    locales.find((locale) => pathname.startsWith(`/${locale}`)) || locales[0]
  );
}
