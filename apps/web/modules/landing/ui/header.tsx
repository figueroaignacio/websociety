// Hooks
import { useTranslations } from "next-intl";

// Components
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/config/i18n/routing";
import { Menu } from "lucide-react";
import { ThemeButton } from "./theme-button";

type Navigation = {
  title: string;
  href: string;
};

export function Header() {
  const t = useTranslations();
  const navigation = t.raw("navigation");

  const actionButtons = [
    {
      label: t("actionButtons.register"),
      href: "/auth/register",
      variant: "default" as const,
    },
    {
      label: t("actionButtons.login"),
      href: "/auth/login",
      variant: "outline" as const,
    },
  ];

  return (
    <header className="bg-background border-b">
      <div className="page-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav className="hidden md:flex space-x-9">
            {navigation.map((link: Navigation) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            {actionButtons.map((button, index: number) => (
              <Button variant={button.variant} asChild key={index}>
                <Link href={button.href}>{button.label}</Link>
              </Button>
            ))}
            <ThemeButton />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <nav className="flex flex-col space-y-4 mt-4">
                  {navigation.map((link: Navigation) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <SheetClose>{link.title}</SheetClose>
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col space-y-2 mt-8">
                  {actionButtons.map((button, index: number) => (
                    <Button variant={button.variant} asChild key={index}>
                      <SheetClose>
                        <Link href={button.href}>{button.label}</Link>
                      </SheetClose>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
