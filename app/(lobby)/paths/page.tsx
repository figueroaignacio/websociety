// Components
import { LearnPathCard } from "@/components/paths/learn-path-card";

// Content
import { paths } from "#site/content";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn paths",
  description:
    "Learn paths by Frontend Society to improve your developer background.",
};

export default function LearnPage() {
  return (
    <section className="flex flex-col gap-12 mt-24">
      <h1 className="font-bold text-2xl lg:text-4xl">
        Learn paths by Frontend Society
      </h1>

      {paths.length > 0 ? (
        <ul className="grid gap-4 grid-cols-1 ">
          {paths.map((path) => {
            return (
              <li key={path.slug}>
                <LearnPathCard
                  slug={path.slug}
                  title={path.title}
                  description={path.description ?? ""}
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
    </section>
  );
}
