// Components
import { PostCard } from "@/components/posts/post-card";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Content
import { posts } from "#site/content";

// Utils
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { slug } from "github-slugger";

// Metadata
import { Metadata } from "next";

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
    title: tag,
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
  const title = tag.split("-").join(" ");

  const allPosts = getPostsByTagSlug(posts, tag);
  const displayPosts = allPosts.filter((post) => post.published);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <section>
      <div className="flex flex-col gap-12 mt-24">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl lg:text-4xl">{title}</h1>
          <div className="mt-10">
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {sortedTags.map((t) => (
                  <Tag
                    tag={t}
                    key={t}
                    count={tags[t]}
                    current={slug(t) === tag}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
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
