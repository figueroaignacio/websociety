// Components
import { PostCardSkeleton } from "@/components/posts/post-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPosts() {
  return (
    <section>
      <div className="flex flex-col gap-12 mt-24 max-w-4xl mx-auto">
        <div className="flex flex-col gap-3">
          <Skeleton className="w-52 lg:w-96 h-6 mx-auto" />
        </div>
        <div>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
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
