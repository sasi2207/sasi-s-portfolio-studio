import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  LifeBuoy, 
  ArrowRight, 
  CheckCircle2, 
} from "lucide-react";
import { ReactBitsBentoCard } from "@/components/ui/reactbits-bento-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyText } from "@/components/ui/shiny-text";

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  glowColor: string;
  borderColor: string;
  featured?: boolean;
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
    glowColor: "rgba(16, 185, 129, 0.18)",
    borderColor: "rgba(16, 185, 129, 0.45)",
    featured: true,
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
    glowColor: "rgba(245, 158, 11, 0.18)",
    borderColor: "rgba(245, 158, 11, 0.45)",
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
    glowColor: "rgba(56, 189, 248, 0.18)",
    borderColor: "rgba(56, 189, 248, 0.45)",
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
    glowColor: "rgba(168, 85, 247, 0.18)",
    borderColor: "rgba(168, 85, 247, 0.45)",
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--surface-fill)] border-b border-[var(--border-line)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
            <span className="font-semibold uppercase tracking-wider">The TechSasi Difference</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--text-muted)]">Zero Compromise</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-tight text-balance">
            Why Businesses Trust Us to Build Their{" "}
            <ShinyText text="Core Systems." speed={4} className="font-black" />
          </h2>

          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            We operate with radical transparency, engineering precision, and a genuine commitment to helping your business thrive in the digital age.
          </p>
        </div>

        {/* 4 Pillars ReactBits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <ReactBitsBentoCard
                key={idx}
                glowColor={benefit.glowColor}
                borderColor={benefit.borderColor}
                className="group p-6 sm:p-8"
              >
                {benefit.featured && (
                  <BorderBeam size={180} duration={8} colorFrom="#10B981" colorTo="#34D399" />
                )}

                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center shadow-xs text-[var(--accent)] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-[var(--accent)] font-mono font-semibold">
                        {benefit.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-[var(--text-muted)] text-sm leading-relaxed pt-1">
                    {benefit.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[var(--border-line)]">
                    {benefit.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span className="text-[var(--text-muted)]">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--border-line)] mt-6 flex items-center justify-between text-xs font-mono text-[var(--text-subtle)]">
                  <span>Guaranteed SLA Commitment</span>
                  <Link
                    to="/about"
                    className="text-[var(--accent)] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read About Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ReactBitsBentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
