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
import { ArrowUpRight, Calendar } from "lucide-react";

// Utils
import { formatDate } from "@/utils/formatDate";

// Next
import Link from "next/link";

interface ArticleCardProps {
  title?: string;
  date: string;
  description?: string;
  slug?: string;
  className?: string;
}

export function PostCard({
  title,
  date,
  description,
  slug,
  className,
}: ArticleCardProps) {
  return (
    <Link href={`/${slug}`} className={`${className}`}>
      <Card className="group duration-150 flex-1 fade shadow-sm hover:shadow-lg hover:backdrop-brightness-110 transition-all ease-in-out">
        <div className="rounded-md shadow-dark-box-shadow-card">
          <CardHeader className="flex flex-row justify-between items-center relative">
            <dl className="flex text-xs">
              <dt className="sr-only">Published at</dt>
              <dd className="flex items-center gap-2">
                <Calendar size={12} />
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
            <div className="flex justify-center items-center gap-1 text-xs">
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read More
              </p>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <CardTitle className=" text-pretty text-lg">{title}</CardTitle>
            <CardDescription className="leading-10 text-pretty text-sm">
              {description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-5 md:flex-col md:justify-between">
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
    </Link>
  );
}
