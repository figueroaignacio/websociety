// Components
import { MDXContent } from "@/components/mdx/mdx-components";
import { BackButton } from "@/components/shared/back-button";
import { Separator } from "@/components/ui/separator";
import { Toc } from "@/modules/navigation/ui/toc";

// Utils
import { notFound } from "next/navigation";

// Content
import { guides } from "@content";

// Metadata
import { Metadata } from "next";

interface CurriculumPageProps {
  params: {
    slug: string[];
  };
}

async function getCurriculumFromParams(params: CurriculumPageProps["params"]) {
  const { slug } = await params;
  const curriculumSlug = slug.join("/");
  const post = guides.find((guide) => guide.slugAsParams === curriculumSlug);
  return post;
}

export async function generateMetadata({
  params,
}: CurriculumPageProps): Promise<Metadata> {
  const guide = await getCurriculumFromParams(params);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title}`,
    description: guide.description,
  };
}

export async function generateStaticParams(): Promise<
  CurriculumPageProps["params"][]
> {
  return guides.map((guide) => ({ slug: guide.slugAsParams.split("/") }));
}

export default async function CurriculumPage({ params }: CurriculumPageProps) {
  const guides = await getCurriculumFromParams(params);

  if (!guides || !guides.published) {
    notFound();
  }

  return (
    <article className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-6 sm:py-8 md:py-12">
      <div className="lg:col-span-3"></div>
      <div className="lg:col-span-6">
        <div className="pb-7">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2 py-16 bg-purple-800 text-center px-12 rounded-md text-white">
          <h1 className="text-3xl font-bold">{guides.title}</h1>
          <p className="text-sm">
            {guides.description ? guides.description : null}
          </p>
        </div>
        <Separator className="my-10" />
        <MDXContent code={guides.body} />
      </div>
      <aside className="lg:col-span-3">
        <Toc />
      </aside>
    </article>
  );
}
