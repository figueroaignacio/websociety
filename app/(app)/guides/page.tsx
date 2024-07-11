// Components
import { GuideCard } from "@/components/guides/guide-card";

// Content
import { guides } from "#site/content";

// Constants / Config
import { guides as g, guidesConfig } from "@/constants/guides";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  title: guidesConfig.title,
  description: guidesConfig.description,
};

export default function LearnPage() {
  return (
    <section className="flex flex-col gap-12 mt-24">
      <h1 className="font-bold text-2xl lg:text-4xl">{g.title}</h1>
      {guides.length > 0 ? (
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {guides.map((path) => {
            return (
              <li key={path.slug}>
                <GuideCard
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
          <p className="text-xl">{g.fallback}</p>
        </section>
      )}
    </section>
  );
}
