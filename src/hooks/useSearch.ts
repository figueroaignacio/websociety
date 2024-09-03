"use client";

// Hooks
import { useEffect, useState } from "react";

// Content
import { guides, posts } from "#site/content";

type ContentItem = {
  slug: string;
  title: string;
  date: string;
  locale: string;
  published: boolean;
  body: string;
  description?: string;
  categories?: string[];
  slugAsParams: string;
};

const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export function useSearch(query: string, currentLocale: string) {
  const [results, setResults] = useState<ContentItem[]>([]);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const normalizedQuery = normalizeText(query);
    const combinedItems = [...posts, ...guides];
    const filteredItems = combinedItems.filter(
      (item) =>
        item.locale === currentLocale &&
        normalizeText(item.title).includes(normalizedQuery)
    );

    setResults(filteredItems);
  }, [query, currentLocale]);

  return results;
}
