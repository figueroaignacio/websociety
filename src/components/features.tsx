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
  book: <BookCheck size="1.5rem" />,
  learn: <GraduationCap size="1.5rem" />,
  code: <Code size="1.5rem" />,
};

export function Features() {
  const t = useTranslations();
  const features = t.raw("features");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((feature: any, index: number) => {
        const icon = iconMap[feature.icon] || null;
        return (
          <Card
            className={`h-full w-full shadow-custom-card place-content-center ${
              index === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
            key={index}
          >
            <CardHeader>
              <CardTitle className="flex gap-2">
                {icon}
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
