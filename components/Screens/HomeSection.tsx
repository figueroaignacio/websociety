// Components
import { Badge } from "@/components/ui/badge";

// Icons

// Constants
import { home } from "@/constants/home";

export function HomeSection() {
  return (
    <section className="flex flex-col gap-3 justify-center items-center py-40 text-center">
      <Badge
        variant={"outline"}
        className="px-4 text-sm bg-violet-600 text-white"
      >
        By a developer, for developers 🚀
      </Badge>
      <h1 className="font-bold text-5xl lg:text-7xl">
        Discover <span className="gradient-text">{home.title}</span>
      </h1>
      <p className="text-sm opacity-70">{home.description}</p>
    </section>
  );
}
