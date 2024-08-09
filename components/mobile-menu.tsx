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
              className={`${
                pathname === "/"
                  ? "font-bold text-black dark:text-white border-b-[1px] border-black transition-all duration-500 dark:border-white"
                  : "text-muted-foreground"
              }`}
            >
              <SheetClose>Home</SheetClose>
            </LinkWithTransition>
          </li>
          {navigationConfig.map((navItem, index) => (
            <li key={index}>
              <LinkWithTransition
                href={navItem.href}
                className={`${
                  pathname === `${navItem.href}`
                    ? "font-bold text-black dark:text-white border-b-[1px] border-black transition-all duration-500 dark:border-white"
                    : ""
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
