import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./services/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const modules = ["hero"];

  const messages = {};

  for (const moduleName of modules) {
    const moduleMessages = await import(
      `./locales/${locale}/${moduleName}.json`
    );
    Object.assign(messages, moduleMessages.default);
  }

  return {
    locale,
    messages,
  };
});
