// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { Tag } from "@/components/common/tag";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/config/i18n/routing";

// Utils
import { formatDate } from "@/utils/formatDate";

// Icons
import { ArrowRight, Calendar } from "lucide-react";

interface ArticleCardProps {
  title?: string;
  date: string;
  description?: string;
  slug: string;
  categories?: string[];
}

export function ArticleCard({
  title,
  date,
  description,
  slug,
  categories,
}: ArticleCardProps) {
  const t = useTranslations("posts");
  const locale = useLocale();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative pb-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-700 to-indigo-300" />
        <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
          <dl className="flex items-center gap-2">
            <dt className="sr-only">Published at</dt>
            <dd className="flex items-center gap-2">
              <Calendar size={12} />
              <time dateTime={date}>{formatDate(date, locale)}</time>
            </dd>
          </dl>
        </div>
        <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 pt-4">
        <CardDescription className="text-sm line-clamp-3">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {categories?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Link
          href={"/" + slug}
          className={buttonVariants({
            variant: "default",
            className: "w-full justify-center group",
          })}
        >
          <span>{t("button")}</span>
          <ArrowRight
            size={16}
            className="ml-2 transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
          />
        </Link>
      </CardFooter>
    </Card>
  );
}
