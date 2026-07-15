import { ROUTES } from "@/constants";
import type { NavigationItem } from "@/types";

export const mainNavigation: NavigationItem[] = [
  {
    name: "home",
    title: "Home",
    href: ROUTES.HOME,
  },
  {
    name: "products",
    title: "Products",
    href: ROUTES.PRODUCTS,
  },
  {
    name: "services",
    title: "Services",
    href: ROUTES.SERVICES,
  },
  {
    name: "pricing",
    title: "Pricing",
    href: ROUTES.PRICING,
  },
  {
    name: "about",
    title: "About",
    href: ROUTES.ABOUT,
  },
  {
    name: "contact",
    title: "Contact",
    href: ROUTES.CONTACT,
  },
];

export const legalNavigation: NavigationItem[] = [
  {
    name: "privacy",
    title: "Privacy",
    href: ROUTES.PRIVACY,
  },
  {
    name: "terms",
    title: "Terms",
    href: ROUTES.TERMS,
  },
  {
    name: "refundPolicy",
    title: "Refund Policy",
    href: ROUTES.REFUND_POLICY,
  },
  {
    name: "subscriptionPolicy",
    title: "Subscription Policy",
    href: ROUTES.SUBSCRIPTION_POLICY,
  },
];
