"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICE_PILLS = [
  "Web Application",
  "Mobile App",
  "AI & Automation",
  "UI/UX Design",
  "Custom Software",
  "Consulting",
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Application",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO SECTION (Consistent with Home, About & Solutions Hero Architecture) */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[50vh] sm:min-h-[54vh] lg:min-h-[58vh] flex-col justify-center overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                LET&apos;S TALK
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Tell us what you&apos;re building.
              </h1>
            </div>

            {/* Right Column: Narrative Subtitle */}
            <div className="lg:col-span-5 lg:pl-4">
              <p className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px]">
                Have an idea for a web platform, mobile app, AI automation workflow, or proprietary software? Drop us a brief note and we&apos;ll get back to you within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIMPLE & EFFECTIVE FORM + SIDEBAR */}
      <section className="border-t border-black/[0.06] bg-slate-50/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (7 cols): Simple & Effective Contact Form */}
            <div className="lg:col-span-7 rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-9 lg:p-11 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.02)]">
              {submitted ? (
                <div className="py-14 sm:py-16 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F3F0] text-black">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7 text-black"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-[26px] font-medium tracking-tight text-black">
                    Thank you! We received your message.
                  </h3>
                  <p className="max-w-md mx-auto text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Our engineering team will review your project details and reach out to{" "}
                    <strong className="text-black font-medium">{formData.email || "you"}</strong> within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          service: "Web Application",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs sm:text-sm font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Two-Column: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company or Website (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Company / Organization <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Quick Service Category Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2.5">
                      What can we help you build?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_PILLS.map((pill) => {
                        const isSelected = formData.service === pill;
                        return (
                          <button
                            key={pill}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: pill })}
                            className={`rounded-full px-4 py-2 text-xs sm:text-[13px] font-medium transition-all ${
                              isSelected
                                ? "bg-black text-white shadow-sm"
                                : "border border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                            }`}
                          >
                            {pill}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none transition-colors resize-y leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-black px-8 py-3.5 text-sm sm:text-base font-medium text-white transition-all hover:bg-slate-800 disabled:opacity-50 shadow-md"
                      style={{ color: "#ffffff" }}
                    >
                      <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        style={{ color: "#ffffff" }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column (5 cols): What Happens Next & Direct Contact */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Card 1: What Happens Next */}
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-8 space-y-5 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.02)]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  WHAT HAPPENS NEXT
                </span>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F4F3F0] text-[11px] font-mono font-medium text-black shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-black">Fast Review</h4>
                      <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                        We review your requirements, technical feasibility, and goals within 24 business hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F4F3F0] text-[11px] font-mono font-medium text-black shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-black">Discovery Discussion</h4>
                      <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                        We arrange a straightforward conversation to clarify scope, timeline, and architectural approach.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F4F3F0] text-[11px] font-mono font-medium text-black shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-black">Roadmap & Proposal</h4>
                      <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                        You receive a transparent engineering proposal with fixed milestones and zero hidden surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Direct Contact */}
              <div className="rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-8 space-y-4 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.02)]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  DIRECT CONTACT
                </span>

                <div>
                  <a
                    href="mailto:support@zinfell.com"
                    className="inline-flex items-center gap-2.5 text-base sm:text-lg font-medium text-black hover:text-slate-600 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-black"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>support@zinfell.com</span>
                  </a>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-500 font-normal">
                    We respond to every message within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
