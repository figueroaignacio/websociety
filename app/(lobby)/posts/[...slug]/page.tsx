// Components
import { BackButton } from "@/components/back-button";

// Content
import { posts } from "#site/content";

// next
import { notFound } from "next/navigation";

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
    <article className="prose dark:prose-invert mt-20 max-w-7xl">
      <div className="pb-10">
        <BackButton title="Go back" />
      </div>
      <h1>{post.title}</h1>
      <p>{post.description ? <p>{post.description}</p> : null}</p>
      <hr className="my-6 bg-border" />
    </article>
  );
}
