import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// 🚀 FIXED: Importing correctly from the components folder
import NewsCard, { Article as ArticleType } from "../components/NewsCard";

interface ArticleProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const Article = ({ theme, onToggleTheme }: ArticleProps) => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  const [related, setRelated] = useState<ArticleType[]>([]);

  useEffect(() => {
    // 🔗 Fetching from your live Render Uploader Bridge
    fetch('https://uploader-lingrand.onrender.com/api/news')
      .then(res => res.json())
      .then(data => {
        const found = data.find((a: any) => a.id === id);
        if (found) {
          setArticle(found);
          setRelated(data.filter((a: any) => a.id !== id).slice(0, 3));
        }
      })
      .catch(err => console.error("Error fetching article:", err));
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header theme={theme} onToggleTheme={onToggleTheme} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-20 text-muted-foreground font-body">📡 Retrieving Story...</div>
        </main>
        <Footer />
      </div>
    );
  }

  const contentToDisplay = article.full_content || article.excerpt || "Content generating...";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main className="flex-1">
        {article.imageUrl && (
          <div className="w-full relative overflow-hidden" style={{ maxHeight: "480px" }}>
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover animate-fade-in"
              style={{ maxHeight: "480px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        )}

        <article className="container mx-auto px-4 py-10 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>

          <div className="mb-4">
            <span className="text-xs font-body font-semibold text-primary uppercase tracking-widest bg-accent px-3 py-1.5 rounded-full">
              {article.category || "Breaking"}
            </span>
          </div>

          <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-body mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{article.readTime || "3 min read"}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {contentToDisplay.split("\n").map((para: string, i: number) => {
              if (!para.trim()) return null;
              return (
                <p key={i} className="font-body text-foreground leading-[1.85] text-[1.0625rem] mb-6 animate-fade-up">
                  {para}
                </p>
              );
            })}
          </div>
        </article>

        {related.length > 0 && (
          <section className="container mx-auto px-4 pb-16 max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="font-headline font-bold text-2xl text-foreground">Related Stories</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((a) => (
                <NewsCard key={a.id} article={a} variant="default" />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Article;
