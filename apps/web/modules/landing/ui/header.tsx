// Hooks
import { useTranslations } from "next-intl";

// Componetns
import { Logo } from "@/components/shared/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/config/i18n/routing";
import { LoginButton } from "@/modules/auth/ui/login-button";
import { RegisterButton } from "@/modules/auth/ui/register-button";
import { Menu } from "lucide-react";

type Navigation = {
  title: string;
  href: string;
};

export function Header() {
  const t = useTranslations();
  const navigation = t.raw("navigation");

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
                className="text-muted-foreground hover:text-primary text-sm font-semibold hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <RegisterButton />
            <LoginButton />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="outline-button-icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </button>
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
                  <RegisterButton />
                  <LoginButton />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
