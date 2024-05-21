// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

// Icons
import { ArrowRight, Calendar } from "lucide-react";

// Utils
import { formatDate } from "@/lib/utils";

// Next
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export function PostCard({ title, date, description, slug }: ArticleCardProps) {
  return (
    <Card className="shadow-sm w-full h-full">
      <div>
        <CardHeader className="flex flex-row justify-between items-center relative">
          <dl className="flex text-xs">
            <dt className="sr-only">Published at</dt>
            <dd className="flex items-center gap-2">
              <Calendar size={12} />
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <CardTitle className="text-pretty text-lg">{title}</CardTitle>
          <CardDescription className="leading-10 text-pretty text-sm line-clamp-1">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-5">
          <div className="flex flex-wrap gap-2 text-xs">
            <Badge variant="chip">Test</Badge>
            <Badge variant="chip">Test</Badge>
            <Badge variant="chip">Test</Badge>
          </div>
          <Link
            href={slug}
            className={`${buttonVariants({
              variant: "postButton",
            })}`}
          >
            Read More
            <ArrowRight
              size={16}
              className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
            />
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
