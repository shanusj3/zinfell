import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Lock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Zinfell",
  description:
    "Read the Zinfell Privacy Policy to understand how information is collected, used, stored, and protected when you use our website or contact our team.",
};

const SECTIONS = [
  { id: "who-we-are", title: "1. Who We Are" },
  { id: "information-we-collect", title: "2. Information We May Collect" },
  { id: "how-we-use-information", title: "3. How We Use Information" },
  { id: "legal-basis", title: "4. Legal Basis for Processing" },
  { id: "cookies-analytics", title: "5. Cookies and Analytics" },
  { id: "sharing-information", title: "6. Sharing Information" },
  { id: "international-transfers", title: "7. International Transfers" },
  { id: "data-retention", title: "8. Data Retention" },
  { id: "security", title: "9. Security" },
  { id: "your-rights", title: "10. Your Privacy Rights" },
  { id: "children-privacy", title: "11. Children's Privacy" },
  { id: "third-party-links", title: "12. Third-Party Websites" },
  { id: "policy-changes", title: "13. Changes to this Policy" },
  { id: "contact-us", title: "14. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 border-b border-black/10">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 shadow-sm mb-6">
            <Lock className="h-3.5 w-3.5 text-black" />
            <span>LEGAL & COMPLIANCE</span>
          </div>

          <h1 className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
            Privacy Policy
          </h1>

          <p className="mt-4 text-xs font-mono text-slate-500">
            Effective & Last Updated: October 2026
          </p>

          <p className="mt-4 text-[15px] sm:text-base leading-[1.65] text-slate-600 max-w-2xl mx-auto">
            At Zinfell, we respect your privacy and are committed to handling personal data responsibly, transparently, and in full compliance with modern data protection standards.
          </p>
        </div>
      </section>

      {/* 2. CONTENT & SIDEBAR */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky Table of Contents Sidebar */}
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
                  <p className="text-xs text-slate-500">Have privacy questions?</p>
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

            {/* Main Policy Body */}
            <div className="lg:col-span-8 space-y-12 text-slate-700 text-sm sm:text-base leading-relaxed">
              <section id="who-we-are" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  1. Who We Are
                </h2>
                <p>
                  This website is operated by <strong>Zinfell</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a digital engineering, cloud architecture, and product development company. We deliver custom software, web platforms, and SaaS products including Zeviodesk for businesses across India, the United Arab Emirates, and global markets.
                </p>
                <p className="mt-2">
                  For any privacy or data protection inquiries, you may contact our designated compliance team at{" "}
                  <a href="mailto:support@zinfell.com" className="font-medium text-black underline hover:text-slate-700">
                    support@zinfell.com
                  </a>.
                </p>
              </section>

              <section id="information-we-collect" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  2. Information We May Collect
                </h2>
                <p>Depending on your interaction with our website, services, and client intake forms, we may collect:</p>
                <ul className="mt-3 space-y-2.5 rounded-xl border border-slate-200 bg-slate-50/70 p-5 text-xs sm:text-sm">
                  <li>
                    <strong className="text-black">Direct Information:</strong> Name, professional email address, company name, phone number, and project descriptions submitted via contact or demo request forms.
                  </li>
                  <li>
                    <strong className="text-black">Recruitment Information:</strong> Resumes, portfolio links, and professional experience submitted via our careers inquiries.
                  </li>
                  <li>
                    <strong className="text-black">Technical & Usage Data:</strong> Anonymized IP addresses, browser specifications, operating system versions, referral sources, and page navigation sequences.
                  </li>
                  <li>
                    <strong className="text-black">Client Project Data:</strong> Data shared during active engineering contracts is governed by explicit non-disclosure agreements (NDAs) and separate master service agreements.
                  </li>
                </ul>
              </section>

              <section id="how-we-use-information" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  3. How We Use Information
                </h2>
                <p>We process information strictly for legitimate business operations:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Evaluating and responding to project enquiries, RFP requests, and consultation bookings.</li>
                  <li>Providing agreed digital engineering, UI/UX design, and cloud consulting services.</li>
                  <li>Managing candidate inquiries and talent evaluations.</li>
                  <li>Ensuring website uptime, detecting malicious intrusion attempts, and optimizing loading performance.</li>
                  <li>Complying with statutory accounting and tax obligations.</li>
                </ul>
              </section>

              <section id="legal-basis" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  4. Legal Basis for Processing
                </h2>
                <p>Where required by applicable data protection frameworks (such as GDPR or relevant international privacy laws), we rely on:</p>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li>
                    <strong className="text-black">Contractual Necessity:</strong> To take preparatory steps at your request prior to entering into a commercial software engineering agreement.
                  </li>
                  <li>
                    <strong className="text-black">Legitimate Interests:</strong> To maintain secure, efficient website operations, prevent fraud, and market our services to corporate clients.
                  </li>
                  <li>
                    <strong className="text-black">Consent:</strong> Where you have voluntarily opted in to newsletter communications or specific cookie preferences.
                  </li>
                </ul>
              </section>

              <section id="cookies-analytics" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  5. Cookies and Analytics
                </h2>
                <p>
                  Our website uses essential session cookies to ensure security and proper rendering. We may utilize privacy-conscious web analytics tools to aggregate anonymous traffic patterns without harvesting personally identifiable tracking profiles. You can manage or disable cookie preferences at any time via your browser settings.
                </p>
              </section>

              <section id="sharing-information" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  6. Sharing Information
                </h2>
                <p>
                  <strong>We never sell, rent, or trade your personal information.</strong> We only share data with vetted infrastructure vendors necessary to operate our digital platforms:
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm text-slate-600">
                  <li>Cloud infrastructure hosts (e.g. AWS, Vercel, Supabase, DigitalOcean).</li>
                  <li>Transactional email delivery services (e.g. Resend, Postmark).</li>
                  <li>Legal or regulatory authorities only when strictly required by a binding court order or statutory requirement.</li>
                </ul>
              </section>

              <section id="international-transfers" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  7. International Transfers
                </h2>
                <p>
                  Because Zinfell operates internationally, your information may be processed across secure servers in India, the European Union, the United States, and other cloud regions. We enforce standard contractual clauses and rigorous encryption protocols to ensure adequate protection.
                </p>
              </section>

              <section id="data-retention" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  8. Data Retention
                </h2>
                <p>
                  We retain personal contact data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention window is mandated by legal, accounting, or security audit requirements. Inactive project inquiries are routinely archived and purged after 24 months.
                </p>
              </section>

              <section id="security" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  9. Security
                </h2>
                <p>
                  We implement modern technical and organizational security controls, including TLS 1.3 encryption in transit, encrypted storage at rest, strict least-privilege role access, multi-factor authentication, and automated vulnerability monitoring. While no electronic system is 100% impenetrable, we adhere to high industry benchmarks to safeguard your data.
                </p>
              </section>

              <section id="your-rights" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  10. Your Privacy Rights
                </h2>
                <p>Depending on your geographic jurisdiction, you have the right to:</p>
                <ul className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-5 text-xs sm:text-sm">
                  <li>Request confirmation of whether we process your personal data and obtain a copy.</li>
                  <li>Request correction of inaccurate or incomplete information.</li>
                  <li>Request deletion (&quot;right to be forgotten&quot;) of your personal data where retention is no longer necessary.</li>
                  <li>Object to or restrict certain processing activities.</li>
                </ul>
                <p className="mt-3 text-xs sm:text-sm">
                  To exercise any of these rights, email us at{" "}
                  <a href="mailto:support@zinfell.com" className="font-medium text-black underline hover:text-slate-700">
                    support@zinfell.com
                  </a>. We respond to all verified requests within 30 days.
                </p>
              </section>

              <section id="children-privacy" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  11. Children&apos;s Privacy
                </h2>
                <p>
                  Our website and digital engineering services are exclusively directed at corporate businesses, adult professionals, and founders. We do not knowingly collect personal data from individuals under 18 years of age.
                </p>
              </section>

              <section id="third-party-links" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  12. Third-Party Websites
                </h2>
                <p>
                  Our site may link to external websites, client platforms, or documentation libraries. We have no control over the privacy practices of external parties and recommend reviewing their respective privacy policies.
                </p>
              </section>

              <section id="policy-changes" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  13. Changes to this Policy
                </h2>
                <p>
                  We may update this Privacy Policy periodically to reflect service evolutions or legal developments. When changes occur, the updated policy will be posted on this page with a revised effective date.
                </p>
              </section>

              <section id="contact-us" className="scroll-mt-32 pt-4 border-t border-slate-200">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  14. Contact Us
                </h2>
                <p>For questions, privacy requests, or feedback regarding our privacy practices:</p>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 text-xs sm:text-sm space-y-2 shadow-sm">
                  <p><strong className="text-black">Company:</strong> Zinfell</p>
                  <p>
                    <strong className="text-black">Email:</strong>{" "}
                    <a href="mailto:support@zinfell.com" className="font-medium text-black underline hover:text-slate-700">
                      support@zinfell.com
                    </a>
                  </p>
                  <p><strong className="text-black">Regions of Operation:</strong> India, UAE, and International</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
