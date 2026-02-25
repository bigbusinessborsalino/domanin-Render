import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  readTime?: string;
}

interface NewsCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
}

const NewsCard = ({ article, variant = "default" }: NewsCardProps) => {
  return (
    <div className={cn(
      "group flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 p-6",
      variant === "featured" ? "md:min-h-[200px]" : ""
    )}>
      
      {/* 🚫 ZERO IMAGES HERE. JUST CLEAN TEXT. */}
      
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-body font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
            {article.category || "News"}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-body text-muted-foreground">
            <Clock className="w-3 h-3" />
            {article.readTime || "3 min read"}
          </span>
        </div>

        <h3 className={cn(
          "font-headline font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2",
          variant === "featured" ? "text-2xl md:text-3xl" : "text-lg"
        )}>
          {article.title}
        </h3>

        <p className="font-body text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
          {article.excerpt}
        </p>

        {/* 🚀 FIXED LINK: Completely ignores any old .html urls */}
        <Link
          to={`/article/${article.id}`}
          className="inline-flex items-center gap-2 text-xs font-body font-bold text-primary group-hover:gap-3 transition-all mt-auto w-fit"
        >
          Read Full Story
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
