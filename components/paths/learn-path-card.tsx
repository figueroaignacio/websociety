// Components
import Link from "next/link";
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
  slug: string;
}

export function LearnPathCard({
  description,
  title,
  slug,
}: LearnPathCardProps) {
  return (
    <Link href={"/" + slug}>
      <Card className="hover:cursor-pointer dark:hover:brightness-150 hover:shadow-custom-card duration-150 h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
