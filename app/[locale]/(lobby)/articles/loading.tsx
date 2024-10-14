// Components
import { ArticleCardSkeleton } from "@/components/articles/article-card-skeleton";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPosts() {
  return (
    <section className="flex flex-col top-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="max-w-2xl mx-auto">
            <Skeleton className="w-96 h-8 mb-3" />
            <Skeleton className="w-52 h-4" />
            <Separator className="my-4" />
            <div className="mt-8">
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
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
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
