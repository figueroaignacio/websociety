// next-intl
import { createNavigation } from "next-intl/navigation";
import { defineRouting, LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "es"] as const;
export const localePrefix: LocalePrefix<typeof locales> = "always";
export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    es: "/pfadnamen",
  },
};

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
