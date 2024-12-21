// Hooks
import { useTranslations } from "next-intl";

// Components
import { SpotlightCard } from "../ui/spotlight-card";

// Icons
import {
  BookOpen,
  Edit,
  Folder,
  Globe,
  LucideIcon,
  Target,
} from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  Globe: Globe,
  Edit: Edit,
  Folder: Folder,
  Target: Target,
  BookOpen: BookOpen,
};

interface Spotlight {
  icon: string;
  title: string;
  description: string;
}

export const Spotlights = () => {
  const t = useTranslations();
  const spotlights = t.raw("spotlights");

  return (
    <div>
      <ul className="grid grid-cols-2 lg:grid-cols-12 gap-3">
        {spotlights.map((spotlight: Spotlight, index: number) => {
          const IconComponent = iconMap[spotlight.icon];

          return (
            <li
              className={
                index === 0 || index === 1
                  ? "col-span-6"
                  : "col-span-6 lg:col-span-4 "
              }
              key={index}
            >
              <SpotlightCard
                title={spotlight.title}
                description={spotlight.description}
                icon={
                  <IconComponent
                    className="text-4xl mb-4 border p-2 rounded-full gradient-background"
                    size={40}
                  />
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
