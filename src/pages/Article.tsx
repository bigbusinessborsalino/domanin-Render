import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader2, ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ArticlePage = ({ theme, onToggleTheme }: any) => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liveTopics, setLiveTopics] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://uploader-lingrand.onrender.com/api/news');
        const data = await response.json();
        
        // Find the specific article
        const foundArticle = data.find((a: any) => a.id === id || a.id === Number(id) || String(a.id) === String(id));
        if (foundArticle) setArticle(foundArticle);
        
        // Setup ticker data
        setLiveTopics(data.slice(0, 10).map((a: any) => a.title));
      } catch (err) {
        console.error("Failed to fetch article", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0); 
  }, [id]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header theme={theme} onToggleTheme={onToggleTheme} />

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: scroll-left 35s linear infinite;
        }
      `}</style>

      {/* FIX 1: The 1-Liner Horizontal Ticker */}
      {liveTopics.length > 0 && (
        <div className="bg-primary/10 border-b border-primary/20 py-2 overflow-hidden w-full flex items-center">
          <div className="animate-marquee flex w-max gap-16 whitespace-nowrap font-body text-sm font-medium text-primary px-4">
            {liveTopics.map((title, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                {title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 text-muted-foreground font-body gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p>Retrieving story...</p>
          </div>
        ) : !article ? (
          <div className="text-center py-20 font-body text-muted-foreground">Article not found.</div>
        ) : (
          <article className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                {article.category || "News"}
              </span>
              <span className="text-sm text-muted-foreground font-body">{article.date || "Recent"}</span>
            </div>

            <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              {article.title}
            </h1>

            {/* FIX 2: Check every possible name for your text data! */}
            <div className="prose prose-lg dark:prose-invert max-w-none font-body text-foreground/80 leading-relaxed whitespace-pre-wrap">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : article.summary ? (
                <p>{article.summary}</p>
              ) : article.description ? (
                <p>{article.description}</p>
              ) : article.text ? (
                <p>{article.text}</p>
              ) : article.body ? (
                <p>{article.body}</p>
              ) : (
                <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground font-mono">
                  <p className="mb-4 text-red-500 font-bold">⚠️ Diagnostic Mode: Here is the raw data we got from your API. Tell me which field holds your article text!</p>
                  {JSON.stringify(article, null, 2)}
                </div>
              )}
            </div>
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
