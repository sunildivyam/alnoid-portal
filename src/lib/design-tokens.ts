export const spacing = {
  xs: "py-4",
  sm: "py-8",
  md: "py-16 lg:py-24",
  lg: "py-24 lg:py-32",
} as const;

export const radius = {
  sm: "rounded-md",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  full: "rounded-full",
} as const;

export const shadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
} as const;

export const typography = {
  hero: "text-5xl font-bold tracking-tight lg:text-7xl",

  h1: "text-4xl font-bold tracking-tight lg:text-6xl",

  h2: "text-3xl font-bold tracking-tight lg:text-5xl",

  h3: "text-2xl font-semibold",

  body: "text-base leading-7 text-muted-foreground",

  lead: "text-lg leading-8 text-muted-foreground",

  caption: "text-sm text-muted-foreground",
} as const;
