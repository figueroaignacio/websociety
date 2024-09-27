// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function GuideCardSkeleton() {
  return (
    <Card className="transition-shadow duration-300 overflow-hidden relative">
      <CardHeader className="bg-popover text-center">
        <CardTitle className="text-2xl font-bold p-12">
          <Skeleton className="w-3/4 h-5 mx-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <CardDescription className="text-center text-pretty flex flex-col gap-1">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-5/6 h-3 mx-auto" />
          <Skeleton className="w-3/6 h-3 mx-auto" />
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Skeleton className="w-full h-7" />
      </CardFooter>
    </Card>
  );
}
