// Hooks
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Constants
import { socialPlatforms } from "@/constants/social-platforms";

interface ShareButtonProps {
  slug: string;
  locale: string;
}

export function SharePost({ slug, locale }: ShareButtonProps) {
  const t = useTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  const url = `${baseUrl}/${locale}/posts/${slug}`;

  return (
    <section className="border p-4 rounded-md">
      <h3 className="text-2xl font-bold mb-2">{t("share.title")}</h3>
      <p className="font-medium mb-6 text-foreground">
        {t("share.description")}
      </p>
      <div className="flex gap-2 items-center flex-wrap">
        {socialPlatforms.map(({ name, urlBase, icon: Icon }) => (
          <a
            key={name}
            href={`${urlBase}${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex items-center gap-3">
              <Icon />
              {name}
            </Button>
          </a>
        ))}
      </div>
    </section>
  );
}
