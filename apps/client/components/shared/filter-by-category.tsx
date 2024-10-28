// Components
import { FilterByCategoryMobilePanel } from "./filter-by-category-mobile-panel";
import { FilterByCategoryPanel } from "./filter-by-category-panel";

interface FilterByCategoryProps {
  categories: string[];
  selectedCategory: string | null;
  allCategoriesLabel?: string;
}

export function FilterByCategory({
  categories,
  selectedCategory,
  allCategoriesLabel = "Todas",
}: FilterByCategoryProps) {
  return (
    <>
      <FilterByCategoryMobilePanel
        categories={categories}
        selectedCategory={selectedCategory}
        allCategoriesLabel={allCategoriesLabel}
      />
      <FilterByCategoryPanel
        categories={categories}
        selectedCategory={selectedCategory}
        allCategoriesLabel={allCategoriesLabel}
      />
    </>
  );
}
