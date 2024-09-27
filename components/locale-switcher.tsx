"use client";

// Hooks
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "../config/navigation";

// Components
import {
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ui/dropdown-menu";

// Config
import { locales } from "../config/config";

// Types
import { Locale } from "../types/types";

type Props = {
  label?: string;
};

export function LocaleSwitcher({ label }: Props) {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  function onLocaleChange(value: string) {
    const newLocale = value as Locale;
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale });
    });
  }

  return (
    <DropdownMenuRadioGroup value={locale} onValueChange={onLocaleChange}>
      <DropdownMenuGroup className="flex items-center">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
      </DropdownMenuGroup>
      {locales.map((locale) => (
        <DropdownMenuRadioItem
          key={locale}
          value={locale}
          className="relative flex items-center space-x-2"
        >
          {t("locale", { locale })}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
}
