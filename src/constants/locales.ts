export const DEFAULT_LOCALE = "en";

export const LOCALES = ["en", "hi"] as const;

export type Locale = (typeof LOCALES)[number];
