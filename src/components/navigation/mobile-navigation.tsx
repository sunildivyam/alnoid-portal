"use client";

import { Link, usePathname } from "@/i18n";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";

import { mainNavigation } from "@/config";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

export function MobileNavigation() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const tCommon = useTranslations("Common");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[320px] sm:w-[360px]">
        <div className="mt-8 flex h-full flex-col justify-between">
          <div className="flex flex-col gap-6 px-2">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {t(item.name)}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t pt-6 px-2">
            <div className="flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>

            <Button variant="ghost" asChild className="justify-start">
              <Link href={ROUTES.SIGN_IN}>{tCommon("signIn")}</Link>
            </Button>

            <Button asChild className="justify-start text-center">
              <Link href={ROUTES.PRODUCTS}>{tCommon("getStarted")}</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
