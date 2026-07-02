import { cn } from "@/lib/cn";

interface SectionTitleProps {
  children: React.ReactNode;

  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn("text-3xl font-bold tracking-tight lg:text-5xl", className)}
    >
      {children}
    </h2>
  );
}
