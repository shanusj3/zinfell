"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqSectionProps {
  faqs: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function ServiceFaqSection({
  faqs,
  eyebrow = "FAQ",
  title = "Questions?\nWe've got answers.",
  description = "Everything you need to know about our technical process, pricing, and project delivery.",
}: ServiceFaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate bg-[#FDFCFC] py-20 lg:py-28 text-black"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
              {eyebrow}
            </p>
            <h2
              id="faq-heading"
              className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem] whitespace-pre-line"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.6] text-black/70 sm:text-[14.5px] lg:text-[15.5px] font-normal">
              {description}
            </p>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="lg:col-span-7 divide-y divide-black/10 border-t border-b border-black/10">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div key={faq.question} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    className="group flex w-full items-center justify-between gap-6 py-5 sm:py-6 text-left transition-colors cursor-pointer"
                  >
                    <span className="text-[17px] sm:text-[19px] font-normal tracking-tight text-black group-hover:text-black/75 transition-colors">
                      {faq.question}
                    </span>
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-black/45 group-hover:text-black transition-colors">
                      <Plus
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-45 text-black" : "text-black/60"
                        }`}
                        strokeWidth={1.5}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-labelledby={`faq-question-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pt-1 text-[14px] sm:text-[15px] leading-relaxed text-black/75 max-w-2xl font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
