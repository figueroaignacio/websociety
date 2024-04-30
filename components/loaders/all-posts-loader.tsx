// Components
import { PostCardLoader } from "@/components/loaders/post-card-loader";

// Utils
import { allPosts } from "@/constants/posts";

export function AllPostsLoader() {
  return (
    <section className="py-10">
      <div className=" flex flex-col gap-5">
        <div className="flex flex-col gap-3 justify-center py-52 lg:py-56 text-center">
          <h3 className="font-bold text-5xl lg:text-7xl">{allPosts.title}</h3>
          <p className="text-xs lg:text-lg opacity-75">
            {allPosts.description}
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center pt-10">
          <PostCardLoader />
          <PostCardLoader />
          <PostCardLoader />
          <PostCardLoader className="lg:col-span-2" />
          <PostCardLoader />
          <PostCardLoader />
          <PostCardLoader className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
