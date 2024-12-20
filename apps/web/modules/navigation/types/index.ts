export type Navigation = {
  title: string;
  href: string;
};

export interface Heading {
  id: string;
  text: string | null;
  level: number;
}
