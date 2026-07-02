import { cn } from "@/lib/cn";

interface PageTitleProps {
  children: React.ReactNode;

  className?: string;
}

export function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1
      className={cn("text-4xl font-bold tracking-tight lg:text-6xl", className)}
    >
      {children}
    </h1>
  );
}
