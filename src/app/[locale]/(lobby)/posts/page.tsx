// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { FramerH1, FramerLi, FramerSection } from "@/components/framer";
import { NoPostsMessage } from "@/components/posts/no-posts-message";
import { PostCard } from "@/components/posts/post-card";
import { QueryPagination } from "@/components/query-pagination";

// Content
import { posts } from "@content";

// Utils
import { sortPosts } from "@/utils/sortPosts";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

// Constants / Config
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constants/animations";

// Metadata
import { MetadataParams } from "@/types/types";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "postsConfig" });

  return {
    title: t("title"),
    description: t("description"),
    authors: [
      {
        name: t("author.name"),
        url: t("author.url"),
      },
    ],
    creator: t("creator"),
  };
}

const POSTS_PER_PAGE = 4;

interface PostsPageProps {
  searchParams: {
    page?: string;
  };
  params: {
    locale: string;
  };
}

export default function PostsPage({
  searchParams,
  params: { locale },
}: PostsPageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("posts");
  const lang = useLocale();

  const currentPage = Number(searchParams?.page) || 1;
  const filteredPosts = posts.filter(
    (post) => post.published && post.locale === lang
  );
  const sortedPosts = sortPosts(filteredPosts);
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  if (displayPosts.length < 0) {
    return <NoPostsMessage />;
  }

  return (
    <FramerSection
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      <div className="flex flex-col gap-12 mt-24 max-w-4xl mx-auto">
        <div className="flex flex-col gap-3">
          <FramerH1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="font-bold text-2xl lg:text-4xl text-center text-muted-foreground"
          >
            {t("title")}
          </FramerH1>
        </div>
        <div>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {displayPosts.map((post) => {
              return (
                <FramerLi
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  key={post.slug}
                >
                  <PostCard
                    slug={post.slug}
                    date={post.date}
                    title={post.title}
                    description={post.description ?? ""}
                    categories={post.categories}
                  />
                </FramerLi>
              );
            })}
          </ul>
        </div>
        <QueryPagination totalPages={totalPages} />
      </div>
    </FramerSection>
  );
}
