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
    <Card className="shadow-custom-card py-12">
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
    </Card>
  );
}
