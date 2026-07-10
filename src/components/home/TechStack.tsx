import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const techStack = [
  { name: "React", category: "Frontend" },
  // { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
  { name: "Bootstrap", category: "Styling" },
  { name: "Firebase", category: "Backend" },
  { name: "Azure", category: "Cloud" },
  { name: "Django", category: "Framework" },
  // { name: "Laravel", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "AWS", category: "Cloud" },
];

const TechStackScroller = () => {
  // Split technologies into two distinct groups for dual rows
  const firstRow = techStack.slice(0, Math.ceil(techStack.length / 2));
  const secondRow = techStack.slice(Math.ceil(techStack.length / 2));

  // Duplicating datasets to ensure smooth infinite loop coverage
  const duplicatedRow1 = [...firstRow, ...firstRow, ...firstRow];
  const duplicatedRow2 = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section className="py-20 bg-zinc-950 overflow-hidden border-y border-slate-900 relative">
      {/* Background Section Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Our Enterprise Production Stack
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Industry-validated tools taught in our coaching paths and used daily in our development agency.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 pointer-events-none select-none">
        {/* Soft edge fade overlay masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Moving Left */}
        <div className="flex overflow-hidden pointer-events-auto">
          <motion.div
            className="flex gap-4 whitespace-nowrap items-center py-2"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedRow1.map((tech, index) => (
              <TechCard key={`row1-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex overflow-hidden pointer-events-auto">
          <motion.div
            className="flex gap-4 whitespace-nowrap items-center py-2"
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedRow2.map((tech, index) => (
              <TechCard key={`row2-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Extracted Card Component for high clarity and modular re-use
const TechCard = ({ tech, index }: { tech: { name: string; category: string }; index: number }) => {
  const phase = index % 5;

  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: phase * 0.15,
      }}
      whileHover={{ 
        scale: 1.03, 
        borderColor: "rgba(245, 158, 11, 0.4)",
        boxShadow: "0 10px 30px -10px rgba(245, 158, 11, 0.15)"
      }}
      className="flex items-center gap-3.5 px-5 py-3 rounded-xl flex-shrink-0 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md shadow-xl transition-colors duration-300 group cursor-default"
      role="listitem"
      aria-label={`${tech.name} - ${tech.category}`}
    >
      <div className="p-1.5 rounded-lg bg-zinc-950 border border-slate-800 text-slate-400 group-hover:text-amber-400 transition-colors duration-300">
        <Code2 className="w-4 h-4" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-slate-200 font-semibold text-sm tracking-wide group-hover:text-white transition-colors duration-200">
          {tech.name}
        </span>
        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
          {tech.category}
        </span>
      </div>
    </motion.div>
  );
};

export default TechStackScroller;