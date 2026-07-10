import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Briefcase, 
  Scale, 
  Terminal, 
  Sparkles,
  Users2,
  Lock,
  LineChart,
  Network
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

// Multi-tier business optimization metrics for corporate pitches
const enterpriseMetrics = [
  { value: "99.99%", label: "Corporate Infrastructure Uptime", desc: "Enterprise cloud availability designed to protect continuous digital assets." },
  { value: "GDPR/ISO", label: "Regulatory Compliance Standards", desc: "Data protection baselines mapped to modern global privacy matrices." },
  { value: "Multi-Tier", label: "Role-Based Content Management", desc: "Granular administrative privileges built for enterprise internal teams." }
];

const technicalPillars = [
  {
    title: "Corporate Identity Portals",
    desc: "Premium, high-converting digital environments designed carefully to convey institutional authority, trust, and market leadership.",
    icon: <Building2 className="w-5 h-5 text-indigo-500" />,
    tag: "Enterprise-Grade"
  },
  {
    title: "Distributed Architecture Infrastructure",
    desc: "Assembled using modern component frameworks to ensure instant loading speeds while defending against high traffic fluctuations.",
    icon: <Network className="w-5 h-5 text-cyan-400" />,
    tag: "High-Availability"
  },
  {
    title: "Hardened Security Protocols",
    desc: "Utilizes advanced transport layers, zero-trust endpoint protection, and explicit access controls to shield internal digital intelligence.",
    icon: <Lock className="w-5 h-5 text-emerald-400" />,
    tag: "Compliant Framework"
  }
];

const operationalPipelines = [
  { step: "01", phase: "Corporate Discovery & Discovery", detail: "Analyzing stakeholder requirements, target profiles, and structural goals." },
  { step: "02", phase: "Information Hierarchy Layout", detail: "Developing clear navigational maps and unified database workflows." },
  { step: "03", phase: "High-Fidelity Engineering", detail: "Writing clean, modular, and accessible source code structures." },
  { step: "04", phase: "Strategic Cloud Onboarding", detail: "Launching secure continuous integration pipelines to redundant web clusters." }
];

const targetedSolutions = [
  { 
    title: "Enterprise Multi-Page Solutions", 
    useCase: "Comprehensive web footprints engineered with clean hierarchies for multinational corporate networks." 
  },
  { 
    title: "High-Conversion Lead Generation Systems", 
    useCase: "Tailored visual pathways integrated smoothly with major corporate CRM pipelines for high customer capture." 
  },
  { 
    title: "Stakeholder Reference Depositories", 
    useCase: "Fast, highly accessible, secure platforms designed to distribute financial and organizational portfolios." 
  }
];

export const BusinessWebService = () => {
  return (
    <PageLayout>
      <div id="business-web" className="min-h-screen bg-zinc-950 text-slate-200 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans selection:bg-indigo-500/30">
        
        {/* Elite Cybernetic Background Infrastructure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-25" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* SECTION HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={12} className="text-indigo-500" />
              <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase font-mono">
                Institutional Infrastructure Layer
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
              Business Web <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-normal">
              Move beyond fragile, template-driven designs. We build highly polished corporate solutions engineered for continuous global visibility, secure access, and supreme authority.
            </p>
          </motion.div>
        </div>

        {/* ENTERPRISE METRICS CONTROL GRID */}
        <div className="max-w-6xl mx-auto mb-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseMetrics.map((metric, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-900/80 shadow-2xl relative group hover:border-slate-800/40 transition-all">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl md:text-5xl font-extrabold text-indigo-500 tracking-tight mb-2 font-mono">{metric.value}</p>
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
              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">Corporate Architecture Standards</h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Replacing basic content nodes with secure, high-integrity digital channels.</p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest hidden md:inline-block">
              System_Status: Operational
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
                    <div className="p-3 bg-zinc-950 border border-slate-900 rounded-xl shadow-inner text-slate-400 group-hover:text-indigo-500 transition-colors">
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
                Corporate Layouts Tuned for Market Expansion
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                We organize secure corporate frameworks carefully tailored around structural compliance parameters, user demographics, and long-term scaling metrics.
              </p>
            </div>

            <div className="space-y-4">
              {targetedSolutions.map((sol, i) => (
                <div key={i} className="p-4 bg-slate-900/10 border border-slate-900/50 rounded-xl flex flex-col space-y-1 hover:border-slate-800/80 transition-all">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
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
                <Terminal size={14} className="text-indigo-500" />
                <span className="text-xs font-mono tracking-wider text-slate-500">corporate_pipeline.ts</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              </div>
            </div>

            <div className="space-y-3">
              {operationalPipelines.map((pipeline, i) => (
                <div key={i} className="flex items-start justify-between p-3.5 bg-zinc-950/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-all group">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-indigo-500 transition-colors mt-0.5">
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
              Establish Absolute Digital Authority
            </h3>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Connect with our enterprise digital engineers to map your operational requirements, deploy compliant layouts, and optimize company web assets.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-95 text-slate-950 font-bold text-xs md:text-sm px-6 py-3 rounded-lg transition-all shadow-xl shadow-indigo-500/5 group">
              <span className="text-white">Schedule Strategic System Audit</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform text-white" />
            </button>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};