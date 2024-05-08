import { Badge } from "../ui/badge";

// Constants
import { home } from "@/constants/home";

export function HomeSection() {
  return (
    <section className="flex flex-col gap-3 justify-center items-center py-40 text-center">
      <Badge variant={"outline"} className="px-5 py-2 text-sm">
        Hello world!
      </Badge>
      <h1 className="font-bold text-5xl lg:text-7xl ">
        Discover <span className="gradient-text">{home.title}</span>
      </h1>
      <p className="text-xs lg:text-lg opacity-70">{home.description}</p>
    </section>
  );
}
