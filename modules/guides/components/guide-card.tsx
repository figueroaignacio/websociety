"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { Card, CardTitle } from "@/components/ui/card";

// Icons
import { Link } from "@/config/i18n/routing";
import { ExternalLink } from "lucide-react";
interface GuideCardProps {
  title: string;
  slug: string;
}

export function GuideCard({ title, slug }: GuideCardProps) {
  const t = useTranslations("guides");

  return (
    <Link href={"/" + slug} className="w-full">
      <Card className="flex-row items-center justify-between px-8 py-6 transition-transform transform hover:scale-[1.02] duration-300">
        <CardTitle className="text-sm lg:text-lg">{title}</CardTitle>
        <ExternalLink className="transition-transform transform hover:rotate-12 duration-300" />
      </Card>
    </Link>
  );
}
