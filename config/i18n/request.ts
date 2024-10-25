// next-intl
import { getRequestConfig } from "next-intl/server";

// Utils
import { notFound } from "next/navigation";
import { routing } from "./routing";

// Constants
import { namespaces } from "@/constants/namespaces";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = {};

  for (const section of namespaces) {
    try {
      const sectionMessages = (
        await import(`@/locales/${locale}/${section}.json`)
      ).default;
      Object.assign(messages, sectionMessages);
    } catch (error) {
      return notFound();
    }
  }

  return {
    locale,
    messages,
  };
});
