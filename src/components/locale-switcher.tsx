// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { LocaleSwitcherSelect } from "./locale-switcher-select";

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "es",
          label: t("es"),
        },
      ]}
      label={t("label")}
    />
  );
}
