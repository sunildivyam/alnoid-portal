import { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { spacing } from "@/lib/design-tokens";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;

  size?: "sm" | "md" | "lg";
}

export function Section({
  children,
  className,
  size = "lg",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full",
        {
          [spacing.sm]: size === "sm",
          [spacing.md]: size === "md",
          [spacing.lg]: size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
