import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Bot, 
  Cpu, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  Zap, 
  ArrowRight, 
  Check, 
  Lock,
  Workflow
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Development Services | Custom AI Solutions | Zinfell",
  description:
    "Build AI assistants, intelligent search, document-processing systems, chatbots, and AI-powered business applications with Zinfell.",
};

const FAQS = [
  {
    question: "How do you ensure our company data remains private?",
    answer:
      "We sign strict enterprise NDAs and utilize enterprise API agreements with zero-data-retention policies. Your private company data, contracts, and documents are never used to train or fine-tune public foundation models.",
  },
  {
    question: "What is Retrieval-Augmented Generation (RAG)?",
    answer:
      "RAG connects modern language models to your proprietary business knowledge base. When a user asks a question, the system searches your verified documents first and provides an accurate answer with citations, eliminating hallucinations.",
  },
  {
    question: "Can AI operate safely without making critical mistakes?",
    answer:
      "We design AI systems with deterministic validation guardrails and human-in-the-loop review gates. Routine low-risk tasks are automated, while sensitive or irreversible actions require employee confirmation.",
  },
  {
    question: "How do you manage ongoing AI API costs?",
    answer:
      "We implement semantic caching (Redis), model routing (using smaller fast models for routine tasks and reasoning models only when required), prompt compression, and strict monthly rate limits.",
  },
];

export default function AiDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - INTELLIGENCE & TERMINAL SIMULATOR */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading & Vision */}
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                AI DEVELOPMENT &amp; MACHINE LEARNING
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Make AI useful for{" "}
                <span className="text-black font-normal">your business.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                AI creates value when it solves a concrete business bottleneck. From answering team queries using your private company handbook to extracting structured line items from supplier PDFs, we build intelligent systems grounded in your real-world data with zero hallucinations.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Explore an AI Solution</span>
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
                  <Search className="h-3 w-3 text-neutral-600" />
                  RAG Semantic Search
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Lock className="h-3 w-3 text-neutral-600" />
                  Zero Public Training
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Zap className="h-3 w-3 text-neutral-600" />
                  Sub-250ms Latency
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <ShieldCheck className="h-3 w-3 text-neutral-600" />
                  Hallucination Guardrails
                </span>
              </div>
            </div>

            {/* Right Column: Interactive AI Terminal & Reasoning Simulator */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[390px]">
                <div className="rounded-3xl border border-neutral-300/80 bg-white p-4 shadow-xl text-left space-y-3">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200/60" />
                      <span className="font-mono text-neutral-600 font-medium ml-1">ai-rag-engine.zinfell</span>
                    </div>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-mono text-neutral-600 border border-neutral-200/70">
                      185ms Latency
                    </span>
                  </div>

                  {/* User Query Block */}
                  <div className="rounded-2xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Query Prompt</span>
                    <p className="text-xs font-medium text-black">
                      &quot;Extract the renewal deadline, penalty terms, and payment terms from agreement #482.&quot;
                    </p>
                  </div>

                  {/* Retrieval Citation Node */}
                  <div className="flex items-center justify-between rounded-xl bg-white p-2 border border-neutral-200/70 text-[10px] font-mono text-neutral-600 shadow-2xs">
                    <span className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Source: Master_Contract_2026.pdf #p.4</span>
                    </span>
                    <span className="text-neutral-500">99.4% Match</span>
                  </div>

                  {/* AI Structured Response */}
                  <div className="rounded-2xl bg-neutral-900 text-white p-3.5 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-neutral-300" />
                        Verified AI Extraction
                      </span>
                      <span>Confidence: High</span>
                    </div>

                    <div className="space-y-1.5 text-neutral-200 text-[11px] leading-relaxed">
                      <p>• <strong className="text-white">Renewal Date:</strong> October 31, 2026 (requires 30-day notice).</p>
                      <p>• <strong className="text-white">Payment Terms:</strong> Net 30 days via direct bank transfer.</p>
                      <p>• <strong className="text-white">Penalty:</strong> 1.5% late fee per month on overdue balance.</p>
                    </div>
                  </div>

                  {/* Footer status */}
                  <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                    <span>Guardrails: Active</span>
                    <span className="text-black font-semibold">Zero Training on Customer Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RAG KNOWLEDGE PIPELINE - 4 CONNECTED HORIZONTAL FLOW STAGES */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ARCHITECTURE &amp; ACCURACY
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Retrieval-Augmented Generation that eliminates hallucinations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We connect state-of-the-art language models directly to your verified business documents, ensuring every generated output is grounded in truth and traceable to its original source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">01</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Data Ingestion</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Automatic syncing of your PDFs, customer databases, knowledge base articles, and operational contracts.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                PDF · CRM · SQL Sync
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">02</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Vector Embedding</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Transforming business knowledge into high-dimensional vector representations for sub-second semantic retrieval.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                pgvector · Pinecone
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">03</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Semantic Retrieval</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Matching user queries with the exact relevant paragraphs and clauses rather than relying on model guesswork.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Cosine Similarity Search
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">04</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Governed Inference</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Synthesizing exact answers with citations, source links, and strict guardrails that block speculative claims.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Zero Hallucination
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI SOLUTION CATEGORIES - NEURAL CHIP CARDS */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              SOLUTIONS WE ENGINEER
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Practical AI systems designed for everyday business value
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We focus on implementations that directly reduce operating costs, shorten customer response times, or unlock unstructured insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Bot className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Domain Assistants</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Internal knowledge assistants that help support reps, operations managers, and sales teams find answers in seconds.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                Slack / Web Embedded
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <FileText className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Document OCR Parsing</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Extracting line items, invoice totals, and dates from scanned vendor PDFs and routing them directly to accounting software.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                PDF &amp; Image OCR
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Customer Chatbots</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  24/7 web and WhatsApp bots that answer buyer questions using your official catalog, with seamless escalation to human reps.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                WhatsApp &amp; Live Chat
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-7 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80 mb-5">
                  <Cpu className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-normal text-black tracking-tight">Workflow Triage</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  Classifying incoming customer emails, detecting urgency, drafting automated responses, and updating your CRM automatically.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-neutral-500">
                Intent Classification
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE DATA PRIVACY & COST CONTROL SHIELD */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DATA GOVERNANCE &amp; COST
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Enterprise security, privacy, and budget control
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We design AI systems with commercial enterprise privacy terms, ensuring zero data leakage, controlled token budgets, and full auditability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl bg-[#F5F3F1] p-6 text-black shadow-none">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">Privacy Standard</span>
              <p className="mt-2 text-xl font-semibold text-black">Zero Training</p>
              <p className="mt-1 text-xs text-neutral-600">Your documents and inquiries are never used by OpenAI, Anthropic, or Google for public model training.</p>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 text-black shadow-none">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">Deployment</span>
              <p className="mt-2 text-xl font-semibold text-black">Private Cloud VPC</p>
              <p className="mt-1 text-xs text-neutral-600">Option to deploy open-weight models (Llama 3, Mistral) entirely within your own cloud infrastructure.</p>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 text-black shadow-none">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">Cost Control</span>
              <p className="mt-2 text-xl font-semibold text-black">Smart Caching</p>
              <p className="mt-1 text-xs text-neutral-600">Semantic caching via Redis avoids repeated LLM calls, cutting monthly API spend by up to 70%.</p>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 text-black shadow-none">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">Human Oversight</span>
              <p className="mt-2 text-xl font-semibold text-black">Review Gates</p>
              <p className="mt-1 text-xs text-neutral-600">High-stakes actions require human employee approval before triggering irreversible database updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 6. FINAL CTA */}
      <FinalCta
        title="Start with a problem worth solving."
        buttonText="Discuss an AI Project"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
