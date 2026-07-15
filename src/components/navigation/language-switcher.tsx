"use client";

import { Languages } from "lucide-react";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher() {
  const locale = useLocale();

  const pathname = usePathname();

  const router = useRouter();

  function changeLanguage(value: string) {
    router.replace(pathname, {
      locale: value,
    });
  }

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4" />

      <Select value={locale} onValueChange={changeLanguage}>
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="en">🇺🇸 English</SelectItem>

          <SelectItem value="hi">🇮🇳 हिन्दी</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
