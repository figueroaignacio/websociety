"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Icons
import {
  Bug,
  GithubIcon,
  HelpCircle,
  Mail,
  SettingsIcon,
  Sliders,
} from "lucide-react";

type SupportLinkProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
};

const SupportLink: React.FC<SupportLinkProps> = ({ href, title, icon }) => (
  <Button variant="outline" className="w-full justify-between" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
      {icon}
    </a>
  </Button>
);

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({
  icon,
  title,
}) => (
  <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
    {icon}
    {title}
  </h2>
);

export default function SettingsPage() {
  const t = useTranslations();

  const supportLinks = [
    {
      href: "https://github.com/figueroaignacio/frontendsociety/issues",
      title: t("support.reportBug.title"),
      icon: <Bug size={16} />,
    },
    {
      href: "mailto:ignaciofigueroadev@gmail.com",
      title: t("support.developerContact.title"),
      icon: <Mail size={16} />,
    },
    {
      href: "https://github.com/figueroaignacio/frontendsociety",
      title: t("support.sourceCode.title"),
      icon: <GithubIcon size={16} />,
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-[calc(100%+2rem)] ml-[-1rem] h-[calc(12rem+2.5rem)] mt-[-1.25rem]"></div>

      <div className="relative -mt-20 mx-auto px-4 pb-12 max-w-2xl bg-card rounded-md border">
        <div className="flex items-center text-center justify-center gap-2 py-12">
          <SettingsIcon size={24} className="text-primary" />
          <h1 className="text-2xl font-bold">{t("settings.title")}</h1>
        </div>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              <SectionHeader
                icon={<Sliders size={20} className="text-primary" />}
                title={t("settings.preferences")}
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ToggleTheme />
            <LocaleSwitcher />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <SectionHeader
                icon={<HelpCircle size={20} className="text-primary" />}
                title={t("support.title")}
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {supportLinks.map((link, index) => (
              <SupportLink key={index} {...link} />
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
