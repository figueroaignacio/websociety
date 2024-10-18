// Components
import { BackButton } from "@/components/back-button";
import { MDXContent } from "@/components/mdx/mdx-components";

// Content
import { resources } from "@content";

// Utils
import { buttonVariants } from "@/components/ui/button";
import { notFound } from "next/navigation";

// Icons
import { ExternalLink } from "lucide-react";

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
  const locale = params.locale || "en";
  const resource = resources.find(
    (resource) => resource?.slugAsParams === slug && resource.locale === locale
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
    <article className="max-w-3xl mx-auto py-6 sm:py-8 md:py-12">
      <div className="mb-5">
        <BackButton />
      </div>
      <h1 className="text-4xl font-extrabold mb-4">{resources.title}</h1>
      <p className="mb-6">{resources.description}</p>
      <div>
        <MDXContent code={resources.body} />
      </div>
      <div className="mt-7">
        <a
          target="_blank"
          href={resources.pageUrl}
          className={`flex items-center ${buttonVariants({
            variant: "default",
          })}`}
        >
          <ExternalLink className="mr-1" size={16} />
          Visitar {resources.title}
        </a>
      </div>
    </article>
  );
}
