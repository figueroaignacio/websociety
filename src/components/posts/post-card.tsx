// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/config/navigation";
import { Tag } from "../tag";

// Icons
import { ArrowRight, Calendar } from "lucide-react";

// Utils
import { formatDate } from "@/utils/formatDate";
import { buttonVariants } from "../ui/button";

interface ArticleCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
  categories?: string[];
}

export function PostCard({
  title,
  date,
  description,
  slug,
  categories,
}: ArticleCardProps) {
  const t = useTranslations("posts");
  const locale = useLocale();

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row justify-between items-center relative">
        <dl className="flex text-xs">
          <dt className="sr-only">Published at</dt>
          <dd className="flex items-center gap-2">
            <Calendar size={12} />
            <time dateTime={date}>{formatDate(date, locale)}</time>
          </dd>
        </dl>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <CardTitle className="text-pretty text-lg line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="leading-10 text-pretty text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-5">
        <div className="flex flex-wrap gap-2 text-xs">
          {categories?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <Link
          href={"/" + slug}
          className={`flex z-10 ${buttonVariants({ variant: "default" })}`}
        >
          {t("button")}
          <ArrowRight
            size={16}
            className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
          />
        </Link>
      </CardFooter>
    </Card>
  );
}
