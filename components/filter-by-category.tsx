import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/config/navigation";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("filter");

  return (
    <nav
      aria-labelledby="category-filter"
      className="bg-card p-6 rounded-lg border shadow-sm"
    >
      <h2 id="category-filter" className="text-lg font-semibold mb-4">
        {t("title")}
      </h2>
      <ul className="flex gap-2">
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

interface CategoryLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

function CategoryLink({ href, isActive, children }: CategoryLinkProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: isActive ? "default" : "outline",
        className: "w-full justify-start",
      })}
    >
      {children}
    </Link>
  );
}
