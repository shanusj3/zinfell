import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className="w-full"
    >
      {/* 1. Main visual block with full-screen width background image */}
      <div className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24 text-white">
        {/* Full screen width background: Custom gradient with authentic film grain effect */}
        <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none select-none overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse 70% 55% at 20% 20%, rgba(24, 62, 118, 0.6) 0%, transparent 70%),
                radial-gradient(ellipse 60% 50% at 45% 35%, rgba(18, 48, 96, 0.5) 0%, transparent 65%),
                radial-gradient(ellipse 80% 70% at 65% 55%, rgba(11, 30, 68, 0.85) 0%, transparent 70%),
                radial-gradient(ellipse 70% 70% at 85% 85%, rgba(3, 8, 22, 0.95) 0%, transparent 70%),
                linear-gradient(135deg, #15305b 0%, #0f2448 28%, #0a1935 55%, #061024 78%, #030814 100%)
              `,
            }}
          />
          {/* Film Grain Texture Overlay */}
          <svg
            className="absolute inset-0 h-full w-full opacity-65 mix-blend-overlay pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="social-proof-grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#social-proof-grain)" />
          </svg>
        </div>

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Pill, Heading, Description, Link, and Rating */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>


                {/* Main Headline */}
                <h2
                  id="social-proof-heading"
                  className="mt-5 text-3xl font-normal leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] drop-shadow-sm"
                >
                  Technology built for businesses ready to grow.
                </h2>

                {/* Description */}
                <p className="mt-4 max-w-lg text-[14px] font-normal leading-[1.6] text-white/90 sm:text-[14.5px] lg:text-[15.5px]">
                  We work with businesses across industries to design, build, and improve the digital
                  systems they depend on.
                </p>

                {/* Action Link */}
                <div className="mt-6">
                  <Link
                    href="#solutions"
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-white"
                  >
                    <span>Explore our solutions</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Bottom Trust Subtext + Rating */}
              <div className="mt-12 lg:mt-20 pt-8 border-t border-white/60">
                <p className="text-xs sm:text-[13px] leading-relaxed text-white/80 max-w-sm">
                  All in real time, build scalable digital solutions, automate workflows, and accelerate growth.
                </p>
                <div className="mt-3.5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {/* 5 Green Trustpilot Star Tiles */}
                  <div className="flex items-center gap-1" aria-label="5 out of 5 stars on Trustpilot">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="inline-flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-[2px] bg-[#00b67a]"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="white"
                          className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                    ))}
                  </div>

                  {/* Trustpilot Brand & Score */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-white">
                    <span className="font-semibold text-white">4.9 / 5</span>
                    <span className="text-white/60">on</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 fill-[#00b67a]"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      Trustpilot
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Cards matching the reference layout */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1: Top full-width card (2+ Countries Served) */}
              <div className="sm:col-span-2 rounded-3xl border border-white/60 bg-transparent p-6 sm:p-7">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
                    2+
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-medium text-white">
                    Countries Served
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
                  Delivering high-velocity digital solutions for businesses across India, the UAE and international markets.
                </p>
              </div>

              {/* Card 2: Bottom-left card (10+ Projects Completed) */}
              <div className="rounded-3xl border border-white/60 bg-transparent p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
                    10+
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-medium text-white">
                    Projects Completed
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed">
                  Websites, scalable web applications, AI systems, and automated workflows delivered to production.
                </p>
              </div>

              {/* Card 3: Bottom-right card (100% Digital Craftsmanship) */}
              <div className="rounded-3xl border border-white/60 bg-transparent p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
                    100%
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-medium text-white">
                    Digital Craftsmanship
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed">
                  End-to-end design, modern engineering architectures, and cloud deployments built for reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Clients Strip - Light theme matching reference design (#FDFCFC) */}
      <div className="w-full bg-[#FDFCFC] pt-10 pb-12 sm:pt-12 sm:pb-14 text-black">
        {/* Header: Title on left, 'Read all stories' on right (Stacked in two rows on mobile) */}
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">
            <h3
              id="trusted-clients-heading"
              className="text-xs sm:text-[13px] font-normal tracking-tight text-black/75"
            >
              Trusted by leading businesses and companies
            </h3>
            <Link
              href="#testimonials"
              className="w-fit inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-3.5 sm:px-4 py-1 sm:py-1.5 text-xs font-normal text-black shadow-2xs hover:border-black/30 transition-colors"
              style={{ color: "#000000" }}
            >
              <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Read all stories</span>
            </Link>
          </div>
        </div>

        {/* Framed Section with continuous horizontal lines and corner circle dots */}
        <div className="relative w-full border-y border-black/10">
          <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            {/* Left & Right vertical bounding borders with 4 corner circle dots */}
            <div className="relative border-x border-black/10 py-10 sm:py-12 lg:py-14">
              {/* Top-Left Circle Dot */}
              <span
                className="absolute -top-[3px] -left-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none"
                aria-hidden="true"
              />
              {/* Top-Right Circle Dot */}
              <span
                className="absolute -top-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none"
                aria-hidden="true"
              />
              {/* Bottom-Left Circle Dot */}
              <span
                className="absolute -bottom-[3px] -left-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none"
                aria-hidden="true"
              />
              {/* Bottom-Right Circle Dot */}
              <span
                className="absolute -bottom-[3px] -right-[3px] h-1.5 w-1.5 rounded-full bg-black pointer-events-none select-none"
                aria-hidden="true"
              />

              {/* Client Logos Centered with Links and Hover Color Reveal */}
              <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20 xl:gap-24 px-6">
                {/* 1. Al Zahraa Boutique */}
                <a
                  href="https://alzahraaboutique.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center cursor-pointer"
                  aria-label="Visit Al Zahraa Boutique website"
                >
                  <Image
                    src="/al-zahraa-logo.png"
                    alt="Al Zahraa Boutique"
                    width={1024}
                    height={341}
                    className="max-h-12 sm:max-h-14 lg:max-h-16 w-auto object-contain brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300 ease-out"
                  />
                </a>

                {/* 2. Profile Corporation */}
                <a
                  href="https://www.profilecorporation.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center cursor-pointer"
                  aria-label="Visit Profile Corporation website"
                >
                  <Image
                    src="/client-profile-corporation.png"
                    alt="Profile Corporation Wholesale LLC"
                    width={976}
                    height={451}
                    className="max-h-10 sm:max-h-12 lg:max-h-14 w-auto object-contain brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300 ease-out"
                  />
                </a>

                {/* 3. ZevioDesk */}
                <a
                  href="https://zeviodesk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center cursor-pointer"
                  aria-label="Visit ZevioDesk website"
                >
                  <Image
                    src="/client-zeviodesk.png"
                    alt="ZevioDesk"
                    width={1024}
                    height={341}
                    className="max-h-8 sm:max-h-9 lg:max-h-11 w-auto object-contain brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300 ease-out"
                  />
                </a>

                {/* 4. Beyond Dreams */}
                <a
                  href="https://www.instagram.com/beyondreamstalentconnectpvt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center cursor-pointer"
                  aria-label="Visit Beyond Dreams Talent Connect Instagram"
                >
                  <Image
                    src="/client-beyond-dreams.png"
                    alt="Beyond Dreams Talent Connect Pvt Ltd"
                    width={1024}
                    height={776}
                    className="max-h-14 sm:max-h-16 lg:max-h-20 w-auto object-contain brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300 ease-out"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
