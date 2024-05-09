"use client";

// Next
import { usePathname } from "next/navigation";

// Components
import { LinkWithTransition } from "./LinkWithTransition";
import { MobileMenu } from "./MobileMenu";
import { ToggleTheme } from "./ToggleTheme";
import { Wordmark } from "./Wordmark";
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
import {
  ArrowRight,
  Github,
  HomeIcon,
  MessageSquare,
  SheetIcon,
} from "lucide-react";

// Constants
import { exploreItems, navItems } from "@/config/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between sticky z-20 top-0 left-0 backdrop-filter backdrop-blur-sm py-2 m-auto container max-w-8xl">
      <div className="flex gap-9 items-center justify-between lg:justify-normal w-screen">
        <div className="flex items-center justify-between w-full gap-6 md:hidden relative inset-0">
          <MobileMenu />
          <Wordmark />
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
                case "github":
                  IconComponent = <Github size=".75rem" />;
                  break;
                default:
                  IconComponent = null;
              }
              return (
                <li key={index}>
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
                    {IconComponent}
                    {navItem.title}
                  </LinkWithTransition>
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
                              <LinkWithTransition
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
                              </LinkWithTransition>
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
              <ToggleTheme />
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden md:block">
        <Wordmark />
      </div>
    </header>
  );
}
