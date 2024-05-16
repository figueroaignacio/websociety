"use client";

// Next
import { usePathname } from "next/navigation";

// Components
import { LinkWithTransition } from "../LinkWithTransition";
import { ToggleTheme } from "../ToggleTheme";
import { Wordmark } from "../Wordmark";
import { buttonVariants } from "../ui/button";
import { MobileMenu } from "./MobileMenu";

// Icons
import { Code, GraduationCap, HomeIcon, NewspaperIcon } from "lucide-react";

// Constants
import { navigationConfig } from "@/config/navigation";

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
            {navigationConfig.map((navItem, index) => {
              let IconComponent;
              switch (navItem.icon) {
                case "home":
                  IconComponent = <HomeIcon size=".75rem" />;
                  break;
                case "post":
                  IconComponent = <NewspaperIcon size=".75rem" />;
                  break;
                case "challenges":
                  IconComponent = <Code size=".75rem" />;
                  break;
                case "learn":
                  IconComponent = <GraduationCap size=".75rem" />;
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
