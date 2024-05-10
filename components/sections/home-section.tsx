// Components
import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

// Icons
import { Github } from "lucide-react";

// Constants
import { home } from "@/constants/home";

export function HomeSection() {
  return (
    <section className="flex flex-col gap-3 justify-center items-center py-40 text-center">
      <Badge variant={"outline"} className="px-4 text-sm border-violet-600">
        Hello world 🚀
      </Badge>
      <h1 className="font-bold text-5xl lg:text-7xl">
        Discover <span className="gradient-text">{home.title}</span>
      </h1>
      <p className="text-sm opacity-70">{home.description}</p>
      <div className="flex gap-2">
        {home.url.map((path, index) => {
          let icon;
          switch (path.icon) {
            case "github":
              icon = <Github size=".75rem" />;
              break;
            default:
              icon = null;
          }
          return (
            <div key={index}>
              <Link
                href={path.path}
                className={`${buttonVariants({
                  variant: "navItem",
                })} flex items-center gap-2 border-[.0625rem] border-gray/25`}
              >
                {path.title}
                {icon}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
