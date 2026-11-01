import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight, Scale, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Zinfell",
  description:
    "Review the terms governing access to the Zinfell website, use of its content, enquiries, and engagement with its digital engineering services.",
};

const SECTIONS = [
  { id: "about-zinfell", title: "1. About Zinfell" },
  { id: "website-use", title: "2. Website Use" },
  { id: "information-on-website", title: "3. Information on this Website" },
  { id: "project-enquiries", title: "4. Project Enquiries and Proposals" },
  { id: "intellectual-property", title: "5. Intellectual Property" },
  { id: "third-party-services", title: "6. Third-Party Services and Links" },
  { id: "product-information", title: "7. Product Information & SaaS Tools" },
  { id: "availability-changes", title: "8. Availability and Changes" },
  { id: "disclaimers", title: "9. Disclaimers" },
  { id: "limitation-of-liability", title: "10. Limitation of Liability" },
  { id: "privacy", title: "11. Privacy" },
  { id: "changes-to-terms", title: "12. Changes to these Terms" },
  { id: "governing-law", title: "13. Governing Law and Disputes" },
  { id: "contact", title: "14. Contact" },
];

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 border-b border-black/10">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 shadow-sm mb-6">
            <Scale className="h-3.5 w-3.5 text-black" />
            <span>LEGAL AGREEMENT</span>
          </div>

          <h1 className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
            Terms of Service
          </h1>

          <p className="mt-4 text-xs font-mono text-slate-500">
            Effective Date: October 2026
          </p>

          <p className="mt-4 text-[15px] sm:text-base leading-[1.65] text-slate-600 max-w-2xl mx-auto">
            These Terms of Service govern your access to and use of the Zinfell website, digital resources, software demonstrations, and client communication channels.
          </p>
        </div>
      </section>

      {/* 2. CONTENT & SIDEBAR */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky TOC Sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  SECTIONS
                </p>
                <nav className="mt-4 space-y-2">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block text-xs leading-relaxed text-slate-600 transition-colors hover:text-black"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-500">Legal inquiries:</p>
                  <a
                    href="mailto:support@zinfell.com"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-black hover:text-slate-700"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>support@zinfell.com</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Terms Body */}
            <div className="lg:col-span-8 space-y-12 text-slate-700 text-sm sm:text-base leading-relaxed">
              <section id="about-zinfell" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  1. About Zinfell
                </h2>
                <p>
                  <strong>Zinfell</strong> is a digital technology studio and software engineering company operating across India, the United Arab Emirates, and international markets. We specialize in bespoke web platforms, mobile software, artificial intelligence integrations, business automation workflows, cloud infrastructure, and proprietary SaaS products such as Zeviodesk.
                </p>
                <p className="mt-2">
                  In these terms, &quot;Zinfell,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer to the commercial operating entity trading as Zinfell.
                </p>
              </section>

              <section id="website-use" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  2. Website Use
                </h2>
                <p>By accessing or interacting with our website, you agree to comply with applicable laws and agree not to:</p>
                <ul className="mt-3 space-y-2.5 rounded-xl border border-slate-200 bg-slate-50/70 p-5 text-xs sm:text-sm">
                  <li>Probe, scan, or test the vulnerability of our servers, web forms, or edge network.</li>
                  <li>Transmit malicious code, viruses, automated spiders, scrapers, or denial-of-service scripts.</li>
                  <li>Misrepresent your identity, corporate affiliation, or authorization when submitting project enquiries.</li>
                  <li>Attempt unauthorized access to backend administrative endpoints, staging systems, or internal APIs.</li>
                </ul>
              </section>

              <section id="information-on-website" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  3. Information on this Website
                </h2>
                <p>
                  All materials, case studies, service descriptions, technical guides, and architectural diagrams published on this website are provided for general informational and demonstration purposes. They do not constitute an automatic binding quotation, contractual warranty, or guaranteed business outcome.
                </p>
                <p className="mt-2">
                  Commercial deliverables, specifications, service levels (SLAs), and pricing are strictly defined through formal written client agreements.
                </p>
              </section>

              <section id="project-enquiries" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  4. Project Enquiries and Proposals
                </h2>
                <p>
                  Submitting a contact form, project scope, or scheduling a consultation does not create a formal agency or client relationship. A commercial engagement only becomes effective upon execution of a bilateral Master Services Agreement (MSA) or Statement of Work (SOW) signed by authorized representatives of both parties.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  5. Intellectual Property
                </h2>
                <p>
                  All visual designs, interface layouts, vector graphics, logos, brand typography, and proprietary copy on this website are the intellectual property of Zinfell and protected by international copyright, trademark, and trade dress regulations.
                </p>
                <p className="mt-2">
                  You may view and reference our public pages for legitimate business evaluation. You may not duplicate, reverse-engineer, mirror, or commercially exploit any website code or assets without prior written consent.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  <em>Note: Intellectual property ownership regarding commissioned custom software delivered to our clients is explicitly transferred or licensed according to individual client contracts.</em>
                </p>
              </section>

              <section id="third-party-services" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  6. Third-Party Services and Links
                </h2>
                <p>
                  Our site may reference third-party software, cloud platforms (e.g. AWS, Vercel, Supabase, Google Cloud), APIs, or client websites. We do not control or endorse external services, and their terms and privacy disclosures govern your interactions with them.
                </p>
              </section>

              <section id="product-information" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  7. Product Information & SaaS Tools
                </h2>
                <p>
                  Zinfell engineers and operates proprietary software products, including <strong>Zeviodesk</strong>. Feature specifications, tiered subscription pricing, support availability, and uptime service levels for our products are governed by dedicated product subscription agreements and end-user license terms (EULA).
                </p>
              </section>

              <section id="availability-changes" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  8. Availability and Changes
                </h2>
                <p>
                  We reserve the right to modify, update, enhance, or temporarily suspend website content, features, or demonstration tools without prior liability. We endeavor to ensure continuous availability but make no guarantee of uninterrupted server uptime.
                </p>
              </section>

              <section id="disclaimers" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  9. Disclaimers
                </h2>
                <p>
                  This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the maximum extent permitted by applicable law. Zinfell disclaims all warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </section>

              <section id="limitation-of-liability" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  10. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by applicable law, in no event shall Zinfell, its officers, directors, employees, or contractors be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to use this website.
                </p>
              </section>

              <section id="privacy" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  11. Privacy
                </h2>
                <p>
                  Our data collection, cookie usage, and information handling practices are explained in our Privacy Policy. By using our website, you acknowledge that you have reviewed and understood our privacy practices.
                </p>
                <p className="mt-3">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-black hover:text-slate-700"
                  >
                    <span>Read the Zinfell Privacy Policy</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </p>
              </section>

              <section id="changes-to-terms" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  12. Changes to these Terms
                </h2>
                <p>
                  We may revise these Terms of Service periodically to reflect changes in our legal obligations or company capabilities. The latest version will always be maintained at this URL with an updated effective date.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  13. Governing Law and Disputes
                </h2>
                <p>
                  These terms and any non-contractual matters arising from website use shall be governed by and construed in accordance with the laws applicable to the commercial jurisdiction of Zinfell, without regard to conflict of law principles. Any legal proceedings shall be subject to the exclusive jurisdiction of the competent courts of that territory.
                </p>
              </section>

              <section id="contact" className="scroll-mt-32 pt-4 border-t border-slate-200">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  14. Contact
                </h2>
                <p>For questions regarding these Terms of Service, contact our legal desk:</p>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 text-xs sm:text-sm space-y-2 shadow-sm">
                  <p><strong className="text-black">Commercial Entity:</strong> Zinfell</p>
                  <p>
                    <strong className="text-black">Email:</strong>{" "}
                    <a href="mailto:support@zinfell.com" className="font-medium text-black underline hover:text-slate-700">
                      support@zinfell.com
                    </a>
                  </p>
                  <p><strong className="text-black">Global Markets Served:</strong> India, UAE, and International</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
