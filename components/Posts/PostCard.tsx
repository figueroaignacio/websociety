// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Icons
import { Calendar } from "lucide-react";

// Utils
import { formatDate } from "@/lib/utils";

// Next
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface ArticleCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export function PostCard({ title, date, description, slug }: ArticleCardProps) {
  return (
    <Card className="group duration-150 flex-1 fade shadow-sm">
      <div className="shadow-dark-box-shadow-card rounded-lg">
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
          <CardDescription className="leading-10 text-pretty text-sm">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link
            href={slug}
            className={`${buttonVariants({
              variant: "postButton",
            })} w-full bg-purple-700 `}
          >
            Read More
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
