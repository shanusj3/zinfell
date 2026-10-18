"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

// 3 Layers of twinkling stars matching Hero space style
const STARS = makeStars(9876543, 90, 1, 1);
const STARS_FAINT = makeStars(1234567, 80, 0.45, 0.8);
const STARS_DIM = makeStars(5555555, 120, 0.25, 0.7);

export default function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative isolate w-full overflow-hidden bg-[#0B0814] py-16 sm:py-24 lg:py-28 min-h-screen min-h-[100dvh] sm:min-h-[580px] lg:min-h-[620px] flex items-center border-t border-white/10"
    >
      {/* Background Layer 1: Cosmic deep space violet gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#07050E] via-[#0D091B] to-[#180E2E]" />

      {/* Background Layer 2: Cosmic nebula / soft violet glow with reduced opacity */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-50 bg-[radial-gradient(ellipse_75%_40%_at_50%_100%,rgba(167,139,250,0.14)_0%,rgba(124,58,237,0.06)_45%,transparent_100%)]" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-20 h-[380px] w-[380px] rounded-full opacity-40 bg-[radial-gradient(circle,rgba(167,139,250,0.12)_0%,transparent_70%)] blur-[90px]" />

      {/* Background Layer 3: Star Field Layer 1 */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {STARS.map((star, i) => (
          <span
            key={`star-1-${i}`}
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

      {/* Background Layer 4: Star Field Layer 2 (fainter, smaller) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {STARS_FAINT.map((star, i) => (
          <span
            key={`star-2-${i}`}
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

      {/* Background Layer 5: Star Field Layer 3 (tiny faint stars) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {STARS_DIM.map((star, i) => (
          <span
            key={`star-3-${i}`}
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

      {/* Astronaut on Cliff - Proportional to section height */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-[320px] sm:w-[460px] md:w-[560px] lg:w-[640px] xl:w-[700px] select-none"
        aria-hidden="true"
      >
        <Image
          src="/Purple-lit Astronaut on Rocky Ledge.png"
          alt="Astronaut seated on rocky ledge gazing into space"
          width={1601}
          height={982}
          priority
          className="w-full h-auto object-contain object-bottom-right"
        />
      </div>

      {/* Soft left gradient scrim for mobile to ensure text contrast over any rock overlap */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full max-w-lg bg-gradient-to-r from-[#0B0814]/90 via-[#0B0814]/60 to-transparent lg:hidden"
        aria-hidden="true"
      />

      {/* Main Content - Full Width Grid, Left Aligned with other section typography */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          {/* Main Heading - Matching Other Sections' Size & Weight */}
          <h2
            id="cta-heading"
            className="text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Have an idea?{" "}
            <span className="text-[#A78BFA]">Let&apos;s turn it into reality.</span>
          </h2>

          {/* Description Paragraph - Matching Other Sections' Text Size & Color */}
          <p className="mt-4 max-w-xl text-sm sm:text-base leading-[1.7] text-[#94A3B8]">
            Whether you&apos;re starting something new, modernizing an existing system, or looking for smarter ways to operate, Zinfell is ready to build with you.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Primary Button */}
            <Link
              id="final-cta-start-project"
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-none bg-[#A78BFA]/90 px-6 py-3.5 text-sm font-semibold text-[#04161C] transition-all hover:bg-[#A78BFA]"
            >
              <span>Start a Project</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2.4}
              />
            </Link>

            {/* Secondary Button */}
            <Link
              id="final-cta-talk-expert"
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-none border border-white/20 bg-white/[0.04] backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <span>Talk to an Expert</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2.2}
              />
            </Link>
          </div>

          {/* Supporting Microcopy */}
          <p className="mt-4 text-xs text-white/50 sm:text-sm">
            Tell us what you&apos;re building. We&apos;ll help you figure out what comes next.
          </p>
        </div>
      </div>
    </section>
  );
}
