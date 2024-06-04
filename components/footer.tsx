// Components
import { LinkWithTransition } from "./link-with-transition";
import { Separator } from "./ui/separator";

// Icons
import { Copyright } from "lucide-react";

// Config
import { navigationConfig } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="py-12 md:py-16 lg:py-20">
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-center py-12">
        <div>
          <h4 className="text-lg font-semibold mb-4">Frontend Society</h4>
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
          <p className="text-gray-600">
            Frontend Society is a thriving community of frontend developers who
            come together to share knowledge, collaborate, and grow their
            skills. We are passionate about building beautiful and user-friendly
            web experiences.
          </p>
        </div>
      </div>
      <div className="mt-8 md:mt-12 text-center text-gray-400 text-sm">
        <div className="flex items-center justify-center space-x-2">
          <Copyright className="h-4 w-4" />
          <span>2024 Frontend Society. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
