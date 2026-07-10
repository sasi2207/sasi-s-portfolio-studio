import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  Sparkles,
  Server,
  Activity,
  GitBranch,
  Radio,
  Workflow
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

// Multi-tier cloud hosting performance benchmarks
const enterpriseMetrics = [
  { value: "99.999%", label: "High-Availability SLA Target", desc: "Automated failover clusters routing traffic dynamically across active zones." },
  { value: "Global", label: "Multi-Region Core Topology", desc: "Decentralized delivery layers serving asset payloads from closest nodes." },
  { value: "<15 Min", label: "Disaster Recovery Window", desc: "Continuous state snap-shotting for near-instant system point restoration." }
];

const technicalPillars = [
  {
    title: "Continuous Integration Pipelines",
    desc: "Automated push-to-deploy Git pathways wrapped with continuous linting, vulnerability screening, and unit test checks.",
    icon: <GitBranch className="w-5 h-5 text-cyan-500" />,
    tag: "DevOps Automated"
  },
  {
    title: "Hardened Virtual Infrastructure",
    desc: "Isolated server environments secured via private subnets, explicit network ACLs, and adaptive firewall rules.",
    icon: <Server className="w-5 h-5 text-blue-400" />,
    tag: "Isolated VPC"
  },
  {
    title: "Real-Time Telemetry Tracking",
    desc: "Live system vitals, request rates, error logs, and bandwidth utilization metrics stream cleanly into an analytical hub.",
    icon: <Radio className="w-5 h-5 text-emerald-400" />,
    tag: "Continuous Audit"
  }
];

const operationalPipelines = [
  { step: "01", phase: "Cloud Architecture Layout", detail: "Mapping out secure server nodes, data volumes, and load balancing routers." },
  { step: "02", phase: "CI/CD Pipeline Setup", detail: "Writing strict build automation shell workflows and setting secret tokens." },
  { step: "03", phase: "Simulated Stress Testing", detail: "Subjecting active endpoints to synthetic volume spikes to evaluate scaling rules." },
  { step: "04", phase: "Production Cluster Handover", detail: "Transitioning DNS routing over to high-availability servers under zero-downtime rules." }
];

const targetedSolutions = [
  { 
    title: "Containerized Microservices Hosting", 
    useCase: "Isolated scalable application nodes running smoothly on secure enterprise clusters." 
  },
  { 
    title: "Global Edge Content Delivery", 
    useCase: "Static asset maps pushed straight into distributed cache nodes for rapid local paint benchmarks." 
  },
  { 
    title: "Secure Enterprise Server Setups", 
    useCase: "Dedicated single-tenant cloud networks custom configured for strict computational safety requirements." 
  }
];

export const DeploymentHostingService = () => {
  return (
    <PageLayout>
      <div id="deployment-hosting" className="min-h-screen bg-slate-950 text-slate-200 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans selection:bg-cyan-500/30">
        
        {/* Elite Cybernetic Background Infrastructure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-25" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* SECTION HEADER */}
        <div className="max-w-6xl mx-auto text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles size={12} className="text-cyan-500" />
              <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase font-mono">
                Infrastructure & Cloud Layer
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
              Deployment & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Hosting</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-normal">
              Eliminate unpredictable cloud configurations. We design resilient DevOps automation models and deploy your web platforms across high-availability server clusters built to survive massive scale.
            </p>
          </motion.div>
        </div>

        {/* ENTERPRISE METRIC HUB */}
        <div className="max-w-6xl mx-auto mb-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseMetrics.map((metric, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-900/80 shadow-2xl relative group hover:border-slate-800/40 transition-all">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl md:text-5xl font-extrabold text-cyan-500 tracking-tight mb-2 font-mono">{metric.value}</p>
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
              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">Cloud Optimization Standards</h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Replacing unmonitored baseline servers with secure multi-tier ecosystems.</p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest hidden md:inline-block">
              VPC_Status: Active
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
                    <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl shadow-inner text-slate-400 group-hover:text-cyan-500 transition-colors">
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
                Architectures Provisioned for Uncompromising Scale
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                We craft automated cluster blueprints built carefully to support instant build tracking, resource isolating safety frames, and secure global data routes.
              </p>
            </div>

            <div className="space-y-4">
              {targetedSolutions.map((sol, i) => (
                <div key={i} className="p-4 bg-slate-900/10 border border-slate-900/50 rounded-xl flex flex-col space-y-1 hover:border-slate-800/80 transition-all">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
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
                <Terminal size={14} className="text-cyan-500" />
                <span className="text-xs font-mono tracking-wider text-slate-500">orchestration_flow.yml</span>
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
                    <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-cyan-500 transition-colors mt-0.5">
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
              Optimize Your Global Cloud Footprint
            </h3>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Connect with our enterprise DevOps engineers to blueprint your network topography, construct secure continuous build tunnels, and scale your application delivery nodes.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-slate-950 font-bold text-xs md:text-sm px-6 py-3 rounded-lg transition-all shadow-xl shadow-cyan-500/5 group">
              <span className="text-white">Request Infrastructure System Audit</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform text-white" />
            </button>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};