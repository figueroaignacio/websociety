"use client";

// Next
import { usePathname } from "next/navigation";

// Components
import { LinkWithTransition } from "../link-with-transition";
import { Logo } from "../logo";
import { MobileMenu } from "../mobile-menu";
import { ToggleTheme } from "../toggle-theme";

// Constants
import { navigationConfig } from "@/config/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between sticky z-20 top-0 left-0 py-2 px-3 md:px-10 lg:px-16 backdrop-blur-sm mx-auto border-b-[.0625rem]">
      <div className="flex gap-9 items-center  w-screen">
        <div className="flex items-center w-full md:hidden relative inset-0">
          <MobileMenu />
        </div>
        <div className="hidden md:block">
          <Logo />
        </div>
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
      </div>
      <div className="">
        <ToggleTheme />
      </div>
    </header>
  );
}
