import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  Sparkles,
  CreditCard,
  Package,
  Activity,
  Zap,
  BarChart3
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

// Multi-tier digital retail performance benchmarks
const enterpriseMetrics = [
  { value: "99.99%", label: "Checkout Pipeline Availability", desc: "Redundant cloud database clusters designed to prevent cart dropouts." },
  { value: "PCI-DSS", label: "Security Compliance Grade", desc: "Hardened payment structures meeting strict global digital financial standards." },
  { value: "<250ms", label: "Cart State Synchronization", desc: "Instant product updates using client-side reactive storage layers." }
];

const technicalPillars = [
  {
    title: "High-Conversion Storefronts",
    desc: "Pre-rendered catalog layouts designed for near-instant rendering speeds, directly minimizing customer drops and bounce rates.",
    icon: <ShoppingCart className="w-5 h-5 text-emerald-500" />,
    tag: "Headless E-Com"
  },
  {
    title: "Secure Payment Gateways",
    desc: "Smooth integration with Stripe, Razorpay, and subscription nodes using encrypted webhooks and transaction layers.",
    icon: <CreditCard className="w-5 h-5 text-cyan-400" />,
    tag: "Encrypted Vault"
  },
  {
    title: "Live Inventory Metrics",
    desc: "Robust backends built to coordinate item stocks, variant states, and transactional ledgers simultaneously without overlap.",
    icon: <Package className="w-5 h-5 text-teal-400" />,
    tag: "ACID Compliant"
  }
];

const operationalPipelines = [
  { step: "01", phase: "Catalog & Schema Structuring", detail: "Structuring variant graphs, attribute architectures, and tax configurations." },
  { step: "02", phase: "Secure Vault & Cart Assembly", detail: "Developing payment paths, token handling, and multi-currency calculation nodes." },
  { step: "03", phase: "Concurrency Optimization Testing", detail: "Stress testing inventory registers against high concurrent transaction traffic." },
  { step: "04", phase: "Automated Continuous Deployment", detail: "Launching secure edge deployments connected directly to real-time administrative dashboards." }
];

const targetedSolutions = [
  { 
    title: "Headless Retail Platforms", 
    useCase: "Decoupled frontend systems pulling catalog data via fast graph APIs for extreme web performance." 
  },
  { 
    title: "Multi-Variant Storefront Systems", 
    useCase: "Engineered cleanly to support complex product specifications, localized pricing levels, and SKU matrix tracking." 
  },
  { 
    title: "Digital Product Distribution Hubs", 
    useCase: "Automated, secure file delivery platforms featuring time-sensitive access token allocations." 
  }
];

export const EcommerceWebService = () => {
  return (
    <PageLayout>
      <div id="ecommerce" className="min-h-screen bg-slate-950 text-slate-200 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans selection:bg-emerald-500/30">
        
        {/* Elite Cybernetic Background Infrastructure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-25" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* SECTION HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={12} className="text-emerald-500" />
              <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase font-mono">
                Transaction Engine Layer
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
              E-Commerce <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">Applications</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-normal">
              Move past slow, standard template setups. We engineer ultra-fast digital retail applications designed for continuous scale, lightning-fast product loading, and high transactional security.
            </p>
          </motion.div>
        </div>

        {/* ENTERPRISE METRICS CONTROL GRID */}
        <div className="max-w-6xl mx-auto mb-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseMetrics.map((metric, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-900/80 shadow-2xl relative group hover:border-slate-800/40 transition-all">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl md:text-5xl font-extrabold text-emerald-500 tracking-tight mb-2 font-mono">{metric.value}</p>
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
              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">Digital Retail Architecture Standards</h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Trading sluggish shopping carts for modern full-stack performance.</p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest hidden md:inline-block">
              Transaction_Node: Safe
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
                    <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl shadow-inner text-slate-400 group-hover:text-emerald-500 transition-colors">
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
                Engineered for High-Frequency Digital Commerce
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                We develop fast storefront frameworks carefully configured around custom checkouts, automated invoice delivery networks, and third-party warehouse tracking nodes.
              </p>
            </div>

            <div className="space-y-4">
              {targetedSolutions.map((sol, i) => (
                <div key={i} className="p-4 bg-slate-900/10 border border-slate-900/50 rounded-xl flex flex-col space-y-1 hover:border-slate-800/80 transition-all">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
                <Terminal size={14} className="text-emerald-500" />
                <span className="text-xs font-mono tracking-wider text-slate-500">ecommerce_pipeline.ts</span>
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
                    <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-emerald-500 transition-colors mt-0.5">
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
              Scale Your Online Revenue Safely
            </h3>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Connect with our retail architecture engineers to outline your custom stock matrices, embed fast payment gateways, and launch a conversion-optimized store.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 text-slate-950 font-bold text-xs md:text-sm px-6 py-3 rounded-lg transition-all shadow-xl shadow-emerald-500/5 group">
              <span className="text-white">Initialize E-Commerce Strategy Session</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform text-white" />
            </button>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};