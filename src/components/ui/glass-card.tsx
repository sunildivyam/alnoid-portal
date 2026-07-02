import { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border",
        "bg-background/70",
        "backdrop-blur-xl",
        "shadow-lg",
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
