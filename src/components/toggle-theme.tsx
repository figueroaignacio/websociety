"use client";

// React
import { useState } from "react";

// Utils
import { useTheme } from "next-themes";

// Components
import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

type ThemeOption = "light" | "dark" | "system";

export function ToggleTheme() {
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
      <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
      <DropdownMenuRadioItem
        value="light"
        className="flex justify-between items-center"
      >
        Light
      </DropdownMenuRadioItem>
      <DropdownMenuRadioItem
        value="dark"
        className="flex justify-between items-center"
      >
        Dark
      </DropdownMenuRadioItem>
      <DropdownMenuRadioItem
        value="system"
        className="flex justify-between items-center"
      >
        System
      </DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  );
}
