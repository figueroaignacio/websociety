// Components
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Image
import GuidesCta from "@/assets/images/guides-cta.svg";

// Icons

// Animations
import "@/styles/animations.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function GuideCta() {
  return (
    <Card className="shadow-custom-card flex flex-col md:flex-row md:items-center pt-8 fade">
      <CardHeader className="gap-4">
        <div>
          <CardTitle>Looking to Enhance Your Skills?</CardTitle>
          <CardDescription>
            Explore our guides and start learning today.
          </CardDescription>
        </div>
        <div>
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
        </div>
      </CardHeader>
      <CardContent>
        <Image
          src={GuidesCta}
          alt="Cta coding"
          width={0}
          height={0}
          className="bg-cover rounded-md"
        />
      </CardContent>
      {/* <CardFooter>

          </CardFooter> */}
    </Card>
  );
}
