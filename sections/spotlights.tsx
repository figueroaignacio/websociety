import { useTranslations } from "next-intl";
import { SpotlightCard } from "../components/spotlight-card";

export function Spotlights() {
  const t = useTranslations();
  const spotlight = t.raw("features");

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-3xl">
      {spotlight.map(
        (
          spotlight: { title: string; description: string; icon: string },
          index: number
        ) => {
          return (
            <div
              className={`${index === 2 ? "lg:col-span-4" : "lg:col-span-2"}`}
              key={index}
            >
              <SpotlightCard spotlight={spotlight} />
            </div>
          );
        }
      )}
    </section>
  );
}
