"use client";

// Hooks
import { usePathname } from "@/config/i18n/routing";
import { useTranslations } from "next-intl";

// Components
import { Logo } from "@/components/shared/logo";
import { Searcher } from "@/components/shared/searcher";
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
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton size={"lg"} variant="none">
          <Logo />
          <span>Web society</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mt-5 group-data-[collapsible=icon]:hidden">
          <Searcher />
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
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        " rounded-sm transition-colors dark:hover:bg-gray-600 dark:hover:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-50 duration-100 text-muted-foreground hover:text-foreground text-sm",
                        isActive &&
                          "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-200 bg-opacity-50 text-foreground"
                      )}
                      tooltip={item.title}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center py-2 px-4 gap-2"
                      >
                        {IconComponent && <IconComponent />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
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
