export type Navigation = {
  icon: "home" | "articles" | "guides" | "resources" | "settings";
  title: string;
  href: string;
};

export interface Heading {
  id: string;
  text: string | null;
  level: number;
}
