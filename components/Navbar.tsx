"use client";

// Next
import { usePathname } from "next/navigation";

// Components
import { LinkTransition } from "./link-transition";
import { MobileMenu } from "./mobile-menu";
import { ToggleThemeButton } from "./toggle-theme-button";
import { Logo } from "./trademark";
import { buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

// Icons
import { ArrowRight, HomeIcon, MessageSquare, SheetIcon } from "lucide-react";

// Constants
import { exploreItems, navItems } from "@/constants/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between pt-3">
      <div className="flex gap-9 items-center justify-between lg:justify-normal w-screen">
        <div className="flex items-center justify-between w-full gap-6 md:hidden relative inset-0">
          <MobileMenu />
          <Logo />
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-col p-2 gap-5 w-screen items-center md:w-full md:flex-row md:min-h-0">
            {navItems.map((navItem, index) => {
              let IconComponent;
              switch (navItem.icon) {
                case "home":
                  IconComponent = <HomeIcon size=".75rem" />;
                  break;
                case "post":
                  IconComponent = <MessageSquare size=".75rem" />;
                  break;
                case "article":
                  IconComponent = <SheetIcon size=".75rem" />;
                  break;
                default:
                  IconComponent = null;
              }
              return (
                <li key={index}>
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
                    {IconComponent}
                    {navItem.title}
                  </LinkTransition>
                </li>
              );
            })}
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
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
        </nav>
      </div>
      <div className="hidden md:block">
        <Logo />
      </div>
    </header>
  );
}
