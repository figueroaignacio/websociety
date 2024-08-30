// Components
import { BackButton } from "@/components/back-button";
import { MDXContent } from "@/components/mdx/mdx-components";
import { Toc } from "@/components/toc";
import { Separator } from "@/components/ui/separator";

// Utils
import { notFound } from "next/navigation";

// Content
import { guides } from "#site/content";

// Metadata
import { Metadata } from "next";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug.join("/");
  const post = guides.find((guide) => guide.slugAsParams === slug);
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const guide = await getPostFromParams(params);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title}`,
    description: guide.description,
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return guides.map((guide) => ({ slug: guide.slugAsParams.split("/") }));
}

export default async function GuidePage({ params }: PostPageProps) {
  const guides = await getPostFromParams(params);

  if (!guides || !guides.published) {
    notFound();
  }

  return (
    <article className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
      <div className="lg:col-span-3"></div>
      <div className="lg:col-span-6 prose dark:prose-invert">
        <div className="pb-7">
          <BackButton />
        </div>
        <h1>{guides.title}</h1>
        <p className="m-0">
          {guides.description ? <p>{guides.description}</p> : null}
        </p>
        <Separator className="mb-5" />
        <MDXContent code={guides.body} />
      </div>
      <aside className="lg:col-span-3">
        <Toc />
      </aside>
    </article>
  );
}
