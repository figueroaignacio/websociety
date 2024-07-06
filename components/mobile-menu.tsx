"use client";

// Components
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LinkWithTransition } from "./link-with-transition";
import { ToggleTheme } from "./toggle-theme";

// Icons
import { Menu } from "lucide-react";

// Next
import { usePathname } from "next/navigation";

// Constants
import { navigationConfig } from "@/config/navigation";

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="px-6 py-1">
        <button>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <ul className="flex flex-col gap-12 pt-32 py-10 pl-8 items-end md:w-full md:min-h-0 text-2xl">
          {navigationConfig.map((navItem, index) => (
            <li
              key={index}
              className="dark:hover:text-white/70 hover:text-black/70"
            >
              <LinkWithTransition
                href={navItem.href}
                className={`${
                  pathname === `${navItem.href}`
                    ? "gradient-text font-bold"
                    : ""
                }`}
              >
                <SheetClose>{navItem.title}</SheetClose>
              </LinkWithTransition>
            </li>
          ))}
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
