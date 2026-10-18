"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

type NavSubItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  disabled?: boolean;
};

type NavItem = {
  id: string;
  label: string;
  href?: string;
  overviewTitle?: string;
  overviewDesc?: string;
  items?: NavSubItem[];
};

const NAV_ITEMS: NavItem[] = [
  {
    id: "solutions",
    label: "Solutions",
    overviewTitle: "Full-Stack Digital Solutions",
    overviewDesc: "From custom websites to intelligent AI automation, we build scalable software tailored for business growth.",
    items: [
      { label: "Web Development", href: "#solutions", description: "High-performance marketing & corporate sites" },
      { label: "Mobile Development", href: "#solutions", description: "iOS and Android apps with cross-platform scale" },
      { label: "AI Development", href: "#solutions", description: "Custom LLMs, intelligent agents, and workflow AI" },
      { label: "Business Automation", href: "#solutions", description: "End-to-end integration across your core tools" },
      { label: "UI/UX Design", href: "#solutions", description: "Product discovery, design systems, prototypes" },
      { label: "Cloud & DevOps", href: "#solutions", description: "Infrastructure, CI/CD pipelines, and scalability" },
      { label: "SEO & Growth", href: "#solutions", description: "Technical audits, search visibility, conversion" },
      { label: "Digital Marketing", href: "#solutions", description: "Performance acquisition and brand growth" },
      { label: "SaaS Engineering", href: "#solutions", description: "Multi-tenant architectures & subscription platforms" },
    ],
  },
  {
    id: "products",
    label: "Products",
    overviewTitle: "In-House Software Labs",
    overviewDesc: "Proprietary SaaS platforms, intelligent automation systems, and developer tools built and operated by Zinfell.",
    items: [
      { label: "ZevioDesk", href: "#zeviodesk", description: "Repair Business Management Platform", badge: "Live" },
      { label: "AI Agent Suite", href: "#ai-automation", description: "Autonomous customer ops & conversational agents", badge: "New" },
      { label: "FlowSync Engine", href: "#solutions", description: "Enterprise webhook orchestration & data pipelines" },
      { label: "DevPulse APM", href: "#solutions", description: "Real-time latency tracking & uptime observability" },
      { label: "FormCraft AI", href: "#solutions", description: "Dynamic conversational lead capture & validation" },
      { label: "Custom SaaS Lab", href: "#contact", description: "Proprietary software tailored for your business model" },
    ],
  },
  { id: "work", label: "Work", href: "#work" },
  {
    id: "company",
    label: "Company",
    overviewTitle: "About Zinfell",
    overviewDesc: "A technology partner dedicated to building high-velocity software and automated systems that scale.",
    items: [
      { label: "About", href: "#about", description: "Who we are and how we operate" },
      { label: "Our Process", href: "#process", description: "How we scope, build, and deliver" },
      { label: "Careers", href: "#careers", description: "Join our distributed engineering crew" },
      { label: "Why Zinfell", href: "#why-zinfell", description: "Our velocity, craftsmanship, and core values" },
      { label: "Tech Stack", href: "#services", description: "Modern Next.js, Cloud, Node & AI frameworks" },
      { label: "Client Results", href: "#testimonials", description: "Proven outcomes delivered for high-growth teams" },
    ],
  },
  {
    id: "insights",
    label: "Insights",
    overviewTitle: "Engineering & Tech Insights",
    overviewDesc: "Deep dives into high-velocity engineering, scalable cloud systems, and real-world AI implementation.",
    items: [
      { label: "Engineering Architecture", href: "#why-zinfell", description: "Modern full-stack patterns, Next.js & edge scaling" },
      { label: "AI Agent Workflows", href: "#ai-automation", description: "Deploying autonomous LLM agents in production", badge: "Featured" },
      { label: "UI/UX & Conversion", href: "#services", description: "Designing interfaces that drive engagement and retention" },
      { label: "Cloud & DevOps Scaling", href: "#services", description: "Serverless infra, multi-region CI/CD & cost reduction" },
      { label: "Performance & SEO", href: "#services", description: "Core Web Vitals optimization and search growth" },
      { label: "Tech Playbooks", href: "#faq", description: "Step-by-step blueprints from idea scoping to launch" },
    ],
  },
  { id: "contact", label: "Contact", href: "#contact" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <ChevronDown
      className={`h-3.5 w-3.5 text-white/70 transition-transform duration-200 ${open ? "rotate-180 text-cyan-accent" : ""}`}
      strokeWidth={2.2}
      aria-hidden="true"
    />
  );
}

export function ZinfellLogo() {
  return (
    <Link href="/" id="nav-logo" className="flex items-center transition-opacity hover:opacity-90" aria-label="Zinfell home">
      <Image
        src="/zinfell-white-transparent-cropped.avif"
        alt="Zinfell"
        width={80}
        height={25}
        priority
        className="-mt-[2px] h-[17px] sm:h-[19px] w-auto object-contain"
      />
    </Link>
  );
}

export default function Navbar() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenId(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
        setMobileOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenId(id);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenId(null), 150);
  };

  const activeItem = NAV_ITEMS.find((item) => item.id === openId);

  return (
    <header
      ref={navRef}
      onMouseLeave={scheduleClose}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled || (openId && activeItem?.items)
        ? "border-b border-white/10 bg-[#151615]/90 backdrop-blur-md shadow-[0_4px_25px_-10px_rgba(0,0,0,0.5)]"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav className="relative mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <ZinfellLogo />

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            if (!item.items) {
              return (
                <li key={item.id} onMouseEnter={() => setOpenId(null)}>
                  <Link
                    id={`nav-${item.id}`}
                    href={item.href ?? "#"}
                    className="rounded-full px-3.5 py-2 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li
                key={item.id}
                onMouseEnter={() => openMenu(item.id)}
              >
                <button
                  id={`nav-${item.id}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:bg-white/10 hover:text-white ${isOpen ? "bg-white/10 text-[#A78BFA]" : "text-white/85"
                    }`}
                >
                  {item.label}
                  <Chevron open={isOpen} />
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA matching mockup */}
        <div className="hidden lg:block">
          <Link
            id="nav-cta-start-project"
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-[#A78BFA] px-4 py-2 text-sm font-semibold text-[#04161C] transition-all hover:bg-[#9065F8] hover:shadow-lg hover:shadow-[#A78BFA]/25"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.4} aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          id="nav-mobile-toggle"
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white hover:bg-white/10 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* FULL-WIDTH SCREEN BACKGROUND DROPDOWN BAR */}
      <div
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
        onMouseLeave={scheduleClose}
        style={{ backgroundColor: "#151615" }}
        className={`hidden lg:block absolute left-0 right-0 top-full w-full border-t border-b border-white/10 bg-[#151615] shadow-2xl transition-all duration-150 ${openId && activeItem?.items
          ? "visible translate-y-0 opacity-100 pointer-events-auto"
          : "invisible -translate-y-1 opacity-0 pointer-events-none"
          }`}
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-7">
          {activeItem && activeItem.items && (
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Left Column Overview */}
              <div className="col-span-3 border-r border-white/10 pr-6">
                <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                  {activeItem.label}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white">
                  {activeItem.overviewTitle}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                  {activeItem.overviewDesc}
                </p>
                <Link
                  href={
                    activeItem.id === "products"
                      ? "#zeviodesk"
                      : activeItem.id === "solutions"
                        ? "#solutions"
                        : activeItem.id === "insights"
                          ? "#why-zinfell"
                          : "#about"
                  }
                  onClick={() => setOpenId(null)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#A78BFA] hover:text-[#9065F8] transition-colors"
                >
                  Explore {activeItem.label.toLowerCase()} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Right Column Items Grid - Clean without borders */}
              <div className="col-span-9">
                <div className="grid grid-cols-3 gap-2">
                  {activeItem.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setOpenId(null)}
                      className="group flex flex-col justify-between rounded-lg p-3 border-0 bg-transparent transition-colors hover:bg-white/[0.05]"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-medium text-white group-hover:text-[#A78BFA] transition-colors">
                            {sub.label}
                          </span>
                          <div className="flex items-center gap-1.5 shrink-0">
                            {sub.badge && (
                              <span className="rounded-full bg-[#A78BFA]/15 px-2 py-0.5 text-[10px] font-mono font-semibold text-[#A78BFA] border border-[#A78BFA]/25">
                                {sub.badge}
                              </span>
                            )}
                            <ArrowRight className="h-3.5 w-3.5 text-white/40 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#A78BFA]" />
                          </div>
                        </div>
                        {sub.description && (
                          <span className="mt-1 block text-xs text-[#94A3B8] leading-relaxed group-hover:text-slate-300 transition-colors">
                            {sub.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div id="nav-mobile-menu" className="border-t border-white/10 bg-[#151615] px-4 pb-6 pt-2 lg:hidden">
          <ul className="space-y-1 px-2 py-3">
            {NAV_ITEMS.map((item) => {
              if (!item.items) {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href ?? "#"}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-base font-semibold text-white hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const expanded = mobileSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setMobileSection(expanded ? null : item.id)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-base font-semibold text-white hover:bg-white/10"
                  >
                    <span>{item.label}</span>
                    <Chevron open={expanded} />
                  </button>
                  {expanded && (
                    <ul className="mt-1 space-y-1 pl-3">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            onClick={() => {
                              if (!sub.disabled) setMobileOpen(false);
                            }}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-[#A78BFA]"
                          >
                            <span>{sub.label}</span>
                            {sub.badge && (
                              <span className="rounded-full bg-orange-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase text-orange-accent">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-4 px-2">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#A78BFA] px-5 py-3 text-sm font-semibold text-[#04161C] hover:bg-[#9065F8]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
