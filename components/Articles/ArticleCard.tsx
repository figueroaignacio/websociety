"use client";

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
import { ArrowUpRight } from "lucide-react";

// Next
import Link from "next/link";

interface ArticleCardProps {
  title?: string;
  publishedAt: string;
  description?: string;
  slug?: string;
  className?: string;
  alt?: string;
}

export function ArticleCard({
  title,
  publishedAt,
  description,
  slug,
  className,
  alt,
}: ArticleCardProps) {
  const originalDate = new Date(publishedAt);
  const formattedDate = originalDate.toLocaleDateString();

  return (
    <Link href={`/article/${slug}`} className={`${className}`}>
      <Card className="group duration-150 flex-1 fade shadow-sm hover:shadow-lg hover:backdrop-brightness-110 transition-all ease-in-out">
        <div className="rounded-md shadow-dark-box-shadow-card">
          <CardHeader className="flex flex-row justify-between items-center relative">
            <p className="text-xs">{formattedDate}</p>
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
