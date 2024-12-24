// Hooks
import { useTranslations } from "next-intl";

// Components
import { Link } from "@/config/i18n/routing";
import { Logo } from "../../../components/shared/logo";

export function Footer() {
  const t = useTranslations();
  const navigation = t.raw("navigation");

  return (
    <footer className="border-t mt-24 px-5 md:px-10 lg:px-16 backdrop-blur-md">
      <div className="py-12">
        <div className="max-w-[1580px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          <div className="space-y-4">
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
            <p className="text-muted-foreground text-sm">
              {t("footer.description")}
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span>{t("footer.copyright")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
