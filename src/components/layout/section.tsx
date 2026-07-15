import { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { Container } from "./container";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  spacing?: "none" | "sm" | "md" | "lg";
  background?: "transparent" | "default" | "muted" | "primary";
}

export function Section({
  children,
  className,
  spacing = "lg",
  container = true,
  background = "transparent",
  ...props
}: SectionProps) {
  const content = container ? <Container>{children}</Container> : children;

  return (
    <section
      className={cn(
        "relative w-full",
        {
          "py-0": spacing === "none",
          "py-12 lg:py-16": spacing === "sm",
          "py-16 lg:py-24": spacing === "md",
          "py-24 lg:py-32": spacing === "lg",
          "bg-background": background === "default",
          "bg-muted/40": background === "muted",
          "bg-primary text-primary-foreground": background === "primary",
        },
        className,
      )}
      {...props}
    >
      {content}
    </section>
  );
}
