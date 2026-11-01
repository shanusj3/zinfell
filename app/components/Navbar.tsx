"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

type NavSubItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  disabled?: boolean;
};

type NavItem = {
  id: string;
  label: string;
  href?: string;
  overviewTitle?: string;
  overviewDesc?: string;
  items?: NavSubItem[];
};

const NAV_ITEMS: NavItem[] = [
  { id: "solutions", label: "Solutions", href: "/solutions" },
  {
    id: "products",
    label: "Products",
    href: "/products",
    items: [
      {
        label: "ZevioDesk",
        href: "https://zeviodesk.com/",
        badge: "Live",
      },
    ],
  },
  { id: "about", label: "About", href: "/about" },
  { id: "process", label: "Process", href: "/process" },
  { id: "contact", label: "Contact", href: "/contact" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <ChevronDown
      className={`h-3.5 w-3.5 text-black/70 transition-transform duration-200 ${open ? "rotate-180 text-black" : ""}`}
      strokeWidth={2.2}
      aria-hidden="true"
    />
  );
}

export function ZinfellLogo({ idPrefix = "" }: { idPrefix?: string }) {
  return (
    <Link
      href="/"
      id={idPrefix ? `${idPrefix}-nav-logo` : "nav-logo"}
      className="flex items-center transition-opacity hover:opacity-90"
      aria-label="Zinfell home"
    >
      <Image
        src="/zinfell-white-transparent-cropped.avif"
        alt="Zinfell"
        width={80}
        height={25}
        priority
        className="-mt-[2px] h-[17px] sm:h-[19px] w-auto object-contain brightness-0"
      />
    </Link>
  );
}

type NavInnerProps = {
  openId: string | null;
  openMenu: (id: string) => void;
  scheduleClose: () => void;
  setOpenId: (id: string | null) => void;
  closeTimer: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileSection: string | null;
  setMobileSection: React.Dispatch<React.SetStateAction<string | null>>;
  idPrefix?: string;
};

function NavInner({
  openId,
  openMenu,
  scheduleClose,
  setOpenId,
  closeTimer,
  mobileOpen,
  setMobileOpen,
  mobileSection,
  setMobileSection,
  idPrefix = "",
}: NavInnerProps) {
  return (
    <>
      <nav
        className="relative mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Left: Logo + Desktop Menu */}
        <div className="flex items-center gap-7 lg:gap-9">
          <ZinfellLogo idPrefix={idPrefix} />

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.filter((item) => item.id !== "contact").map((item) => {
              const isOpen = openId === item.id;
              if (!item.items) {
                return (
                  <li key={item.id} onMouseEnter={() => setOpenId(null)}>
                    <Link
                      id={idPrefix ? `${idPrefix}-nav-${item.id}` : `nav-${item.id}`}
                      href={item.href ?? "#"}
                      className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-black transition-colors hover:bg-black/5"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => openMenu(item.id)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    id={idPrefix ? `${idPrefix}-nav-${item.id}` : `nav-${item.id}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors hover:bg-black/5 text-black ${
                      isOpen ? "bg-black/5 font-semibold" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <Chevron open={isOpen} />
                  </button>

                  {/* ElevenLabs-style Floating Rounded Card Popover */}
                  {isOpen && (
                    <div
                      onMouseEnter={() => {
                        if (closeTimer.current) clearTimeout(closeTimer.current);
                      }}
                      onMouseLeave={scheduleClose}
                      className="absolute left-0 top-full pt-2.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                    >
                      <div className="w-[320px] rounded-[22px] border border-slate-200/90 bg-white p-7 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.12),0_6px_16px_-4px_rgba(0,0,0,0.06)]">
                        <div>
                          <p className="text-xs text-slate-400 font-normal mb-3">
                            Flagship Platform
                          </p>
                          <ul className="space-y-3 text-[13.5px]">
                            <li>
                              <Link
                                href="https://zeviodesk.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpenId(null)}
                                className="flex items-center justify-between font-medium text-black transition-colors hover:text-slate-600"
                              >
                                <span>ZevioDesk</span>
                                <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-mono font-medium text-black">
                                  Live
                                </span>
                              </Link>
                            </li>
                          </ul>
                          <div className="mt-4 pt-3 border-t border-slate-100">
                            <Link
                              href="/products"
                              onClick={() => setOpenId(null)}
                              className="group inline-flex items-center gap-1.5 text-xs font-medium text-black transition-colors hover:text-slate-600"
                            >
                              <span>All products</span>
                              <svg
                                viewBox="0 0 16 16"
                                className="h-3 w-3 text-current transition-transform duration-150 group-hover:translate-x-0.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M3 8h10" />
                                <path d="M9 4l4 4-4 4" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            id={idPrefix ? `${idPrefix}-nav-contact-link` : "nav-contact-link"}
            href="/contact"
            className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-black transition-colors hover:bg-black/5"
          >
            Contact
          </Link>
          <Link
            id={idPrefix ? `${idPrefix}-nav-cta-start-project` : "nav-cta-start-project"}
            href="/contact"
            className="btn-primary rounded-full bg-black px-4.5 py-2 text-[13.5px] font-medium text-white transition-all hover:bg-slate-800 shadow-sm"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Start a Project</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          id={idPrefix ? `${idPrefix}-nav-mobile-toggle` : "nav-mobile-toggle"}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-black hover:bg-black/5 lg:hidden -mr-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id={idPrefix ? `${idPrefix}-nav-mobile-menu` : "nav-mobile-menu"}
          className="border-t border-slate-200/90 bg-[#FDFCFC] px-4 pb-8 pt-3 lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <ul className="space-y-1 px-2 py-3">
            {NAV_ITEMS.map((item) => {
              if (!item.items) {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href ?? "#"}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-base font-semibold text-black hover:bg-black/5"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const expanded = mobileSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setMobileSection(expanded ? null : item.id)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-base font-semibold text-black hover:bg-black/5"
                  >
                    <span>{item.label}</span>
                    <Chevron open={expanded} />
                  </button>
                  {expanded && (
                    <ul className="mt-1 space-y-1 pl-3">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            target={sub.href.startsWith("http") ? "_blank" : undefined}
                            rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            onClick={() => {
                              if (!sub.disabled) setMobileOpen(false);
                            }}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-black/80 hover:text-black hover:bg-black/5"
                          >
                            <span>{sub.label}</span>
                            {sub.badge && (
                              <span className="rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-mono font-semibold text-black">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-4 px-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Start a Project</span>
              <ArrowRight className="h-4 w-4" style={{ color: "#ffffff" }} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default function Navbar() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [isMobileScrolled, setIsMobileScrolled] = useState(false);
  const [isDesktopSticky, setIsDesktopSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const stickyNavRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setOpenId(null);

      // Mobile: subtle elevation when scrolled
      setIsMobileScrolled(y > 10);

      // Desktop: glide-in threshold
      if (y > 220) {
        setIsDesktopSticky(true);
      } else if (y < 80) {
        setIsDesktopSticky(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const inStatic = navRef.current && navRef.current.contains(target);
      const inSticky = stickyNavRef.current && stickyNavRef.current.contains(target);
      if (!inStatic && !inSticky) setOpenId(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
        setMobileOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenId(id);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenId(null), 150);
  };

  const navProps = {
    openId,
    openMenu,
    scheduleClose,
    setOpenId,
    closeTimer,
    mobileOpen,
    setMobileOpen,
    mobileSection,
    setMobileSection,
  };

  return (
    <>
      {/* 1. MOBILE NAVBAR (lg:hidden): Always fixed at top-0 */}
      {/* Never disappears, perfectly reliable on mobile devices & in-app browsers */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full lg:hidden bg-[#FDFCFC]/95 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-200 ${
          isMobileScrolled
            ? "border-b border-black/[0.06] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] bg-[#FDFCFC]/98"
            : "border-b border-transparent bg-[#FDFCFC]/90"
        }`}
      >
        <NavInner {...navProps} openId={openId} idPrefix="mobile" />
      </header>

      {/* 2. DESKTOP INITIAL NAVBAR (hidden lg:block): Sits naturally at top of page, scrolls up with page content */}
      <header
        ref={navRef}
        onMouseLeave={scheduleClose}
        className={`hidden lg:block absolute top-0 left-0 right-0 z-40 w-full bg-[#FDFCFC]/90 backdrop-blur-md transition-opacity duration-200 ${
          isDesktopSticky ? "pointer-events-none opacity-0 invisible" : "pointer-events-auto opacity-100 visible"
        }`}
      >
        <NavInner {...navProps} openId={isDesktopSticky ? null : openId} idPrefix="desktop-static" />
      </header>

      {/* 3. DESKTOP FLOATING STICKY NAVBAR (hidden lg:block): Hidden off-screen (-100%), smoothly glides down from top when scrolled */}
      <header
        ref={stickyNavRef}
        onMouseLeave={scheduleClose}
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 w-full bg-[#FDFCFC]/95 backdrop-blur-md shadow-[0_4px_25px_-10px_rgba(0,0,0,0.06)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isDesktopSticky
            ? "translate-y-0 pointer-events-auto"
            : "-translate-y-full pointer-events-none"
        }`}
      >
        <NavInner {...navProps} openId={isDesktopSticky ? openId : null} idPrefix="desktop-sticky" />
      </header>
    </>
  );
}
