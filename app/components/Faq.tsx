"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "services",
    question: "What services does Zinfell provide?",
    answer:
      "Zinfell provides web development, mobile app development, AI development, business automation, UI/UX design, SEO, and digital marketing services.",
  },
  {
    id: "custom-software",
    question: "Can you build completely custom software?",
    answer:
      "Yes. We build custom software around your business requirements, workflows, users, integrations, and long-term goals.",
  },
  {
    id: "international-clients",
    question: "Do you work with international clients?",
    answer:
      "Yes. Zinfell works with businesses across India, the UAE, and other international markets.",
  },
  {
    id: "add-ai",
    question: "Can you add AI to an existing application?",
    answer:
      "Yes. We can integrate AI into existing websites, applications, CRMs, support systems, workflows, and internal business tools.",
  },
  {
    id: "automate-processes",
    question: "Can you automate our existing business processes?",
    answer:
      "Yes. We analyze your existing workflows and identify opportunities where automation can reduce manual work and improve efficiency.",
  },
  {
    id: "support-after-launch",
    question: "Do you provide support after launch?",
    answer:
      "Yes. Depending on your requirements, we provide ongoing maintenance, technical support, improvements, optimization, and growth services.",
  },
  {
    id: "project-cost",
    question: "How much does a project cost?",
    answer:
      "Project pricing depends on scope, complexity, integrations, technology, and timeline. Contact us with your requirements and we'll help define the right approach.",
  },
  {
    id: "start-project",
    question: "How do we start a project?",
    answer:
      "Simply contact us and tell us what you're trying to build, improve, or automate. We'll discuss your requirements and recommend the next steps.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("services");

  const toggleQuestion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate bg-[#151615] py-20 lg:py-28 text-white"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-1">
            <h2
              id="faq-heading"
              className="text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[46px]"
            >
              Questions?
              <br />
              We&apos;ve got answers.
            </h2>
          </div>

          {/* Right Column: Clean Divider List Accordion */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleQuestion(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="group flex w-full items-center justify-between gap-6 py-5 sm:py-6 text-left transition-colors cursor-pointer"
                  >
                    <span className="text-[17px] sm:text-[19px] font-normal tracking-tight text-white transition-colors">
                      {item.question}
                    </span>
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      <Plus
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-45 text-white/80" : "text-white/50"
                        }`}
                        strokeWidth={1.25}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pt-1 text-[15px] sm:text-base leading-relaxed text-[#A1A1AA] max-w-2xl">
                          {item.answer}
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
