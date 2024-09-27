// Hooks
import { useTranslations } from "next-intl";

// Components
import { LocaleSwitcher } from "./locale-switcher";
import { ToggleTheme } from "./toggle-theme";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// Icons
import {
  Bug,
  GithubIcon,
  HelpCircle,
  Languages,
  Mail,
  Settings2,
  SettingsIcon,
} from "lucide-react";

export function Settings() {
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
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
        <LocaleSwitcher />
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex items-center">
          <HelpCircle size={16} className="ml-2 text-muted-foreground" />
          <DropdownMenuLabel>{t("support.title")}</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <a
            href="https://github.com/figueroaignacio/frontendsociety/issues"
            className={`${buttonVariants({
              variant: "outline",
            })} flex justify-between`}
            target="_blank"
          >
            {t("support.reportBug.title")}
            <Bug size={16} />
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="mailto:ignaciofigueroadev@gmail.com"
            className={`${buttonVariants({
              variant: "outline",
            })} flex justify-between`}
            target="_blank"
          >
            {t("support.developerContact.title")}
            <Mail size={16} />
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="https://github.com/figueroaignacio/frontendsociety"
            className={`${buttonVariants({
              variant: "outline",
            })} flex justify-between`}
            target="_blank"
          >
            {t("support.sourceCode.title")}
            <GithubIcon size={16} />
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
