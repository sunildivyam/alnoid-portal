import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ArticleSearchForm from "@/external-article-readers/components/client/ArticleSearchForm";
import ExternalArticleReader from "@/external-article-readers/components/server/ExternalArticleReader";

interface PageProps {
  searchParams: Promise<{ url?: string }>;
}

export default async function ReaderPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const targetUrl = resolvedSearchParams.url;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Distraction-Free Reader
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Enter any news URL to extract and read clean content natively.
          </p>
        </div>

        {/* Client Search Bar */}
        <ArticleSearchForm />

        {/* Dynamic Reader Content */}
        {targetUrl ? (
          <Suspense key={targetUrl} fallback={<ReaderSkeleton />}>
            <ExternalArticleReader targetUrl={targetUrl} />
          </Suspense>
        ) : (
          <div className="text-center py-16 border-2 border-dashed rounded-lg text-muted-foreground">
            Enter a web URL above to get started.
          </div>
        )}
      </div>
    </main>
  );
}

// Loading Skeleton UI for smooth UX
function ReaderSkeleton() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-background rounded-lg border space-y-6">
      <div className="space-y-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-32" />
      </div>
      <Skeleton className="h-20 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}
