import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Flagship Software Platforms by Zinfell",
  description:
    "Discover enterprise and SaaS software products engineered and operated by Zinfell, including ZevioDesk for repair business operations.",
};

/* Pre-compute diagonal wavy topographic contour lines matching solutions CTA aesthetic */
const TOPOGRAPHIC_WAVES: string[] = (() => {
  const lines: string[] = [];
  const numLines = 26;
  const spacing = 46;
  const width = 1400;

  for (let k = -6; k < numLines; k++) {
    const points: string[] = [];
    const baseY = k * spacing;
    const steps = 140;

    for (let i = 0; i <= steps; i++) {
      const x = -100 + (i / steps) * (width + 200);
      const diag = -0.32 * x;
      const wave = Math.sin(x * 0.016 + k * 0.18) * 18 + Math.cos(x * 0.008) * 8;
      const y = (baseY + diag + wave + 260).toFixed(1);
      points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y}`);
    }
    lines.push(points.join(" "));
  }
  return lines;
})();

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO SECTION (Matching Home Page Hero Layout) */}
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
                Software products engineered to solve complex operational challenges
              </h1>
            </div>

            {/* Right Column: Description aligned to bottom baseline */}
            <div className="lg:col-span-5">
              <p
                id="hero-description"
                className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px]"
              >
                Beyond custom client engineering, Zinfell builds and operates independent SaaS products that streamline workflows, eliminate manual friction, and empower modern service businesses.
              </p>
            </div>
          </div>

          {/* Action Buttons directly below */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
            <a
              id="hero-cta-explore-zeviodesk"
              href="https://zeviodesk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Explore ZevioDesk</span>
            </a>
            <Link
              id="hero-cta-contact-sales"
              href="/contact"
              className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none hover:shadow-none"
              style={{ color: "#000000" }}
            >
              <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Contact product team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FLAGSHIP PRODUCT: ZEVIODESK (Minimal Premium Showcase) */}
      <section id="zeviodesk" className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Section Kicker & Title */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              FLAGSHIP PLATFORM
            </p>
            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black leading-snug">
              ZevioDesk — The modern operating system for device repair businesses
            </h2>
            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl font-normal">
              An all-in-one cloud platform engineered to eliminate spreadsheets, paper work orders, and manual friction for electronics and gadget service centers.
            </p>
          </div>

          {/* Master Showcase Card: Clean Minimalist Frame */}
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-black/[0.08] bg-white shadow-[0_4px_30px_-10px_rgba(0,0,0,0.03)]">
            {/* Top Bar of Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8 border-b border-black/[0.06] bg-slate-50/40">
              <div className="flex items-center gap-3.5">
                <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center shrink-0">
                  <Image
                    src="/zeviodesk-logo-transparent.png"
                    alt="ZevioDesk"
                    width={44}
                    height={44}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-medium tracking-tight text-black">
                      ZevioDesk
                    </span>
                    <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-[11px] font-mono text-black/70">
                      Live Product
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    zeviodesk.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://zeviodesk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:bg-slate-800 shadow-sm"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Visit ZevioDesk.com</span>
                  <ExternalLink className="h-3.5 w-3.5" style={{ color: "#ffffff" }} />
                </a>
              </div>
            </div>

            {/* Split Content Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column (7 cols): Editorial Narrative & Metrics */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-black leading-snug">
                    Architected for high-volume gadget &amp; electronics service centers
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                    From the moment a customer drops off a damaged device to final diagnosis, parts allocation, technician testing, and contactless payment, ZevioDesk orchestrates every step seamlessly.
                  </p>
                </div>

                {/* Minimalist Metric Strip */}
                <div className="mt-10 pt-8 border-t border-black/[0.06] grid grid-cols-3 gap-6 sm:gap-8">
                  <div>
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black">
                      65%
                    </span>
                    <span className="mt-1 block text-xs sm:text-[13px] text-slate-500 font-normal">
                      Faster intake check-in
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black">
                      80%
                    </span>
                    <span className="mt-1 block text-xs sm:text-[13px] text-slate-500 font-normal">
                      Fewer status phone calls
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black">
                      100%
                    </span>
                    <span className="mt-1 block text-xs sm:text-[13px] text-slate-500 font-normal">
                      Serial parts traceability
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Calm Minimal Logo Centerpiece */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-black/[0.06] bg-slate-50/30 flex flex-col items-center justify-center text-center">
                <div className="relative flex flex-col items-center select-none py-4">
                  <div className="h-36 w-36 sm:h-44 sm:w-44 flex items-center justify-center">
                    <Image
                      src="/zeviodesk-logo-transparent.png"
                      alt="ZevioDesk Logo"
                      width={176}
                      height={176}
                      priority
                      className="h-full w-full object-contain drop-shadow-sm"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                    <Image
                      src="/client-zeviodesk.png"
                      alt="ZevioDesk"
                      width={140}
                      height={42}
                      className="h-6 w-auto object-contain brightness-0 opacity-80"
                    />
                  </div>
                  <p className="mt-3 text-[11px] font-mono tracking-widest uppercase text-slate-400">
                    Core Operating System
                  </p>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-600 max-w-xs font-normal leading-relaxed">
                    Multi-store cloud sync, role-based access control, and thermal receipt printing built in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Architectural Feature Cards: Minimalist Straight-Line Layout */}
          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {/* Card 1 */}
              <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-black/[0.06] bg-white">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F3F0] text-black mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      {/* Modern Device Intake with Diagnostic Scanner Brackets & Check */}
                      <rect x="5" y="2.5" width="14" height="19" rx="3" />
                      <line x1="10.5" y1="5.5" x2="13.5" y2="5.5" />
                      <path d="M8.5 9h1.5M8.5 9v1.5" />
                      <path d="M15.5 9h-1.5M15.5 9v1.5" />
                      <path d="M8.5 15h1.5M8.5 15v-1.5" />
                      <path d="M15.5 15h-1.5M15.5 15v-1.5" />
                      <path d="M10.5 12l1.2 1.2 2.3-2.4" />
                      <line x1="10" y1="18.5" x2="14" y2="18.5" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                    01 • WORK ORDERS
                  </span>
                  <h4 className="mt-2 text-base sm:text-[17px] font-medium tracking-tight text-black">
                    Rapid Device Intake
                  </h4>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                    Capture device diagnostics, photos, and hardware serials with instant digital claim receipts.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-black/[0.06] bg-white">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F3F0] text-black mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      {/* WhatsApp CRM Message Bubble with Double Verified Milestone Checks */}
                      <path d="M12 21a8.96 8.96 0 0 0 4.67-1.3L21 21l-1.3-4.33A9 9 0 1 0 12 21z" />
                      <path d="M8 12.2l2.2 2.2 4.4-4.4" />
                      <path d="M12.2 12.2l1.6 1.6 3.2-3.2" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                    02 • WHATSAPP CRM
                  </span>
                  <h4 className="mt-2 text-base sm:text-[17px] font-medium tracking-tight text-black">
                    Automated Milestone Alerts
                  </h4>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                    Keep customers informed automatically at each diagnostic stage, eliminating status calls.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-black/[0.06] bg-white">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F3F0] text-black mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      {/* Isometric Inventory Package with Barcode Tracking Scan */}
                      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                      <path d="M12 12l8-4.5" />
                      <path d="M12 12v9" />
                      <path d="M12 12L4 7.5" />
                      <path d="M7 11.5v3" />
                      <path d="M9.5 12.8v3" />
                      <path d="M14.5 15.6v-3" />
                      <path d="M17 14.2v-3" />
                      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                    03 • INVENTORY
                  </span>
                  <h4 className="mt-2 text-base sm:text-[17px] font-medium tracking-tight text-black">
                    Multi-Store Stock Sync
                  </h4>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                    Real-time spare parts inventory, barcode scanning, and low-stock reorder thresholds.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-black/[0.06] bg-white">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F3F0] text-black mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      {/* POS Smart Terminal with Emerging Thermal Receipt Ribbon */}
                      <rect x="5" y="8" width="14" height="13" rx="2.5" />
                      <rect x="8" y="11" width="8" height="4" rx="1" />
                      <line x1="8" y1="18" x2="10" y2="18" />
                      <line x1="12" y1="18" x2="14" y2="18" />
                      <line x1="16" y1="18" x2="16.01" y2="18" />
                      <path d="M8 8V3.5l1.5 1 1.5-1 1 1 1-1 1.5 1 1.5-1V8" />
                      <line x1="10" y1="5.5" x2="14" y2="5.5" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                    04 • POS &amp; BILLING
                  </span>
                  <h4 className="mt-2 text-base sm:text-[17px] font-medium tracking-tight text-black">
                    Integrated Point of Sale
                  </h4>
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                    Split payments, GST-compliant tax invoices, digital warranty cards, and thermal printing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INNOVATION & CUSTOM SOFTWARE CALLOUT (Moody Slate-Cyan & Midnight Petrol Atmospheric Gradient) */}
      <section
        id="cta"
        aria-labelledby="cta-heading"
        className="relative isolate w-full overflow-hidden py-24 sm:py-32 lg:py-36 min-h-[500px] lg:min-h-[560px] flex items-center justify-center text-white"
      >
        {/* 1. Atmospheric Dark Oceanic Slate-Cyan & Midnight Petrol Gradient */}
        <div
          className="absolute inset-0 -z-30 w-full h-full pointer-events-none select-none"
          style={{
            backgroundColor: "#0B121A",
            backgroundImage: `
              radial-gradient(ellipse 75% 65% at 85% 15%, rgba(105, 155, 178, 0.72) 0%, rgba(65, 108, 128, 0.45) 35%, transparent 72%),
              radial-gradient(ellipse 70% 60% at 18% 78%, rgba(42, 75, 95, 0.6) 0%, rgba(24, 46, 60, 0.38) 42%, transparent 75%),
              radial-gradient(ellipse 65% 55% at 24% 22%, rgba(55, 90, 110, 0.55) 0%, rgba(30, 55, 70, 0.32) 45%, transparent 78%),
              radial-gradient(ellipse 80% 65% at 55% 50%, rgba(32, 54, 70, 0.5) 0%, rgba(16, 28, 38, 0.8) 55%, transparent 88%),
              radial-gradient(ellipse 90% 70% at 50% 100%, rgba(8, 14, 20, 0.98) 0%, rgba(5, 9, 14, 1) 100%),
              linear-gradient(140deg, #1B2F3D 0%, #12212B 28%, #0C1720 58%, #070E14 100%)
            `,
          }}
        />

        {/* 2. Tactile Cinematic Film Grain Texture Overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-75 mix-blend-overlay pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="products-cta-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#products-cta-grain)" />
        </svg>

        {/* 3. Diagonal Wavy Flow Contour Lines Layer (Directly on top of gradient & grain) */}
        <div
          className="absolute inset-0 h-full w-full pointer-events-none select-none"
          style={{
            maskImage:
              "radial-gradient(ellipse 55% 50% at 50% 50%, transparent 0%, transparent 25%, black 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 50% at 50% 50%, transparent 0%, transparent 25%, black 65%)",
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g fill="none" stroke="white" strokeWidth="1.15">
              {TOPOGRAPHIC_WAVES.map((d, idx) => (
                <path
                  key={idx}
                  d={d}
                  strokeOpacity={0.22 + (idx % 2 === 0 ? 0.08 : 0.02)}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* 4. Minimal Centered Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2
            id="cta-heading"
            className="max-w-2xl text-3xl font-normal leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] drop-shadow-sm"
          >
            Want to build your own proprietary SaaS platform?
          </h2>

          <div className="mt-8 sm:mt-9 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-black transition-all hover:bg-white/95 hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] shadow-lg"
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
            >
              <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>
                Discuss a custom SaaS product
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
