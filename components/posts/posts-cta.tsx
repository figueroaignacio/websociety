"use client";

// Hooks
import { useTheme } from "next-themes";

// Components
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

// Icons - Images
import PostsCtaDark from "@/assets/images/posts-cta-dark.svg";
import PostsCtaLight from "@/assets/images/posts-cta-light.svg";
import { ArrowRight } from "lucide-react";

// Animations
import "@/styles/animations.css";

export function PostsCta() {
  const { theme } = useTheme();

  return (
    <Card className="shadow-custom-card flex flex-col md:flex-row md:items-center fade">
      <Image
        src={theme === "dark" ? PostsCtaDark : PostsCtaLight}
        alt="Cta coding"
        width={380}
        height={380}
        className="bg-cover rounded-md"
      />
      <CardHeader className="gap-4">
        <div>
          <CardTitle>Do you want to explore more articles?</CardTitle>
          <CardDescription>
            Read articles about web development.
          </CardDescription>
        </div>
        <div>
          <Link
            href="/guides"
            className={`${buttonVariants({
              variant: "outline",
            })} flex items-center gap-3 group`}
          >
            Explore
            <ArrowRight
              size={".85rem"}
              className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
}
