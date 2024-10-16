import { useTranslations } from "next-intl";
import { Navigation } from "../../types/types";
import { SidebarMobile } from "./sidebar-mobile-panel";
import { SidebarDesktop } from "./sidebar-panel";

export function Sidebar() {
  const t = useTranslations();
  const navigation = t.raw("navigation") as Navigation[];
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
