"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/config/i18n/routing";

// Icons
import { ArrowRight, BookOpen, FileText, Star, Zap } from "lucide-react";

export function ArticlesCta() {
  const t = useTranslations("postsCta");

  interface Item {
    title: string;
    icon: string;
  }

  const items = t.raw("items") as Item[];

  const icons = {
    BookOpen,
    Star,
    Zap,
  };

  return (
    <div className="relative overflow-hidden rounded-lg border cta-background-gradient text-white">
      <div className="relative z-10 px-6 py-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-4xl font-extrabold tracking-tight">
              {t("title")}
            </h3>
            <p className="text-xl text-purple-100">{t("description")}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
              {items.map((item, index) => {
                const Icon = icons[item.icon as keyof typeof icons];
                return (
                  <div key={index} className="flex items-center space-x-2">
                    {Icon && <Icon className="h-6 w-6 text-purple-200" />}
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-auto">
            <Link
              href="/articles"
              className={`${buttonVariants({
                variant: "secondary",
                size: "lg",
              })} w-full md:w-auto group bg-white text-purple-950`}
            >
              <span className="flex items-center gap-3">
                <FileText className="size-5" />
                {t("link")}
                <ArrowRight
                  size="1.2rem"
                  className="transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
