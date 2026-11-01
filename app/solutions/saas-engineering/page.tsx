import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Layers, 
  CreditCard, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Lock, 
  Zap, 
  ArrowRight, 
  Check, 
  Rocket,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Product Engineering Services | Multi-Tenant Architecture | Zinfell",
  description:
    "Design, engineer, and scale custom B2B and B2C SaaS platforms with multi-tenant cloud architecture, Stripe billing, and enterprise security with Zinfell.",
};

const FAQS = [
  {
    question: "Do you build MVPs or full enterprise SaaS platforms?",
    answer:
      "We build both. We frequently help founders launch focused, validated Minimum Viable Products (MVPs) in 6 to 10 weeks, and then partner long-term to scale architecture, add enterprise integrations, and support user growth.",
  },
  {
    question: "How do you handle multi-tenant data separation?",
    answer:
      "We design tenant isolation through schema-based separation or row-level security (RLS) policies in PostgreSQL, guaranteeing that no organization's private data can ever be accessed by another tenant.",
  },
  {
    question: "Can you integrate subscription payments and invoices?",
    answer:
      "Yes. We specialize in Stripe Billing and Lemon Squeezy integrations, supporting monthly/annual recurring tiers, usage-based consumption metering, self-service customer portals, tax collection, and automated PDF invoices.",
  },
  {
    question: "Who owns the intellectual property and code?",
    answer:
      "You own 100% of the codebase, design systems, database schemas, and intellectual property. Everything is transferred to your GitHub repository and cloud accounts upon delivery.",
  },
];

export default function SaasEngineeringPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - LIVE SAAS WORKSPACE DASHBOARD SIMULATOR */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, Vision & CTAs */}
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                SAAS PRODUCT ENGINEERING
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Turn your software idea into a{" "}
                <span className="text-black font-normal">product people can use.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                Building a SaaS product requires more than a set of features. It requires thoughtful product scoping, reliable multi-tenant database partitioning, automated subscription billing, and enterprise security. We engineer software platforms built to acquire and retain paying users.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Build Your SaaS Product</span>
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
                  <Layers className="h-3 w-3 text-neutral-600" />
                  Multi-Tenant RLS
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <CreditCard className="h-3 w-3 text-neutral-600" />
                  Stripe Subscriptions
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Lock className="h-3 w-3 text-neutral-600" />
                  Granular RBAC Roles
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Rocket className="h-3 w-3 text-neutral-600" />
                  MVP in 6-10 Weeks
                </span>
              </div>
            </div>

            {/* Right Column: Live Multi-Tenant Workspace Dashboard Simulator */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px]">
                <div className="rounded-3xl border border-neutral-300/80 bg-white p-4 shadow-xl text-left space-y-3">
                  {/* Workspace Switcher Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-neutral-900 text-white font-semibold text-[10px]">
                        A
                      </span>
                      <div>
                        <p className="font-semibold text-black leading-tight">Acme Global</p>
                        <p className="text-[9px] text-neutral-500 font-mono">acme.app.domain</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[9px] font-mono text-neutral-700 border border-neutral-200/80">
                      Enterprise Tier
                    </span>
                  </div>

                  {/* MRR & Active Tenant Metrics */}
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="rounded-2xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-1">
                      <span className="text-neutral-500 font-mono block">Monthly Recurring (MRR)</span>
                      <p className="text-base font-bold text-black font-mono">$48,250</p>
                      <span className="text-[9px] text-neutral-500 font-mono block">+14.2% this month</span>
                    </div>

                    <div className="rounded-2xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-1">
                      <span className="text-neutral-500 font-mono block">Active Workspaces</span>
                      <p className="text-base font-bold text-black font-mono">1,280</p>
                      <span className="text-[9px] text-neutral-500 font-mono block">99.98% retention</span>
                    </div>
                  </div>

                  {/* RBAC Team Permissions Preview */}
                  <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-neutral-500 pb-1.5 border-b border-neutral-100 font-mono">
                      <span>MEMBER</span>
                      <span>ROLE PERMISSION</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-neutral-200 flex items-center justify-center text-[10px] font-medium text-neutral-700">
                          S
                        </span>
                        <div>
                          <p className="font-medium text-black text-[11px]">sarah@acme.com</p>
                          <p className="text-[9px] text-neutral-400">Billing Admin</p>
                        </div>
                      </div>
                      <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[9px] font-mono text-neutral-700 border border-neutral-200/60">
                        Owner
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-neutral-200 flex items-center justify-center text-[10px] font-medium text-neutral-700">
                          D
                        </span>
                        <div>
                          <p className="font-medium text-black text-[11px]">david@acme.com</p>
                          <p className="text-[9px] text-neutral-400">Software Engineer</p>
                        </div>
                      </div>
                      <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[9px] font-mono text-neutral-700 border border-neutral-200/60">
                        Admin
                      </span>
                    </div>
                  </div>

                  {/* Footer status */}
                  <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                    <span>Stripe Webhooks Active</span>
                    <span className="text-black font-semibold">Row-Level Security Enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MULTI-TENANT ARCHITECTURE & CORE CAPABILITIES */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              CORE CAPABILITIES
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Engineered with a product mindset from prototype to scale
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We design software platforms drawn from our experience engineering and maintaining our own production SaaS platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Layers className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Multi-Tenant Isolation</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Database schema isolation and PostgreSQL Row-Level Security (RLS) keeping customer organization data separated and encrypted.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                PostgreSQL RLS
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <CreditCard className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Recurring Subscriptions</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Stripe Billing integration with tiered subscription plans, metered usage, customer self-service billing portals, and PDF receipts.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                Stripe Billing &middot; Webhooks
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Lock className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Enterprise RBAC &amp; Auth</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Secure OAuth, magic links, session management, and granular role-based permissions (Admin, Editor, Member) per tenant workspace.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                NextAuth &middot; OAuth
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Super-Admin Panels</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Internal operator dashboards to inspect tenant health, handle customer impersonation for support, and monitor platform metrics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                Full Audit Logging
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAAS ROADMAP FROM MVP TO ENTERPRISE SCALE */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DELIVERY PROCESS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              From MVP validation to multi-tenant production scaling
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We focus on speed to market with clean code, allowing your startup or business to start onboarding real pilot users quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">01</span>
                <h3 className="mt-3 text-lg font-semibold text-black">MVP Feature Scope</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Ruthlessly prioritizing the core capability that solves the primary user problem.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Sprint 01 &middot; 2 Weeks
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">02</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Architecture &amp; DB</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Setting up multi-tenant database schemas, migrations, and Prisma models.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Sprint 02 &middot; 2 Weeks
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">03</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Billing &amp; Auth</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Integrating Stripe subscription checkout, customer portal, and role permissions.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Sprint 03 &middot; 2 Weeks
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">04</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Production Launch</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Deploying to auto-scaling cloud infrastructure and onboarding pilot customer accounts.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Sprint 04 &middot; Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 5. FINAL CTA */}
      <FinalCta
        title="Have a SaaS idea worth building?"
        buttonText="Build Your SaaS Product"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
