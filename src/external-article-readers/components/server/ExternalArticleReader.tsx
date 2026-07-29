import { Card } from "@/components/ui/card";
import { readNbuildExternalArticle } from "../../actions/readNbuildExternalArticle";
import ArticleContent from "./ArticleContent";
import Image from "next/image";

interface ArticleReaderProps {
  targetUrl: string;
}
// Next.js Server Component
export default async function ExternalArticleReader({
  targetUrl,
}: ArticleReaderProps) {
  let article;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let error: any;

  try {
    const response = await readNbuildExternalArticle(targetUrl);
    article = response.data;
  } catch (err) {
    error = err;
  }

  if (error || !article) {
    return (
      <div className="p-6 text-red-600 bg-red-50 rounded-lg border border-red-200">
        <p className="font-semibold">Error Loading Article</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Article Header */}
      <header className="mb-6 border-b pb-4">
        {article.siteName && (
          <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
            {article.siteName}
          </span>
        )}
        <h1 className="text-3xl font-extrabold text-gray-900 mt-1 mb-2">
          {article.title}
        </h1>
        {article.byline && (
          <p className="text-sm text-gray-600 italic">By {article.byline}</p>
        )}
      </header>

      {/* Excerpt Callout */}
      {article.excerpt && (
        <blockquote className="p-4 mb-6 italic border-l-4 border-blue-500 bg-blue-50 text-gray-700">
          {article.excerpt}
        </blockquote>
      )}

      {/* Rendered Parsed Article HTML */}
      <ArticleContent htmlContent={article.content} toComponents={true} />
      {/* <div
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      /> */}
    </article>
  );
}
