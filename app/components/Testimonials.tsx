type Testimonial = {
  id: string;
  quote: string;
  clientName: string;
  position: string;
  company: string;
};

const TESTIMONIALS: Testimonial[] = [
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
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#151615] py-20 lg:py-28 text-white"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="max-w-3xl text-left">
          <div
            id="testimonials-eyebrow"
            className="inline-flex items-center justify-center rounded-none border border-white/25 bg-transparent px-3.5 py-1.5 text-xs font-mono font-medium uppercase tracking-[0.2em] text-white sm:text-[13px]"
          >
            CLIENT STORIES
          </div>

          <h2
            id="testimonials-heading"
            className="mt-6 text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Don&apos;t just take{" "}
            <span className="text-[#A78BFA]">our word for it.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-[1.7] text-[#94A3B8]">
            Hear from founders, product leaders, and businesses that have partnered with Zinfell
            to build, automate, and scale their digital operations.
          </p>
        </div>

        {/* Testimonials 3-Card Grid - Sharp, No Border Radius, No X Icon */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => {
            const initials = item.clientName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2);

            return (
              <div
                key={item.id}
                className="relative flex min-h-[220px] flex-col justify-between rounded-none border border-white/10 bg-[#1C1E1C] p-6 sm:p-7 text-left transition-colors duration-200 hover:border-white/20"
              >
                {/* Top Row: Author Avatar & Metadata (No X icon) */}
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A78BFA]/30 bg-[#A78BFA]/10 font-mono text-xs font-bold text-[#A78BFA]">
                    {initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold tracking-tight text-white truncate">
                      {item.clientName}
                    </h3>
                    <p className="text-xs text-[#94A3B8] truncate">
                      {item.position} · <span className="text-slate-300 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="mt-6 text-sm leading-relaxed text-[#CBD5E1]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
