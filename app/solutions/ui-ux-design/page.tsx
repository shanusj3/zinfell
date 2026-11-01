import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Palette, 
  Layers, 
  Eye, 
  MousePointer, 
  Sparkles, 
  Layout, 
  Sliders, 
  Check, 
  CheckCircle2, 
  Maximize2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Website & SaaS Product Design | Zinfell",
  description:
    "Design intuitive websites, mobile applications, dashboards, and SaaS products with Zinfell's UI/UX design services.",
};

const FAQS = [
  {
    question: "Do you design for web, mobile, or both?",
    answer:
      "We design for both. We deliver cohesive design systems and responsive layouts optimized across desktop browsers, tablets, iOS, and Android mobile viewports.",
  },
  {
    question: "Do we receive editable Figma design files?",
    answer:
      "Yes. You receive clean, organized Figma source files with complete component variants, auto-layout setups, color and typography styles, and interactive prototypes.",
  },
  {
    question: "How do you ensure accessibility in your designs?",
    answer:
      "We design against WCAG 2.1 AA standards, ensuring strong color contrast ratios, clear focus indicators, readable font hierarchies, and intuitive touch targets for all screen sizes.",
  },
  {
    question: "What is your typical design turnaround time?",
    answer:
      "A complete website design or SaaS MVP interface typically takes 3 to 6 weeks, structured across discovery wireframes, feedback rounds, and finalized design systems.",
  },
];

export default function UiUxDesignPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - FIGMA DESIGN CANVAS AESTHETIC */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Design Principles */}
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                UI/UX DESIGN STUDIO
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Design digital experiences that{" "}
                <span className="text-black font-normal">make sense.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                A good interface helps people understand what to do next. A good user experience makes the entire journey feel natural. We craft component design systems, high-converting web layouts, and complex SaaS software dashboards that balance usability, aesthetics, and business conversion.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Discuss Your Design Project</span>
                </Link>
                <Link
                  href="/products"
                  className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none"
                  style={{ color: "#000000" }}
                >
                  <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore Products</span>
                </Link>
              </div>

              {/* Design Spec Chips */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5 pt-6 border-t border-black/[0.08]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Palette className="h-3 w-3 text-neutral-600" />
                  Figma Auto-Layout
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <CheckCircle2 className="h-3 w-3 text-neutral-600" />
                  WCAG 2.1 AA Contrast
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Layers className="h-3 w-3 text-neutral-600" />
                  Design Tokens
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Maximize2 className="h-3 w-3 text-neutral-600" />
                  Responsive Breakpoints
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Figma Artboard Canvas Simulator */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px]">
                {/* Canvas Studio Frame */}
                <div className="rounded-3xl border border-neutral-300/80 bg-white p-4 shadow-xl text-left relative">
                  {/* Canvas Toolbar Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-neutral-200 text-black font-mono font-medium">Select</span>
                      <span className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-500 font-mono">Frame</span>
                      <span className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-500 font-mono">Component</span>
                    </div>
                    <span className="font-mono text-neutral-400 text-[10px]">100% Canvas</span>
                  </div>

                  {/* Artboard Frame with Corner Handles */}
                  <div className="mt-3 relative rounded-2xl border-2 border-dashed border-neutral-300 bg-[#FAF9F8] p-4">
                    {/* Corner Resize Handles */}
                    <div className="absolute -top-1.5 -left-1.5 h-3 w-3 rounded-xs border border-neutral-400 bg-white shadow-xs" />
                    <div className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-xs border border-neutral-400 bg-white shadow-xs" />
                    <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-xs border border-neutral-400 bg-white shadow-xs" />
                    <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-xs border border-neutral-400 bg-white shadow-xs" />

                    {/* Artboard Label */}
                    <div className="flex items-center justify-between text-[10px] text-neutral-500 pb-2 border-b border-neutral-200/60 font-mono">
                      <span>Artboard · Home Screen</span>
                      <span>390 × 844</span>
                    </div>

                    {/* Interactive UI Element inside Artboard */}
                    <div className="mt-3 space-y-2.5">
                      <div className="rounded-xl bg-white p-3 border border-neutral-200/80 shadow-2xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-black">Product Analytics</span>
                          <span className="rounded-md bg-neutral-100 text-neutral-600 px-1.5 py-0.5 text-[9px] font-mono">Live</span>
                        </div>
                        <div className="h-2 w-3/4 rounded bg-neutral-200" />
                        <div className="h-1.5 w-1/2 rounded bg-neutral-100" />
                        <div className="flex gap-2 pt-1">
                          <div className="h-6 w-16 rounded-full bg-neutral-900" />
                          <div className="h-6 w-16 rounded-full border border-neutral-300 bg-white" />
                        </div>
                      </div>

                      {/* Design Token Inspector Row */}
                      <div className="rounded-xl bg-white p-2.5 border border-neutral-200/80 shadow-2xs flex items-center justify-between text-[10px] font-mono text-neutral-600">
                        <span>Radius: 16px</span>
                        <span>Fill: #FFFFFF</span>
                        <span>Stroke: 1px</span>
                      </div>
                    </div>

                    {/* Floating Designer Cursor 1 */}
                    <div className="absolute -top-2 right-8 flex items-center gap-1.5 bg-neutral-900 text-white rounded-full px-2 py-0.5 text-[9px] font-medium shadow-md">
                      <MousePointer className="h-2.5 w-2.5 fill-white" />
                      <span>Sarah (Lead UX)</span>
                    </div>

                    {/* Floating Client Cursor 2 */}
                    <div className="absolute -bottom-2 left-6 flex items-center gap-1.5 bg-neutral-700 text-white rounded-full px-2 py-0.5 text-[9px] font-medium shadow-md">
                      <MousePointer className="h-2.5 w-2.5 fill-white" />
                      <span>You (Reviewing)</span>
                    </div>
                  </div>

                  {/* Properties Inspector Footer */}
                  <div className="mt-4 pt-3 border-t border-neutral-200/70 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span>Component: Auto-Layout</span>
                    <span className="text-black font-semibold">Ready for Dev →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL PROJECT ARTBOARDS - HORIZONTAL CANVAS SLATES */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DESIGN ARTIFACTS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Thoughtful design systems built for scale and clarity
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every deliverable is created with reusable component libraries, strict token naming, and clear developer inspection notes to guarantee zero loss of fidelity during implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Slate 1: Design Systems */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-normal text-black tracking-tight">Figma Design Systems</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Scalable UI component libraries with button variants, inputs, modals, and navigation components linked to shared tokens.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                100% Auto-Layout 5.0
              </div>
            </div>

            {/* Slate 2: Interactive Prototypes */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-normal text-black tracking-tight">Interactive Prototypes</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Clickable test journeys that validate assumptions, test customer conversion paths, and align stakeholders prior to engineering.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                Validated with Real Users
              </div>
            </div>

            {/* Slate 3: SaaS Dashboards */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Layout className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-normal text-black tracking-tight">Complex SaaS Portals</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  High-density enterprise dashboards, granular permissions, multi-step filter drawers, and data table interactions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                Zero Cognitive Clutter
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESIGN TOKENS & ACCESSIBILITY MATRIX */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ACCESSIBILITY &amp; TOKENS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Engineered with strict design tokens &amp; contrast guidelines
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We design according to WCAG 2.1 AA international standards, guaranteeing legibility across all screen sizes and ambient lighting conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl bg-[#F5F3F1] p-6 text-black shadow-none">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">Contrast Standard</span>
              <p className="mt-2 text-2xl font-semibold text-black">4.5:1 AA</p>
              <p className="mt-1 text-xs text-neutral-600">Strict readability verification across all body copy and interactive UI buttons.</p>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 text-black shadow-none">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">Grid System</span>
              <p className="mt-2 text-2xl font-semibold text-black">8pt Grid</p>
              <p className="mt-1 text-xs text-neutral-600">Harmonious rhythm across margin, padding, component dimensions, and line-heights.</p>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 text-black shadow-none">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">Screen Coverage</span>
              <p className="mt-2 text-2xl font-semibold text-black">4 Breakpoints</p>
              <p className="mt-1 text-xs text-neutral-600">Mobile (390px), Tablet (768px), Desktop (1280px), and Ultra-wide (1440px+).</p>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 text-black shadow-none">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">Engineering Handoff</span>
              <p className="mt-2 text-2xl font-semibold text-black">CSS Tokens</p>
              <p className="mt-1 text-xs text-neutral-600">Directly mappable to Tailwind CSS config and CSS custom variables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESIGN PROCESS TIMELINE */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DESIGN METHODOLOGY
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              From discovery research to production handoff
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              A structured design journey that keeps your team aligned, validates assumptions early, and ensures developers have everything they need to build accurately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">01</span>
                <h3 className="mt-3 text-lg font-semibold text-black">User Research</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Mapping customer journeys, pain points, competitor benchmarks, and conversion goals.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Persona &amp; Sitemap
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">02</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Wireframing</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Low-fidelity structural wireframes that test page hierarchy and navigation flow quickly.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Information Architecture
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">03</span>
                <h3 className="mt-3 text-lg font-semibold text-black">High-Fidelity UI</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Polished visual design, micro-interactions, responsive screens, and interactive prototypes.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Figma Design System
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">04</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Developer Specs</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Organized component export assets, typography scales, spacing tokens, and developer inspect walk-through.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Inspect-Ready Handoff
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 6. FINAL CTA */}
      <FinalCta
        title="Let's make your product easier to use."
        buttonText="Start a Design Project"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
