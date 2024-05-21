// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Constants
import { features } from "@/constants/features";

// Icons
import { BookCheck, Code, GraduationCap } from "lucide-react";

// Icons mapping object
const iconMap: { [key: string]: JSX.Element } = {
  book: <BookCheck size="1.5rem" />,
  learn: <GraduationCap size="1.5rem" />,
  code: <Code size="1.5rem" />,
};

export function Features() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {features.map((feature, index) => {
        const icon = iconMap[feature.icon] || null;
        return (
          <Card className="h-full w-full shadow-custom-card" key={index}>
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
