"use client";

// Hooks
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

// Components
import { LinkWithTransition } from "../link-with-transition";
import { Logo } from "../logo";
import { Searcher } from "../searcher";
import { Settings } from "../settings";
import { SiteMobileNavbar } from "./site-mobile-navbar";

// Utils
import { getCurrentLocale } from "@/utils/getCurrentLocale";

export function SiteNavbar() {
  const pathname = usePathname();
  const t = useTranslations();
  const navigation = t.raw("navigation");
  const currentLocale = getCurrentLocale(pathname);

  return (
    <header className="sticky z-50 top-0 left-0 w-full border-b-[.0625rem] backdrop-blur-sm">
      <div className="flex items-center justify-between gap-12 py-2 px-5 md:px-10 lg:px-16 max-w-[1580px] mx-auto">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden md:block">
            <ul className="flex gap-8 items-center">
              {navigation.map((navItem: any, index: number) => (
                <li key={index}>
                  <LinkWithTransition
                    href={`${navItem.href}`}
                    className={`${
                      pathname === `/${currentLocale}${navItem.href}`
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }  hover:text-foreground font-medium text-sm`}
                  >
                    {navItem.title}
                  </LinkWithTransition>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-5 lg:gap-3 items-center">
          <Searcher />
          <Settings />
          <SiteMobileNavbar />
        </div>
      </div>
    </header>
  );
}
