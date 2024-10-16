export type MetadataParams = {
  params: {
    locale: string;
  };
};

export type Locale = "es" | "en";

export type Navigation = {
  icon:
    | "home"
    | "articles"
    | "guides"
    | "resources"
    | "analytics"
    | "customers"
    | "settings"
    | "help";
  title: string;
  href: string;
};
