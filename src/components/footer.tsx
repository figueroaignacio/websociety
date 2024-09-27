import { Link } from "@/config/navigation";
import { Copyright } from "lucide-react";
import { useTranslations } from "next-intl";
import { Logo } from "./logo";

export function Footer() {
  const t = useTranslations();
  const navigation = t.raw("navigation");

  return (
    <footer className="border-t mt-24 mb-16">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto ">
          <div className="space-y-4">
            {/* <h2 className="text-lg font-semibold">{t("footer.title")}</h2>
             */}
            <Logo />
            <p className="text-muted-foreground">{t("footer.subtitle")}</p>
          </div>
          <nav aria-label="Footer Navigation">
            <h2 className="text-lg font-semibold mb-4">
              {t("footer.navigation.title")}
            </h2>
            <ul className="space-y-2">
              {navigation.map((navItem: any, index: number) => (
                <li key={index}>
                  <Link
                    href={navItem.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              {t("footer.aboutHeading")}
            </h2>
            <p className="text-muted-foreground">{t("footer.description")}</p>
          </div>
          {/* <div className="space-y-4">
            <h2 className="text-lg font-semibold">{t("footer.contact")}</h2>
            <address className="not-italic text-muted-foreground">
              <p>{t("footer.address")}</p>
              <p>{t("footer.email")}</p>
              <p>{t("footer.phone")}</p>
            </address>
          </div> */}
        </div>
        <div className="mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Copyright className="h-4 w-4" />
            <span>{t("footer.copyright")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
