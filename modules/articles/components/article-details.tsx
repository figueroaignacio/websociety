// Hooks
import { useTranslations } from "next-intl";

// Components
import { Tag } from "@/components/tag";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Icons
import { Calendar, TagIcon, Timer } from "lucide-react";

// Utils
import { formatDate } from "@/utils/formatDate";

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
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src="https://github.com/figueroaignacio.png" />
          </Avatar>
          <p>Ignacio Figueroa</p>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="space-y-3 mb-8">
        <dl className="lg:flex text-xs hidden">
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
        <div className="lg:flex items-center gap-2 flex-wrap hidden">
          <TagIcon size={16} />
          {post.categories?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </aside>
  );
};
