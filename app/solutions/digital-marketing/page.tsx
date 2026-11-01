import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Megaphone, 
  Target, 
  TrendingUp, 
  Share2, 
  FileText, 
  BarChart3, 
  ArrowRight, 
  Check, 
  Users, 
  Zap,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services | PPC, Paid Social & Growth Funnels | Zinfell",
  description:
    "Grow customer acquisition with data-driven Google Ads, Meta & LinkedIn campaigns, high-converting landing pages, and full-funnel attribution from Zinfell.",
};

const FAQS = [
  {
    question: "Which digital advertising channels do you manage?",
    answer:
      "We plan, deploy, and manage paid acquisition campaigns across Google Search & Display Ads, Meta (Instagram & Facebook), and LinkedIn Ads for B2B enterprise client acquisition.",
  },
  {
    question: "How do you track return on investment (ROI)?",
    answer:
      "We configure clean end-to-end UTM parameter tracking, Google Analytics 4 conversion events, and CRM attribution so you can see exactly which ads and keywords generate closed revenue.",
  },
  {
    question: "Do you design landing pages as part of marketing campaigns?",
    answer:
      "Yes. A great ad campaign fails if it sends traffic to a slow or confusing page. We design and build dedicated, fast landing pages with clear conversion messaging and lead capture.",
  },
  {
    question: "What is your approach to ad budget management?",
    answer:
      "We start with focused validation budgets, strictly benchmark cost-per-acquisition (CPA), eliminate underperforming keywords and audiences, and only scale budgets into proven conversion funnels.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - LIVE CONVERSION FUNNEL SHOWCASE */}
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
                DIGITAL MARKETING &amp; ACQUISITION
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Reach the right audience.{" "}
                <span className="text-black font-normal">Make every campaign count.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                Digital marketing succeeds when message, audience, channel, and landing page are tightly aligned. We plan and manage data-backed paid advertising, high-converting funnel pages, and automated lead nurturing sequences focused on revenue rather than vanity impressions.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Start a Marketing Project</span>
                </Link>
                <Link
                  href="/products"
                  className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none"
                  style={{ color: "#000000" }}
                >
                  <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore Products</span>
                </Link>
              </div>

              {/* Spec Chips */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5 pt-6 border-t border-black/[0.08]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Target className="h-3 w-3 text-neutral-600" />
                  Google &amp; Meta Ads
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <BarChart3 className="h-3 w-3 text-neutral-600" />
                  Full-Funnel UTM Attribution
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <TrendingUp className="h-3 w-3 text-neutral-600" />
                  3.8x Target ROAS
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Zap className="h-3 w-3 text-neutral-600" />
                  A/B Tested Landing Pages
                </span>
              </div>
            </div>

            {/* Right Column: Live Full-Funnel Conversion Visualizer */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px]">
                <div className="rounded-3xl border border-neutral-300/80 bg-white p-4 shadow-xl text-left space-y-3">
                  {/* Funnel Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-black">Campaign Conversion Funnel</span>
                    </div>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-mono text-neutral-600 border border-neutral-200/80">
                      3.8x ROAS
                    </span>
                  </div>

                  {/* Funnel Stage 1: Traffic */}
                  <div className="rounded-2xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-black">1. Targeted Clicks &amp; Traffic</span>
                      <span className="font-mono text-neutral-600">18,400 Visitors</span>
                    </div>
                    <p className="text-[10px] text-neutral-500">Google Search Ads &amp; LinkedIn B2B Campaigns</p>
                    <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
                      <div className="h-full w-full rounded-full bg-neutral-800" />
                    </div>
                  </div>

                  {/* Funnel Stage 2: Leads */}
                  <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 shadow-2xs space-y-1.5 ml-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-black">2. Qualified Inquiries</span>
                      <span className="font-mono text-neutral-600">2,850 Leads</span>
                    </div>
                    <p className="text-[10px] text-neutral-500">Dedicated A/B Tested Landing Pages</p>
                    <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                      <div className="h-full w-3/5 rounded-full bg-neutral-600" />
                    </div>
                  </div>

                  {/* Funnel Stage 3: Customers */}
                  <div className="rounded-2xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-1.5 ml-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-black">3. Closed Customers</span>
                      <span className="font-mono text-neutral-800 font-bold">520 Bookings</span>
                    </div>
                    <p className="text-[10px] text-neutral-500">3.9% Full-Funnel Conversion Rate</p>
                    <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
                      <div className="h-full w-1/4 rounded-full bg-neutral-900" />
                    </div>
                  </div>

                  {/* Attribution Footer */}
                  <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                    <span>UTM Multi-Touch Tracking</span>
                    <span className="text-black font-semibold">$42 Cost-Per-Acquisition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARKETING CHANNEL ECOSYSTEM */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ACQUISITION CHANNELS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Targeted campaigns built around clear unit economics
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We focus on measurable channels where every dollar spent is tracked against cost-per-lead and customer lifetime value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Paid Search (Google Ads)</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Capture high-intent buyers actively searching for your service, with strict negative keyword filters to eliminate wasted spend.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                High-Intent PPC
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Share2 className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Paid Social (Meta &amp; LinkedIn)</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Target decision-makers by job title, industry, and company size on LinkedIn, paired with retargeting sequences on Instagram.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                B2B &amp; ABM Targeting
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Zap className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Conversion Landing Pages</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Dedicated, fast-loading landing pages with compelling value propositions, social proof, and high-converting inquiry forms.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                A/B Tested CVR
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Attribution &amp; Analytics</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Unified analytics dashboards with Google Analytics 4 and CRM integration to attribute pipeline and revenue accurately.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                Revenue Attribution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPAIGN PERFORMANCE METRICS */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">3.8x</span>
              <p className="mt-2 text-base font-semibold text-black">Average ROAS</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Data-driven target return on advertising spend across qualified pipeline.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">3.9%</span>
              <p className="mt-2 text-base font-semibold text-black">Landing Page CVR</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Conversion rates achieved through speed, trust signals, and clear headlines.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">Weekly</span>
              <p className="mt-2 text-base font-semibold text-black">A/B Iterations</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Continuous testing of ad copy, creative variants, and form placements.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">100%</span>
              <p className="mt-2 text-base font-semibold text-black">Spend Transparency</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">You own your ad accounts directly. Zero hidden markups on media spend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 5. FINAL CTA */}
      <FinalCta
        title="Let's build a marketing strategy around your goals."
        buttonText="Start a Marketing Project"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
