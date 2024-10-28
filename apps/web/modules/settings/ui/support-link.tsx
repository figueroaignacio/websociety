import { Button } from "@/components/ui/button";

type SupportLinkProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
};

export const SupportLink: React.FC<SupportLinkProps> = ({
  href,
  title,
  icon,
}) => (
  <Button variant="outline" className="w-full justify-between" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
      {icon}
    </a>
  </Button>
);
