// Hooks
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Constants
import { socialPlatforms } from "@/constants/social-platforms";
import { CopyLinkButton } from "../copy-link-button";

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
      <h3 className="font-bold mb-2 text-xl">{t("sharePost.title")}</h3>
      <p className="font-medium text-sm mb-6 text-foreground">
        {t("sharePost.description")}
      </p>
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
              <Button variant="outline" className="flex items-center gap-3">
                <Icon />
                {name}
              </Button>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
