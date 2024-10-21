"use client";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bug,
  GithubIcon,
  HelpCircle,
  Mail,
  SettingsIcon,
  Sliders,
} from "lucide-react";
import { useTranslations } from "next-intl";

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
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex items-center gap-2 mb-6">
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
  );
}
