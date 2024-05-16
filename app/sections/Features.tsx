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

export function Features() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {features.map((feature, index) => {
        let icon;
        switch (feature.icon) {
          case "book":
            icon = <BookCheck size="1.5rem" />;
            break;
          case "learn":
            icon = <GraduationCap size="1.5rem" />;
            break;
          case "code":
            icon = <Code size="1.5rem" />;
            break;
          default:
            icon = null;
        }

        return (
          <Card className="h-full w-full fade" key={index}>
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
