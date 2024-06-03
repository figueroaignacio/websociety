// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LearnPathCardProps {
  title: string;
  description: string;
}

export function LearnPathCard({ description, title }: LearnPathCardProps) {
  return (
    <Card className="hover:cursor-pointer dark:hover:brightness-150 hover:shadow-custom-card duration-150 h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
