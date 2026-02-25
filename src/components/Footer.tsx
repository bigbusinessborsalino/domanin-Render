import { Link } from "react-router-dom";
import { Anchor } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-3 group w-fit">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Anchor className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-headline font-bold text-lg text-foreground">Grand Line News</span>
            </Link>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              Navigating the world's stories, compiled and rephrased by AI from current web trends.
            </p>
            
            <div className="flex gap-3 mt-5">
              {/* X (Twitter) */}
              <a href="https://x.com/Reigen_aratKa7" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.08 4.076H5.247z"/></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/Sakazuki-Akainu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me/STRONGEST_MARINE" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 2.125a1.5 1.5 0 0 0-1.53-.135L2.513 10.375a1.5 1.5 0 0 0-.156 2.704l5.356 2.54 1.95 6.097a1.5 1.5 0 0 0 2.76.19l3.19-4.22 5.093 3.638a1.5 1.5 0 0 0 2.37-1.058l3.437-16.5a1.5 1.5 0 0 0-1.97-1.641z"/></svg>
              </a>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-headline font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Topics
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/anime" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  Anime News
                </Link>
              </li>
              <li>
                <Link to="/global" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  Global News
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-headline font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-body">
            © {year} Grand Line News. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body text-center">
            Content compiled & rephrased by AI. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
