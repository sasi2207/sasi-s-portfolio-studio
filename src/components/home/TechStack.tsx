import { motion } from "framer-motion";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
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
  { name: "Laravel", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "AWS", category: "Cloud" },
];

// Slightly darker soft colors
const cardColors = [
  "bg-[#DBEAFE]/80 backdrop-blur-xl shadow-md", // Soft Blue Darker
  "bg-[#FCE7F3]/80 backdrop-blur-xl shadow-md", // Soft Pink Darker
  "bg-[#DCFCE7]/80 backdrop-blur-xl shadow-md", // Soft Green Darker
];

const TechStackScroller = () => {
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="py-16 overflow-hidden border-y border-border/30">
      <div className="container mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest"
        >
          Technologies We Master
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* marquee container */}
        <motion.div
          className="flex gap-8 whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          // aria-hidden for the motion wrapper isn't necessary, but keep accessible labels for cards
        >
          {duplicatedStack.map((tech, index) => {
            // Pick a color based on index (cycle through 3)
            const colorClass = cardColors[index % 3];

            // Use a small modulo base to keep stagger consistent across duplicates
            const phase = index % 6;

            return (
              <motion.div
                key={`${tech.name}-${index}`}
                // subtle bobbing animation
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  // slightly staggered by index so not all cards move together
                  delay: phase * 0.12,
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl flex-shrink-0 ${colorClass}`}
                role="listitem"
                aria-label={`${tech.name} - ${tech.category}`}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-medium">{tech.name}</span>
                <span className="text-xs text-muted-foreground">{tech.category}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackScroller;
