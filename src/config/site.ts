// site name, URL, SEO defaults
export const siteConfig = {
  name: "Alnoid",
  shortName: "Alnoid",
  title: "Alnoid | AI Powered Multi-Tenant SaaS Platforms",
  description:
    "Build, launch and scale enterprise-grade SaaS platforms using AI, Cloud, Digital Twins and modern web technologies.",

  company: {
    legalName: "Alnoid",
    email: "contact@alnoid.com",
    supportEmail: "support@alnoid.com",
  },

  urls: {
    website: "https://alnoid.com",
    api: "https://api.alnoid.com",
  },

  seo: {
    keywords: [
      "AI",
      "SaaS",
      "Cloud",
      "Next.js",
      "Digital Twins",
      "News Platform",
      "Jobs Platform",
      "Ecommerce",
      "Multi Tenant",
      "Web Development",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
