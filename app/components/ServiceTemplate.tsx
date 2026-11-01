"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import FinalCta from "./FinalCta";
import { ArrowRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Bespoke geometric architectural illustrations for service cards (viewBox 0 0 72 72) */
function BespokeServiceIcon({ name }: { name?: string }) {
  const commonProps = {
    viewBox: "0 0 72 72",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    className: "h-12 w-12 sm:h-14 sm:w-14 text-black/75",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "globe":
      return (
        <svg {...commonProps}>
          <rect x="10" y="14" width="52" height="44" rx="5" />
          <line x1="10" y1="24" x2="62" y2="24" />
          <circle cx="16" cy="19" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="21" cy="19" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="26" cy="19" r="1.5" fill="currentColor" stroke="none" />
          <line x1="16" y1="31" x2="34" y2="31" strokeLinecap="round" strokeWidth="1.8" />
          <line x1="16" y1="36" x2="28" y2="36" strokeLinecap="round" />
          <rect x="16" y="42" width="14" height="6" rx="2" />
          <rect x="38" y="30" width="18" height="20" rx="3" strokeDasharray="3 2" />
          <circle cx="47" cy="38" r="3" />
          <path d="M40 48L45 43L54 50" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "layout":
      return (
        <svg {...commonProps}>
          <rect x="14" y="12" width="44" height="48" rx="5" />
          <line x1="14" y1="21" x2="58" y2="21" />
          <circle cx="19" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="24" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
          <rect x="20" y="26" width="32" height="12" rx="2.5" fill="currentColor" fillOpacity="0.06" />
          <line x1="24" y1="30" x2="40" y2="30" strokeLinecap="round" strokeWidth="1.8" />
          <line x1="24" y1="34" x2="32" y2="34" strokeLinecap="round" />
          <rect x="20" y="42" width="18" height="6.5" rx="2" />
          <line x1="43" y1="45" x2="52" y2="45" strokeLinecap="round" />
          <line x1="20" y1="52" x2="34" y2="52" strokeLinecap="round" />
          <line x1="38" y1="52" x2="52" y2="52" strokeLinecap="round" />
        </svg>
      );

    case "code":
      return (
        <svg {...commonProps}>
          <rect x="11" y="13" width="50" height="46" rx="5" />
          <line x1="11" y1="23" x2="61" y2="23" />
          <circle cx="17" cy="18" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="22" cy="18" r="1.5" fill="currentColor" stroke="none" />
          <path d="M22 34L17 38.5L22 43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M32 34L37 38.5L32 43" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <line x1="28.5" y1="33" x2="25.5" y2="44" strokeLinecap="round" />
          <rect x="43" y="30" width="12" height="7" rx="1.5" />
          <rect x="43" y="41" width="12" height="7" rx="1.5" />
        </svg>
      );

    case "shopping":
      return (
        <svg {...commonProps}>
          <path d="M19 25L15 56H57L53 25H19Z" strokeLinejoin="round" />
          <path d="M28 27V18C28 14.5 31.5 12 36 12C40.5 12 44 14.5 44 18V27" strokeLinecap="round" />
          <rect x="29" y="34" width="28" height="18" rx="3" fill="#F5F3F1" />
          <rect x="29" y="34" width="28" height="18" rx="3" />
          <line x1="29" y1="39" x2="57" y2="39" />
          <rect x="33" y="43" width="5" height="4" rx="1" fill="currentColor" fillOpacity="0.3" stroke="none" />
          <line x1="42" y1="46" x2="52" y2="46" strokeLinecap="round" />
        </svg>
      );

    case "layers":
      return (
        <svg {...commonProps}>
          <path d="M36 13L57 23L36 33L15 23L36 13Z" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M15 32L36 42L57 32" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 41L36 51L57 41" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="36" y1="33" x2="36" y2="58" strokeLinecap="round" />
          <circle cx="36" cy="23" r="3" fill="currentColor" />
          <circle cx="53" cy="49" r="7" fill="#F5F3F1" />
          <circle cx="53" cy="49" r="7" />
          <path d="M50 49L52.5 51.5L56 47" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "refresh":
      return (
        <svg {...commonProps}>
          <path d="M22 17C26 14 31 12 36 12C48 12 58 21.5 58 33.5C58 39 55.5 44 51.5 47.5" strokeLinecap="round" />
          <path d="M18 13V18H23" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 55C46 58 41 60 36 60C24 60 14 50.5 14 38.5C14 33 16.5 28 20.5 24.5" strokeLinecap="round" />
          <path d="M54 59V54H49" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="24" y="22" width="24" height="28" rx="3.5" fill="#F5F3F1" />
          <rect x="24" y="22" width="24" height="28" rx="3.5" />
          <line x1="28" y1="28" x2="44" y2="28" strokeLinecap="round" strokeWidth="1.6" />
          <path d="M28 40L33 34L37 38L44 30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );

    case "smartphone":
      return (
        <svg {...commonProps}>
          <rect x="22" y="10" width="28" height="52" rx="6" />
          <rect x="31" y="14" width="10" height="2.5" rx="1.25" fill="currentColor" stroke="none" />
          <line x1="30" y1="56" x2="42" y2="56" strokeLinecap="round" />
          <rect x="26.5" y="21" width="19" height="13" rx="2.5" />
          <circle cx="31.5" cy="27.5" r="2" />
          <line x1="36.5" y1="26" x2="42" y2="26" strokeLinecap="round" />
          <line x1="26.5" y1="39" x2="45.5" y2="39" strokeLinecap="round" />
          <line x1="26.5" y1="44" x2="39" y2="44" strokeLinecap="round" />
        </svg>
      );

    case "users":
      return (
        <svg {...commonProps}>
          <circle cx="30" cy="26" r="7" />
          <path d="M16 50C16 43 22 39 30 39C38 39 44 43 44 50" strokeLinecap="round" />
          <circle cx="48" cy="24" r="5" strokeDasharray="3 2" />
          <path d="M46 38C51 39 56 42 56 47" strokeLinecap="round" strokeDasharray="3 2" />
        </svg>
      );

    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect x="14" y="22" width="44" height="34" rx="4" />
          <path d="M26 22V16C26 14.5 27.5 13 29 13H43C44.5 13 46 14.5 46 16V22" strokeLinecap="round" />
          <line x1="14" y1="33" x2="58" y2="33" strokeDasharray="3 2" />
          <rect x="32" y="30" width="8" height="6" rx="1.5" fill="#F5F3F1" />
          <rect x="32" y="30" width="8" height="6" rx="1.5" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...commonProps}>
          <rect x="15" y="16" width="42" height="42" rx="4" />
          <line x1="15" y1="26" x2="57" y2="26" />
          <line x1="24" y1="12" x2="24" y2="18" strokeLinecap="round" strokeWidth="2" />
          <line x1="48" y1="12" x2="48" y2="18" strokeLinecap="round" strokeWidth="2" />
          <circle cx="26" cy="34" r="2" fill="currentColor" stroke="none" />
          <circle cx="36" cy="34" r="2" fill="currentColor" stroke="none" />
          <circle cx="46" cy="34" r="2" fill="currentColor" stroke="none" />
          <circle cx="26" cy="44" r="2" fill="currentColor" stroke="none" />
          <circle cx="36" cy="44" r="2" fill="currentColor" stroke="none" />
        </svg>
      );

    case "link":
      return (
        <svg {...commonProps}>
          <path d="M29 37L43 23" strokeLinecap="round" strokeWidth="2" />
          <path d="M35 17L44 17C49 17 53 21 53 26C53 31 49 35 44 35L38 35" strokeLinecap="round" />
          <path d="M37 55L28 55C23 55 19 51 19 46C19 41 23 37 28 37L34 37" strokeLinecap="round" />
        </svg>
      );

    case "bell":
      return (
        <svg {...commonProps}>
          <path d="M36 14C27 14 22 20 22 30V42L16 48H56L50 42V30C50 20 45 14 36 14Z" strokeLinejoin="round" />
          <path d="M31 49C31 52 33 54 36 54C39 54 41 52 41 49" strokeLinecap="round" />
          <circle cx="48" cy="18" r="4" fill="currentColor" stroke="none" />
        </svg>
      );

    case "cpu":
      return (
        <svg {...commonProps}>
          <rect x="20" y="20" width="32" height="32" rx="5" />
          <rect x="28" y="28" width="16" height="16" rx="2" fill="currentColor" fillOpacity="0.08" />
          <circle cx="36" cy="36" r="3" fill="currentColor" stroke="none" />
          <line x1="12" y1="28" x2="20" y2="28" strokeLinecap="round" />
          <line x1="12" y1="36" x2="20" y2="36" strokeLinecap="round" />
          <line x1="12" y1="44" x2="20" y2="44" strokeLinecap="round" />
          <line x1="52" y1="28" x2="60" y2="28" strokeLinecap="round" />
          <line x1="52" y1="36" x2="60" y2="36" strokeLinecap="round" />
          <line x1="52" y1="44" x2="60" y2="44" strokeLinecap="round" />
          <line x1="28" y1="12" x2="28" y2="20" strokeLinecap="round" />
          <line x1="36" y1="12" x2="36" y2="20" strokeLinecap="round" />
          <line x1="44" y1="12" x2="44" y2="20" strokeLinecap="round" />
          <line x1="28" y1="52" x2="28" y2="60" strokeLinecap="round" />
          <line x1="36" y1="52" x2="36" y2="60" strokeLinecap="round" />
          <line x1="44" y1="52" x2="44" y2="60" strokeLinecap="round" />
        </svg>
      );

    case "bot":
      return (
        <svg {...commonProps}>
          <rect x="16" y="20" width="40" height="32" rx="7" />
          <circle cx="28" cy="34" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="44" cy="34" r="3.5" fill="currentColor" stroke="none" />
          <path d="M30 43C32 45 35 46 36 46C37 46 40 45 42 43" strokeLinecap="round" />
          <line x1="36" y1="12" x2="36" y2="20" strokeLinecap="round" />
          <circle cx="36" cy="11" r="2" fill="currentColor" stroke="none" />
          <line x1="12" y1="34" x2="16" y2="34" strokeLinecap="round" />
          <line x1="56" y1="34" x2="60" y2="34" strokeLinecap="round" />
        </svg>
      );

    case "sparkles":
      return (
        <svg {...commonProps}>
          <path d="M36 12L39 27L54 30L39 33L36 48L33 33L18 30L33 27L36 12Z" strokeLinejoin="round" />
          <circle cx="52" cy="48" r="3" fill="currentColor" stroke="none" />
          <circle cx="20" cy="50" r="2" fill="currentColor" stroke="none" />
          <circle cx="48" cy="16" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );

    case "fileText":
      return (
        <svg {...commonProps}>
          <path d="M20 14H42L52 24V56C52 57.5 50.5 59 49 59H20C18.5 59 17 57.5 17 56V17C17 15.5 18.5 14 20 14Z" strokeLinejoin="round" />
          <path d="M42 14V24H52" strokeLinejoin="round" />
          <line x1="25" y1="34" x2="44" y2="34" strokeLinecap="round" />
          <line x1="25" y1="41" x2="44" y2="41" strokeLinecap="round" />
          <line x1="25" y1="48" x2="36" y2="48" strokeLinecap="round" />
        </svg>
      );

    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="31" cy="31" r="14" />
          <line x1="41" y1="41" x2="55" y2="55" strokeLinecap="round" strokeWidth="2.5" />
          <line x1="24" y1="31" x2="38" y2="31" strokeLinecap="round" strokeDasharray="2 2" />
        </svg>
      );

    case "workflow":
      return (
        <svg {...commonProps}>
          <rect x="12" y="16" width="18" height="14" rx="3" />
          <rect x="42" y="16" width="18" height="14" rx="3" />
          <rect x="27" y="44" width="18" height="14" rx="3" />
          <path d="M30 23H42" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M21 30V40C21 42 22 44 27 44" strokeLinecap="round" />
          <path d="M51 30V40C51 42 50 44 45 44" strokeLinecap="round" />
          <circle cx="21" cy="23" r="2" fill="currentColor" stroke="none" />
          <circle cx="51" cy="23" r="2" fill="currentColor" stroke="none" />
          <circle cx="36" cy="51" r="2" fill="currentColor" stroke="none" />
        </svg>
      );

    case "chat":
      return (
        <svg {...commonProps}>
          <path d="M16 48V20C16 16.5 19 14 23 14H49C53 14 56 16.5 56 20V38C56 41.5 53 44 49 44H26L16 52V48Z" strokeLinejoin="round" />
          <circle cx="28" cy="29" r="2" fill="currentColor" stroke="none" />
          <circle cx="36" cy="29" r="2" fill="currentColor" stroke="none" />
          <circle cx="44" cy="29" r="2" fill="currentColor" stroke="none" />
        </svg>
      );

    case "arrowLeftRight":
      return (
        <svg {...commonProps}>
          <path d="M18 26H50M50 26L42 19M50 26L42 33" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M54 46H22M22 46L30 39M22 46L30 53" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );

    case "checkSquare":
      return (
        <svg {...commonProps}>
          <rect x="16" y="16" width="40" height="40" rx="6" />
          <path d="M26 36L33 43L46 27" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );

    case "cloud":
      return (
        <svg {...commonProps}>
          <path d="M20 48C15 48 12 44 12 39C12 34 16 30 21 30C22 23 28 17 36 17C43 17 49 22 51 28C56 28 60 32 60 37C60 43 55 48 49 48H20Z" strokeLinejoin="round" />
          <path d="M30 42L36 36L42 42" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="36" y1="36" x2="36" y2="55" strokeLinecap="round" />
        </svg>
      );

    case "gitBranch":
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="20" r="5" />
          <circle cx="24" cy="52" r="5" />
          <circle cx="48" cy="30" r="5" />
          <line x1="24" y1="25" x2="24" y2="47" />
          <path d="M24 38C32 38 40 36 48 35" strokeLinecap="round" />
        </svg>
      );

    case "box":
      return (
        <svg {...commonProps}>
          <path d="M36 14L56 25V47L36 58L16 47V25L36 14Z" strokeLinejoin="round" />
          <line x1="36" y1="36" x2="36" y2="58" />
          <line x1="16" y1="25" x2="36" y2="36" />
          <line x1="56" y1="25" x2="36" y2="36" />
        </svg>
      );

    case "activity":
      return (
        <svg {...commonProps}>
          <path d="M12 37H23L29 20L37 52L45 32L49 37H60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );

    case "dollarSign":
      return (
        <svg {...commonProps}>
          <circle cx="36" cy="36" r="22" />
          <path d="M31 29C31 26 33 24 36 24C39 24 41 26 41 29C41 35 31 35 31 41C31 44 33 46 36 46C39 46 41 44 41 41" strokeLinecap="round" />
          <line x1="36" y1="20" x2="36" y2="50" strokeLinecap="round" />
        </svg>
      );

    case "shieldCheck":
      return (
        <svg {...commonProps}>
          <path d="M36 13L54 20V35C54 47 46 54 36 59C26 54 18 47 18 35V20L36 13Z" strokeLinejoin="round" />
          <path d="M28 35L34 41L45 29" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );

    case "palette":
      return (
        <svg {...commonProps}>
          <path d="M16 48C16 30 26 16 44 16C54 16 58 22 58 28C58 35 52 38 48 38C45 38 43 40 43 43C43 46 45 48 45 51C45 56 40 60 34 60C24 60 16 54 16 48Z" strokeLinejoin="round" />
          <circle cx="26" cy="30" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="38" cy="25" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="48" cy="31" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );

    case "gauge":
      return (
        <svg {...commonProps}>
          <path d="M18 48C16 42 16 35 19 28C24 18 35 14 45 17C54 21 60 31 57 41C56 44 54 47 52 50" strokeLinecap="round" />
          <circle cx="36" cy="46" r="4" fill="currentColor" />
          <line x1="36" y1="46" x2="48" y2="28" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );

    case "eye":
      return (
        <svg {...commonProps}>
          <path d="M12 36C18 24 30 18 36 18C42 18 54 24 60 36C54 48 42 54 36 54C30 54 18 48 12 36Z" strokeLinejoin="round" />
          <circle cx="36" cy="36" r="7" />
          <circle cx="36" cy="36" r="2.5" fill="currentColor" />
        </svg>
      );

    case "rocket":
      return (
        <svg {...commonProps}>
          <path d="M42 14C42 14 54 16 56 30C52 34 46 36 40 36L34 30C34 24 36 18 42 14Z" strokeLinejoin="round" />
          <path d="M34 30L26 38L18 36L22 28L30 26" strokeLinejoin="round" />
          <path d="M40 36L38 44L30 48L28 40L36 32" strokeLinejoin="round" />
          <path d="M22 46L14 54M20 54L14 54L14 48" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "creditCard":
      return (
        <svg {...commonProps}>
          <rect x="14" y="20" width="44" height="32" rx="4" />
          <line x1="14" y1="28" x2="58" y2="28" />
          <rect x="20" y="38" width="8" height="6" rx="1.5" fill="currentColor" fillOpacity="0.2" />
          <line x1="34" y1="42" x2="46" y2="42" strokeLinecap="round" />
        </svg>
      );

    case "layoutDashboard":
      return (
        <svg {...commonProps}>
          <rect x="14" y="14" width="20" height="24" rx="3" />
          <rect x="38" y="14" width="20" height="14" rx="3" />
          <rect x="38" y="32" width="20" height="26" rx="3" />
          <rect x="14" y="42" width="20" height="16" rx="3" />
        </svg>
      );

    case "fileCode":
      return (
        <svg {...commonProps}>
          <path d="M20 14H42L52 24V56C52 57.5 50.5 59 49 59H20C18.5 59 17 57.5 17 56V17C17 15.5 18.5 14 20 14Z" strokeLinejoin="round" />
          <path d="M42 14V24H52" strokeLinejoin="round" />
          <path d="M29 38L25 42L29 46" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 38L44 42L40 46" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="36" y1="36" x2="33" y2="48" strokeLinecap="round" />
        </svg>
      );

    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="36" cy="36" r="22" />
          <circle cx="36" cy="36" r="14" strokeDasharray="3 2" />
          <circle cx="36" cy="36" r="6" fill="currentColor" />
        </svg>
      );

    case "compass":
      return (
        <svg {...commonProps}>
          <circle cx="36" cy="36" r="22" />
          <polygon points="36,20 44,32 36,44 28,32" strokeLinejoin="round" />
          <circle cx="36" cy="36" r="2" fill="currentColor" />
        </svg>
      );

    case "mapPin":
      return (
        <svg {...commonProps}>
          <path d="M36 14C27 14 20 21 20 30C20 41 36 58 36 58C36 58 52 41 52 30C52 21 45 14 36 14Z" strokeLinejoin="round" />
          <circle cx="36" cy="30" r="5" fill="currentColor" />
        </svg>
      );

    case "barChart":
      return (
        <svg {...commonProps}>
          <line x1="16" y1="56" x2="56" y2="56" strokeLinecap="round" />
          <rect x="22" y="36" width="6" height="20" rx="1.5" />
          <rect x="33" y="24" width="6" height="32" rx="1.5" />
          <rect x="44" y="16" width="6" height="40" rx="1.5" />
        </svg>
      );

    case "megaphone":
      return (
        <svg {...commonProps}>
          <path d="M18 32H26L44 20V52L26 40H18C16.5 40 15 38.5 15 37V35C15 33.5 16.5 32 18 32Z" strokeLinejoin="round" />
          <path d="M26 40V49C26 51 28 52 30 52H32" strokeLinecap="round" />
          <path d="M49 28C52 30 54 33 54 36C54 39 52 42 49 44" strokeLinecap="round" />
          <path d="M54 22C59 26 61 31 61 36C61 41 59 46 54 50" strokeLinecap="round" />
        </svg>
      );

    case "share":
      return (
        <svg {...commonProps}>
          <circle cx="48" cy="22" r="5" />
          <circle cx="24" cy="36" r="5" />
          <circle cx="48" cy="50" r="5" />
          <line x1="28" y1="34" x2="44" y2="25" />
          <line x1="28" y1="38" x2="44" y2="47" />
        </svg>
      );

    case "userPlus":
      return (
        <svg {...commonProps}>
          <circle cx="28" cy="26" r="7" />
          <path d="M14 50C14 43 20 39 28 39C36 39 42 43 42 50" strokeLinecap="round" />
          <line x1="50" y1="26" x2="50" y2="38" strokeLinecap="round" strokeWidth="2" />
          <line x1="44" y1="32" x2="56" y2="32" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );

    case "lineChart":
      return (
        <svg {...commonProps}>
          <line x1="16" y1="56" x2="56" y2="56" strokeLinecap="round" />
          <line x1="16" y1="16" x2="16" y2="56" strokeLinecap="round" />
          <path d="M20 44L32 30L40 38L52 20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <circle cx="52" cy="20" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <rect x="14" y="14" width="44" height="44" rx="5" />
          <circle cx="36" cy="36" r="10" strokeDasharray="3 3" />
          <circle cx="36" cy="36" r="3" fill="currentColor" stroke="none" />
          <line x1="36" y1="14" x2="36" y2="58" strokeDasharray="2 3" strokeOpacity="0.35" />
          <line x1="14" y1="36" x2="58" y2="36" strokeDasharray="2 3" strokeOpacity="0.35" />
        </svg>
      );
  }
}

/* =========================================================================
   BESPOKE VISUAL MOCKUPS FOR STEP 2 (ALL IN REFINED BLACK & GREY TONES)
========================================================================= */

function WebMockup() {
  return (
    <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3.5 space-y-2.5 border border-neutral-200/70">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
          <span className="h-2 w-2 rounded-full bg-neutral-200/70" />
        </div>
        <div className="h-1.5 w-24 rounded-full bg-neutral-200" />
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="h-2.5 w-3/4 rounded bg-neutral-300" />
        <div className="h-2 w-full rounded bg-neutral-200" />
        <div className="h-2 w-2/3 rounded bg-neutral-200/80" />
        <div className="flex items-center gap-2 pt-1.5">
          <div className="h-5 w-16 rounded-full bg-neutral-300" />
          <div className="h-5 w-16 rounded-full border border-neutral-300 bg-white" />
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="mt-3.5 rounded-2xl bg-[#FAF9F8] p-3 border border-neutral-200/70">
      <div className="mx-auto max-w-[210px] rounded-2xl border border-neutral-300/80 bg-white p-2.5 shadow-2xs">
        {/* Dynamic Island / Notch */}
        <div className="flex items-center justify-between px-1 mb-2">
          <span className="font-mono text-[9px] text-neutral-400">9:41</span>
          <div className="h-2 w-12 rounded-full bg-neutral-300" />
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span className="h-1.5 w-2 rounded-xs bg-neutral-400" />
          </div>
        </div>
        {/* App Header & Banner */}
        <div className="space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-100">
            <div className="h-2 w-14 rounded bg-neutral-300" />
            <div className="h-4 w-4 rounded-full bg-neutral-200" />
          </div>
          {/* Card Component */}
          <div className="rounded-lg bg-[#FAF9F8] p-2 border border-neutral-200/70 space-y-1.5">
            <div className="h-2 w-20 rounded bg-neutral-300" />
            <div className="h-1.5 w-full rounded bg-neutral-200" />
            <div className="h-4 w-12 rounded bg-neutral-300 mt-1" />
          </div>
          {/* List Rows */}
          <div className="space-y-1">
            <div className="flex items-center justify-between p-1 rounded bg-neutral-100/60 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-xs bg-neutral-300" />
                <span className="h-1.5 w-12 rounded bg-neutral-300" />
              </div>
              <span className="h-1.5 w-4 rounded bg-neutral-200" />
            </div>
            <div className="flex items-center justify-between p-1 rounded bg-neutral-100/60 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-xs bg-neutral-300" />
                <span className="h-1.5 w-10 rounded bg-neutral-300" />
              </div>
              <span className="h-1.5 w-4 rounded bg-neutral-200" />
            </div>
          </div>
        </div>
        {/* Bottom Tab Bar */}
        <div className="mt-2.5 pt-1.5 border-t border-neutral-200/80 flex items-center justify-around">
          <span className="h-2 w-2 rounded-xs bg-neutral-400" />
          <span className="h-2 w-2 rounded-xs bg-neutral-300" />
          <span className="h-2 w-2 rounded-xs bg-neutral-300" />
          <span className="h-2 w-2 rounded-xs bg-neutral-300" />
        </div>
        {/* Home Indicator */}
        <div className="h-1 w-10 rounded-full bg-neutral-300 mx-auto mt-1.5" />
      </div>
    </div>
  );
}

function DesignMockup() {
  return (
    <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-2">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70 text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="px-1.5 py-0.5 rounded bg-neutral-200 text-neutral-700 font-mono font-medium">Select</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 font-mono">Frame</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 font-mono">Shape</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 font-mono">Text</span>
        </div>
        <span className="font-mono text-neutral-400">100%</span>
      </div>
      <div className="grid grid-cols-12 gap-2 pt-1 items-center">
        <div className="col-span-3 space-y-1 text-[10px] border-r border-neutral-200/60 pr-1">
          <div className="flex items-center gap-1 text-neutral-700 font-medium">
            <span className="h-1.5 w-1.5 rounded-xs bg-neutral-400" />
            <span className="truncate">Artboard</span>
          </div>
          <div className="flex items-center gap-1 text-neutral-500 pl-1.5">
            <span className="h-1 w-1 rounded-xs bg-neutral-300" />
            <span className="truncate">Navbar</span>
          </div>
          <div className="flex items-center gap-1 text-neutral-500 pl-1.5">
            <span className="h-1 w-1 rounded-xs bg-neutral-300" />
            <span className="truncate">HeroCard</span>
          </div>
        </div>
        <div className="col-span-6 rounded-lg border border-dashed border-neutral-400 bg-white p-2 relative shadow-2xs">
          <div className="absolute -top-1.5 -left-1.5 h-2 w-2 rounded-xs border border-neutral-400 bg-white" />
          <div className="absolute -top-1.5 -right-1.5 h-2 w-2 rounded-xs border border-neutral-400 bg-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-2 w-2 rounded-xs border border-neutral-400 bg-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-2 w-2 rounded-xs border border-neutral-400 bg-white" />
          <div className="space-y-1">
            <div className="h-2 w-14 rounded bg-neutral-300" />
            <div className="h-5 w-full rounded bg-neutral-100 border border-neutral-200/60 flex items-center px-1.5">
              <div className="h-1.5 w-10 rounded bg-neutral-300" />
            </div>
            <div className="flex gap-1 pt-0.5">
              <div className="h-2.5 w-7 rounded-full bg-neutral-300" />
              <div className="h-2.5 w-5 rounded-full bg-neutral-200" />
            </div>
          </div>
        </div>
        <div className="col-span-3 space-y-1 text-[10px] border-l border-neutral-200/60 pl-1 font-mono text-neutral-500">
          <div>W: <span className="text-black font-medium">390</span></div>
          <div>H: <span className="text-black font-medium">844</span></div>
          <div>R: <span className="text-black font-medium">24px</span></div>
        </div>
      </div>
    </div>
  );
}

function AiMockup() {
  return (
    <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-2.5">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70 text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-400" />
          <span className="font-medium text-black">RAG Knowledge Pipeline</span>
        </div>
        <span className="font-mono text-[10px] text-neutral-500">Latency: 180ms</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
        <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs space-y-1">
          <span className="font-medium text-black block truncate">1. Knowledge</span>
          <div className="h-1.5 w-10 bg-neutral-200 rounded mx-auto" />
          <span className="text-[9px] text-neutral-400 block">PDF · CRM · Docs</span>
        </div>
        <div className="rounded-lg bg-neutral-100 p-2 border border-neutral-200/80 shadow-2xs space-y-1">
          <span className="font-medium text-black block truncate">2. Retrieval</span>
          <div className="h-1.5 w-10 bg-neutral-300 rounded mx-auto" />
          <span className="text-[9px] text-neutral-500 block">Vector Search</span>
        </div>
        <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs space-y-1">
          <span className="font-medium text-black block truncate">3. Inference</span>
          <div className="h-1.5 w-10 bg-neutral-200 rounded mx-auto" />
          <span className="text-[9px] text-neutral-500 font-mono block">99.4% Match</span>
        </div>
      </div>
      <div className="rounded-lg bg-white p-2 border border-neutral-200/70 text-[11px] space-y-1">
        <div className="flex items-center justify-between text-[10px] text-neutral-500">
          <span>AI Response Stream</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 font-mono text-[9px] border border-neutral-200/60">Verified Source</span>
        </div>
        <div className="h-1.5 w-full rounded bg-neutral-200" />
        <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
      </div>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-2">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70 text-[11px]">
        <span className="font-medium text-black">Event Trigger Pipeline</span>
        <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-600 font-mono border border-neutral-200/60">Live Trigger</span>
      </div>
      <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-neutral-100 text-neutral-600 font-mono text-[9px] border border-neutral-200/60">01</span>
          <span className="font-medium text-black">New Inbound Inquiry</span>
        </div>
        <span className="text-[10px] text-neutral-500">Form / Ad Click</span>
      </div>
      <div className="w-0.5 h-2 bg-neutral-300 mx-auto" />
      <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-neutral-100 text-neutral-600 font-mono text-[9px] border border-neutral-200/60">02</span>
          <span className="font-medium text-black">Validate &amp; Sync CRM</span>
        </div>
        <span className="text-[10px] text-neutral-500 font-mono">Instant (0.4s)</span>
      </div>
      <div className="w-0.5 h-2 bg-neutral-300 mx-auto" />
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded-lg bg-neutral-100/90 p-2 border border-neutral-200/80 text-left">
          <span className="font-medium text-black block truncate">WhatsApp Welcome</span>
          <span className="text-[9px] text-neutral-500 mt-0.5 block">Sent to Customer</span>
        </div>
        <div className="rounded-lg bg-neutral-100/90 p-2 border border-neutral-200/80 text-left">
          <span className="font-medium text-black block truncate">Team Slack Alert</span>
          <span className="text-[9px] text-neutral-500 mt-0.5 block">Account Rep Assigned</span>
        </div>
      </div>
    </div>
  );
}

function CloudMockup() {
  return (
    <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-2">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70 text-[11px]">
        <span className="font-medium text-black">Cluster Pod Architecture</span>
        <span className="font-mono text-[10px] text-neutral-500">99.99% Availability</span>
      </div>
      <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs flex items-center justify-between text-[11px]">
        <span className="font-medium text-black">Edge Ingress &amp; SSL Load Balancer</span>
        <span className="rounded-md bg-neutral-100 text-neutral-600 px-1.5 py-0.5 text-[9px] font-mono border border-neutral-200/60">Auto-Routing</span>
      </div>
      <div className="flex justify-around px-8">
        <div className="w-0.5 h-2 bg-neutral-300" />
        <div className="w-0.5 h-2 bg-neutral-300" />
        <div className="w-0.5 h-2 bg-neutral-300" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center">
        <div className="rounded-lg bg-white p-1.5 border border-neutral-200/80 shadow-2xs space-y-0.5">
          <span className="font-medium text-black block truncate">api-pod-1</span>
          <span className="text-[9px] text-neutral-500 font-mono block">Healthy</span>
        </div>
        <div className="rounded-lg bg-white p-1.5 border border-neutral-200/80 shadow-2xs space-y-0.5">
          <span className="font-medium text-black block truncate">api-pod-2</span>
          <span className="text-[9px] text-neutral-500 font-mono block">Healthy</span>
        </div>
        <div className="rounded-lg bg-white p-1.5 border border-neutral-200/80 shadow-2xs space-y-0.5">
          <span className="font-medium text-black block truncate">worker-pod</span>
          <span className="text-[9px] text-neutral-500 font-mono block">Active</span>
        </div>
      </div>
      <div className="rounded-lg bg-neutral-100 p-2 border border-neutral-200/80 flex items-center justify-between text-[10px]">
        <span className="font-medium text-black">Managed PostgreSQL + Redis Cache</span>
        <span className="text-neutral-500 font-mono text-[9px]">Automated Snapshots</span>
      </div>
    </div>
  );
}

function SaasMockup() {
  return (
    <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-2">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70 text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded bg-neutral-200 text-neutral-700 font-semibold text-[9px] flex items-center justify-center">A</span>
          <span className="font-medium text-black">Acme Corp</span>
          <span className="rounded bg-neutral-100 text-neutral-600 px-1.5 py-0.5 text-[9px] font-mono border border-neutral-200/60">Pro Plan</span>
        </div>
        <span className="font-mono text-[10px] text-neutral-500">Multi-Tenant</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs space-y-0.5">
          <span className="text-neutral-500 block">Monthly Revenue</span>
          <span className="text-xs font-semibold text-black block font-mono">$42,500</span>
        </div>
        <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs space-y-0.5">
          <span className="text-neutral-500 block">Active Users</span>
          <span className="text-xs font-semibold text-black block font-mono">1,840</span>
        </div>
      </div>
      <div className="rounded-lg bg-white p-2 border border-neutral-200/80 text-[10px] space-y-1.5 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-3.5 w-3.5 rounded-full bg-neutral-200" />
            <span className="text-black font-medium">sarah@acme.com</span>
          </div>
          <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[9px] text-neutral-600 border border-neutral-200/60 font-mono">Admin</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-3.5 w-3.5 rounded-full bg-neutral-200" />
            <span className="text-black font-medium">david@acme.com</span>
          </div>
          <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[9px] text-neutral-600 border border-neutral-200/60 font-mono">Member</span>
        </div>
      </div>
    </div>
  );
}

function SeoMockup() {
  return (
    <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-2">
      <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs flex items-center gap-2 text-[11px]">
        <span className="h-3 w-3 rounded-full border border-neutral-400" />
        <span className="text-black font-medium">best b2b enterprise solution</span>
      </div>
      <div className="rounded-lg bg-white p-2.5 border border-neutral-200/80 shadow-2xs space-y-1 text-left">
        <div className="flex items-center gap-1 text-[10px] text-neutral-500 font-mono">
          <span>yourcompany.com</span>
          <span>›</span>
          <span>solutions</span>
        </div>
        <p className="text-[12px] font-medium text-black leading-tight">
          Your Business Solution — Official Website
        </p>
        <div className="flex items-center gap-1 text-[10px] text-neutral-500">
          <span>★★★★★</span>
          <span className="font-mono">4.9 · 128 Reviews · Verified</span>
        </div>
        <p className="text-[10.5px] text-neutral-600 leading-snug pt-0.5">
          High-performance platforms engineered for reliability, security, and continuous organic growth.
        </p>
      </div>
      <div className="flex items-center justify-between text-[10px] px-1">
        <span className="text-neutral-500">Search Console</span>
        <span className="font-mono text-neutral-700 font-medium">+142% Organic Reach</span>
      </div>
    </div>
  );
}

function MarketingMockup() {
  return (
    <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-2">
      <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200/70 text-[11px]">
        <span className="font-medium text-black">Conversion Funnel Visualizer</span>
        <span className="font-mono text-[10px] text-neutral-500">Full-Funnel Attribution</span>
      </div>
      <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs space-y-1">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-medium text-black">1. Ad Impressions &amp; Search Traffic</span>
          <span className="font-mono text-neutral-500">14,200 Clicks</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-neutral-200 overflow-hidden">
          <div className="h-full w-full rounded-full bg-neutral-400" />
        </div>
      </div>
      <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs space-y-1 ml-3">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-medium text-black">2. Landing Page Inquiries</span>
          <span className="font-mono text-neutral-500">2,180 Leads</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-neutral-200 overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-neutral-400" />
        </div>
      </div>
      <div className="rounded-lg bg-white p-2 border border-neutral-200/80 shadow-2xs space-y-1 ml-6">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-medium text-black">3. Qualified Customers</span>
          <span className="font-mono text-neutral-500">480 Bookings</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-neutral-200 overflow-hidden">
          <div className="h-full w-2/5 rounded-full bg-neutral-400" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   SERVICE APPROACH RESOLVER
========================================================================= */

type ServiceCategory =
  | "web"
  | "mobile"
  | "design"
  | "ai"
  | "automation"
  | "cloud"
  | "saas"
  | "seo"
  | "marketing";

function getServiceCategory(eyebrow: string): ServiceCategory {
  const norm = eyebrow.toLowerCase();
  if (norm.includes("mobile") || norm.includes("app")) return "mobile";
  if (norm.includes("design") || norm.includes("ui") || norm.includes("ux")) return "design";
  if (norm.includes("ai") || norm.includes("artificial") || norm.includes("intelligence")) return "ai";
  if (norm.includes("automation") || norm.includes("process")) return "automation";
  if (norm.includes("cloud") || norm.includes("devops") || norm.includes("infrastructure")) return "cloud";
  if (norm.includes("saas") || norm.includes("software")) return "saas";
  if (norm.includes("seo") || norm.includes("search") || norm.includes("growth")) return "seo";
  if (norm.includes("marketing") || norm.includes("advertising")) return "marketing";
  return "web";
}

interface ServiceApproachData {
  step1: {
    title: string;
    description: string;
    cardBadge: string;
    cardTitle: string;
    cardPhase: string;
    items: Array<{ title: string; desc: string }>;
    footerStatus: string;
    footerNext: string;
  };
  step2: {
    title: string;
    description: string;
    cardBadge: string;
    cardTitle: string;
    cardPhase: string;
    mockup: ReactNode;
    footerLeft: string;
    footerRight: string;
  };
  step3: {
    title: string;
    description: string;
    cardBadge: string;
    cardTitle: string;
    cardPhase: string;
    statusRows: Array<{ label: string; badge: string }>;
    footerLeft: string;
    footerRight: string;
  };
  step4: {
    title: string;
    description: string;
    cardBadge: string;
    cardTitle: string;
    cardPhase: string;
    progressLabel: string;
    progressPct: string;
    checklist: Array<{ label: string; status: string }>;
    footerStatus: string;
    footerNote: string;
  };
}

function getServiceApproach(eyebrow: string): ServiceApproachData {
  const category = getServiceCategory(eyebrow);

  switch (category) {
    case "mobile":
      return {
        step1: {
          title: "01. Discover & Scope",
          description: "We define user journeys, platform targets (iOS & Android), offline behavior, and core feature specifications.",
          cardBadge: "APP",
          cardTitle: "Mobile Roadmap & Architecture",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Target Audience & Device Matrix", desc: "Optimizing for modern iPhone and Android screen resolutions" },
            { title: "Core Features & MVP Definition", desc: "Prioritizing the highest-value mobile actions and user stories" },
            { title: "Backend & API Synchronization", desc: "Mapping cloud database endpoints, auth, and offline storage" },
          ],
          footerStatus: "App Blueprint: Approved",
          footerNext: "Ready for UI/UX →",
        },
        step2: {
          title: "02. Mobile UI/UX Design",
          description: "Designing thumb-friendly screens, native navigation patterns, bottom sheets, and fluid touch micro-interactions.",
          cardBadge: "UI",
          cardTitle: "App Interface & Flow Prototype",
          cardPhase: "Phase 02",
          mockup: <MobileMockup />,
          footerLeft: "iOS & Android Navigation Flow",
          footerRight: "Prototype Tested",
        },
        step3: {
          title: "03. Native & Cross-Platform Build",
          description: "Engineering fast, battery-efficient mobile applications with smooth 60fps animations and resilient offline support.",
          cardBadge: "BUILD",
          cardTitle: "App Engineering & Hardware APIs",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "React Native & Native Modules", badge: "60 FPS" },
            { label: "Biometric Login (FaceID / Fingerprint)", badge: "Secured" },
            { label: "Push Notifications & Offline Sync", badge: "Connected" },
          ],
          footerLeft: "Native Performance · Battery Efficient",
          footerRight: "Cloud Sync Active",
        },
        step4: {
          title: "04. App Store Certification & Launch",
          description: "Testing on real physical devices, packaging production releases, and guiding your app through Apple and Google approval.",
          cardBadge: "SHIP",
          cardTitle: "Store Compliance & Release",
          cardPhase: "Phase 04 · Ready to Publish",
          progressLabel: "Store Review Readiness",
          progressPct: "100% Ready",
          checklist: [
            { label: "Apple App Store Guidelines & Privacy Audit", status: "Approved" },
            { label: "Google Play Store submission bundle & assets", status: "Signed" },
            { label: "Physical device testing across iOS & Android", status: "Verified" },
          ],
          footerStatus: "Live Store Submission",
          footerNote: "Post-Launch Updates Included",
        },
      };

    case "design":
      return {
        step1: {
          title: "01. Research & Discovery",
          description: "We analyze your user personas, study competitor interfaces, and define clear information architecture.",
          cardBadge: "UX",
          cardTitle: "User Research & Information Architecture",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Customer Personas & Pain Points", desc: "Understanding the exact motivations and hurdles of your users" },
            { title: "Information Architecture & User Flows", desc: "Structuring clear steps so users accomplish tasks without confusion" },
            { title: "Competitor Analysis & Benchmarking", desc: "Identifying industry best practices and competitive design edges" },
          ],
          footerStatus: "Research Synthesis: Complete",
          footerNext: "Ready for Wireframes →",
        },
        step2: {
          title: "02. Wireframing & Prototyping",
          description: "Creating interactive prototypes that validate user flows, reduce cognitive friction, and align stakeholders.",
          cardBadge: "FIGMA",
          cardTitle: "Interactive Canvas & Design System",
          cardPhase: "Phase 02",
          mockup: <DesignMockup />,
          footerLeft: "Auto-Layout & Design Tokens",
          footerRight: "User Tested",
        },
        step3: {
          title: "03. Design System & High-Fidelity UI",
          description: "Crafting polished visual components, cohesive typography scales, and WCAG-compliant color palettes.",
          cardBadge: "SYSTEM",
          cardTitle: "Design System & Component Library",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "Figma Component Library & Variants", badge: "Modular" },
            { label: "WCAG 2.1 AA Accessibility & Contrast", badge: "Passed" },
            { label: "Responsive Layouts (Mobile to Desktop)", badge: "Adaptive" },
          ],
          footerLeft: "Design Tokens Synchronized",
          footerRight: "Friction-Free UI",
        },
        step4: {
          title: "04. Developer Handoff & Testing",
          description: "Providing pixel-perfect specs, exported assets, and interactive prototypes so engineers can build accurately.",
          cardBadge: "HANDOFF",
          cardTitle: "Production Handoff & Specifications",
          cardPhase: "Phase 04 · Ready for Dev",
          progressLabel: "Developer Handoff Checklist",
          progressPct: "100% Exported",
          checklist: [
            { label: "Organized Figma auto-layout files with comments", status: "Delivered" },
            { label: "SVG asset exports and typography style guide", status: "Packaged" },
            { label: "Clickable prototype walkthrough for development", status: "Shared" },
          ],
          footerStatus: "Developer-Ready Handoff",
          footerNote: "Design QA Support Included",
        },
      };

    case "ai":
      return {
        step1: {
          title: "01. Use Case & Data Scoping",
          description: "We identify high-value automation opportunities, audit your company's data sources, and establish accuracy guardrails.",
          cardBadge: "AI",
          cardTitle: "AI Strategy & Data Readiness",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Problem Definition & Success Metrics", desc: "Setting concrete benchmarks for response speed and accuracy" },
            { title: "Data Source Audit & Privacy Review", desc: "Ensuring zero proprietary data is used to train public models" },
            { title: "Model Selection (Fast vs. Reasoning)", desc: "Balancing intelligence, latency, and monthly API cost efficiency" },
          ],
          footerStatus: "AI Architecture: Validated",
          footerNext: "Ready for Pipeline Build →",
        },
        step2: {
          title: "02. Knowledge Architecture & RAG",
          description: "Connecting your business documents, PDFs, and databases to intelligent models using retrieval-augmented generation.",
          cardBadge: "RAG",
          cardTitle: "Semantic Search & Knowledge Flow",
          cardPhase: "Phase 02",
          mockup: <AiMockup />,
          footerLeft: "Grounded in Company Data",
          footerRight: "Zero Hallucination",
        },
        step3: {
          title: "03. Guardrails & Integration",
          description: "Engineering strict safety guardrails, smart prompt templates, and seamless integration with your web apps or tools.",
          cardBadge: "ENGINE",
          cardTitle: "AI Guardrails & Production API",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "Hallucination Filtering & Fact Checking", badge: "Protected" },
            { label: "Token Cost Optimization & Caching", badge: "Sub-second" },
            { label: "Human-in-the-Loop Review Controls", badge: "Active" },
          ],
          footerLeft: "Strict Data Privacy · No Public Training",
          footerRight: "Cost Governed",
        },
        step4: {
          title: "04. Evaluation & Production Deployment",
          description: "Testing thousands of edge-case queries, verifying accuracy, and deploying scalable endpoints with live monitoring.",
          cardBadge: "OPS",
          cardTitle: "Model Evaluation & Deployment",
          cardPhase: "Phase 04 · Ready for Users",
          progressLabel: "Accuracy & Reliability Score",
          progressPct: "99.4% Verified",
          checklist: [
            { label: "Automated test eval suite over 500+ real queries", status: "Passed" },
            { label: "Latency optimization & response streaming setup", status: "<250ms" },
            { label: "Failover fallback triggers and human escalation", status: "Online" },
          ],
          footerStatus: "Production AI Endpoint: Live",
          footerNote: "Model Monitoring Included",
        },
      };

    case "automation":
      return {
        step1: {
          title: "01. Process Discovery & Audit",
          description: "We map your team's manual steps, identify duplicate data entry, and design a frictionless automated pipeline.",
          cardBadge: "AUDIT",
          cardTitle: "Operational Bottleneck Discovery",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Current Workflow Mapping", desc: "Documenting where team members spend time on repetitive tasks" },
            { title: "Software & API Connection Check", desc: "Verifying webhooks and permissions for your CRM, billing, and apps" },
            { title: "Automation Blueprint & Error Rules", desc: "Planning fallback paths so no message or order is ever dropped" },
          ],
          footerStatus: "Workflow Map: Approved",
          footerNext: "Ready to Connect →",
        },
        step2: {
          title: "02. Workflow Architecture & Nodes",
          description: "Building reliable trigger-action pipelines with smart conditional logic, data transformations, and immediate alerts.",
          cardBadge: "FLOW",
          cardTitle: "Automated Trigger-Action Pipeline",
          cardPhase: "Phase 02",
          mockup: <AutomationMockup />,
          footerLeft: "Multi-App Synchronization",
          footerRight: "Real-time Flow",
        },
        step3: {
          title: "03. Middleware Engineering & Testing",
          description: "Connecting your software tools with secure cloud functions, rate limiters, retries, and comprehensive test runs.",
          cardBadge: "SYNC",
          cardTitle: "Resilient Data Synchronization",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "CRM & Accounting Live Sync", badge: "Instant" },
            { label: "WhatsApp & Slack Notification Bots", badge: "Connected" },
            { label: "Automated Error Recovery & Dead-Letter Queue", badge: "Protected" },
          ],
          footerLeft: "Zero Duplicate Entry",
          footerRight: "End-to-End Logged",
        },
        step4: {
          title: "04. Go-Live & Operational Monitoring",
          description: "Deploying automated workflows with live delivery dashboards, team training, and 24/7 error alert monitors.",
          cardBadge: "LIVE",
          cardTitle: "Deployment & Monitoring",
          cardPhase: "Phase 04 · Active",
          progressLabel: "Pipeline Reliability Check",
          progressPct: "100% Monitored",
          checklist: [
            { label: "End-to-end data integrity test on live transactions", status: "Passed" },
            { label: "Instant alert notifications for failed API retries", status: "Active" },
            { label: "Clear team runbook & operational documentation", status: "Delivered" },
          ],
          footerStatus: "Automated Pipeline: Running",
          footerNote: "Continuous Monitoring Included",
        },
      };

    case "cloud":
      return {
        step1: {
          title: "01. Architecture Assessment",
          description: "We evaluate your traffic demands, security requirements, and uptime goals to design a cost-efficient cloud setup.",
          cardBadge: "CLOUD",
          cardTitle: "Infrastructure Assessment & Plan",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Traffic & Scalability Modeling", desc: "Forecasting peak user traffic and database query throughput" },
            { title: "Cost & Resource Right-Sizing", desc: "Eliminating unused cloud resources to lower monthly cloud spend" },
            { title: "Security, Backups & Disaster Plan", desc: "Configuring automated snapshots and firewall isolation rules" },
          ],
          footerStatus: "Cloud Blueprint: Verified",
          footerNext: "Ready for Provisioning →",
        },
        step2: {
          title: "02. Containerization & Edge Routing",
          description: "Setting up lightweight Docker containers, edge reverse proxies, and automated load balancers for maximum speed.",
          cardBadge: "PODS",
          cardTitle: "Container Cluster & Load Balancing",
          cardPhase: "Phase 02",
          mockup: <CloudMockup />,
          footerLeft: "Zero-Downtime Deployment",
          footerRight: "Auto-Scaling",
        },
        step3: {
          title: "03. Automated CI/CD Pipelines",
          description: "Building automated GitHub Actions pipelines that run tests, build Docker images, and deploy code safely in minutes.",
          cardBadge: "CI/CD",
          cardTitle: "Automated Deployment Pipeline",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "Automated Build, Test & Lint Check", badge: "2m 14s" },
            { label: "Zero-Downtime Rolling Production Deploy", badge: "Instant" },
            { label: "One-Click Safe Rollback Trigger", badge: "Standby" },
          ],
          footerLeft: "Safe Automated Releases",
          footerRight: "Secrets Protected",
        },
        step4: {
          title: "04. Observability & 24/7 Monitoring",
          description: "Deploying comprehensive server health metrics, error tracking, and automated alert notifications.",
          cardBadge: "OPS",
          cardTitle: "Production Observability & SLA",
          cardPhase: "Phase 04 · 99.99% Uptime",
          progressLabel: "Uptime & Reliability Health",
          progressPct: "99.99% SLA",
          checklist: [
            { label: "Automated daily point-in-time database backups", status: "Verified" },
            { label: "APM server latency & memory threshold alerts", status: "Active" },
            { label: "DDoS mitigation & SSL certificate auto-renewals", status: "Secured" },
          ],
          footerStatus: "Infrastructure: Fully Operational",
          footerNote: "24/7 DevOps Support Included",
        },
      };

    case "saas":
      return {
        step1: {
          title: "01. Product Architecture & Scoping",
          description: "We define tenant isolation, customer onboarding, pricing tiers, and the core MVP feature set for rapid launch.",
          cardBadge: "SAAS",
          cardTitle: "Multi-Tenant Strategy & Roadmap",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Tenant Data Isolation & Security Model", desc: "Ensuring customer organization data remains strictly segregated" },
            { title: "Pricing & Billing Architecture", desc: "Structuring recurring plans, free trials, and usage-based tiers" },
            { title: "Core MVP Feature Prioritization", desc: "Focusing on the highest-impact features needed to acquire initial users" },
          ],
          footerStatus: "Architecture: Validated",
          footerNext: "Ready for Build →",
        },
        step2: {
          title: "02. Multi-Tenant Dashboard & Workspaces",
          description: "Crafting modular workspace dashboards with role-based permissions, team invites, and organization settings.",
          cardBadge: "PORTAL",
          cardTitle: "Customer Portal & Workspace Interface",
          cardPhase: "Phase 02",
          mockup: <SaasMockup />,
          footerLeft: "Multi-Tenant Architecture",
          footerRight: "RBAC Enforced",
        },
        step3: {
          title: "03. Subscription Billing & Permissions",
          description: "Integrating Stripe Billing for recurring cards, automated invoices, customer portals, and enterprise security.",
          cardBadge: "BILLING",
          cardTitle: "Subscriptions & Role-Based Access",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "Stripe Billing & Self-Service Portal", badge: "Connected" },
            { label: "Granular Role Permissions (RBAC)", badge: "Enforced" },
            { label: "Audit Logs & Security Session Management", badge: "Active" },
          ],
          footerLeft: "Automated Billing & Invoices",
          footerRight: "SOC2 Ready",
        },
        step4: {
          title: "04. Quality Audit & Production Scale",
          description: "Stress-testing database queries, verifying payment webhooks, and deploying high-velocity feature flags.",
          cardBadge: "LAUNCH",
          cardTitle: "Production Launch Readiness",
          cardPhase: "Phase 04 · Ready for Scale",
          progressLabel: "SaaS Launch Readiness",
          progressPct: "100% Passed",
          checklist: [
            { label: "Stripe webhook error handling & failed payment retries", status: "Verified" },
            { label: "Multi-tenant database schema queries benchmarked", status: "<50ms" },
            { label: "Automated customer welcome email sequence", status: "Active" },
          ],
          footerStatus: "SaaS Platform: Live",
          footerNote: "Continuous Evolution Partnership",
        },
      };

    case "seo":
      return {
        step1: {
          title: "01. Technical Audit & Keyword Intent",
          description: "We analyze your site's crawl health, discover commercial keyword opportunities, and benchmark competitor rankings.",
          cardBadge: "AUDIT",
          cardTitle: "Technical Health & Keyword Strategy",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Technical Crawl & Indexation Check", desc: "Finding and resolving broken links, redirects, and meta issues" },
            { title: "High-Intent Keyword Discovery", desc: "Targeting terms your buyers search when ready to make a decision" },
            { title: "Content Gap & Competitor Analysis", desc: "Identifying ranking opportunities where competitors are weak" },
          ],
          footerStatus: "SEO Strategy: Approved",
          footerNext: "Ready to Optimize →",
        },
        step2: {
          title: "02. Search Engine Appearance & Snippets",
          description: "Optimizing title tags, rich snippets, and Google Search Console performance to drive qualified organic clicks.",
          cardBadge: "SERP",
          cardTitle: "Google Search Result & SERP Optimization",
          cardPhase: "Phase 02",
          mockup: <SeoMockup />,
          footerLeft: "Schema Markup Structured",
          footerRight: "Click-Through Optimized",
        },
        step3: {
          title: "03. On-Page & Core Web Vitals",
          description: "Speeding up page load times, structuring headings, and injecting rich JSON-LD organization schemas.",
          cardBadge: "VITALS",
          cardTitle: "Core Web Vitals & Schema Markup",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "Google PageSpeed Core Web Vitals", badge: "98/100" },
            { label: "JSON-LD Rich Schema Structured Data", badge: "Valid" },
            { label: "Internal Linking & Sitemap Hierarchy", badge: "Indexed" },
          ],
          footerLeft: "Fast Load Speeds · Clean Architecture",
          footerRight: "Mobile-First",
        },
        step4: {
          title: "04. Search Indexation & Growth Tracking",
          description: "Submitting XML sitemaps to Google, tracking keyword movements, and monitoring organic conversion rates.",
          cardBadge: "GROWTH",
          cardTitle: "Rank Tracking & Monthly Attribution",
          cardPhase: "Phase 04 · Active Growth",
          progressLabel: "Organic Visibility Growth",
          progressPct: "+142% Traffic",
          checklist: [
            { label: "100% target pages indexed in Google Search Console", status: "Indexed" },
            { label: "Weekly ranking tracking on high-priority keywords", status: "Active" },
            { label: "GA4 organic conversion attribution dashboard", status: "Reporting" },
          ],
          footerStatus: "Organic Growth Engine: Active",
          footerNote: "Monthly Reporting Included",
        },
      };

    case "marketing":
      return {
        step1: {
          title: "01. Target Audience & Funnel Strategy",
          description: "We define buyer personas, select high-performing channels, and establish realistic cost-per-lead targets.",
          cardBadge: "STRATEGY",
          cardTitle: "Audience Profiling & Channel Roadmap",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Buyer Persona & Value Proposition", desc: "Clarifying why customers choose you over alternatives" },
            { title: "Channel Strategy (Search, Social, Ads)", desc: "Selecting the highest ROI channels for your specific market" },
            { title: "Unit Economics & CPA Benchmarks", desc: "Setting clear customer acquisition cost targets before spending" },
          ],
          footerStatus: "Marketing Plan: Approved",
          footerNext: "Ready for Launch →",
        },
        step2: {
          title: "02. Multi-Channel Conversion Funnel",
          description: "Building cohesive marketing funnels that guide visitors from initial interest to qualified customer inquiries.",
          cardBadge: "FUNNEL",
          cardTitle: "Audience Funnel & Campaign Performance",
          cardPhase: "Phase 02",
          mockup: <MarketingMockup />,
          footerLeft: "Multi-Channel Tracking",
          footerRight: "High Conversion Rate",
        },
        step3: {
          title: "03. Ad Campaigns & Conversion Assets",
          description: "Deploying targeted Google and Meta ads paired with fast landing pages and automated email follow-ups.",
          cardBadge: "ADS",
          cardTitle: "Campaign Setup & Lead Capture",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "Google Search & Meta Ad Placement", badge: "Targeted" },
            { label: "Dedicated Landing Page & Lead Form", badge: "Optimized" },
            { label: "Instant Email & WhatsApp Lead Follow-Up", badge: "Automated" },
          ],
          footerLeft: "Ad Spend Monitored Daily",
          footerRight: "A/B Tested",
        },
        step4: {
          title: "04. Analytics Attribution & Optimization",
          description: "Tracking every lead source with clean UTM parameters and continuously testing ad copy to lower cost per lead.",
          cardBadge: "ROI",
          cardTitle: "Attribution Dashboard & Optimization",
          cardPhase: "Phase 04 · Scaling",
          progressLabel: "Campaign ROAS & Performance",
          progressPct: "3.8x ROAS",
          checklist: [
            { label: "Full-funnel UTM tracking in Google Analytics 4", status: "Verified" },
            { label: "Weekly ad creative & headline A/B test cycle", status: "Active" },
            { label: "Transparent monthly ROI and lead cost reporting", status: "Delivered" },
          ],
          footerStatus: "Growth Campaign: Scaling",
          footerNote: "Ongoing Optimization Included",
        },
      };

    default: // web
      return {
        step1: {
          title: "01. Understand",
          description: "We listen to your vision, study your target audience, and define clear milestones so every page and feature serves your business goals.",
          cardBadge: "PLAN",
          cardTitle: "Discovery & Strategic Roadmap",
          cardPhase: "Phase 01 · Confirmed",
          items: [
            { title: "Business Objectives & Audience Research", desc: "Clarifying key conversion paths and brand value propositions" },
            { title: "Sitemap & Key User Journeys", desc: "Designing simple, logical paths for visitors to take action" },
            { title: "Scope, Milestones & Timeline", desc: "Transparent timeline with defined deliverables and review stages" },
          ],
          footerStatus: "Strategy Plan: Complete",
          footerNext: "Ready for Design →",
        },
        step2: {
          title: "02. Design",
          description: "Crafting intuitive layouts, clear visual hierarchy, and interactive prototypes tailored for mobile, tablet, and desktop screens.",
          cardBadge: "UI",
          cardTitle: "Visual Layouts & Prototypes",
          cardPhase: "Phase 02",
          mockup: <WebMockup />,
          footerLeft: "Mobile & Desktop Views Tested",
          footerRight: "Client Approved",
        },
        step3: {
          title: "03. Develop",
          description: "Transforming approved designs into a fast, reliable, and secure website with smooth interactions and lead capture.",
          cardBadge: "DEV",
          cardTitle: "Website Engineering",
          cardPhase: "Phase 03",
          statusRows: [
            { label: "Fast Page Speeds & Animations", badge: "Instant" },
            { label: "Inquiry Forms & Lead Capture", badge: "Connected" },
            { label: "SEO & Analytics Foundation", badge: "Optimized" },
          ],
          footerLeft: "Clean Code · Zero Clutter",
          footerRight: "Security Active",
        },
        step4: {
          title: "04. Test & Launch",
          description: "We test every link, form, and page across multiple devices and web browsers before smoothly publishing your website live to the world.",
          cardBadge: "QA",
          cardTitle: "Pre-Launch Quality Audit",
          cardPhase: "Phase 04 · Ready to Launch",
          progressLabel: "Launch Readiness Checklist",
          progressPct: "100% Passed",
          checklist: [
            { label: "Cross-device testing on iPhone, Android, Mac & PC", status: "Verified" },
            { label: "Contact form inquiries and alert notifications", status: "Working" },
            { label: "Domain connection & SSL security configuration", status: "Secured" },
          ],
          footerStatus: "Live Deployment & Handover",
          footerNote: "Ongoing Support Included",
        },
      };
  }
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName?: string;
  badge?: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface WorkflowItem {
  title: string;
  flow: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceTemplateProps {
  eyebrow: string;
  title: string;
  highlightedWord: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };

  servicesSectionEyebrow: string;
  servicesSectionTitle: string;
  servicesSectionDesc?: string;
  services: ServiceItem[];

  capabilitiesTitle?: string;
  capabilitiesDesc?: string;
  capabilities?: string[];

  workflowTitle?: string;
  workflowDesc?: string;
  workflows?: WorkflowItem[];

  approachEyebrow?: string;
  approachTitle?: string;
  approachDesc?: string;
  approachSteps?: ApproachStep[];

  faqs: FaqItem[];

  closingCtaTitle: string;
  closingCtaDesc?: string;
  closingCtaButton: string;
  closingCtaHref?: string;
}

export default function ServiceTemplate({
  eyebrow,
  title,
  highlightedWord,
  description,
  primaryCta,
  secondaryCta,
  servicesSectionEyebrow,
  servicesSectionTitle,
  servicesSectionDesc,
  services,
  capabilitiesTitle,
  capabilitiesDesc,
  capabilities,
  workflowTitle,
  workflowDesc,
  workflows,
  approachEyebrow = "OUR APPROACH",
  approachTitle = "How we deliver results",
  approachDesc,
  approachSteps,
  faqs,
  closingCtaTitle,
  closingCtaDesc,
  closingCtaButton,
  closingCtaHref = "/contact",
}: ServiceTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const approach = getServiceApproach(eyebrow);

  return (
    <div className="relative min-h-screen bg-[#FDFCFC] text-black">
      {/* 1. HERO */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[68vh] sm:min-h-[70vh] lg:min-h-[72vh] flex-col justify-center overflow-hidden bg-[#FDFCFC] text-black pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading with optional eyebrow */}
            <div className="lg:col-span-7">
              {eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {eyebrow}
                </p>
              )}
              <h1
                id="hero-heading"
                className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
              >
                {title}{" "}
                {highlightedWord && (
                  <span className="text-black font-normal">{highlightedWord}</span>
                )}
              </h1>
            </div>

            {/* Right Column: Description aligned to bottom baseline */}
            <div className="lg:col-span-5">
              <p
                id="hero-description"
                className="max-w-lg text-[14px] leading-[1.6] text-black sm:text-[14.5px] lg:text-[15.5px]"
              >
                {description}
              </p>
            </div>
          </div>

          {/* Action Buttons directly below */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
            <Link
              id="hero-cta-primary"
              href={primaryCta.href}
              className="btn-primary inline-flex items-center justify-center rounded-full bg-black px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
              style={{ color: "#ffffff" }}
            >
              <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>{primaryCta.label}</span>
            </Link>

            {secondaryCta && (
              <Link
                id="hero-cta-secondary"
                href={secondaryCta.href}
                className="btn-outline inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-base font-medium text-black transition-all hover:bg-slate-50 hover:border-slate-400 shadow-none hover:shadow-none"
                style={{ color: "#000000" }}
              >
                <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>{secondaryCta.label}</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 2. SERVICES / WHAT WE BUILD */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {servicesSectionEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
              {servicesSectionTitle}
            </h2>
            {servicesSectionDesc && (
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {servicesSectionDesc}
              </p>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              return (
                <div
                  key={item.title}
                  className="rounded-2xl sm:rounded-3xl bg-[#F5F3F1] p-6 sm:p-8 flex flex-col justify-between shadow-none min-h-[280px]"
                >
                  <div>
                    {/* Bespoke Geometric Architectural Illustration */}
                    <div className="pt-1 pb-1 sm:pt-2 sm:pb-5 flex items-center">
                      <BespokeServiceIcon name={item.iconName} />
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-normal tracking-tight text-black leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-black/60">
                      {item.description}
                    </p>
                  </div>

                  {item.badge && (
                    <div className="mt-5 pt-4 border-t border-black/[0.06]">
                      <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-700 shadow-2xs">
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES / TECH STACK (IF PROVIDED) */}
      {capabilities && capabilities.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#FDFCFC]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
            {/* Header: 2-column baseline-aligned */}
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12 mb-10 sm:mb-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  CAPABILITIES &amp; ARCHITECTURE
                </p>
                <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
                  {capabilitiesTitle || "Our development capabilities"}
                </h2>
              </div>
              <div className="lg:col-span-5">
                {capabilitiesDesc && (
                  <p className="max-w-lg text-[14px] leading-[1.6] text-black/60 sm:text-[14.5px] lg:text-[15.5px]">
                    {capabilitiesDesc}
                  </p>
                )}
              </div>
            </div>

            {/* Cards Grid: Matching #F5F3F1 card design system */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map((cap, idx) => (
                <div
                  key={cap}
                  className="relative flex flex-col justify-between p-5 sm:p-6 min-h-[160px] sm:min-h-[175px] rounded-2xl sm:rounded-3xl bg-[#F5F3F1] text-black shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-black/20 select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black shadow-2xs">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
                      </svg>
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[15px] sm:text-[16px] font-normal tracking-tight text-black leading-snug">
                      {cap}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. WORKFLOWS (IF PROVIDED) */}
      {workflows && workflows.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#FDFCFC]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12 mb-10 sm:mb-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  EXAMPLE WORKFLOWS
                </p>
                <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
                  {workflowTitle || "Automated operational pipelines"}
                </h2>
              </div>
              <div className="lg:col-span-5">
                {workflowDesc && (
                  <p className="max-w-lg text-[14px] leading-[1.6] text-black/60 sm:text-[14.5px] lg:text-[15.5px]">
                    {workflowDesc}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflows.map((wf) => (
                <div
                  key={wf.title}
                  className="rounded-2xl sm:rounded-3xl bg-[#F5F3F1] p-6 sm:p-8 space-y-4 shadow-none text-black"
                >
                  <h3 className="text-xl sm:text-[22px] font-normal tracking-tight text-black leading-snug">
                    {wf.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    {wf.flow.map((step, idx) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-black/10 bg-white px-3.5 py-1 text-xs font-medium text-black shadow-2xs">
                          {step}
                        </span>
                        {idx < wf.flow.length - 1 && (
                          <ArrowRight className="h-3.5 w-3.5 text-black/40 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. APPROACH STEPS - BESPOKE PER-SERVICE CAPABILITY & ARCHITECTURE UI */}
      <section className="py-20 lg:py-28 bg-[#FDFCFC]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12 mb-10 sm:mb-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {approachEyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-normal tracking-tight text-black sm:text-3xl lg:text-4xl">
                {approachTitle}
              </h2>
            </div>
            <div className="lg:col-span-5">
              {approachDesc && (
                <p className="max-w-lg text-[14px] leading-[1.6] text-black/60 sm:text-[14.5px] lg:text-[15.5px]">
                  {approachDesc}
                </p>
              )}
            </div>
          </div>

          {/* Step 1: Full-Width Card */}
          <div className="rounded-3xl bg-[#F5F3F1] p-6 sm:p-8 lg:p-10 text-black shadow-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-black leading-snug">
                  {approach.step1.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-black/60 font-normal">
                  {approach.step1.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-white p-5 sm:p-6 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-200/70">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 border border-neutral-200/60 font-mono text-xs font-semibold">
                        {approach.step1.cardBadge}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-black">
                        {approach.step1.cardTitle}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600 border border-neutral-200/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      {approach.step1.cardPhase}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3 text-xs sm:text-[13px] text-black/80">
                    {approach.step1.items.map((it) => (
                      <div key={it.title} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200/80">
                          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
                            <path d="M2.5 6.5L4.5 8.5L9.5 3.5" />
                          </svg>
                        </span>
                        <div>
                          <p className="font-medium text-black">{it.title}</p>
                          <p className="text-[12px] text-black/55 mt-0.5">{it.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-neutral-200/70 flex flex-wrap items-center justify-between text-xs text-black/60">
                    <span className="font-medium text-black">{approach.step1.footerStatus}</span>
                    <span className="text-[11px] text-neutral-400">{approach.step1.footerNext}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps 2 & 3: Bespoke Visual Mockup & Engineering Status (2-Column Grid) */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Step 2: Bespoke Visual Mockup */}
            <div className="rounded-3xl bg-[#F5F3F1] p-6 sm:p-8 flex flex-col justify-between text-black shadow-none">
              <div>
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-black leading-snug">
                  {approach.step2.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-black/60 font-normal">
                  {approach.step2.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 rounded-2xl bg-white p-5 sm:p-6 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-500 font-semibold text-xs border border-neutral-200/60 font-mono">
                      {approach.step2.cardBadge}
                    </span>
                    <span className="text-xs font-semibold text-black">{approach.step2.cardTitle}</span>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10.5px] font-medium text-neutral-600 border border-neutral-200/80">
                    {approach.step2.cardPhase}
                  </span>
                </div>

                {/* Bespoke Discipline-Specific UI Mockup */}
                {approach.step2.mockup}

                <div className="mt-3.5 flex items-center justify-between text-xs text-black/60">
                  <span className="text-black font-medium flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                    {approach.step2.footerLeft}
                  </span>
                  <span className="text-[11px] text-neutral-400">{approach.step2.footerRight}</span>
                </div>
              </div>
            </div>

            {/* Step 3: Domain Capabilities & Features */}
            <div className="rounded-3xl bg-[#F5F3F1] p-6 sm:p-8 flex flex-col justify-between text-black shadow-none">
              <div>
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-black leading-snug">
                  {approach.step3.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-black/60 font-normal">
                  {approach.step3.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 rounded-2xl bg-white p-5 sm:p-6 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-500 font-semibold text-xs border border-neutral-200/60 font-mono">
                      {approach.step3.cardBadge}
                    </span>
                    <span className="text-xs font-semibold text-black">{approach.step3.cardTitle}</span>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10.5px] font-medium text-neutral-600 border border-neutral-200/80">
                    {approach.step3.cardPhase}
                  </span>
                </div>

                {/* Feature Status Rows with Grey Checkmark Icons and Badges */}
                <div className="mt-3.5 space-y-2 text-[12px]">
                  {approach.step3.statusRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between rounded-lg bg-[#FAF9F8] p-2.5 border border-neutral-200/70">
                      <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200/80">
                          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
                            <path d="M2.5 6.5L4.5 8.5L9.5 3.5" />
                          </svg>
                        </span>
                        <span className="font-medium text-black">{row.label}</span>
                      </div>
                      <span className="rounded-md bg-neutral-100 text-neutral-600 px-2 py-0.5 text-[10px] font-medium border border-neutral-200/80">
                        {row.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 flex items-center justify-between text-xs text-black/60">
                  <span className="text-black font-medium">{approach.step3.footerLeft}</span>
                  <span className="text-[11px] text-neutral-400">{approach.step3.footerRight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Full-Width Quality Audit & Launch Card */}
          <div className="mt-6 rounded-3xl bg-[#F5F3F1] p-6 sm:p-8 lg:p-10 text-black shadow-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-black leading-snug">
                  {approach.step4.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-black/60 font-normal">
                  {approach.step4.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-white p-5 sm:p-6 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-500 text-xs font-semibold border border-neutral-200/60 font-mono">
                        {approach.step4.cardBadge}
                      </span>
                      <span className="text-xs font-semibold text-black">{approach.step4.cardTitle}</span>
                    </div>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600 border border-neutral-200/80">
                      {approach.step4.cardPhase}
                    </span>
                  </div>

                  {/* Progress Bar in Soft Grey */}
                  <div className="mt-3.5 rounded-xl bg-[#FAF9F8] p-3 border border-neutral-200/70 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-black">{approach.step4.progressLabel}</span>
                      <span className="font-mono text-[11px] text-neutral-500">{approach.step4.progressPct}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-neutral-200 overflow-hidden">
                      <div className="h-full w-full rounded-full bg-neutral-400" />
                    </div>
                  </div>

                  <div className="mt-3 space-y-2 text-xs text-black/80">
                    {approach.step4.checklist.map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200/80">
                            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
                              <path d="M2.5 6.5L4.5 8.5L9.5 3.5" />
                            </svg>
                          </span>
                          <span>{item.label}</span>
                        </div>
                        <span className="text-neutral-400 text-[11px]">{item.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-neutral-200/70 flex items-center justify-between text-xs text-black/60">
                    <span className="text-black font-medium flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      {approach.step4.footerStatus}
                    </span>
                    <span className="text-[11px] text-neutral-400">{approach.step4.footerNote}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION (Matching Homepage Faq.tsx exactly) */}
      {faqs && faqs.length > 0 && (
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="relative isolate bg-[#FDFCFC] py-20 lg:py-28 text-black"
        >
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
              {/* Left Column: Heading styled matching Hero section */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                  FAQ
                </p>
                <h2
                  id="faq-heading"
                  className="text-3xl font-normal leading-[1.18] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]"
                >
                  Questions?
                  <br />
                  We&apos;ve got answers.
                </h2>
                <p className="mt-4 max-w-sm text-[14px] leading-[1.6] text-black/70 sm:text-[14.5px] lg:text-[15.5px] font-normal">
                  Everything you need to know about our services, technical process, and project delivery.
                </p>
              </div>

              {/* Right Column: Clean Divider List Accordion in Light Theme */}
              <div className="lg:col-span-7 divide-y divide-black/10 border-t border-b border-black/10">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;

                  return (
                    <div key={faq.question} className="transition-colors">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
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
      )}

      {/* 7. CLOSING CTA */}
      <FinalCta
        title={closingCtaTitle}
        description={closingCtaDesc}
        buttonText={closingCtaButton}
        buttonHref={closingCtaHref}
        border={false}
      />
    </div>
  );
}
