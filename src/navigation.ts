import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { localePrefix, locales, pathnames } from "./config";

export const { Link, getPathname, usePathname, useRouter, redirect } =
  createLocalizedPathnamesNavigation({ locales, pathnames, localePrefix });
