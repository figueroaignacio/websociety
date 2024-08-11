// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { SelectItem } from "@/components/ui/select";
import { LocaleSwitcherSelect } from "./locale-switcher-select";

// Config
import { locales } from "@/config";

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale() as "en" | "es";

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <SelectItem key={cur} value={cur as "en" | "es"}>
          {t("locale", { locale: cur })}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
