import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, RefreshCw, Layers, Sparkles, Terminal, ArrowRight, Server, Flame } from 'lucide-react';

// Global layout template wrapper
import { Layout as PageLayout } from "@/components/layout/Layout";

// Custom Mock API Response Data Model (Dynamic Data Simulation)
const DYNAMIC_SERVICES_DATA = [
  {
    id: "srv-01",
    title: "Real-time API Hydration",
    category: "BACKEND PIPELINE",
    status: "Active System",
    latency: "14ms",
    desc: "Fetches user records and live cloud database queries instantly on component mount cycles.",
    features: ["REST/GraphQL endpoints", "JWT Session validation", "Auto-revalidation caching"]
  },
  {
    id: "srv-02",
    title: "Serverless Compute Nodes",
    category: "COMPUTE ENGINES",
    status: "Scaling Auto",
    latency: "8ms",
    desc: "Executes micro-services on isolated serverless platforms to handle unlimited heavy user traffic flows.",
    features: ["Edge execution logs", "Runtime environment sandboxing", "Cold start under 20ms"]
  },
  {
    id: "srv-03",
    title: "Global State Management",
    category: "APPLICATION STATE",
    status: "Synced Global",
    latency: "0ms",
    desc: "Keeps client-side data variables unified across multiple route channels and local application storages.",
    features: ["Zustand Context maps", "Real-time socket broadcasts", "Offline storage local storage syncing"]
  }
];

export default function DynamicWebsite() {
  // Dynamic State Managers
  const [activeTab, setActiveTab] = useState<string>("srv-01");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [liveCounter, setLiveCounter] = useState<number>(314);

  // Simple API Simulation trigger
  const triggerDataRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLiveCounter(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 800);
  };

  // Standard smooth view slide effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  // Find currently selected live data element
  const currentActiveService = DYNAMIC_SERVICES_DATA.find(s => s.id === activeTab) || DYNAMIC_SERVICES_DATA[0];

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
          
          {/* 1. DYNAMIC HERO SECTION WITH LIVE DATA HUD */}
          <section className="text-center pt-10 pb-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              {/* Live HUD Counter Badge */}
              <div className="inline-flex items-center gap-3 bg-neutral-950 border border-neutral-900 rounded-full py-1.5 px-4 text-xs font-mono">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-neutral-400">LIVE SERVER TRANSACTIONS:</span>
                <span className="text-orange-500 font-bold tracking-wider">{liveCounter} req/s</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight max-w-4xl mx-auto leading-none">
                Engineered for <span className="text-orange-500">Dynamic Cloud</span> Databases
              </h1>
              
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
                Connect live API gateways, fetch serverless functions instantaneously, and manage application status dynamically with raw rendering speeds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-orange-500 text-black font-bold px-8 py-4 flex items-center justify-center gap-2 tracking-wide hover:bg-orange-600 transition-colors"
                >
                  INITIALIZE PLATFORM <ArrowRight size={16} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={triggerDataRefresh}
                  className="w-full sm:w-auto bg-neutral-950 border border-neutral-900 hover:border-neutral-800 text-neutral-300 font-medium px-8 py-4 flex items-center justify-center gap-2 transition-all"
                >
                  <RefreshCw size={16} className={isRefreshing ? "animate-spin text-orange-500" : ""} />
                  RE-FETCH API METRICS
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* 2. LIVE DASHBOARD TABBED INTERFACE LAYOUT (Interactive Dynamic Module) */}
          <section className="bg-neutral-950 border border-neutral-900 p-6 sm:p-8 rounded-xl relative">
            <div className="absolute top-0 left-12 w-24 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              
              {/* Left Column: Interactive State Tab Selectors */}
              <div className="w-full lg:w-2/5 flex flex-col gap-3 justify-center">
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-orange-500 tracking-widest block uppercase">DYNAMIC CONTROLLER</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">Select System Core</h3>
                </div>

                {DYNAMIC_SERVICES_DATA.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 relative group overflow-hidden ${
                      activeTab === tab.id 
                        ? 'bg-neutral-900/60 border-orange-500/40 text-white' 
                        : 'bg-black/40 border-neutral-900 text-neutral-500 hover:border-neutral-800 hover:text-neutral-300'
                    }`}
                  >
                    {/* Active tab structural border layout marker using Framer Motion layoutId */}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTabMarker" 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-wider">{tab.category}</span>
                      <span className={`text-[10px] px-2 py-0.5 font-mono ${activeTab === tab.id ? 'text-orange-400 bg-orange-500/10' : 'text-neutral-600'}`}>{tab.latency}</span>
                    </div>
                    <h4 className="text-sm font-bold uppercase mt-1 tracking-wide group-hover:text-white transition-colors">{tab.title}</h4>
                  </button>
                ))}
              </div>

              {/* Right Column: Dynamic Content Box mapping AnimatePresence for content transitions */}
              <div className="w-full lg:w-3/5 bg-black border border-neutral-900 p-6 rounded-lg flex flex-col justify-between min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentActiveService.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-900 pb-4">
                      <div>
                        <span className="text-orange-500 text-[10px] font-mono tracking-widest uppercase block">{currentActiveService.id} // CONFIG</span>
                        <h3 className="text-lg font-black uppercase tracking-wide mt-0.5">{currentActiveService.title}</h3>
                      </div>
                      <div className="bg-neutral-950 border border-neutral-800 text-neutral-400 text-xs px-3 py-1 font-mono rounded">
                        STATUS: <span className="text-green-400 font-bold">{currentActiveService.status}</span>
                      </div>
                    </div>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                      {currentActiveService.desc}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-2">
                        <Terminal size={14} className="text-orange-500" /> Environment Capabilities:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-400 font-mono">
                        {currentActiveService.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 bg-neutral-950 p-2 border border-neutral-900/60 rounded">
                            <span className="text-orange-500">⚡</span> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Server execution: Node.js 20.x</span>
                  <span className="text-orange-500/70 hover:text-orange-500 cursor-pointer transition-colors">Access Console log →</span>
                </div>
              </div>

            </div>
          </section>

          {/* 3. CORE DYNAMIC PROPERTIES LAYER (Interactive Scale Cards) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Database size={22} />, title: "Relational Mapping", desc: "Instantly links with PostgreSQL or MongoDB databases with clean schema protocols." },
              { icon: <Server size={22} />, title: "Serverless Deployment", desc: "No manual clusters setup. Application endpoints scale instantly to load pressure points." },
              { icon: <Flame size={22} />, title: "Isomorphic Caching", desc: "Blends lightning static pages with dynamic state hydration rules perfectly." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, borderColor: 'rgba(249,115,22,0.4)' }}
                className="bg-neutral-950 border border-neutral-900 p-6 flex flex-col justify-between group rounded-lg transition-all duration-300"
              >
                <div>
                  <div className="mb-4 text-orange-500 bg-neutral-900 w-11 h-11 flex items-center justify-center rounded-md border border-neutral-800 group-hover:border-orange-500/40 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wide mb-2 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">{feature.desc}</p>
                </div>
                <div className="mt-6 text-[11px] font-mono text-neutral-600 group-hover:text-orange-500 transition-colors flex items-center gap-1">
                  View API Blueprint <span>→</span>
                </div>
              </motion.div>
            ))}
          </section>

        </div>
      </div>
    </PageLayout>
  );
}