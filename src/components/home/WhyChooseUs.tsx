import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  LifeBuoy, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Smartphone, 
  Users 
} from "lucide-react";

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  badgeColor: string;
}

const benefits: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "100% Full Code & IP Ownership",
    tagline: "Your software belongs entirely to you.",
    description: "Unlike platforms that lock you in, TechSasi gives you full Git repository access, hosting credentials, and database rights upon completion. Zero vendor lock-in.",
    points: [
      "Complete source code handoff on GitHub",
      "Domain and cloud accounts registered in your name",
      "No recurring proprietary platform licensing fees"
    ],
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    icon: Zap,
    title: "Sub-Second Speed & Mobile Mastery",
    tagline: "Lightning-fast performance on any phone.",
    description: "Every page is hand-crafted and audited to achieve 95+ Google Lighthouse scores and load in under 0.9s on standard mobile networks.",
    points: [
      "Sub-second page loading (<0.9s)",
      "Tested on modern iPhones, Androids, and tablets",
      "Instant SEO optimization for Google Search"
    ],
    badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30"
  },
  {
    icon: MessageSquare,
    title: "Direct Engineer Communication",
    tagline: "Talk directly to the engineer building your product.",
    description: "No salespeople, no bureaucratic ticketing queues. You collaborate directly with experienced developers via WhatsApp, phone, and private staging links.",
    points: [
      "Dedicated WhatsApp group for your project",
      "Weekly live progress staging reviews",
      "Clear milestone timelines with zero jargon"
    ],
    badgeColor: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30"
  },
  {
    icon: LifeBuoy,
    title: "Free 30-Day Post-Launch SLA",
    tagline: "Peace of mind long after deployment day.",
    description: "We don't vanish after launch. Every delivery includes 30 days of comprehensive technical monitoring, bug resolution, and personalized CMS admin training.",
    points: [
      "Free bug fixing & performance tuning for 30 days",
      "Personalized 1-on-1 admin video walkthrough",
      "Optional affordable monthly care & backup plans"
    ],
    badgeColor: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30"
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#070A14] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
            <span>The TechSasi Difference</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 dark:text-slate-400">Zero Compromise</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight text-balance">
            Why Businesses Trust Us to Build Their Core Systems.
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            We operate with radical transparency, engineering precision, and a genuine commitment to helping your business thrive in the digital age.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white dark:bg-[#0A0F1F] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${benefit.badgeColor} flex items-center justify-center border shadow-inner shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-amber-600 dark:text-amber-400 font-mono font-semibold">
                        {benefit.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pt-1">
                    {benefit.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-white/[0.05]">
                    {benefit.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-white/[0.05] mt-6 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Guaranteed SLA Commitment</span>
                  <Link
                    to="/about"
                    className="text-amber-600 dark:text-amber-400 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read About Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
