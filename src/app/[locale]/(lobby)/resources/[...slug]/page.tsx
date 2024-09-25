// Components
import { MDXContent } from "@/components/mdx/mdx-components";

// Content
import { resources } from "@content";

// Utils
import { notFound } from "next/navigation";

// Metadata
import { Metadata } from "next";

interface ResourcePageProps {
  params: {
    slug: string[];
    locale?: string;
  };
}

async function getResourceFromParams(params: ResourcePageProps["params"]) {
  const slug = params?.slug.join("/");
  const resource = resources.find(
    (resource) => resource?.slugAsParams === slug
  );

  return resource;
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug, locale = "en" } = params;

  try {
    const resource = await getResourceFromParams({ slug, locale });
    if (!resource) return {};

    return {
      title: resource.title,
      description: resource.description,
      openGraph: {
        title: resource.title,
        description: resource.description,
        type: "article",
        url: resource.slug,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export async function generateStaticParams(): Promise<
  ResourcePageProps["params"][]
> {
  return resources.map((resource) => ({
    slug: resource.slugAsParams.split("/"),
  }));
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const resources = await getResourceFromParams(params);

  if (!resources || !resources.published) {
    notFound();
  }

  return (
    <article className="relative top-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{resources.title}</h1>
      <p className="mb-4">{resources.description}</p>
      <div>
        <MDXContent code={resources.body} />
      </div>
    </article>
  );
}
