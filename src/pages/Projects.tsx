import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { ExternalLink, ArrowRight, Globe, RefreshCw, Cpu, Workflow, Layers } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/skeletons";
import { CenterFlow } from "@/components/ui/center-flow";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TiltedCard } from "@/components/ui/tilted-card";
import { ShinyText } from "@/components/ui/shiny-text";
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
      <section className="pt-36 pb-20 bg-[var(--hero-bg)] border-b border-[var(--border-line)] relative transition-colors duration-300">
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

            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold">
              <span>Engineering Portfolio</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-muted)]">Verified Production Deployments</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.1] text-balance">
              Applications Engineered for Real-World Demands.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl pt-2">
              Explore live systems, enterprise platforms, and client platforms engineered by TechSasi. Built for sub-second speeds, high conversion rates, and 99.9% uptime.
            </p>
          </div>
        </div>
      </section>

      {/* Segmented Filter Control with Navigate Animation */}
      <section className="py-6 bg-[var(--card-bg)]/90 border-b border-[var(--border-line)] sticky top-16 z-30 backdrop-blur-md transition-colors duration-300">
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
                      ? "text-white font-bold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectPill"
                      className="absolute inset-0 bg-[var(--accent)] rounded-lg shadow-sm -z-10"
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
      <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] transition-colors duration-300">
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
                    <TiltedCard
                      key={project.id}
                      maxAngle={8}
                      scaleOnHover={1.02}
                      showGlare={true}
                      className="h-full"
                    >
                      <SpotlightCard
                        enableTilt={false}
                        spotlightColor="rgba(207, 128, 71, 0.16)"
                        borderColor="rgba(207, 128, 71, 0.45)"
                        className="h-full flex flex-col justify-between group"
                      >
                      {/* ========================================================
                          REAL LIVE WEBPAGE FRONT-PAGE UI PREVIEW (BROWSER SHELL)
                          ======================================================== */}
                      <div className="relative border-b border-[var(--border-line)] bg-[var(--surface-ink)] overflow-hidden select-none">
                        
                        {/* Browser Window Bar & Live URL */}
                        <div className="h-8 bg-[var(--surface-fill)] border-b border-[var(--border-line)] flex items-center justify-between px-3">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                          </div>

                          {/* Real URL Address Bar */}
                          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[var(--card-bg)] border border-[var(--border-line)] text-[10px] font-mono text-[var(--text-muted)] max-w-[190px] truncate shadow-2xs">
                            <Globe className="w-2.5 h-2.5 text-[var(--accent)] shrink-0" />
                            <span className="truncate text-[var(--text-primary)] font-medium">
                              {domain}
                            </span>
                          </div>

                          <span className="text-[9px] font-mono text-emerald-500 flex items-center gap-1 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            LIVE
                          </span>
                        </div>

                        {/* Front Page UI Snapshot Display */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-ink)] flex items-center justify-center">
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
                            <div className="w-full h-full p-4 flex flex-col justify-center items-center bg-[var(--surface-ink)] text-center">
                              <RefreshCw className="w-6 h-6 text-[var(--accent)] animate-spin mb-2" />
                              <span className="text-xs font-mono text-[var(--text-muted)]">Loading Live Interface...</span>
                            </div>
                          )}

                          {/* Hover Overlay Button to Open Actual Page */}
                          <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                            <Link
                              to={`/projects/${project.id}`}
                              className="px-3.5 py-1.5 rounded-lg bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-line)] text-xs font-semibold shadow hover:bg-[var(--surface-fill)] transition-transform hover:scale-105"
                            >
                              Case Study
                            </Link>
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 rounded-lg bg-[var(--accent)] text-white text-xs font-bold shadow hover:opacity-90 inline-flex items-center gap-1.5 transition-transform hover:scale-105"
                              >
                                <span>Visit Website</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>

                          {/* Category Badge Tag */}
                          <div className="absolute top-2.5 right-2.5 z-10">
                            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-black/85 backdrop-blur-md text-[var(--accent)] border border-[var(--accent)]/30 shadow-sm">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Header Preview / Title & Metrics */}
                      <div className="p-6 border-b border-[var(--border-line)] bg-[var(--surface-fill)]">
                        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-3">
                          <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)]">Production</span>
                          <span className="text-[var(--text-muted)]">
                            {project.metrics?.loadTime ? `Load: ${project.metrics.loadTime}` : "Verified Live"}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Quantitative Metrics Row */}
                        {project.metrics && (
                          <div className="mt-4 pt-3 border-t border-[var(--border-line)] grid grid-cols-3 gap-2 text-xs font-mono">
                            {Object.entries(project.metrics).slice(0, 3).map(([k, v]) => (
                              <div key={k}>
                                <span className="text-[10px] text-[var(--text-muted)] uppercase block truncate">{k}</span>
                                <span className="text-[var(--text-primary)] font-bold tabular-nums">{v}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Case Study Details */}
                      <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                        <div className="space-y-3 text-xs text-[var(--text-muted)]">
                          {project.caseStudy && (
                            <>
                              <div>
                                <span className="font-semibold text-[var(--text-primary)] block mb-1">Challenge & Solution:</span>
                                <p className="line-clamp-3 leading-relaxed">
                                  {project.caseStudy.solution}
                                </p>
                              </div>

                              <div>
                                <span className="font-semibold text-emerald-500 block mb-0.5">Measurable Outcome:</span>
                                <p className="text-[var(--text-primary)] line-clamp-2 leading-relaxed">
                                  {project.caseStudy.outcome}
                                </p>
                              </div>
                            </>
                          )}

                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono text-[var(--text-primary)] bg-[var(--surface-fill)] px-2 py-0.5 rounded border border-[var(--border-line)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 border-t border-[var(--border-line)] flex items-center justify-between">
                          <Link
                            to={`/projects/${project.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
                          >
                            <span>Full Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] hover:underline transition-colors"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="w-3 h-3" />
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

      {/* Production Delivery Pipeline - CenterFlow */}
      <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-6 sm:p-10 relative overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                  Full-Cycle Architecture
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                  The Project Delivery Pipeline
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                  How every system in our portfolio travels from algorithmic design to zero-downtime deployment.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 w-fit">
                <Workflow className="w-3.5 h-3.5" /> 8 Pipeline Nodes
              </span>
            </div>

            <div className="h-[480px] w-full relative overflow-hidden flex items-center justify-center pt-2">
              <CenterFlow
                centerSize={130}
                nodeSize={72}
                pulseDuration={4.5}
                pulseInterval={5}
                pulseLength={0.4}
                nodeDistance={0.74}
                centerContent={
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <Layers className="w-7 h-7 text-[var(--accent)] animate-pulse mb-1" />
                    <span className="text-[10px] font-mono font-black text-[var(--text-primary)] uppercase tracking-wider">
                      PROJECT
                    </span>
                    <span className="text-[9px] font-mono text-[var(--accent)] font-semibold">
                      Production Core
                    </span>
                  </div>
                }
                nodeItems={[
                  {
                    id: "p1",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">01</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">System Spec</span>
                      </div>
                    ),
                  },
                  {
                    id: "p2",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">02</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">UI Prototype</span>
                      </div>
                    ),
                  },
                  {
                    id: "p3",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">03</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">React Frontend</span>
                      </div>
                    ),
                  },
                  {
                    id: "p4",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">04</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">REST / GraphQL</span>
                      </div>
                    ),
                  },
                  {
                    id: "p5",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">05</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Database Schema</span>
                      </div>
                    ),
                  },
                  {
                    id: "p6",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">06</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Load Testing</span>
                      </div>
                    ),
                  },
                  {
                    id: "p7",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">07</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Security Audit</span>
                      </div>
                    ),
                  },
                  {
                    id: "p8",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">08</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">CDN Deployment</span>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-display text-3xl font-bold text-[var(--text-primary)]">
            Ready to Deploy Your Own Application?
          </h3>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            From proof-of-concept MVP to high-traffic enterprise platform, TechSasi handles design, full-stack development, and cloud setup.
          </p>
          <div className="pt-2">
            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 rounded-lg shadow-md transition-transform hover:-translate-y-0.5"
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