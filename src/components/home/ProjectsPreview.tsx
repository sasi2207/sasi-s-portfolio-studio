import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, Sparkles, RefreshCw } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/skeletons";
import projectsData from "@/data/projects.json";

export const ProjectsPreview = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["All", "Full Stack", "Web Application", "WebSite"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (cat: string) => {
    if (cat === activeFilter) return;
    setIsLoading(true);
    setActiveFilter(cat);
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  };

  const isMatchProject = (projectCategory: string, filter: string) => {
    if (filter === "All") return true;
    const cleanFilter = filter.toLowerCase().replace(/[\s-_]/g, "");
    const cleanCat = (projectCategory || "").toLowerCase().replace(/[\s-_]/g, "");
    return cleanCat.includes(cleanFilter) || cleanFilter.includes(cleanCat);
  };

  const filtered = projectsData.projects.filter((p) =>
    isMatchProject(p.category, activeFilter)
  );
  const displayProjects = filtered.slice(0, 3);

  // Live webpage front-page-ஐ ஆட்டோமேட்டிக்காக snapshot எடுக்க உதவும் helper function
  const getLivePagePreviewUrl = (url: string) => {
    if (!url) return null;
    return `https://api.microlink.io?url=${encodeURIComponent(
      url
    )}&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=1000`;
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Proof of Impact</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">Production Deployments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight text-balance">
              Engineered Applications in the Wild.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Real commercial platforms and high-traffic web applications built with rigorous engineering standards and measurable business outcomes.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Explore All Deployments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilterChange(cat)}
                className={`relative px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? "text-slate-950 font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeHomeProjectPill"
                    className="absolute inset-0 bg-amber-400 rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        {isLoading ? (
          <ProjectGridSkeleton count={3} />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {displayProjects.map((project, idx) => {
                const domain = project.liveUrl
                  ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/\$/, "")
                  : `${project.id}.com`;

                const liveScreenshotUrl = getLivePagePreviewUrl(project.liveUrl);

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/50 hover:shadow-2xl dark:hover:shadow-amber-500/5 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-sm dark:shadow-none"
                  >
                    {/* ========================================================
                        REAL LIVE WEBPAGE FRONT-PAGE UI PREVIEW (BROWSER SHELL)
                        ======================================================== */}
                    <div className="relative border-b border-slate-200 dark:border-white/[0.08] bg-[#070B14] overflow-hidden select-none">
                      
                      {/* Browser Window Controls & URL bar */}
                      <div className="h-8 bg-slate-100 dark:bg-[#0E1524] border-b border-slate-200 dark:border-white/[0.06] flex items-center justify-between px-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                        </div>

                        {/* Real URL Address Bar */}
                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white dark:bg-[#06090F] border border-slate-200 dark:border-white/[0.05] text-[10px] font-mono text-slate-500 dark:text-slate-400 max-w-[200px] truncate shadow-2xs">
                          <Globe className="w-2.5 h-2.5 text-amber-500 shrink-0" />
                          <span className="truncate text-slate-700 dark:text-slate-300 font-medium">
                            {domain}
                          </span>
                        </div>

                        <span className="text-[9px] font-mono text-emerald-500 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          LIVE
                        </span>
                      </div>

                      {/* Webpage Screen View Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                        {liveScreenshotUrl ? (
                          <img
                            src={liveScreenshotUrl}
                            alt={`${project.title} live webpage front page UI`}
                            className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-[1.02] transition-all duration-500 ease-out"
                            loading="lazy"
                            onError={(e) => {
                              // API லோட் ஆகாத பட்சத்தில் graceful fallback layout
                              (e.currentTarget as HTMLElement).style.display = "none";
                            }}
                          />
                        ) : null}

                        {/* Fallback Simulation (ஒருவேளை liveUrl இல்லை என்றால் மட்டும்) */}
                        {!project.liveUrl && (
                          <div className="w-full h-full p-4 flex flex-col justify-center items-center bg-slate-950 text-center">
                            <RefreshCw className="w-6 h-6 text-amber-500 animate-spin mb-2" />
                            <span className="text-xs font-mono text-slate-400">Loading Live Interface...</span>
                          </div>
                        )}

                        {/* Hover Overlay Button to Open Actual Page */}
                        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                          <Link
                            to={`/projects/${project.id}`}
                            className="px-3.5 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-semibold shadow hover:bg-slate-100 transition-transform hover:scale-105"
                          >
                            Case Study
                          </Link>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold shadow hover:bg-amber-300 inline-flex items-center gap-1.5 transition-transform hover:scale-105"
                            >
                              <span>Visit Website</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        {/* Category Chip */}
                        <div className="absolute top-2.5 right-2.5 z-10">
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-400/25 shadow-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Description & Metrics */}
                    <div className="p-6 border-b border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-gradient-to-br dark:from-[#0F1626]/40 dark:to-[#0B101D] relative">
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400">Deployment</span>
                        <span>{project.metrics?.loadTime ? `Load: ${project.metrics.loadTime}` : "Verified Live"}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {project.metrics && (
                        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                          {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                            <div key={key}>
                              <span className="text-slate-400 uppercase text-[10px] block">{key}</span>
                              <span className="text-slate-900 dark:text-white font-bold tabular-nums">{val}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Bottom: Delivered Solution & Technologies */}
                    <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                      <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                        <div>
                          <span className="font-semibold text-slate-800 dark:text-slate-300 block mb-1">Delivered Solution:</span>
                          <p className="leading-relaxed line-clamp-2">
                            {project.caseStudy?.solution || project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-slate-200 dark:border-white/[0.05]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Links */}
                      <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                        <Link
                          to={`/projects/${project.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                            title="Open Live Deployment"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </section>
  );
};

export default ProjectsPreview;