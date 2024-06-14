// Components
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Icons
import { ArrowRight } from "lucide-react";

export function GuideCta() {
  return (
    <Card className="shadow-custom-card flex items-center justify-between py-12 flex-wrap">
      <CardHeader>
        <CardTitle>Looking to Enhance Your Skills?</CardTitle>
        <CardDescription>
          Explore our guides and start learning today.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          href="/guides"
          className={`${buttonVariants({
            variant: "outline",
          })} flex items-center gap-3 group`}
        >
          Get Started
          <ArrowRight
            size={".85rem"}
            className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
          />
        </Link>
      </CardFooter>
    </Card>
  );
}
