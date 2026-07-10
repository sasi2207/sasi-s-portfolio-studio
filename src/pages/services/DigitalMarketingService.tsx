import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  Sparkles,
  Target,
  Megaphone,
  TrendingUp,
  PieChart,
  Fingerprint
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

// High-fidelity performance marketing and growth tracking metrics
const enterpriseMetrics = [
  { value: "3.8x", label: "Average Platform ROAS Target", desc: "Engineered visual pipelines built explicitly to scale attribution loops." },
  { value: "100%", label: "First-Party Data Compliance", desc: "Hardened tracking parameters bypassing modern third-party cookie restrictions." },
  { value: "<200ms", label: "Pixel Payload Fire Speeds", desc: "Asynchronous data tracking script delivery preventing layout paint blocks." }
];

const technicalPillars = [
  {
    title: "Programmatic Traffic Systems",
    desc: "Deploying high-converting, asset-optimized marketing pathways built carefully to maintain conversion values during heavy ad spends.",
    icon: <Target className="w-5 h-5 text-orange-500" />,
    tag: "Performance Growth"
  },
  {
    title: "Advanced Event Telemetry",
    desc: "Custom integration with Meta Conversions API and Google Analytics 4 pipelines using secure, server-side data routing.",
    icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
    tag: "First-Party Sync"
  },
  {
    title: "Conversion Path Optimization",
    desc: "Clean structural schemas and component logic tailored for perfect layout shifts, maximizing real-world search engine relevance.",
    icon: <TrendingUp className="w-5 h-5 text-rose-400" />,
    tag: "CRO Optimization"
  }
];

const operationalPipelines = [
  { step: "01", phase: "Funnel Matrix Mapping", detail: "Structuring customer journeys, entry parameters, and programmatic lead loops." },
  { step: "02", phase: "Telemetry Script Integration", detail: "Deploying server-side event tags, identity tokens, and tracking nodes." },
  { step: "03", phase: "High-Volume Payload Auditing", detail: "Validating accurate attribution fires across multiple checkout variations." },
  { step: "04", phase: "Growth Loop Orchestration", detail: "Launching optimized web assets connected to real-time marketing dashboards." }
];

const targetedSolutions = [
  { 
    title: "Performance Campaign Landing Systems", 
    useCase: "Lightning-fast single-page frameworks engineered to retain quality scores and lower advertising bounce rates." 
  },
  { 
    title: "Automated Lead Capture Networks", 
    useCase: "Tailored input workflows that capture, scrub, and sync high-intent user profiles instantly to sales CRMs." 
  },
  { 
    title: "Data Attribution Dashboards", 
    useCase: "Custom visual telemetry configurations serving pure campaign performance data without database latency." 
  }
];

export const DigitalMarketingService = () => {
  return (
    <PageLayout>
      <div id="digital-marketing" className="min-h-screen bg-zinc-950 text-slate-200 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans selection:bg-orange-500/30">
        
        {/* Elite Cybernetic Background Infrastructure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-25" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* SECTION HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={12} className="text-orange-500" />
              <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase font-mono">
                Growth Engine Matrix
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
              Digital <span className="bg-gradient-to-r from-orange-400 via-rose-500 to-amber-500 bg-clip-text text-transparent">Marketing</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-normal">
              Stop bleeding ad spend on slow web infrastructure. We build high-performance growth architectures engineered to optimize conversion yields, fire tracking data instantly, and maximize your ROAS pipeline.
            </p>
          </motion.div>
        </div>

        {/* ENTERPRISE METRIC HUB */}
        <div className="max-w-6xl mx-auto mb-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseMetrics.map((metric, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-900/80 shadow-2xl relative group hover:border-slate-800/40 transition-all">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl md:text-5xl font-extrabold text-orange-500 tracking-tight mb-2 font-mono">{metric.value}</p>
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
              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">Performance Engineering Standards</h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Replacing basic page structures with data-compliant conversion funnels.</p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest hidden md:inline-block">
              Attribution_Node: Active
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
                    <div className="p-3 bg-zinc-950 border border-slate-800 rounded-xl shadow-inner text-slate-400 group-hover:text-orange-500 transition-colors">
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
                Growth Infrastructures Engineered for Scale
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                We develop clean attribution setups meticulously built to maintain user tracking accuracy, bypass browser data blockers, and scale client conversion rates.
              </p>
            </div>

            <div className="space-y-4">
              {targetedSolutions.map((sol, i) => (
                <div key={i} className="p-4 bg-slate-900/10 border border-slate-900/50 rounded-xl flex flex-col space-y-1 hover:border-slate-800/80 transition-all">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
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
                <Terminal size={14} className="text-orange-500" />
                <span className="text-xs font-mono tracking-wider text-slate-500">telemetry_config.ts</span>
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
                    <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-orange-500 transition-colors mt-0.5">
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
              Accelerate Your Acquisition Funnel
            </h3>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Connect with our digital optimization engineers to audit your advertising infrastructure, establish first-party server data routing, and scale on-site conversion metrics.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-600 hover:opacity-95 text-slate-950 font-bold text-xs md:text-sm px-6 py-3 rounded-lg transition-all shadow-xl shadow-orange-500/5 group">
              <span className="text-white">Request Conversion Strategy Audit</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform text-white" />
            </button>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};