// Hooks
import { useTranslations } from "next-intl";

// Components
import { LinkWithTransition } from "../link-with-transition";

// Icons
import { Copyright } from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const navigation = t.raw("navigation");

  return (
    <footer className="w-full border-t-[.0625rem] mt-24 mb-16">
      <div className=" px-4 lg:px-0 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-center py-12">
          <div>
            <h4 className="text-lg font-semibold">{t("footer.title")}</h4>
            <p>{t("footer.subtitle")}</p>
            <nav>
              <ul className="flex flex-col gap-2 py-2">
                {navigation.map((navItem: any, index: number) => (
                  <li key={index} className="flex items-center">
                    <LinkWithTransition
                      href={navItem.href}
                      className="text-base text-muted-foreground hover:text-black dark:hover:text-white font-medium"
                    >
                      {navItem.title}
                    </LinkWithTransition>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.aboutHeading")}
            </h4>
            <p className="text-muted-foreground">{t("footer.description")}</p>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center text-sm">
          <div className="flex items-center flex-col justify-center gap-2">
            <Copyright className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {t("footer.copyright")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
