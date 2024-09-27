"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Components
import Image from "next/image";
import { Link } from "../../config/navigation";
import { buttonVariants } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

// Icons - Images
import GuidesCtaDark from "@/assets/images/guides-cta-code-dark.svg";
import GuidesCtaLight from "@/assets/images/guides-cta-code-light.svg";
import { ArrowRight } from "lucide-react";

export function GuideCta() {
  const t = useTranslations("guidesCta");
  const { theme, resolvedTheme } = useTheme();
  const [isThemeResolved, setIsThemeResolved] = useState(false);

  useEffect(() => {
    setIsThemeResolved(true);
  }, [resolvedTheme]);

  return (
    <Card className="shadow-custom-card flex flex-col md:flex-row md:items-center">
      <CardHeader className="gap-4">
        <div className="flex flex-col gap-3">
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </div>
        <div>
          <Link
            href="/guides"
            className={`${buttonVariants({
              variant: "default",
            })} flex items-center gap-3 group`}
          >
            {t("link")}
            <ArrowRight
              size={".85rem"}
              className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </CardHeader>
      <div>
        {isThemeResolved && (
          <Image
            src={theme === "dark" ? GuidesCtaDark : GuidesCtaLight}
            alt="Cta coding"
            width={0}
            height={0}
            className="bg-cover rounded-md"
          />
        )}
      </div>
    </Card>
  );
}
