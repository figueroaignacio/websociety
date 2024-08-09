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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings2 size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 mr-7">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ToggleTheme />
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuItem>
          <LocaleSwitcher />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
