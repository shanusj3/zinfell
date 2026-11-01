import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, ServiceIcon } from "../components/Services";

export const metadata: Metadata = {
  title: "Digital Solutions | Web, Mobile, AI & Automation | Zinfell",
  description:
    "Explore Zinfell's comprehensive digital solutions: custom web development, mobile apps, AI engineering, workflow automation, cloud infrastructure, and product design.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "Phase 01",
    tag: "Architecture",
    title: "Discovery & Architecture",
    description:
      "We deep-dive into your operational realities, user expectations, and technical constraints to draft a crystal-clear technical blueprint.",
  },
  {
    step: "02",
    phase: "Phase 02",
    tag: "Agile Sprints",
    title: "Sprint-Based Engineering",
    description:
      "Rapid, transparent agile sprints delivering testable software milestones with weekly video updates and staging environments.",
  },
  {
    step: "03",
    phase: "Phase 03",
    tag: "Security QA",
    title: "Rigorous QA & Testing",
    description:
      "Automated unit tests, end-to-end user flows, security audits, and multi-device performance benchmarks before any release.",
  },
  {
    step: "04",
    phase: "Phase 04",
    tag: "Global Launch",
    title: "Deployment & Evolution",
    description:
      "Smooth production launch, team onboarding, proactive monitoring, and iterative enhancements based on real analytics.",
  },
];

function MethodologyVisual({ step }: { step: string }) {
  switch (step) {
    case "01":
      // 01 · Discovery & Architecture: Layered 3D Technical Blueprint Slabs with Coordinate Grid & Reference Guides
      return (
        <svg
          viewBox="0 0 240 180"
          fill="none"
          stroke="currentColor"
          className="w-full h-full max-w-[210px] max-h-[155px] text-black/80"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Blueprint Base Grid Lines */}
          <line x1="35" y1="145" x2="205" y2="145" strokeDasharray="2.5 3.5" strokeOpacity="0.35" />
          <line x1="45" y1="160" x2="195" y2="160" strokeDasharray="2.5 3.5" strokeOpacity="0.25" />

          {/* Vertical Architectural Alignment Axis */}
          <line x1="120" y1="28" x2="120" y2="145" strokeDasharray="2.5 3" strokeOpacity="0.45" />
          <line x1="68" y1="52" x2="68" y2="132" strokeDasharray="2 3" strokeOpacity="0.25" />
          <line x1="172" y1="52" x2="172" y2="132" strokeDasharray="2 3" strokeOpacity="0.25" />

          {/* Top Layer: Client & Presentation Plane */}
          <path d="M 120 34 L 172 52 L 120 70 L 68 52 Z" strokeWidth="1.2" />
          <path d="M 94 43 L 146 61" strokeDasharray="2 2" strokeOpacity="0.4" />
          <path d="M 146 43 L 94 61" strokeDasharray="2 2" strokeOpacity="0.4" />

          {/* Middle Layer: Core API & Microservices Plane */}
          <path d="M 120 74 L 172 92 L 120 110 L 68 92 Z" strokeWidth="1.2" />
          <circle cx="120" cy="92" r="3" fill="currentColor" />
          <circle cx="120" cy="92" r="7.5" strokeDasharray="2 2" strokeOpacity="0.5" />
          <circle cx="94" cy="83" r="2" fill="currentColor" />
          <circle cx="146" cy="101" r="2" fill="currentColor" />

          {/* Bottom Layer: Cloud Database & Infrastructure Plane */}
          <path d="M 120 114 L 172 132 L 120 150 L 68 132 Z" strokeWidth="1.2" />

          {/* Dimension & Calibration Bracket */}
          <line x1="46" y1="52" x2="46" y2="132" strokeOpacity="0.35" />
          <line x1="42" y1="52" x2="50" y2="52" strokeOpacity="0.4" />
          <line x1="42" y1="132" x2="50" y2="132" strokeOpacity="0.4" />
          <circle cx="46" cy="92" r="1.5" fill="currentColor" />

          {/* Blueprint Corner Crosshair */}
          <line x1="192" y1="36" x2="204" y2="36" strokeOpacity="0.4" />
          <line x1="198" y1="30" x2="198" y2="42" strokeOpacity="0.4" />
        </svg>
      );

    case "02":
      // 02 · Sprint-Based Engineering: Iterative Agile Sprint Cycle & Assembling Modular Voxel Blocks
      return (
        <svg
          viewBox="0 0 240 180"
          fill="none"
          stroke="currentColor"
          className="w-full h-full max-w-[210px] max-h-[155px] text-black/80"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Main Agile Sprint Loop with Directional Arrow */}
          <path
            d="M 92 42 A 46 46 0 1 1 48 106"
            strokeWidth="1.25"
          />
          <path
            d="M 44 96 L 48 106 L 58 103"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />

          {/* Inner Continuous Feedback Loop */}
          <path
            d="M 92 56 A 32 32 0 1 1 64 100"
            strokeDasharray="2.5 3"
            strokeOpacity="0.4"
          />

          {/* Sprint Milestone Nodes */}
          <circle cx="92" cy="42" r="2.5" fill="currentColor" />
          <circle cx="138" cy="88" r="2.5" fill="currentColor" />
          <circle cx="92" cy="134" r="2.5" fill="currentColor" />

          {/* Code Syntax Bracket Accent */}
          <path d="M 34 78 L 28 88 L 34 98" strokeOpacity="0.35" />
          <path d="M 40 78 L 46 88 L 40 98" strokeOpacity="0.35" />

          {/* Assembling Modular 3D Engineering Blocks (Sprint deliverables) */}
          {/* Base Block 1 (Sprint 01) */}
          <path d="M 152 118 L 170 108 L 188 118 L 170 128 Z" strokeWidth="1.1" />
          <path d="M 152 118 L 152 134 L 170 144 L 170 128 Z" strokeWidth="1.1" />
          <path d="M 188 118 L 188 134 L 170 144 L 170 128 Z" strokeWidth="1.1" />

          {/* Middle Block 2 (Sprint 02) */}
          <path d="M 174 94 L 192 84 L 210 94 L 192 104 Z" strokeWidth="1.1" />
          <path d="M 174 94 L 174 110 L 192 120 L 192 104 Z" strokeWidth="1.1" />
          <path d="M 210 94 L 210 110 L 192 120 L 192 104 Z" strokeWidth="1.1" />

          {/* Active Floating Block 3 (Sprint 03 In Progress) */}
          <path d="M 158 64 L 176 54 L 194 64 L 176 74 Z" strokeWidth="1.2" />
          <path d="M 158 64 L 158 78 L 176 88 L 176 74 Z" strokeWidth="1.2" />
          <path d="M 194 64 L 194 78 L 176 88 L 176 74 Z" strokeWidth="1.2" />

          {/* Assembly Alignment Drop-Guides */}
          <line x1="176" y1="36" x2="176" y2="54" strokeDasharray="2 3" strokeOpacity="0.45" />
          <line x1="176" y1="88" x2="176" y2="108" strokeDasharray="2 3" strokeOpacity="0.4" />
        </svg>
      );

    case "03":
      // 03 · Rigorous QA & Testing: Precision Diagnostic Crosshair, Verification Shield & Test Integrity Matrix
      return (
        <svg
          viewBox="0 0 240 180"
          fill="none"
          stroke="currentColor"
          className="w-full h-full max-w-[210px] max-h-[155px] text-black/80"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Outer Precision Diagnostic Dial */}
          <circle cx="120" cy="90" r="54" strokeWidth="1.1" />
          <circle cx="120" cy="90" r="62" strokeDasharray="2.5 3.5" strokeOpacity="0.35" />

          {/* Full Coordinate Measurement Crosshairs */}
          <line x1="42" y1="90" x2="198" y2="90" strokeDasharray="3 3" strokeOpacity="0.35" />
          <line x1="120" y1="16" x2="120" y2="164" strokeDasharray="3 3" strokeOpacity="0.35" />

          {/* Precision Axis Calibration Ticks */}
          <line x1="66" y1="87" x2="66" y2="93" strokeOpacity="0.5" />
          <line x1="174" y1="87" x2="174" y2="93" strokeOpacity="0.5" />
          <line x1="117" y1="36" x2="123" y2="36" strokeOpacity="0.5" />
          <line x1="117" y1="144" x2="123" y2="144" strokeOpacity="0.5" />

          {/* Central Geometric Verification Shield / Diamond */}
          <path d="M 120 52 L 154 90 L 120 128 L 86 90 Z" strokeWidth="1.25" />
          <path d="M 120 60 L 146 90 L 120 120 L 94 90 Z" strokeDasharray="2 2" strokeOpacity="0.4" />

          {/* Central Verification Checkmark (Pass Indicator) */}
          <path
            d="M 110 90 L 117 97 L 132 82"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Automated Test Benchmark Indicators (Top Right) */}
          <line x1="182" y1="42" x2="208" y2="42" strokeOpacity="0.4" />
          <line x1="182" y1="48" x2="202" y2="48" strokeOpacity="0.4" />
          <line x1="182" y1="54" x2="206" y2="54" strokeOpacity="0.4" />
          <circle cx="178" cy="42" r="1.5" fill="currentColor" />
          <circle cx="178" cy="48" r="1.5" fill="currentColor" />
          <circle cx="178" cy="54" r="1.5" fill="currentColor" />

          {/* Test Coverage Tolerance Arc (Bottom Left) */}
          <path d="M 48 128 A 16 16 0 0 1 64 144" strokeDasharray="2 2" strokeOpacity="0.4" />
          <circle cx="48" cy="128" r="1.5" fill="currentColor" />
          <circle cx="64" cy="144" r="1.5" fill="currentColor" />
        </svg>
      );

    case "04":
      // 04 · Deployment & Evolution: Global Cloud Horizon, Upward Launch Vector & Live Telemetry Waveform
      return (
        <svg
          viewBox="0 0 240 180"
          fill="none"
          stroke="currentColor"
          className="w-full h-full max-w-[210px] max-h-[155px] text-black/80"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Global Edge Cloud Horizon (Base Wireframe Ellipse) */}
          <path d="M 32 142 C 68 120, 172 120, 208 142" strokeWidth="1.15" />
          <path d="M 46 154 C 78 136, 162 136, 194 154" strokeDasharray="2.5 3.5" strokeOpacity="0.35" />

          {/* Global Network Node Longitudes */}
          <line x1="120" y1="123" x2="120" y2="154" strokeDasharray="2 3" strokeOpacity="0.4" />
          <line x1="82" y1="128" x2="76" y2="153" strokeDasharray="2 3" strokeOpacity="0.3" />
          <line x1="158" y1="128" x2="164" y2="153" strokeDasharray="2 3" strokeOpacity="0.3" />
          <circle cx="120" cy="123" r="2" fill="currentColor" />
          <circle cx="82" cy="128" r="2" fill="currentColor" />
          <circle cx="158" cy="128" r="2" fill="currentColor" />

          {/* Upward Launch Trajectory & Scale Vector Curve */}
          <path
            d="M 52 134 C 88 128, 142 96, 184 42"
            strokeWidth="1.35"
          />
          <path
            d="M 172 42 L 184 42 L 184 54"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />

          {/* Target Production Node with Radiating Telemetry Broadcast Waves */}
          <circle cx="184" cy="42" r="3" fill="currentColor" />
          <circle cx="184" cy="42" r="13" strokeDasharray="2 2" strokeOpacity="0.45" />
          <circle cx="184" cy="42" r="24" strokeDasharray="2.5 3.5" strokeOpacity="0.25" />

          {/* Continuous Evolution / Live Telemetry Pulse Waveform */}
          <path
            d="M 36 90 L 60 90 L 66 82 L 74 102 L 81 85 L 87 90 L 118 90"
            strokeWidth="1.15"
            strokeOpacity="0.5"
            strokeLinejoin="round"
          />

          {/* Horizontal Reference Line */}
          <line x1="52" y1="134" x2="184" y2="134" strokeDasharray="2 3" strokeOpacity="0.25" />
        </svg>
      );

    default:
      return null;
  }
}

function getServiceHref(id: string) {
  return "/contact";
}

/* Pre-compute diagonal wavy topographic contour lines matching ElevenLabs olive-emerald terrain aesthetic */
const TOPOGRAPHIC_WAVES: string[] = (() => {
  const lines: string[] = [];
  const numLines = 26;
  const spacing = 46;
  const width = 1400;

  for (let k = -6; k < numLines; k++) {
    const points: string[] = [];
    const baseY = k * spacing;
    const steps = 140;

    for (let i = 0; i <= steps; i++) {
      const x = -100 + (i / steps) * (width + 200);
      // Diagonal slope matching the reference angle (~ -0.32)
      const diag = -0.32 * x;
      // Gentle sine undulation wave
      const wave = Math.sin(x * 0.016 + k * 0.18) * 18 + Math.cos(x * 0.008) * 8;
      const y = (baseY + diag + wave + 260).toFixed(1);
      points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y}`);
    }
    lines.push(points.join(" "));
  }
  return lines;
})();

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO SECTION (No dividing line at bottom) */}
      <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Heading and Description aligned to the bottom */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
                Digital solutions built for impact, performance, and scale
              </h1>
            </div>

            {/* Right Column: Description aligned to bottom baseline */}
            <div className="lg:col-span-5">
              <p className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px]">
                From high-performance web platforms and mobile applications to custom AI systems and seamless business automation, Zinfell architects technology that accelerates business growth.
              </p>
            </div>
          </div>

          {/* Action Buttons directly below */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Discuss your project</span>
            </Link>
            <Link
              href="/products"
              className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none hover:shadow-none"
              style={{ color: "#000000" }}
            >
              <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES SECTION */}
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-20 sm:pb-24 lg:pb-28">
        {/* Header: Title & Subtitle */}
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            CORE SERVICES
          </p>
          <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
            End-to-end technology capabilities
          </h2>
        </div>

        {/* Straight-line architectural grid with dots at all crossings (no card bg) */}
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="relative border-t border-l border-black/10">
            {/* Top-Left Corner Dot of entire grid */}
            <span
              className="absolute -top-[3px] -left-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none z-10"
              aria-hidden="true"
            />

            {/* 8-Card Straight Line Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service, index) => {
                const serviceHref = getServiceHref(service.id);

                return (
                  <Link
                    key={service.id}
                    href={serviceHref}
                    className="group relative flex min-h-[235px] sm:min-h-[310px] flex-col justify-between p-5 sm:p-7 lg:p-8 bg-transparent text-black transition-colors hover:bg-black/[0.018] border-r border-b border-black/10"
                  >
                    {/* Dot at bottom-right of every cell */}
                    <span
                      className="absolute -bottom-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none z-10"
                      aria-hidden="true"
                    />

                    {/* Top edge dots (only for first row on each breakpoint) */}
                    {index < 4 && (
                      <span
                        className="hidden lg:block absolute -top-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none z-10"
                        aria-hidden="true"
                      />
                    )}
                    {index < 2 && (
                      <span
                        className="hidden sm:block lg:hidden absolute -top-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none z-10"
                        aria-hidden="true"
                      />
                    )}
                    {index === 0 && (
                      <span
                        className="sm:hidden absolute -top-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none z-10"
                        aria-hidden="true"
                      />
                    )}

                    {/* Left edge dots (only for first column on each breakpoint) */}
                    {index % 4 === 0 && (
                      <span
                        className="hidden lg:block absolute -bottom-[3px] -left-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none z-10"
                        aria-hidden="true"
                      />
                    )}
                    {index % 2 === 0 && (
                      <span
                        className="hidden sm:block lg:hidden absolute -bottom-[3px] -left-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none z-10"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className="sm:hidden absolute -bottom-[3px] -left-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none z-10"
                      aria-hidden="true"
                    />

                    {/* Card Content: exact structure from homepage Services cards */}
                    {service.isConsultation ? (
                      <>
                        {/* Consultation Card Top: CTA Arrow */}
                        <div className="flex items-center justify-end">
                          <span
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>

                        {/* Consultation Card Center: Geometric Illustration */}
                        <div className="my-1.5 sm:my-4 flex items-center text-black/75 transition-colors group-hover:text-black">
                          <ServiceIcon id={service.id} />
                        </div>
                      </>
                    ) : (
                      /* Regular Card Top/Center: Geometric Illustration */
                      <div className="pt-1 pb-1 sm:pt-2 sm:pb-4 flex items-center text-black/75 transition-colors group-hover:text-black">
                        <ServiceIcon id={service.id} />
                      </div>
                    )}

                    {/* Card Bottom: Title & Description */}
                    <div className="mt-4 sm:mt-6">
                      <h3 className="text-xl sm:text-[22px] font-normal tracking-tight text-black leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-black/60">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE DELIVER (METHODOLOGY) */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              METHODOLOGY
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Predictable delivery, zero guesswork
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              A battle-tested engineering process ensuring transparency, on-time delivery, and clean code that scales seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col">
                {/* Minimalist Geometric Wireframe Card (No Hover Effect) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F4F3F0] flex items-center justify-center p-4 sm:p-6 select-none">
                  <MethodologyVisual step={step.step} />
                </div>

                {/* Text Content Below Visual Card */}
                <div className="mt-4 sm:mt-5">
                  <span className="text-[11px] font-mono text-black/45 tracking-widest uppercase">
                    {step.step} • {step.tag}
                  </span>
                  <h3 className="mt-1 text-base sm:text-[17px] font-medium tracking-tight text-black leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-black/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER (Olive-Gold & Forest-Emerald Atmospheric Grain with Diagonal Wavy Flow Lines) */}
      <section
        id="cta"
        aria-labelledby="cta-heading"
        className="relative isolate w-full overflow-hidden py-24 sm:py-32 lg:py-36 min-h-[500px] lg:min-h-[560px] flex items-center justify-center text-white"
      >
        {/* 1. Iridescent Violet, Pink, Sky-Blue & Peach Atmospheric Gradient */}
        <div
          className="absolute inset-0 -z-30 w-full h-full pointer-events-none select-none"
          style={{
            backgroundColor: "#130926",
            backgroundImage: `
              radial-gradient(ellipse 70% 60% at 76% 24%, rgba(244, 114, 182, 0.9) 0%, rgba(217, 70, 239, 0.72) 36%, transparent 72%),
              radial-gradient(ellipse 75% 65% at 80% 68%, rgba(56, 189, 248, 0.92) 0%, rgba(96, 165, 250, 0.82) 38%, rgba(129, 140, 248, 0.45) 62%, transparent 78%),
              radial-gradient(ellipse 70% 60% at 22% 32%, rgba(139, 92, 246, 0.94) 0%, rgba(124, 58, 237, 0.8) 40%, transparent 75%),
              radial-gradient(ellipse 65% 55% at 18% 78%, rgba(251, 146, 60, 0.85) 0%, rgba(244, 63, 94, 0.7) 35%, transparent 68%),
              radial-gradient(ellipse 80% 65% at 50% 50%, rgba(167, 139, 250, 0.65) 0%, rgba(192, 132, 252, 0.4) 45%, transparent 75%),
              radial-gradient(ellipse 90% 70% at 50% 96%, rgba(30, 10, 60, 0.96) 0%, rgba(19, 9, 38, 0.98) 75%),
              linear-gradient(135deg, #3b0764 0%, #581c87 25%, #6b21a8 48%, #4338ca 75%, #1e1b4b 100%)
            `,
          }}
        />

        {/* 2. Authentic Film Grain Texture Overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-65 mix-blend-overlay pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="solutions-cta-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#solutions-cta-grain)" />
        </svg>

        {/* 3. Diagonal Wavy Flow Contour Lines - Masked softly in the center for legibility */}
        <div
          className="absolute inset-0 h-full w-full pointer-events-none select-none"
          style={{
            maskImage:
              "radial-gradient(ellipse 55% 50% at 50% 50%, transparent 0%, transparent 25%, black 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 50% at 50% 50%, transparent 0%, transparent 25%, black 65%)",
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g fill="none" stroke="white" strokeWidth="1.15">
              {TOPOGRAPHIC_WAVES.map((d, idx) => (
                <path
                  key={idx}
                  d={d}
                  strokeOpacity={0.22 + (idx % 2 === 0 ? 0.08 : 0.02)}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* 4. Minimal Centered Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2
            id="cta-heading"
            className="max-w-2xl text-3xl font-normal leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] drop-shadow-sm"
          >
            Ready to build something extraordinary?
          </h2>

          <div className="mt-8 sm:mt-9">
            <Link
              id="solutions-cta-start-project"
              href="/contact"
              className="btn-white inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-black transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
              style={{ color: "#000000" }}
            >
              <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Start your project</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
