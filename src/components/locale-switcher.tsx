"use client";

// Hooks
import { usePathname, useRouter } from "@/config/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

// Components
import {
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

// Config
import { locales } from "@/config/config";

type Props = {
  label?: string;
};

type Locale = "es" | "en";

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
