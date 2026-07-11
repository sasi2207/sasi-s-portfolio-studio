import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Cpu, 
  Layers, 
  Zap, 
  Infinity, 
  Sparkles, 
  ArrowRight,
  CloudLightning,
  Fingerprint
} from 'lucide-react';

// Neenga sonna dynamic system layout component import
import { Layout as PageLayout } from "@/components/layout/Layout";

export default function AppDevelopmentService() {
  
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
                Native & Cross-Platform Mobility
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-black uppercase mb-4 tracking-tight">
                We Engineer Fluid <span className="text-orange-500">Mobile Applications</span>
              </h1>
              
              <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-8 font-light">
                Ungaloda ideas-ai premium iOS and Android applications-ah code panrom. From custom interactions to heavy background sync processing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-orange-500 text-black font-bold px-8 py-4 flex items-center justify-center gap-2 group transition-colors hover:bg-orange-600"
                >
                  START APP DISCOVERY <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, borderColor: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent border border-neutral-800 text-neutral-400 hover:text-white px-8 py-4 transition-all"
                >
                  EXPLORE BLUEPRINTS
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* 2. APP METRICS & BENCHMARKS (With Orange Border Hover Glow) */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase">
                Application <span className="text-orange-500">Standards</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "60 FPS", title: "Fluid UI Performance", desc: "Heavy thread rendering process optimized to maintain smooth layout gestures layout constraints." },
                { number: "Offline", title: "First Architecture", desc: "Local database engines caching data safely, syncing up automatically when internet reconnects." },
                { number: "Universal", title: "Single Base Code", desc: "React Native and Flutter architectures moolama single code base-la dual distribution reach tharom." }
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

          {/* 3. APP DEVELOPMENT MATRIX (With Card Hover Scale & Icon Rotations) */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase">
                Yenna Yenna <span className="text-orange-500">Develop Panrom?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Smartphone size={24} />, title: "Native iOS & Android Apps", desc: "Swift, Kotlin, and high-performance layout frameworks use panni customized luxury user interface build panrom." },
                { icon: <Layers size={24} />, title: "Cross-Platform Engines", desc: "Time and cost effect-ai maximize panna unified mobile layout parameters deploy panrom for dual platforms." },
                { icon: <CloudLightning size={24} />, title: "Real-time Cloud Sync", desc: "GraphQL subscriptions layered with real-time socket channels backend databases dashboard connection sync tharom." },
                { icon: <Fingerprint size={24} />, title: "Biometric & Hardware Core", desc: "FaceID, biometric security loops, camera hardware layers, and Bluetooth mesh integration protocols control panrom." },
                { icon: <Zap size={24} />, title: "Micro-Interaction Layouts", desc: "Framer and spring properties combine panni touch feedbacks dynamic gestures and visual hooks code panrom." },
                { icon: <Infinity size={24} />, title: "App Store Pipeline Support", desc: "Continuous internal TestFlight workflows staging deployments, validation audits up to App Store submission handle panrom." }
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
              
              <h2 className="text-xl sm:text-2xl font-bold uppercase mb-2">Ready to ship your application to production?</h2>
              <p className="text-xs text-neutral-400 mb-6">Let's blueprint your custom multi-tenant dynamic app pipeline architecture together.</p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-extrabold px-8 py-3.5 text-xs uppercase tracking-wider hover:bg-orange-500 hover:text-black transition-colors"
              >
                Initiate App Blueprint Sprint
              </motion.button>
            </motion.div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}