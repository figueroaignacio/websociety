"use client";

// Hooks
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

// Components
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LinkWithTransition } from "../link-with-transition";

// Icons
import { Menu } from "lucide-react";

// Utils
import { getCurrentLocale } from "@/utils/getCurrentLocale";
import { Logo } from "../logo";
import { Searcher } from "../searcher";
import { Settings } from "../settings";

export function SiteMobileNavbar() {
  const t = useTranslations();
  const navigation = t.raw("navigation");
  const pathname = usePathname();

  const currentLocale = getCurrentLocale(pathname);

  return (
    <header className="flex items-center justify-between py-2 px-5 sticky z-50 top-0 left-0 w-full border-b-[.0625rem] backdrop-blur-sm md:hidden">
      <Logo />
      <div className="flex items-center gap-3">
        <Searcher />
        <Settings />
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button>
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <ul className="flex flex-col gap-12 pt-20 py-10 pl-8 items-end md:w-full md:min-h-0 text-2xl">
              <li>
                <LinkWithTransition
                  href="/"
                  className={`${
                    pathname === `/${currentLocale}`
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }  hover:text-foreground font-medium`}
                >
                  <SheetClose>{t("navigationHome.title")}</SheetClose>
                </LinkWithTransition>
              </li>
              {navigation.map((navItem: any, index: number) => (
                <li key={index}>
                  <LinkWithTransition
                    href={navItem.href}
                    className={`${
                      pathname === `/${currentLocale}${navItem.href}`
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }  hover:text-foreground font-medium`}
                  >
                    <SheetClose>{navItem.title}</SheetClose>
                  </LinkWithTransition>
                </li>
              ))}
            </ul>
            <SheetFooter className="space-y-3">
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription>
                By a developer, for developers.
              </SheetDescription>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
