"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/config/navigation";
import { Logo } from "../logo";
import { Searcher } from "../searcher";
import { Settings } from "../settings";
import { Button } from "../ui/button";

// Icons
import {
  BookOpen,
  ChevronRight,
  FileText,
  Folder,
  HelpCircle,
  Home,
} from "lucide-react";

// Utils
import { cn } from "@/lib/utils";
import { getCurrentLocale } from "@/utils/getCurrentLocale";

// Types
import { Navigation } from "../../types/types";

const icons = {
  home: Home,
  fileText: FileText,
  bookOpen: BookOpen,
  folder: Folder,
  help: HelpCircle,
};

interface SidebarMobileProps {
  navigation: Navigation[];
  homeTitle: string;
  homeIcon: string;
}

export function SidebarMobile({
  navigation,
  homeTitle,
  homeIcon,
}: SidebarMobileProps) {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const allNavItems = [
    { title: homeTitle, href: "/", icon: homeIcon },
    ...navigation,
  ];

  return (
    <header className="py-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="lg:hidden fixed bottom-4 left-4 z-50 p-2 rounded-md"
          >
            <span className="sr-only">Open Sidebar</span>
            <ChevronRight />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SheetHeader className="p-4 border-b border-border">
            <SheetTitle className="mt-2">
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <nav className="p-4 space-y-2">
            <div className="my-6">
              <Searcher />
            </div>
            <ul className="space-y-2">
              {allNavItems.map(({ title, href, icon }, index) => {
                const isActive = pathname === `/${currentLocale}${href}`;
                const Icon = icons[icon as keyof typeof icons] || HelpCircle;
                return (
                  <li key={index}>
                    <Link
                      href={href}
                      className={cn(
                        "flex items-center py-2 px-4 gap-2 rounded-md transition-colors dark:hover:bg-gray-600 dark:hover:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-50 duration-100",
                        isActive &&
                          "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-200 bg-opacity-50"
                      )}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <SheetClose className="w-full text-start">
                        {title}
                      </SheetClose>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-border">
            <ul className="space-y-2">
              <li>
                <Settings />
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
