import { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>{children}</section>
  );
}
