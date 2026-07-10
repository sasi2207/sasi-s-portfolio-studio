import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Code2, 
  ArrowRight, 
  Activity, 
  GraduationCap, 
  Briefcase, 
  MonitorPlay,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export const Services = () => {
  // Staggered Entry with Blur Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 30 },
    visible: { 
      filter: "blur(0px)",
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 20 } 
    }
  };

  const servicesMatrix = [
    {
      icon: Code2,
      id: "01",
      tag: "CORE_DEVELOPMENT // ACTIVE",
      title: "Software Development Services",
      desc: "Architecting high-frequency web ecosystems, responsive enterprise systems, custom SaaS applications, and robust e-commerce solutions built cleanly using modular structural engineering principles.",
      features: ["Custom Software Engineering", "Decoupled API Infrastructures", "Database Optimization Layer", "Cloud System Deployments"]
    },
    {
      icon: MonitorPlay,
      id: "02",
      tag: "ACADEMY_TRACK // ACTIVE",
      title: "Professional Training Programs",
      desc: "Elite full-stack and backend engineering training built directly on industry-level logic blueprints. Turn conceptual syntax mastery into scalable, production-ready live runtime experience.",
      features: ["React & Node Full-Stack Labs", "Enterprise Java & Spring Boot", "Clean Coding Practices", "System Architecture Blueprints"]
    },
    {
      icon: Briefcase,
      id: "03",
      tag: "INDUSTRIAL_PIPELINE // ACTIVE",
      title: "Real-World Internship Streams",
      desc: "Gain defining, real-world workspace exposure handling strict git microtask branches, pull request cycles, code review stand-ups, and live project staging servers.",
      features: ["Production Workspace Sandboxes", "Git Workflow Coordination", "Direct Code Mentorship Teams", "Official Experience Badge Logs"]
    },
    {
      icon: GraduationCap,
      id: "04",
      tag: "LAB_HQ // ACTIVE",
      title: "Coaching Center Labs",
      desc: "Dedicated physical and digital environments packed with tactical algorithm speed tracks, precise problem-solving forums, and highly targeted placement prep models.",
      features: ["1-on-1 Strategic Doubt Clears", "Technical Interview Frameworks", "Live Practice Coding Sprints", "Handoff Portfolio Building"]
    }
  ];

  return (
    <Layout>
      {/* ==============================
          HERO ORANGE ACCENT SECTION
      =============================== */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-[#05070d] border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
        
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-6"
          initial={{ filter: "blur(12px)", opacity: 0, y: -10 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-orange-500 text-[10px] font-mono tracking-[0.3em] uppercase bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-md inline-flex items-center gap-2 mx-auto">
            <Activity className="w-3 h-3 animate-pulse" /> CORE_SYSTEMS_MATRIX // OPERATIONAL
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Our Professional <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Service Vectors
            </span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Explore TechSasi's integrated ecosystem: delivering high-performance customized corporate software, 
            hands-on software development training courses, interactive internships, and modern coaching centers.
          </p>
        </motion.div>
      </section>

      {/* ==============================
          DYNAMIC RESPONSIVE SERVICES GRID
      =============================== */}
      <section className="py-24 bg-[#05070d] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="mb-16 space-y-2 border-l-2 border-orange-500 pl-4">
            <p className="font-mono text-xs text-orange-500 tracking-widest uppercase">// CAPABILITIES MATRIX</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">System Breakdown</h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {servicesMatrix.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.35)", boxShadow: "0 20px 40px -15px rgba(249, 115, 22, 0.08)" }}
                className="bg-slate-900/10 border-2 border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Card Micro Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <span className="absolute top-6 right-6 font-mono text-2xl font-black text-slate-800/40 group-hover:text-orange-500/10 transition-colors select-none z-10">
                  {service.id}
                </span>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      <service.icon className="text-orange-500" size={18} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase">{service.tag}</p>
                      <h3 className="text-lg font-bold text-white tracking-tight">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {service.desc}
                  </p>

                  <div className="border-t border-slate-900/80 pt-4 mt-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-slate-300 font-medium text-xs">
                          <CheckCircle2 className="text-orange-500 shrink-0" size={13} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-900/60 mt-6 flex justify-between items-center relative z-10">
                  <span className="font-mono text-[9px] text-slate-600 tracking-widest uppercase">PIPELINE // SECURE</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-500 hover:text-orange-400 transition-colors group/link"
                  >
                    <span>Request Access</span>
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ==============================
          RESPONSIVE DUAL CTA BOARD
      =============================== */}
      <section className="py-20 bg-[#05070d] border-t border-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900/40 to-slate-950/10 border-2 border-slate-900 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-orange-500">
                <Sparkles size={15} />
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Consolidated Operations</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Ready to Initiate Program Protocols?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                Whether requesting custom enterprise application software architecture timelines or booking 
                a learning lab seat inside our coaching center—our channels are actively receptive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 z-10">
              <Link
                to="/proposal"
                className="inline-flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-slate-950 font-mono text-xs font-bold uppercase tracking-widest px-5 py-3.5 rounded-xl transition-all shadow-lg"
              >
                <span>Request Project Blueprint</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-mono text-xs font-bold uppercase tracking-widest px-5 py-3.5 rounded-xl transition-all"
              >
                <span>Enroll in Center Labs</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;