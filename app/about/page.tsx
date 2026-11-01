import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About Zinfell | Digital Solutions & Software Development",
  description:
    "Learn about Zinfell, a digital solutions company focused on software development, AI, automation, digital experiences, and software products.",
};

const BELIEFS = [
  {
    number: "01",
    title: "Understand before building",
    description:
      "The right solution begins with understanding the people, processes, and problems involved. We never write code before the business objective is crystal clear.",
  },
  {
    number: "02",
    title: "Useful over complicated",
    description:
      "Technology should make work easier, not introduce unnecessary complexity. We choose architectures that solve problems efficiently without architectural bloat.",
  },
  {
    number: "03",
    title: "Quality in the details",
    description:
      "Performance, usability, maintainability, and reliability matter throughout the product lifecycle. From millisecond load times to crisp type, every pixel counts.",
  },
  {
    number: "04",
    title: "Think beyond launch",
    description:
      "Good software evolves with its users, business requirements, and market opportunities. We build scalable codebases designed for continuous evolution.",
  },
];

const CAPABILITIES = [
  {
    id: "software-web",
    title: "Software & Web Applications",
    desc: "Modern responsive web applications, enterprise platforms, and high-performance frontend interfaces.",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    desc: "Intuitive iOS and Android applications built for high performance, smooth animations, and offline scale.",
  },
  {
    id: "ai-apps",
    title: "AI-Powered Applications",
    desc: "Custom intelligent assistants, retrieval-augmented generation (RAG), and domain-specific LLM workflows.",
  },
  {
    id: "automation",
    title: "Business Process Automation",
    desc: "Connecting disparate systems, CRM pipelines, document extraction, and WhatsApp automated workflows.",
  },
  {
    id: "ui-ux",
    title: "UI/UX & Product Design",
    desc: "User research, information architecture, wireframing, high-fidelity prototypes, and cohesive design systems.",
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    desc: "Serverless deployments, Docker containers, multi-region CI/CD pipelines, and cost-efficient cloud setups.",
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    desc: "Technical SEO audits, core web vitals optimization, search intent alignment, and conversion architecture.",
  },
  {
    id: "saas-engineering",
    title: "SaaS Product Engineering",
    desc: "Multi-tenant database architectures, subscription billing, RBAC permissions, and administrative tooling.",
  },
];

function CapabilityIcon({ id }: { id: string }) {
  switch (id) {
    case "software-web":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-black">
          {/* Browser Window Frame */}
          <rect x="2.5" y="3.5" width="19" height="17" rx="2.5" />
          <line x1="2.5" y1="8" x2="21.5" y2="8" />
          <circle cx="5.5" cy="5.75" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="8" cy="5.75" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="10.5" cy="5.75" r="0.6" fill="currentColor" stroke="none" />
          {/* Code Angle Brackets & Slash */}
          <path d="M7.5 11.5L5.5 13.5L7.5 15.5" />
          <path d="M12.5 11.5L14.5 13.5L12.5 15.5" />
          <line x1="10.5" y1="11.5" x2="9.5" y2="15.5" />
          {/* UI Layout Blocks */}
          <line x1="17" y1="12" x2="19.5" y2="12" />
          <line x1="17" y1="15" x2="19.5" y2="15" />
        </svg>
      );

    case "mobile-apps":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-black">
          {/* Mobile Smartphone Frame */}
          <rect x="5.5" y="2.5" width="13" height="19" rx="3" />
          {/* Dynamic Island */}
          <rect x="9.5" y="4.5" width="5" height="1.5" rx="0.75" fill="currentColor" stroke="none" />
          {/* Mobile App Card UI */}
          <rect x="8" y="8" width="8" height="5" rx="1.5" />
          <line x1="8" y1="15" x2="14" y2="15" />
          <line x1="8" y1="17" x2="11.5" y2="17" />
          {/* Gesture Home Bar */}
          <line x1="9.5" y1="19.5" x2="14.5" y2="19.5" strokeWidth="1.6" />
        </svg>
      );

    case "ai-apps":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-black">
          {/* Neural Processor Core */}
          <rect x="6" y="6" width="12" height="12" rx="2.5" />
          {/* Intelligence Spark */}
          <path d="M12 9C12 10.8 11.2 11.5 9.5 12C11.2 12.5 12 13.2 12 15C12 13.2 12.8 12.5 14.5 12C12.8 11.5 12 10.8 12 9Z" fill="currentColor" stroke="none" />
          {/* Silicon Chip Pins */}
          <line x1="9" y1="2" x2="9" y2="6" />
          <line x1="15" y1="2" x2="15" y2="6" />
          <line x1="9" y1="18" x2="9" y2="22" />
          <line x1="15" y1="18" x2="15" y2="22" />
          <line x1="2" y1="9" x2="6" y2="9" />
          <line x1="2" y1="15" x2="6" y2="15" />
          <line x1="18" y1="9" x2="22" y2="9" />
          <line x1="18" y1="15" x2="22" y2="15" />
        </svg>
      );

    case "automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-black">
          {/* Trigger Node */}
          <circle cx="5" cy="6" r="2.5" />
          {/* Action Destination Node */}
          <rect x="14" y="3.5" width="6.5" height="5" rx="1.5" />
          <path d="M7.5 6H14" />
          {/* Automated Loop / Routing */}
          <path d="M17.25 8.5v3.5a2 2 0 0 1-2 2H8.75a2 2 0 0 0-2 2v2" />
          {/* Bottom Execution Node */}
          <rect x="14" y="15.5" width="6.5" height="5" rx="1.5" />
          <circle cx="6.75" cy="18" r="2" />
          <path d="M8.75 18H14" />
          {/* Directional Flow Arrow */}
          <path d="M11 5l2 1-2 1" />
        </svg>
      );

    case "ui-ux":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-black">
          {/* Precision Pen Nib */}
          <path d="M12 2.5L16 9.5L12 11.5L8 9.5L12 2.5Z" />
          <line x1="12" y1="7" x2="12" y2="11.5" />
          <circle cx="12" cy="7" r="0.75" fill="currentColor" stroke="none" />
          {/* Sculpted Bezier Curve */}
          <path d="M4 19.5C7.5 15 16.5 15 20 19.5" />
          {/* Tangent Anchor Handles */}
          <line x1="6.5" y1="17.5" x2="17.5" y2="17.5" strokeDasharray="1.5 1.5" />
          <rect x="5.5" y="16.5" width="2" height="2" rx="0.3" />
          <rect x="16.5" y="16.5" width="2" height="2" rx="0.3" />
          <circle cx="12" cy="17.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );

    case "cloud-devops":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-black">
          {/* Cloud Infrastructure Perimeter */}
          <path d="M17.5 19H6.5a4.5 4.5 0 0 1-.9-8.9 5.5 5.5 0 0 1 10.6-2.1A4.5 4.5 0 0 1 17.5 19z" />
          {/* Server Telemetry Racks */}
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="16" x2="14" y2="16" />
          <circle cx="7.5" cy="13" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="7.5" cy="16" r="0.6" fill="currentColor" stroke="none" />
          {/* CI/CD Deploy Vector */}
          <path d="M12 7.5V3.5M10 5.5l2-2 2 2" />
        </svg>
      );

    case "seo-marketing":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-black">
          {/* Search Lens Ring */}
          <circle cx="10" cy="10" r="7" />
          <line x1="15" y1="15" x2="21" y2="21" strokeWidth="2" />
          {/* Ascending Organic Growth Analytics Bars */}
          <line x1="6.5" y1="12" x2="6.5" y2="10" />
          <line x1="9" y1="12" x2="9" y2="8" />
          <line x1="11.5" y1="12" x2="11.5" y2="6.5" />
          {/* Trendline Vector */}
          <path d="M6 10l3-2.5 2.5 1.5 2.5-3" />
          <path d="M12.5 6H14v1.5" />
        </svg>
      );

    case "saas-engineering":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-black">
          {/* Multi-Tenant SaaS Platform Layers */}
          <path d="M12 2.5l8.5 4.25-8.5 4.25-8.5-4.25L12 2.5z" />
          <path d="M3.5 11l8.5 4.25 8.5-4.25" />
          <path d="M3.5 15.25l8.5 4.25 8.5-4.25" />
          <line x1="12" y1="6.75" x2="12" y2="19.5" strokeDasharray="1.5 1.5" />
          <circle cx="12" cy="6.75" r="1" fill="currentColor" stroke="none" />
        </svg>
      );

    default:
      return null;
  }
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO SECTION (Matching Home Page Hero Layout) */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[68vh] sm:min-h-[70vh] lg:min-h-[72vh] flex-col justify-center overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Heading and Description aligned to the bottom */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                ABOUT ZINFELL
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Technology should solve problems, not create them.
              </h1>
            </div>

            {/* Right Column: Description aligned to bottom baseline */}
            <div className="lg:col-span-5">
              <p
                id="hero-description"
                className="max-w-lg text-[14px] leading-[1.6] text-slate-600 sm:text-[14.5px] lg:text-[15.5px]"
              >
                Zinfell helps businesses transform ideas, challenges, and opportunities into practical digital solutions. We bring software development, design, AI, automation, and digital growth together to create technology that serves a real purpose.
              </p>
            </div>
          </div>

          {/* Action Buttons directly below */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
            <Link
              id="hero-cta-contact"
              href="/contact"
              className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Work With Us</span>
            </Link>
            <Link
              id="hero-cta-products"
              href="/products"
              className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none hover:shadow-none"
              style={{ color: "#000000" }}
            >
              <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore Our Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY & PERSPECTIVE */}
      <section className="border-t border-black/[0.06] bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                OUR STORY
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black leading-snug">
                Built on engineering velocity and practical craftsmanship.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              <p>
                Every business has processes that can work better, ideas that deserve to be built, and opportunities waiting to be explored.
              </p>
              <p>
                Zinfell exists to help businesses act on those opportunities. We work across the complete digital lifecycle—from understanding a challenge and designing a solution to developing, launching, and scaling the technology behind it.
              </p>
              <p>
                We also build our own software products, including <strong className="text-black font-medium">ZevioDesk</strong>, giving us a founder-level perspective on the challenges of architecting, deploying, and maintaining mission-critical platforms in the real world.
              </p>
            </div>
          </div>

          {/* Mission & Vision Split Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-2xl border border-black/[0.06] bg-[#FDFCFC] p-8 sm:p-10 text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                OUR MISSION
              </span>
              <h3 className="mt-2.5 text-xl sm:text-2xl font-medium tracking-tight text-black">
                Make technology useful, accessible, and impactful.
              </h3>
              <p className="mt-3 text-xs sm:text-[14px] leading-relaxed text-slate-600 font-normal">
                We turn complex enterprise requirements into straightforward, reliable digital experiences and automation systems that help businesses operate with precision.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#FDFCFC] p-8 sm:p-10 text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                OUR VISION
              </span>
              <h3 className="mt-2.5 text-xl sm:text-2xl font-medium tracking-tight text-black">
                Build technology that businesses can scale with.
              </h3>
              <p className="mt-3 text-xs sm:text-[14px] leading-relaxed text-slate-600 font-normal">
                We create lasting value through resilient software architecture, intelligent workflow automation, and proprietary SaaS platforms that solve genuine operational challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BELIEVE */}
      <section className="border-t border-black/[0.06] bg-slate-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              CORE VALUES
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black leading-snug">
              What we believe guides every line of code.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {BELIEFS.map((belief) => (
              <div
                key={belief.number}
                className="rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-slate-400 tracking-widest">
                    {belief.number}
                  </span>
                  <h3 className="mt-3 text-base sm:text-[17px] font-medium tracking-tight text-black leading-snug">
                    {belief.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                    {belief.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO (CAPABILITIES GRID) */}
      <section className="border-t border-black/[0.06] bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              SERVICES &amp; CAPABILITIES
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black leading-snug">
              Full-lifecycle engineering for ambitious teams.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F3F0] text-black mb-5">
                    <CapabilityIcon id={cap.id} />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-medium tracking-tight text-black leading-snug">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT PHILOSOPHY (ZEVIODESK HIGHLIGHT) */}
      <section className="border-t border-black/[0.06] bg-slate-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] sm:rounded-[32px] border border-black/[0.08] bg-white p-8 sm:p-12 lg:p-16 text-left shadow-[0_4px_30px_-10px_rgba(0,0,0,0.03)]">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                PRODUCT PHILOSOPHY
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black leading-snug">
                We don&apos;t just build technology for clients. We engineer products of our own.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                <strong className="text-black font-medium">ZevioDesk</strong> is proof of our execution: an all-in-one operating platform engineered for electronics repair businesses, integrating service intake tickets, parts inventory, WhatsApp CRM alerts, and POS billing.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://zeviodesk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white transition-all hover:bg-slate-800 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Discover ZevioDesk</span>
                  <ExternalLink className="h-4 w-4" style={{ color: "#ffffff" }} />
                </a>

                <Link
                  href="/contact"
                  className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400"
                  style={{ color: "#000000" }}
                >
                  <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Work With Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
