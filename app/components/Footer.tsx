"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

const PRODUCTS = [
  {
    name: "Zeviodesk",
    href: "https://zeviodesk.com/",
    description: "Repair Business Management Platform",
  },
];

const COMPANY = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Contact", href: "/contact" },
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
      className="relative isolate overflow-hidden border-t border-black/10 bg-[#FDFCFC] text-black"
      aria-label="Footer"
    >
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1280px] px-4 pt-16 sm:pt-20 lg:pt-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 sm:col-span-2 md:col-span-4 lg:col-span-5 lg:pr-8">
            <Link
              href="/"
              id="footer-logo"
              className="inline-flex items-center transition-opacity hover:opacity-90"
              aria-label="Zinfell home"
            >
              <Image
                src="/zinfell-white-transparent-cropped.avif"
                alt="Zinfell"
                width={80}
                height={25}
                className="h-[17px] sm:h-[19px] w-auto object-contain brightness-0"
              />
            </Link>

            <p className="text-sm font-normal text-black">
              Digital solutions for businesses ready to grow.
            </p>

            <p className="max-w-sm text-xs sm:text-[13px] leading-relaxed text-black/60 font-normal">
              We build digital products, intelligent systems, and technology solutions that help businesses work smarter and grow faster.
            </p>

            {/* Connect / Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition-all duration-200 hover:border-black/30 hover:bg-black/5 hover:text-black shadow-2xs"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              PRODUCTS
            </p>
            <ul className="space-y-4 text-xs sm:text-[13px]">
              {PRODUCTS.map((item) => (
                <li key={item.name} className="group">
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-medium text-black transition-colors hover:text-slate-700"
                  >
                    {item.name}
                  </Link>
                  {item.description && (
                    <p className="mt-1 text-xs leading-relaxed text-black/55 font-normal">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-4 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              COMPANY
            </p>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-black/70 font-normal transition-colors duration-200 hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="space-y-4 sm:col-span-2 md:col-span-4 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              CONTACT
            </p>
            <div className="space-y-3.5 text-xs sm:text-[13px]">
              <a
                href="mailto:support@zinfell.com"
                className="group inline-flex items-center gap-2 font-normal text-black transition-colors hover:text-slate-700"
              >
                <Mail className="h-4 w-4 text-black/70 transition-transform group-hover:scale-110" />
                <span>support@zinfell.com</span>
              </a>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-medium text-black transition-colors hover:text-slate-700"
                  style={{ color: "#000000" }}
                >
                  <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Start a Project</span>
                </Link>
              </div>

              <p className="text-xs leading-relaxed text-black/55 font-normal">
                Operating across India, UAE, and international markets.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/10 py-8 text-xs text-black/55 sm:flex-row font-normal">
          <p>© 2026 Zinfell. All rights reserved.</p>

          <div className="flex items-center gap-3 text-black/55">
            <Link
              href="/privacy"
              className="text-black/60 transition-colors hover:text-black"
            >
              Privacy Policy
            </Link>
            <span className="text-black/20">·</span>
            <Link
              href="/terms"
              className="text-black/60 transition-colors hover:text-black"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Giant Typography Brand Watermark at Bottom in Light Mode */}
      <div
        className="pointer-events-none relative h-[7vw] select-none overflow-hidden text-center [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] sm:h-[8vw] lg:h-[9vw]"
        aria-hidden="true"
      >
        <span className="block font-black tracking-[-0.05em] text-[11vw] leading-[0.8] text-black/[0.04] sm:text-[12.5vw] lg:text-[14vw]">
          Zinfell
        </span>
      </div>
    </footer>
  );
}
