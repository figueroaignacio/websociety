"use client";

// Hooks
import { useRouter } from "@/config/i18n/routing";
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Icons
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();
  const t = useTranslations();

  return (
    <Button
      className="items-center flex gap-2 relative group"
      variant="default"
      onClick={() => router.back()}
    >
      <ArrowLeft
        className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:-translate-x-1"
        size=".85rem"
      />
      <span>{t("backButton.label")}</span>
    </Button>
  );
}
