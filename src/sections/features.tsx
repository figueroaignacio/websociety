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
import { BookCheck, Code, GraduationCap } from "lucide-react";

// Icons mapping object
const iconMap: { [key: string]: JSX.Element } = {
  book: <BookCheck size="5rem" />,
  learn: <GraduationCap size="5rem" />,
  code: <Code size="5rem" />,
};

export function Features() {
  const t = useTranslations();
  const features = t.raw("features");

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
      {features.map((feature: any, index: number) => {
        const icon = iconMap[feature.icon] || null;
        return (
          <Card
            className={`h-full w-full place-content-center py-12 rounded-2xl ${
              index === 2 ? "sm:col-span-2" : ""
            }`}
            key={index}
          >
            <CardHeader>
              <CardTitle className="flex flex-col justify-center items-center gap-2">
                {icon}
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription
                className={`h-full w-full  text-center max-w-xl mx-auto ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
