"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { mainNavigation } from "@/config";

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="mt-10 flex flex-col gap-6">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
