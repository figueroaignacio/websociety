"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { Separator } from "@/components/ui/separator";
import { LocaleSwitcher } from "@/modules/settings/ui/locale-switcher";
import { SupportLink } from "@/modules/settings/ui/support-link";
import { ToggleTheme } from "@/modules/settings/ui/toggle-theme";
import {
  Bug,
  GithubIcon,
  HelpCircle,
  Mail,
  SettingsIcon,
  Sliders,
} from "lucide-react";

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
    <div className="w-full mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <SettingsIcon size={28} className="text-primary" />
        <h1 className="text-3xl font-bold">{t("settings.title")}</h1>
      </div>

      <div className="space-y-8">
        <section>
          <SectionHeader
            icon={<Sliders size={20} className="text-primary" />}
            title={t("settings.preferences")}
          />
          <div className="space-y-6">
            <ToggleTheme />
            <LocaleSwitcher />
          </div>
        </section>

        <Separator />

        <section>
          <SectionHeader
            icon={<HelpCircle size={20} className="text-primary" />}
            title={t("support.title")}
          />
          <div className="grid gap-4">
            {supportLinks.map((link, index) => (
              <SupportLink key={index} {...link} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
