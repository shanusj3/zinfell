import Image from "next/image";
import BusinessReadinessChart from "./BusinessReadinessChart";

type StatItem = {
  id: string;
  value: string;
  label: string;
  description: string;
};

const STATS_DATA: StatItem[] = [
  {
    id: "countries",
    value: "2+",
    label: "Countries Served",
    description: "Delivering high-velocity digital solutions for businesses across India, the UAE and international markets.",
  },
  {
    id: "projects",
    value: "10+",
    label: "Projects Completed",
    description: "Websites, scalable web applications, AI systems, and automated workflows delivered to production with measurable impact.",
  },
  {
    id: "craftsmanship",
    value: "100%",
    label: "Digital Craftsmanship",
    description: "End-to-end design, modern engineering architectures, and cloud deployments built for reliability and long-term business scale.",
  },
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className="relative isolate overflow-hidden bg-[#151615] py-20 lg:py-28 text-white border-t border-white/10"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header - Left-aligned heading & description, no pill */}
        <div className="max-w-3xl text-left">
          <h2
            id="social-proof-heading"
            className="text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Technology built for businesses{" "}
            <span className="text-[#A78BFA]">ready to grow.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-[1.7] text-[#94A3B8]">
            We work with businesses across industries to design, build, and improve the digital
            systems they depend on.
          </p>
        </div>

        {/* 2-Column Layout: Left visual chart, Right open stats */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Responsive Vector Business Readiness Chart */}
          <div className="lg:col-span-7">
            <BusinessReadinessChart />
          </div>

          {/* Right Column: Open typography points */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {STATS_DATA.map((item) => (
              <div key={item.id} className="flex items-start gap-4 text-left">
                {/* Violet marker matching mockup - sharp square without border radius */}
                <span
                  className="mt-2 h-2.5 w-2.5 rounded-none bg-[#A78BFA] shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-base font-normal text-white">
                      {item.value}
                    </span>
                    <span className="text-base font-normal text-white">
                      {item.label}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-normal leading-[1.7] text-[#94A3B8]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Strip - Bordered Cells matching reference */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 text-center">
          <div className="flex justify-center">
            <div
              id="trusted-clients-eyebrow"
              className="inline-flex items-center justify-center rounded-none border border-white/25 bg-transparent px-3.5 py-1.5 text-xs font-mono font-medium uppercase tracking-[0.2em] text-white sm:text-[13px]"
            >
              TRUSTED BY CLIENTS
            </div>
          </div>

          <div className="mt-6 mx-auto max-w-2xl border border-white/10 bg-[#1E201E]">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {/* Noor Al Zahraa */}
              <div className="flex h-28 sm:h-32 items-center justify-center p-6 bg-[#1E201E]">
                <Image
                  src="/noor-al-zahraa-light-grey.png"
                  alt="Noor Al Zahraa Boutique"
                  width={240}
                  height={92}
                  className="max-h-12 sm:max-h-14 w-auto object-contain opacity-90"
                />
              </div>

              {/* Profile Corporation */}
              <div className="flex h-28 sm:h-32 items-center justify-center p-6 bg-[#1E201E]">
                <Image
                  src="/profile-corporation-light-grey.avif"
                  alt="Profile Corporation"
                  width={240}
                  height={117}
                  className="max-h-12 sm:max-h-14 w-auto object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
