import { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { radius, shadows } from "@/lib/design-tokens";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        radius.xl,
        shadows.lg,
        "border",
        "bg-background/70",
        "backdrop-blur-xl",
        "transition-all",
        "duration-300",
        "hover:-translate-y-1",
        "hover:shadow-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
