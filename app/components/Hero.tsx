"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[68vh] sm:min-h-[70vh] lg:min-h-[72vh] flex-col justify-center overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading and Description aligned to the bottom */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading */}
          <div className="lg:col-span-7">
            <h1
              id="hero-heading"
              className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
            >
              We build digital solutions<br className="hidden sm:inline" /> that move businesses forward
            </h1>
          </div>

          {/* Right Column: Description aligned to bottom baseline */}
          <div className="lg:col-span-5">
            <p
              id="hero-description"
              className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px]"
            >
              Powering modern enterprises, startups, and growing teams. From high-performance websites and custom software to AI-powered systems and business automation.
            </p>
          </div>
        </div>

        {/* Action Buttons directly below */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
          <Link
            id="hero-cta-start-project"
            href="/contact"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Start a project</span>
          </Link>
          <Link
            id="hero-cta-explore-solutions"
            href="#solutions"
            className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none hover:shadow-none"
            style={{ color: "#000000" }}
          >
            <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Contact sales</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
