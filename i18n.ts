import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en", "es"];

import { namespaces } from "./constants/namespaces";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages = {};

  for (const section of namespaces) {
    try {
      const sectionMessages = (
        await import(`./locales/${locale}/${section}.json`)
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
