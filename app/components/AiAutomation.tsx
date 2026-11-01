"use client";

import Link from "next/link";
import Image from "next/image";

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
  bgImageSrc?: string;
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
    imageSrc: "/workflow-lead-crm-v2.png",
    bgImageSrc: "/workflow-card-bg-1.png",
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
    imageSrc: "/workflow-whatsapp-assistant.png",
    bgImageSrc: "/workflow-card-bg-green.png",
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
    imageSrc: "/workflow-form-database-v2.png",
    bgImageSrc: "/workflow-card-bg-amber.png",
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
    imageSrc: "/workflow-order-team-v2.png",
    bgImageSrc: "/workflow-card-bg-4.png",
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

export default function AiAutomation() {
  return (
    <section
      id="automation"
      aria-labelledby="automation-heading"
      className="relative isolate overflow-x-clip bg-[#FDFCFC] pt-20 lg:pt-28 pb-14 sm:pb-16 text-black"
    >
      {/* Background subtle grid */}
      <div className="bg-tech-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_15%,black_20%,transparent_100%)] opacity-20" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header - Heading Left, Description Right (Matching Hero Structure) */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading (All Black) */}
          <div className="lg:col-span-7">
            <h2
              id="automation-heading"
              className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
            >
              What if your business could<br className="hidden sm:inline" /> do more automatically?
            </h2>
          </div>

          {/* Right Column: Description aligned to bottom baseline */}
          <div className="lg:col-span-5">
            <p
              id="automation-description"
              className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px]"
            >
              Repetitive tasks slow teams down. Manual processes create errors. Disconnected systems make simple operations complicated. Zinfell designs intelligent workflows that connect your systems, automate repetitive work, and help your team operate more efficiently.
            </p>
          </div>
        </div>

        {/* Action Button directly below - Hero Button Style */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5">
          <Link
            id="automation-cta"
            href="/contact"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md cursor-pointer"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Automate your business</span>
          </Link>
        </div>

        {/* Column Stacking Cards */}
        <div className="mt-12 lg:mt-16 flex flex-col relative pb-0">
          {WORKFLOW_ITEMS.map((item, idx) => (
            <div key={item.id} className="contents">
              <div
                id={`workflow-${item.id}`}
                style={{
                  top: "7rem",
                  zIndex: 10 + idx,
                }}
                className="sticky w-full min-h-[380px] lg:h-[400px] rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden border border-white/20 shadow-none relative"
              >
                {/* Card Gradient Background + Film Grain Texture */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
                  <Image
                    src={item.bgImageSrc || "/workflow-card-bg-1.png"}
                    alt="Workflow background gradient"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover object-center select-none"
                    priority={idx === 0}
                  />
                  {/* Film Grain Texture Overlay */}
                  <svg
                    className="absolute inset-0 h-full w-full opacity-65 mix-blend-overlay pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <filter id={`workflow-card-grain-${item.id}`}>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#workflow-card-grain-${item.id})`} />
                  </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center p-5 pt-10 sm:p-8 lg:p-10 gap-5 sm:gap-6 lg:gap-8 relative z-10">
                  {/* Left Column: Text Information with added top margin on mobile */}
                  <div className="lg:col-span-5 flex flex-col justify-center text-white pt-2 sm:pt-0">
                    {/* Title - Matching Hero Heading Font Weight (font-normal) and Tracking */}
                    <h3 className="flex flex-wrap items-center gap-x-2 text-2xl sm:text-3xl lg:text-[2.35rem] font-normal leading-[1.18] tracking-tight text-white mt-1 sm:mt-0">
                      {item.title.split("→").map((part, pIdx, arr) => (
                        <span key={pIdx} className="inline-flex items-center gap-1.5">
                          <span>{part.trim()}</span>
                          {pIdx < arr.length - 1 && (
                            <span className="text-white font-mono font-normal">→</span>
                          )}
                        </span>
                      ))}
                    </h3>

                    {/* Short Description - Matching Hero Description font size and leading */}
                    <p className="mt-2.5 text-[14px] sm:text-[14.5px] lg:text-[15px] leading-[1.6] text-white font-normal">
                      {item.shortDescription}
                    </p>

                    {/* Bullet Highlights - Pure white, hero-aligned font sizes */}
                    <ul className="mt-4 space-y-2 text-[13px] sm:text-[13.5px] lg:text-[14px] leading-relaxed text-white">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                          <span>
                            <strong className="font-medium text-white">{h.title}: </strong>
                            <span className="text-white font-normal">{h.text}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Workflow Diagram Graphic (Enlarged on mobile) */}
                  <div className="lg:col-span-7 relative h-[225px] sm:h-[280px] lg:h-full w-full flex items-center justify-center">
                    <div className="relative w-full h-full max-h-[360px] flex items-center justify-center">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 720px"
                        className="object-contain object-center select-none scale-[1.16] sm:scale-100 origin-center"
                        priority={idx === 0}
                      />
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

      {/* 500+ Integrations Section */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        {/* Header: Title outside the framed box (matching 'Trusted by leading businesses' style) */}
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5">
          <h3
            id="integrations-heading"
            className="text-xs sm:text-[13px] font-normal tracking-tight text-black/75"
          >
            Connects seamlessly with your existing stack & 500+ APIs
          </h3>
        </div>

        {/* Framed Section with continuous horizontal lines and corner circle dots (matching Clients section UI) */}
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

              <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="animate-marquee-left flex items-center gap-3">
                {[...INTEGRATIONS, ...INTEGRATIONS].map((app, idx) => (
                  <div
                    key={`${app.name}-${idx}`}
                    className="flex shrink-0 items-center gap-3 px-6 sm:px-8 grayscale opacity-50 select-none cursor-pointer transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  >
                    {app.imageSrc ? (
                      <div className="relative h-6 w-6 sm:h-7 sm:w-7 shrink-0">
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
                        className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-white shadow-2xs"
                        style={{ backgroundColor: app.color }}
                      >
                        {app.letter}
                      </div>
                    )}
                    <span className="text-sm sm:text-[15px] font-medium tracking-tight text-black whitespace-nowrap">
                      {app.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
