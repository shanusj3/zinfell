"use client";

import { useEffect, useState } from "react";
import { Share2, Bookmark, Check, Copy } from "lucide-react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-[#A78BFA] to-purple-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function ArticleShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#161716] px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-[#A78BFA]/40 hover:text-white"
      title="Share article"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-emerald-400">Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="h-3.5 w-3.5 text-[#A78BFA]" />
          <span>Share</span>
        </>
      )}
    </button>
  );
}
