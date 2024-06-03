// Components
import { LearnPathCard } from "@/components/paths/learn-path-card";

// Content
import { paths } from "#site/content";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Learn paths by Frontend Society to improve your developer background.",
};

export default function LearnPage() {
  return (
    <section className="flex flex-col gap-12 mt-24">
      <h1 className="font-bold text-2xl lg:text-4xl">
        Learn paths by Frontend Society
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {paths.length > 0 ? (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 ">
            {paths.map((post) => {
              return (
                <li key={post.slug}>
                  <LearnPathCard
                    // slug={post.slug}
                    title={post.title}
                    description={post.description ?? ""}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <section className="py-36 text-center">
            <p className="text-xl">Nothing to see, try with another word</p>
          </section>
        )}
      </div>
    </section>
  );
}
