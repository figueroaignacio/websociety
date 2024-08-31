// Components
import { BackButton } from "@/components/back-button";
import { MDXContent } from "@/components/mdx/mdx-components";
import { Tag } from "@/components/tag";
import { Toc } from "@/components/toc";
import { Separator } from "@/components/ui/separator";

// Content
import { posts } from "#site/content";

// Utils
import { notFound } from "next/navigation";

// Metadata
import { Metadata } from "next";

interface PostPageProps {
  params: {
    slug: string[];
    locale?: string;
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  try {
    const slug = params?.slug.join("/");
    const post = posts.find((post) => post.slugAsParams === slug);
    return post;
  } catch (error) {
    console.error("Error getting post from params:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug, locale = "en" } = params;

  try {
    const post = await getPostFromParams({ slug, locale });
    if (!post) return {};

    const ogSearchParams = new URLSearchParams({ title: post.title });

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: post.slug,
        images: [
          {
            url: `${locale}/api/og?${ogSearchParams.toString()}`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}
export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
      <div className="lg:col-span-3"></div>
      <div className="lg:col-span-6">
        <div className="pb-7">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-2 mb-2">
            {post.categories?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
          <p className="mb-4">{post.description}</p>
        </div>
        <Separator className="mb-5" />
        <MDXContent code={post.body} />
      </div>
      <aside className="lg:col-span-3">
        <Toc />
      </aside>
    </article>
  );
}

/*     			
      `    ``               `
        ``  _ `      `       ``
      `   |_| `  `` ``    `  `
      ``  -___-_` `   ` --------------
    ``   /      )      | Sometimes I have no idea what I'm doing, but I enjoy it. |`
  `____/| (0) (0)_()  |/-------------  `
  /|   | |   ^____)      ``      ``
  ||   |_|    \_//     Uɔ````   `` ``
  ||    || |    |    ========`  ``  ``
  ||    || |    |      ||     ``   `
  ||     \\_\   |\     ||   ```    `
  =========||====||    ||  ``       `
    || ||   \Ɔ || \Ɔ   ||   ``    ``
    || ||      ||      ||  `     ``
  */
