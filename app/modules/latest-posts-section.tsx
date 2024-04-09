"use client";

// Components
import { PostCard } from "@/components/PostCard";
import { SkeletonPostCard } from "@/components/Skeletons/SkeletonPostCard";

// Utils
import { usePosts } from "@/hooks/usePosts";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PortableText } from "@portabletext/react";

export function LatestPostsSection() {
  const { posts, isError, isLoading } = usePosts();

  if (isLoading) {
    return (
      <section className="py-10 flex flex-col gap-6">
        <h2 className="font-bold text-3xl inline-block bg-gradient-to-r text-transparent bg-clip-text dark:from-gray-400 dark:via-gray-700 dark:to-gray-950 from-gray-900 via-gray-600 to-gray-300 fade">
          Latest Posts
        </h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          <SkeletonPostCard className="col-span-2" />
          <SkeletonPostCard />
          <SkeletonPostCard />
          <SkeletonPostCard className="col-span-2" />
        </div>
      </section>
    );
  }

  if (isError) {
    return <p>Error</p>;
  }

  const sortedPosts = posts.sort(
    (
      a: { publishedAt: string | number | Date },
      b: { publishedAt: string | number | Date }
    ) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const firstFourPosts = sortedPosts.slice(0, 4);

  return (
    <section className="py-10 flex flex-col gap-6">
      <h2 className="font-bold text-3xl inline-block bg-gradient-to-r text-transparent bg-clip-text dark:from-gray-400 dark:via-gray-700 dark:to-gray-950 from-gray-900 via-gray-600 to-gray-300 fade">
        Latest Posts
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {firstFourPosts.map((post: any, i: number) => (
          <Dialog key={i}>
            <DialogTrigger
              className={`${
                i === 0 || i === 3 ? "lg:col-span-2" : ""
              } h-full w-full`}
            >
              <PostCard title={post.title} author={post.author} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{post.title}</DialogTitle>
                <DialogDescription>
                  <PortableText value={post.body} />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
