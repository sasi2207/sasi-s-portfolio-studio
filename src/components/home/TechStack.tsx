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
  { name: "React.js", category: "Frontend", color: "#0061FF", bg: "#EAF5FF", symbol: "⚛️" },
  { name: "Next.js", category: "Full-Stack", color: "#0033CC", bg: "#EAF5FF", symbol: "▲" },
  { name: "TypeScript", category: "Language", color: "#0061FF", bg: "#EAF5FF", symbol: "TS" },
  { name: "Flutter", category: "Mobile Apps", color: "#00E5FF", bg: "#EAF5FF", symbol: "💙" },
  { name: "Node.js", category: "Backend Engine", color: "#0061FF", bg: "#EAF5FF", symbol: "⚡" },
  { name: "Python", category: "Automation & AI", color: "#0033CC", bg: "#EAF5FF", symbol: "🐍" },
  { name: "PostgreSQL", category: "Database", color: "#001B66", bg: "#EAF5FF", symbol: "🐘" },
  { name: "Tailwind CSS", category: "Styling", color: "#00E5FF", bg: "#EAF5FF", symbol: "🎨" },
  { name: "AWS Cloud", category: "Infrastructure", color: "#0033CC", bg: "#EAF5FF", symbol: "☁️" },
  { name: "Docker", category: "DevOps", color: "#0061FF", bg: "#EAF5FF", symbol: "🐳" },
  { name: "MongoDB", category: "NoSQL DB", color: "#0033CC", bg: "#EAF5FF", symbol: "🍃" },
  { name: "React Native", category: "Mobile", color: "#0061FF", bg: "#EAF5FF", symbol: "📱" },
  { name: "Java & Spring", category: "Enterprise", color: "#001B66", bg: "#EAF5FF", symbol: "☕" },
  { name: "Firebase", category: "Cloud DB", color: "#0061FF", bg: "#EAF5FF", symbol: "🔥" }
];

const highlights = [
  { text: "Sub-Second Load Speeds (<0.9s)", icon: Zap, color: "text-[#0061FF]" },
  { text: "100% Full Source Code Ownership", icon: ShieldCheck, color: "text-[#00E5FF]" },
  { text: "Friendly Mentors & Direct Support", icon: HeartHandshake, color: "text-[#0061FF]" },
  { text: "Cross-Platform iOS & Android Apps", icon: Smartphone, color: "text-[#0033CC]" },
  { text: "Salem, Tamil Nadu & Global Clients", icon: Globe, color: "text-[#0061FF]" },
  { text: "Free SSL & Cloud Hosting Setup", icon: Cloud, color: "text-[#00E5FF]" },
  { text: "Transparent Milestone Pricing", icon: CheckCircle2, color: "text-[#0061FF]" },
  { text: "99.9% Uptime Architecture SLA", icon: Server, color: "text-[#0033CC]" }
];

export const TechStackScroller = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const duplicatedTech = [...technologies, ...technologies, ...technologies];
  const duplicatedHighlights = [...highlights, ...highlights, ...highlights];

  return (
    <section 
      className="py-20 bg-white overflow-hidden border-y border-slate-200/80 relative transition-colors duration-300"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Brand Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-48 bg-[#00E5FF]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-48 bg-[#0061FF]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10 text-center space-y-2">
        <span 
          className="text-xs font-mono text-[#0061FF] uppercase tracking-widest font-bold inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5FF] border border-[#66CCFF]/40 shadow-xs"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#0061FF]" /> Modern Engineering Stack
        </span>
        <h2 
          className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] tracking-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Tools We Use to Build Fast,{" "}
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">
            Modern Digital Products.
          </span>
        </h2>
        <p 
          className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto leading-relaxed"
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
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#0061FF] shadow-[0_4px_16px_rgba(0,97,255,0.06)] hover:shadow-[0_6px_22px_rgba(0,97,255,0.18)] transition-all duration-200 group"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 border border-[#66CCFF]/30"
                  style={{ backgroundColor: tech.bg, color: tech.color }}
                >
                  {tech.symbol}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#111827] group-hover:text-[#0061FF] transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-[#64748B] font-mono">
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
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-[#111827] shadow-[0_3px_12px_rgba(0,97,255,0.05)] hover:border-[#0061FF] transition-colors"
                >
                  <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
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