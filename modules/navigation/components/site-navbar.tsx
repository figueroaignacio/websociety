"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import { Logo } from "@/components/logo";
import { Link } from "@/config/navigation";

// Utils
import { getCurrentLocale } from "@/utils/getCurrentLocale";

// Types
import { Navigation } from "../types";

export function SiteNavbar({ navigation }: { navigation: Navigation[] }) {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);

  return (
    <header className="sticky z-[100] top-0 left-0 w-full border-b-[.0625rem] backdrop-blur-sm hidden md:block">
      <div className="flex items-center justify-between gap-12 py-2 px-5 md:px-10 lg:px-16 max-w-[1580px] mx-auto">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden md:block">
            <ul className="flex gap-8 items-center">
              {navigation.map((navItem, index) => (
                <li key={index}>
                  <Link
                    href={`${navItem.href}`}
                    className={`${
                      pathname === `/${currentLocale}${navItem.href}`
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }  hover:text-foreground font-medium text-xs`}
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
