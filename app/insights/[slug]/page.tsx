import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  Bookmark,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { ARTICLES, Article } from "../articles-data";
import { ReadingProgressBar, ArticleShareButton } from "./ArticleClientHelper";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: "Article Not Found | Zinfell",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} | Zinfell`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <div className="relative min-h-screen bg-[#111211] text-white selection:bg-[#A78BFA]/30 selection:text-white">
      {/* Reading Progress Indicator */}
      <ReadingProgressBar />

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#A78BFA]/15 via-purple-900/10 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* ========================================================================= */}
        {/* ARTICLE HEADER HERO */}
        {/* ========================================================================= */}
        <header className="relative pt-36 pb-12 lg:pt-44 lg:pb-16 border-b border-white/10">
          <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#94A3B8] transition-colors hover:text-[#A78BFA] mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all insights</span>
            </Link>

            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#A78BFA] bg-[#A78BFA]/10 px-3 py-1 rounded-full border border-[#A78BFA]/20">
                {article.category}
              </span>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8]">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs text-[#94A3B8]">{article.publishedDate}</span>
            </div>

            {/* Article Headline */}
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
              {article.title}
            </h1>

            {/* Standfirst / Excerpt */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
              {article.excerpt}
            </p>

            {/* Author info */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A78BFA]/20 text-xs font-bold text-[#A78BFA] border border-[#A78BFA]/30">
                  ZF
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{article.author}</p>
                  <p className="text-[11px] text-[#94A3B8]">Software Architecture & Product Engineering</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ArticleShareButton title={article.title} />
                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 bg-[#161716] px-4 py-2 text-xs font-medium text-white/90 hover:border-[#A78BFA]/50 hover:text-white transition-colors"
                >
                  Discuss This Topic
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* ARTICLE BODY & STICKY TABLE OF CONTENTS */}
        {/* ========================================================================= */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Sticky Table of Contents */}
              <aside className="lg:col-span-4 hidden lg:block">
                <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#161716] p-6 backdrop-blur-md">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#A78BFA]">
                    TABLE OF CONTENTS
                  </p>
                  <nav className="mt-4 space-y-2">
                    {article.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-xs leading-relaxed text-[#94A3B8] transition-colors hover:text-white hover:translate-x-1 transform duration-150"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs text-[#94A3B8]">Need help implementing this?</p>
                    <Link
                      href="/contact"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#A78BFA] hover:text-[#9065F8]"
                    >
                      <span>Book an architectural consultation</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Right Column: Article Content */}
              <div className="lg:col-span-8">
                <div className="space-y-12 text-[#D1D5DB] text-sm sm:text-base leading-relaxed">
                  {article.content.map((section, idx) => (
                    <article key={idx} id={section.sectionId} className="scroll-mt-32">
                      <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                        {section.sectionTitle}
                      </h2>

                      <div className="space-y-4">
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="leading-relaxed text-[#D1D5DB]">
                            {p}
                          </p>
                        ))}
                      </div>

                      {section.bullets && (
                        <ul className="my-5 space-y-2.5 rounded-xl border border-white/10 bg-[#161716] p-5">
                          {section.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                              <span className="text-[#A78BFA] font-bold mt-0.5">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.callout && (
                        <div className="my-6 rounded-2xl border border-[#A78BFA]/30 bg-[#151615] p-6 shadow-[0_0_25px_rgba(167,139,250,0.08)]">
                          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#A78BFA]">
                            {section.callout.title}
                          </p>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white">
                            {section.callout.body}
                          </p>
                        </div>
                      )}
                    </article>
                  ))}
                </div>

                {/* Conclusion Callout & Conversion Box */}
                <div className="mt-14 rounded-3xl border border-[#A78BFA]/30 bg-gradient-to-b from-[#1E201E] to-[#151615] p-8 sm:p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
                    TAKE THE NEXT STEP
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    Have a SaaS idea or software challenge? Let&apos;s discuss it.
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#94A3B8] max-w-lg mx-auto">
                    At Zinfell, we help founders and growing businesses plan, design, and engineer robust digital products built around real user needs.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-7 py-3 text-xs font-bold text-black transition-all hover:bg-[#9065F8]"
                      style={{ color: "#000000" }}
                    >
                      <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Start a Conversation</span>
                      <ArrowRight className="h-3.5 w-3.5" style={{ color: "#000000" }} />
                    </Link>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161716] px-6 py-3 text-xs font-medium text-white hover:bg-[#1E201E]"
                    >
                      <span>Explore Our Products</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* RELATED ARTICLES */}
        {/* ========================================================================= */}
        {relatedArticles.length > 0 && (
          <section className="py-16 border-t border-white/10 bg-[#0E0F0E]">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-white">Related Insights</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/insights/${rel.slug}`}
                    className="group rounded-2xl border border-white/10 bg-[#161716] p-6 transition-all hover:border-[#A78BFA]/50 hover:bg-[#1A1B1A]"
                  >
                    <span className="font-mono text-[11px] text-[#A78BFA]">{rel.category}</span>
                    <h3 className="mt-2 text-base font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#94A3B8] line-clamp-2">{rel.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-[#94A3B8] border-t border-white/5 pt-3">
                      <span>{rel.readTime}</span>
                      <span className="font-semibold text-[#A78BFA] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
