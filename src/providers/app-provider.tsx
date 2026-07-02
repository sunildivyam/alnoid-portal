"use client";

import * as React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./query-provider";

export interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
