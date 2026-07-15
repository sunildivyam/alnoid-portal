import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { ProxyMiddleware } from "./types";

export default async function compose(middlewares: ProxyMiddleware[]) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    let response = NextResponse.next();

    for (const middleware of middlewares) {
      response = await middleware(request, event, response);
      // Stop pipeline if redirected / rewrite
      if (
        response.headers.get("location") ||
        response.headers.get("x-middleware-rewrite")
      ) {
        break;
      }
    }
    return response;
  };
}
