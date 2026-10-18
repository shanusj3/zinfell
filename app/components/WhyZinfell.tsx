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

const pad = (n: number) => n.toString().padStart(2, "0");

export default function WhyZinfell() {
  return (
    <section
      id="why-zinfell"
      aria-labelledby="why-zinfell-heading"
      className="relative isolate overflow-hidden bg-[#151615] py-20 lg:py-28 text-white"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="max-w-3xl text-left">
          <div
            id="why-zinfell-eyebrow"
            className="inline-flex items-center justify-center rounded-none border border-white/25 bg-transparent px-3.5 py-1.5 text-xs font-mono font-medium uppercase tracking-[0.2em] text-white sm:text-[13px]"
          >
            WHY ZINFELL
          </div>

          <h2
            id="why-zinfell-heading"
            className="mt-6 text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            A technology partner,{" "}
            <span className="text-[#A78BFA]">not just a service provider.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-[1.7] text-[#94A3B8]">
            We partner with ambitious businesses to build reliable, high-impact digital solutions
            that create long-term competitive advantage.
          </p>
        </div>

        {/* Cards Grid - Exact Service Card Style */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const isFeatured = i === 0;

            return (
              <div
                key={reason.id}
                id={reason.id}
                className={`relative isolate flex min-h-[240px] flex-col justify-between p-6 sm:p-7 rounded-none ${
                  isFeatured
                    ? "bg-[#A78BFA] text-[#04161C]"
                    : "bg-[#1C1E1C] text-white"
                }`}
              >
                {/* Card Top: Number */}
                <div className="flex items-start">
                  <span
                    className={`text-4xl font-medium leading-none tracking-tight sm:text-5xl ${
                      isFeatured ? "text-[#04161C]/80" : "text-white/30"
                    }`}
                  >
                    {pad(i + 1)}
                  </span>
                </div>

                {/* Card Bottom: Title & Description */}
                <div className="pt-8">
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isFeatured ? "text-[#04161C]" : "text-white"
                    }`}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isFeatured ? "text-[#04161C]/80" : "text-[#94A3B8]"
                    }`}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-none border border-white/10 bg-[#1C1E1C] p-7 sm:flex-row sm:px-9">
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Ready to work with a dedicated technology team?
            </h3>
            <p className="mt-1 text-sm text-[#94A3B8]">
              Let&apos;s discuss your project goals and architect the right solution.
            </p>
          </div>

          <Link
            id="why-zinfell-cta"
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#A78BFA] px-6 py-3 text-sm font-semibold text-[#04161C] transition-all hover:bg-[#9065F8] hover:shadow-lg hover:shadow-[#A78BFA]/25"
          >
            Start a Conversation
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.2}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
