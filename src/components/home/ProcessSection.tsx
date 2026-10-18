import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyText } from "@/components/ui/shiny-text";

// Import workflow images
import step1Img from "/images/workflow/step-01-discovery.png";
import step2Img from "/images/workflow/step-02-prototyping.png";
import step3Img from "/images/workflow/step-03-engineering.png";
import step4Img from "/images/workflow/step-04-testing.png";
import step5Img from "/images/workflow/step-05-deployment.png";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Architecture",
      desc: "We analyze your business requirements, define technical scope, select optimal database and stack schemas, and deliver a fixed-timeline blueprint.",
      metric: "Day 1–3",
      image: step1Img,
      glowColor: "rgba(0, 240, 255, 0.22)",
      borderColor: "rgba(0, 240, 255, 0.45)",
    },
    {
      num: "02",
      title: "Interface Prototyping",
      desc: "Creating responsive, accessible, high-conversion UI/UX workflows. Fast design sprints ensuring absolute visual clarity before writing code.",
      metric: "Week 1",
      image: step2Img,
      glowColor: "rgba(56, 189, 248, 0.22)",
      borderColor: "rgba(56, 189, 248, 0.45)",
    },
    {
      num: "03",
      title: "Full-Stack Engineering",
      desc: "Writing clean, modular React, Next.js, Flutter, and Node/Express code. Decoupled micro-APIs, optimized SQL queries, and secure auth layers.",
      metric: "Week 2–4",
      image: step3Img,
      glowColor: "rgba(6, 182, 212, 0.22)",
      borderColor: "rgba(6, 182, 212, 0.45)",
    },
    {
      num: "04",
      title: "Quality & Security Audits",
      desc: "Automated test suites, performance optimization for 95+ Core Web Vitals, cross-device responsiveness checks, and penetration audits.",
      metric: "Week 4",
      image: step4Img,
      glowColor: "rgba(0, 229, 255, 0.22)",
      borderColor: "rgba(0, 229, 255, 0.45)",
    },
    {
      num: "05",
      title: "Cloud Launch & Handoff",
      desc: "Production deployment on AWS/Cloudflare with SSL, automated CI/CD pipelines, domain setup, and 100% full source code & IP handoff.",
      metric: "Launch",
      image: step5Img,
      glowColor: "rgba(0, 240, 255, 0.25)",
      borderColor: "rgba(0, 240, 255, 0.5)",
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-line)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
              <span className="font-semibold uppercase tracking-wider">Simple 5-Step Process</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-muted)]">From Idea to Live Launch</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-tight text-balance">
              How We Turn Your Idea into a{" "}
              <ShinyText text="Live Product." speed={3} className="font-black" />
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              No confusion, no technical headaches. We guide you through a step-by-step milestone delivery process with weekly progress updates.
            </p>
          </div>

          <Link
            to="/proposal"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[var(--accent)] hover:opacity-90 px-6 py-3.5 rounded-xl transition-all whitespace-nowrap self-start md:self-end shadow-md font-mono"
          >
            <span>Estimate Timeline &amp; Cost</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Process Steps Grid with ReactBits SpotlightCards and Workflow PNG Images */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <SpotlightCard
              key={step.num}
              spotlightColor={step.glowColor}
              borderColor={step.borderColor}
              enableTilt={true}
              tiltMaxAngle={6}
              className="p-6 flex flex-col justify-between group h-full shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-line)]">
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">{step.num}</span>
                  <span className="text-[11px] font-mono text-[var(--text-subtle)]">{step.metric}</span>
                </div>

                {/* Workflow Step PNG Graphic */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-[var(--surface-fill)] border border-[var(--border-line)] p-2.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl pointer-events-none" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                  />
                </div>

                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors text-center pt-1">
                  {step.title}
                </h3>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed text-center">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-line)] mt-6 flex items-center justify-center gap-1.5 text-[11px] text-[var(--text-muted)] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Deliverable</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
