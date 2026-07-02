import type { Metadata } from "next";
import "./globals.css";

import { AppProvider } from "@/providers";

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
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
