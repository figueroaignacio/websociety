"use client";

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
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3")).map(
      (heading) => ({
        id: heading.id,
        text: heading.textContent,
        level: heading.tagName.toLowerCase() === "h2" ? 2 : 3,
      })
    );

    setHeadings(headingElements as Heading[]);

    const handleScroll = () => {
      const offset = 80;
      const topHeading = headingElements.find((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          return top >= offset && top <= window.innerHeight / 2 + offset;
        }
        return false;
      });

      if (topHeading) {
        setActiveId(topHeading.id);
      } else if (window.scrollY === 0) {
        setActiveId(headingElements[0]?.id || "");
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-32 h-[calc(100vh-121px)] left-0 rounded-lg mx-auto overflow-y-auto p-4 hidden lg:block">
      <p className="font-semibold text-lg my-2">{t("title")}</p>
      <ul className="list-none flex flex-col gap-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: heading.level === 3 ? "1rem" : "0" }}
          >
            <a
              href={`#${heading.id}`}
              className={`hover:underline hover:text-foreground text-sm transition-colors duration-150 ${
                activeId === heading.id
                  ? "underline text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
