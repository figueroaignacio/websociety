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

// Constants

// Utils
import { getCurrentLocale } from "@/utils/getCurrentLocale";

export function MobileMenu() {
  const t = useTranslations();
  const navigation = t.raw("navigation");
  const pathname = usePathname();

  const currentLocale = getCurrentLocale(pathname);

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <button>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <ul className="flex flex-col gap-12 pt-20 py-10 pl-8 items-end md:w-full md:min-h-0 text-2xl">
          <li>
            <LinkWithTransition
              href="/"
              className={`${
                pathname === `/${currentLocale}/`
                  ? "font-semibold text-black dark:text-white border-b-[1px] border-black transition-all duration-500 dark:border-white"
                  : "text-muted-foreground"
              } text-muted-foreground hover:text-black dark:hover:text-white`}
            >
              <SheetClose>{t("navigationHome.title")}</SheetClose>
            </LinkWithTransition>
          </li>
          {navigation.map((navItem: any, index: number) => (
            <li key={index}>
              <LinkWithTransition
                href={navItem.href}
                className={`${
                  pathname === `/${currentLocale}${navItem.href}/`
                    ? "font-semibold text-black dark:text-white border-b-[1px] border-black transition-all duration-500 dark:border-white"
                    : "text-muted-foreground"
                } text-muted-foreground hover:text-black dark:hover:text-white`}
              >
                <SheetClose>{navItem.title}</SheetClose>
              </LinkWithTransition>
            </li>
          ))}
        </ul>
        <SheetFooter>
          <SheetTitle>Frontend Society.</SheetTitle>
          <SheetDescription>By a developer, for developers.</SheetDescription>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
