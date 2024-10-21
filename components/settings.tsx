// Hooks
import { useTranslations } from "next-intl";

// Components
import { LocaleSwitcher } from "./locale-switcher";
import { ToggleTheme } from "./toggle-theme";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

// Icons
import {
  Bug,
  GithubIcon,
  HelpCircle,
  Mail,
  Settings2,
  SettingsIcon,
} from "lucide-react";

export function Settings() {
  const t = useTranslations();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 justify-start">
          <Settings2 size={16} />
          <span className="text-sm">{t("settings.title")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <SettingsIcon size={24} className="ml-2 text-muted-foreground" />
            <SheetTitle>{t("settings.title")}</SheetTitle>
          </div>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="mt-4 space-y-4">
          <ToggleTheme />
          <LocaleSwitcher />
          <div className="flex items-center gap-2">
            <HelpCircle size={16} className="ml-2 text-muted-foreground" />
            <span>{t("support.title")}</span>
          </div>
          <div className="space-y-2">
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
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
