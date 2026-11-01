"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Briefcase, Globe, HeartHandshake, Eye, ShieldCheck, Compass } from "lucide-react";

const VALUES = [
  {
    title: "Curiosity",
    desc: "Stay open to new ideas, tools, and ways of solving problems. We encourage exploration and continuous experimentation.",
  },
  {
    title: "Ownership",
    desc: "Take responsibility for your work and the quality of what you deliver. Autonomy and trust are the cornerstones of our culture.",
  },
  {
    title: "Craft",
    desc: "Pay attention to the details that make products reliable and useful. We take pride in clean code, crisp design, and rock-solid systems.",
  },
  {
    title: "Collaboration",
    desc: "Share ideas, communicate clearly, and learn from others. Clear writing and asynchronous workflows keep us aligned.",
  },
  {
    title: "Practical thinking",
    desc: "Choose solutions that fit the problem instead of adding complexity for its own sake. Pragmatic results trump architectural hype.",
  },
];

const ROLES = [
  {
    id: "fullstack-engineer",
    title: "Full-Stack Engineer (Next.js & TypeScript)",
    type: "Full-time",
    location: "Remote (India / Global)",
    department: "Engineering",
    skills: ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    description:
      "Design, build, and deploy high-velocity web applications, APIs, and client portals with emphasis on performance, accessibility, and clean architecture.",
  },
  {
    id: "ai-automation-specialist",
    title: "AI & Workflow Automation Engineer",
    type: "Full-time",
    location: "Remote (Global)",
    department: "AI & Labs",
    skills: ["Python", "FastAPI", "LLM APIs (OpenAI / Claude)", "Webhooks", "Pinecone"],
    description:
      "Architect and integrate production AI agents, document intelligence pipelines, and automated business workflows that reduce operational friction.",
  },
  {
    id: "ui-ux-designer",
    title: "Product & UI/UX Designer",
    type: "Full-time",
    location: "Remote (Global)",
    department: "Design",
    skills: ["Figma", "Design Systems", "User Research", "Wireframing", "Prototyping"],
    description:
      "Craft intuitive user journeys, high-density dashboard layouts, and design systems that balance aesthetic beauty with functional clarity.",
  },
];

export default function CareersClient() {
  const [profileSubmitted, setProfileSubmitted] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    role: "Engineering",
    portfolio: "",
    note: "",
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSubmitted(true);
  };

  return (
    <div className="bg-[#151615] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/10 pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(167,139,250,0.12)_0%,transparent_70%)]" />

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center justify-center rounded-none border border-white/25 bg-transparent px-3.5 py-1.5 text-xs font-mono font-medium uppercase tracking-[0.2em] text-white sm:text-[13px]">
            CAREERS AT ZINFELL
          </div>

          <h1 className="mt-6 text-3xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl">
            Build useful things. Keep learning.{" "}
            <span className="text-[#A78BFA]">Make an impact.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-[1.7] text-[#94A3B8]">
            We&apos;re interested in people who enjoy solving problems, learning new technologies, and turning ideas into practical digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center justify-center gap-2 rounded-none bg-[#A78BFA] px-6 py-3.5 text-sm font-semibold text-[#04161C] transition-all hover:bg-[#9065F8]"
            >
              <span>View Openings</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 rounded-none border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <span>Submit General Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. LIFE AT ZINFELL */}
      <section className="border-b border-white/10 py-20 lg:py-28 bg-[#111211]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono font-medium uppercase tracking-[0.25em] text-[#A78BFA]">
                LIFE AT ZINFELL
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white">
                A culture built around autonomy, craft, and curiosity.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
              <p>
                We value thoughtful work, continuous learning, clear communication, and a willingness to take ownership of problems.
              </p>
              <p>
                Our work spans software engineering, AI, automation, design, and digital growth, creating opportunities to learn across disciplines and contribute to real production products like <strong className="text-white">Zeviodesk</strong>.
              </p>
              <p>
                We operate as a distributed team, prioritizing written clarity, high autonomy, and meaningful outcomes over rigid office hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE VALUE */}
      <section className="border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <p className="text-xs font-mono font-medium uppercase tracking-[0.25em] text-[#A78BFA]">
            WHAT WE VALUE
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white">
            Five principles that define our team.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="border border-white/10 bg-[#161716] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#A78BFA]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-medium text-white">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#94A3B8]">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPEN ROLES */}
      <section id="openings" className="border-b border-white/10 py-20 lg:py-28 bg-[#111211]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <p className="text-xs font-mono font-medium uppercase tracking-[0.25em] text-[#A78BFA]">
                OPEN POSITIONS
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Join our engineering &amp; product team
              </h2>
            </div>
            <span className="text-xs font-mono text-[#94A3B8]">
              {ROLES.length} Active Openings
            </span>
          </div>

          <div className="mt-8 space-y-6">
            {ROLES.map((role) => (
              <div
                key={role.id}
                className="border border-white/10 bg-[#161716] p-6 sm:p-8 transition-colors hover:border-white/25"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#94A3B8] font-mono">
                      <span>{role.department}</span>
                      <span>·</span>
                      <span>{role.type}</span>
                      <span>·</span>
                      <span className="text-[#A78BFA]">{role.location}</span>
                    </div>

                    <h3 className="mt-2 text-xl font-medium text-white">
                      {role.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
                      {role.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-none border border-white/15 bg-white/[0.02] px-2.5 py-1 text-[11px] font-mono text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 lg:pt-0 shrink-0">
                    <a
                      href="#apply"
                      className="inline-flex items-center gap-2 rounded-none bg-white/10 hover:bg-[#A78BFA] hover:text-[#04161C] px-5 py-2.5 text-xs font-semibold text-white transition-all"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GENERAL APPLICATION / TALENT COMMUNITY */}
      <section id="apply" className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-left">
          <div className="border border-white/10 bg-[#161716] p-8 sm:p-12">
            <p className="text-xs font-mono font-medium uppercase tracking-[0.25em] text-[#A78BFA]">
              GENERAL APPLICATION
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-medium text-white">
              Don&apos;t see a role that fits?
            </h2>
            <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
              You can still introduce yourself and share your skills, projects, or portfolio. We&apos;ll review your details if an appropriate opportunity becomes available.
            </p>

            {profileSubmitted ? (
              <div className="mt-8 border border-white/15 bg-white/[0.02] p-6 text-center space-y-3">
                <CheckCircle2 className="mx-auto h-8 w-8 text-[#A78BFA]" />
                <h3 className="text-lg font-medium text-white">Profile received!</h3>
                <p className="text-xs text-[#94A3B8]">
                  Thank you for your interest in Zinfell. We will be in touch if your profile matches an upcoming opening.
                </p>
              </div>
            ) : (
              <form onSubmit={handleProfileSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-none border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full rounded-none border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Discipline / Expertise
                    </label>
                    <select
                      value={profileData.role}
                      onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
                      className="w-full rounded-none border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white focus:border-[#A78BFA] focus:outline-none"
                    >
                      <option value="Engineering" className="bg-[#151615]">Software Engineering</option>
                      <option value="AI / Automation" className="bg-[#151615]">AI &amp; Automation</option>
                      <option value="Design" className="bg-[#151615]">UI/UX Product Design</option>
                      <option value="DevOps" className="bg-[#151615]">Cloud &amp; DevOps</option>
                      <option value="Marketing" className="bg-[#151615]">SEO &amp; Growth Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Portfolio / GitHub / LinkedIn *
                    </label>
                    <input
                      type="url"
                      required
                      value={profileData.portfolio}
                      onChange={(e) => setProfileData({ ...profileData, portfolio: e.target.value })}
                      placeholder="https://..."
                      className="w-full rounded-none border border-white/15 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Short Introduction / What are you excited about?
                  </label>
                  <textarea
                    rows={3}
                    value={profileData.note}
                    onChange={(e) => setProfileData({ ...profileData, note: e.target.value })}
                    placeholder="Tell us about yourself, projects you're proud of, or technologies you love."
                    className="w-full rounded-none border border-white/15 bg-black/30 p-3 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-[#A78BFA] px-6 py-3.5 text-sm font-semibold text-[#04161C] transition-all hover:bg-[#9065F8]"
                >
                  <span>Submit Your Profile</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
