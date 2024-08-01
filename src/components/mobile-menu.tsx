"use client";

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
import { LinkWithTransition } from "./link-with-transition";

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
              className={`${pathname === "/" ? "gradient-text font-bold" : ""}`}
            >
              <SheetClose>Home</SheetClose>
            </LinkWithTransition>
          </li>
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
        </ul>
        <SheetFooter>
          <SheetTitle>Frontend Society.</SheetTitle>
          <SheetDescription>By a developer, for developers.</SheetDescription>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
