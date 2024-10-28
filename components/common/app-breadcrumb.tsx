"use client";

// Hooks
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface NavigationItem {
  title: string;
  href: string;
  icon?: string;
}

export function AppBreadcrumb() {
  const t = useTranslations();
  const pathname = usePathname();

  const breadcrumbs = getBreadcrumbs(pathname, t);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => (
          <BreadcrumbItem key={item.href}>
            {index < breadcrumbs.length - 1 ? (
              <>
                <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{item.title}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function getBreadcrumbs(
  pathname: string,
  t: (key: string, params?: Record<string, string>) => string
): NavigationItem[] {
  const navigation: NavigationItem[] = JSON.parse(
    t("sidebarNavigation", { defaultValue: "[]" })
  );
  const home: NavigationItem = JSON.parse(
    t("navigationHome", { defaultValue: "{}" })
  );

  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];
  const knownLocales = ["es", "en"];

  if (knownLocales.includes(firstSegment)) {
    pathSegments.shift();
  }

  const breadcrumbs: NavigationItem[] = [{ ...home, href: "/" }];
  let currentPath = "";

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const navItem = navigation.find((item) => item.href === currentPath);

    const title = formatTitle(segment);

    if (navItem) {
      breadcrumbs.push(navItem);
    } else {
      breadcrumbs.push({
        href: currentPath,
        title,
      });
    }
  });

  return breadcrumbs;
}

function formatTitle(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
