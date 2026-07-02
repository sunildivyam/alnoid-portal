import type { BaseEntity } from "./common";
import type { SubscriptionPlan } from "./subscription";

export interface ProductApiConfig {
  apiBaseUrl: string;

  authApiUrl: string;

  dashboardUrl: string;

  signInUrl: string;

  signUpUrl: string;
}

export interface ProductHero {
  title: string;

  subtitle: string;

  image: string;
}

export interface ProductFeature {
  title: string;

  description: string;

  icon: string;
}

export interface Product extends BaseEntity {
  slug: string;

  name: string;

  shortName: string;

  tagline: string;

  shortDescription: string;

  description: string;

  logo: string;

  hero: ProductHero;

  color: string;

  highlights: string[];

  features: ProductFeature[];

  subscriptionPlans: SubscriptionPlan[];

  api: ProductApiConfig;

  active: boolean;
}
