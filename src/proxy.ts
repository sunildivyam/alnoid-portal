import { NextRequest, NextResponse } from "next/server";
import i18nProxy from "@/i18n/middleware";

export default async function proxy(request: NextRequest, response: NextResponse) {
  // middleware to identify tenant

  // i18n middlewre to prefix locale name in the routes, eg./en/about
  response = i18nProxy(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
