// Hooks
import { useTranslations } from "next-intl";

// Components
import { Tag } from "@/components/shared/tag";

// Icons
import { Calendar, TagIcon, Timer } from "lucide-react";

// Utils
import { formatDate } from "@/lib/utils/formatDate";

interface PostDetailsProps {
  post: {
    date: string;
    readingTime: number;
    categories?: string[];
  };
  locale: string;
}

export const ArticleDetails = ({ post, locale }: PostDetailsProps) => {
  const t = useTranslations();

  return (
    <aside>
      <div className="space-y-3 mb-8">
        <dl className="flex text-xs">
          <dt className="sr-only">Published at</dt>
          <dd className="flex items-center gap-2">
            <Calendar size={16} />
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          </dd>
        </dl>
        <div className="flex items-center gap-2">
          <Timer size={16} />
          <span className="text-xs">
            {post.readingTime} {t("posts.readTime")}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap ">
          <TagIcon size={16} />
          {post.categories?.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
      </div>
    </aside>
  );
};
