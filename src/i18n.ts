import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const namespaces = [
    "hero",
    "posts",
    "features",
    "localeSwitcher",
    "navigation",
  ];
  const messages = {};

  for (const section of namespaces) {
    try {
      const sectionMessages = (
        await import(`../src/locales/${locale}/${section}.json`)
      ).default;
      Object.assign(messages, sectionMessages);
    } catch (error) {
      console.error(`Error xd ${locale}`, error);
    }
  }

  return {
    messages,
  };
});
