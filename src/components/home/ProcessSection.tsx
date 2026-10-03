import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Calculator, Layers, Cpu, ShieldCheck, Rocket } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Architecture",
      desc: "We analyze your business requirements, define technical scope, select optimal database and stack schemas, and deliver a fixed-timeline blueprint.",
      metric: "Day 1–3"
    },
    {
      num: "02",
      title: "Interface Prototyping",
      desc: "Creating responsive, accessible, high-conversion UI/UX workflows. Fast design sprints ensuring absolute visual clarity before writing code.",
      metric: "Week 1"
    },
    {
      num: "03",
      title: "Full-Stack Engineering",
      desc: "Writing clean, modular React, Next.js, Flutter, and Node/PHP code. Decoupled micro-APIs, optimized SQL queries, and secure auth layers.",
      metric: "Week 2–4"
    },
    {
      num: "04",
      title: "Quality & Security Audits",
      desc: "Automated test suites, performance optimization for 95+ Core Web Vitals, cross-device responsiveness checks, and penetration audits.",
      metric: "Week 4"
    },
    {
      num: "05",
      title: "Cloud Launch & Handoff",
      desc: "Production deployment on AWS/Cloudflare with SSL, automated CI/CD pipelines, domain setup, and 100% full source code & IP handoff.",
      metric: "Launch"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#05070D] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
              <span>Simple 5-Step Process</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">From Idea to Live Launch</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight text-balance">
              How We Turn Your Idea into a Live Product.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              No confusion, no technical headaches. We guide you through a step-by-step milestone delivery process with weekly progress updates.
            </p>
          </div>

          <Link
            to="/proposal"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 px-5 py-3 rounded-xl transition-all whitespace-nowrap self-start md:self-end shadow-sm"
          >
            <span>Estimate Timeline & Cost</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl bg-slate-50 dark:bg-[#090D17] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 relative group shadow-sm dark:shadow-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06]">
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">{step.num}</span>
                  <span className="text-[11px] font-mono text-slate-500">{step.metric}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.04] mt-6 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>Verified Deliverable</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
