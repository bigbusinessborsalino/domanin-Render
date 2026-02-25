import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsFeed from "../components/NewsFeed";

interface AnimeProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const Anime = ({ theme, onToggleTheme }: AnimeProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      
      <main className="flex-grow pt-12">
        <div className="container mx-auto px-4 mb-2">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Category
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-black text-foreground">
            Anime News
          </h1>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl">
            The latest drops, release dates, and updates from the anime world.
          </p>
        </div>
        
        {/* For right now, this will load all news. We will add a filter to it next! */}
        <NewsFeed />
      </main>

      <Footer />
    </div>
  );
};

export default Anime;
