import { Waves } from "@/components/shared/waves";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JSX } from "react";

interface SpotlightCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export function SpotlightCard({
  description,
  icon,
  title,
}: SpotlightCardProps) {
  return (
    <Card className="w-full h-full overflow-hidden">
      <CardHeader>
        {icon}
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <Waves />
    </Card>
  );
}
