"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "lucide-react";

interface Heading {
  id: string;
  text: string | null;
  level: number;
}

interface MobileTocMobileProps {
  headings: Heading[];
  activeId: string;
}

export function MobileTocPanel({ headings, activeId }: MobileTocMobileProps) {
  const t = useTranslations("toc");

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden fixed bottom-4 right-4 z-50">
        <Button variant="default" size="icon" className="mx-auto">
          <Sidebar />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetClose asChild>
          <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"></button>
        </SheetClose>
        <div className="p-4">
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
                  onClick={() => {
                    (
                      document.querySelector(
                        "[data-state='open']"
                      ) as HTMLElement
                    )?.click();
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
