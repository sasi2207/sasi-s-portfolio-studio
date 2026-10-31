import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, X, ArrowRight, ShoppingCart } from "lucide-react";

export const GlobalAnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    // Check if dismissed previously in current session
    try {
      return sessionStorage.getItem("techsasi_billing_banner_dismissed") !== "true";
    } catch {
      return true;
    }
  });

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem("techsasi_billing_banner_dismissed", "true");
    } catch {
      // ignore
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-slate-950 via-[#071330] to-slate-950 border-b border-cyan-500/30 text-white px-3 sm:px-6 py-2 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        {/* Left message & status */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Product
          </span>
          <span className="text-slate-200">
            <strong className="text-white font-bold">TechSasi Billing Software is live at billing.techsasi.com!</strong>{" "}
            <span className="text-cyan-300 font-semibold">Try 1 Month 100% Free</span> before you purchase — test at your counter.
          </span>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://billing.techsasi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-[11px] shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Open billing.techsasi.com 1 month free trial"
          >
            <Sparkles className="w-3 h-3 text-slate-950" />
            <span>Try 1 Month Free</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <Link
            to="/proposal?type=billing-software"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-[11px] transition-colors"
          >
            <span>Purchase Now</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <button
            onClick={handleDismiss}
            className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-white/10 transition-colors ml-1"
            aria-label="Dismiss banner"
            title="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
