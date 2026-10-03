import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Smartphone, 
  Layers, 
  Server, 
  Cloud, 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  Globe, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  color: string;
  bg: string;
  symbol: string;
}

const technologies: TechItem[] = [
  { name: "React.js", category: "Frontend", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", symbol: "⚛️" },
  { name: "Next.js", category: "Full-Stack", color: "#ffffff", bg: "rgba(255, 255, 255, 0.12)", symbol: "▲" },
  { name: "TypeScript", category: "Language", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)", symbol: "TS" },
  { name: "Flutter", category: "Mobile Apps", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", symbol: "💙" },
  { name: "Node.js", category: "Backend Engine", color: "#4ade80", bg: "rgba(74, 222, 128, 0.12)", symbol: "🟢" },
  { name: "Python", category: "Automation & AI", color: "#fbbf24", bg: "rgba(251, 191, 36, 0.12)", symbol: "🐍" },
  { name: "PostgreSQL", category: "Database", color: "#818cf8", bg: "rgba(129, 140, 248, 0.12)", symbol: "🐘" },
  { name: "Tailwind CSS", category: "Styling", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", symbol: "🎨" },
  { name: "AWS Cloud", category: "Infrastructure", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)", symbol: "☁️" },
  { name: "Docker", category: "DevOps", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", symbol: "🐳" },
  { name: "MongoDB", category: "NoSQL DB", color: "#4ade80", bg: "rgba(74, 222, 128, 0.12)", symbol: "🍃" },
  { name: "React Native", category: "Mobile", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)", symbol: "📱" },
  { name: "Java & Spring", category: "Enterprise", color: "#f87171", bg: "rgba(248, 113, 113, 0.12)", symbol: "☕" },
  { name: "Firebase", category: "Cloud DB", color: "#fbbf24", bg: "rgba(251, 191, 36, 0.12)", symbol: "🔥" }
];

const highlights = [
  { text: "Sub-Second Load Speeds (<0.9s)", icon: Zap, color: "text-amber-400" },
  { text: "100% Full Source Code Ownership", icon: ShieldCheck, color: "text-emerald-400" },
  { text: "Friendly Mentors & Direct Support", icon: HeartHandshake, color: "text-blue-400" },
  { text: "Cross-Platform iOS & Android Apps", icon: Smartphone, color: "text-purple-400" },
  { text: "Salem, Tamil Nadu & Global Clients", icon: Globe, color: "text-rose-400" },
  { text: "Free SSL & Cloud Hosting Setup", icon: Cloud, color: "text-cyan-400" },
  { text: "Transparent Milestone Pricing", icon: CheckCircle2, color: "text-amber-400" },
  { text: "99.9% Uptime Architecture SLA", icon: Server, color: "text-emerald-400" }
];

export const TechStackScroller = () => {
  // Triple the arrays for an infinite loop with zero visual stutter
  const duplicatedTech = [...technologies, ...technologies, ...technologies];
  const duplicatedHighlights = [...highlights, ...highlights, ...highlights];

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-[#070B14] overflow-hidden border-y border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-48 bg-amber-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-48 bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10 text-center space-y-2">
        <span className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest font-semibold inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Modern Engineering Stack
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Tools We Use to Build Fast, Modern Digital Products.
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          From cutting-edge frontend frameworks to battle-tested enterprise databases and cloud deployment pipelines.
        </p>
      </div>

      <div className="relative flex flex-col gap-5 select-none">
        {/* Soft edge fade overlay masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 dark:from-[#070B14] via-slate-50/80 dark:via-[#070B14]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 dark:from-[#070B14] via-slate-50/80 dark:via-[#070B14]/80 to-transparent z-20 pointer-events-none" />

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
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/50 shadow-sm transition-all duration-200 group"
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                    tech.name === "Next.js" 
                      ? "bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white border border-slate-300 dark:border-white/10" 
                      : ""
                  }`}
                  style={tech.name === "Next.js" ? {} : { backgroundColor: tech.bg, color: tech.color }}
                >
                  {tech.symbol}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
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
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.06] text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm"
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
