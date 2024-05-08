// Constants
import { home } from "@/constants/home";

export function HomeSection() {
  return (
    <section className="flex flex-col gap-3 justify-center py-52 lg:py-60 text-center">
      <h1 className="font-bold text-5xl lg:text-7xl ">
        Discover <span className="gradient-text">{home.title}</span>
      </h1>
      <p className="text-xs lg:text-lg opacity-70">{home.description}</p>
    </section>
  );
}
