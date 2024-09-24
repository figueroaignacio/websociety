// Hooks
import { useTranslations } from "next-intl";

// Components
import { Button, buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Icons
import { ExternalLink, FileText, ImageIcon } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  pageUrl: string;
}

export function ResourceCard({
  description,
  title,
  pageUrl,
}: ResourceCardProps) {
  const t = useTranslations("resourceCard");

  return (
    <Card>
      <CardHeader>
        <div className="p-32 mb-5 rounded-md flex items-center justify-center dark:bg-gray-500/25 bg-gray-200">
          <ImageIcon size={64} className="text-gray-500" />
        </div>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex items-center">
          <FileText className="mr-2" size={16} />
          {t("detailsButton")}
        </Button>
        <a
          target="_blank"
          href={pageUrl}
          className={`flex items-center ${buttonVariants({
            variant: "outline",
          })}`}
        >
          <ExternalLink className="mr-2" size={16} />
          {t("visitButton")}
        </a>
      </CardFooter>
    </Card>
  );
}
