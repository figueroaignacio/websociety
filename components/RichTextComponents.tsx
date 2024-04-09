import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-cover"
            src={urlForImage(value)}
            alt="Blog post image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg list-decimal">{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-5xl font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-4xl font-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl font-bold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-2xl font-bold">{children}</h4>;
    },
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-violet-700 border-l-8 pl-5">
          {children}
        </blockquote>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-violet-700"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => {
      return (
        <strong className="bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text font-bold">
          {children}
        </strong>
      );
    },
  },
};
