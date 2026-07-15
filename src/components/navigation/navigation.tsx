"use client";

import { Link, usePathname } from "@/i18n";

import { mainNavigation } from "@/config";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

export function Navigation() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  return (
    <nav className="hidden items-center justify-center gap-8 lg:flex">
      {mainNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {t(item.name)}
        </Link>
      ))}
    </nav>
  );
}
