import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  ShieldAlert, 
  Terminal, 
  Activity, 
  Cpu, 
  LifeBuoy,
  ArrowRight,
  Zap,
  Lock
} from 'lucide-react';

// Neenga sonna dynamic system layout component import
import { Layout as PageLayout } from "@/components/layout/Layout";

export default function MaintenanceSupportServices() {
  
  // Elements structural animation (Simple AOS scroll-view effect)
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
          
          {/* 1. HERO SECTION */}
          <section className="text-center pt-10 pb-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="inline-block text-orange-500 text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-4 py-1.5 rounded-full mb-6 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                24/7 Production Reliability & SLA Care
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-black uppercase mb-4 tracking-tight">
                We Maintain & Bulletproof <span className="text-orange-500">Your Systems</span>
              </h1>
              
              <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-8 font-light">
                Code write panrathu mattum illa—ungaloada apps, platforms, and databases crash aagama, safe-ah runtime errors debug panni optimize panrom.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-orange-500 text-black font-bold px-8 py-4 flex items-center justify-center gap-2 group transition-colors hover:bg-orange-600"
                >
                  SECURE AN SLA PARTNER <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, borderColor: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent border border-neutral-800 text-neutral-400 hover:text-white px-8 py-4 transition-all"
                >
                  READ INCIDENT PROTOCOLS
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* 2. CORE MAINTENANCE BENCHMARKS (With Orange Border Hover Glow) */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase">
                System Stability <span className="text-orange-500">Metrics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "< 15m", title: "Critical Response SLA", desc: "Production breakdown hot-fixes-ai instant-ah handle panna structural on-call support team loops sync panrom." },
                { number: "99.9%", title: "Proactive Health Check", desc: "Errors and background memory leaks manual-ah support pannama automated monitoring scripts alerts run panrom." },
                { number: "Zero", title: "Legacy Tech Debt", desc: "Dependency node libraries backend structural elements patch packages update panni constant-ah secure panrom." }
              ].map((prop, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -8, borderColor: '#f97316' }}
                  className="bg-neutral-950 border border-neutral-900 p-8 text-center transition-all duration-300 rounded-lg shadow-xl"
                >
                  <div className="text-4xl font-black text-orange-500 mb-2">{prop.number}</div>
                  <h3 className="text-sm font-bold uppercase text-white mb-2 tracking-wide">{prop.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{prop.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3. MAINTENANCE ACTIONS MATRIX (With Card Hover Scale & Icon Rotations) */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase">
                Yenna Yenna <span className="text-orange-500">Develop Panrom?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Wrench size={24} />, title: "Continuous Code Patching", desc: "Framework runtime layers upgradation, broken logic optimization, layouts bug clean-ups structural stability maintain panrom." },
                { icon: <ShieldAlert size={24} />, title: "Emergency Security Audits", desc: "Vulnerability injections check panni dynamic security headers hot-fixes instantly backend clusters-la push panrom." },
                { icon: <Activity size={24} />, title: "Server Performance Profiling", desc: "Database memory query deadlocks trace panni optimization algorithms design panrom for premium data flows." },
                { icon: <Terminal size={24} />, title: "Automated Backup Structuring", desc: "Data corruption failover models avoid panna encrypted cloud isolated multi-region vault snapshot setups sync panrom." },
                { icon: <Cpu size={24} />, title: "Refactoring Legacy Engines", desc: "Old systems rendering layout blockages avoid panna code components rewrite cycles layout structures modernise panrom." },
                { icon: <LifeBuoy size={24} />, title: "DevOps & Core Infrastructure Support", desc: "Cloud resource scale limits monitor panni load balancers orchestration patterns 24/7 surveillance-la stream panrom." }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, backgroundColor: '#0a0a0a', borderColor: 'rgba(249,115,22,0.3)' }}
                  className="bg-neutral-950 border border-neutral-900 p-6 flex flex-col items-center text-center rounded-lg transition-colors group duration-300"
                >
                  <div className="mb-4 bg-neutral-900 p-4 rounded-md group-hover:bg-orange-500 group-hover:text-black text-orange-500 transition-all duration-300 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 4. CALL TO ACTION (CTA BOX) */}
          <section>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              className="bg-neutral-950 border border-neutral-900 p-10 text-center max-w-3xl mx-auto rounded-xl relative overflow-hidden group hover:border-orange-500/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/10 transition-colors pointer-events-none" />
              
              <h2 className="text-xl sm:text-2xl font-bold uppercase mb-2">Systems losing velocity or facing frequent crashes?</h2>
              <p className="text-xs text-neutral-400 mb-6">Let's deploy premium infrastructure profiling algorithms and isolate security deadlocks today.</p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-extrabold px-8 py-3.5 text-xs uppercase tracking-wider hover:bg-orange-500 hover:text-black transition-colors"
              >
                Initiate Systems Infrastructure Audit
              </motion.button>
            </motion.div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}