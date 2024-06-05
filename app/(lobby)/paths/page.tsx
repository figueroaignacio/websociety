// Components
import { LearnPathCard } from "@/components/paths/learn-path-card";

// Content
import { paths } from "#site/content";

// Constants / Config
import { learnPaths, learnPathsConfig } from "@/constants/learn-paths";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  title: learnPathsConfig.title,
  description: learnPathsConfig.description,
};

export default function LearnPage() {
  return (
    <section className="flex flex-col gap-12 mt-24">
      <h1 className="font-bold text-2xl lg:text-4xl">{learnPaths.title}</h1>
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
          <p className="text-xl">{learnPaths.fallback}</p>
        </section>
      )}
    </section>
  );
}
