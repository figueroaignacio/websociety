// Components
import { LinkWithTransition } from "../link-with-transition";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Icons - Images
import { ArrowRight } from "lucide-react";

// Animations
import "@/styles/animations.css";

export function PostsCta() {
  return (
    <Card className="shadow-custom-card text-center relative flex z-20">
      <div className="w-full h-full absolute flex -z-10 left-0 lg:h-full lg:px-0 right-0 py-9">
        <div className="w-full border-border border-y border-dashed"></div>
        <div className="w-full border-border border-y border-dashed"></div>
      </div>
      <CardHeader className="gap-4">
        <CardTitle>Do you want to explore more posts?</CardTitle>
        <CardDescription>
          Discover and Read more articles about web development.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <LinkWithTransition
          href="/posts"
          className={`${buttonVariants({
            variant: "default",
          })} flex items-center gap-3 relative`}
        >
          Explore
          <ArrowRight
            size={".85rem"}
            className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
          />
        </LinkWithTransition>
      </CardFooter>
    </Card>
  );
}
