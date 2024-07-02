"use client";

// Hooks
import { useTheme } from "next-themes";

// Components
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Icons - Images
import GuidesCtaDark from "@/assets/images/guides-cta-code-dark.svg";
import GuidesCtaLight from "@/assets/images/guides-cta-code-light.svg";
import { ArrowRight } from "lucide-react";

// Animations
import "@/styles/animations.css";

export function GuideCta() {
  const { theme } = useTheme();

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
          src={theme === "dark" ? GuidesCtaDark : GuidesCtaLight}
          alt="Cta coding"
          width={0}
          height={0}
          className="bg-cover rounded-md"
        />
      </CardContent>
    </Card>
  );
}
