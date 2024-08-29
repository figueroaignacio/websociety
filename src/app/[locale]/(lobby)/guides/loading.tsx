// Components
import {
  Card,
  CardContent,
  CardDescription,
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
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-32 h-4" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="gap-2 flex flex-col">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <Skeleton className="w-full h-3" key={index} />
                  ))}
                </CardDescription>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
