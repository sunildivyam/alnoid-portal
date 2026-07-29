import { NextRequest, NextResponse } from "next/server";
import { readNbuildExternalArticle } from "@/external-article-readers/actions/readNbuildExternalArticle";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  try {
    // 2. Fetch raw HTML with standard browser headers
    const response = await readNbuildExternalArticle(targetUrl);

    // 5. Return Structured JSON Output
    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
      },
    });
  } catch (error) {
    console.error("API Article Fetch Error:", error);
    return NextResponse.json(error);
  }
}
