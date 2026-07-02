import { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

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
          "py-12 lg:py-16": size === "sm",
          "py-16 lg:py-24": size === "md",
          "py-24 lg:py-32": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
