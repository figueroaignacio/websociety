"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

// Components
import { Tag } from "./tag";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

// Icons
import { Trash2 } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
}

export function CategoryFilter({
  categories,
  selectedCategory,
}: CategoryFilterProps) {
  const router = useRouter();
  const t = useTranslations();

  const handleCategoryClick = (category: string) => {
    router.push(`/posts?category=${category}`);
  };

  const handleRemoveFilters = () => {
    router.push(`posts`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-bold text-3xl mb-2">{t("posts.title")}</h1>
      <p className="text-foreground mb-4">{t("posts.description")}</p>
      <Separator className="my-4" />
      <div className="py-6 px-4 border rounded-lg shadow-sm bg-card">
        <h2 className="text-xs font-semibold mb-3">{t("posts.filter")}</h2>
        <div className="flex flex-row flex-wrap gap-y-2 gap-x-3">
          {categories.map((category) => (
            <Tag
              key={category}
              tag={category}
              current={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
        {selectedCategory && (
          <Button
            variant="outline"
            onClick={handleRemoveFilters}
            className="mt-4 flex items-center gap-2"
          >
            <Trash2 size={16} />
            {t("posts.removeFilter")}{" "}
          </Button>
        )}
      </div>
    </div>
  );
}
