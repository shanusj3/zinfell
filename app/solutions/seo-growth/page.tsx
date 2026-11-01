import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Search, 
  TrendingUp, 
  FileCode, 
  Target, 
  MapPin, 
  BarChart, 
  Globe, 
  Check, 
  Zap,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO & Growth Services | Technical SEO & Organic Visibility | Zinfell",
  description:
    "Grow qualified organic search traffic with technical SEO audits, Core Web Vitals optimization, keyword intent strategy, and schema markup from Zinfell.",
};

const FAQS = [
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "Technical fixes and Core Web Vitals improvements typically show positive indexing signals within 2 to 4 weeks. Meaningful keyword ranking and organic traffic growth typically compound over 3 to 6 months.",
  },
  {
    question: "What is technical SEO and why does it matter?",
    answer:
      "Technical SEO focuses on how search engine bots crawl, render, and index your website. Without fast server response times, valid canonical tags, XML sitemaps, and mobile responsiveness, even great content won't rank.",
  },
  {
    question: "Do you help with local SEO in regional markets like India and the UAE?",
    answer:
      "Yes. We optimize Google Business Profiles, localized landing page URL structures, local schema markup, and geo-relevance signals for companies targeting specific regional markets.",
  },
  {
    question: "How do you track and report SEO performance?",
    answer:
      "We track organic clicks, keyword rank movements, impressions, and conversion goals directly through Google Search Console and Google Analytics 4 (GA4), providing transparent monthly reports.",
  },
];

export default function SeoGrowthPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - LIVE GOOGLE SERP CARD SHOWCASE */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, Value Prop & CTAs */}
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                SEO &amp; ORGANIC SEARCH GROWTH
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Make it easy for customers to{" "}
                <span className="text-black font-normal">find your business.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                A strong search presence starts with understanding what your buyers are actually searching for when ready to buy. We combine technical SEO, Core Web Vitals optimization, and rich schema markup to turn Google search into an organic customer acquisition channel.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Request an SEO Review</span>
                </Link>
                <Link
                  href="/products"
                  className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none"
                  style={{ color: "#000000" }}
                >
                  <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore Products</span>
                </Link>
              </div>

              {/* Spec Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5 pt-6 border-t border-black/[0.08]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Search className="h-3 w-3 text-neutral-600" />
                  Commercial Keyword Intent
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Zap className="h-3 w-3 text-neutral-600" />
                  Core Web Vitals Pass
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <FileCode className="h-3 w-3 text-neutral-600" />
                  JSON-LD Schema Markup
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <TrendingUp className="h-3 w-3 text-neutral-600" />
                  +142% Organic Reach
                </span>
              </div>
            </div>

            {/* Right Column: Live Google SERP Card Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px]">
                <div className="rounded-3xl border border-neutral-300/80 bg-white p-4 shadow-xl text-left space-y-3">
                  {/* Google Search Bar */}
                  <div className="rounded-full bg-[#FAF9F8] p-2.5 border border-neutral-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Search className="h-3.5 w-3.5 text-neutral-400" />
                      <span className="text-black font-medium text-[11px]">enterprise software development partner</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-mono">Google</span>
                  </div>

                  {/* SERP Result Card */}
                  <div className="rounded-2xl bg-white p-3.5 border border-neutral-200/80 shadow-2xs space-y-2 text-left">
                    <div className="flex items-center gap-1.5 text-[10.5px] text-neutral-500 font-mono">
                      <span>https://yourcompany.com</span>
                      <span>&rsaquo;</span>
                      <span>solutions</span>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-black leading-snug hover:underline cursor-pointer">
                        Top-Rated Software Solutions &amp; Development | Official Site
                      </h3>
                      <div className="flex items-center gap-1.5 text-[10px] text-neutral-600 pt-1 font-mono">
                        <span className="text-neutral-800">★★★★★</span>
                        <span>4.9 (128 reviews) &middot; Verified Business</span>
                      </div>
                      <p className="mt-1 text-[11px] text-neutral-600 leading-relaxed">
                        Custom digital platforms engineered for performance, security, and measurable conversion. Explore solutions built for growing businesses.
                      </p>
                    </div>

                    {/* Sitelinks Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100 text-[10px]">
                      <div className="p-1.5 rounded-lg bg-[#FAF9F8] border border-neutral-200/60">
                        <span className="font-semibold text-black block">Web Development</span>
                        <span className="text-[9px] text-neutral-500">Fast Next.js websites</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#FAF9F8] border border-neutral-200/60">
                        <span className="font-semibold text-black block">Case Studies</span>
                        <span className="text-[9px] text-neutral-500">Real client results</span>
                      </div>
                    </div>
                  </div>

                  {/* Growth Badge Footer */}
                  <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                    <span>Google Search Console</span>
                    <span className="text-black font-semibold">+142% Organic Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS OF SEARCH GROWTH */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              SEARCH ENGINE PILLARS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Organic visibility grounded in technical excellence
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We focus on the foundations Google values most: speed, clean crawlable architecture, and content that directly answers customer questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <FileCode className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Technical Crawl &amp; Indexation</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Resolving canonical loops, 404 broken links, XML sitemaps, robots.txt directives, and server response codes to ensure Google indexes every page.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                100% Crawl Health
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Commercial Keyword Intent</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Targeting high-intent commercial terms your buyers search when comparing software or agencies, rather than hollow vanity keywords.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                High-Intent Conversion
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Zap className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Schema &amp; Core Web Vitals</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Injecting rich JSON-LD structured data for Google snippet stars, FAQs, and organization profiles alongside sub-second page load times.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                99+ PageSpeed Scores
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE & RANKING TRACKING */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">100%</span>
              <p className="mt-2 text-base font-semibold text-black">Indexation Rate</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Target pages verified and indexed in Google Search Console without crawl blocks.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">&lt; 0.7s</span>
              <p className="mt-2 text-base font-semibold text-black">Mobile LCP</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Lightning-fast mobile rendering that satisfies Google&apos;s mobile-first indexing.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">+142%</span>
              <p className="mt-2 text-base font-semibold text-black">Organic Impressions</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Average 90-day search visibility growth across targeted buyer-intent search queries.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">GA4</span>
              <p className="mt-2 text-base font-semibold text-black">Conversion Attribution</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Direct conversion tracking linking organic search rankings to real lead inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 5. FINAL CTA */}
      <FinalCta
        title="Let's turn search visibility into a growth opportunity."
        buttonText="Discuss SEO & Growth"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
