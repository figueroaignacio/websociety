// Components
import { LinkWithTransition } from "../link-with-transition";
import { buttonVariants } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

// Icons - Images
import { ArrowRight } from "lucide-react";

// Animations
import "@/styles/animations.css";

export function PostsCta() {
  return (
    <Card className="relative z-20">
      <div className="w-full h-full absolute -z-10 flex flex-row justify-between left-0 py-12 right-0">
        <div className="w-full h-full border-border border-y border-dashed"></div>
        <div className="w-full h-full border-border border-y border-dashed"></div>
      </div>
      <div className="py-12">
        <CardHeader className="gap-4">
          <div className="flex justify-between flex-wrap gap-3">
            <div>
              <CardTitle>Do you want to explore more articles?</CardTitle>
              <CardDescription>
                Read articles about web development.
              </CardDescription>
            </div>
            <div>
              <LinkWithTransition
                href="/posts"
                className={`${buttonVariants({
                  variant: "default",
                })} flex items-center gap-3 group`}
              >
                Explore
                <ArrowRight
                  size={".85rem"}
                  className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
                />
              </LinkWithTransition>
            </div>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
}
