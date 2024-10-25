// Hooks
import { useTranslations } from "next-intl";

// Components
import { ResourceItem } from "@/modules/resources/components/resource-item";

// Types
import { Resources as ResourcesTypes } from "@content";

// Utils
import { buttonVariants } from "@/components/ui/button";

// Icons
import { Link } from "@/config/i18n/routing";
import {
  ArrowRight,
  Book,
  ClipboardList,
  Code,
  Hammer,
  Layout,
  Library,
  Users,
} from "lucide-react";
export function Resources() {
  const t = useTranslations();
  const resources = t.raw("resourceItems");

  const icons = [
    { id: 1, icon: <Users size={30} key="users-icon" /> },
    { id: 2, icon: <Book size={30} key="book-icon" /> },
    { id: 3, icon: <Code size={30} key="code-icon" /> },
    { id: 4, icon: <Hammer size={30} key="hammer-icon" /> },
    { id: 5, icon: <ClipboardList size={30} key="clipboard-icon" /> },
    { id: 6, icon: <Layout size={30} key="layout-icon" /> },
  ];

  return (
    <div className="mx-auto py-8 flex flex-col gap-2">
      <h2 className="text-3xl font-bold">{t("resourcesSection.title")}</h2>
      <p>{t("resourcesSection.description")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {resources.map((resource: ResourcesTypes, index: number) => (
          <div
            key={index}
            className={`${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""} ${
              index === 5 ? "sm:col-span-2" : ""
            }`}
          >
            <ResourceItem icon={icons[index].icon} resource={resource} />
          </div>
        ))}
      </div>
      <Link
        href="/resources"
        className={`${buttonVariants({
          variant: "default",
        })} mt-7 flex items-center gap-3 group`}
      >
        <Library className="mr-2 h-4 w-4" />
        <span>{t("resourcesSection.button")}</span>
        <ArrowRight
          size={".85rem"}
          className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
