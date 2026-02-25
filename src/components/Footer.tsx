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
            
            {/* Updated Social Links */}
            <div className="flex gap-3 mt-5">
              {/* X (Twitter) */}
              <a href="https://x.com/Reigen_aratKa7" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.08 4.076H5.247z"/></svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/bigbusinessborsalino" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me/STRONGEST_MARINE" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21-1.192-1.434-.043-.015-.086-.029-.128-.046a.545.545 0 01-.271-.439c-.014-.158.077-.306.223-.359.207-.076 2.502-1.006 6.136-2.522.618-.258 1.261-.518 1.946-.784.814-.316 1.488-.501 1.98-.545zM6.91 14.124c.052.126.139.232.25.305l3.22 2.096c.21.137.472.164.706.074l.004-.002c1.077-.417 1.815-1.213 2.152-2.316.08-.261.213-.655.441-1.26l-3.321 2.946c-.198.175-.46.229-.714.147L6.91 14.124z"/></svg>
              </a>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-headline font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Topics
            </h4>
            <ul className="space-y-2">
              {["World", "Technology", "Science", "Culture", "Business"].map((t) => (
                <li key={t}>
                  <Link to="/" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                    {t}
                  </Link>
                </li>
              ))}
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
                <Link to="/" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
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
