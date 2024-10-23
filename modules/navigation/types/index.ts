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

export interface Heading {
  id: string;
  text: string | null;
  level: number;
}
