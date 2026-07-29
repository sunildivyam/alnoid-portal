"use server";

import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";
import DOMPurify from "isomorphic-dompurify";

// Type definition for the return object
export type ArticleResponse = {
  success: boolean;
  data?: {
    title: string;
    byline: string | null;
    dir: string | null;
    lang: string | null;
    excerpt: string | null;
    siteName: string | null;
    content: string;
    textContent: string;
    length: number;
    sourceUrl: string;
    publishedAt?: string | null;
  };
  error?: string;
};

export async function readNbuildExternalArticle(
  targetUrl?: string | null,
): Promise<ArticleResponse> {
  // 1. Parameter Validation
  if (!targetUrl || typeof targetUrl !== "string") {
    return {
      success: false,
      error: "Missing or invalid URL argument.",
    };
  }

  // Basic URL structure check
  try {
    new URL(targetUrl);
  } catch {
    return {
      success: false,
      error: "Invalid URL provided.",
    };
  }

  try {
    // 2. Fetch raw HTML with standard browser headers
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 }, // Cache fetch in Next.js Data Cache for 1 hour
    });

    if (!response.ok) {
      return {
        success: false,
        error: `Failed to fetch target URL. HTTP Status: ${response.status}`,
      };
    }

    const html = await response.text();

    // 3. Load HTML into Virtual DOM and parse with Readability
    const dom = new JSDOM(html, { url: targetUrl });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article) {
      return {
        success: false,
        error: "Unable to extract main article content from the specified URL.",
      };
    }

    // 4. Sanitize HTML output to remove scripts, iframes, and dangerous attributes
    const cleanContent = DOMPurify.sanitize(article.content || "", {
      USE_PROFILES: { html: true },
    });

    // 5. Return Structured Plain JS Object
    return {
      success: true,
      data: {
        title: article.title || "",
        byline: article.byline || null,
        dir: article.dir || null,
        lang: article.lang || null,
        excerpt: article.excerpt || null,
        siteName: article.siteName || null,
        content: cleanContent,
        textContent: (article.textContent || "").trim(),
        length: article.length || 0,
        sourceUrl: targetUrl,
        publishedAt: article.publishedTime,
      },
    };
  } catch (error) {
    console.error("Server Action Article Fetch Error:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while parsing the article.",
    };
  }
}
