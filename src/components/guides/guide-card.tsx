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
    <Card className="transition-shadow duration-300 overflow-hidden relative">
      <CardHeader className="bg-popover text-center">
        <CardTitle className="text-2xl font-bold py-12">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <CardDescription className="text-center text-pretty">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <LinkWithTransition
          href={"/" + slug}
          className={`flex items-center ${buttonVariants({
            variant: "default",
          })} group`}
        >
          {t("button")}
          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 transform group-hover:translate-x-2"
          />
        </LinkWithTransition>
      </CardFooter>
    </Card>
  );
}
