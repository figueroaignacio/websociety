// Sanity
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";

// SWR
import useSWR from "swr";

// Utils
import { ARTICLES } from "@/constants/api";

const fetcher = async (url: string) => {
  const data = await client.fetch(url);
  return data;
};

export function useArticles() {
  const { data, error } = useSWR(groq`${ARTICLES.QUERY}`, fetcher);

  return {
    articles: data,
    isLoading: !error && !data,
    isError: error,
  };
}
