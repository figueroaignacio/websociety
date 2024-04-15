// Components
import { PostCardLoader } from "@/components/loaders/post-card-loader";

export function AllPostsLoader() {
  return (
    <section className="py-10">
      <div className=" flex flex-col gap-5">
        <div className="flex flex-col gap-3 justify-center py-52 lg:py-56">
          <h3 className="font-bold text-5xl lg:text-8xl inline-block bg-gradient-to-r text-transparent bg-clip-text dark:from-gray-400 dark:via-gray-700 dark:to-gray-950 from-gray-900 via-gray-600 to-gray-300">
            Posts
          </h3>
          <p className="text-xs lg:text-sm opacity-75">
            In this section you are going to find quick posts as tips and
            advices.
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
