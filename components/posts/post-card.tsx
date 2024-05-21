// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="duration-150 flex-1 fade shadow-sm w-full h-full">
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
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="text-pretty text-lg">{title}</CardTitle>
          <CardDescription className="leading-10 text-pretty text-sm">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
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
          {/* <div className="flex flex-wrap gap-2 text-xs">
              {categoryData && categoryData.length > 0
                ? categoryData.map((category, index) => (
                    <Badge variant="chip" key={index}>
                      {category.title || null}
                    </Badge>
                  ))
                : null}
            </div> */}
        </CardFooter>
      </div>
    </Card>
  );
}
