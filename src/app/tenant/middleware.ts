import { NextRequest, NextResponse } from "next/server";

export default async function proxy(request: NextRequest, response: NextResponse) {
  // middleware to identify tenant
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // 2. Extract Tenant (e.g., tenant1.localhost:3000 or tenant1.example.com)
  // Define your root domains
  const rootDomains = ["localhost:3000", "example.com"];
  let tenant = "";

  for (const rootDomain of rootDomains) {
    if (hostname.endsWith(rootDomain)) {
      tenant = hostname.replace(`.${rootDomain}`, "").replace(rootDomain, "");
      break;
    }
  }

  // If no subdomain, it's the primary main landing page (or handle default)
  if (!tenant || tenant === "www") {
    tenant = "root";
  }

  // 4. Inject the tenant into headers so Server Components can read it
  response.headers.set("x-tenant", tenant);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
