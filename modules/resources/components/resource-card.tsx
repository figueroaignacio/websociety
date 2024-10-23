// Hooks
import { useTranslations } from "next-intl";

// Components
import { Tag } from "@/components/tag";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/config/navigation";
import Image from "next/image";

// Icons
import { ExternalLink, FileText, ImageIcon } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  pageUrl: string;
  image?: string;
  tags: string[];
  slug: string;
}

export function ResourceCard({
  description,
  title,
  pageUrl,
  image,
  tags,
  slug,
}: ResourceCardProps) {
  const t = useTranslations("resourceCard");

  return (
    <Card>
      <CardHeader>
        <div className="mb-5 rounded-md flex items-center relative justify-center dark:bg-gray-500/25 bg-gray-200">
          {image ? (
            <div>
              <Image
                src={image}
                alt={title}
                className="object-cover h-full w-full rounded-sm"
                width={1500}
                height={1500}
              />
            </div>
          ) : (
            <div className="p-32 flex items-center justify-center">
              <ImageIcon size={64} className="text-gray-500" />
            </div>
          )}
        </div>
        <CardTitle className="flex items-center gap-2">
          <h2>{title}</h2>
          <span>
            {tags.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="gap-2">
        <Link
          className={`flex items-center ${buttonVariants({
            variant: "default",
          })}`}
          href={slug}
        >
          <FileText className="mr-2" size={16} />
          {t("detailsButton")}
        </Link>
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
