"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState } from "react";

// Components
import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

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
    <DropdownMenuRadioGroup
      value={selectedTheme}
      onValueChange={handleThemeChange}
    >
      <DropdownMenuLabel>{t("selectTheme.title")}</DropdownMenuLabel>
      {themes.map((theme: any) => (
        <DropdownMenuRadioItem
          key={theme.value}
          value={theme.value}
          className="flex justify-between items-center"
        >
          {theme.label}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
}
