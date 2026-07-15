import { Link } from "@/i18n";

import { cn } from "@/lib/cn";
import { ROUTES } from "@/constants";
import { useTranslations } from "next-intl";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const t = useTranslations("Common");

  return (
    <Link
      href={ROUTES.HOME}
      className={cn("flex items-center gap-3", className)}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-md">
        A
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight">
          {t("companyName")}
        </span>

        <span className="text-xs text-muted-foreground">
          {t("companyTagline1")}
        </span>
      </div>
    </Link>
  );
}
