import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  Sparkles,
  BookOpen,
  Monitor,
  Users,
  Award,
  Network
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

// Academic and institutional infrastructure performance benchmarks
const enterpriseMetrics = [
  { value: "99.98%", label: "Lab Environment Uptime", desc: "Redundant virtual desktop infrastructures providing reliable workspace provisioning." },
  { value: "Real-Time", label: "Student Telemetry Tracking", desc: "Instant assessment and progress sync parameters feeding into administrative hubs." },
  { value: "Zero-Trust", label: "Exam Integrity Frameworks", desc: "Hardened browser virtualization layers defending against academic bypass mechanisms." }
];

const technicalPillars = [
  {
    title: "Virtual Lab Orchestration",
    desc: "Isolated code sandboxes, simulation instances, and learning environments pre-loaded instantly onto student viewports via clean container pipelines.",
    icon: <Monitor className="w-5 h-5 text-amber-500" />,
    tag: "Sandbox Infrastructure"
  },
  {
    title: "Unified Curriculum Matrices",
    desc: "ACID-compliant, relational data structures engineered to distribute complex multimedia assets, lecture notes, and automated grading modules.",
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
    tag: "Distributed CMS"
  },
  {
    title: "Granular Identity & RBAC",
    desc: "Implements strict role-based access tokens to cleanly partition administrative controllers, teacher evaluation tools, and student portals.",
    icon: <Users className="w-5 h-5 text-orange-400" />,
    tag: "Multi-Tenant Control"
  }
];

const operationalPipelines = [
  { step: "01", phase: "Institutional Schema Discovery", detail: "Analyzing course workflows, grading parameters, and concurrent student capacity limits." },
  { step: "02", phase: "Portal & DB Architecture Launch", detail: "Assembling reactive dashboard states, authentication tunnels, and dynamic asset pools." },
  { step: "03", phase: "Concurrent Load & Testing Audits", detail: "Subjecting exam engines to high synthetic traffic spikes to evaluate data retention under load." },
  { step: "04", phase: "Production Enterprise Staging", detail: "Deploying the learning architecture to resilient cloud nodes with clean administrative handover." }
];

const targetedSolutions = [
  { 
    title: "Multi-Branch Enterprise Portals", 
    useCase: "Centralized operational networks designed to manage rosters, analytical reporting, and billing across several regional centers." 
  },
  { 
    title: "Interactive Virtual Coding Labs", 
    useCase: "Pre-configured technical execution containers rendering code compilation inputs inside the browser window smoothly." 
  },
  { 
    title: "High-Concurrency Assessment Blocks", 
    useCase: "Pre-rendered, state-cached assessment paths optimized to handle thousands of simultaneous test submissions reliably." 
  }
];

export const CoachingCenterLabsService = () => {
  return (
    <PageLayout>
      <div id="coaching-center-labs" className="min-h-screen bg-slate-950 text-slate-200 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans selection:bg-amber-500/30">
        
        {/* Elite Cybernetic Background Infrastructure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-25" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* SECTION HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={12} className="text-amber-500" />
              <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase font-mono">
                Academic Operations Matrix
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
              Coaching Center <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">Labs</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-normal">
              Ditch fragile, paper-bound training systems. We design high-performance learning architectures engineered to automate infrastructure assignments, unify data metrics, and scale training programs safely.
            </p>
          </motion.div>
        </div>

        {/* ENTERPRISE METRIC HUB */}
        <div className="max-w-6xl mx-auto mb-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseMetrics.map((metric, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-900/80 shadow-2xl relative group hover:border-slate-800/40 transition-all">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl md:text-5xl font-extrabold text-amber-500 tracking-tight mb-2 font-mono">{metric.value}</p>
                <p className="text-xs font-bold text-slate-200 mb-1.5 uppercase font-mono tracking-wide">{metric.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNICAL PILLARS GRID */}
        <div className="max-w-6xl mx-auto mb-32 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-slate-900 pb-6">
            <div>
              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">EdTech Engineering Standards</h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Trading manual logbooks for responsive cloud-provisioned student hubs.</p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest hidden md:inline-block">
              Environment_Node: Secure
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalPillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-slate-900/20 border border-slate-900/60 p-8 rounded-2xl flex flex-col justify-between hover:border-slate-800/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl shadow-inner text-slate-400 group-hover:text-amber-500 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider bg-slate-900 border border-slate-800/80 px-2.5 py-0.5 rounded text-slate-500">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2.5 tracking-tight group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WORKFLOW MATRIX PANEL */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32 relative z-10">
          
          {/* TARGET SYSTEM ENVIRONMENTS */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Academic Platforms Configured for High Throughput
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                We develop advanced student systems carefully architected around unified metric schemas, high-availability video nodes, and robust grading automation protocols.
              </p>
            </div>

            <div className="space-y-4">
              {targetedSolutions.map((sol, i) => (
                <div key={i} className="p-4 bg-slate-900/10 border border-slate-900/50 rounded-xl flex flex-col space-y-1 hover:border-slate-800/80 transition-all">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {sol.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed pl-3.5">{sol.useCase}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CODE TERMINAL SIMULATION GRAPHIC */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-900/50 border border-slate-900/80 rounded-2xl p-6 text-white shadow-2xl relative"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-900/80">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-amber-500" />
                <span className="text-xs font-mono tracking-wider text-slate-500">lab_provisioning.ts</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              </div>
            </div>

            <div className="space-y-3">
              {operationalPipelines.map((pipeline, i) => (
                <div key={i} className="flex items-start justify-between p-3.5 bg-slate-950/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-all group">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-amber-500 transition-colors mt-0.5">
                      {pipeline.step}
                    </span>
                    <div>
                      <p className="text-xs md:text-sm font-bold text-slate-300 group-hover:text-slate-100 transition-colors">{pipeline.phase}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">{pipeline.detail}</p>
                    </div>
                  </div>
                  <ArrowRight size={12} className="text-slate-800 group-hover:translate-x-1 transition-all group-hover:text-slate-500 mt-1 flex-shrink-0" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CALL TO ACTION */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-gradient-to-b from-slate-900/80 to-slate-950/40 p-8 md:p-14 rounded-2xl text-center border border-slate-900 shadow-2xl relative overflow-hidden">
            <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-3">
              Digitize Your Academic Framework Uncompromisingly
            </h3>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Connect with our principal EdTech software architects to blueprint your custom curriculum matrix, orchestrate sandbox environments, and maximize organizational efficiency.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-95 text-slate-950 font-bold text-xs md:text-sm px-6 py-3 rounded-lg transition-all shadow-xl shadow-amber-500/5 group">
              <span className="text-white">Request Academic Strategy Blueprint</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform text-white" />
            </button>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};