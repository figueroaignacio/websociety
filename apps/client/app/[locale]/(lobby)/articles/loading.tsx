// Components
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ArticleCardSkeleton } from "@/modules/articles/ui/article-card-skeleton";

export default function LoadingPosts() {
  return (
    <section className="flex flex-col lg:px-5 lg:py-12 py-4">
      <div className="grid grid-cols-1 gap-8">
        <div className="lg:col-span-4">
          <div className="w-full">
            <Skeleton className="w-96 h-8 mb-3" />
            <Skeleton className="w-52 h-4" />
            <Separator className="my-4" />
            <div className="mt-8 hidden lg:block">
              <Skeleton className="w-52 h-4 mb-4" />
              <ul className="flex flex-row flex-wrap gap-y-2 gap-x-3">
                {Array.from({ length: 14 }).map((_, index) => {
                  const widths = ["w-16", "w-20", "w-24"];
                  const randomWidth =
                    widths[Math.floor(Math.random() * widths.length)];
                  return (
                    <li key={index}>
                      <Skeleton className={`${randomWidth} h-6`} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <ArticleCardSkeleton />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
