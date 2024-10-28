import { useTranslations } from "next-intl";
import { CategoryLink } from "./category-link";

interface FilterDesktopProps {
  categories: string[];
  selectedCategory: string | null;
  allCategoriesLabel?: string;
}

export function FilterByCategoryPanel({
  categories,
  selectedCategory,
  allCategoriesLabel = "Todas",
}: FilterDesktopProps) {
  const t = useTranslations("filter");

  return (
    <nav
      aria-labelledby="category-filter-desktop"
      className=" rounded-lg hidden lg:block"
    >
      <h2 id="category-filter-desktop" className="text-lg font-semibold mb-4">
        {t("title")}
      </h2>
      <ul className="flex flex-wrap gap-2">
        <li>
          <CategoryLink href="?category=" isActive={!selectedCategory}>
            {allCategoriesLabel}
          </CategoryLink>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <CategoryLink
              href={`?category=${encodeURIComponent(category)}`}
              isActive={selectedCategory === category}
            >
              {category}
            </CategoryLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
