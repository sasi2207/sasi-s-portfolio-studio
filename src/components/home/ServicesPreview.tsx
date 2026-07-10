import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
  ArrowRight,
  LucideIcon,
  FileCode,
  RefreshCw,
  ShoppingCart,
  User,
  Briefcase,
  Smartphone,
  TrendingUp,
  GraduationCap,
  Code2,
} from "lucide-react";

import { SectionHeader } from "../common/SectionHeader";
import servicesData from "@/data/services.json";

/* ----------------------------------
    FULL ICON MAP
----------------------------------- */
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
  FileCode,
  RefreshCw,
  ShoppingCart,
  User,
  Briefcase,
  Smartphone,
  TrendingUp,
};

export const ServicesPreview = () => {
  // Framer Motion Grid Orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 overflow-hidden relative">
      {/* Background Micro Details */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Customized Header Wrapper for Dark Theme support */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full">
            Our Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Dual-Focus Solutions
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Professional development delivery alongside premium training systems built to advance your goals.
          </p>
        </div>

        {/* SERVICES GRID */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            
            // Dynamic check to determine if the item is training or client agency services
            const isTraining = service.path.includes("course") || service.id.includes("train");

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative group rounded-2xl bg-slate-900/40 border border-slate-800/60 p-6 pb-16 backdrop-blur-md shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Neon Aura Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${service.iconColor || '#f59e0b'}15, transparent 70%)`,
                  }}
                />

                <div>
                  {/* Top Header Row with Classification Badges */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${service.iconColor || '#f59e0b'}10`,
                        borderColor: `${service.iconColor || '#f59e0b'}25`,
                      }}
                    >
                      {Icon && <Icon size={22} style={{ color: service.iconColor || '#f59e0b' }} />}
                    </div>

                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1 border ${
                      isTraining 
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/20" 
                        : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    }`}>
                      {isTraining ? <GraduationCap className="w-3 h-3" /> : <Code2 className="w-3 h-3" />}
                      {isTraining ? "Coaching" : "Service"}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-amber-400 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* VIEW DETAILS ACTION */}
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider group/link transition-all"
                    style={{ color: service.iconColor || '#f59e0b' }}
                  >
                    <span>View Track</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* VIEW ALL CENTRAL BUTTON */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-slate-300 hover:text-white transition-all bg-slate-900 border border-slate-800 hover:border-amber-500/50 px-6 py-3 rounded-full shadow-lg"
          >
            <span>Explore Entire Services Catalog</span>
            <ArrowRight size={16} className="text-amber-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};