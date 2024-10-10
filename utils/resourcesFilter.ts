import { Resources } from "@content";

interface ResourcesFilterProps {
  categories: string[];
  resources: Resources[];
  selectedCategory: string | null;
}

export function resourcesFilter({
  categories,
  resources,
  selectedCategory,
}: ResourcesFilterProps) {
  const filteredResources = selectedCategory
    ? resources.filter((post) => post.categories?.includes(selectedCategory))
    : resources;

  return { filteredResources };
}
