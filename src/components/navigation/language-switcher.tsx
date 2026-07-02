"use client";

import { Languages } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-muted-foreground" />

      <Select defaultValue="en">
        <SelectTrigger className="w-[110px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="en">🇬🇧 English</SelectItem>

          <SelectItem value="hi">🇮🇳 हिन्दी</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
