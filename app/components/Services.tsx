import { ArrowUpRight } from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  linkText?: string;
  isConsultation?: boolean;
};

const SERVICES: Service[] = [
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

const pad = (n: number) => String(n).padStart(2, "0");

export default function Services() {
  return (
    <section
      id="solutions"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#151615] py-20 lg:py-28 text-white"
    >
      <div className="bg-tech-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_65%_40%_at_50%_10%,black_20%,transparent_100%)] opacity-30" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header - Left-aligned with small heading */}
        <div className="max-w-3xl text-left">
          <h2
            id="services-heading"
            className="text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Our Services<span className="text-[#A78BFA]">.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-[1.7] text-[#94A3B8]">
            Everything you need to build, launch and grow digitally.
          </p>
        </div>

        {/* 8-Card Uniform Grid */}
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const isFeatured = i === 0;

            if (service.isConsultation) {
              return (
                <li
                  key={service.id}
                  id={service.id}
                  className="relative isolate scroll-mt-28"
                >
                  <a
                    href="#contact"
                    className="group relative flex h-full min-h-[240px] flex-col justify-between p-6 rounded-none bg-[#1C1E1C] text-white transition-all duration-200 hover:bg-[#222522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                  >
                    {/* Card Top: Arrow button inside circle in top right corner */}
                    <div className="flex items-start justify-end">
                      <span
                        className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#A78BFA] text-[#04161C] transition-all duration-200 group-hover:scale-110 group-hover:bg-[#9065F8] shadow-md shadow-[#A78BFA]/20"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="h-5 w-5" strokeWidth={2.4} />
                      </span>
                    </div>

                    {/* Card Bottom: Title & Description */}
                    <div className="pt-8">
                      <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#A78BFA]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
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
                className={`relative isolate flex min-h-[240px] scroll-mt-28 flex-col justify-between p-6 rounded-none ${
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
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isFeatured ? "text-[#04161C]/80" : "text-[#94A3B8]"
                    }`}
                  >
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
