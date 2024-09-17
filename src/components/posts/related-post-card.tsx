// Hooks
import { useTranslations } from "next-intl";

// Components
import { Link } from "@/config/navigation";

// Icons
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";

interface RelatedPostCardProps {
  title: string;
  slug: string;
}

export function RelatedPostCard({ title, slug }: RelatedPostCardProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col py-4 px-4 rounded-lg bg-card border shadow-sm">
      <h4 className="text-sm mb-6">{title}</h4>
      <Link
        href={`/${slug}`}
        className={buttonVariants({ variant: "default" })}
      >
        {t("posts.button")}
        <ArrowRight
          size={20}
          className="ml-2 transition-transform duration-150 transform group-hover:translate-x-1 "
        />
      </Link>
    </div>
  );
}
