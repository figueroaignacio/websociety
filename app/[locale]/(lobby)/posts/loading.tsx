// Components
import { PostCardSkeleton } from "@/components/posts/post-card-skeleton";
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
            <div className="py-6 px-4 rounded-lg shadow-sm bg-card">
              <Skeleton className="w-52 h-4 mb-4" />
              <ul className="flex flex-row flex-wrap gap-y-2 gap-x-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <li key={index}>
                    <Skeleton className="w-12 h-4" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <PostCardSkeleton />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
