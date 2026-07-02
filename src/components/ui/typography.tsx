import { cn } from "@/lib/cn";
import { typography } from "@/lib/design-tokens";

interface TypographyProps {
  children: React.ReactNode;

  className?: string;
}

export function Hero({ children, className }: TypographyProps) {
  return <h1 className={cn(typography.hero, className)}>{children}</h1>;
}

export function H1({ children, className }: TypographyProps) {
  return <h1 className={cn(typography.h1, className)}>{children}</h1>;
}

export function H2({ children, className }: TypographyProps) {
  return <h2 className={cn(typography.h2, className)}>{children}</h2>;
}

export function H3({ children, className }: TypographyProps) {
  return <h3 className={cn(typography.h3, className)}>{children}</h3>;
}

export function Body({ children, className }: TypographyProps) {
  return <p className={cn(typography.body, className)}>{children}</p>;
}

export function Lead({ children, className }: TypographyProps) {
  return <p className={cn(typography.lead, className)}>{children}</p>;
}
