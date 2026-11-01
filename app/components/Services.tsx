import { ArrowUpRight } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  linkText?: string;
  isConsultation?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "web-development",
    title: "Web Design & Development",
    description: "Modern websites and web applications built for speed, users, and scalable growth.",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Reliable, intuitive mobile experiences crafted for iOS, Android, and cross-platform.",
  },
  {
    id: "ai-development",
    title: "AI Development",
    description: "Practical AI systems, intelligent chatbots, and document processing that automate work.",
  },
  {
    id: "automation",
    title: "Business Automation",
    description: "Connect your tools and automate repetitive workflows so your team focuses on growth.",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces that make complex software simple and engaging to use.",
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Targeted SEO strategies to increase visibility, ranking, and high-intent organic traffic.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven campaigns and performance strategies that turn attention into customers.",
  },
  {
    id: "consultation",
    title: "Not Sure Where to Start?",
    description: "Tell us about your idea and we'll help you scope and build the right digital solution.",
    isConsultation: true,
  },
];

export function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "web-development":
      // Web Design & Development: Sleek browser viewport with sidebar navigation & code syntax
      return (
        <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-14 w-14 text-black/75">
          <rect x="12" y="14" width="48" height="44" rx="4" />
          <line x1="12" y1="25" x2="60" y2="25" />
          <circle cx="18" cy="19.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="23" cy="19.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="28" cy="19.5" r="1.5" fill="currentColor" stroke="none" />
          <line x1="26" y1="25" x2="26" y2="58" />
          <line x1="16" y1="32" x2="22" y2="32" strokeLinecap="round" />
          <line x1="16" y1="38" x2="22" y2="38" strokeLinecap="round" />
          <line x1="16" y1="44" x2="20" y2="44" strokeLinecap="round" />
          <path d="M35 37L31 41.5L35 46" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M51 37L55 41.5L51 46" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="45" y1="35.5" x2="41" y2="47.5" strokeLinecap="round" />
        </svg>
      );
    case "mobile-apps":
      // Mobile App Development: Modern mobile device with interface cards & touch controls
      return (
        <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-14 w-14 text-black/75">
          <rect x="22" y="10" width="28" height="52" rx="6" />
          <rect x="31" y="14" width="10" height="2.5" rx="1.25" fill="currentColor" stroke="none" />
          <line x1="30" y1="56" x2="42" y2="56" strokeLinecap="round" />
          <rect x="26.5" y="21" width="19" height="13" rx="2.5" />
          <circle cx="31.5" cy="27.5" r="2" />
          <line x1="36.5" y1="26" x2="42" y2="26" strokeLinecap="round" />
          <line x1="36.5" y1="29" x2="40" y2="29" strokeLinecap="round" />
          <line x1="26.5" y1="39" x2="45.5" y2="39" strokeLinecap="round" />
          <line x1="26.5" y1="44" x2="39" y2="44" strokeLinecap="round" />
          <line x1="26.5" y1="49" x2="42" y2="49" strokeLinecap="round" />
        </svg>
      );
    case "ai-development":
      // AI Development: Central intelligence spark with symmetrical neural synaptic nodes
      return (
        <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-14 w-14 text-black/75">
          <path d="M36 16L40.5 31.5L56 36L40.5 40.5L36 56L31.5 40.5L16 36L31.5 31.5Z" strokeLinejoin="round" />
          <circle cx="36" cy="36" r="3" fill="currentColor" stroke="none" />
          <circle cx="17" cy="17" r="3.5" />
          <circle cx="55" cy="17" r="3.5" />
          <circle cx="17" cy="55" r="3.5" />
          <circle cx="55" cy="55" r="3.5" />
          <line x1="19.5" y1="19.5" x2="31.5" y2="31.5" strokeLinecap="round" />
          <line x1="52.5" y1="19.5" x2="40.5" y2="31.5" strokeLinecap="round" />
          <line x1="19.5" y1="52.5" x2="31.5" y2="40.5" strokeLinecap="round" />
          <line x1="52.5" y1="52.5" x2="40.5" y2="40.5" strokeLinecap="round" />
        </svg>
      );
    case "automation":
      // Business Automation: Automated workflow pipeline connecting trigger, engine & action nodes
      return (
        <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-14 w-14 text-black/75">
          <circle cx="20" cy="24" r="6.5" />
          <path d="M18.5 21L23 24L18.5 27Z" fill="currentColor" stroke="none" />
          <circle cx="50" cy="24" r="8.5" />
          <circle cx="50" cy="24" r="3" fill="currentColor" stroke="none" />
          <line x1="50" y1="11.5" x2="50" y2="15.5" strokeLinecap="round" />
          <line x1="50" y1="32.5" x2="50" y2="36.5" strokeLinecap="round" />
          <line x1="58.5" y1="24" x2="62.5" y2="24" strokeLinecap="round" />
          <line x1="26.5" y1="24" x2="38.5" y2="24" strokeLinecap="round" />
          <path d="M35 21L38.5 24L35 27" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="38.5" y1="24" x2="41.5" y2="24" strokeLinecap="round" />
          <circle cx="34" cy="50" r="7" />
          <path d="M33 45L31.5 49.5H36.5L35 55" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 36.5V43C50 46.866 46.866 50 43 50H41" strokeLinecap="round" />
          <path d="M44 47L41 50L44 53" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "ui-ux":
      // UI/UX Design: Precision vector pen tool sculpting a smooth Bezier curve with anchor handles
      return (
        <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-14 w-14 text-black/75">
          <path d="M16 48C26 34 46 62 56 48" strokeLinecap="round" />
          <line x1="28" y1="44.5" x2="44" y2="51.5" strokeDasharray="2 2" />
          <circle cx="28" cy="44.5" r="1.75" fill="currentColor" stroke="none" />
          <circle cx="44" cy="51.5" r="1.75" fill="currentColor" stroke="none" />
          <rect x="14" y="46" width="4" height="4" />
          <rect x="34" y="46" width="4" height="4" />
          <rect x="54" y="46" width="4" height="4" />
          <path d="M36 43L31 33H41Z" strokeLinejoin="round" />
          <line x1="36" y1="43" x2="36" y2="37" />
          <circle cx="36" cy="36" r="1" fill="currentColor" stroke="none" />
          <rect x="30" y="29" width="12" height="4" rx="1" />
          <path d="M31 29L33 15H39L41 29" strokeLinejoin="round" />
        </svg>
      );
    case "seo":
      // Search Engine Optimization: High-performance search query bar & ascending ranking growth trendline
      return (
        <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-14 w-14 text-black/75">
          {/* Top Search Query Bar with pill shape */}
          <rect x="13" y="10" width="46" height="13" rx="6.5" />
          {/* Search Lens inside query bar */}
          <circle cx="20.5" cy="16.5" r="2.8" />
          <line x1="22.5" y1="18.5" x2="25" y2="21" strokeLinecap="round" strokeWidth="1.5" />
          {/* Search Query text line */}
          <line x1="28" y1="16.5" x2="43" y2="16.5" strokeLinecap="round" />
          {/* Active blinking search cursor */}
          <line x1="46" y1="14" x2="46" y2="19" strokeLinecap="round" strokeWidth="1.2" />

          {/* Bottom baseline */}
          <line x1="13" y1="60" x2="59" y2="60" strokeLinecap="round" />

          {/* Ascending organic ranking bars */}
          <rect x="17" y="48" width="9" height="12" rx="2" />
          <rect x="30" y="40" width="9" height="20" rx="2" />
          <rect x="43" y="32" width="9" height="28" rx="2" fill="currentColor" fillOpacity="0.08" />

          {/* Growth Trendline - clean separation below the search bar */}
          <line x1="16" y1="45" x2="52" y2="27" strokeLinecap="round" />
          {/* Canonical Arrowhead pointing cleanly to the top-right */}
          <path
            d="M45 27H52V34"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "digital-marketing":
      // Digital Marketing: Bullseye target with precision 45-degree arrow & audience waves
      return (
        <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-14 w-14 text-black/75">
          <circle cx="32" cy="36" r="18" strokeDasharray="3 3" />
          <circle cx="32" cy="36" r="12" />
          <circle cx="32" cy="36" r="6" />
          <circle cx="32" cy="36" r="2" fill="currentColor" stroke="none" />
          <line x1="14" y1="18" x2="32" y2="36" strokeLinecap="round" />
          <path d="M27 35L32 36L31 31" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 21L17 21L17 17" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 18L14 18L14 14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M52 25C55.5 28.5 57 32 57 36C57 40 55.5 43.5 52 47" strokeLinecap="round" />
          <path d="M57 20C62 25 64 30.5 64 36C64 41.5 62 47 57 52" strokeLinecap="round" />
        </svg>
      );
    case "consultation":
    default:
      // Consultation: Strategy dialogue bubbles with discovery insight spark
      return (
        <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-14 w-14 text-black/75">
          <rect x="12" y="15" width="30" height="22" rx="4" />
          <path d="M18 37L13 43L24 37" strokeLinejoin="round" />
          <line x1="18" y1="22" x2="33" y2="22" strokeLinecap="round" />
          <line x1="18" y1="28" x2="27" y2="28" strokeLinecap="round" />
          <rect x="30" y="29" width="30" height="22" rx="4" />
          <path d="M54 51L59 57L48 51" strokeLinejoin="round" />
          <path d="M45 33L46.8 38.2L52 40L46.8 41.8L45 47L43.2 41.8L38 40L43.2 38.2Z" strokeLinejoin="round" />
          <circle cx="45" cy="40" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section
      id="solutions"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#FDFCFC] py-20 lg:py-28 text-black"
    >
      <div className="bg-tech-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_65%_40%_at_50%_10%,black_20%,transparent_100%)] opacity-20" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header - Left-aligned with small heading */}
        <div className="max-w-3xl text-left">
          <h2
            id="services-heading"
            className="text-2xl font-medium leading-[1.15] tracking-tight text-black sm:text-3xl lg:text-4xl"
          >
            Our Services<span className="text-[#A78BFA]">.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-[1.7] text-slate-600">
            Everything you need to build, launch and grow digitally.
          </p>
        </div>

        {/* 8-Card Uniform Grid */}
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            if (service.isConsultation) {
              return (
                <li
                  key={service.id}
                  id={service.id}
                  className="relative isolate scroll-mt-28"
                >
                  <a
                    href="#contact"
                    className="relative flex h-full min-h-[235px] sm:min-h-[310px] flex-col justify-between p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F5F3F1] text-black shadow-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  >
                    {/* Card Top: CTA Arrow */}
                    <div className="flex items-center justify-end">
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-black"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Card Center: Geometric Illustration */}
                    <div className="my-1.5 sm:my-4 flex items-center">
                      <ServiceIcon id={service.id} />
                    </div>

                    {/* Card Bottom: Title & Description */}
                    <div>
                      <h3 className="text-xl sm:text-[22px] font-normal tracking-tight text-black leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-black/60">
                        {service.description}
                      </p>
                    </div>
                  </a>
                </li>
              );
            }

            return (
              <li
                key={service.id}
                id={service.id}
                className="relative isolate flex min-h-[235px] sm:min-h-[310px] scroll-mt-28 flex-col justify-between p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F5F3F1] text-black shadow-none"
              >
                {/* Card Top/Center: Geometric Illustration */}
                <div className="pt-1 pb-1 sm:pt-2 sm:pb-4 flex items-center">
                  <ServiceIcon id={service.id} />
                </div>

                {/* Card Bottom: Title & Description */}
                <div>
                  <h3 className="text-xl sm:text-[22px] font-normal tracking-tight text-black leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-black/60">
                    {service.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
