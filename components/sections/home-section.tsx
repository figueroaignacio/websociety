// Constants
import { home } from "@/constants/home";

export function HomeSection() {
  return (
    <section className="flex flex-col gap-3 justify-center py-52 lg:py-60">
      <h1 className="font-bold text-5xl lg:text-8xl inline-block bg-gradient-to-r text-transparent bg-clip-text dark:from-gray-400 dark:via-gray-700 dark:to-gray-950 from-gray-900 via-gray-600 to-gray-300">
        {home.title}
      </h1>
      <p className="text-xs lg:text-sm opacity-70">{home.description}</p>
    </section>
  );
}
