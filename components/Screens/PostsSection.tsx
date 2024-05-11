"use client";

// Components
import { AllPostsLoader } from "@/components/Posts/AllPostsLoader";
import { PostCard } from "@/components/Posts/PostCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Constants
import { allPosts } from "@/constants/posts";

// Utils
import { usePosts } from "@/hooks/usePosts";
import { PortableText } from "@portabletext/react";

export function PostsSection() {
  const { isError, isLoading, posts } = usePosts();

  if (isLoading) {
    return <AllPostsLoader />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <section>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 py-20">
          <h1 className="font-bold text-3xl">Read {allPosts.title}</h1>
          <p className="text-xs lg:text-lg opacity-75">
            {allPosts.description}
          </p>
        </div>
        <div
          className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10"
          id="posts"
        >
          {posts.map((post: any, i: number) => (
            <Dialog key={i}>
              <DialogTrigger
                className={`${
                  i === 3 || i === 6 ? "lg:col-span-2" : ""
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
      </div>
    </section>
  );
}
