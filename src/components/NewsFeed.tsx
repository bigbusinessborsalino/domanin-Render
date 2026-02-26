import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import NewsCard, { Article } from "./NewsCard";

interface NewsFeedProps {
  category?: string;
}

const NewsFeed = ({ category }: NewsFeedProps) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchLiveNews = async () => {
      try {
        const response = await fetch('https://uploader-lingrand.onrender.com/api/news');
        const data = await response.json();
        
        if (category) {
          const filtered = data.filter((article: any) => 
            article.category?.toLowerCase() === category.toLowerCase() ||
            article.tags?.includes(category.toLowerCase())
          );
          setArticles(filtered);
        } else {
          setArticles(data);
        }
      } catch (err) {
        console.error("Waiting for live bridge data...", err);
      }
    };

    fetchLiveNews();
    const interval = setInterval(fetchLiveNews, 300000);
    return () => clearInterval(interval);
  }, [category]);

  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-muted-foreground font-body gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p>{category ? `Scanning the Grand Line for ${category} News...` : "Loading latest stories..."}</p>
      </div>
    );
  }

  // NEW GRID LOGIC: No empty rows!
  const featured = articles[0]; // 1 big article
  const topStories = articles.slice(1, 4); // Next 3 articles for the right sidebar
  const remainingArticles = articles.slice(4); // EVERYTHING else dynamically fills the grid

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-headline font-bold text-2xl text-foreground">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Stories` : "Latest Stories"}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        
        {/* LEFT SIDE (Main Area) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {featured && <NewsCard article={featured} variant="featured" />}
          
          {/* This grid will automatically expand to fit however many articles are left without gaps! */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {remainingArticles.map((article) => (
              <NewsCard key={article.id} article={article} variant="default" />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (Top Stories Sidebar) */}
        <div className="flex flex-col h-full">
          <div className="bg-card border border-border rounded-xl p-5 h-full lg:sticky top-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="w-1 h-4 bg-primary rounded-full" />
              <h3 className="font-headline font-semibold text-sm uppercase tracking-widest text-muted-foreground">Top Stories</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              {topStories.map((article) => (
                <NewsCard key={article.id} article={article} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
