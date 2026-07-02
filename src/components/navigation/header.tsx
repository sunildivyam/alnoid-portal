"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";
import { Navigation } from "./navigation";
import { ThemeSwitcher } from "./theme-switcher";
import { ROUTES } from "@/constants";
import { Container } from "../layout/container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <Navigation />

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />

            <ThemeSwitcher />

            <Button variant="ghost" asChild>
              <Link href={ROUTES.SIGN_IN}>Sign In</Link>
            </Button>

            <Button asChild>
              <Link href={ROUTES.PRODUCTS}>Get Started</Link>
            </Button>
          </div>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
