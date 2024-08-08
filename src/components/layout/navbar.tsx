"use client";

// Next
import { usePathname } from "next/navigation";

// Components
import { LinkWithTransition } from "../link-with-transition";
import { Logo } from "../logo";
import { MobileMenu } from "../mobile-menu";
import { ToggleTheme } from "../toggle-theme";

// Config
import { navigationConfig } from "@/config/navigation";
import LocaleSwitcher from "../language-switcher";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between gap-12 sticky z-20 top-0 left-0 py-2 px-5 md:px-10 lg:px-16 backdrop-blur-sm mx-auto border-b-[.0625rem]">
      <div className="flex items-center gap-12">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex gap-12 items-center">
            {navigationConfig.map((navItem, index) => (
              <li key={index}>
                <LinkWithTransition
                  href={navItem.href}
                  className={`${
                    pathname === `${navItem.href}`
                      ? "font-bold text-black dark:text-white border-b-[1px] border-black transition-all duration-500 dark:border-white"
                      : ""
                  } text-base text-muted-foreground hover:text-black dark:hover:text-white font-medium`}
                >
                  {navItem.title}
                </LinkWithTransition>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-5 items-center">
        <ToggleTheme />
        <LocaleSwitcher />
        <MobileMenu />
      </div>

      {/* <div className="w-full flex gap-7 justify-end">
      </div> */}
      {/* <div className="flex gap-9 items-center w-screen">
        <div className="flex items-center w-full md:hidden relative inset-0">
          <MobileMenu />
        </div>
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex flex-col gap-12 w-screen items-center md:w-full md:flex-row md:min-h-0 py-1">
            {navigationConfig.map((navItem, index) => (
              <li
                key={index}
                className="dark:hover:text-white/70 hover:text-black/70"
              >
                <LinkWithTransition
                  href={navItem.href}
                  className={`${
                    pathname === `${navItem.href}`
                      ? "gradient-text"
                      : "text-muted-foreground"
                  } hover:gradient-text text-sm font-semibold`}
                >
                  {navItem.title}
                </LinkWithTransition>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}
      {/* <ToggleTheme /> */}
    </header>
  );
}
