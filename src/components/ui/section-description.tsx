import { cn } from "@/lib/cn";

interface SectionDescriptionProps {
  children: React.ReactNode;

  className?: string;
}

export function SectionDescription({
  children,
  className,
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
