const apiUrl = "http://localhost:3000/api/article/content";

export async function fetchArticle(url: string) {
  try {
    // 1. Fetch raw HTML from target URL with standard browser headers
    const response = await fetch(`${apiUrl}?url=${url}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch page. Status: ${response.status}`);
    }

    const article = await response.json();

    return article.data;
  } catch (error) {
    console.log(error);
    return { error };
  }
}
