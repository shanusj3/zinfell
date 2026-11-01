"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Wrench,
  Users,
  Package,
  Receipt,
  ShieldAlert,
  MessageSquare,
  Smartphone,
  Laptop,
  Tv,
  UserCheck,
  Building2,
  Check,
  ExternalLink,
  X,
  Send,
  Calculator,
  Shield,
  Zap,
} from "lucide-react";

export default function ZeviodeskClient() {
  const [activeTab, setActiveTab] = useState<"tickets" | "customers" | "inventory" | "billing" | "whatsapp">("tickets");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Demo Modal State
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    shopName: "",
    email: "",
    phone: "",
    technicians: "1-3 Technicians",
    shopType: "Mobile & Electronics",
  });

  // Interactive ROI Calculator State
  const [monthlyTickets, setMonthlyTickets] = useState(180);
  const hoursSaved = Math.round(monthlyTickets * 0.42);
  const revenueRecovered = Math.round(monthlyTickets * 22);
  const automatedAlerts = monthlyTickets * 3;

  // Pricing Interval State
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annual">("annual");

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      // Auto-reset after a short while if modal stays open
    }, 4000);
  };

  const FEATURES = [
    {
      icon: Wrench,
      title: "Service Ticket Management",
      badge: "Core Workflow",
      description:
        "Create and track repair tickets, record reported device issues, assign technicians, and monitor status updates from intake to final handover.",
      details: ["Intake checklist & defect documentation", "Priority tags (Urgent, Standard, Warranty)", "Status tracking with internal technician notes"],
    },
    {
      icon: Users,
      title: "Customer Records & History",
      badge: "CRM",
      description:
        "Maintain unified customer profiles, device ownership records, previous service history, and communication logs in one searchable place.",
      details: ["One-click customer profile lookup", "Repeat customer history & lifetime value", "Linked device serial numbers & IMEIs"],
    },
    {
      icon: Package,
      title: "Parts & Inventory Control",
      badge: "Stock Management",
      description:
        "Organize parts catalog, track stock thresholds across components (screens, batteries, IC chips), and automatically link parts used to active tickets.",
      details: ["Low-stock alerts & reorder notifications", "Real-time cost & margin tracking", "Batch tracking with supplier records"],
    },
    {
      icon: Receipt,
      title: "Billing & Invoicing",
      badge: "Finance",
      description:
        "Generate itemized repair invoices combining labour charges, parts used, and taxes with one click. Share digital receipts and collect payments seamlessly.",
      details: ["Instant PDF & digital invoice generation", "Custom tax rates & discount vouchers", "Advance deposit tracking"],
    },
    {
      icon: ShieldAlert,
      title: "Warranty Tracking",
      badge: "Protection",
      description:
        "Maintain warranty periods for replaced parts and service labour. Verify warranty validity automatically when customers return for follow-up support.",
      details: ["Configurable 30, 90, 180-day warranty terms", "Automatic warranty expiry calculation", "Claim verification & replacement logging"],
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & SMS Automation",
      badge: "Live Updates",
      description:
        "Keep customers informed without manual phone calls. Automatically trigger WhatsApp status updates when repairs are diagnosed, completed, or ready for pickup.",
      details: ["Automated 'Ready for Pickup' messages", "Customer digital approval requests", "Estimated quote confirmation via chat"],
    },
  ];

  const WHO_IS_IT_FOR = [
    {
      icon: Smartphone,
      title: "Mobile & Electronics Shops",
      desc: "Fast-paced smartphone, tablet, and smart device repair businesses managing high daily intake volume.",
    },
    {
      icon: Laptop,
      title: "Computer & Laptop Centers",
      desc: "Component-level motherboard repair, data recovery, hardware upgrade, and software servicing shops.",
    },
    {
      icon: Tv,
      title: "Appliance & Home Service",
      desc: "Service teams handling consumer electronics, audio equipment, and domestic appliance maintenance.",
    },
    {
      icon: UserCheck,
      title: "Independent Repair Technicians",
      desc: "Solo professionals needing a lightweight, reliable system to organize jobs, parts, and professional invoices.",
    },
    {
      icon: Building2,
      title: "Multi-Store Chains",
      desc: "Growing operations managing staff access, inventory across multiple branches, and centralized reporting.",
    },
  ];

  const WORKFLOW_STEPS = [
    { step: "01", title: "Customer Intake", desc: "Customer drops off device. Record model, serial number, reported faults, and physical condition." },
    { step: "02", title: "Ticket & Diagnosis", desc: "Ticket is assigned to technician. Diagnostic notes and required replacement parts are recorded." },
    { step: "03", title: "Repair & Parts Allocation", desc: "Technician performs service. Parts are automatically deducted from inventory with margin tracked." },
    { step: "04", title: "Invoice & Payment", desc: "Itemized invoice is generated with applicable warranty terms and payment is recorded." },
    { step: "05", title: "WhatsApp Update & Pickup", desc: "Customer receives automated WhatsApp notification with invoice summary and pickup confirmation." },
  ];

  const FAQS = [
    {
      q: "What is Zeviodesk?",
      a: "Zeviodesk is a specialized repair business management platform built by Zinfell. It is designed to bring service ticket tracking, customer records, parts inventory, invoicing, warranty management, and customer messaging into one cohesive workspace.",
    },
    {
      q: "Can multiple employees use Zeviodesk?",
      a: "Yes. Zeviodesk supports role-based team access. Admins can configure granular permissions for intake staff, repair technicians, and store managers, ensuring staff only access the views and sensitive actions relevant to their role.",
    },
    {
      q: "Does Zeviodesk support WhatsApp communication?",
      a: "Yes. Automated WhatsApp messaging workflows allow repair businesses to send automated notifications when a repair status changes (e.g. ticket created, waiting for customer approval, ready for pickup).",
    },
    {
      q: "How can my repair business get access?",
      a: "You can request a personalized product demo or reach out through our contact form. Our team will walk you through the system, assess your operational needs, and assist with onboarding your catalog and staff.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#111211] text-white selection:bg-[#A78BFA]/30 selection:text-white">
      {/* Background radial atmosphere */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#A78BFA]/15 via-[#3CB8C0]/10 to-transparent blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] h-[500px] w-[600px] rounded-full bg-[#A78BFA]/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/30 bg-[#151615] px-4 py-1.5 text-xs font-mono font-medium tracking-[0.2em] text-[#A78BFA] shadow-[0_0_20px_rgba(167,139,250,0.15)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#A78BFA]" />
                <span>A PRODUCT BY ZINFELL</span>
              </div>

              {/* Title */}
              <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
                Run your repair business from{" "}
                <span className="bg-gradient-to-r from-white via-[#E0E7FF] to-[#A78BFA] bg-clip-text text-transparent">
                  one connected platform.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#94A3B8] max-w-3xl mx-auto">
                Managing a repair business shouldn't mean switching between spreadsheets, messages, paper slips, and disconnected tools.{" "}
                <strong className="text-white font-medium">Zeviodesk</strong> brings repair-shop operations into one place—organizing service requests, tracking repairs, managing inventory, and maintaining complete customer records.
              </p>

              {/* CTA Actions */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#A78BFA] px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#9065F8] hover:shadow-[0_0_30px_rgba(167,139,250,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Request a Live Demo</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161716] px-6 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-white/20 hover:bg-[#1E201E] hover:text-white"
                >
                  <span>Explore Features</span>
                  <ChevronDown className="h-4 w-4 text-[#94A3B8]" />
                </a>

                <a
                  href="https://zeviodesk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3.5 text-sm font-medium text-[#94A3B8] transition-colors hover:border-[#A78BFA]/40 hover:text-white"
                >
                  <span>Visit zeviodesk.com</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#A78BFA]" />
                </a>
              </div>
            </div>

            {/* =================================================================== */}
            {/* INTERACTIVE PRODUCT DASHBOARD PREVIEW */}
            {/* =================================================================== */}
            <div className="mt-16 sm:mt-20">
              <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/15 bg-[#161716]/95 p-3 sm:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
                    <div className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
                    <div className="h-3 w-3 rounded-full bg-[#10B981]/80" />
                    <span className="ml-3 font-mono text-xs text-white/60">app.zeviodesk.com/dashboard</span>
                  </div>

                  <div className="flex items-center gap-1.5 overflow-x-auto rounded-lg bg-[#111211] p-1 border border-white/5">
                    <button
                      onClick={() => setActiveTab("tickets")}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeTab === "tickets"
                          ? "bg-[#A78BFA] text-black shadow-sm font-semibold"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Tickets (24)
                    </button>
                    <button
                      onClick={() => setActiveTab("customers")}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeTab === "customers"
                          ? "bg-[#A78BFA] text-black shadow-sm font-semibold"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Customers
                    </button>
                    <button
                      onClick={() => setActiveTab("inventory")}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeTab === "inventory"
                          ? "bg-[#A78BFA] text-black shadow-sm font-semibold"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Inventory
                    </button>
                    <button
                      onClick={() => setActiveTab("billing")}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeTab === "billing"
                          ? "bg-[#A78BFA] text-black shadow-sm font-semibold"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Invoices
                    </button>
                    <button
                      onClick={() => setActiveTab("whatsapp")}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeTab === "whatsapp"
                          ? "bg-[#A78BFA] text-black shadow-sm font-semibold"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      WhatsApp Bot
                    </button>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-[#111211] p-4 sm:p-6 border border-white/5 min-h-[380px]">
                  {activeTab === "tickets" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#94A3B8] font-mono">
                        <span>LIVE REPAIR QUEUE</span>
                        <span className="text-[#A78BFA] font-sans">Active Shop: Downtown Tech Hub</span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="text-[#94A3B8] border-b border-white/10">
                              <th className="pb-3 font-medium">Ticket ID</th>
                              <th className="pb-3 font-medium">Device & Fault</th>
                              <th className="pb-3 font-medium">Customer</th>
                              <th className="pb-3 font-medium">Technician</th>
                              <th className="pb-3 font-medium">Status</th>
                              <th className="pb-3 font-medium text-right">Est. Total</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/[0.02]">
                              <td className="py-3 font-mono text-[#A78BFA]">#ZD-10492</td>
                              <td className="py-3">
                                <div className="font-medium text-white">Apple iPhone 15 Pro</div>
                                <div className="text-[#94A3B8] text-[11px]">OLED Screen replacement & true-tone sync</div>
                              </td>
                              <td className="py-3 text-white/90">Sarah Mitchell</td>
                              <td className="py-3 text-white/70">Alex R.</td>
                              <td className="py-3">
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
                                  ● Ready for Pickup
                                </span>
                              </td>
                              <td className="py-3 text-right font-mono text-white">$279.00</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02]">
                              <td className="py-3 font-mono text-[#A78BFA]">#ZD-10493</td>
                              <td className="py-3">
                                <div className="font-medium text-white">MacBook Pro 16&quot; M2</div>
                                <div className="text-[#94A3B8] text-[11px]">Liquid spill diagnostic & battery test</div>
                              </td>
                              <td className="py-3 text-white/90">David Chen</td>
                              <td className="py-3 text-white/70">Vikram K.</td>
                              <td className="py-3">
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-400 border border-amber-500/20">
                                  ● In Progress
                                </span>
                              </td>
                              <td className="py-3 text-right font-mono text-white">$450.00</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02]">
                              <td className="py-3 font-mono text-[#A78BFA]">#ZD-10494</td>
                              <td className="py-3">
                                <div className="font-medium text-white">Samsung Galaxy S24 Ultra</div>
                                <div className="text-[#94A3B8] text-[11px]">Charging port pin replacement</div>
                              </td>
                              <td className="py-3 text-white/90">Elena Rostova</td>
                              <td className="py-3 text-white/70">Alex R.</td>
                              <td className="py-3">
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-400 border border-blue-500/20">
                                  ● Awaiting Part
                                </span>
                              </td>
                              <td className="py-3 text-right font-mono text-white">$89.00</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02]">
                              <td className="py-3 font-mono text-[#A78BFA]">#ZD-10495</td>
                              <td className="py-3">
                                <div className="font-medium text-white">Dell XPS 15 9520</div>
                                <div className="text-[#94A3B8] text-[11px]">SSD NVMe failure & fresh OS install</div>
                              </td>
                              <td className="py-3 text-white/90">Marcus Vance</td>
                              <td className="py-3 text-white/70">Devon W.</td>
                              <td className="py-3">
                                <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-medium text-[#A78BFA] border border-[#A78BFA]/30">
                                  ● Intake / Scoping
                                </span>
                              </td>
                              <td className="py-3 text-right font-mono text-white">$195.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab === "customers" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#94A3B8] font-mono">
                        <span>CUSTOMER CRM & DEVICE LEDGER</span>
                        <span className="text-white/70">2,840 Total Clients Recorded</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="rounded-lg bg-[#161716] p-4 border border-white/10">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white">Sarah Mitchell</span>
                            <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Active Job</span>
                          </div>
                          <p className="text-[#94A3B8] mt-1">+1 (555) 382-9921 · sarah.m@example.com</p>
                          <div className="mt-3 text-[11px] text-white/80 space-y-1">
                            <div>Registered Devices: <strong>iPhone 15 Pro, iPad Air 5</strong></div>
                            <div>Service History: 3 completed repairs ($680 total)</div>
                            <div>Active Warranty: 90-day screen guarantee until Nov 2026</div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-[#161716] p-4 border border-white/10">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white">David Chen</span>
                            <span className="text-[11px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">VIP Client</span>
                          </div>
                          <p className="text-[#94A3B8] mt-1">+1 (555) 749-1140 · david@chenmedia.io</p>
                          <div className="mt-3 text-[11px] text-white/80 space-y-1">
                            <div>Registered Devices: <strong>MacBook Pro 16&quot;, Dell UltraSharp</strong></div>
                            <div>Service History: 5 completed repairs ($1,420 total)</div>
                            <div>Tax Exemption: B2B Verified Entity</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "inventory" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#94A3B8] font-mono">
                        <span>PARTS INVENTORY & REORDER MONITOR</span>
                        <span className="text-amber-400">2 Parts Under Reorder Threshold</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="rounded-lg bg-[#161716] p-3 border border-white/10">
                          <p className="text-[#94A3B8]">iPhone 15 Pro OLED Display</p>
                          <p className="text-xl font-bold text-white mt-1">14 in stock</p>
                          <p className="text-[11px] text-emerald-400 mt-1">Optimal level (Min: 5)</p>
                        </div>
                        <div className="rounded-lg bg-[#161716] p-3 border border-amber-500/30 bg-amber-500/[0.03]">
                          <p className="text-[#94A3B8]">Samsung S24 Ultra USB-C Port</p>
                          <p className="text-xl font-bold text-amber-400 mt-1">2 in stock</p>
                          <p className="text-[11px] text-amber-400 mt-1">⚠️ Low stock (Min: 8)</p>
                        </div>
                        <div className="rounded-lg bg-[#161716] p-3 border border-white/10">
                          <p className="text-[#94A3B8]">MacBook Pro M2 96Wh Battery</p>
                          <p className="text-xl font-bold text-white mt-1">6 in stock</p>
                          <p className="text-[11px] text-emerald-400 mt-1">Healthy stock (Min: 3)</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "billing" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#94A3B8] font-mono">
                        <span>POINT OF SALE & INVOICING</span>
                        <span className="text-white/70">Invoice #INV-2026-881</span>
                      </div>
                      <div className="rounded-lg bg-[#161716] p-4 border border-white/10 text-xs space-y-2">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-[#94A3B8]">OEM Grade OLED Screen Panel</span>
                          <span className="font-mono text-white">$219.00</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-[#94A3B8]">Precision Installation & TrueTone Calibration Labour</span>
                          <span className="font-mono text-white">$60.00</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-[#94A3B8]">90-Day Component Warranty Guarantee</span>
                          <span className="font-mono text-emerald-400">Included (Free)</span>
                        </div>
                        <div className="flex justify-between pt-2 text-sm font-semibold text-white">
                          <span>Total Amount Due</span>
                          <span className="font-mono text-[#A78BFA]">$279.00</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "whatsapp" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#94A3B8] font-mono">
                        <span>AUTOMATED WHATSAPP CUSTOMER NOTIFICATION</span>
                        <span className="text-emerald-400 font-sans">Delivered · 11:42 AM</span>
                      </div>
                      <div className="max-w-md mx-auto rounded-xl bg-[#0B1410] border border-emerald-500/20 p-4 text-xs text-white/90 space-y-2 font-sans shadow-lg">
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
                          <MessageSquare className="h-3.5 w-3.5" />
                          <span>Zeviodesk Automated Notification</span>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                          Hi <strong>Sarah</strong>! Your <strong>Apple iPhone 15 Pro</strong> (Ticket #ZD-10492) has passed testing and is now <strong>Ready for Pickup</strong> at Downtown Tech Hub.
                        </p>
                        <div className="rounded bg-black/40 p-2.5 text-[11px] font-mono text-[#94A3B8] space-y-1">
                          <div>Service: Screen Replacement (OEM)</div>
                          <div>Total Due: $279.00</div>
                          <div>Warranty: 90 Days Included</div>
                        </div>
                        <p className="text-[11px] text-white/60">
                          Shop Hours: 9:00 AM – 7:30 PM. Reply to this chat for any questions.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THE CHALLENGE SECTION */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 border-t border-white/10 bg-[#0E0F0E]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                  THE OPERATIONAL CHALLENGE
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
                  Repair work gets complicated when information is scattered.
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                  When customer details, device specs, diagnostic status, parts stock, and invoices live in separate spreadsheets, chat apps, and sticky notes, repair teams struggle to maintain clarity.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                  Jobs get delayed, parts go unbilled, and customers call repeatedly asking for updates. Zeviodesk brings these fragmented workflows into one single truth.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] p-6">
                  <div className="text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold">Without Zeviodesk</div>
                  <ul className="mt-4 space-y-3 text-xs sm:text-sm text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>Lost ticket slips and undocumented device scratch claims</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>Constant incoming phone calls asking &quot;Is my laptop ready?&quot;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>Unexpected stockouts on replacement screens and batteries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>Manual invoice calculation with missed parts charges</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6">
                  <div className="text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">With Zeviodesk</div>
                  <ul className="mt-4 space-y-3 text-xs sm:text-sm text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Full digital intake with photo documentation & serial logging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Automated WhatsApp status triggers keep customers informed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Live parts deduction with low-stock supplier reorder alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>1-click digital invoicing with explicit warranty verification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CORE FEATURES GRID */}
        {/* ========================================================================= */}
        <section id="features" className="py-20 lg:py-28 border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                POWERFUL FEATURES
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Engineered for the reality of modern repair shops.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8]">
                Every module in Zeviodesk was crafted around real-world technician routines, customer interactions, and inventory movement.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-white/10 bg-[#161716] p-7 transition-all duration-300 hover:border-[#A78BFA]/50 hover:bg-[#1A1B1A] hover:shadow-[0_10px_30px_rgba(167,139,250,0.08)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A78BFA]/10 text-[#A78BFA] transition-colors group-hover:bg-[#A78BFA] group-hover:text-black">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="font-mono text-[11px] font-medium text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-1 rounded-full border border-[#A78BFA]/20">
                          {feature.badge}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#94A3B8]">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                          <Check className="h-3.5 w-3.5 text-[#A78BFA] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WHO IS ZEVIODESK FOR */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 border-t border-white/10 bg-[#0E0F0E]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                TARGET INDUSTRIES
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Who is Zeviodesk for?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8]">
                Tailored for specialized service businesses that need speed, precision, and reliable customer communications.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {WHO_IS_IT_FOR.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-[#161716] p-6 text-center hover:border-white/20 transition-colors"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#A78BFA]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WORKFLOW PIPELINE SECTION */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                THE CONNECTED LIFECYCLE
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                How Zeviodesk fits into your daily routine.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8]">
                Customer enquiry → Service ticket → Repair tracking → Billing → Customer update
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4">
              {WORKFLOW_STEPS.map((w, idx) => (
                <div key={idx} className="relative rounded-2xl border border-white/10 bg-[#161716] p-5">
                  <span className="font-mono text-2xl font-bold text-[#A78BFA]">{w.step}</span>
                  <h3 className="mt-3 text-base font-semibold text-white">{w.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE OPERATIONAL SAVINGS / ROI CALCULATOR */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 border-t border-white/10 bg-[#0E0F0E]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/30 bg-[#151615] px-4 py-1.5 text-xs font-mono font-medium text-[#A78BFA]">
                <Calculator className="h-3.5 w-3.5" />
                <span>OPERATIONAL ROI CALCULATOR</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Calculate your monthly time & revenue savings.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8]">
                See how eliminating paper slips, manual follow-up calls, and untracked parts translates into bottom-line profits.
              </p>
            </div>

            <div className="mt-14 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#161716] p-8 sm:p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label htmlFor="ticket-slider" className="text-sm font-semibold text-white">
                    Estimated Monthly Repair Tickets:
                  </label>
                  <span className="font-mono text-2xl font-bold text-[#A78BFA]">
                    {monthlyTickets} tickets / mo
                  </span>
                </div>

                <input
                  id="ticket-slider"
                  type="range"
                  min="30"
                  max="800"
                  step="10"
                  value={monthlyTickets}
                  onChange={(e) => setMonthlyTickets(Number(e.target.value))}
                  className="w-full accent-[#A78BFA] cursor-pointer h-2 bg-[#111211] rounded-lg"
                />

                <div className="flex justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span>30 (Solo Tech)</span>
                  <span>250 (Busy Store)</span>
                  <span>800+ (Multi-Branch)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div className="rounded-2xl border border-white/5 bg-[#111211] p-5 text-center">
                  <p className="text-xs font-mono uppercase text-[#94A3B8]">Admin Time Saved</p>
                  <p className="mt-2 text-3xl font-extrabold text-white">~{hoursSaved} hrs</p>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">per month freed up for repairs</p>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5 text-center">
                  <p className="text-xs font-mono uppercase text-emerald-400">Parts Margin Recovered</p>
                  <p className="mt-2 text-3xl font-extrabold text-emerald-400">~${revenueRecovered.toLocaleString()}</p>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">from unbilled parts & scrap</p>
                </div>

                <div className="rounded-2xl border border-[#A78BFA]/20 bg-[#A78BFA]/[0.03] p-5 text-center">
                  <p className="text-xs font-mono uppercase text-[#A78BFA]">Automated Chat Alerts</p>
                  <p className="mt-2 text-3xl font-extrabold text-[#A78BFA]">{automatedAlerts.toLocaleString()}</p>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">phone calls eliminated</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#A78BFA] px-7 py-3 text-xs font-bold text-black transition-all hover:bg-[#9065F8]"
                >
                  <span>See How It Works on a 15-Min Demo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WHY ZEVIODESK */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-white/10 bg-[#161716] p-8">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A78BFA]">REASON 01</span>
                <h3 className="mt-3 text-xl font-bold text-white">One Connected Workspace</h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                  Eliminate duplicate data entry across distinct tools. Tickets, parts, invoices, and customer communications stay automatically synchronised.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#161716] p-8">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A78BFA]">REASON 02</span>
                <h3 className="mt-3 text-xl font-bold text-white">A Repair-Focused Workflow</h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                  Unlike generic CRM or ERP software, every button, field, and workflow in Zeviodesk is built specifically around device repair realities and technician habits.
                </p>
              </div>

              <div className="rounded-2xl border border-[#A78BFA]/30 bg-[#151615] p-8 shadow-[0_0_30px_rgba(167,139,250,0.1)]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A78BFA]">REASON 03</span>
                <h3 className="mt-3 text-xl font-bold text-white">Engineered & Backed by Zinfell</h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                  Zeviodesk is backed by Zinfell&apos;s product engineering team. You receive continuous security updates, cloud backups, responsive support, and zero downtime maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 border-t border-white/10 bg-[#0E0F0E]">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#A78BFA]">
                COMMON QUESTIONS
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-[#161716] transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-base font-semibold text-white focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#A78BFA] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CLOSING CTA */}
        {/* ========================================================================= */}
        <section className="relative py-20 lg:py-28 border-t border-white/10 overflow-hidden">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl border border-[#A78BFA]/30 bg-gradient-to-b from-[#1E201E] to-[#151615] p-10 sm:p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
                MODERNIZE YOUR OPERATIONS
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                Bring your repair operations into one place.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
                Explore whether Zeviodesk is the right fit for your repair business. Request a live guided walkthrough with our product specialists.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#A78BFA] px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-[#9065F8] hover:shadow-[0_0_30px_rgba(167,139,250,0.4)]"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161716] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1E201E]"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Contact Zinfell Team</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE DEMO BOOKING MODAL */}
      {/* ========================================================================= */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-[#A78BFA]/40 bg-[#161716] p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
            <button
              onClick={() => {
                setIsDemoModalOpen(false);
                setDemoSubmitted(false);
              }}
              className="absolute right-5 top-5 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {demoSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Demo Request Received!</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{demoFormData.name || "there"}</strong>! Our product specialists will reach out via WhatsApp / Email within 2 business hours to coordinate your guided tour of Zeviodesk.
                </p>
                <button
                  onClick={() => {
                    setIsDemoModalOpen(false);
                    setDemoSubmitted(false);
                  }}
                  className="mt-4 rounded-full bg-[#A78BFA] px-6 py-2.5 text-xs font-bold text-black"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>SCHEDULE A 15-MINUTE DEMO</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  See Zeviodesk in Action
                </h3>
                <p className="mt-1 text-xs text-[#94A3B8]">
                  Personalized walkthrough tailored to your repair shop workflow.
                </p>

                <form onSubmit={handleDemoSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#94A3B8] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Ross"
                        value={demoFormData.name}
                        onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#111211] px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#94A3B8] mb-1">Shop / Business Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Repair Lab"
                        value={demoFormData.shopName}
                        onChange={(e) => setDemoFormData({ ...demoFormData, shopName: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#111211] px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#94A3B8] mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="david@apexrepair.com"
                        value={demoFormData.email}
                        onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#111211] px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#94A3B8] mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2831"
                        value={demoFormData.phone}
                        onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#111211] px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#94A3B8] mb-1">Shop Specialty</label>
                      <select
                        value={demoFormData.shopType}
                        onChange={(e) => setDemoFormData({ ...demoFormData, shopType: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#111211] px-3.5 py-2.5 text-xs text-white focus:border-[#A78BFA] focus:outline-none"
                      >
                        <option>Mobile & Electronics</option>
                        <option>Laptop & Computer</option>
                        <option>Home Appliances</option>
                        <option>Independent Technician</option>
                        <option>Multi-Store Chain</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#94A3B8] mb-1">Team Size</label>
                      <select
                        value={demoFormData.technicians}
                        onChange={(e) => setDemoFormData({ ...demoFormData, technicians: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#111211] px-3.5 py-2.5 text-xs text-white focus:border-[#A78BFA] focus:outline-none"
                      >
                        <option>Solo Technician (1)</option>
                        <option>1-3 Technicians</option>
                        <option>4-10 Technicians</option>
                        <option>10+ Multi-location</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#A78BFA] py-3.5 text-xs font-bold text-black transition-all hover:bg-[#9065F8] shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                  >
                    <span>Confirm Demo Schedule</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <p className="text-[10px] text-center text-[#94A3B8]">
                    No credit card required. 100% free product assessment by Zinfell.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
