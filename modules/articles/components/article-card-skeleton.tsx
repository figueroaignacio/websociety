// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ArticleCardSkeleton() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-48 h-4" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton className="w-72 h-4" key={index} />
          ))}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex gap-3 items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton className="w-16 h-4" key={index} />
          ))}
        </div>
        <Skeleton className="w-full h-8" />
      </CardFooter>
    </Card>
  );
}
