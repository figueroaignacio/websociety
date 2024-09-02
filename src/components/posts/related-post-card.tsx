// Components
import { Link } from "@/config/navigation";

// Icons
import { ArrowUpRight } from "lucide-react";

interface RelatedPostCardProps {
  title: string;
  slug: string;
}

export function RelatedPostCard({ title, slug }: RelatedPostCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="flex justify-between items-center py-4 px-4 rounded-lg transition-all duration-150 transform hover:scale-[1.03] bg-card border shadow-sm"
    >
      <h4 className="text-sm">{title}</h4>
      <ArrowUpRight className="ml-2 transition-transform duration-150 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}
