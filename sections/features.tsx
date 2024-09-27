import { BookCheck, Code2, Globe, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { FeatureItem } from "../components/feature-item";

const iconMap: { [key: string]: JSX.Element } = {
  book: <BookCheck size="2rem" />,
  learn: <GraduationCap size="2rem" />,
  code: <Code2 size="2rem" />,
  resources: <Globe size="2rem" />,
};

export function Features() {
  const t = useTranslations();
  const features = t.raw("features");

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-3xl">
      {features.map(
        (
          feature: { title: string; description: string; icon: string },
          index: number
        ) => {
          return <FeatureItem key={index} feature={feature} index={index} />;
        }
      )}
    </section>
  );
}
