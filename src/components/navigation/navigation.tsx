"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation } from "@/config";
import { cn } from "@/lib/cn";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {mainNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
