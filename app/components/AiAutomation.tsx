"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

type WorkflowHighlight = {
  title: string;
  text: string;
};

type WorkflowItem = {
  id: string;
  labelParts: string[];
  shortLabel: string;
  title: string;
  shortDescription: string;
  highlights: WorkflowHighlight[];
  imageSrc: string;
  tags: string[];
};

const WORKFLOW_ITEMS: WorkflowItem[] = [
  {
    id: "lead-ai-crm",
    labelParts: ["Lead", "AI", "CRM"],
    shortLabel: "Lead → AI → CRM",
    title: "Lead → AI → CRM",
    shortDescription: "Capture and qualify incoming leads automatically.",
    highlights: [
      {
        title: "AI Scoring",
        text: "Enriches company data and evaluates intent automatically.",
      },
      {
        title: "Instant Sync",
        text: "Syncs directly to HubSpot, Salesforce, or Notion with zero delay.",
      },
    ],
    tags: ["WhatsApp", "HubSpot", "Salesforce"],
    imageSrc: "/AI-Powered Lead Automation Dashboard.avif",
  },
  {
    id: "whatsapp-ai-ticket",
    labelParts: ["WhatsApp", "AI", "Ticket"],
    shortLabel: "WhatsApp → AI → Ticket",
    title: "WhatsApp → AI → Ticket",
    shortDescription: "Turn customer conversations into structured service requests.",
    highlights: [
      {
        title: "24/7 First-Response",
        text: "Resolves frequent inquiries and collects customer details immediately.",
      },
      {
        title: "Smart Routing",
        text: "Categorizes urgency and routes to Zendesk or Slack with full context.",
      },
    ],
    tags: ["WhatsApp", "Zendesk", "Slack"],
    imageSrc: "/AI-Powered Support Automation Flow.avif",
  },
  {
    id: "form-ai-database",
    labelParts: ["Form", "AI", "Database"],
    shortLabel: "Form → AI → Database",
    title: "Form → AI → Database",
    shortDescription: "Extract information and organize it automatically.",
    highlights: [
      {
        title: "Intelligent OCR",
        text: "Extracts key fields from forms, receipts, and contracts accurately.",
      },
      {
        title: "Database Sync",
        text: "Validates entries and populates Postgres, Airtable, or Google Sheets.",
      },
    ],
    tags: ["PostgreSQL", "Google Sheets", "Airtable"],
    imageSrc: "/AI-Powered Document Workflow.avif",
  },
  {
    id: "order-notification-team",
    labelParts: ["Order", "Notification", "Team"],
    shortLabel: "Order → Notification → Team",
    title: "Order → Notification → Team",
    shortDescription: "Keep customers and internal teams updated without manual work.",
    highlights: [
      {
        title: "Instant Alerts",
        text: "Notifies team channels on Slack/Discord and sends WhatsApp receipts.",
      },
      {
        title: "Zero Lag",
        text: "Coordinates shipping and inventory workflows without human delay.",
      },
    ],
    tags: ["Shopify", "Stripe", "Webhooks"],
    imageSrc: "/Purple Order Automation Dashboard.avif",
  },
];

// Integration Apps
const INTEGRATIONS = [
  { name: "OpenAI", imageSrc: "/integrations/openai.png", color: "#10A37F", letter: "AI" },
  { name: "WhatsApp", imageSrc: "/integrations/whatsapp.png", color: "#25D366", letter: "WA" },
  { name: "HubSpot", imageSrc: "/integrations/hubspot.png", color: "#FF7A59", letter: "HS" },
  { name: "Shopify", imageSrc: "/integrations/shopify.png", color: "#96BF48", letter: "SH" },
  { name: "Salesforce", imageSrc: "/integrations/salesforce.png", color: "#00A1E0", letter: "SF" },
  { name: "Notion", imageSrc: "/integrations/notion.png", color: "#000000", letter: "NT" },
  { name: "Google Sheets", imageSrc: "/integrations/google-sheets.png", color: "#0F9D58", letter: "GS" },
  { name: "Zendesk", imageSrc: "/integrations/zendesk.png", color: "#03363D", letter: "ZK" },
  { name: "ZevioDesk", color: "#3CB8C0", letter: "ZD" },
  { name: "Slack", imageSrc: "/integrations/slack.png", color: "#4A154B", letter: "SL" },
  { name: "PostgreSQL", imageSrc: "/integrations/postgresql.png", color: "#336791", letter: "PG" },
  { name: "Stripe", color: "#635BFF", letter: "ST" },
  { name: "Discord", imageSrc: "/integrations/discord.png", color: "#5865F2", letter: "DC" },
  { name: "Airtable", imageSrc: "/integrations/airtable.png", color: "#FCB400", letter: "AT" },
  { name: "Webhooks", imageSrc: "/integrations/webhooks.png", color: "#09475B", letter: "API" },
  { name: "n8n", imageSrc: "/integrations/n8n.png", color: "#FF4A00", letter: "N8" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function AiAutomation() {
  const [activeId, setActiveId] = useState(WORKFLOW_ITEMS[0].id);

  // Track active card as cards stack at the top
  useEffect(() => {
    const handleScroll = () => {
      // All cards dock at 7rem = 112px
      const triggerThreshold = 135;
      for (let i = WORKFLOW_ITEMS.length - 1; i >= 0; i--) {
        const item = WORKFLOW_ITEMS[i];
        const el = document.getElementById(`workflow-${item.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerThreshold) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToItem = (id: string) => {
    const el = document.getElementById(`workflow-${id}`);
    if (el) {
      const yOffset = -112; // all cards stick at 7rem = 112px
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="automation"
      aria-labelledby="automation-heading"
      className="relative isolate overflow-x-clip bg-[#151615] py-20 lg:py-28 text-white"
    >
      {/* Background subtle grid */}
      <div className="bg-tech-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_15%,black_25%,transparent_100%)] opacity-30" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl text-left">
          <h2
            id="automation-heading"
            className="text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            What if your business could{" "}
            <span className="text-[#A78BFA]">do more automatically?</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-[1.7] text-[#94A3B8]">
            Repetitive tasks slow teams down. Manual processes create errors. Disconnected systems make
            simple operations complicated. Zinfell designs intelligent workflows that connect your systems,
            automate repetitive work, and help your team operate more efficiently.
          </p>

          <div className="mt-7 flex justify-start">
            <Link
              id="automation-cta"
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#A78BFA] px-6 py-3 text-base font-semibold text-[#04161C] transition-all hover:bg-[#9065F8] hover:shadow-lg hover:shadow-[#A78BFA]/25"
            >
              Automate Your Business
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Sticky Sidebar + True Column Stacking Cards */}
        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start relative">
          {/* Left Sticky Sidebar (Desktop) */}
          <div className="hidden lg:block w-72 lg:w-80 shrink-0 sticky top-28 self-start z-30">
            <div className="rounded-none border border-white/10 bg-[#1A1C1A]/95 p-3 shadow-none">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#A78BFA]/90">
                Workflows
              </div>
              <div className="mt-1 flex flex-col gap-1.5">
                {WORKFLOW_ITEMS.map((item, idx) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToItem(item.id)}
                      className={`group flex w-full items-center gap-2.5 rounded-none px-2.5 py-2.5 text-left transition-all duration-200 cursor-pointer ${isActive
                        ? "border border-[#A78BFA] bg-[#A78BFA]/10 text-white"
                        : "border border-transparent text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      <span
                        className={`flex h-9 w-10 shrink-0 items-center justify-center rounded-none text-base font-mono font-bold transition-colors ${isActive
                          ? "bg-[#A78BFA] text-[#04161C]"
                          : "bg-white/10 text-white/60 group-hover:bg-white/15 group-hover:text-white"
                          }`}
                      >
                        {pad(idx + 1)}
                      </span>
                      <span className="min-w-0 flex-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs sm:text-[13px] font-semibold tracking-tight leading-snug">
                        {item.shortLabel.split("→").map((part, pIdx, arr) => (
                          <span key={pIdx} className="inline-flex items-center gap-1">
                            <span>{part.trim()}</span>
                            {pIdx < arr.length - 1 && (
                              <span className="text-[#A78BFA] text-[11px] font-bold select-none">→</span>
                            )}
                          </span>
                        ))}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Independent Cards Stack in Column with Gaps */}
          <div className="flex-1 min-w-0 flex flex-col relative pb-0">
            {WORKFLOW_ITEMS.map((item, idx) => (
              <div key={item.id} className="contents">
                <div
                  id={`workflow-${item.id}`}
                  style={{
                    top: "7rem",
                    zIndex: 10 + idx,
                  }}
                  className="sticky w-full h-[520px] md:h-[400px] lg:h-[415px] rounded-none border border-white/15 bg-[#141614] p-4 sm:p-5 shadow-none"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 h-full items-stretch">
                    {/* Left: Workflow Dashboard Image */}
                    <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-none border border-white/10 bg-[#9F8DFA] shadow-inner">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-contain object-center select-none"
                        priority={idx === 0}
                      />
                    </div>

                    {/* Right: Text Content (without footer) */}
                    <div className="h-full flex flex-col justify-center p-2 sm:p-5">
                      <div>
                        {/* Number Badge */}
                        <div className="inline-flex w-fit items-center justify-center rounded-none border border-[#A78BFA]/30 bg-[#A78BFA]/10 px-2.5 py-0.5 text-[11px] font-mono font-bold text-[#A78BFA]">
                          {pad(idx + 1)}
                        </div>

                        {/* Title */}
                        <h3 className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                          {item.title.split("→").map((part, pIdx, arr) => (
                            <span key={pIdx} className="inline-flex items-center gap-1.5">
                              <span>{part.trim()}</span>
                              {pIdx < arr.length - 1 && (
                                <span className="text-[#A78BFA] font-mono font-bold">→</span>
                              )}
                            </span>
                          ))}
                        </h3>

                        {/* Short Description */}
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#CBD5E1]">
                          {item.shortDescription}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="mt-4 space-y-2">
                          {item.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#CBD5E1]">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-none bg-[#A78BFA]" />
                              <span>
                                <strong className="font-semibold text-white">{h.title}: </strong>
                                <span className="text-[#94A3B8]">{h.text}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical spacer between cards (20px gap) */}
                {idx < WORKFLOW_ITEMS.length - 1 && (
                  <div className="h-[20px] shrink-0" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 500+ Integrations Infinite Scrolling Marquee */}
        <div className="mt-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
            Connects seamlessly with your existing stack & 500+ APIs
          </p>

          <div className="relative mt-8 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="animate-marquee-left flex items-center gap-3">
              {[...INTEGRATIONS, ...INTEGRATIONS].map((app, idx) => (
                <div
                  key={`${app.name}-${idx}`}
                  className="group flex shrink-0 items-center gap-2.5 rounded-none border border-white/10 bg-[#151615] px-4 py-2.5 transition-colors duration-200 hover:border-[#A78BFA]/40 hover:bg-white/5 cursor-default"
                >
                  {app.imageSrc ? (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-none">
                      <Image
                        src={app.imageSrc}
                        alt={app.name}
                        width={28}
                        height={28}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-none text-[11px] font-extrabold text-white"
                      style={{ backgroundColor: app.color }}
                    >
                      {app.letter}
                    </div>
                  )}
                  <div className="text-left">
                    <p className="text-xs font-bold text-white whitespace-nowrap group-hover:text-[#A78BFA] transition-colors">
                      {app.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
