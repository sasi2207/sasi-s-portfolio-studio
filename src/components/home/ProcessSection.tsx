import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Rocket, 
  Terminal,
  Activity,
  CheckCircle,
  ExternalLink,
  Zap
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TiltedCard } from "@/components/ui/tilted-card";

interface WorkflowStep {
  id: string;
  stepNum: string;
  badge: string;
  title: string;
  summary: string;
  timeline: string;
  deliverables: string[];
  techTags: string[];
  heroImage: string;
  stats: { label: string; value: string };
}

const workflowSteps: WorkflowStep[] = [
  {
    id: "step-1",
    stepNum: "01",
    badge: "Architecture & Blueprint",
    title: "Technical Discovery & Schema Engineering",
    summary: "Translating business vision into hardened system schemas, database ER models, API route contracts, and explicit milestone deliverables.",
    timeline: "Days 1–3",
    deliverables: [
      "Entity Relationship (ER) & Relational DB Schema",
      "Microservice & REST/GraphQL API specifications",
      "Fixed-scope sprint timeline and pricing document"
    ],
    techTags: ["PostgreSQL", "FastAPI", "Database Architecture"],
    heroImage: "/images/workflow/step-01-discovery.png",
    stats: { label: "Scope Accuracy", value: "100% Fixed" }
  },
  {
    id: "step-2",
    stepNum: "02",
    badge: "UX/UI Design Sprint",
    title: "Interactive Prototyping & Design Systems",
    summary: "Engineered Figma workflows with accessible typography, responsive breakpoints, kinetic animations, and micro-interactions tested prior to code.",
    timeline: "Week 1",
    deliverables: [
      "Clickable end-to-end interactive desktop/mobile prototype",
      "Tailwind-ready design token library & UI component kit",
      "WCAG 2.1 accessible color palette & typography hierarchy"
    ],
    techTags: ["Figma", "Design Tokens", "Wireframing"],
    heroImage: "/images/workflow/step-02-prototyping.png",
    stats: { label: "Fidelity", value: "Pixel-Perfect" }
  },
  {
    id: "step-3",
    stepNum: "03",
    badge: "Agile Development",
    title: "Clean Full-Stack & Modular Code Delivery",
    summary: "Writing clean, type-safe React, Next.js, and Node/FastAPI code with decoupled micro-services, secure JWT authorization, and optimal query indexing.",
    timeline: "Weeks 2–4",
    deliverables: [
      "Modular Next.js / React application with zero bloat",
      "Role-based authentication & encrypted data pipelines",
      "Live staging URL updated at every weekly milestone"
    ],
    techTags: ["React.js", "TypeScript", "Next.js", "Tailwind"],
    heroImage: "/images/workflow/step-03-engineering.png",
    stats: { label: "Code Quality", value: "Strict TS" }
  },
  {
    id: "step-4",
    stepNum: "04",
    badge: "Vitals & Hardening",
    title: "Automated QA & Core Web Vitals Audits",
    summary: "Multi-device viewport testing, end-to-end regression validation, penetration defense audits, and tuning for sub-second 95+ Google Web Vitals.",
    timeline: "Week 4",
    deliverables: [
      "Sub-second (<0.8s) FCP & 95+ Google Lighthouse report",
      "Cross-browser and mobile device compatibility audit",
      "OWASP top-10 security checklist & data sanitization"
    ],
    techTags: ["Lighthouse 95+", "Playwright", "Cyber Audit"],
    heroImage: "/images/workflow/step-04-testing.png",
    stats: { label: "Performance", value: "<0.8s FCP" }
  },
  {
    id: "step-5",
    stepNum: "05",
    badge: "Production Launch",
    title: "Edge Cloud Deployment & Full IP Transfer",
    summary: "Automated CI/CD deployment pipelines on Cloudflare and AWS with SSL, enterprise DNS propagation, and complete GitHub repository handoff.",
    timeline: "Launch Day",
    deliverables: [
      "Live deployment on global CDN with SSL certificate",
      "Complete Git repository & intellectual property transfer",
      "30-day post-launch warranty & 24/7 uptime monitoring"
    ],
    techTags: ["AWS", "Cloudflare Edge", "CI/CD Actions"],
    heroImage: "/images/workflow/step-05-deployment.png",
    stats: { label: "IP Ownership", value: "100% Client" }
  }
];

export const ProcessSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>(workflowSteps[0].id);
  const activeStep = workflowSteps.find((s) => s.id === activeStepId) || workflowSteps[0];

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section 
      className="py-28 bg-[#F5F8FF] relative overflow-hidden border-b border-slate-200/80"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Background Brand Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-r from-[#00E5FF]/10 via-[#0061FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div 
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#66CCFF]/40 text-xs font-mono font-bold text-[#0061FF] shadow-xs">
              <Activity className="w-3.5 h-3.5 text-[#0061FF]" />
              <span className="uppercase tracking-wider">Agile Lifecycle</span>
              <span className="text-[#00E5FF]">·</span>
              <span className="text-[#64748B] font-medium">5-Stage Product Sprint</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              From Raw Concept to{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">
                High-Performance Reality.
              </span>
            </h2>

            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Step into each phase below to inspect real-time architecture, design artifacts, code standards, and client deliverables.
            </p>
          </div>

          <Link
            to="/proposal"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0061FF] hover:bg-[#0033CC] text-white font-bold text-xs uppercase tracking-wider font-mono shadow-[0_8px_25px_-5px_rgba(0,97,255,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all whitespace-nowrap self-start lg:self-end group cursor-pointer"
          >
            <span>Request Project Timeline</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Phase Selector Pills */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {workflowSteps.map((step) => {
            const isCurrent = step.id === activeStep.id;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                  isCurrent
                    ? "bg-white border-[#0061FF] shadow-[0_8px_25px_rgba(0,97,255,0.18)] scale-[1.02]"
                    : "bg-white/80 hover:bg-white border-slate-200 text-[#64748B] hover:border-[#66CCFF]"
                }`}
              >
                {isCurrent && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] to-[#0061FF]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-mono text-xs font-black ${isCurrent ? "text-[#0061FF]" : "text-slate-400"}`}>
                    {step.stepNum}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] font-semibold">
                    {step.timeline}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#111827] line-clamp-1">
                  {step.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento Display Console */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              
              {/* Left Bento Module: Content, Deliverables & Specs (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-[0_12px_35px_rgba(0,97,255,0.06)] space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FF] border border-[#66CCFF]/40 text-xs font-mono font-bold text-[#0061FF]">
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                      <span>Phase {activeStep.stepNum} Execution</span>
                    </div>

                    <span className="text-xs font-mono font-bold text-[#64748B]">
                      Est. Turnaround: <strong className="text-[#111827]">{activeStep.timeline}</strong>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#111827] leading-snug tracking-tight">
                    {activeStep.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {activeStep.summary}
                  </p>
                </div>

                {/* Deliverables Checklist Box */}
                <div className="p-5 rounded-2xl bg-[#F5F8FF] border border-slate-200 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0061FF]" />
                    <span>Mandatory Milestone Deliverables:</span>
                  </div>

                  <ul className="space-y-2.5">
                    {activeStep.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-[#111827]">
                        <CheckCircle2 className="w-4 h-4 text-[#0061FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tags & Metrics Strip */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activeStep.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#EAF5FF] border border-[#66CCFF]/30 text-[11px] font-mono font-bold text-[#0033CC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#64748B] block uppercase font-semibold">
                        {activeStep.stats.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-[#111827]">
                        {activeStep.stats.value}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Bento Module: Real-World Visual Context Frame (5 cols) */}
              <div className="lg:col-span-5 h-full">
                <TiltedCard
                  maxAngle={6}
                  scaleOnHover={1.02}
                  showGlare={true}
                  className="h-full"
                >
                  <SpotlightCard
                    spotlightColor="rgba(0, 229, 255, 0.15)"
                    borderColor="rgba(0, 97, 255, 0.4)"
                    enableTilt={false}
                    className="h-full p-4 rounded-3xl bg-white border border-slate-200 shadow-[0_12px_35px_rgba(0,97,255,0.08)] flex flex-col justify-between overflow-hidden relative group"
                  >
                    {/* Photo Container with Top Neon Label */}
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[340px] w-full rounded-2xl overflow-hidden border border-slate-100 bg-[#001B66]">
                      <img
                        src={activeStep.heroImage}
                        alt={activeStep.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to a solid tech visual if image fails to render
                          (e.currentTarget as HTMLImageElement).src = "/tech.png";
                        }}
                      />

                      {/* Gradient Screen Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001B66]/90 via-[#001B66]/30 to-transparent pointer-events-none" />

                      {/* Floating Step Number Watermark */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#001B66]/90 backdrop-blur-md border border-[#0061FF]/40 text-xs font-mono font-black text-[#00E5FF]">
                        PHASE {activeStep.stepNum}
                      </div>

                      {/* Image Caption Details Bottom Left */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E5FF] block mb-0.5 font-bold">
                          Verified Process Workflow
                        </span>
                        <h4 className="text-base font-bold drop-shadow-md">
                          {activeStep.badge}
                        </h4>
                      </div>
                    </div>

                    {/* Micro Assurance Card */}
                    <div className="p-4 rounded-2xl bg-[#EAF5FF] border border-[#66CCFF]/40 mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#0061FF] flex items-center justify-center text-white shadow-xs">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#001B66]">
                          Zero Vendor Lock-in SLA
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-[#0061FF]">
                        100% Code IP
                      </span>
                    </div>

                  </SpotlightCard>
                </TiltedCard>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;