import { Link } from "@/i18n";

import { Logo } from "./logo";

import { legalNavigation, mainNavigation, socialLinks } from "@/config";
import { ROUTES } from "@/constants";
import {
  Facebook,
  Github,
  Instagram,
  // Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "@/components/ui/simple-icons";
import { Container } from "../layout/container";
import { useTranslations } from "next-intl";
import { NavigationItem } from "@/types";

const socialIcons = {
  // linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  email: Mail,
};

export function Footer() {
  const tN = useTranslations("Navigation");
  const tC = useTranslations("Common");
  const tF = useTranslations("Footer");

  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-4">
          <div>
            <Logo />

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {tC("companyTagline2")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{tF("sectionCompany")}</h3>

            <div className="flex flex-col gap-3">
              {mainNavigation
                .filter(
                  (item) =>
                    item.href === ROUTES.ABOUT ||
                    item.href === ROUTES.CONTACT ||
                    item.href === ROUTES.SERVICES,
                )
                .map((item) => {
                  return (
                    <Link key={item.name} href={item.href}>
                      {tN(item.name)}
                    </Link>
                  );
                })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{tF("sectionProducts")}</h3>

            <div className="flex flex-col gap-3">
              {mainNavigation
                .filter((item) => item.href === ROUTES.PRODUCTS)
                .map((item) => (
                  <Link key={item.href} href={item.href}>
                    {tN(item.name)}
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              {tF("sectionLegal")}
            </h3>

            <div className="flex flex-col gap-3">
              {legalNavigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {tN(item.name)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t py-6 lg:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {tC("copyright")}.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon =
                socialIcons[item.iconName as keyof typeof socialIcons];

              if (!Icon) return null;
              <p>Yes</p>;
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
