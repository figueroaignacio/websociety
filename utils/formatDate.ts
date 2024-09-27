export function formatDate(input: string | number, locale: string) {
  const date = new Date(input);

  const localeMap: { [key: string]: string } = {
    en: "en-US",
    es: "es-AR",
  };
  const fullLocale = localeMap[locale] || "en-US";

  return date.toLocaleDateString(fullLocale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
