// Components
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// Icons
import { ArrowRight, Code } from "lucide-react";

// Constants
import { home } from "@/constants/home";

export function HomeSection() {
  return (
    <section className="flex flex-col gap-3 justify-center items-center py-40 text-center">
      <Badge
        variant={"outline"}
        className="px-5 py-2 text-sm border-violet-600"
      >
        Hello world!
      </Badge>
      <h1 className="font-bold text-5xl lg:text-7xl">
        Discover <span className="gradient-text">{home.title}</span>
      </h1>
      <p className="text-sm opacity-70">{home.description}</p>
      <div className="flex gap-2">
        <Button
          variant={"navItem"}
          className="flex items-center gap-2 border-[1px] border-gray/25"
        >
          <Link href={"/articles"}>View Articles</Link>
          <ArrowRight size={".75rem"} />
        </Button>
        <Button
          variant={"navItem"}
          className="flex items-center gap-2 border-[1px] border-gray/25"
        >
          <Link
            href={"https://github.com/figueroaignacio/frontsociety"}
            target="_blank"
          >
            Source
          </Link>
          <Code size={".75rem"} />
        </Button>
      </div>
    </section>
  );
}
