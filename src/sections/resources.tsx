// Hooks
import { useTranslations } from "next-intl";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

// Types
import { Resources as ResourcesTypes } from "@content";

// Icons
import { Book, ClipboardList, Code, Hammer, Layout, Users } from "lucide-react";

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
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-2">
      <h2 className="text-3xl font-bold">{t("resourcesSection.title")}</h2>
      <p className="">{t("resourcesSection.description")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {resources.map((resource: ResourcesTypes, index: number) => (
          <Card key={index} className="rounded-lg text-center">
            <CardHeader className="justify-center items-center">
              <div className="mb-4 border p-4 rounded-full border-dashed border-purple-500">
                {icons[index].icon}
              </div>
              <h3 className="text-lg font-semibold">{resource.title}</h3>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                {resource.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
