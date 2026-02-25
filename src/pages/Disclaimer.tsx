import Header from "../components/Header";
import Footer from "../components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="font-headline text-4xl font-bold mb-8 text-foreground">Disclaimer</h1>
        
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted-foreground font-body space-y-6">
          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">1. AI-Generated Content</h2>
            <p>
              Grand Line News is an automated news aggregation platform. The articles, summaries, and headlines published on this website are compiled, written, and rephrased by Artificial Intelligence (AI) models based on current web trends and various online sources. 
            </p>
            <p>
              Because this process is entirely automated, we cannot guarantee the absolute accuracy, completeness, or reliability of the information presented. The content should be used for general informational purposes only and not as professional or definitive advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">2. No Human Review</h2>
            <p>
              Articles are posted in real-time without prior human review or editorial oversight. If you spot a factual error, an AI hallucination, or inappropriate material, please reach out to us so we can address it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">3. External Links</h2>
            <p>
              Our AI may generate or reference links to external websites. We have no control over the content, privacy policies, or practices of these third-party sites and assume no responsibility for them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">4. Contact Information</h2>
            <p>
              If you have any questions, concerns, or require corrections regarding our automated content, please contact us directly at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> <a href="mailto:opcnlbnl@gmail.com" className="text-primary hover:underline">opcnlbnl@gmail.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
