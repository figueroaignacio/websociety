"use client";

// Hooks
import { usePathname, useRouter } from "@/config/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

// Icons
import { Languages } from "lucide-react";

// Config
import { locales } from "@/config/config";

// Types
import { Locale } from "@/types";

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
    <div className="space-y-2">
      <div className="flex items-center gap-1 ">
        <Languages size={16} className="ml-2 text-muted-foreground" />
        <span className="ml-2 text-xl font-bold text-foreground">
          {t("label")}
        </span>
      </div>
      <div className="flex flex-col space-y-1">
        {locales.map((localeOption) => (
          <button
            key={localeOption}
            onClick={() => onLocaleChange(localeOption)}
            className={`flex justify-between items-center py-2 px-4 rounded-md dark:hover:bg-gray-600 dark:hover:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-50 duration-100  hover:text-foreground cursor-pointer ${
              locale === localeOption
                ? "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-200 bg-opacity-50 text-foreground"
                : ""
            }`}
          >
            {t("locale", { locale: localeOption })}
          </button>
        ))}
      </div>
    </div>
  );
}
