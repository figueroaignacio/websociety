"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { CategoryLink } from "@/components/shared/category-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";

interface FilterMobileProps {
  categories: string[];
  selectedCategory: string | null;
  allCategoriesLabel?: string;
}

export function FilterByCategoryMobilePanel({
  categories,
  selectedCategory,
  allCategoriesLabel = "Todas",
}: FilterMobileProps) {
  const t = useTranslations("filter");

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden fixed bottom-4 right-4">
        <Button size={"icon"} aria-labelledby="category-filter-mobile">
          <Filter />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-4 z-[200] overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
        </SheetHeader>
        <div className="py-12 space-y-2">
          <CategoryLink href="?category=" isActive={!selectedCategory}>
            <SheetClose className="w-full">{allCategoriesLabel}</SheetClose>
          </CategoryLink>
          {categories.map((category) => (
            <CategoryLink
              key={category}
              isActive={selectedCategory === category}
              href={`?category=${encodeURIComponent(category)}`}
            >
              <SheetClose className="w-full">{category}</SheetClose>
            </CategoryLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
