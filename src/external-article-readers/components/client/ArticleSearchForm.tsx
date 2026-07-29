"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Globe, Loader2 } from "lucide-react";

export default function ArticleSearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentUrl = searchParams.get("url") || "";

  const [inputUrl, setInputUrl] = useState(currentUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedUrl = inputUrl.trim();

    if (!trimmedUrl) {
      setError("Please enter a URL.");
      return;
    }

    // Basic URL validation
    try {
      new URL(trimmedUrl);
    } catch {
      setError("Please enter a valid URL (e.g., https://example.com/article)");
      return;
    }

    setIsLoading(true);

    // Update query param which triggers Next.js server-side re-render
    const params = new URLSearchParams(searchParams.toString());
    params.set("url", trimmedUrl);
    router.push(`?${params.toString()}`);

    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mb-8 shadow-sm">
      <CardContent className="pt-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="url"
              placeholder="Paste article URL (e.g., https://techcrunch.com/...)"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className="pl-9"
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="sm:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Parsing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Read Article
              </>
            )}
          </Button>
        </form>

        {error && (
          <p className="text-sm text-destructive mt-2 pl-1 font-medium">
            {error}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
