"use client";

import Link from "next/link";

/* Pre-compute concentric wavy contour rings matching ElevenLabs audio-topographic aesthetic */
const WAVY_RINGS: string[] = (() => {
  const cx = 600;
  const cy = 400;
  const radii = [
    30, 58, 90, 126, 166, 210, 258, 310, 366, 426,
    490, 560, 635, 715, 800, 890, 985, 1085, 1190, 1300
  ];

  return radii.map((r) => {
    const points: string[] = [];
    const steps = 180;
    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * 2 * Math.PI;
      // 4-corner rounded squircle modulation
      const corner = 1 + 0.08 * Math.cos(4 * angle);
      // High-frequency acoustic ripple wave (32 oscillations)
      const wave = Math.sin(32 * angle) * (2.8 + (r / 300) * 3.2);
      const radius = r * corner + wave;
      const x = (cx + radius * Math.cos(angle)).toFixed(1);
      const y = (cy + radius * Math.sin(angle)).toFixed(1);
      points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }
    points.push("Z");
    return points.join(" ");
  });
})();

export type FinalCtaProps = {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  id?: string;
  border?: boolean;
};

export default function FinalCta({
  title = (
    <>
      Have an idea?<br className="hidden sm:inline" /> Let&apos;s turn it into reality.
    </>
  ),
  description,
  buttonText = "Start a project",
  buttonHref = "/contact",
  id = "contact",
  border = false,
}: FinalCtaProps = {}) {
  return (
    <section
      id={id}
      aria-labelledby="cta-heading"
      className={`relative isolate w-full overflow-hidden py-24 sm:py-32 lg:py-36 min-h-[500px] lg:min-h-[560px] flex items-center justify-center text-white ${
        border ? "border-t border-black/10" : ""
      }`}
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
        className="absolute inset-0 h-full w-full opacity-60 mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="final-cta-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#final-cta-grain)" />
      </svg>

      {/* 3. Mathematical SVG Wavy Contour Rings & Crosshair Grid - Masked out in center behind text */}
      <div
        className="absolute inset-0 h-full w-full pointer-events-none select-none"
        style={{
          maskImage: "radial-gradient(ellipse 55% 50% at 50% 50%, transparent 0%, transparent 28%, black 65%)",
          WebkitMaskImage: "radial-gradient(ellipse 55% 50% at 50% 50%, transparent 0%, transparent 28%, black 65%)",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle coordinate crosshair axes */}
          <g stroke="white" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 4">
            <line x1="600" y1="0" x2="600" y2="800" />
            <line x1="0" y1="400" x2="1200" y2="400" />
            <line x1="0" y1="0" x2="1200" y2="800" strokeOpacity="0.05" />
            <line x1="0" y1="800" x2="1200" y2="0" strokeOpacity="0.05" />
          </g>

          {/* Concentric Wavy Ripple Shapes */}
          <g fill="none" stroke="white" strokeWidth="1">
            {WAVY_RINGS.map((d, idx) => (
              <path
                key={idx}
                d={d}
                strokeOpacity={0.14 + (idx % 2 === 0 ? 0.06 : 0.02)}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* 4. Minimal Centered Content - Heading and Button Only (Clear of SVG background shapes) */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline */}
        <h2
          id="cta-heading"
          className="max-w-2xl text-3xl font-normal leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] drop-shadow-sm"
        >
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
            {description}
          </p>
        )}

        {/* Single Clean Action Button without arrow */}
        <div className="mt-8 sm:mt-9">
          <Link
            id="final-cta-start-project"
            href={buttonHref}
            className="btn-white inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-black transition-all hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            style={{ color: "#000000" }}
          >
            <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>{buttonText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
