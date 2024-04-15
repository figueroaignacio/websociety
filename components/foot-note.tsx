// Icons
import { Code2 } from "lucide-react";

// Constants
import { footer } from "@/constants/footer";

export function FootNote() {
  return (
    <footer className="flex flex-col gap-3 py-12 md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-3xl text-pretty flex items-center gap-2">
          <Code2 />
          {footer.title}
        </h2>
        <p className="text-xs">
          {footer.subtitle} <a href={footer.href}>{footer.author}</a>
        </p>
      </div>
      <div>
        <p className="text-xs">
          Using Next.js, Typescript, Tailwind, Shadcn & Sanity 🚀
        </p>
      </div>
    </footer>
  );
}
