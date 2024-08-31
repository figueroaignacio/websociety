// Components
import { BackButton } from "@/components/back-button";
import { MDXContent } from "@/components/mdx/mdx-components";
import { Toc } from "@/components/toc";
import { Separator } from "@/components/ui/separator";

// Utils
import { notFound } from "next/navigation";

// Content
import { guides } from "#site/content";

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
    <article className="mx-auto lg:grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
      <div className="lg:col-span-3"></div>
      <div className="lg:col-span-6">
        <div className="pb-7">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2 py-16 bg-purple-800 text-center px-12 rounded-md text-white">
          <h1 className="text-3xl font-bold">{guides.title}</h1>
          <p className="text-sm">
            {guides.description ? <p>{guides.description}</p> : null}
          </p>
        </div>
        <Separator className="my-10" />
        <div>
          <MDXContent code={guides.body} />
        </div>
      </div>
      <aside className="lg:col-span-3">
        <Toc />
      </aside>
    </article>
  );
}
