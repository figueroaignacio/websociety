"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string | null;
  level: number;
}

export function Toc() {
  const t = useTranslations("toc");

  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3")).map(
      (heading) => ({
        id: heading.id,
        text: heading.textContent,
        level: heading.tagName.toLowerCase() === "h2" ? 2 : 3,
      })
    );

    setHeadings(elements as Heading[]);
  }, []);

  return (
    <nav className="sticky top-0 left-0 h-auto rounded-lg mx-auto overflow-y-auto p-4 hidden lg:block">
      <p className="font-semibold text-lg my-2">{t("title")}</p>
      <ul className="list-none flex flex-col gap-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: heading.level === 3 ? "1rem" : "0" }}
            className="mb-1"
          >
            <a
              href={`#${heading.id}`}
              className="no-underline hover:underline text-sm transition-all duration-150 hover:text-foreground text-muted-foreground"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
