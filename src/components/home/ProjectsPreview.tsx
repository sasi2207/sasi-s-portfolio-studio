import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, Sparkles, RefreshCw } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/skeletons";
import { TiltedCard } from "@/components/ui/tilted-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyText } from "@/components/ui/shiny-text";
import projectsData from "@/data/projects.json";

export const ProjectsPreview = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["All", "Full Stack", "Web Application", "WebSite"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (cat: string) => {
    if (cat === activeFilter) return;
    setIsLoading(true);
    setActiveFilter(cat);
    setTimeout(() => {
      setIsLoading(false);
    }, 280);
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

  const getLivePagePreviewUrl = (url: string) => {
    if (!url) return null;
    return `https://api.microlink.io?url=${encodeURIComponent(
      url
    )}&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=1000`;
  };

  return (
    <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-line)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
              <span className="font-semibold uppercase tracking-wider">Proof of Impact</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-muted)]">Production Deployments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-tight text-balance">
              Engineered Applications in the{" "}
              <ShinyText text="Real World." speed={4} className="font-black" />
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Real commercial platforms and high-traffic web applications built with rigorous engineering standards and measurable business outcomes.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:text-[var(--accent-from)] transition-colors whitespace-nowrap self-start md:self-end"
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
                    ? "text-white font-bold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeHomeProjectPill"
                    className="absolute inset-0 bg-[var(--accent)] rounded-lg shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid with ReactBits TiltedCards & Spotlights */}
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
                  ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                  : `${project.id}.com`;

                const liveScreenshotUrl = getLivePagePreviewUrl(project.liveUrl);

                return (
                  <TiltedCard
                    key={project.id}
                    maxAngle={8}
                    scaleOnHover={1.02}
                    showGlare={true}
                    className="h-full"
                  >
                    <SpotlightCard
                      enableTilt={false}
                      spotlightColor="rgba(207, 128, 71, 0.15)"
                      borderColor="rgba(207, 128, 71, 0.45)"
                      className="h-full flex flex-col justify-between group"
                    >
                      {/* Browser Window Chrome */}
                      <div className="relative border-b border-[var(--border-line)] bg-[var(--surface-ink)] overflow-hidden select-none">
                        <div className="h-8 bg-[var(--surface-fill)] border-b border-[var(--border-line)] flex items-center justify-between px-3">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                          </div>

                          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[var(--card-bg)] border border-[var(--border-line)] text-[10px] font-mono text-[var(--text-muted)] max-w-[200px] truncate shadow-2xs">
                            <Globe className="w-2.5 h-2.5 text-[var(--accent)] shrink-0" />
                            <span className="truncate text-[var(--text-primary)] font-medium">
                              {domain}
                            </span>
                          </div>

                          <span className="text-[9px] font-mono text-emerald-500 flex items-center gap-1 font-semibold">
                            LIVE
                          </span>
                        </div>

                        {/* Webpage Screen View Container */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                          {liveScreenshotUrl ? (
                            <img
                              src={liveScreenshotUrl}
                              alt={`${project.title} live webpage UI`}
                              className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-[1.02] transition-all duration-500 ease-out"
                              loading="lazy"
                              onError={(e) => {
                                (e.currentTarget as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : null}

                          {!project.liveUrl && (
                            <div className="w-full h-full p-4 flex flex-col justify-center items-center bg-[var(--surface-ink)] text-center">
                              <RefreshCw className="w-6 h-6 text-[var(--accent)] animate-spin mb-2" />
                              <span className="text-xs font-mono text-[var(--text-muted)]">
                                Loading Live Interface...
                              </span>
                            </div>
                          )}

                          {/* Hover Overlay Button to Open Actual Page */}
                          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                            <Link
                              to={`/projects/${project.id}`}
                              className="px-3.5 py-1.5 rounded-lg bg-[var(--card-bg)] text-[var(--text-primary)] text-xs font-semibold shadow hover:opacity-90 transition-transform hover:scale-105 border border-[var(--border-line)]"
                            >
                              Case Study
                            </Link>
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 rounded-lg bg-[var(--accent)] text-white text-xs font-bold shadow hover:bg-[var(--accent-from)] inline-flex items-center gap-1.5 transition-transform hover:scale-105"
                              >
                                <span>Visit Website</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>

                          {/* Category Tag */}
                          <div className="absolute top-2.5 right-2.5 z-10">
                            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[var(--accent)] border border-[var(--border-line)] shadow-xs">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card Description & Metrics */}
                      <div className="p-6 border-b border-[var(--border-line)] bg-[var(--surface-fill)] relative">
                        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono mb-2">
                          <span className="text-[11px] uppercase tracking-wider text-[var(--text-subtle)]">
                            Deployment
                          </span>
                          <span>
                            {project.metrics?.loadTime
                              ? `Load: ${project.metrics.loadTime}`
                              : "Verified Live"}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="text-xs text-[var(--text-muted)] mt-2 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>

                        {project.metrics && (
                          <div className="mt-4 pt-3 border-t border-[var(--border-line)] flex items-center justify-between text-xs font-mono">
                            {Object.entries(project.metrics)
                              .slice(0, 2)
                              .map(([key, val]) => (
                                <div key={key}>
                                  <span className="text-[var(--text-subtle)] uppercase text-[10px] block">
                                    {key}
                                  </span>
                                  <span className="text-[var(--text-primary)] font-bold tabular-nums">
                                    {val}
                                  </span>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>

                      {/* Card Bottom: Delivered Solution & Technologies */}
                      <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                        <div className="space-y-3 text-xs text-[var(--text-muted)]">
                          <div>
                            <span className="font-semibold text-[var(--text-primary)] block mb-1">
                              Delivered Solution:
                            </span>
                            <p className="leading-relaxed line-clamp-2">
                              {project.caseStudy?.solution || project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono text-[var(--text-primary)] bg-[var(--surface-fill)] px-2 py-0.5 rounded border border-[var(--border-line)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer Links */}
                        <div className="pt-4 border-t border-[var(--border-line)] flex items-center justify-between">
                          <Link
                            to={`/projects/${project.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
                          >
                            <span>Read Full Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                              title="Open Live Deployment"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
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