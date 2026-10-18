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
  Sparkles,
} from "lucide-react";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyText } from "@/components/ui/shiny-text";
import { DecryptedText } from "@/components/ui/decrypted-text";
import { MagnetButton } from "@/components/ui/magnet-button";

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
  badge: string;
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
    badge: "<0.8s FCP",
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
    badge: "iOS & Android",
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
    badge: "GST Automated",
  },
  {
    id: "training",
    label: "AI Coaching",
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
    badge: "1-on-1 Mentorship",
  },
];

export const HeroSolutionShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<SolutionTab["id"]>(solutionTabs[0].id);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tabId: SolutionTab["id"]) => {
    if (tabId === activeTabId) return;
    setIsLoading(true);
    setActiveTabId(tabId);
    setTimeout(() => {
      setIsLoading(false);
    }, 220);
  };

  const currentTab = solutionTabs.find((t) => t.id === activeTabId) || solutionTabs[0];

  return (
    <SpotlightCard
      className="p-6 md:p-8 shadow-2xl space-y-5 relative transition-colors duration-300"
      spotlightColor="rgba(207, 128, 71, 0.22)"
      borderColor="rgba(207, 128, 71, 0.45)"
      enableTilt={true}
      tiltMaxAngle={6}
    >
      {/* Animated Perimeter Beam */}
      <BorderBeam size={180} duration={10} colorFrom="#cf8047" colorTo="#ff9d5c" borderWidth={1.5} />

      {/* Header with Emblem & Quick Trust Marker */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border-line)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--surface-fill)] p-1.5 border border-[var(--border-line)] flex items-center justify-center overflow-hidden shadow-xs">
            <img
              src="/lo.png"
              alt="TechSasi Emblem"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/lo.png";
              }}
            />
          </div>
          <div>
            <h2 className="font-display font-bold text-[var(--text-primary)] text-sm tracking-tight">
              Interactive Scope Navigator
            </h2>
            <p className="text-[11px] text-[var(--text-muted)] font-mono">
              Real-time delivery estimate &amp; scope
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
          {currentTab.badge}
        </span>
      </div>

      {/* Interactive Segmented Selector Tabs */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-xl text-xs font-semibold">
        {solutionTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`py-2 px-1 rounded-lg transition-all flex flex-col items-center gap-1 cursor-pointer select-none ${
                isActive
                  ? "bg-[var(--accent)] text-white font-bold shadow-xs scale-[1.02]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill-subtle)]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="text-[10px] sm:text-[11px] truncate w-full text-center">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Tab Content Display */}
      <div className="p-5 rounded-xl bg-[var(--surface-fill)]/70 backdrop-blur-md border border-[var(--border-line)] min-h-[220px] flex flex-col justify-between transition-all">
        {isLoading ? (
          <div className="animate-pulse space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="h-4 w-36 bg-[var(--skeleton-highlight)] rounded-md" />
                <div className="h-3.5 w-16 bg-[var(--skeleton-highlight)] rounded-md" />
              </div>
              <div className="space-y-1.5 mb-4">
                <div className="h-3 w-5/6 bg-[var(--skeleton-highlight)] rounded-md" />
                <div className="h-3 w-2/3 bg-[var(--skeleton-highlight)] rounded-md" />
              </div>
              <div className="space-y-2 pt-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[var(--skeleton-highlight)] shrink-0" />
                    <div className="h-3 bg-[var(--skeleton-highlight)] rounded-md w-3/4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-[var(--text-primary)] text-sm tracking-tight">
                  {currentTab.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[var(--accent)] font-semibold">
                  <Clock className="w-3 h-3" />
                  <span>{currentTab.timeline}</span>
                </div>
              </div>

              <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-3">
                {currentTab.subtitle}
              </p>

              <div className="space-y-2 text-xs">
                {currentTab.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[var(--text-primary)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight text-[var(--text-muted)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-line)] mt-4 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                Pricing: <strong className="text-[var(--text-primary)]">{currentTab.startingPrice}</strong>
              </span>
              <Link
                to={currentTab.ctaLink}
                className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:text-[var(--accent-from)] transition-colors"
              >
                <span>{currentTab.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Quick Trust Guarantee */}
      <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-1">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>30-Day Free Technical Warranty</span>
        </span>
        <Link
          to="/proposal"
          className="text-[var(--accent)] font-semibold hover:underline flex items-center gap-1"
        >
          Instant Scope &rarr;
        </Link>
      </div>
    </SpotlightCard>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--hero-bg)] text-[var(--text-primary)] border-b border-[var(--border-line)] transition-colors duration-300">
      {/* ReactBits Dynamic Interactive Particles Canvas Backdrop */}
      <ParticlesBackground quantity={50} staticity={40} ease={45} />

      {/* Ambient Radial Gradient Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-[var(--accent)]/15 via-[var(--accent-from)]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 subtle-grid opacity-25 dark:opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Welcoming Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Friendly Kicker Badge with ReactBits DecryptedText */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <span className="text-[var(--accent)] font-semibold">
                <DecryptedText text="TechSasi Engineering" animateOn="view" speed={40} />
              </span>
              <span aria-hidden="true">·</span>
              <span>Websites, Mobile Apps &amp; Custom Software in Salem</span>
            </div>

            {/* User-Friendly Display Headline with ReactBits ShinyText */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.9rem] font-black tracking-tight text-[var(--text-primary)] leading-[1.08] text-balance transition-colors">
              Building Fast, Beautiful Websites &amp; Mobile Apps That{" "}
              <ShinyText text="Grow Your Business." speed={3.5} className="font-black" />
            </h1>

            {/* Value Copy */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl font-light transition-colors">
              We design, code, and launch high-performance digital products for businesses, startups, and institutions. Honest pricing, direct engineer communication, and 100% full source code ownership with zero hidden surprises.
            </p>

            {/* Primary Action Buttons with MagnetButton Spring Dynamics */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <MagnetButton strength={0.25}>
                <Link
                  to="/proposal"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 rounded-xl shadow-lg hover:shadow-[var(--accent)]/30 transition-all duration-200 whitespace-nowrap"
                >
                  <span>Calculate Project Cost</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagnetButton>

              <MagnetButton strength={0.25}>
                <a
                  href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20am%20interested%20in%20building%20a%20website%2Fapp%20with%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-500/30 rounded-xl transition-all duration-200 whitespace-nowrap shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </MagnetButton>

              <MagnetButton strength={0.2}>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--card-bg)] hover:bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-xl transition-all duration-200 whitespace-nowrap shadow-xs"
                >
                  <span>View Live Works</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
                </Link>
              </MagnetButton>
            </div>

            {/* Proof & Trust Grid */}
            <div className="pt-8 border-t border-[var(--border-line)] grid grid-cols-2 sm:grid-cols-4 gap-4 transition-colors">
              <div>
                <p className="font-display text-2xl font-black text-[var(--text-primary)] tabular-nums">50+</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">Projects Delivered</p>
              </div>
              <div>
                <p className="font-display text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">&lt;0.9s</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">Sub-Second Speed</p>
              </div>
              <div>
                <p className="font-display text-2xl font-black text-[var(--text-primary)] tabular-nums">100%</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">Full Code Ownership</p>
              </div>
              <div>
                <p className="font-display text-2xl font-black text-[var(--accent)] tabular-nums">30-Day</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">Free Post-Launch SLA</p>
              </div>
            </div>
          </div>

          {/* Right Column: ReactBits Spotlight Card Showcase */}
          <div className="lg:col-span-5">
            <HeroSolutionShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;