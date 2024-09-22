// Components
import { MDXContent } from "@/components/mdx/mdx-components";
import { Toc } from "@/components/navigation/toc";
import { PostPagePagination } from "@/components/posts/post-page-pagination";
import { RelatedPosts } from "@/components/posts/related-posts";
import { SharePost } from "@/components/posts/share-post";
import { Tag } from "@/components/tag";
import { Separator } from "@/components/ui/separator";

// Content
import { posts } from "@content";

// Utils
import { notFound } from "next/navigation";

// Icons
import { Calendar, TagIcon } from "lucide-react";

// Metadata
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/utils/formatDate";
import { Metadata } from "next";

interface PostPageProps {
  params: {
    slug: string[];
    locale?: string;
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  try {
    const slug = params?.slug.join("/");
    const post = posts.find((post) => post.slugAsParams === slug);
    if (post) {
      return {
        ...post,
        categories: post.categories || [],
      };
    }
    return null;
  } catch (error) {
    console.error("Error getting post from params:", error);
    return null;
  }
}

async function getPreviousPost(currentPostSlug: string, locale: string) {
  const localePosts = posts.filter((post) => post.locale === locale);
  const currentIndex = localePosts.findIndex(
    (post) => post.slugAsParams === currentPostSlug
  );
  if (currentIndex > 0) {
    return localePosts[currentIndex - 1];
  }
  return null;
}

async function getNextPost(currentPostSlug: string, locale: string) {
  const localePosts = posts.filter((post) => post.locale === locale);
  const currentIndex = localePosts.findIndex(
    (post) => post.slugAsParams === currentPostSlug
  );
  if (currentIndex < localePosts.length - 1) {
    return localePosts[currentIndex + 1];
  }
  return null;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug, locale = "en" } = params;

  try {
    const post = await getPostFromParams({ slug, locale });
    if (!post) return {};

    const ogSearchParams = new URLSearchParams({ title: post.title });

    const metadataBase =
      locale === "en"
        ? process.env.NEXT_PUBLIC_APP_URL_EN
        : process.env.NEXT_PUBLIC_APP_URL_ES;

    return {
      metadataBase: new URL(metadataBase ?? "http://localhost:3000"),
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: post.slug,
        images: [
          {
            url: `/api/og?${ogSearchParams.toString()}`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug, locale = "en" } = params;
  const postSlug = slug.join("/");

  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  const previousPost = await getPreviousPost(post.slugAsParams, locale);
  const nextPost = await getNextPost(post.slugAsParams, locale);

  return (
    <article className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative top-12">
      <aside className="hidden lg:block lg:col-span-3">
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
              <Calendar size={12} />
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            </dd>
          </dl>
          <div className="lg:flex items-center gap-2 mb-3 flex-wrap hidden">
            <TagIcon size={16} />
            {post.categories?.map((tag, index) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="sticky top-16 left-0">
          <SharePost slug={postSlug} locale={locale} />
        </div>
      </aside>
      <div className="lg:col-span-6">
        <div className="flex flex-col gap-2">
          <dl className="flex text-xs lg:hidden">
            <dt className="sr-only">Published at</dt>
            <dd className="flex items-center gap-2">
              <Calendar size={12} />
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            </dd>
          </dl>
          <h1 className="text-3xl font-bold ">{post.title}</h1>
          <p className="mb-4">{post.description}</p>
          <div className="flex items-center gap-2 mb-3 lg:hidden flex-wrap">
            <TagIcon size={16} />
            {post.categories?.map((tag, index) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
        <Separator className="mb-5" />
        <div id="content">
          <MDXContent code={post.body} />
        </div>
        <Separator className="my-8" />
        <PostPagePagination previousPost={previousPost} nextPost={nextPost} />
        <div className="mt-8 block lg:hidden">
          <SharePost slug={postSlug} locale={locale} />
        </div>
        <Separator className="my-8" />
        <RelatedPosts
          currentPost={{
            slug: post.slug,
            categories: post.categories,
            locale: post.locale,
          }}
        />
      </div>
      <aside className="lg:col-span-3">
        <Toc />
      </aside>
    </article>
  );
}

/*     			
      `    ``               `
        ``  _ `      `       ``
      `   |_| `  `` ``    `  `
      ``  -___-_` `   ` --------------
    ``   /      )      | Sometimes I have no idea what I'm doing, but I enjoy it. |`
  `____/| (0) (0)_()  |/-------------  `
  /|   | |   ^____)      ``      ``
  ||   |_|    \_//     Uɔ````   `` ``
  ||    || |    |    ========`  ``  ``
  ||    || |    |      ||     ``   `
  ||     \\_\   |\     ||   ```    `
  =========||====||    ||  ``       `
    || ||   \Ɔ || \Ɔ   ||   ``    ``
    || ||      ||      ||  `     ``
  */
