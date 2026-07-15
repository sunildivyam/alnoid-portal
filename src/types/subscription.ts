export type SubscriptionPlanType = "basic" | "professional" | "enterprise";

export interface SubscriptionPricing {
  currency: string;
  monthlyPrice: number;
  yearlyPrice?: number;
}

export interface SubscriptionPlanFeatures {
  countries: number | "unlimited";
  languages: number | "unlimited";
  categories: number | "unlimited";

  maxUsers: number | "unlimited";

  aiGeneratedArticlesPerDay: number | "unlimited";
  aiGeneratedArticlesPerMonth: number | "unlimited";

  customArticlesPerDay: number | "unlimited";
  maxDraftArticles: number | "unlimited";

  publicPageRequestsPerMonth: number | "unlimited";
  concurrentRequestsPerSecond: number | "unlimited";

  imageStorageMB: number | "unlimited";
  imageRequestsPerMonth: number | "unlimited";

  videoStorageMB: number | "unlimited";
  videoRequestsPerMonth: number | "unlimited";

  adminDashboard: boolean;
  authorDashboard: boolean;
  publisherDashboard: boolean;

  analytics: boolean;

  tenantGoogleAdsIntegration: boolean;
  platformAdsEnabled: boolean;
}

export interface SubscriptionPlan {
  code: SubscriptionPlanType;

  name: string;

  description: string;

  pricing: SubscriptionPricing;

  features: SubscriptionPlanFeatures;

  popular?: boolean;

  active: boolean;
}
