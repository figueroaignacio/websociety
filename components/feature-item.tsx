// Components
import { Card } from "./ui/card";

// Icons
import { BookCheck, Code2, Globe, GraduationCap } from "lucide-react";

const iconMap: { [key: string]: JSX.Element } = {
  book: <BookCheck size="2rem" />,
  learn: <GraduationCap size="2rem" />,
  code: <Code2 size="2rem" />,
  resources: <Globe size="2rem" />,
};

export function FeatureItem({
  feature,
  index,
}: {
  feature: { title: string; description: string; icon: string };
  index: number;
}) {
  const icon = iconMap[feature.icon] || null;

  return (
    <div className={index === 2 ? "sm:col-span-2" : ""}>
      <Card
        className={`h-full w-full overflow-hidden rounded-2xl gradient-background bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 shadow-md ${
          index === 2 ? "sm:flex sm:flex-row sm:items-center" : ""
        }`}
      >
        <div
          className={`p-8 flex flex-col h-full ${
            index === 2 ? "sm:flex-row sm:items-center sm:w-full" : ""
          }`}
        >
          <div className={`mb-6 ${index === 2 ? "sm:mb-0 sm:mr-8" : ""}`}>
            <div className="w-16 h-16 rounded-full gradient-background flex items-center justify-center">
              {icon}
            </div>
          </div>
          <div className={index === 2 ? "sm:flex-grow" : ""}>
            <h3 className="text-2xl font-bold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-white text-opacity-80 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
