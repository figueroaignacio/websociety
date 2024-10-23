// Hooks
import { useTranslations } from "next-intl";

// Components
import { SidebarMobile } from "./sidebar-mobile-panel";
import { SidebarDesktop } from "./sidebar-panel";

// Types
import { Navigation } from "../types";

export function Sidebar() {
  const t = useTranslations();
  const navigation = t.raw("sidebarNavigation") as Navigation[];
  const { title: homeTitle, icon: homeIcon } = t.raw("navigationHome") as {
    title: string;
    icon: string;
  };

  return (
    <>
      <SidebarMobile
        navigation={navigation}
        homeTitle={homeTitle}
        homeIcon={homeIcon}
      />
      <SidebarDesktop
        navigation={navigation}
        homeTitle={homeTitle}
        homeIcon={homeIcon}
      />
    </>
  );
}
