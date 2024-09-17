// Hooks
import { useTranslations } from "next-intl";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Icons
import { BookCheck, Code2, Globe, GraduationCap } from "lucide-react";

// Icons mapping object
const iconMap: { [key: string]: JSX.Element } = {
  book: <BookCheck size="3rem" />,
  learn: <GraduationCap size="3rem" />,
  code: <Code2 size="3rem" />,
  resources: <Globe size="3rem" />, // Added icon for resources
};

export function Features() {
  const t = useTranslations();
  const features = t.raw("features"); // Use t() for proper translation

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
      {features.map(
        (
          feature: { title: string; description: string; icon: string },
          index: number
        ) => {
          const icon = iconMap[feature.icon] || null;
          return (
            <Card className="h-full w-full rounded-2xl" key={index}>
              <CardHeader className="py-12 gradient-background rounded-t-2xl">
                <CardTitle className="flex flex-col justify-center items-center text-center gap-2 text-xs md:text-lg">
                  {icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="py-12 flex h-full">
                <CardDescription
                  className={`h-full w-full text-center text-base max-w-xl mx-auto ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        }
      )}
    </section>
  );
}
