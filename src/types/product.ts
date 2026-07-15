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

export interface Product {
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

  subscriptionPlans: string[];

  api: ProductApiConfig;

  active: boolean;
}
