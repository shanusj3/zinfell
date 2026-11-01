import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/app/components/FinalCta";
import ServiceFaqSection from "@/app/components/ServiceFaqSection";
import { 
  Smartphone, 
  Fingerprint, 
  Bell, 
  Database, 
  MapPin, 
  Camera, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Apple, 
  Sparkles,
  Zap,
  RefreshCw
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Company | iOS & Android | Zinfell",
  description:
    "Develop customer apps, business applications, and cross-platform mobile experiences with Zinfell.",
};

const FAQS = [
  {
    question: "Can you develop both iOS and Android apps?",
    answer:
      "Yes. We design and build solutions for both platforms. We recommend cross-platform development (such as React Native) for maximum velocity and shared codebase efficiency, or native when hardware constraints dictate.",
  },
  {
    question: "Can you connect a mobile app to an existing website or backend?",
    answer:
      "Yes. We can integrate mobile applications with your existing web servers, REST/GraphQL APIs, CRM databases, and payment gateways.",
  },
  {
    question: "Can you help with ongoing app maintenance?",
    answer:
      "Yes. Operating system updates, new device screen resolutions, security patches, and feature additions can be handled under an ongoing support partnership.",
  },
  {
    question: "How long does it take to launch a mobile app?",
    answer:
      "A focused MVP typically takes between 6 to 12 weeks from initial product scoping to production submission, depending on features and third-party integrations.",
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO - MOBILE-FIRST DUAL-COLUMN WITH SMARTPHONE SHOWCASE */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, Description & CTAs */}
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                MOBILE APP DEVELOPMENT
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                Turn your idea into a{" "}
                <span className="text-black font-normal">mobile experience.</span>
              </h1>
              <p className="mt-4 max-w-xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-black/70 font-normal">
                Build mobile applications that help customers interact with your business, enable teams to work more efficiently, and make digital services easier to access. We craft native iOS and Android apps with 60 FPS performance, offline reliability, and effortless touch interactions.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Discuss a Mobile App</span>
                </Link>
                <Link
                  href="/products"
                  className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none"
                  style={{ color: "#000000" }}
                >
                  <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Explore Products</span>
                </Link>
              </div>

              {/* Mobile Spec Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5 pt-6 border-t border-black/[0.08]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Apple className="h-3 w-3 text-neutral-600" />
                  iOS 18 Native (Swift)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Smartphone className="h-3 w-3 text-neutral-600" />
                  Android 15 (Kotlin)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Zap className="h-3 w-3 text-neutral-600" />
                  React Native / Flutter
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F3F1] px-3 py-1 text-xs font-medium text-neutral-700">
                  <Fingerprint className="h-3 w-3 text-neutral-600" />
                  Biometric Auth
                </span>
              </div>
            </div>

            {/* Right Column: Physical Smartphone Showcase with Live UI */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                {/* Decorative Soft Grey Ambient Glow */}
                <div className="absolute -inset-4 rounded-[48px] bg-neutral-200/40 blur-2xl -z-10" />

                {/* Smartphone Outer Chassis */}
                <div className="relative rounded-[44px] border-[5px] border-neutral-300/80 bg-white p-3 shadow-2xl">
                  {/* Speaker Ear Notch / Dynamic Island */}
                  <div className="mx-auto mb-3 flex items-center justify-between px-3">
                    <span className="font-mono text-[10px] font-semibold text-neutral-500">9:41</span>
                    <div className="h-3.5 w-20 rounded-full bg-neutral-800 flex items-center justify-end pr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                      <span>5G</span>
                      <div className="h-2 w-3.5 rounded-xs border border-neutral-500 bg-neutral-500" />
                    </div>
                  </div>

                  {/* Simulated Mobile Application Screen */}
                  <div className="space-y-3 rounded-[32px] bg-[#FAF9F8] p-3.5 border border-neutral-200/70 text-left">
                    {/* App Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60">
                      <div>
                        <p className="text-[10px] text-neutral-500 font-medium">Welcome back</p>
                        <p className="text-xs font-semibold text-black">Zinfell Workspace</p>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 text-xs font-medium">
                        Z
                      </div>
                    </div>

                    {/* Active Order / Live Widget */}
                    <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-black">Live Appointment</span>
                        <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-medium text-neutral-600 border border-neutral-200/60">
                          Confirmed
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600">On-site Consultation · 2:30 PM</p>
                      <div className="h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
                        <div className="h-full w-2/3 rounded-full bg-neutral-400" />
                      </div>
                    </div>

                    {/* Quick Action Grid */}
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-xl bg-white p-2.5 border border-neutral-200/80 shadow-2xs space-y-1">
                        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-neutral-100 text-neutral-600">
                          <Zap className="h-3 w-3" />
                        </span>
                        <span className="font-medium text-black block">Quick Request</span>
                        <span className="text-[9px] text-neutral-400 block">Instant dispatch</span>
                      </div>
                      <div className="rounded-xl bg-white p-2.5 border border-neutral-200/80 shadow-2xs space-y-1">
                        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-neutral-100 text-neutral-600">
                          <Database className="h-3 w-3" />
                        </span>
                        <span className="font-medium text-black block">Sync Offline</span>
                        <span className="text-[9px] text-neutral-400 block">100% Cached</span>
                      </div>
                    </div>

                    {/* Notification Banner */}
                    <div className="flex items-center gap-2 rounded-xl bg-white p-2 border border-neutral-200/80 text-[10px] shadow-2xs">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
                        <Bell className="h-3 w-3" />
                      </span>
                      <span className="text-neutral-700 truncate">Push alert: Project milestone signed</span>
                    </div>

                    {/* Bottom Tab Bar Navigation */}
                    <div className="mt-2 pt-2 border-t border-neutral-200/70 flex items-center justify-around text-neutral-500">
                      <div className="flex flex-col items-center gap-0.5 text-black">
                        <Smartphone className="h-3.5 w-3.5" />
                        <span className="text-[8px] font-medium">Home</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <Camera className="h-3.5 w-3.5 text-neutral-400" />
                        <span className="text-[8px]">Scan</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <Bell className="h-3.5 w-3.5 text-neutral-400" />
                        <span className="text-[8px]">Alerts</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <Fingerprint className="h-3.5 w-3.5 text-neutral-400" />
                        <span className="text-[8px]">Account</span>
                      </div>
                    </div>

                    {/* Home Indicator Bar */}
                    <div className="h-1 w-24 rounded-full bg-neutral-300 mx-auto mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL-OS ECOSYSTEM - TWO LARGE SIDE-BY-SIDE ARCHITECTURAL PLATFORM CARDS */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              CROSS-PLATFORM &amp; NATIVE ARCHITECTURE
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Engineered natively for both major mobile operating systems
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We build mobile solutions with shared codebase velocity and native runtime fidelity, guaranteeing fast startup times, tactile haptic feedback, and compliance with Apple and Google design guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Platform 1: iOS Native & Apple Ecosystem */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 sm:p-9 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80">
                      <Apple className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-normal text-black tracking-tight">Apple iOS Ecosystem</h3>
                      <p className="text-xs text-neutral-500">Swift &amp; Human Interface Guidelines</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-2xs border border-neutral-200/60">
                    App Store Ready
                  </span>
                </div>

                <div className="mt-6 space-y-3.5 text-xs sm:text-[13.5px] text-neutral-700">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <div>
                      <strong className="font-medium text-black">Dynamic Island &amp; Live Activities:</strong> Real-time delivery, flight, or booking status visible on locked screens.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <div>
                      <strong className="font-medium text-black">Keychain &amp; FaceID Authentication:</strong> Secure hardware biometric storage with zero server-side credential leaks.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <div>
                      <strong className="font-medium text-black">App Store Review Assurance:</strong> 100% adherence to Apple privacy manifests and in-app purchase guidelines.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-neutral-500">
                <span>Targets iPhone, iPad &amp; Apple Silicon</span>
                <span className="font-mono text-black font-medium">Swift 6.0</span>
              </div>
            </div>

            {/* Platform 2: Android & Cross-Platform */}
            <div className="rounded-3xl bg-[#F5F3F1] p-7 sm:p-9 flex flex-col justify-between text-black shadow-none border border-black/[0.04]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-2xs border border-neutral-200/80">
                      <Smartphone className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-normal text-black tracking-tight">Android &amp; Cross-Platform</h3>
                      <p className="text-xs text-neutral-500">React Native &amp; Kotlin Core</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-2xs border border-neutral-200/60">
                    Google Play Ready
                  </span>
                </div>

                <div className="mt-6 space-y-3.5 text-xs sm:text-[13.5px] text-neutral-700">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <div>
                      <strong className="font-medium text-black">Shared Codebase Velocity:</strong> 90%+ code sharing between iOS and Android without sacrificing UI smoothness.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <div>
                      <strong className="font-medium text-black">Adaptive Material 3 System:</strong> Responsive layouts tested across Samsung, Google Pixel, Xiaomi, and OnePlus.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <div>
                      <strong className="font-medium text-black">Background Sync &amp; Worker:</strong> Resilient data uploads even when connectivity is intermittent or throttled.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-neutral-500">
                <span>Optimized APK / AAB App Bundles</span>
                <span className="font-mono text-black font-medium">React Native 0.74</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HARDWARE & DEVICE SENSORS - SLEEK HORIZONTAL RIBBON CARDS */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DEVICE INTEGRATIONS
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              Harness native smartphone hardware capabilities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We integrate deeply with device sensors and hardware APIs to give your users a tactile, context-aware mobile application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-[#F5F3F1] p-6 flex items-start gap-4 shadow-none">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-neutral-700 shadow-2xs border border-neutral-200/70">
                <Fingerprint className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-black">Biometric Security</h3>
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed">FaceID and fingerprint authentication with encrypted session tokens.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 flex items-start gap-4 shadow-none">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-neutral-700 shadow-2xs border border-neutral-200/70">
                <Bell className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-black">Push Notifications</h3>
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Targeted alerts and order status messages via Apple APNs and Firebase FCM.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 flex items-start gap-4 shadow-none">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-neutral-700 shadow-2xs border border-neutral-200/70">
                <Database className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-black">Offline-First SQLite</h3>
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Full app functionality without cellular reception, syncing automatically when reconnected.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 flex items-start gap-4 shadow-none">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-neutral-700 shadow-2xs border border-neutral-200/70">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-black">Background Location</h3>
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Low-battery consumption GPS tracking for technicians, drivers, and geofencing.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 flex items-start gap-4 shadow-none">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-neutral-700 shadow-2xs border border-neutral-200/70">
                <Camera className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-black">Camera &amp; QR Scanner</h3>
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Instant barcode scanning, receipt image capture, and profile photo upload.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#F5F3F1] p-6 flex items-start gap-4 shadow-none">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-neutral-700 shadow-2xs border border-neutral-200/70">
                <RefreshCw className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-black">Cloud API Sync</h3>
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed">Fast REST &amp; GraphQL integration with existing websites, CRMs, and payment gateways.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APP STORE RELEASE PIPELINE - STEP-BY-STEP CHECKLIST */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              STORE SUBMISSION &amp; LAUNCH
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              From concept to the Apple App Store &amp; Google Play
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We handle the entire store submission process, compliance audits, privacy declarations, and device testing so your launch is smooth and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">01</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Product Scoping</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Clarifying core user stories, MVP scope, and platform targets across iOS and Android.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Architecture Blueprint
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">02</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Touch UI/UX Prototype</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Designing thumb-friendly screens, navigation bottom sheets, and clickable test journeys.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                Figma Clickable Prototype
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">03</span>
                <h3 className="mt-3 text-lg font-semibold text-black">Physical Device QA</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Testing on real physical iPhones and Android devices for frame rate, battery life, and offline sync.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                TestFlight &amp; Google Beta
              </div>
            </div>

            <div className="rounded-3xl bg-[#F5F3F1] p-6 flex flex-col justify-between text-black">
              <div>
                <span className="font-mono text-3xl font-bold text-neutral-300">04</span>
                <h3 className="mt-3 text-lg font-semibold text-black">App Store Approval</h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Final submission packaging, store screenshots, privacy manifest, and approval guarantee.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-black/[0.06] text-[11px] text-neutral-400">
                100% Guaranteed Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <ServiceFaqSection faqs={FAQS} />

      {/* 6. FINAL CTA */}
      <FinalCta
        title="Have a mobile app idea? Let's explore it."
        buttonText="Start Your App Project"
        buttonHref="/contact"
        border={false}
      />
    </div>
  );
}
