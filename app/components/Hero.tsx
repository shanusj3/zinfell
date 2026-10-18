"use client";

import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

const SERVICES_LIST = [
  "Web Development",
  "Mobile Apps",
  "AI",
  "Automation",
  "SEO",
  "Digital Marketing",
];

/* Deterministic star field (seeded) so SSR and client markup match */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function makeStars(seed: number, count: number, dim: number, maxSize: number) {
  const rand = seededRandom(seed);
  return Array.from({ length: count }, () => {
    const big = rand() > 0.92;
    return {
      left: (rand() * 100).toFixed(2),
      top: (rand() * 100).toFixed(2),
      size: (big ? (2 + rand()) * maxSize : (1 + rand() * 0.8) * maxSize).toFixed(1),
      opacity: ((big ? 0.85 + rand() * 0.15 : 0.3 + rand() * 0.5) * dim).toFixed(2),
      delay: (rand() * 6).toFixed(1),
      twinkle: rand() > 0.6,
    };
  });
}

// Layer 1: main stars. Layer 2: fainter, smaller. Layer 3: many tiny, very faint stars.
const STARS = makeStars(20260715, 140, 1, 1);
const STARS_FAINT = makeStars(777123, 120, 0.4, 0.8);
const STARS_DIM = makeStars(424242, 200, 0.25, 0.7);

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-[#0B0814] text-white pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Background Layer 1: Cosmic deep space violet gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#07050E] via-[#0D091B] to-[#180E2E]" />

      {/* Background Layer 2: Soft cosmic violet glow at the bottom with reduced opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(ellipse_75%_40%_at_50%_100%,rgba(167,139,250,0.14)_0%,rgba(124,58,237,0.06)_45%,transparent_100%)]" />

      {/* Background Layer 3: White star dots */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {STARS.map((star, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-white ${star.twinkle ? "animate-pulse" : ""}`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      {/* Background Layer 4: Second star layer (fainter, smaller) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {STARS_FAINT.map((star, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-white ${star.twinkle ? "animate-pulse" : ""}`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: "5s",
            }}
          />
        ))}
      </div>

      {/* Background Layer 5: Third star layer (many tiny, very faint) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {STARS_DIM.map((star, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-white ${star.twinkle ? "animate-pulse" : ""}`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: "6s",
            }}
          />
        ))}
      </div>



      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 text-center">
        {/* Eyebrow - Violet tracked uppercase text */}
        <p
          id="hero-eyebrow"
          className="fade-up text-[11px] font-bold uppercase tracking-[0.22em] text-[#A78BFA] sm:text-[13px]"
        >
          DIGITAL SOLUTIONS • AI • AUTOMATION • PRODUCTS
        </p>

        {/* Main Headline - Crisp White with Violet Accent */}
        <h1
          id="hero-heading"
          className="fade-up mt-4 sm:mt-5 max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight text-[#ECE7DA] [animation-delay:80ms] sm:text-5xl lg:text-[3.25rem]"
        >
          We build digital solutions that<br className="hidden sm:inline" />{" "}
          move <span className="text-[#A78BFA]">businesses forward.</span>
        </h1>

        {/* Description - 100% White, high visibility */}
        <p
          id="hero-description"
          className="fade-up mt-4 sm:mt-5 max-w-2xl text-base leading-[1.75] text-[#ECE7DA] [animation-delay:160ms] sm:max-w-3xl sm:text-lg"
        >
          From high-performance websites and custom software to AI-powered systems
          and business automation, Zinfell helps businesses turn ideas into powerful,
          scalable digital solutions.
        </p>

        {/* Action Buttons */}
        <div className="fade-up mt-6 sm:mt-8 flex w-full flex-col items-center justify-center gap-3 sm:gap-4 [animation-delay:240ms] sm:w-auto sm:flex-row">
          <Link
            id="hero-cta-start-project"
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#A78BFA]/90 px-6 py-3 text-base font-semibold text-[#04161C] transition-all hover:bg-[#A78BFA] hover:shadow-lg hover:shadow-[#A78BFA]/25 sm:w-auto"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.4} aria-hidden="true" />
          </Link>
          <Link
            id="hero-cta-explore-solutions"
            href="#solutions"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-[#130E24]/60 px-6 py-3 text-base font-semibold text-[#ECE7DA] backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10 sm:w-auto"
          >
            Explore Solutions
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.2} aria-hidden="true" />
          </Link>


        </div>


      </div>
    </section>
  );
}
