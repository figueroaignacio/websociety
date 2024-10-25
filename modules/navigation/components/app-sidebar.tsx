// Hooks
import { useTranslations } from "next-intl";

// Components
import { Logo } from "@/components/common/logo";
import { Searcher } from "@/components/common/searcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Icons
import { cn } from "@/lib/utils";
import { BookOpen, FileText, Folder, Search, Settings } from "lucide-react";

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

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton size={"lg"} className="rounded-sm">
          <Logo />
          <span>Web society</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className={cn(
                        "flex items-center py-2 px-4 gap-2 rounded-sm transition-colors dark:hover:bg-gray-600 dark:hover:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-50 duration-100 text-muted-foreground hover:text-foreground text-sm"
                        // isActive &&
                        //   "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-200 bg-opacity-50 text-foreground"
                      )}
                    >
                      <a href={item.href}>
                        {IconComponent && <IconComponent className="mr-2" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              <SidebarMenuItem>
                <SidebarMenuButton
                  className={cn(
                    "flex items-center py-2 px-4 gap-2 rounded-sm transition-colors dark:hover:bg-gray-600 dark:hover:bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-50 duration-100 text-muted-foreground hover:text-foreground text-sm"
                    // isActive &&
                    //   "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-200 bg-opacity-50 text-foreground"
                  )}
                >
                  <Search />
                  <Searcher />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}
