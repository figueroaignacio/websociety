// Components
import { PostCard } from "@/components/posts/post-card";
import { Tag } from "@/components/tag";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/navigation";

// Content
import { posts } from "#site/content";

// Utils
import { capitalize } from "@/utils/capitalize";
import { getAllCategories } from "@/utils/getAllCategories";
import { getPostsByCategorySlug } from "@/utils/getPostsByCategorySlug";
import { sortCategoriesByCount } from "@/utils/sortCategoriesByCount";
import { slug } from "github-slugger";

// Metadata
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

interface TagPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { category } = params;
  return {
    title: `${capitalize(category)} Category`,
    description: `Posts on the topic of ${category}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllCategories(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { category } = params;
  const title = capitalize(category);

  const allPosts = getPostsByCategorySlug(posts, category);
  const displayPosts = allPosts.filter((post) => post.published);
  const tags = getAllCategories(posts);
  const sortedTags = sortCategoriesByCount(tags);

  return (
    <section className="mt-24 max-w-5xl mx-auto">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl lg:text-4xl text-center">{title}</h1>
        <div className="mt-10">
          <Card>
            <CardHeader className="flex">
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <CardDescription>
                Here you are going to find all of the tags, click to filter by
                category.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {sortedTags.map((t) => (
                  <Tag
                    tag={t}
                    key={t}
                    count={tags[t]}
                    current={slug(t) === category}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <Link
          className={`my-10 items-center flex gap-2 group hover:underline"`}
          href={"/posts"}
        >
          <ArrowLeft
            className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:-translate-x-1"
            size=".85rem"
          />
          Back to all posts
        </Link>
        {displayPosts?.length > 0 ? (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {displayPosts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard
                    slug={post.slug}
                    date={post.date}
                    title={post.title}
                    description={post.description ?? ""}
                    categories={post.categories}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see yet</p>
        )}
      </div>
    </section>
  );
}
