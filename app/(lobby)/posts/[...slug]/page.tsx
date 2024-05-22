// Components
import { MDXContent } from "@/components/mdx/mdx-components";
import { Separator } from "@/components/ui/separator";

// Content
import { posts } from "#site/content";

// next
import { notFound } from "next/navigation";

// Styles
import "@/styles/mdx.css";

// Metadata
import { Metadata } from "next";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
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
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert mt-20 max-w-7xl py-8">
      <h1>{post.title}</h1>
      <p className="m-0">
        {post.description ? <p>{post.description}</p> : null}
      </p>
      <Separator className="mb-5" />
      <MDXContent code={post.body} />
    </article>
  );
}
