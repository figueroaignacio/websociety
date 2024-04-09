// Sanity
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";

// SWR
import useSWR from "swr";

// Utils
import { ARTICLES } from "@/constants/api";

const fetchArticleData = async (slug: string) => {
  const result = await client.fetch(groq`${ARTICLES.SLUG_QUERY}`, { slug });
  return result;
};

export function useArticlesSlug(slug: string) {
  const { data, error } = useSWR(slug, () => fetchArticleData(slug), {
    revalidateOnFocus: true,
  });

  return {
    article: data,
    isLoading: !error && !data,
    isError: error,
  };
}
