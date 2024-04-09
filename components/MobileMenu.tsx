"use client";

// Components
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LinkTransition } from "./LinkTransition";
import { ToggleThemeButton } from "./ToggleThemeButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

// Icons
import { ArrowRight, Menu } from "lucide-react";

// Next
import { usePathname } from "next/navigation";

// Constants
import { exploreItems, navItems } from "@/constants/navigation";

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
          {navItems.map((navItem, index) => {
            return (
              <li key={index}>
                <SheetClose asChild>
                  <LinkTransition
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
                  </LinkTransition>
                </SheetClose>
              </li>
            );
          })}
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger disabled>
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-4 ">
                      {exploreItems.map((exploreItem, index) => (
                        <li className="row-span-3" key={index}>
                          <NavigationMenuLink>
                            <LinkTransition
                              href={exploreItem.href}
                              className={`${buttonVariants({
                                variant: "link",
                              })} flex gap-1 relative group`}
                            >
                              {exploreItem.title}
                              <ArrowRight
                                className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
                                size={".75rem"}
                              />
                            </LinkTransition>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <ToggleThemeButton />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
