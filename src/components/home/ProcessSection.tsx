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
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    stats: { label: "IP Ownership", value: "100% Client" }
  }
];

export const ProcessSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>(workflowSteps[0].id);
  const activeStep = workflowSteps.find((s) => s.id === activeStepId) || workflowSteps[0];

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // Trigger animations only once on scroll
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section 
      className="py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-cyan-100"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      
      {/* Background Electric Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-r from-[#00D2FF]/12 via-[#0066FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div 
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold text-cyan-700 shadow-xs">
              <Activity className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="uppercase tracking-wider">Agile Lifecycle</span>
              <span className="text-cyan-300">·</span>
              <span className="text-slate-500 font-medium">5-Stage Product Sprint</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              From Raw Concept to{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#0072FF] to-[#0284C7] bg-clip-text text-transparent">
                High-Performance Reality.
              </span>
            </h2>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Step into each phase below to inspect real-time architecture, design artifacts, code standards, and client deliverables.
            </p>
          </div>

          <Link
            to="/proposal"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#0066FF] hover:from-[#00bfe8] hover:to-[#0052cc] text-white font-bold text-xs uppercase tracking-wider font-mono shadow-[0_8px_25px_-5px_rgba(0,180,255,0.45)] hover:shadow-[0_12px_30px_-5px_rgba(0,150,255,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all whitespace-nowrap self-start lg:self-end border border-white/20 group cursor-pointer"
          >
            <span>Request Project Timeline</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Phase Selector Pills Carousel / Tabs */}
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
                    ? "bg-white border-cyan-400 shadow-[0_8px_25px_rgba(0,210,255,0.2)] scale-[1.02]"
                    : "bg-white/70 hover:bg-white border-slate-200/80 hover:border-cyan-200 text-slate-600"
                }`}
              >
                {isCurrent && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#0066FF]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-mono text-xs font-black ${isCurrent ? "text-[#00D2FF]" : "text-slate-400"}`}>
                    {step.stepNum}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">
                    {step.timeline}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-800 line-clamp-1">
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
              <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-cyan-200/80 shadow-[0_12px_35px_rgba(0,180,255,0.08)] space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold text-cyan-700">
                      <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                      <span>Phase {activeStep.stepNum} Execution</span>
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400">
                      Est. Turnaround: <strong className="text-slate-700">{activeStep.timeline}</strong>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug tracking-tight">
                    {activeStep.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeStep.summary}
                  </p>
                </div>

                {/* Deliverables Checklist Box */}
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0066FF]" />
                    <span>Mandatory Milestone Deliverables:</span>
                  </div>

                  <ul className="space-y-2.5">
                    {activeStep.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
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
                        className="px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200/60 text-[11px] font-mono font-semibold text-cyan-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        {activeStep.stats.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-slate-900">
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
                    spotlightColor="rgba(0, 210, 255, 0.25)"
                    borderColor="rgba(0, 150, 255, 0.45)"
                    enableTilt={false}
                    className="h-full p-4 rounded-3xl bg-white border border-cyan-200/70 shadow-[0_12px_35px_rgba(0,180,255,0.12)] flex flex-col justify-between overflow-hidden relative group"
                  >
                    {/* Photo Container with Top Neon Label */}
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[340px] w-full rounded-2xl overflow-hidden border border-slate-100">
                      <img
                        src={activeStep.heroImage}
                        alt={activeStep.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.98] contrast-[1.05]"
                        loading="lazy"
                      />

                      {/* Gradient Screen Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Floating Step Number Watermark */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-cyan-400/40 text-xs font-mono font-black text-[#00D2FF]">
                        PHASE {activeStep.stepNum}
                      </div>

                      {/* Image Caption Details Bottom Left */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 block mb-0.5">
                          Verified Process Workflow
                        </span>
                        <h4 className="text-base font-bold drop-shadow-md">
                          {activeStep.badge}
                        </h4>
                      </div>
                    </div>

                    {/* Micro Assurance Card */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-100 mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#00D2FF] to-[#0066FF] flex items-center justify-center text-white shadow-xs">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono text-slate-700">
                          Zero Vendor Lock-in SLA
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-cyan-700">
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