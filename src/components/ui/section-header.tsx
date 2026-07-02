import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  title: React.ReactNode;

  description?: React.ReactNode;

  centered?: boolean;

  className?: string;
}

export function SectionHeader({
  title,
  description,

  centered = true,

  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",

        centered && "text-center",

        className,
      )}
    >
      <h2 className="section-title">{title}</h2>

      {description && (
        <p
          className={cn(
            "section-description mt-6",

            centered && "mx-auto max-w-3xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
