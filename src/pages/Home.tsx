import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, ChevronRight, Loader2 } from "lucide-react"; // NEW: Added Loader2 for the spinning animation
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsFeed from "../components/NewsFeed";
import heroBg from "../assets/hero-bg.jpg";

interface HomeProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

// NEW: We tell the code to expect an object with an ID and a Title
interface LiveArticle {
  id: string | number;
  title: string;
}

const Home = ({ theme, onToggleTheme }: HomeProps) => {
  const [topicIndex, setTopicIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // NEW: Save the actual article objects and track if it is loading
  const [liveTopics, setLiveTopics] = useState<LiveArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Fetch real news headlines when the page loads
  useEffect(() => {
    const fetchLiveHeadlines = async () => {
      try {
        const response = await fetch('https://uploader-lingrand.onrender.com/api/news');
        const data = await response.json();
        
        // Save the first 10 FULL article objects (so we have their IDs)
        if (data && data.length > 0) {
          setLiveTopics(data.slice(0, 10));
        }
      } catch (err) {
        console.error("Failed to fetch live headlines", err);
      } finally {
        setIsLoading(false); // Stop the loading animation once data arrives!
      }
    };

    fetchLiveHeadlines();
  }, []);

  // 2. The 4-Second Timer
  useEffect(() => {
    if (liveTopics.length === 0) return;

    const timer = setInterval(() => {
      setIsVisible(false); // Start fading out
      
      setTimeout(() => {
        // Move to the next topic
        setTopicIndex((prev) => (prev + 1) % liveTopics.length);
        setIsVisible(true); // Fade back in
      }, 500); 
      
    }, 4000); 

    return () => clearInterval(timer);
  }, [liveTopics]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header theme={theme} onToggleTheme={onToggleTheme} />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "420px" }}>
        <img
          src={heroBg}
          alt="Grand Line News hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

        <div className="relative w-full max-w-[2000px] mx-auto px-4 sm:px-8 lg:px-12 py-20 flex flex-col items-start justify-end h-full" style={{ minHeight: "420px" }}>
          <div className="animate-fade-up max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                Trending Now
              </span>
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            
            <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 text-balance">
              Navigate the World's Stories
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl mb-6">
              AI-researched and rephrased news from across the globe, curated for clarity and depth.
            </p>

            {/* NEW: The Animated Ticker with Loading Spinner and Real Links */}
            <div className="h-12 flex items-center">
              {isLoading ? (
                <div className="flex items-center gap-2 text-sm md:text-base font-body font-medium text-white/90 bg-white/10 border border-white/20 px-4 py-2 rounded-full">
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Loading Latest News...</span>
                </div>
              ) : liveTopics.length > 0 ? (
                <Link
                  to={`/article/${liveTopics[topicIndex].id}`}
                  className={`flex items-center gap-2 text-sm md:text-base font-body font-medium text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-opacity duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {liveTopics[topicIndex].title.length > 60 
                    ? liveTopics[topicIndex].title.substring(0, 60) + "..." 
                    : liveTopics[topicIndex].title}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <main className="flex-1">
        <NewsFeed />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
