"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
  Search,
  CheckCircle2,
  Send,
  Layers,
  Code2,
  Bot,
  Workflow,
  Cloud,
  TrendingUp,
} from "lucide-react";
import { ARTICLES, Article } from "./articles-data";

const CATEGORIES = [
  "All Insights",
  "Software Development",
  "Artificial Intelligence",
  "Business Automation",
  "SaaS & Product Development",
  "Cloud & DevOps",
  "SEO & Digital Growth",
];

export default function InsightsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Insights" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES[0]; // Planning Your First SaaS MVP

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111211] text-white selection:bg-[#A78BFA]/30 selection:text-white">
      {/* Background radial atmosphere */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#A78BFA]/15 via-purple-900/10 to-transparent blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#A78BFA]/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/30 bg-[#151615] px-4 py-1.5 text-xs font-mono font-medium tracking-[0.2em] text-[#A78BFA] shadow-[0_0_20px_rgba(167,139,250,0.15)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#A78BFA]" />
                <span>ZINFELL INSIGHTS</span>
              </div>

              {/* Title */}
              <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.08]">
                Ideas and insights for building{" "}
                <span className="bg-gradient-to-r from-white via-[#E0E7FF] to-[#A78BFA] bg-clip-text text-transparent">
                  better digital businesses.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
                Explore practical guidance on software architecture, artificial intelligence, workflow automation, SaaS product engineering, and digital growth to help you make informed technology decisions.
              </p>
            </div>

            {/* =================================================================== */}
            {/* FEATURED ARTICLE HERO CARD */}
            {/* =================================================================== */}
            {featuredArticle && (
              <div className="mt-16 sm:mt-20">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#181918] to-[#121312] p-8 sm:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-[#A78BFA]/10 blur-[90px] pointer-events-none" />

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#A78BFA] px-3.5 py-1 text-xs font-bold text-black font-mono">
                      {featuredArticle.badge}
                    </span>
                    <span className="text-xs font-mono text-[#A78BFA]">
                      {featuredArticle.category}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8]">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <Link href={`/insights/${featuredArticle.slug}`}>
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl hover:text-[#A78BFA] transition-colors">
                      {featuredArticle.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#94A3B8] max-w-3xl">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-[#A78BFA]">
                        ZF
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-white">{featuredArticle.author}</p>
                        <p className="text-[#94A3B8]">{featuredArticle.publishedDate}</p>
                      </div>
                    </div>

                    <Link
                      href={`/insights/${featuredArticle.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-6 py-2.5 text-xs font-bold text-black transition-all hover:bg-[#9065F8] hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                    >
                      <span>Read the Full Guide</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FILTER BAR & SEARCH */}
        {/* ========================================================================= */}
        <section className="border-t border-white/10 py-8 bg-[#0E0F0E]/80 backdrop-blur-md sticky top-16 z-20">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-[#A78BFA] text-black font-semibold shadow-[0_0_15px_rgba(167,139,250,0.25)]"
                        : "border border-white/10 bg-[#161716] text-[#94A3B8] hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Field */}
              <div className="relative w-full lg:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
                <input
                  type="text"
                  placeholder="Search articles & topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-white/10 bg-[#161716] py-2 pl-10 pr-4 text-xs text-white placeholder-[#94A3B8] focus:border-[#A78BFA] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ARTICLES GRID */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <h2 className="text-lg font-bold text-white">
                Articles & Technical Playbooks{" "}
                <span className="text-xs font-normal text-[#94A3B8]">({filteredArticles.length} articles)</span>
              </h2>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-base text-[#94A3B8]">No insights found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All Insights");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-xs text-[#A78BFA] underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#161716] p-7 transition-all duration-300 hover:border-[#A78BFA]/50 hover:bg-[#1A1B1A] hover:shadow-[0_10px_30px_rgba(167,139,250,0.08)]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-medium text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-1 rounded-full border border-[#A78BFA]/20">
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#94A3B8]">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>

                      <Link href={`/insights/${article.slug}`}>
                        <h3 className="mt-5 text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#94A3B8] line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-[#94A3B8]">{article.publishedDate}</span>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A78BFA] group-hover:text-[#9065F8] transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* NEWSLETTER CTA */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 border-t border-white/10 bg-[#0E0F0E]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-3xl rounded-3xl border border-[#A78BFA]/30 bg-gradient-to-b from-[#1E201E] to-[#151615] p-8 sm:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
                STAY INFORMED
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Useful ideas, delivered occasionally.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto">
                Get practical insights about software engineering, AI adoption, workflow automation, and digital growth. No spam—only high-signal analysis.
              </p>

              {subscribed ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm font-medium text-emerald-400">
                  <CheckCircle2 className="mx-auto h-6 w-6 mb-2" />
                  Thank you for subscribing! We&apos;ll send practical engineering insights straight to your inbox.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-8 mx-auto max-w-md flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-full border border-white/10 bg-[#111211] px-5 py-3.5 text-xs text-white placeholder-[#94A3B8] focus:border-[#A78BFA] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A78BFA] px-7 py-3.5 text-xs font-bold text-black transition-all hover:bg-[#9065F8] hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                  >
                    <span>Subscribe</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}

              <p className="mt-4 text-[11px] text-[#94A3B8]">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
