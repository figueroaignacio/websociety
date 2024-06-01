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

// Content
import { posts } from "#site/content";

// Utils
import {
  capitalize,
  getAllTags,
  getPostsByTagSlug,
  sortTagsByCount,
} from "@/lib/utils";
import { slug } from "github-slugger";

// Metadata
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: `Category: ${capitalize(tag)}`,
    description: `Posts on the topic of ${tag}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = capitalize(tag);

  const allPosts = getPostsByTagSlug(posts, tag);
  const displayPosts = allPosts.filter((post) => post.published);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <section className="mt-24">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl lg:text-4xl text-center">{title}</h1>
        <div className="mt-10">
          <Card>
            <CardHeader className="flex">
              <CardTitle>Tags</CardTitle>
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
                    current={slug(t) === tag}
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
                    tags={post.tags}
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
