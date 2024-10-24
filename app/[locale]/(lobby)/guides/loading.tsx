// Components
import { Card, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingGuides() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-[calc(100%+2rem)] ml-[-1rem] h-[calc(12rem+2.5rem)] mt-[-1.25rem]"></div>
      <section className="relative -mt-20 flex flex-col justify-center items-center border py-6 sm:py-8 md:py-12 rounded-md shadow-sm bg-card mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="space-y-2 flex flex-col justify-center items-center">
          <Skeleton className="w-44 h-5 lg:w-60 lg:h-8" />
          <Skeleton className="w-60 h-3 lg:w-96 lg:h-6" />
        </div>
        <ul className="grid gap-4 grid-cols-1 w-full mt-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
              <Card className="flex-row items-center justify-between px-8 py-6">
                <CardTitle>
                  <Skeleton className="w-80 h-5" />
                </CardTitle>
                <Skeleton className="w-5 h-5" />
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
