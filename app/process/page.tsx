import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";

export const metadata: Metadata = {
  title: "Our Software Development Process | Zinfell",
  description:
    "Discover how Zinfell approaches project discovery, planning, design, software development, testing, deployment, and ongoing improvement.",
};

const PHASES = [
  {
    id: "discover",
    number: "01",
    tag: "DISCOVERY",
    name: "Discover",
    subtitle: "Understand the problem before choosing the solution.",
    summary:
      "We learn about your business, audience, existing systems, objectives, and challenges before writing a single line of architecture.",
    includes: [
      "Requirements gathering",
      "Stakeholder discussions",
      "Problem definition",
      "User and workflow analysis",
      "Project goals and priorities",
    ],
    outcome: "A shared understanding of the problem and what success should look like.",
  },
  {
    id: "strategize",
    number: "02",
    tag: "STRATEGY",
    name: "Strategize",
    subtitle: "Create a practical plan.",
    summary:
      "We turn raw requirements into a structured scope and identify the most efficient technical approach for your budget and timeline.",
    includes: [
      "Feature prioritization & MVP scoping",
      "Technical planning & stack selection",
      "Cloud architecture decisions",
      "Integration & API requirements",
      "Timeline and milestone planning",
    ],
    outcome: "A clear architectural direction and an agreed project scope.",
  },
  {
    id: "design",
    number: "03",
    tag: "UI/UX DESIGN",
    name: "Design",
    subtitle: "Make the experience intuitive.",
    summary:
      "We plan user journeys and create high-density, cohesive interfaces that make complex software feel straightforward.",
    includes: [
      "Information architecture",
      "Wireframes and user flows",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Design-system & token planning",
    ],
    outcome: "A clear design direction ready for precision engineering.",
  },
  {
    id: "build",
    number: "04",
    tag: "ENGINEERING",
    name: "Build",
    subtitle: "Turn the plan into working software.",
    summary:
      "We implement the frontend, backend, database models, integrations, and automated pipelines using modern TypeScript and Next.js.",
    includes: [
      "Application & component development",
      "API and database implementation",
      "Third-party & payment integrations",
      "Peer code reviews & static linting",
      "Iterative sprint demonstrations",
    ],
    outcome: "Working software strictly aligned with the agreed requirements.",
  },
  {
    id: "launch",
    number: "05",
    tag: "TEST & DEPLOY",
    name: "Test and launch",
    subtitle: "Prepare the solution for real use.",
    summary:
      "We validate critical user flows, verify edge cases, audit performance benchmarks, and prepare the deployment infrastructure.",
    includes: [
      "Functional end-to-end testing",
      "Responsive & cross-browser compatibility",
      "Performance & Core Web Vitals checks",
      "Production deployment configuration",
      "Production release & DNS cutover",
    ],
    outcome: "A battle-tested solution ready for its intended users.",
  },
  {
    id: "grow",
    number: "06",
    tag: "SCALE & EVOLVE",
    name: "Improve and grow",
    subtitle: "Keep building value after launch.",
    summary:
      "Where ongoing support is agreed, we monitor system vitals, optimize cloud costs, and evolve the product as your business expands.",
    includes: [
      "Active maintenance and bug fixes",
      "Feature enhancements & iteration",
      "Telemetry & performance improvements",
      "Cloud infrastructure optimization",
      "Analytics and digital growth support",
    ],
    outcome: "A reliable path for your software to scale alongside business growth.",
  },
];

const METHODOLOGY_PILLARS = [
  {
    number: "01",
    title: "Fixed-Scope Sprints",
    description: "Structured two-week cycles with clear deliverables, transparent milestone reporting, and zero scope drift.",
  },
  {
    number: "02",
    title: "Direct Engineer Access",
    description: "Communicate directly with senior engineers and product designers, eliminating account-manager telephone games.",
  },
  {
    number: "03",
    title: "Continuous Staging Builds",
    description: "Automated CI/CD pipelines deploying isolated preview environments for every pull request, keeping you constantly in the loop.",
  },
  {
    number: "04",
    title: "100% IP & Code Ownership",
    description: "Clean repository handoff, complete documentation, automated infrastructure scripts, and zero vendor lock-in.",
  },
];

/* Custom Bespoke SVG Icons for each phase */
function ProcessIcon({ id }: { id: string }) {
  switch (id) {
    case "discover":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-black"
        >
          {/* Compass Outer Dial Ring */}
          <circle cx="12" cy="12" r="9" />
          {/* Cardinal Ticks */}
          <line x1="12" y1="3" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="21" />
          <line x1="3" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="21" y2="12" />
          {/* Compass Needle (Precision Diamond) */}
          <polygon points="12,6.5 14.5,12 12,17.5 9.5,12" />
          <polygon points="12,6.5 14.5,12 12,12" fill="currentColor" stroke="none" />
          {/* Center Pivot Point */}
          <circle cx="12" cy="12" r="1.25" fill="#F4F3F0" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "strategize":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-black"
        >
          {/* Strategy Blueprint Canvas */}
          <rect x="3" y="3" width="18" height="18" rx="2.5" />
          {/* Architecture Grid Guides */}
          <line x1="3" y1="9" x2="21" y2="9" strokeDasharray="1.5 2" />
          <line x1="9" y1="9" x2="9" y2="21" strokeDasharray="1.5 2" />
          {/* Strategy Roadmap Flow */}
          <circle cx="6" cy="6" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="14" cy="14" r="1.75" />
          <circle cx="18" cy="18" r="1.5" fill="currentColor" stroke="none" />
          <path d="M6 6h8v8h4" />
          {/* Strategy Target Spark */}
          <path d="M17 5l.75 1.5L19 7.25l-1.25.75L17 9.5l-.75-1.5L15 7.25l1.25-.75Z" fill="currentColor" stroke="none" />
        </svg>
      );

    case "design":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-black"
        >
          {/* Vector Pen Tool Nib */}
          <path d="M12 2.5L16.5 9.5L12 11.5L7.5 9.5L12 2.5Z" />
          <line x1="12" y1="7" x2="12" y2="11.5" />
          <circle cx="12" cy="7" r="0.75" fill="currentColor" stroke="none" />
          {/* Sculpted Bezier Vector Curve */}
          <path d="M4 19.5C7.5 14.5 16.5 14.5 20 19.5" />
          {/* Tangent Anchor Handles */}
          <line x1="6.5" y1="17" x2="17.5" y2="17" strokeDasharray="1.5 1.5" />
          <rect x="5.5" y="16" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
          <rect x="16.5" y="16" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="17" r="1" fill="#F4F3F0" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "build":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-black"
        >
          {/* Code Terminal Shell */}
          <rect x="2.5" y="3.5" width="19" height="17" rx="2.5" />
          <line x1="2.5" y1="8" x2="21.5" y2="8" />
          {/* Terminal Window Dots */}
          <circle cx="5.5" cy="5.75" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="8" cy="5.75" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="10.5" cy="5.75" r="0.6" fill="currentColor" stroke="none" />
          {/* Command Prompt Shell `>_` */}
          <path d="M6 11.5l2.5 2.25L6 16" />
          <line x1="10.5" y1="16" x2="14.5" y2="16" strokeWidth="1.8" />
          {/* Compiled Output Block */}
          <path d="M16 11l2 1.5-2 1.5" />
          <line x1="18.5" y1="16" x2="18.5" y2="16.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "launch":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-black"
        >
          {/* Launch Spacecraft Body */}
          <path d="M12 2.5C9.5 5 8 9 8 13.5l4 3 4-3c0-4.5-1.5-8.5-4-11z" />
          {/* Porthole Window */}
          <circle cx="12" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
          {/* Left Wing Stabilizer */}
          <path d="M8 12.5L4.5 15l.5 3 3-1" />
          {/* Right Wing Stabilizer */}
          <path d="M16 12.5L19.5 15l-.5 3-3-1" />
          {/* Jet Thruster Exhaust Plume */}
          <path d="M10.5 16.5L12 21.5L13.5 16.5" />
        </svg>
      );

    case "grow":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-black"
        >
          {/* Upward Growth Trendline */}
          <path d="M3.5 18.5l6-6 4 4 7-8" />
          {/* Arrowhead */}
          <polyline points="15.5 8.5 20.5 8.5 20.5 13.5" />
          {/* Analytics Baseline */}
          <line x1="3.5" y1="21.5" x2="20.5" y2="21.5" />
          {/* Telemetry Milestone Nodes */}
          <circle cx="9.5" cy="12.5" r="1.25" fill="#F4F3F0" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="13.5" cy="16.5" r="1.25" fill="#F4F3F0" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20.5" cy="8.5" r="1.25" fill="currentColor" stroke="none" />
          {/* Performance Volume Bars */}
          <line x1="6" y1="21.5" x2="6" y2="19.5" />
          <line x1="9.5" y1="21.5" x2="9.5" y2="17" />
          <line x1="13.5" y1="21.5" x2="13.5" y2="18.5" />
          <line x1="17" y1="21.5" x2="17" y2="15.5" />
        </svg>
      );

    default:
      return null;
  }
}

/* Custom Minimal Checklist Indicator */
function ProcessCheck() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4 text-black shrink-0 mt-0.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6.75" stroke="currentColor" strokeOpacity="0.2" />
      <path d="M5.25 8l2 2 3.5-4" />
    </svg>
  );
}

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO SECTION (Consistent with Home, About & Solutions Hero Architecture) */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[60vh] sm:min-h-[64vh] lg:min-h-[68vh] flex-col justify-center overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                HOW WE WORK
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                From idea to execution.
              </h1>
            </div>

            {/* Right Column: Narrative Subtitle */}
            <div className="lg:col-span-5 lg:pl-4">
              <p className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px]">
                Great digital products don&apos;t happen by accident. Our disciplined, six-phase lifecycle connects business objectives, UX architecture, and scalable engineering to move projects predictably from whiteboard to production.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white transition-all hover:bg-slate-800 shadow-md"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Discuss Your Project</span>
            </Link>

            <Link
              href="/solutions"
              className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400"
              style={{ color: "#000000" }}
            >
              <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore Solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SIX-STEP PROCESS PHASES */}
      <section className="border-t border-black/[0.06] bg-slate-50/40 py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              SIX-PHASE LIFECYCLE
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black leading-snug">
              A structured roadmap from discovery to continuous scale.
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {PHASES.map((phase) => (
              <div
                key={phase.number}
                className="rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.02)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Column 1: Phase Identifier, Custom SVG Icon & Description */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
                        PHASE {phase.number} • {phase.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5 pt-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F3F0] text-black shrink-0">
                        <ProcessIcon id={phase.id} />
                      </div>
                      <h3 className="text-2xl sm:text-[26px] font-medium tracking-tight text-black leading-snug">
                        {phase.name}
                      </h3>
                    </div>

                    <p className="text-sm font-medium text-black/85">
                      {phase.subtitle}
                    </p>

                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                      {phase.summary}
                    </p>
                  </div>

                  {/* Column 2: What this includes */}
                  <div className="lg:col-span-5 lg:border-l lg:border-black/[0.06] lg:pl-8 space-y-3.5">
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
                      WHAT THIS INCLUDES
                    </p>
                    <ul className="space-y-2.5">
                      {phase.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-slate-700">
                          <ProcessCheck />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: The Outcome */}
                  <div className="lg:col-span-3 lg:border-l lg:border-black/[0.06] lg:pl-8 space-y-2.5">
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
                      PHASE OUTCOME
                    </p>
                    <div className="rounded-xl border border-black/[0.06] bg-[#FDFCFC] p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed text-slate-700">
                      {phase.outcome}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADAPTIVE METHODOLOGY PILLARS */}
      <section className="border-t border-black/[0.06] bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ADAPTIVE METHODOLOGY
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black leading-snug">
              Every project is unique. Our rigor stays constant.
            </h2>
            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              We adapt our sprint cadence and team topology to your scope, complexity, and deadline rather than forcing every engagement into the same rigid mold.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {METHODOLOGY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-2xl border border-black/[0.06] bg-[#FDFCFC] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-slate-400 tracking-widest">
                    {pillar.number}
                  </span>
                  <h3 className="mt-3 text-base sm:text-[17px] font-medium tracking-tight text-black leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA (Shared Atmospheric Wavy Contour FinalCta) */}
      <FinalCta
        title={
          <>
            Ready to bring your idea<br className="hidden sm:inline" /> to reality?
          </>
        }
        buttonText="Discuss Your Project"
        buttonHref="/contact"
      />
    </div>
  );
}
