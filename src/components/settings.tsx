// Hooks
import { useTranslations } from "next-intl";

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocaleSwitcher } from "./locale-switcher";
import { ToggleTheme } from "./toggle-theme";
import { Button } from "./ui/button";

// Icons
import { Settings2 } from "lucide-react";

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
        <DropdownMenuLabel>{t("settings.title")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ToggleTheme />
        <DropdownMenuSeparator />
        <DropdownMenuLabel>{t("localeSwitcher.label")}</DropdownMenuLabel>
        <DropdownMenuItem>
          <LocaleSwitcher />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
