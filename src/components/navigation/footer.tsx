import Link from "next/link";

import { Container } from "./container";
import { Logo } from "./logo";

import { legalNavigation, mainNavigation, socialLinks } from "@/config";
import { ROUTES } from "@/constants";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  email: Mail,
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-4">
          <div>
            <Logo />

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              AI Powered Multi-Tenant SaaS Platforms for Enterprises.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>

            <div className="flex flex-col gap-3">
              <Link href={ROUTES.ABOUT}>About</Link>
              <Link href={ROUTES.CONTACT}>Contact</Link>
              <Link href={ROUTES.SERVICES}>Services</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Products</h3>

            <div className="flex flex-col gap-3">
              {mainNavigation
                .filter((item) => item.href === ROUTES.PRODUCTS)
                .map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>

            <div className="flex flex-col gap-3">
              {legalNavigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t py-6 lg:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alnoid. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon =
                socialIcons[item.iconName as keyof typeof socialIcons];

              if (!Icon) return null;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
