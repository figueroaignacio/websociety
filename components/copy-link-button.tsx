"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { Button } from "./ui/button";

// Icons
import { ClipboardCopy } from "lucide-react";

// Utils
import { toast } from "sonner";

interface CopyLinkButtonProps {
  url: string;
}

export function CopyLinkButton({ url }: CopyLinkButtonProps) {
  const t = useTranslations();

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url);
    toast.success(t("sharePost.copyLink.copiedTitle"), {
      description: t("sharePost.copyLink.copiedDescription", { url }),
    });
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-3"
      onClick={handleCopyUrl}
    >
      <ClipboardCopy className="w-4 h-4" />
      {t("sharePost.copyLink.label")}
    </Button>
  );
}
