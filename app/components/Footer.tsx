"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const SOLUTIONS = [
  { label: "Web Development", href: "#solutions" },
  { label: "Mobile Development", href: "#solutions" },
  { label: "AI Development", href: "#solutions" },
  { label: "Business Automation", href: "#solutions" },
  { label: "UI/UX Design", href: "#solutions" },
  { label: "SEO", href: "#solutions" },
  { label: "Digital Marketing", href: "#solutions" },
];

const PRODUCTS = [
  {
    name: "Zeviodesk",
    href: "#zeviodesk",
    description: "Repair Business Management Platform",
    badge: null,
  },
];

const COMPANY = [
  { label: "About", href: "#why-zinfell" },
  { label: "Our Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Careers", href: "#careers" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#151615] text-white"
      aria-label="Footer"
    >
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1280px] px-4 pt-20 lg:pt-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-5 sm:col-span-2 md:col-span-4 lg:col-span-4 lg:pr-8">
            <Link
              href="/"
              id="footer-logo"
              className="inline-flex items-center transition-opacity hover:opacity-90"
              aria-label="Zinfell home"
            >
              <Image
                src="/zinfell-white-transparent-cropped.avif"
                alt="Zinfell"
                width={100}
                height={32}
                className="h-[22px] sm:h-[24px] w-auto object-contain"
              />
            </Link>

            <p className="text-sm font-medium text-white/90">
              Digital solutions for businesses ready to grow.
            </p>

            <p className="max-w-sm text-sm leading-relaxed text-[#94A3B8]">
              We build digital products, intelligent systems, and technology solutions that help businesses work smarter and grow faster.
            </p>

            {/* Connect / Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-white/50">
                CONNECT
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Zinfell on ${item.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-none border border-white/10 bg-[#1C1E1C] text-white/70 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4 lg:col-span-2">
            <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
              SOLUTIONS
            </p>
            <ul className="space-y-2.5 text-sm">
              {SOLUTIONS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#94A3B8] transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-4 lg:col-span-2">
            <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
              PRODUCTS
            </p>
            <ul className="space-y-4 text-sm">
              {PRODUCTS.map((item) => (
                <li key={item.name} className="group">
                  <div className="flex items-center gap-2">
                    {item.badge ? (
                      <span className="font-medium text-white/90">{item.name}</span>
                    ) : (
                      <Link
                        href={item.href}
                        className="font-medium text-white/90 transition-colors group-hover:text-[#A78BFA]"
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.badge && (
                      <span className="inline-block rounded-none border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/80">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="mt-1 text-xs leading-relaxed text-[#94A3B8]/70 group-hover:text-[#94A3B8]">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-4 lg:col-span-2">
            <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
              COMPANY
            </p>
            <ul className="space-y-2.5 text-sm">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#94A3B8] transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="space-y-4 sm:col-span-2 md:col-span-4 lg:col-span-2">
            <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
              CONTACT
            </p>
            <div className="space-y-3.5 text-sm">
              <a
                href="mailto:support@zinfell.com"
                className="group inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-[#A78BFA]"
              >
                <Mail className="h-4 w-4 text-[#A78BFA] transition-transform group-hover:scale-110" />
                <span>support@zinfell.com</span>
              </a>

              <div>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-white/90 transition-colors hover:text-[#A78BFA]"
                >
                  <span>Start a Project</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#A78BFA]"
                    strokeWidth={2.2}
                  />
                </Link>
              </div>

              <p className="text-xs leading-relaxed text-[#94A3B8]">
                Operating across India, UAE, and international markets.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-[#94A3B8] sm:flex-row">
          <p>© 2026 Zinfell. All rights reserved.</p>

          <div className="flex items-center gap-3 text-[#94A3B8]">
            <Link
              href="#privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="#terms"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Giant Typography Brand Watermark at Bottom in Dark Mode */}
      <div
        className="pointer-events-none relative h-[7vw] select-none overflow-hidden text-center [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] sm:h-[8vw] lg:h-[9vw]"
        aria-hidden="true"
      >
        <span className="block font-black tracking-[-0.05em] text-[11vw] leading-[0.8] text-white/[0.04] sm:text-[12.5vw] lg:text-[14vw]">
          Zinfell
        </span>
      </div>
    </footer>
  );
}
