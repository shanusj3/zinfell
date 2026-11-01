import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Globe, 
  Code, 
  Zap, 
  ShieldCheck, 
  ShoppingBag, 
  Layers, 
  ArrowRight, 
  Check, 
  Gauge, 
  Search,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company | Custom Websites & Web Apps | Zinfell",
  description:
    "Custom websites, high-converting landing pages, e-commerce stores, and custom web applications engineered for speed, conversion, and reliability with Zinfell.",
};

const FAQS = [
  {
    question: "Do you build custom websites or use pre-made templates?",
    answer:
      "Every website we engineer is built custom around your brand identity, business conversion goals, and technical requirements. We do not use bloated pre-made templates that slow down page loads.",
  },
  {
    question: "How do you ensure our website loads fast?",
    answer:
      "We use modern server-side rendering (Next.js), aggressive image optimization, asset minification, edge caching via Cloudflare CDN, and clean semantic code to guarantee 95+ Core Web Vitals scores.",
  },
  {
    question: "Can our team easily edit content after launch?",
    answer:
      "Yes. We integrate intuitive headless CMS platforms (such as Sanity or Strapi) that allow your marketing team to edit text, publish articles, update images, and create new landing pages without touching code.",
  },
  {
    question: "How long does it take to build a custom website?",
    answer:
      "A focused business website typically takes 3 to 5 weeks from initial discovery to live deployment, while more complex web applications with customer accounts and payments require 6 to 10 weeks.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - LIVE BROWSER VIEWPORT SHOWCASE */}
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
                CORE WEB ENGINEERING
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Websites built for{" "}
                <span className="text-black font-normal">conversion, speed, and scale.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                Your website is often the first impression a customer has of your business. We engineer bespoke websites, fast landing pages, and custom web applications that load in under a second, communicate clearly, and convert visitors into paying clients.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Start a Web Project</span>
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
                  <Gauge className="h-3 w-3 text-neutral-600" />
                  99+ Core Web Vitals
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Zap className="h-3 w-3 text-neutral-600" />
                  &lt; 0.8s LCP Load Time
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Search className="h-3 w-3 text-neutral-600" />
                  Semantic SEO Structure
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <ShieldCheck className="h-3 w-3 text-neutral-600" />
                  SSL &amp; Edge Security
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Browser Viewport Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px]">
                {/* Browser Outer Frame */}
                <div className="rounded-3xl border border-neutral-300/80 bg-white p-4 shadow-xl text-left space-y-3">
                  {/* Browser Header Controls */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200/60" />
                    </div>
                    {/* Simulated URL Bar */}
                    <div className="rounded-full bg-neutral-100 px-3 py-0.5 text-[10px] font-mono text-neutral-600 border border-neutral-200/70 flex items-center gap-1.5">
                      <ShieldCheck className="h-2.5 w-2.5 text-neutral-500" />
                      <span>https://yourcompany.com</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">200 OK</span>
                  </div>

                  {/* Simulated Web Viewport */}
                  <div className="space-y-3 rounded-2xl bg-[#FAF9F8] p-3.5 border border-neutral-200/70">
                    {/* Web Navigation */}
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60">
                      <div className="h-2.5 w-16 rounded bg-neutral-800" />
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-8 rounded bg-neutral-300" />
                        <div className="h-1.5 w-8 rounded bg-neutral-300" />
                        <div className="h-4 w-12 rounded-full bg-neutral-900" />
                      </div>
                    </div>

                    {/* Hero Section */}
                    <div className="space-y-1.5 pt-1">
                      <div className="h-2 w-16 rounded bg-neutral-400" />
                      <div className="h-3.5 w-3/4 rounded bg-neutral-800" />
                      <div className="h-2 w-full rounded bg-neutral-300" />
                      <div className="h-2 w-2/3 rounded bg-neutral-200" />
                      <div className="flex gap-2 pt-2">
                        <div className="h-6 w-20 rounded-full bg-neutral-900" />
                        <div className="h-6 w-20 rounded-full border border-neutral-300 bg-white" />
                      </div>
                    </div>

                    {/* Feature Card Preview */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="rounded-xl bg-white p-2.5 border border-neutral-200/70 shadow-2xs space-y-1">
                        <div className="h-2 w-12 rounded bg-neutral-700" />
                        <div className="h-1.5 w-full rounded bg-neutral-200" />
                      </div>
                      <div className="rounded-xl bg-white p-2.5 border border-neutral-200/70 shadow-2xs space-y-1">
                        <div className="h-2 w-12 rounded bg-neutral-700" />
                        <div className="h-1.5 w-full rounded bg-neutral-200" />
                      </div>
                    </div>
                  </div>

                  {/* Browser Footer Performance Pill */}
                  <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                    <span className="flex items-center gap-1 text-black font-semibold">
                      <CheckCircle2 className="h-3 w-3 text-neutral-700" />
                      Lighthouse Performance: 99
                    </span>
                    <span>Clean Next.js Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID ARCHITECTURE - ASYMMETRIC MODERN LAYOUT */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              SOLUTIONS WE DELIVER
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Engineered for conversion, reliability, and business growth
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every website we build is architected with modern frameworks, high conversion clarity, and scalable content architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bento Card 1: Large Featured Card (Col Span 8) */}
            <div className="lg:col-span-8 rounded-3xl bg-[#F5F3F1] p-7 sm:p-9 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Globe className="h-5 w-5" />
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-black tracking-tight">High-Converting Corporate &amp; Marketing Websites</h3>
                <p className="mt-3 text-xs sm:text-[14px] text-neutral-600 leading-relaxed max-w-xl">
                  Strategic digital flagships engineered to position your company as the authoritative market leader. Crafted with crisp typography, persuasive copywriting hierarchy, and clear conversion pathways.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-600">
                <span>Next.js 15 &middot; Server Components</span>
                <span className="text-black font-semibold">Sub-second Global CDN</span>
              </div>
            </div>

            {/* Bento Card 2: Custom Web Apps (Col Span 4) */}
            <div className="lg:col-span-4 rounded-3xl bg-[#F5F3F1] p-7 sm:p-9 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Code className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Custom Web Applications</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Interactive client portals, multi-tenant dashboards, and custom internal software with secure role-based access.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                TypeScript &amp; PostgreSQL
              </div>
            </div>

            {/* Bento Card 3: E-Commerce Platforms (Col Span 4) */}
            <div className="lg:col-span-4 rounded-3xl bg-[#F5F3F1] p-7 sm:p-9 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">E-Commerce Stores</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  High-speed online shopping experiences with frictionless checkout, payment gateway integrations, and inventory synchronization.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                Stripe &amp; Headless Commerce
              </div>
            </div>

            {/* Bento Card 4: Headless CMS & Redesign (Col Span 8) */}
            <div className="lg:col-span-8 rounded-3xl bg-[#F5F3F1] p-7 sm:p-9 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Layers className="h-5 w-5" />
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-black tracking-tight">Headless CMS &amp; Modern Website Redesigns</h3>
                <p className="mt-3 text-xs sm:text-[14px] text-neutral-600 leading-relaxed max-w-xl">
                  Empower your marketing team with visual content editing while maintaining lightning-fast developer architecture. We modernize outdated legacy websites with clean code and zero downtime.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-600">
                <span>Sanity &middot; Strapi &middot; WordPress Headless</span>
                <span className="text-black font-semibold">100% Client Editable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE & CORE WEB VITALS GUARANTEE */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              PERFORMANCE STANDARDS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Speed is a competitive feature, not an afterthought
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Faster websites convert better, rank higher on Google search, and provide visitors with a frictionless browsing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">99+</span>
              <p className="mt-2 text-base font-semibold text-black">Google PageSpeed</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Top-tier mobile and desktop performance benchmarks verified on Google PageSpeed.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">&lt; 0.8s</span>
              <p className="mt-2 text-base font-semibold text-black">LCP Load Time</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Largest Contentful Paint loads almost instantly over 4G and broadband networks.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">0.00</span>
              <p className="mt-2 text-base font-semibold text-black">Cumulative Shift (CLS)</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Zero jarring layout movement while images, fonts, and interactive elements load.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">100%</span>
              <p className="mt-2 text-base font-semibold text-black">Semantic SEO Structure</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Proper heading hierarchy, metadata, OpenGraph tags, and JSON-LD schema markup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WEB DELIVERY PROCESS */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              OUR PROCESS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              From initial discovery to seamless live deployment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              A transparent, milestone-driven engineering cycle with defined deliverables, preview links, and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">01</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Discovery &amp; Roadmap</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Understanding your audience, key conversion pathways, and outlining sitemap architecture.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Strategy Roadmap
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">02</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Figma Wireframing</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Crafting clean responsive visual layouts for mobile and desktop screens before coding begins.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Approved Prototypes
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">03</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Clean Code Build</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Transforming designs into fast Next.js &amp; TypeScript code with smooth interactions and lead forms.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Private Staging Link
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">04</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Audit &amp; Go-Live</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Cross-device testing, domain DNS mapping, SSL security activation, and smooth live launch.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Live Deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 6. FINAL CTA */}
      <FinalCta
        title="Tell us what you want your website to achieve."
        buttonText="Start Your Project"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
