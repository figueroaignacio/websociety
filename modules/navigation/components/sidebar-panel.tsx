"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import { Logo } from "@/components/common/logo";
import { Searcher } from "@/components/common/searcher";
import { Link } from "@/config/i18n/routing";
// Icons
import {
  BarChart,
  BookOpen,
  FileText,
  Folder,
  HelpCircle,
  Home,
  SettingsIcon,
  Users,
} from "lucide-react";

// Types
import { Navigation } from "../types";

// Utils
import { cn } from "@/lib/utils";
import { getCurrentLocale } from "@/utils/getCurrentLocale";

const icons = {
  home: Home,
  fileText: FileText,
  bookOpen: BookOpen,
  folder: Folder,
  analytics: BarChart,
  customers: Users,
  help: HelpCircle,
  settings: SettingsIcon,
};

interface SidebarDesktopProps {
  navigation: Navigation[];
  homeTitle: string;
  homeIcon: string;
}

export function SidebarDesktop({
  navigation,
  homeTitle,
  homeIcon,
}: SidebarDesktopProps) {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const allNavItems = [
    { title: homeTitle, href: "/", icon: homeIcon },
    ...navigation,
  ];

  return (
    <aside className="min-h-screen sticky left-0 top-0 border-r border-border shadow-sm z-50 lg:flex flex-col justify-between hidden pb-5">
      <nav className="p-4 space-y-8">
        <div className="flex items-center justify-start">
          <Logo />
        </div>
        <div>
          <Searcher />
          <ul className="space-y-2 mt-3">
            {allNavItems.map(({ title, href, icon }, index) => {
              const isActive = pathname === `/${currentLocale}${href}`;
              const Icon = icons[icon as keyof typeof icons] || HelpCircle;
              return (
                <li key={index}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center py-2 px-4 gap-2 rounded-md transition-colors dark:hover:bg-gray-600 dark:hover:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-50 duration-100 text-muted-foreground hover:text-foreground text-sm",
                      isActive &&
                        "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-200 bg-opacity-50 text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
