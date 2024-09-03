// Components
import { SiteMobileNavbar } from "./site-mobile-navbar";
import { SiteNavbar } from "./site-navbar";

export function Navbar() {
  return (
    <>
      <SiteNavbar />
      <SiteMobileNavbar />
    </>
  );
}
