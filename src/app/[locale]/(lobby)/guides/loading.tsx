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

export default function LoadingGuides() {
  return (
    <section className="flex flex-col gap-12 mt-24 max-w-4xl mx-auto">
      <Skeleton className="w-52 lg:w-96 h-6 mx-auto" />
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <li className="h-full" key={index}>
            <Card className="transition-shadow duration-300 overflow-hidden relative">
              <CardHeader className="bg-popover text-center">
                <CardTitle className="text-2xl font-bold p-12">
                  <Skeleton className="w-3/4 h-4 mx-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-center text-pretty flex flex-col gap-2">
                  <Skeleton className="w-full h-2" />
                  <Skeleton className="w-5/6 h-2 mx-auto" />
                  <Skeleton className="w-3/6 h-2 mx-auto" />
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Skeleton className="w-full h-8" />
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
