"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import { Link } from "../../config/navigation";
import { Logo } from "../logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";

// Icons
import { Menu } from "lucide-react";

// Utils
import { getCurrentLocale } from "../../utils/getCurrentLocale";

// Types
import { Navigation } from "../../types/types";

export function SiteMobileNavbar({ navigation }: { navigation: Navigation[] }) {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);

  return (
    <header className="flex items-center justify-between py-2 px-5 sticky z-[100] top-0 left-0 w-full border-b-[.0625rem] backdrop-blur-sm md:hidden">
      <Logo />
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button>
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="z-[150]">
            <ul className="flex flex-col gap-12 pt-20 py-10 pl-8 items-end md:w-full md:min-h-0 text-2xl">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === `/${currentLocale}`
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }  hover:text-foreground font-medium`}
                >
                  Home
                </Link>
              </li>
              {navigation.map((navItem, index) => (
                <li key={index}>
                  <Link
                    href={navItem.href}
                    className={`${
                      pathname === `/${currentLocale}${navItem.href}`
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }  hover:text-foreground font-medium`}
                  >
                    <SheetClose>{navItem.title}</SheetClose>
                  </Link>
                </li>
              ))}
            </ul>
            <SheetFooter className="space-y-3">
              <Logo />
              <span>By a developer, for developers.</span>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
