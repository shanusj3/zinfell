import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Reason = {
  id: string;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    id: "business-first",
    title: "Business-First Thinking",
    description:
      "We start with the problem you're trying to solve—not the technology you're trying to use.",
  },
  {
    id: "modern-tech",
    title: "Modern Technology",
    description:
      "We use modern development, cloud, AI, and automation technologies to create future-ready solutions.",
  },
  {
    id: "built-to-scale",
    title: "Built to Scale",
    description:
      "We design solutions with performance, security, maintainability, and future growth in mind.",
  },
  {
    id: "one-partner",
    title: "One Technology Partner",
    description:
      "Design, development, AI, automation, SEO, and digital marketing under one roof.",
  },
  {
    id: "product-mindset",
    title: "Product Mindset",
    description:
      "We don't just build technology for clients. We build, launch, and operate our own products too.",
  },
  {
    id: "long-term-partner",
    title: "Long-Term Partnership",
    description:
      "We stay with you after launch—monitoring systems, shipping improvements, and scaling infrastructure.",
  },
];

function ReasonIcon({ id }: { id: string }) {
  switch (id) {
    case "business-first":
      // Business-First Thinking: Precision bullseye target with axis reticle
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-black"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "modern-tech":
      // Modern Technology: High-performance microchip processor with circuit bus pins
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-black"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <line x1="9" y1="2" x2="9" y2="5" />
          <line x1="15" y1="2" x2="15" y2="5" />
          <line x1="9" y1="19" x2="9" y2="22" />
          <line x1="15" y1="19" x2="15" y2="22" />
          <line x1="2" y1="9" x2="5" y2="9" />
          <line x1="2" y1="15" x2="5" y2="15" />
          <line x1="19" y1="9" x2="22" y2="9" />
          <line x1="19" y1="15" x2="22" y2="15" />
        </svg>
      );
    case "built-to-scale":
      // Built to Scale: 3D tiered architectural layers designed for modular scale
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-black"
          aria-hidden="true"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 12L12 17L22 12" />
          <path d="M2 17L12 22L22 17" />
        </svg>
      );
    case "one-partner":
      // One Technology Partner: Interconnected unified ecosystem nodes
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-black"
          aria-hidden="true"
        >
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "product-mindset":
      // Product Mindset: Precision launch rocket embodying builder & operator DNA
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-black"
          aria-hidden="true"
        >
          <path d="M12 2.5C12 2.5 17.5 5.5 17.5 13C17.5 16 16.5 18 15 19.5L12 22.5L9 19.5C7.5 18 6.5 16 6.5 13C6.5 5.5 12 2.5 12 2.5Z" />
          <circle cx="12" cy="10" r="2.25" />
          <path d="M9 19.5L6 21.5L6.5 18" />
          <path d="M15 19.5L18 21.5L17.5 18" />
        </svg>
      );
    case "long-term-partner":
      // Long-Term Partnership: Verified trust shield with checkmark
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-black"
          aria-hidden="true"
        >
          <path d="M12 2.5L19.5 6V12C19.5 17 16 20.5 12 22C8 20.5 4.5 17 4.5 12V6L12 2.5Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyZinfell() {
  return (
    <section
      id="why-zinfell"
      aria-labelledby="why-zinfell-heading"
      className="relative isolate overflow-hidden bg-[#FDFCFC] py-20 lg:py-28 text-black"
    >
      {/* Background subtle grid */}
      <div className="bg-tech-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_15%,black_20%,transparent_100%)] opacity-20" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header - Heading Left, Description Right (Matching Hero Structure) */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading */}
          <div className="lg:col-span-7">
            <h2
              id="why-zinfell-heading"
              className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
            >
              A technology partner,<br className="hidden sm:inline" /> not just a service provider.
            </h2>
          </div>

          {/* Right Column: Description aligned to bottom baseline */}
          <div className="lg:col-span-5">
            <p
              id="why-zinfell-description"
              className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px] font-normal"
            >
              We partner with ambitious businesses to build reliable, high-impact digital solutions that create long-term competitive advantage.
            </p>
          </div>
        </div>

        {/* Cards Grid - Matching Reference Design */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.id}
              id={reason.id}
              className="relative flex flex-col justify-between p-5 sm:p-6 min-h-[220px] sm:min-h-[235px] rounded-2xl sm:rounded-3xl bg-[#F5F3F1] text-black shadow-none transition-all duration-200"
            >
              {/* Card Top: White Icon Box at Top-Left */}
              <div className="flex items-start">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white border border-black/[0.08] shadow-2xs text-black">
                  <ReasonIcon id={reason.id} />
                </div>
              </div>

              {/* Card Bottom: Title & Description */}
              <div className="mt-5 sm:mt-6">
                <h3 className="text-[18px] sm:text-[19px] font-normal tracking-tight text-black leading-snug">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-black/60 font-normal">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 sm:mt-14 flex flex-col items-start sm:items-center justify-between gap-6 rounded-2xl sm:rounded-3xl border border-black/10 bg-[#F5F3F1] p-7 sm:p-9 sm:flex-row text-left">
          <div>
            <h3 className="text-lg font-medium tracking-tight text-black sm:text-xl">
              Ready to work with a dedicated technology team?
            </h3>
            <p className="mt-1 text-sm text-black/60 font-normal">
              Let&apos;s discuss your project goals and architect the right solution.
            </p>
          </div>

          <Link
            id="why-zinfell-cta"
            href="/contact"
            className="btn-primary group self-start sm:self-auto inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Start a Conversation</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2}
              style={{ color: "#ffffff" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
