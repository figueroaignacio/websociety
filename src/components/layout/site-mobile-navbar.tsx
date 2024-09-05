"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/config/navigation";
import { Logo } from "../logo";
import { Searcher } from "../searcher";
import { Settings } from "../settings";

// Icons
import { Menu } from "lucide-react";

// Utils
import { getCurrentLocale } from "@/utils/getCurrentLocale";

export function SiteMobileNavbar({
  navigation,
}: {
  navigation: { title: string; href: string }[];
}) {
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
