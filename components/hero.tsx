// Components
import { Badge } from "@/components/ui/badge";

// Constants
import { home } from "@/constants/home";

export function Hero() {
  return (
    <section className="flex flex-col gap-3 justify-center items-center py-32 lg:py-52 text-center">
      <Badge
        variant="outline"
        className="px-4 text-sm bg-violet-600 text-white"
      >
        {home.badge}
      </Badge>
      <h1 className="font-bold text-4xl lg:text-7xl">
        Welcome to <span className="gradient-text">{home.title}</span>
      </h1>
      <p className="text-sm opacity-70">{home.description}</p>
    </section>
  );
}
