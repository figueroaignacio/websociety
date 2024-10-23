// Hooks
import { useTranslations } from "next-intl";

// Components
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/config/navigation";

// Icons - Images
import { ArrowRight, FileText } from "lucide-react";

export function ArticlesCta() {
  const t = useTranslations("postsCta");

  return (
    <div className="relative z-20 border px-3 py-3 lg:px-6 lg:py-6 rounded-md backdrop-blur-lg">
      <header className="gap-4">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold">{t("title")}</h3>
            <p className="text-sm">{t("description")}</p>
          </div>
          <div>
            <Link
              href="/posts"
              className={`${buttonVariants({
                variant: "default",
              })} flex items-center gap-3 group`}
            >
              <FileText className="size-4" />
              {t("link")}
              <ArrowRight
                size={".85rem"}
                className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
