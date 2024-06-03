// Components
import { BackButton } from "@/components/back-button";
import { MDXContent } from "@/components/mdx/mdx-components";

// Next
import { notFound } from "next/navigation";

// Content
import { paths } from "#site/content";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug.join("/");
  const post = paths.find((path) => path.slugAsParams === slug);
  return post;
}

export default async function PathPage({ params }: PostPageProps) {
  const path = await getPostFromParams(params);

  if (!path || !path.published) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert mt-5 max-w-7xl py-8">
      <div className="pb-7">
        <BackButton title="Go back" />
      </div>
      <h1>{path.title}</h1>
      <p className="m-0">
        {path.description ? <p>{path.description}</p> : null}
      </p>
      <MDXContent code={path.body} />
    </article>
  );
}
