// Components
import Link from "next/link";
import { LinkWithTransition } from "./link-with-transition";
import { Separator } from "./ui/separator";

// Icons
import { Copyright, Github, RssIcon } from "lucide-react";

// Constants
import { footer } from "@/constants/footer";

// Config
import { navigationConfig } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="py-12 md:py-16 lg:py-20">
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-center py-12">
        <div>
          <div>
            <h4 className="text-lg font-semibold">{footer.title}</h4>
            <p className="text-muted-foreground">{footer.subtitle}</p>
          </div>
          <nav>
            <ul className="flex flex-col gap-2 py-2">
              {navigationConfig.map((navItem, index) => (
                <li key={index} className="flex items-center">
                  <LinkWithTransition href={navItem.href}>
                    {navItem.title}
                  </LinkWithTransition>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <p className="text-muted-foreground">{footer.paragraph}</p>
        </div>
      </div>
      <div className="mt-8 md:mt-12 text-center text-muted-foreground text-sm">
        <div className="flex items-center justify-center space-x-2">
          <Copyright className="h-4 w-4" />
          <span>{footer.copyright}</span>
        </div>
        <div className="flex justify-center my-3 gap-3">
          <Link href="/sitemap.xml" target="_blank">
            <RssIcon />
          </Link>
          <Link
            href="https://github.com/figueroaignacio/frontendsociety"
            target="_blank"
          >
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
}
