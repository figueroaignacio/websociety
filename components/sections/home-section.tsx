// Constants
import { home } from "@/constants/home";

export function HomeSection() {
  return (
    <section className="flex flex-col gap-3 justify-center py-52 lg:py-60">
      <h1 className="font-bold text-5xl lg:text-8xl opacity-75">
        {home.title}
      </h1>
      <p className="text-xs lg:text-sm opacity-70">{home.description}</p>
    </section>
  );
}
