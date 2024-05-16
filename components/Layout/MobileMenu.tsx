"use client";

// Components
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LinkWithTransition } from "../LinkWithTransition";
import { ToggleTheme } from "../ToggleTheme";

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
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ul className="flex flex-col gap-7 pt-32 py-10 pl-8 items-end md:w-full md:min-h-0 text-2xl">
          {navigationConfig.map((navItem, index) => {
            return (
              <li key={index}>
                <SheetClose asChild>
                  <LinkWithTransition
                    href={navItem.href}
                    className={`${buttonVariants({
                      variant: "navItem",
                    })} flex gap-1 ${
                      pathname === `${navItem.href}`
                        ? "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-300 bg-opacity-50"
                        : ""
                    }`}
                  >
                    {navItem.title}
                  </LinkWithTransition>
                </SheetClose>
              </li>
            );
          })}
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
