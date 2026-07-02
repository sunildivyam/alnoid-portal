import Link from "next/link";

import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-md">
        A
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight">Alnoid</span>

        <span className="text-xs text-muted-foreground">
          AI Powered Platforms
        </span>
      </div>
    </Link>
  );
}
