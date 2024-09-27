// Config
import { locales } from "../config/config";

export function getCurrentLocale(pathname: string): string {
  return (
    locales.find((locale) => pathname.startsWith(`/${locale}`)) || locales[0]
  );
}
