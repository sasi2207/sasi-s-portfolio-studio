import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Smartphone, 
  Server, 
  Cloud, 
  Globe, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import { ShinyText } from "@/components/ui/shiny-text";

interface TechItem {
  name: string;
  category: string;
  color: string;
  bg: string;
  symbol: string;
}

const technologies: TechItem[] = [
  { name: "React.js", category: "Frontend", color: "#00d2ff", bg: "rgba(0, 210, 255, 0.12)", symbol: "⚛️" },
  { name: "Next.js", category: "Full-Stack", color: "#0072ff", bg: "rgba(0, 114, 255, 0.12)", symbol: "▲" },
  { name: "TypeScript", category: "Language", color: "#0284c7", bg: "rgba(2, 132, 199, 0.12)", symbol: "TS" },
  { name: "Flutter", category: "Mobile Apps", color: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)", symbol: "💙" },
  { name: "Node.js", category: "Backend Engine", color: "#0ea5e9", bg: "rgba(14, 165, 233, 0.12)", symbol: "⚡" },
  { name: "Python", category: "Automation & AI", color: "#00c6ff", bg: "rgba(0, 198, 255, 0.12)", symbol: "🐍" },
  { name: "PostgreSQL", category: "Database", color: "#2563eb", bg: "rgba(37, 99, 235, 0.12)", symbol: "🐘" },
  { name: "Tailwind CSS", category: "Styling", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", symbol: "🎨" },
  { name: "AWS Cloud", category: "Infrastructure", color: "#0284c7", bg: "rgba(2, 132, 199, 0.12)", symbol: "☁️" },
  { name: "Docker", category: "DevOps", color: "#00d2ff", bg: "rgba(0, 210, 255, 0.12)", symbol: "🐳" },
  { name: "MongoDB", category: "NoSQL DB", color: "#0072ff", bg: "rgba(0, 114, 255, 0.12)", symbol: "🍃" },
  { name: "React Native", category: "Mobile", color: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)", symbol: "📱" },
  { name: "Java & Spring", category: "Enterprise", color: "#1d4ed8", bg: "rgba(29, 78, 216, 0.12)", symbol: "☕" },
  { name: "Firebase", category: "Cloud DB", color: "#00c6ff", bg: "rgba(0, 198, 255, 0.12)", symbol: "🔥" }
];

const highlights = [
  { text: "Sub-Second Load Speeds (<0.9s)", icon: Zap, color: "text-[#00d2ff]" },
  { text: "100% Full Source Code Ownership", icon: ShieldCheck, color: "text-cyan-500" },
  { text: "Friendly Mentors & Direct Support", icon: HeartHandshake, color: "text-[#0072ff]" },
  { text: "Cross-Platform iOS & Android Apps", icon: Smartphone, color: "text-sky-500" },
  { text: "Salem, Tamil Nadu & Global Clients", icon: Globe, color: "text-blue-600" },
  { text: "Free SSL & Cloud Hosting Setup", icon: Cloud, color: "text-cyan-400" },
  { text: "Transparent Milestone Pricing", icon: CheckCircle2, color: "text-[#00c6ff]" },
  { text: "99.9% Uptime Architecture SLA", icon: Server, color: "text-sky-600" }
];

export const TechStackScroller = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // Trigger animations only once on scroll
      easing: "ease-out-cubic",
    });
  }, []);

  // Triple the arrays for an infinite loop with zero visual stutter
  const duplicatedTech = [...technologies, ...technologies, ...technologies];
  const duplicatedHighlights = [...highlights, ...highlights, ...highlights];

  return (
    <section 
      className="py-20 bg-white overflow-hidden border-y border-cyan-100/70 relative transition-colors duration-300"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Electric Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-48 bg-[#00d2ff]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-48 bg-[#0072ff]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10 text-center space-y-2">
        <span 
          className="text-xs font-mono text-cyan-600 uppercase tracking-widest font-bold inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60 shadow-xs"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" /> Modern Engineering Stack
        </span>
        <h2 
          className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Tools We Use to Build Fast,{" "}
          <span className="bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#0284c7] bg-clip-text text-transparent">
            Modern Digital Products.
          </span>
        </h2>
        <p 
          className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          From cutting-edge frontend frameworks to battle-tested enterprise databases and cloud deployment pipelines.
        </p>
      </div>

      <div 
        className="relative flex flex-col gap-5 select-none"
        data-aos="fade-in"
        data-aos-delay="400"
      >
        {/* Soft edge fade overlay masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Scrolling Left - Technologies */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-3.5 whitespace-nowrap items-center py-1"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            whileHover={{ transition: { duration: 80 } }}
          >
            {duplicatedTech.map((tech, idx) => (
              <div
                key={`tech-${tech.name}-${idx}`}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-cyan-100 hover:border-cyan-400/80 shadow-[0_4px_16px_rgba(0,180,255,0.06)] hover:shadow-[0_6px_22px_rgba(0,180,255,0.2)] transition-all duration-200 group"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 border border-cyan-200/50"
                  style={{ backgroundColor: tech.bg, color: tech.color }}
                >
                  {tech.symbol}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolling Right - User-Friendly Trust & Quality Highlights */}
        <div className="flex overflow-hidden pt-1">
          <motion.div
            className="flex gap-3.5 whitespace-nowrap items-center py-1"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            whileHover={{ transition: { duration: 80 } }}
          >
            {duplicatedHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`hi-${idx}`}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-cyan-100/80 text-xs font-semibold text-slate-700 shadow-[0_3px_12px_rgba(0,180,255,0.05)] hover:border-cyan-300 transition-colors"
                >
                  <Icon className={`w-4 h-4 ${item.color} shrink-0 drop-shadow-[0_0_6px_rgba(0,210,255,0.4)]`} />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackScroller;