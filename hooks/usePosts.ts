// Sanity
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";

// SWR
import useSWR from "swr";

// Utils
import { POSTS } from "@/constants/api";

const fetcher = async (url: string) => {
  const data = await client.fetch(url);
  return data;
};

export function usePosts() {
  const { data, error } = useSWR(groq`${POSTS.QUERY}`, fetcher);

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
