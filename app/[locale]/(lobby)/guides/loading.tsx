// Components
import { GuideCardSkeleton } from "@/components/guides/guide-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingGuides() {
  return (
    <section className="flex flex-col gap-12 max-w-4xl mx-auto lg:px-5 lg:py-12 py-4">
      <Skeleton className="w-52 lg:w-96 h-6 mx-auto" />
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <li className="h-full" key={index}>
            <GuideCardSkeleton />
          </li>
        ))}
      </ul>
    </section>
  );
}
