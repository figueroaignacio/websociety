// Velite
import { defineCollection, defineConfig, s } from "velite";

// Rehype
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const computedFields = <T extends { slug: string; locale: string }>(
  data: T
) => {
  const slugParts = data.slug.split("/");
  const cleanedSlug = slugParts
    .filter((part) => part !== "en" && part !== "es")
    .join("/");
  return {
    ...data,
    slug: cleanedSlug,
    slugAsParams: cleanedSlug.split("/").slice(1).join("/"),
    localeSlug: `${data.locale}/${cleanedSlug.split("/").slice(1).join("/")}`,
  };
};

const blog = defineCollection({
  name: "Blog",
  pattern: "../content/blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      locale: s.string(),
      published: s.boolean().default(true),
      categories: s.array(s.string()).optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const resources = defineCollection({
  name: "Resources",
  pattern: "../content/resources/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      published: s.boolean().default(true),
      locale: s.string(),
      body: s.mdx(),
      categories: s.array(s.string()).optional(),
      img: s.string(),
      pageUrl: s.string(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "./content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blog, resources },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark-default" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
