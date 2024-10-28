"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/config/i18n/routing";
import { motion } from "framer-motion";

// Icons
import { ArrowRight, BookOpen, Code, GraduationCap, Users } from "lucide-react";

export function GuideCta() {
  const t = useTranslations("guidesCta");

  interface Item {
    title: string;
    icon: string;
  }

  const items = t.raw("items") as Item[];

  const icons = {
    BookOpen: BookOpen,
    Code: Code,
    Users: Users,
  };

  return (
    <Card className="overflow-hidden relative cta-background-gradient text-white">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="currentColor"
            animate={{
              d: [
                "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z",
                "M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z",
                "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
      <div className="relative z-10 p-6 md:p-8">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-4xl font-extrabold mb-4 tracking-tight">
            {t("title")}
          </CardTitle>
          <CardDescription className="text-xl text-purple-100">
            {t("description")}
          </CardDescription>
        </CardHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <div key={index} className="flex items-center space-x-3">
                {Icon && <Icon className="h-6 w-6 text-purple-200" />}
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div>
          <Link
            href="/guides"
            className={`${buttonVariants({
              variant: "secondary",
              size: "lg",
            })} w-full flex items-center justify-center gap-3 group bg-white text-purple-950`}
          >
            <GraduationCap className="h-5 w-5" />
            <span>{t("link")}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
