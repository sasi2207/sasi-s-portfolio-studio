import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Binary, 
  Code2, 
  Layers, 
  MonitorPlay,
  ArrowRight,
  Code,
  Blocks
} from 'lucide-react';

// Neenga sonna dynamic system layout component import
import { Layout as PageLayout } from "@/components/layout/Layout";

export default function ComputerCoachingServices() {
  
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
                Core Computer Science & Systems Programming
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-black uppercase mb-4 tracking-tight">
                Master the Fundamentals of <span className="text-orange-500">C & C++ Engineering</span>
              </h1>
              
              <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-8 font-light">
                Verum theory illama, software development-oda absolute roots-ai decode panrom. From basic logic algorithms to low-level memory management pipelines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-orange-500 text-black font-bold px-8 py-4 flex items-center justify-center gap-2 group transition-colors hover:bg-orange-600"
                >
                  RESERVE A WORKSTATION <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, borderColor: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent border border-neutral-800 text-neutral-400 hover:text-white px-8 py-4 transition-all"
                >
                  VIEW SYLLABUS BLUEPRINTS
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* 2. ACADEMY PERFORMANCE BENCHMARKS (With Orange Border Hover Glow) */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase">
                Training <span className="text-orange-500">Benchmarks</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "1:1", title: "Dedicated Mentorship", desc: "Batch crowding illama, individual code debugging sessions setup panni coding skill-ai clean-ah structural optimization tharom." },
                { number: "100%", title: "Compiler Native Focus", desc: "Drag-and-drop toolkits use pannama, command-line terminals moolama real native compilation loops architecture-ai katru tharom." },
                { number: "0 -> 1", title: "Logic Architecture", desc: "Syntax-ai manapadam panna vekkama, clean problem-solving algorithms direct-ah logical approach-la system design panrom." }
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

          {/* 3. SYLLABUS DEVELOPMENT MATRIX (With Card Hover Scale & Icon Rotations) */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase">
                Yenna Yenna <span className="text-orange-500">Develop Panrom?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Terminal size={24} />, title: "Basic IT & Architecture Fundamentals", desc: "Operating systems handling, terminal scripting protocols, file structures, and native computer architecture mechanics basics configuration." },
                { icon: <Binary size={24} />, title: "C Logic & Core Control Flows", desc: "Data types allocation, dynamic loops configuration, switch cases, conditional statements systems paired with clean algorithm loops." },
                { icon: <Cpu size={24} />, title: "Raw Pointer & Memory Mechanics", desc: "RAM allocation processing, address variables tracking, stack vs heap allocation, dynamic arrays references pointer tracking loops structure panrom." },
                { icon: <Code2 size={24} />, title: "C++ OOP Object Orientations", desc: "Classes, polymorphism, encapsulation blueprints, multi-level inheritance parameters, clean abstraction design mechanisms architecture tharom." },
                { icon: <Layers size={24} />, title: "Data Structures Foundations", desc: "Linked lists algorithms, stack allocation arrays, queue arrays setups, tracking structures, sorting performance metrics write panrom." },
                { icon: <Blocks size={24} />, title: "Native File I/O Streams", desc: "External system files writing, binary reading processing blocks, custom data formatting, structures logging systems logic build panrom." }
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
              
              <h2 className="text-xl sm:text-2xl font-bold uppercase mb-2">Want to transition into elite software engineering?</h2>
              <p className="text-xs text-neutral-400 mb-6">Skip the superficial frameworks. Start your engineering roadmap from the bare metal compilation layers.</p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-extrabold px-8 py-3.5 text-xs uppercase tracking-wider hover:bg-orange-500 hover:text-black transition-colors"
              >
                Initiate Code Blueprint Session
              </motion.button>
            </motion.div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}