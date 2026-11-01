import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Workflow, 
  Zap, 
  MessageSquare, 
  Database, 
  Bell, 
  ArrowRight, 
  Check, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  GitBranch,
  Repeat
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Process Automation Services | Zinfell",
  description:
    "Automate repetitive workflows, connect business applications, and streamline notifications, lead management, and customer communication with Zinfell.",
};

const FAQS = [
  {
    question: "Can you automate workflows across our existing software?",
    answer:
      "Yes. As long as your existing software provides an API, webhook listeners, or database export capabilities, we can build custom middleware or cloud functions to connect them together.",
  },
  {
    question: "Can automation workflows include artificial intelligence?",
    answer:
      "Yes. AI can assist with unstructured steps—such as interpreting freeform customer emails or extracting line items from scanned PDF receipts—while deterministic code handles the routing and updates.",
  },
  {
    question: "Will automation eliminate all manual work?",
    answer:
      "The goal is not to eliminate human oversight, but to remove repetitive low-value data entry so your team can focus on strategy, customer relationships, and closing business.",
  },
  {
    question: "What happens if an external API goes down?",
    answer:
      "We design all automations with exponential backoff retries, persistent dead-letter queues, and immediate notifications so no message or order is ever silently dropped.",
  },
];

export default function BusinessAutomationPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - LIVE WORKFLOW PIPELINE SIMULATOR */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                BUSINESS PROCESS AUTOMATION
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Less manual work.{" "}
                <span className="text-black font-normal">More room to grow.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                Repetitive tasks, disconnected applications, and manual handovers slow down growing businesses. We build resilient event-driven integrations that connect your sales, customer support, and accounting software into automated operational pipelines that run 24/7 without human delay.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Automate Your Business</span>
                </Link>
                <Link
                  href="/products"
                  className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none"
                  style={{ color: "#000000" }}
                >
                  <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore Products</span>
                </Link>
              </div>

              {/* Spec Chips */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5 pt-6 border-t border-black/[0.08]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Zap className="h-3 w-3 text-neutral-600" />
                  Sub-second Execution
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <MessageSquare className="h-3 w-3 text-neutral-600" />
                  WhatsApp Business API
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Database className="h-3 w-3 text-neutral-600" />
                  Bi-Directional CRM Sync
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <ShieldCheck className="h-3 w-3 text-neutral-600" />
                  Zero Data Loss Retries
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Event-Driven Pipeline Simulator */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[390px]">
                <div className="rounded-3xl border border-neutral-300/80 bg-white p-4 shadow-xl text-left space-y-3">
                  {/* Pipeline Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span className="font-mono text-neutral-800 font-medium">pipeline-lead-capture.active</span>
                    </div>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-mono text-neutral-600 border border-neutral-200/70">
                      Execution: 0.38s
                    </span>
                  </div>

                  {/* Node 1: Webhook Trigger */}
                  <div className="rounded-2xl bg-[#FAF9F8] p-3 border border-neutral-200/70 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-neutral-200/80 text-black font-mono text-[10px] shadow-2xs">
                        01
                      </span>
                      <div>
                        <p className="font-semibold text-black">New Inbound Inquiry</p>
                        <p className="text-[10px] text-neutral-500 font-mono">Website Form &middot; Campaign Ad</p>
                      </div>
                    </div>
                    <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[9px] font-mono text-neutral-600">Trigger</span>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-3 bg-neutral-300" />
                  </div>

                  {/* Node 2: Validation & CRM Sync */}
                  <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 shadow-2xs flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 border border-neutral-200/80 text-neutral-700 font-mono text-[10px]">
                        02
                      </span>
                      <div>
                        <p className="font-semibold text-black">Validate &amp; Sync CRM</p>
                        <p className="text-[10px] text-neutral-500 font-mono">Phone formatted &middot; HubSpot Deal #912</p>
                      </div>
                    </div>
                    <span className="text-neutral-500 text-[10px] font-mono">Synced</span>
                  </div>

                  {/* Flow Split Connectors */}
                  <div className="flex justify-around px-12">
                    <div className="w-0.5 h-3 bg-neutral-300" />
                    <div className="w-0.5 h-3 bg-neutral-300" />
                  </div>

                  {/* Branch Nodes */}
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="rounded-xl bg-[#FAF9F8] p-2.5 border border-neutral-200/70 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-black">WhatsApp Sent</span>
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-[9px] text-neutral-500 leading-tight">Welcome message &amp; PDF brochure sent to client</p>
                    </div>

                    <div className="rounded-xl bg-[#FAF9F8] p-2.5 border border-neutral-200/70 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-black">Slack Rep Alert</span>
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <p className="text-[9px] text-neutral-500 leading-tight">Sales lead assigned to account manager</p>
                    </div>
                  </div>

                  {/* Status Footer */}
                  <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                    <span>Zero Manual Entry</span>
                    <span className="text-black font-semibold">100% Delivery Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL-WORLD WORKFLOW BLUEPRINTS - CONNECTED PIPELINE TREE */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              OPERATIONAL WORKFLOWS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Proven automated pipelines ready to deploy in your business
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Eliminate double-entry, missed follow-ups, and spreadsheet chaos with interconnected software events that run automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Workflow 1 */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Workflow className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Lead Capture &amp; Instant Triage</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Web inquiries and ad leads are immediately validated, logged into your CRM, and greeted with an interactive WhatsApp message in seconds.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] space-y-2 text-[11px] text-neutral-600 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>Form &rarr; CRM &rarr; WhatsApp &rarr; Slack</span>
                </div>
              </div>
            </div>

            {/* Workflow 2 */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Repeat className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Invoice &amp; Billing Reconciliation</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Incoming vendor invoices are parsed, verified against purchase orders, and automatically synced with QuickBooks or Xero without manual typing.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] space-y-2 text-[11px] text-neutral-600 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>Invoice PDF &rarr; OCR &rarr; ERP &rarr; Accounting</span>
                </div>
              </div>
            </div>

            {/* Workflow 3 */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <GitBranch className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Support Escalation &amp; Routing</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Incoming support tickets are classified by urgency, drafted with knowledge-grounded replies, and assigned to the right specialist.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] space-y-2 text-[11px] text-neutral-600 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>Ticket &rarr; AI Triage &rarr; Draft Reply &rarr; Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONNECTED SOFTWARE ECOSYSTEM */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              SOFTWARE INTEGRATIONS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Connect your existing business applications
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We build custom middleware, webhooks, and cloud functions that connect your daily software stack seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="rounded-2xl bg-[#F5F3F1] p-5 text-center space-y-2 shadow-none">
              <span className="font-semibold text-black text-sm block">WhatsApp</span>
              <span className="text-[11px] text-neutral-500 font-mono block">Cloud API</span>
            </div>
            <div className="rounded-2xl bg-[#F5F3F1] p-5 text-center space-y-2 shadow-none">
              <span className="font-semibold text-black text-sm block">HubSpot</span>
              <span className="text-[11px] text-neutral-500 font-mono block">CRM Sync</span>
            </div>
            <div className="rounded-2xl bg-[#F5F3F1] p-5 text-center space-y-2 shadow-none">
              <span className="font-semibold text-black text-sm block">Stripe</span>
              <span className="text-[11px] text-neutral-500 font-mono block">Payments</span>
            </div>
            <div className="rounded-2xl bg-[#F5F3F1] p-5 text-center space-y-2 shadow-none">
              <span className="font-semibold text-black text-sm block">Slack</span>
              <span className="text-[11px] text-neutral-500 font-mono block">Team Alerts</span>
            </div>
            <div className="rounded-2xl bg-[#F5F3F1] p-5 text-center space-y-2 shadow-none">
              <span className="font-semibold text-black text-sm block">QuickBooks</span>
              <span className="text-[11px] text-neutral-500 font-mono block">Accounting</span>
            </div>
            <div className="rounded-2xl bg-[#F5F3F1] p-5 text-center space-y-2 shadow-none">
              <span className="font-semibold text-black text-sm block">PostgreSQL</span>
              <span className="text-[11px] text-neutral-500 font-mono block">Custom DB</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPERATIONAL EFFICIENCY METRICS */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">85%</span>
              <p className="mt-2 text-base font-semibold text-black">Less Manual Entry</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Eliminate repetitive copying between customer forms, spreadsheets, and databases.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">&lt; 10s</span>
              <p className="mt-2 text-base font-semibold text-black">Lead Response Time</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Engage interested customers via WhatsApp or Email while their intent is at its peak.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">0%</span>
              <p className="mt-2 text-base font-semibold text-black">Data Loss</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Automated dead-letter queues hold and retry messages during third-party API outages.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">24/7</span>
              <p className="mt-2 text-base font-semibold text-black">Always Running</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Operational pipelines execute through nights, weekends, and holidays without delay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 6. FINAL CTA */}
      <FinalCta
        title="Your team shouldn't have to repeat every task manually."
        buttonText="Automate Your Business"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
