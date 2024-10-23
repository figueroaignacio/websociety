"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState } from "react";

// Icons
import { Palette } from "lucide-react";

type ThemeOption = "light" | "dark" | "system";

export function ToggleTheme() {
  const t = useTranslations();
  const themes = t.raw("themes");

  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>(
    (theme as ThemeOption) || "system"
  );

  const handleThemeChange = (value: string) => {
    const theme = value as ThemeOption;
    setSelectedTheme(theme);
    setTheme(theme);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <Palette size={16} className="ml-2 text-muted-foreground" />
        <span className="ml-2 text-xl font-bold text-foreground">
          {t("selectTheme.title")}
        </span>
      </div>
      <div className="flex flex-col space-y-1">
        {themes.map((theme: any) => (
          <button
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className={`flex justify-between items-center py-2 px-4 rounded-md dark:hover:bg-gray-600 dark:hover:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-50 duration-100 ${
              selectedTheme === theme.value
                ? "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-200 bg-opacity-50 text-foreground"
                : ""
            }`}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  );
}
