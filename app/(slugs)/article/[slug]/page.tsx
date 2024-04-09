"use client";

// Components
import { RichTextComponents } from "@/components/RichTextComponents";
import { Spinner } from "@/components/Spinner";
("");

// Utils
import { useArticlesSlug } from "@/hooks/useArticleSlug";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default function ArticlePage({ params }: Props) {
  const slug = params.slug;
  const { article, isError, isLoading } = useArticlesSlug(slug);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div key={article._id} className="flex flex-col gap-2 pt-12">
      <PortableText value={article.body} components={RichTextComponents} />
    </div>
  );
}
