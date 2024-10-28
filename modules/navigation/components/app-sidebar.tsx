"use client";

// Hooks
import { usePathname } from "@/config/i18n/routing";
import { useTranslations } from "next-intl";

// Components
import { Logo } from "@/components/common/logo";
import { Searcher } from "@/components/common/searcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@/config/i18n/routing";

// Icons
import { BookOpen, FileText, Folder, Settings } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

interface NavigationItem {
  icon: keyof typeof iconMap;
  href: string;
  title: string;
}

const iconMap = {
  fileText: FileText,
  bookOpen: BookOpen,
  folder: Folder,
  settings: Settings,
};

export function AppSidebar() {
  const t = useTranslations();
  const navigation: NavigationItem[] = t.raw("sidebarNavigation");
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <SidebarMenuButton size={"lg"} variant="none">
          <Logo />
          <span>Web society</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mt-5">
          <Searcher></Searcher>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const IconComponent = iconMap[item.icon];
                const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.title}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center py-2 px-4 gap-2 rounded-sm transition-colors dark:hover:bg-gray-600 dark:hover:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-50 duration-100 text-muted-foreground hover:text-foreground text-sm",
                        isActive &&
                          "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-200 bg-opacity-50 text-foreground"
                      )}
                    >
                      {IconComponent && (
                        <IconComponent className="mr-2 size-4" />
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
