import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, GraduationCap, LayoutGrid } from "lucide-react";
import projectsData from "@/data/projects.json";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
}

export const ProjectsPreview = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const featuredProjects = (projectsData.projects as Project[])
    .filter((p) => p.featured)
    .slice(0, 3);

  // Parent animation cascade orchestrator
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 18 } 
    }
  };

  return (
    <section className="py-24 bg-black border-t border-slate-900 relative overflow-hidden tech-grid-pattern">
      {/* Custom Grid Pattern Styles */}
      <style>{`
        .tech-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
        }
      `}</style>

      {/* Structural Ambient Glow System */}
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Modern Section Header */}
        <div className="text-center mb-20 space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full inline-flex items-center gap-2 border border-amber-400/20">
            <LayoutGrid className="w-3.5 h-3.5" /> Selected Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Case Deployments
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Explore live production engines engineered for enterprise ecosystems and academic platforms.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {featuredProjects.map((project) => {
            const isAcademic = project.category.toLowerCase().includes("coaching") || project.category.toLowerCase().includes("training");

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="rounded-2xl bg-black/80 backdrop-blur-sm border border-slate-800 hover:border-amber-500/30 shadow-2xl overflow-hidden group flex flex-col justify-between transition-all duration-300 relative"
              >
                {/* BRAND NAME ANIMATION WRAPPER */}
                <div className="relative h-44 bg-zinc-950/80 flex flex-col items-center justify-center border-b border-slate-800/80 overflow-hidden px-6">
                  {/* Inner abstract geometric grid texture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Dynamic Brand Text Loop Accent */}
                  <motion.div
                    variants={{
                      hover: { scale: 1.06, y: -2 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="text-center z-10 select-none"
                  >
                    <h3 className="text-3xl font-black tracking-tight text-slate-300 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 group-hover:text-amber-400/80 transition-colors duration-300 mt-1.5">
                      Verified Deployment
                    </p>
                  </motion.div>

                  {/* Micro Tech Label Watermark */}
                  <div className="absolute top-4 left-5 font-mono text-[10px] text-slate-600 select-none">
                    SYS_ID // {project.id.toUpperCase()}
                  </div>
                  
                  {/* Category Indicator Icon */}
                  <div className="absolute top-4 right-5 text-slate-500">
                    {isAcademic ? <GraduationCap size={16} /> : <Code2 size={16} />}
                  </div>
                </div>

                {/* CARD CONTENT BODY */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/20 inline-block">
                      {project.category}
                    </span>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Tags & Link */}
                  <div className="pt-4 border-t border-slate-900 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group/link"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GLOBAL BOTTOM LINK -> HOME SPECIFIC */}
        {isHome && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 font-semibold transition-all shadow-xl group"
            >
              <span>Review Complete Portfolio</span>
              <ArrowRight size={16} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ProjectsPreview;