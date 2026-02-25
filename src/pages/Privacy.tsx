import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="font-headline text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted-foreground font-body space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>
              When you visit Grand Line News, we may collect basic, non-personally identifiable information such as browser type, operating system, and the dates/times of your visits. This helps us understand how our website is being used and how we can improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">2. AI-Generated Content & Third-Party APIs</h2>
            <p>
              Our platform operates using automated Artificial Intelligence (AI) to aggregate and rephrase news stories. In the process of generating this content, we utilize various third-party AI services and APIs. Please be aware that interacting with our automated articles may involve data routing through these third-party services, which have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">3. Cookies and Tracking</h2>
            <p>
              We may use tracking technologies, such as cookies, to store your preferences and track website usage. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our site may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">4. External Links</h2>
            <p>
              Our automated articles frequently contain links to original source material or other third-party websites. If you click on a third-party link, you will be directed to that site. We strongly advise you to review the Privacy Policy of every site you visit, as we have no control over and assume no responsibility for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-semibold text-foreground mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the data we collect, or our AI generation processes, please contact us at:
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

export default Privacy;
