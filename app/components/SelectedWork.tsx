"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";

type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  cta: string;
  href: string;
  badge: string;
  preview: {
    type: "zeviodesk" | "web" | "software" | "mobile";
    accentColor: string;
    stats: { label: string; value: string }[];
  };
};

const PROJECTS: Project[] = [
  {
    id: "zeviodesk",
    number: "01",
    title: "Zeviodesk",
    subtitle: "Repair Business Management Platform",
    description:
      "A multi-tenant SaaS platform helping repair businesses manage tickets, customers, inventory, billing, warranties, and communication in one unified system.",
    tags: ["SaaS", "Product Development", "Automation"],
    cta: "View Case Study",
    href: "https://zeviodesk.com",
    badge: "Flagship Product",
    preview: {
      type: "zeviodesk",
      accentColor: "#3CB8C0",
      stats: [
        { label: "Active Shops", value: "240+" },
        { label: "SLA Met", value: "99.4%" },
        { label: "Avg Resolution", value: "18m" },
      ],
    },
  },
  {
    id: "client-web",
    number: "02",
    title: "Enterprise Web Platform",
    subtitle: "High-Performance Brand & Growth Engine",
    description:
      "A modern digital experience designed to help the business strengthen its online presence, attract high-intent leads, and scale digital operations.",
    tags: ["Web Design", "Development", "SEO"],
    cta: "View Case Study",
    href: "#contact",
    badge: "Client Project",
    preview: {
      type: "web",
      accentColor: "#09475B",
      stats: [
        { label: "Traffic Growth", value: "+240%" },
        { label: "Lighthouse Score", value: "99/100" },
        { label: "Conversion Rate", value: "4.8%" },
      ],
    },
  },
  {
    id: "client-software",
    number: "03",
    title: "Custom Operations ERP",
    subtitle: "Automated Workflow Engine",
    description:
      "A tailored digital platform engineered around unique business processes, eliminating manual paperwork and automating multi-department handoffs.",
    tags: ["Software Development", "Backend", "Automation"],
    cta: "View Case Study",
    href: "#contact",
    badge: "Client Project",
    preview: {
      type: "software",
      accentColor: "#FF7200",
      stats: [
        { label: "Manual Work", value: "-65%" },
        { label: "Sync Latency", value: "<120ms" },
        { label: "Monthly Orders", value: "18.4K" },
      ],
    },
  },
  {
    id: "client-mobile",
    number: "04",
    title: "Customer Mobile App",
    subtitle: "Cross-Platform Mobile Suite",
    description:
      "A customer-focused mobile experience built for iOS and Android to simplify everyday interactions, service requests, and real-time alerts.",
    tags: ["Mobile", "UI/UX", "API Integration"],
    cta: "View Case Study",
    href: "#contact",
    badge: "Client Project",
    preview: {
      type: "mobile",
      accentColor: "#3CB8C0",
      stats: [
        { label: "App Store Rating", value: "4.9 ★" },
        { label: "Daily Active Users", value: "12K+" },
        { label: "Crash-free Rate", value: "99.9%" },
      ],
    },
  },
];

export default function SelectedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  // Card dimensions for calculation
  const cardWidth = Math.min(Math.max(containerWidth * 0.76, 320), 860);
  const gap = 24;
  const offset = (containerWidth - cardWidth) / 2 - currentIndex * (cardWidth + gap);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative isolate overflow-hidden bg-[#151615] py-20 lg:py-28 text-white"
    >
      <div className="bg-tech-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_65%_45%_at_50%_15%,black_25%,transparent_100%)] opacity-30" />

      {/* Header Container */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl text-left">
            <h2
              id="work-heading"
              className="text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Selected Work<span className="text-[#A78BFA]">.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-[1.7] text-[#94A3B8]">
              From SaaS platforms and business applications to websites and automated systems, we build
              technology around real business needs.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              id="work-cta-all"
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#A78BFA] px-5 py-2.5 text-sm font-semibold text-[#04161C] transition-all hover:bg-[#9065F8] hover:shadow-lg hover:shadow-[#A78BFA]/25"
            >
              View All Work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Track with Side Peeking Cards */}
      <div ref={containerRef} className="relative mt-12 w-full overflow-hidden px-2 sm:px-4">
        <motion.div
          className="flex items-center"
          animate={{ x: offset }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 26,
            mass: 0.9,
          }}
          style={{ width: "max-content" }}
        >
          {PROJECTS.map((project, idx) => {
            const isActive = idx === currentIndex;

            return (
              <motion.div
                key={project.id}
                onClick={() => setCurrentIndex(idx)}
                animate={{
                  scale: isActive ? 1 : 0.94,
                  opacity: isActive ? 1 : 0.35,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ width: `${cardWidth}px`, marginRight: `${gap}px` }}
                className={`relative shrink-0 select-none overflow-hidden rounded-none border transition-all duration-300 ${
                  isActive
                    ? "cursor-default border-white/15 bg-[#1C1E1C] shadow-2xl"
                    : "cursor-pointer border-white/5 bg-[#171917] hover:border-white/10 hover:opacity-70"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Side: Project Information */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:p-10">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-none border border-[#A78BFA]/25 bg-[#A78BFA]/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                          Project {project.number}
                        </span>
                        <span className="text-xs font-semibold text-white/30">·</span>
                        <span className="text-xs font-semibold text-[#A78BFA]">{project.badge}</span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-[#94A3B8] sm:text-sm">
                        {project.subtitle}
                      </p>

                      <p className="mt-4 text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-none border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <Link
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (!isActive) {
                            e.preventDefault();
                            setCurrentIndex(idx);
                          }
                        }}
                        className="group/btn inline-flex items-center gap-2.5 rounded-none border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:border-[#A78BFA] hover:bg-[#A78BFA] hover:text-[#04161C] sm:text-sm"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A78BFA] text-[#04161C] transition-transform group-hover/btn:scale-105">
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.4} />
                        </span>
                        {project.cta}
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Visual Graphic & Live Telemetry Pills */}
                  <div className="relative flex flex-col justify-between overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#07050E] via-[#120B24] to-[#0A0714] p-6 sm:p-8 lg:col-span-6 lg:border-l lg:border-t-0 lg:p-10">
                    <div className="bg-tech-grid-dark absolute inset-0 opacity-40" />
                    <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#A78BFA]/15 blur-[70px]" />
                    <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#A78BFA]/10 blur-[80px]" />

                    {/* Top Mockup Header Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-none bg-red-400/80" />
                        <div className="h-2.5 w-2.5 rounded-none bg-yellow-400/80" />
                        <div className="h-2.5 w-2.5 rounded-none bg-[#A78BFA]" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-none border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] font-mono font-medium text-[#A78BFA] backdrop-blur">
                        <Sparkles className="h-3 w-3 text-[#A78BFA]" />
                        Live System Preview
                      </div>
                    </div>

                    {/* Center Visual Mockup */}
                    <div className="relative z-10 my-6 rounded-none border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                      {project.preview.type === "zeviodesk" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <div className="flex items-center gap-2">
                              <div className="flex h-7 w-7 items-center justify-center rounded-none bg-[#A78BFA]/15 text-[#A78BFA]">
                                <Wrench className="h-3.5 w-3.5" />
                              </div>
                              <div>
                                <p className="text-[11px] font-bold text-white">Repair Workspace</p>
                                <p className="text-[9px] text-[#94A3B8]">Tickets & Inventory Engine</p>
                              </div>
                            </div>
                            <span className="rounded-none bg-[#A78BFA]/15 px-2 py-0.5 text-[9px] font-mono font-semibold text-[#A78BFA]">
                              ● Online
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-none border border-white/5 bg-white/[0.03] p-2">
                              <p className="text-[9px] text-[#94A3B8]">Active Tickets</p>
                              <p className="text-sm font-bold text-white">142 Open</p>
                            </div>
                            <div className="rounded-none border border-white/5 bg-white/[0.03] p-2">
                              <p className="text-[9px] text-[#94A3B8]">Auto Routing</p>
                              <p className="text-sm font-bold text-[#A78BFA]">88.2%</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.preview.type === "web" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <div className="flex items-center gap-2">
                              <div className="flex h-7 w-7 items-center justify-center rounded-none bg-[#A78BFA]/15 text-[#A78BFA]">
                                <TrendingUp className="h-3.5 w-3.5" />
                              </div>
                              <div>
                                <p className="text-[11px] font-bold text-white">High-Speed Web Portal</p>
                                <p className="text-[9px] text-[#94A3B8]">Next.js Edge Delivery</p>
                              </div>
                            </div>
                            <span className="rounded-none bg-[#A78BFA]/15 px-2 py-0.5 text-[9px] font-mono font-semibold text-[#A78BFA]">
                              100% Core Vitals
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-none border border-white/5 bg-white/[0.03] p-2">
                              <p className="text-[9px] text-[#94A3B8]">Traffic</p>
                              <p className="text-sm font-bold text-white">180K+ /mo</p>
                            </div>
                            <div className="rounded-none border border-white/5 bg-white/[0.03] p-2">
                              <p className="text-[9px] text-[#94A3B8]">Search Visibility</p>
                              <p className="text-sm font-bold text-[#A78BFA]">#1 Rank</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.preview.type === "software" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <div className="flex items-center gap-2">
                              <div className="flex h-7 w-7 items-center justify-center rounded-none bg-[#A78BFA]/15 text-[#A78BFA]">
                                <Cpu className="h-3.5 w-3.5" />
                              </div>
                              <div>
                                <p className="text-[11px] font-bold text-white">Automated ERP Engine</p>
                                <p className="text-[9px] text-[#94A3B8]">Cloud Microservices</p>
                              </div>
                            </div>
                            <span className="rounded-none bg-[#A78BFA]/15 px-2 py-0.5 text-[9px] font-mono font-semibold text-[#A78BFA]">
                              Zero Downtime
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-none border border-white/5 bg-white/[0.03] p-2">
                              <p className="text-[9px] text-[#94A3B8]">Pipelines</p>
                              <p className="text-sm font-bold text-white">32 Active</p>
                            </div>
                            <div className="rounded-none border border-white/5 bg-white/[0.03] p-2">
                              <p className="text-[9px] text-[#94A3B8]">Time Saved</p>
                              <p className="text-sm font-bold text-[#A78BFA]">34 hrs/wk</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.preview.type === "mobile" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <div className="flex items-center gap-2">
                              <div className="flex h-7 w-7 items-center justify-center rounded-none bg-[#A78BFA]/15 text-[#A78BFA]">
                                <Smartphone className="h-3.5 w-3.5" />
                              </div>
                              <div>
                                <p className="text-[11px] font-bold text-white">iOS & Android App Suite</p>
                                <p className="text-[9px] text-[#94A3B8]">Native Smooth Gestures</p>
                              </div>
                            </div>
                            <span className="rounded-none bg-[#A78BFA]/15 px-2 py-0.5 text-[9px] font-mono font-semibold text-[#A78BFA]">
                              ● Live
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-none border border-white/5 bg-white/[0.03] p-2">
                              <p className="text-[9px] text-[#94A3B8]">User Rating</p>
                              <p className="text-sm font-bold text-white">4.9 ★</p>
                            </div>
                            <div className="rounded-none border border-white/5 bg-white/[0.03] p-2">
                              <p className="text-[9px] text-[#94A3B8]">Latency</p>
                              <p className="text-sm font-bold text-[#A78BFA]">&lt; 80ms</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Stats Pills */}
                    <div className="relative z-10 flex flex-wrap items-center gap-1.5 pt-1">
                      {project.preview.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex items-center gap-1.5 rounded-none border border-white/10 bg-black/50 px-3 py-1 text-[11px] text-white backdrop-blur"
                        >
                          <span className="text-[#94A3B8]">{stat.label}:</span>
                          <span className="font-mono font-bold text-[#A78BFA]">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Carousel Bottom Controls (Indicators on left, Circle Arrows on right) */}
      <div className="mx-auto mt-8 max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {PROJECTS.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-none transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-[#A78BFA]" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Circular Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevProject}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#1C1E1C] text-white transition-all hover:border-[#A78BFA] hover:bg-[#A78BFA] hover:text-[#04161C]"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#1C1E1C] text-white transition-all hover:border-[#A78BFA] hover:bg-[#A78BFA] hover:text-[#04161C]"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
