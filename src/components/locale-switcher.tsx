import { SelectItem } from "@/components/ui/select";
import { locales } from "@/config";
import { useLocale, useTranslations } from "next-intl";
import { LocaleSwitcherSelect } from "./locale-switcher-select";

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
