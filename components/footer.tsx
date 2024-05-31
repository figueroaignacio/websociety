// Components
import { LinkWithTransition } from "./link-with-transition";

// Icons
import { Code2 } from "lucide-react";

// Constants
import { navigationConfig } from "@/config/navigation";
import { footer } from "@/constants/footer";

export function Footer() {
  return (
    <footer className="flex flex-col gap-3 py-12 md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-3xl text-pretty flex items-center gap-2">
          <Code2 />
          {footer.title}
        </h2>
        <p className="text-sm">{footer.subtitle}</p>
        <ul className="flex flex-col gap-2 py-2">
          {navigationConfig.map((navItem, index) => (
            <li key={index} className="flex items-center">
              <LinkWithTransition href={navItem.href}>
                {navItem.title}
              </LinkWithTransition>
            </li>
          ))}
        </ul>
        <p>
          Developed for fun by{" "}
          <a href={footer.href} className="border-b-[.0625rem] border-white">
            {footer.author}
          </a>
        </p>
        <p className="text-xs">{footer.paragraph}</p>
      </div>
    </footer>
  );
}
