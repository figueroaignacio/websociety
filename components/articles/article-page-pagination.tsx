// Hooks
import { useTranslations } from "next-intl";

// Icons
import { ArrowLeft, ArrowRight } from "lucide-react";

// Components
import { Link } from "../../config/navigation";

interface ArticlePagePaginationProps {
  previousPost: { slugAsParams: string; title: string } | null;
  nextPost: { slugAsParams: string; title: string } | null;
}

export function ArticlePagePagination({
  previousPost,
  nextPost,
}: ArticlePagePaginationProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-12 space-y-4 sm:space-y-0 gap-7">
      {previousPost ? (
        <Link
          href={`/articles/${previousPost.slugAsParams}`}
          className="group flex items-center gap-2 w-full sm:w-auto"
        >
          <ArrowLeft className="size-5" />
          <div className="text-left">
            <span className="block text-xs sm:text-sm">
              {t("paginationPostPage.previousPostLabel")}
            </span>
            <span className="block font-bold text-sm sm:text-md">
              {previousPost.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="w-full sm:w-auto" />
      )}
      {nextPost ? (
        <Link
          href={`/articles/${nextPost.slugAsParams}`}
          className="group flex items-center justify-end gap-2 w-full sm:w-auto"
        >
          <div className="text-right">
            <span className="block text-xs sm:text-sm">
              {t("paginationPostPage.nextPostLabel")}
            </span>
            <span className="block font-bold text-sm sm:text-md">
              {nextPost.title}
            </span>
          </div>
          <ArrowRight className="size-5" />
        </Link>
      ) : (
        <div className="w-full sm:w-auto" />
      )}
    </div>
  );
}
