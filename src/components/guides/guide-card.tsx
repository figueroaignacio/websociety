// Hooks
import { useTranslations } from "next-intl";

// Components
import { LinkWithTransition } from "../link-with-transition";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Icons
import { ArrowRight } from "lucide-react";

interface GuideCardProps {
  title: string;
  description: string;
  slug: string;
}

export function GuideCard({ description, title, slug }: GuideCardProps) {
  const t = useTranslations("guides");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <LinkWithTransition
          href={"/" + slug}
          className={`w-full ${buttonVariants({ variant: "default" })}`}
        >
          {t("button")}
          <ArrowRight
            size={16}
            className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
          />
        </LinkWithTransition>
      </CardFooter>
    </Card>
  );
}
