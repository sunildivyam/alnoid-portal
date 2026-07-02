import type { Metadata } from "next";
import "@/styles/global.css";

import { AppProvider } from "@/providers";
import { MainLayout } from "@/components/layout/main-layout";

export const metadata: Metadata = {
  title: "Alnoid",
  description: "AI Powered SaaS Platforms for Enterprises",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
