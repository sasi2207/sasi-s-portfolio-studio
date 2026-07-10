import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Code2, CheckCircle2, MonitorPlay } from "lucide-react";
import { BubbleBackground } from "./BubbleBackground";

const Hero = () => {
  // Master container orchestrating sequential entry animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 py-24">
      <BubbleBackground />
      
      {/* Background Grids and Accents */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-900/40 to-slate-950 pointer-events-none" />
      
      {/* Ambient Lighting Glows */}
      <motion.div
        className="absolute top-12 left-10 md:left-1/3 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px]"
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-12 right-10 md:right-1/3 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[130px]"
        animate={{ scale: [1.1, 1, 1.1], y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto mt-5 px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Dual Category Badge */}
          <motion.div variants={itemVariants} className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs md:text-sm text-slate-300 mb-8 backdrop-blur-md shadow-2xl">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-medium">
              <GraduationCap className="w-4 h-4" /> Tech Institute
            </span>
            <span className="w-1 h-1 bg-slate-700 rounded-full hidden sm:inline-block" />
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mediumNAV">
              <Code2 className="w-4 h-4" /> Dev Agency
            </span>
          </motion.div>

          {/* Unified Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.15]"
          >
            Master Code. <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Build the Digital Future.
            </span>
          </motion.h1>

          {/* Core Descriptive Copy */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Whether you want to launch a tech career with our premium software coaching or need an expert engineering team to develop elite web & mobile applications—we deliver excellence.
          </motion.p>

          {/* Targeted Call-To-Actions */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 max-w-lg mx-auto sm:max-w-none">
            {/* Action 1: Training Enrollment */}
            <Link to="/courses" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold shadow-[0_0_25px_rgba(245,158,11,0.25)] rounded-xl px-8 py-6 text-base transition-all duration-300"
              >
                Join Coaching Classes
                <MonitorPlay className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>

            {/* Action 2: Dev Services */}
            <Link to="/proposal" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-slate-800 bg-slate-900/60 hover:bg-slate-900 text-slate-200 hover:text-white rounded-xl px-8 py-6 text-base backdrop-blur-sm transition-all duration-300"
              >
                Hire Us for Development
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Combined Value Pillars Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-10 border-t border-slate-900"
          >
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-900/60 text-left">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">100% Practical Training</p>
                <p className="text-xs text-slate-400">Live projects & career placement coaching</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-900/60 text-left">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Expert Web Development</p>
                <p className="text-xs text-slate-400">React, Next.js, Node, & E-Commerce systems</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-900/60 text-left sm:col-span-2 md:col-span-1">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">ISO Certified & NDA Secure</p>
                <p className="text-xs text-slate-400">Trusted standard code quality and security</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;