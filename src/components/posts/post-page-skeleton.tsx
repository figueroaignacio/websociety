// Components
import { Skeleton } from "../ui/skeleton";

export function PostPageSkeleton() {
  return (
    <article className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative top-12">
      <aside className="hidden lg:block lg:col-span-3">
        <div className="p-4 space-y-3">
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
        </div>
      </aside>
      <div className="lg:col-span-6 top-4 relative">
        <div className="flex flex-col">
          <Skeleton className="w-3/4 h-10 mb-4" />
          <div className="flex gap-3 mb-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton className="w-28 h-5" key={index} />
            ))}
          </div>
          <Skeleton className="w-full h-5 mb-6" />
          <Skeleton className="w-full h-6 mb-6" />
          <div className="space-y-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <Skeleton className="w-full h-5" key={index} />
            ))}
          </div>
        </div>
      </div>
      <aside className="lg:col-span-3">
        <div className="p-4 space-y-4">
          <Skeleton className="w-32 h-6 mb-4" />
          <div className="flex flex-col space-y-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                className={`flex flex-col space-y-1 ${
                  index % 3 === 0 ? "ml-0" : index % 3 === 1 ? "ml-4" : "ml-8"
                }`}
                key={index}
              >
                <Skeleton
                  className={`w-${Math.max(20 - (index % 3) * 2, 12)} h-4`}
                />
                <Skeleton
                  className={`w-${Math.max(16 - (index % 3) * 2, 12)} h-3`}
                />
              </div>
            ))}
          </div>
        </div>
      </aside>
      <div className="block lg:hidden mt-8">
        <div className="p-4">
          <Skeleton className="w-full h-48" />
        </div>
      </div>
    </article>
  );
}
