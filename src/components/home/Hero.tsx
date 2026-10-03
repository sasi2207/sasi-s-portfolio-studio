import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  Smartphone,
  Globe,
  Server,
  GraduationCap,
  Clock,
} from "lucide-react";

interface SolutionTab {
  id: "web" | "app" | "erp" | "training";
  label: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  features: string[];
  timeline: string;
  startingPrice: string;
  ctaText: string;
  ctaLink: string;
}

const solutionTabs: SolutionTab[] = [
  {
    id: "web",
    label: "Websites",
    icon: Globe,
    title: "High-Performance Business Websites",
    subtitle: "Built with React & Next.js for sub-second speeds and top Google search rankings.",
    features: [
      "100% mobile responsive on all devices",
      "Free SSL certificate & secure cloud hosting setup",
      "WhatsApp chat integration & enquiry forms",
      "Full SEO setup with Google Search Console",
    ],
    timeline: "Ready in 5–10 Days",
    startingPrice: "Affordable Fixed Quotes",
    ctaText: "Get Website Quote",
    ctaLink: "/proposal",
  },
  {
    id: "app",
    label: "Mobile Apps",
    icon: Smartphone,
    title: "iOS & Android Native Mobile Apps",
    subtitle: "Cross-platform mobile applications engineered with Flutter & React Native.",
    features: [
      "Smooth 60fps animations on iOS & Android",
      "Real-time push notifications & offline storage",
      "Secure user logins (OTP, Google, Mobile)",
      "App Store & Google Play Store submission",
    ],
    timeline: "2–4 Weeks Turnaround",
    startingPrice: "Milestone-Based",
    ctaText: "Plan Your Mobile App",
    ctaLink: "/proposal",
  },
  {
    id: "erp",
    label: "Custom ERP",
    icon: Server,
    title: "Business Billing, Invoicing & ERP",
    subtitle: "Tailor-made management software designed around your exact business workflow.",
    features: [
      "GST-compliant automated invoice & bill generation",
      "Live inventory & stock movement tracking",
      "Multi-user roles with admin permissions",
      "Automated WhatsApp & PDF reports",
    ],
    timeline: "Custom Milestone Scope",
    startingPrice: "Transparent Scope",
    ctaText: "Discuss ERP Requirements",
    ctaLink: "/contact",
  },
  {
    id: "training",
    label: "IT Coaching",
    icon: GraduationCap,
    title: "Hands-on Software Coaching & Placement",
    subtitle: "Practical training in React, Node.js, and Full-Stack development from Salem.",
    features: [
      "100% project-based real application building",
      "Direct 1-on-1 mentorship from working engineers",
      "Resume building & mock interview drills",
      "Internship completion certificate & referral",
    ],
    timeline: "Flexible Batches",
    startingPrice: "Student Friendly",
    ctaText: "Enroll in Coaching",
    ctaLink: "/services/coaching",
  },
];

export const SolutionFinder: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<SolutionTab["id"]>(solutionTabs[0].id);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tabId: SolutionTab["id"]) => {
    if (tabId === activeTabId) return;
    setIsLoading(true);
    setActiveTabId(tabId);
    setTimeout(() => {
      setIsLoading(false);
    }, 280);
  };

  const currentTab = solutionTabs.find((t) => t.id === activeTabId) || solutionTabs[0];

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-white/[0.12] bg-white/95 dark:bg-[#0C1222]/95 backdrop-blur-xl p-6 shadow-xl dark:shadow-2xl space-y-5 relative transition-colors">
      {/* Header with Emblem & Quick Trust Marker */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 dark:bg-gradient-to-tr dark:from-amber-500/20 dark:to-blue-500/20 p-1.5 border border-amber-500/20 dark:border-white/[0.1] flex items-center justify-center overflow-hidden shadow-sm">
            <img
              src="/tech.png"
              alt="TechSasi Emblem"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/lo.png";
              }}
            />
          </div>
          <div>
            <h2 className="font-display font-bold text-slate-900 dark:text-white text-base">
              Interactive Solution Finder
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              Pick a category to see scope & timeline
            </p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          Ready to Start
        </span>
      </div>

      {/* Interactive Segmented Selector Tabs */}
      <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 dark:bg-black/40 rounded-xl text-xs font-semibold">
        {solutionTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`py-2 px-1.5 rounded-lg transition-all flex flex-col items-center gap-1 cursor-pointer ${
                isActive
                  ? "bg-amber-400 text-slate-950 font-bold shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[11px] truncate w-full text-center">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Tab Content Display / Skeleton Loader */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-white/[0.06] min-h-[220px] flex flex-col justify-between transition-all">
        {isLoading ? (
          <div className="animate-pulse space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="h-4 w-36 bg-slate-200 dark:bg-white/[0.08] rounded-md" />
                <div className="h-3.5 w-16 bg-amber-400/20 rounded-md" />
              </div>

              <div className="space-y-1.5 mb-4">
                <div className="h-3 w-5/6 bg-slate-200 dark:bg-white/[0.08] rounded-md" />
                <div className="h-3 w-2/3 bg-slate-200 dark:bg-white/[0.08] rounded-md" />
              </div>

              <div className="space-y-2.5 pt-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400/20 shrink-0" />
                    <div
                      className="h-3 bg-slate-200 dark:bg-white/[0.08] rounded-md"
                      style={{ width: `${65 + i * 10}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] mt-4 flex items-center justify-between">
              <div className="h-3.5 w-24 bg-slate-200 dark:bg-white/[0.08] rounded-md" />
              <div className="h-3.5 w-28 bg-amber-400/20 rounded-md" />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-between animate-in fade-in duration-200">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  {currentTab.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
                  <Clock className="w-3 h-3" />
                  <span>{currentTab.timeline}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-3">
                {currentTab.subtitle}
              </p>

              <div className="space-y-2 text-xs">
                {currentTab.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] mt-4 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Pricing: <strong className="text-slate-900 dark:text-white">{currentTab.startingPrice}</strong>
              </span>
              <Link
                to={currentTab.ctaLink}
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
              >
                <span>{currentTab.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Quick Trust Guarantee */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Free 30-Day Technical Warranty</span>
        </span>
        <Link
          to="/proposal"
          className="text-amber-600 dark:text-amber-400 font-bold hover:underline flex items-center gap-1"
        >
          Start Proposal &rarr;
        </Link>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50/60 dark:bg-[#060910] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-amber-500/10 via-orange-500/10 to-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle tech grid background */}
      <div className="absolute inset-0 subtle-grid opacity-40 dark:opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Welcoming Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Friendly Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0E1526] border border-slate-200 dark:border-white/[0.1] text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-amber-600 dark:text-amber-400 font-semibold">TechSasi</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>Websites, Mobile Apps & Custom Software in Salem</span>
            </div>

            {/* User-Friendly Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.9rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance transition-colors">
              Building Fast, Beautiful Websites & Mobile Apps That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 dark:from-amber-400 dark:via-amber-300 dark:to-orange-400">
                Grow Your Business.
              </span>
            </h1>

            {/* Value Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-light transition-colors">
              We design, code, and launch high-performance digital products for businesses, startups, and institutions. Honest pricing, direct engineer communication, and 100% full source code ownership — with zero hidden surprises.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/proposal"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Calculate Project Cost</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20am%20interested%20in%20building%20a%20website%2Fapp%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-500/30 rounded-xl transition-all duration-200 whitespace-nowrap shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/[0.1] rounded-xl transition-all duration-200 whitespace-nowrap shadow-sm"
              >
                <span>View Live Works</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              </Link>
            </div>

            {/* Proof & Trust Grid */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 transition-colors">
              <div>
                <p className="font-display text-2xl font-black text-slate-900 dark:text-white tabular-nums">50+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Projects Delivered</p>
              </div>
              <div>
                <p className="font-display text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">&lt;0.9s</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Sub-Second Speed</p>
              </div>
              <div>
                <p className="font-display text-2xl font-black text-slate-900 dark:text-white tabular-nums">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Full Code Ownership</p>
              </div>
              <div>
                <p className="font-display text-2xl font-black text-amber-600 dark:text-amber-400 tabular-nums">30-Day</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Free Post-Launch SLA</p>
              </div>
            </div>
          </div>

          {/* Right Column: Encapsulated Interactive Solution Finder Card */}
          <div className="lg:col-span-5">
            <SolutionFinder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;