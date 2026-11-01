import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Cloud, 
  Terminal, 
  GitBranch, 
  ShieldCheck, 
  Activity, 
  Server, 
  Database, 
  Cpu, 
  ArrowRight, 
  Check, 
  HardDrive,
  RefreshCw
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Infrastructure & DevOps Services | Zinfell",
  description:
    "Deploy and operate modern applications with cloud infrastructure, CI/CD pipelines, containerization, monitoring, and DevOps support from Zinfell.",
};

const FAQS = [
  {
    question: "Which cloud providers do you support?",
    answer:
      "We design, deploy, and manage infrastructure across AWS (Amazon Web Services), Google Cloud Platform (GCP), DigitalOcean, and serverless edge platforms like Vercel and Cloudflare.",
  },
  {
    question: "What is zero-downtime deployment?",
    answer:
      "Zero-downtime deployment uses rolling updates or blue-green switching. New application containers are spun up and verified healthy before incoming traffic is routed to them, ensuring customers never experience service interruptions during releases.",
  },
  {
    question: "How do you protect databases against data loss?",
    answer:
      "We configure automated point-in-time recovery (PITR), cross-region read replicas, encrypted daily snapshots to separate cloud storage buckets, and periodic disaster recovery restoration drills.",
  },
  {
    question: "Can you help audit and reduce our monthly cloud bills?",
    answer:
      "Yes. We conduct thorough cloud cost audits to identify oversized virtual machines, orphaned storage volumes, unindexed database queries, and redundant egress data paths, typically reducing cloud spend by 25% to 45%.",
  },
];

export default function CloudDevOpsPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - LIVE DEVOPS TERMINAL CONSOLE */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Mission */}
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                CLOUD INFRASTRUCTURE &amp; DEVOPS
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Reliable cloud infrastructure for{" "}
                <span className="text-black font-normal">software that needs to grow.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                Your application needs more than working code. It requires automated deployment pipelines, resilient serverless or containerized infrastructure, automated database backups, and 24/7 uptime observability. We engineer cloud systems built for 99.99% uptime and low latency.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Discuss Your Infrastructure</span>
                </Link>
                <Link
                  href="/products"
                  className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none"
                  style={{ color: "#000000" }}
                >
                  <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore Products</span>
                </Link>
              </div>

              {/* Spec Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5 pt-6 border-t border-black/[0.08]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Cloud className="h-3 w-3 text-neutral-600" />
                  AWS / GCP / DigitalOcean
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <GitBranch className="h-3 w-3 text-neutral-600" />
                  GitHub Actions CI/CD
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Server className="h-3 w-3 text-neutral-600" />
                  Docker &amp; Kubernetes
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <ShieldCheck className="h-3 w-3 text-neutral-600" />
                  99.99% Uptime SLA
                </span>
              </div>
            </div>

            {/* Right Column: Live DevOps Terminal Console */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px]">
                <div className="rounded-3xl border border-neutral-300/80 bg-neutral-900 p-4 shadow-xl text-left font-mono text-white space-y-3">
                  {/* Console Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                      <span className="text-neutral-300 ml-1.5">production-cluster-us-east</span>
                    </div>
                    <span className="text-emerald-400 text-[10px]">99.99% Uptime</span>
                  </div>

                  {/* Terminal Command 1 */}
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span className="text-neutral-500">$</span>
                      <span className="text-neutral-200">kubectl get pods -n production</span>
                    </div>
                    <div className="rounded-xl bg-neutral-950 p-2.5 text-[10.5px] space-y-1 text-neutral-300">
                      <div className="flex justify-between text-neutral-500 text-[9.5px]">
                        <span>NAME</span>
                        <span>READY</span>
                        <span>STATUS</span>
                        <span>AGE</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-200">api-gateway-7f4c9</span>
                        <span className="text-neutral-400">1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span className="text-neutral-400">42d</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-200">auth-service-2b81x</span>
                        <span className="text-neutral-400">1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span className="text-neutral-400">42d</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-200">task-worker-9a11d</span>
                        <span className="text-neutral-400">1/1</span>
                        <span className="text-emerald-400">Running</span>
                        <span className="text-neutral-400">18d</span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Command 2 */}
                  <div className="space-y-1 text-xs pt-1">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span className="text-neutral-500">$</span>
                      <span className="text-neutral-200">terraform plan &amp;&amp; apply</span>
                    </div>
                    <div className="text-[10px] text-neutral-400 flex items-center justify-between">
                      <span>Apply complete! Resources: 0 added, 0 changed.</span>
                      <span className="text-emerald-400 font-semibold">Matched</span>
                    </div>
                  </div>

                  {/* Terminal Footer */}
                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400">
                    <span>Zero-Downtime Deployment</span>
                    <span className="text-white">Auto-Scaling Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TIERED CLOUD ARCHITECTURE BLUEPRINT - 3 HORIZONTAL TIERS */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ARCHITECTURE OVERVIEW
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Tiered cloud infrastructure engineered for zero single point of failure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every layer of your cloud stack is isolated, load-balanced, and replicated across availability zones to guarantee continuous business operations.
            </p>
          </div>

          <div className="space-y-6">
            {/* Tier 1: Edge & Ingress */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-black border border-black/[0.04]">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80">
                  <Cloud className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold uppercase text-neutral-500">Tier 01</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span className="text-xs font-mono text-neutral-500">Global Anycast</span>
                  </div>
                  <h3 className="text-xl font-normal text-black tracking-tight mt-0.5">Edge Ingress &amp; DDoS Shield</h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-neutral-600 max-w-xl">
                    Cloudflare Edge CDN, automated SSL certificate lifecycle, web application firewall (WAF), and global Anycast routing.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 shrink-0">
                <span className="rounded-md bg-white px-2.5 py-1 border border-neutral-200/70 shadow-2xs">&lt; 30ms Latency</span>
              </div>
            </div>

            {/* Tier 2: Compute & Container Pods */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-black border border-black/[0.04]">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80">
                  <Server className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold uppercase text-neutral-500">Tier 02</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span className="text-xs font-mono text-neutral-500">Stateless Workloads</span>
                  </div>
                  <h3 className="text-xl font-normal text-black tracking-tight mt-0.5">Docker Container Pods &amp; Auto-Scaling</h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-neutral-600 max-w-xl">
                    Elastic Kubernetes / Docker clusters that automatically scale pod replicas up during peak customer traffic and scale down to save costs.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 shrink-0">
                <span className="rounded-md bg-white px-2.5 py-1 border border-neutral-200/70 shadow-2xs">Rolling Updates</span>
              </div>
            </div>

            {/* Tier 3: Managed Database & Storage */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-black border border-black/[0.04]">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80">
                  <Database className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold uppercase text-neutral-500">Tier 03</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span className="text-xs font-mono text-neutral-500">Persistent Storage</span>
                  </div>
                  <h3 className="text-xl font-normal text-black tracking-tight mt-0.5">Managed PostgreSQL, Redis &amp; S3</h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-neutral-600 max-w-xl">
                    Multi-AZ high availability database clusters with automated read-replicas, in-memory caching, and daily point-in-time snapshot recovery.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 shrink-0">
                <span className="rounded-md bg-white px-2.5 py-1 border border-neutral-200/70 shadow-2xs">Automated PITR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CI/CD AUTOMATED PIPELINE VISUALIZATION */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DEPLOYMENT VELOCITY
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Automated pipelines that let your team ship safely in minutes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every code commit is automatically tested, containerized, security-scanned, and deployed to staging or production without manual human intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">01</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Git Push Trigger</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Developers push code to GitHub or GitLab, triggering isolated automated pipeline runners.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400 font-mono">
                Webhook Event
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">02</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Automated Testing</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Unit tests, TypeScript compilation, linting, and database migration checks run in parallel.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400 font-mono">
                Passed in 1m 40s
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">03</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Docker Build &amp; Scan</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Lightweight Docker images are built, tagged with git commit hashes, and security vulnerability checked.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400 font-mono">
                CVE Scan Verified
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">04</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Rolling Live Release</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  New containers receive traffic only after health checks return 200 OK. Zero customer downtime.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400 font-mono">
                Zero-Downtime Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOUD COST OPTIMIZATION & OBSERVABILITY METRICS */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">99.99%</span>
              <p className="mt-2 text-base font-semibold text-black">Uptime Guarantee</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Multi-AZ configuration and automated health check healing prevent outages.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">35%</span>
              <p className="mt-2 text-base font-semibold text-black">Cloud Spend Reduction</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Eliminating idle resources, reserved instance planning, and caching lower monthly cloud bills.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">&lt; 45ms</span>
              <p className="mt-2 text-base font-semibold text-black">Edge Response Latency</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Global reverse proxies and cached responses serve visitors from regional edge nodes.</p>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 text-black shadow-none">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-black block">24/7</span>
              <p className="mt-2 text-base font-semibold text-black">Active APM Monitoring</p>
              <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Immediate alert notifications on Slack and PagerDuty when error rates or latency spike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 6. FINAL CTA */}
      <FinalCta
        title="Build a better foundation for your application."
        buttonText="Discuss Cloud & DevOps"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
