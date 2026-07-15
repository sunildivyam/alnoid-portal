import type { ReactNode } from "react";

import { NextIntlClientProvider, hasLocale } from "next-intl";

import { notFound } from "next/navigation";

import { locales } from "@/i18n/config";
import { MainLayout } from "@/components/layout/main-layout";
// import { setRequestLocale } from "next-intl/server";

interface Props {
  children: ReactNode;

  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  console.log(locale, locales);

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  // const messages = (await import(`../../i18n/messages/${locale}.json`)).default;

  // Enable static rendering
  // setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <MainLayout>{children}</MainLayout>
    </NextIntlClientProvider>
  );
}
