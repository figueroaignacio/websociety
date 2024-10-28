// Hooks
import { useTranslations } from "next-intl";

// Components
import { SiteMobileNavbar } from "./site-mobile-navbar";
import { SiteNavbar } from "./site-navbar";

export function Navbar() {
  const t = useTranslations();
  const navigation = t.raw("navigation");

  return (
    <>
      <SiteNavbar navigation={navigation} />
      <SiteMobileNavbar navigation={navigation} />
    </>
  );
}
