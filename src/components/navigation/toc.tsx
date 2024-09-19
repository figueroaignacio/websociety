"use client";

// Hooks
import { useEffect, useState } from "react";

// Components
import { MobileTocPanel } from "./mobile-toc-panel";
import { TocPanel } from "./toc-panel";

interface Heading {
  id: string;
  text: string | null;
  level: number;
}

export function Toc() {
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
    <>
      <TocPanel headings={headings} activeId={activeId} />
      <MobileTocPanel headings={headings} activeId={activeId} />
    </>
  );
}
