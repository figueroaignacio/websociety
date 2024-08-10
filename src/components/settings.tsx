// Hooks
import { useTranslations } from "next-intl";

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocaleSwitcher } from "./locale-switcher";
import { ToggleTheme } from "./toggle-theme";
import { Button } from "./ui/button";

// Icons
import { Languages, Settings2, SettingsIcon } from "lucide-react";

export function Settings() {
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings2 size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 mr-7">
        <DropdownMenuGroup className="flex items-center">
          <SettingsIcon size={16} className="ml-2 text-muted-foreground" />
          <DropdownMenuLabel>{t("settings.title")}</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <ToggleTheme />
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex items-center">
          <Languages size={16} className="ml-2 text-muted-foreground" />
          <DropdownMenuLabel>{t("localeSwitcher.label")}</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <LocaleSwitcher />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
