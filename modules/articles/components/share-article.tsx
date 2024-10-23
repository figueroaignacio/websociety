// Hooks
import { useTranslations } from "next-intl";

// Components
import { CopyLinkButton } from "@/components/common/copy-link-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Constants
import { socialPlatforms } from "@/components/common/social-platforms";

interface ShareButtonProps {
  slug: string;
  locale: string;
}

export function ShareArticle({ slug, locale }: ShareButtonProps) {
  const t = useTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  const url = `${baseUrl}/${locale}/articles/${slug}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t("sharePost.title")}</CardTitle>
        <CardDescription className="text-sm">
          {t("sharePost.description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex gap-2 items-center flex-wrap">
          <li>
            <CopyLinkButton url={url} />
          </li>
          {socialPlatforms.map(({ name, urlBase, icon: Icon }) => (
            <li key={name}>
              <a
                href={`${urlBase}${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-3"
                  size="sm"
                >
                  <Icon />
                  {name}
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
