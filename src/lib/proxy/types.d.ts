import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export type ProxyMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse,
) => Promise<NextResponse> | NextResponse;
