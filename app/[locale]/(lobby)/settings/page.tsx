"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { LocaleSwitcher } from "@/modules/settings/ui/locale-switcher";
import { ToggleTheme } from "@/modules/settings/ui/toggle-theme";

// Icons
import { SettingsIcon, Sliders } from "lucide-react";

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

  return (
    <div className="w-full mx-auto px-4 py-8 max-w-3xl">
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
      </div>
    </div>
  );
}
