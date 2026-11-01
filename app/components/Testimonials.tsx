type Testimonial = {
  id: string;
  quote: string;
  clientName: string;
  position: string;
  company: string;
};

const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    id: "testimonial-01",
    quote:
      "Zinfell transformed our manual operational workflows into a fully automated pipeline. The communication was proactive, the quality was exceptional, and the project shipped ahead of deadline.",
    clientName: "David Miller",
    position: "Founder & CEO",
    company: "Apex Global Logistics",
  },
  {
    id: "testimonial-02",
    quote:
      "Working with Zinfell felt like having an elite in-house engineering team. They helped us architect our web platform from the ground up with high performance, crisp design, and rock-solid scalability.",
    clientName: "Sarah Al-Mansoor",
    position: "Head of Digital",
    company: "Kestral Retail Group",
  },
  {
    id: "testimonial-03",
    quote:
      "From discovery to deployment, the team’s business-first approach stood out. They focused on our revenue goals rather than just writing code, delivering an AI chatbot that immediately reduced support load by 60%.",
    clientName: "Marcus Chen",
    position: "VP of Product",
    company: "Synapse AI Technologies",
  },
  {
    id: "testimonial-04",
    quote:
      "The engineering depth Zinfell brought to our fleet dispatch system was game-changing. Real-time updates, zero downtime, and our operational delays dropped by 45% in the first month.",
    clientName: "Elena Rostova",
    position: "Chief Operating Officer",
    company: "Veloce Mobility",
  },
];

const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    id: "testimonial-05",
    quote:
      "Our luxury e-commerce experience demanded perfection down to the millisecond. Zinfell delivered an ultra-fast headless store that lifted our conversion rate by over 3x within 60 days.",
    clientName: "Tariq Al-Hassan",
    position: "Managing Director",
    company: "Al Zahraa Boutique",
  },
  {
    id: "testimonial-06",
    quote:
      "Migrating legacy systems without interrupting live users is notoriously difficult. Zinfell orchestrated the entire cloud transition flawlessly with zero user-facing friction.",
    clientName: "Jason Reynolds",
    position: "CTO",
    company: "StackWave Cloud",
  },
  {
    id: "testimonial-07",
    quote:
      "Their team built our automated customer verification pipeline end-to-end. What used to take hours of manual compliance review now happens automatically in under 30 seconds.",
    clientName: "Maya Lin",
    position: "Product Lead",
    company: "Horizon FinTech",
  },
  {
    id: "testimonial-08",
    quote:
      "We needed to validate and ship a complex SaaS MVP in six weeks. Zinfell scoped, built, and launched it with clean architecture that made scaling effortlessly simple.",
    clientName: "Liam O'Connor",
    position: "Co-Founder",
    company: "NorthStar Ventures",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  const initials = item.clientName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  return (
    <div className="w-[340px] sm:w-[400px] lg:w-[420px] shrink-0 flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F5F3F1] border border-black/[0.04] text-black select-none shadow-none">
      {/* Top: 5 Stars + Quote */}
      <div>
        <div className="flex items-center gap-1 text-amber-500 mb-3.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-sm sm:text-[14px] leading-relaxed text-black/75 font-normal">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Bottom: Author Avatar & Metadata */}
      <div className="mt-6 pt-5 border-t border-black/[0.06] flex items-center gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-black/10 font-mono text-xs font-bold text-black shadow-2xs">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold tracking-tight text-black truncate">
            {item.clientName}
          </h4>
          <p className="text-xs text-black/55 truncate font-normal">
            {item.position} · <span className="text-black/80 font-medium">{item.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#FDFCFC] py-20 lg:py-28 text-black"
    >
      {/* Background subtle grid */}
      <div className="bg-tech-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_15%,black_20%,transparent_100%)] opacity-20" />

      {/* Section Header */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
              CLIENT STORIES
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
            >
              Don&apos;t just take<br className="hidden sm:inline" /> our word for it.
            </h2>
          </div>

          {/* Right Column: Description aligned to bottom baseline */}
          <div className="lg:col-span-5">
            <p
              id="testimonials-description"
              className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px] font-normal"
            >
              Hear from founders, product leaders, and businesses that have partnered with Zinfell to build, automate, and scale their digital operations.
            </p>
          </div>
        </div>
      </div>

      {/* Dual-Row Marquee - Top moves Left, Bottom moves Right */}
      <div className="relative w-full overflow-hidden flex flex-col gap-5 sm:gap-6 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        {/* Row 1: Moves Left */}
        <div
          className="animate-marquee-left flex items-stretch gap-5"
          style={{ animation: "marquee-left 52s linear infinite" }}
        >
          {[
            ...TESTIMONIALS_ROW_1,
            ...TESTIMONIALS_ROW_1,
            ...TESTIMONIALS_ROW_1,
            ...TESTIMONIALS_ROW_1,
          ].map((item, idx) => (
            <TestimonialCard key={`row1-${item.id}-${idx}`} item={item} />
          ))}
        </div>

        {/* Row 2: Moves Right */}
        <div
          className="animate-marquee-right flex items-stretch gap-5"
          style={{ animation: "marquee-right 52s linear infinite" }}
        >
          {[
            ...TESTIMONIALS_ROW_2,
            ...TESTIMONIALS_ROW_2,
            ...TESTIMONIALS_ROW_2,
            ...TESTIMONIALS_ROW_2,
          ].map((item, idx) => (
            <TestimonialCard key={`row2-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
