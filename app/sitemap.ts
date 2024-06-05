import { posts as allPosts } from "#site/content";
import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${siteConfig.url}/posts/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
  })) satisfies MetadataRoute.Sitemap;
  const routes = ["", "/posts", "/paths", "/challenges"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
  })) satisfies MetadataRoute.Sitemap;
  return [...routes, ...posts];
}
