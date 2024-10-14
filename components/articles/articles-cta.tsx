// Hooks
import { useTranslations } from "next-intl";

// Components
import { Link } from "../../config/navigation";
import { buttonVariants } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

// Icons - Images
import { ArrowRight, FileText } from "lucide-react";

export function ArticlesCta() {
  const t = useTranslations("postsCta");

  return (
    <Card className="relative z-20 shadow-custom-card">
      <div className="w-full h-full absolute -z-10 flex flex-row justify-between left-0 py-12 right-0">
        <div className="w-full h-full border-border border-y border-dashed"></div>
        <div className="w-full h-full border-border border-y border-dashed"></div>
      </div>
      <div className="py-12">
        <CardHeader className="gap-4">
          <div className="flex justify-between flex-wrap gap-3">
            <div className="flex flex-col gap-3">
              <CardTitle>{t("title")}</CardTitle>
              <CardDescription>{t("description")}</CardDescription>
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
        </CardHeader>
      </div>
    </Card>
  );
}
