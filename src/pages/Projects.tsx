import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { ExternalLink, ArrowRight, Globe, RefreshCw } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/skeletons";
import projectsData from "@/data/projects.json";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial load skeleton simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (category: string) => {
    if (category === activeFilter) return;
    setIsLoading(true);
    setActiveFilter(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  };

  const categories = ["All", "Full Stack", "Web Application", "WebSite"];

  const isMatchProject = (projectCategory: string, filter: string) => {
    if (filter === "All") return true;
    const cleanFilter = filter.toLowerCase().replace(/[\s-_]/g, "");
    const cleanCat = (projectCategory || "").toLowerCase().replace(/[\s-_]/g, "");
    return cleanCat.includes(cleanFilter) || cleanFilter.includes(cleanCat);
  };

  const filteredProjects = projectsData.projects.filter((p) =>
    isMatchProject(p.category, activeFilter)
  );

  // Live webpage front page snapshot URL helper function
  const getLivePagePreviewUrl = (url: string) => {
    if (!url) return null;
    return `https://api.microlink.io?url=${encodeURIComponent(
      url
    )}&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=1000`;
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-slate-50 dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="pb-1">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Projects", active: true },
                ]}
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
              <span>Engineering Portfolio</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">Verified Production Deployments</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
              Applications Engineered for Real-World Demands.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-2">
              Explore live systems, enterprise platforms, and client platforms engineered by TechSasi. Built for sub-second speeds, high conversion rates, and 99.9% uptime.
            </p>
          </div>
        </div>
      </section>

      {/* Segmented Filter Control with Navigate Animation */}
      <section className="py-6 bg-white/90 dark:bg-[#07090E]/90 border-b border-slate-200 dark:border-white/[0.06] sticky top-16 z-30 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleFilterChange(category)}
                  className={`relative px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "text-slate-950 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectPill"
                      className="absolute inset-0 bg-amber-400 rounded-lg shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Grid with Skeleton Loader & Navigate Animation */}
      <section className="py-20 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <ProjectGridSkeleton count={6} />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, idx) => {
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
                        
                        {/* Browser Window Bar & Live URL */}
                        <div className="h-8 bg-slate-100 dark:bg-[#0E1524] border-b border-slate-200 dark:border-white/[0.06] flex items-center justify-between px-3">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                          </div>

                          {/* Real URL Address Bar */}
                          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white dark:bg-[#06090F] border border-slate-200 dark:border-white/[0.05] text-[10px] font-mono text-slate-500 dark:text-slate-400 max-w-[190px] truncate shadow-2xs">
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

                        {/* Front Page UI Snapshot Display */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                          {liveScreenshotUrl ? (
                            <img
                              src={liveScreenshotUrl}
                              alt={`${project.title} live webpage front page UI`}
                              className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-[1.02] transition-all duration-500 ease-out"
                              loading="lazy"
                              onError={(e) => {
                                (e.currentTarget as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : null}

                          {/* Fallback Simulation Loader (if no liveUrl) */}
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

                          {/* Category Badge Tag */}
                          <div className="absolute top-2.5 right-2.5 z-10">
                            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-400/25 shadow-sm">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Header Preview / Title & Metrics */}
                      <div className="p-6 border-b border-slate-100 dark:border-white/[0.06] bg-slate-50/60 dark:bg-gradient-to-br dark:from-[#0F1626] dark:to-[#0B101D]">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                          <span className="text-[11px] uppercase tracking-wider text-slate-400">Production</span>
                          <span className="text-slate-500">
                            {project.metrics?.loadTime ? `Load: ${project.metrics.loadTime}` : "Verified Live"}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Quantitative Metrics Row */}
                        {project.metrics && (
                          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.06] grid grid-cols-3 gap-2 text-xs font-mono">
                            {Object.entries(project.metrics).slice(0, 3).map(([k, v]) => (
                              <div key={k}>
                                <span className="text-[10px] text-slate-400 uppercase block truncate">{k}</span>
                                <span className="text-slate-900 dark:text-white font-bold tabular-nums">{v}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Case Study Details */}
                      <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                        <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                          {project.caseStudy && (
                            <>
                              <div>
                                <span className="font-semibold text-slate-800 dark:text-slate-300 block mb-1">Challenge & Solution:</span>
                                <p className="line-clamp-3 leading-relaxed">
                                  {project.caseStudy.solution}
                                </p>
                              </div>

                              <div>
                                <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-0.5">Measurable Outcome:</span>
                                <p className="text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed">
                                  {project.caseStudy.outcome}
                                </p>
                              </div>
                            </>
                          )}

                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-slate-200 dark:border-white/[0.05]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                          <Link
                            to={`/projects/${project.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
                          >
                            <span>Full Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="w-3 h-3" />
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

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-100 dark:bg-[#05070D] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
            Ready to Deploy Your Own Application?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            From proof-of-concept MVP to high-traffic enterprise platform, TechSasi handles design, full-stack development, and cloud setup.
          </p>
          <div className="pt-2">
            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md transition-transform hover:-translate-y-0.5"
            >
              <span>Build Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;