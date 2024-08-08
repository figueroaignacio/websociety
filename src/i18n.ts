import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./services/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const modules = ["hero", "features", "navigation"];
  const messages = {};

  try {
    for (const moduleName of modules) {
      const moduleMessages = await import(
        `./locales/${locale}/${moduleName}.json`
      );
      Object.assign(messages, moduleMessages.default);
    }
  } catch (error) {
    console.error("Error al cargar los módulos de localización:", error);
  }

  return {
    locale,
    messages,
  };
});
