import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, ExternalLink, Globe, Sparkles, RefreshCw } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/skeletons";
import { TiltedCard } from "@/components/ui/tilted-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyText } from "@/components/ui/shiny-text";
import projectsData from "@/data/projects.json";

export const ProjectsPreview = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // Trigger animations only once on scroll
      easing: "ease-out-cubic",
    });
  }, []);

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
    <section 
      className="py-24 bg-[#F5F8FF] border-b border-slate-200/80 relative transition-colors duration-300 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Background Brand Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00E5FF]/10 to-[#0061FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0061FF]">
              <span className="font-bold uppercase tracking-wider">Proof of Impact</span>
              <span aria-hidden="true" className="text-[#00E5FF] font-bold">·</span>
              <span className="text-[#64748B]">Production Deployments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight text-balance">
              Engineered Applications in the{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">
                Real World.
              </span>
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Real commercial platforms and high-traffic web applications built with rigorous engineering standards and measurable business outcomes.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0061FF] hover:text-[#0033CC] transition-colors whitespace-nowrap self-start md:self-end group"
          >
            <span>Explore All Deployments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div 
          className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-none"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilterChange(cat)}
                className={`relative px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-[#64748B] hover:text-[#0061FF] hover:bg-[#EAF5FF]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeHomeProjectPill"
                    className="absolute inset-0 bg-[#0061FF] rounded-lg shadow-[0_4px_16px_rgba(0,97,255,0.35)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid with TiltedCards & Electric SpotlightCard */}
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
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {displayProjects.map((project, index) => {
                const domain = project.liveUrl
                  ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                  : `${project.id}.com`;

                const liveScreenshotUrl = getLivePagePreviewUrl(project.liveUrl);

                return (
                  <div
                    key={project.id}
                    data-aos="zoom-in-up"
                    data-aos-delay={200 + index * 100}
                  >
                    <TiltedCard
                      maxAngle={8}
                      scaleOnHover={1.02}
                      showGlare={true}
                      className="h-full"
                    >
                      <SpotlightCard
                        enableTilt={false}
                        spotlightColor="rgba(0, 229, 255, 0.15)"
                        borderColor="rgba(0, 97, 255, 0.4)"
                        className="h-full flex flex-col justify-between group hover:shadow-[0_12px_40px_rgba(0,97,255,0.15)] transition-shadow duration-300 bg-white"
                      >
                        {/* Browser Window Chrome */}
                        <div className="relative border-b border-slate-200 bg-slate-100 overflow-hidden select-none">
                          <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center justify-between px-3">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                            </div>

                            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-[#64748B] max-w-[200px] truncate shadow-xs">
                              <Globe className="w-2.5 h-2.5 text-[#0061FF] shrink-0" />
                              <span className="truncate text-[#111827] font-semibold">
                                {domain}
                              </span>
                            </div>

                            <span className="text-[9px] font-mono text-[#0061FF] flex items-center gap-1 font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                              LIVE
                            </span>
                          </div>

                          {/* Webpage Screen View Container */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                            {project.image || liveScreenshotUrl ? (
                              <img
                                src={project.image || liveScreenshotUrl}
                                alt={`${project.title} live webpage UI`}
                                className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-[1.03] transition-all duration-500 ease-out"
                                loading="lazy"
                                onError={(e) => {
                                  const target = e.currentTarget as HTMLImageElement;
                                  if (project.image && target.src !== liveScreenshotUrl && liveScreenshotUrl) {
                                    target.src = liveScreenshotUrl;
                                  } else {
                                    target.style.display = "none";
                                  }
                                }}
                              />
                            ) : null}

                            {!project.image && !project.liveUrl && (
                              <div className="w-full h-full p-4 flex flex-col justify-center items-center bg-slate-900 text-center">
                                <RefreshCw className="w-6 h-6 text-[#00E5FF] animate-spin mb-2" />
                                <span className="text-xs font-mono text-slate-300">
                                  Loading Live Interface...
                                </span>
                              </div>
                            )}

                            {/* Hover Overlay Button to Open Actual Page */}
                            <div className="absolute inset-0 bg-[#001B66]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                              <Link
                                to={`/projects/${project.id}`}
                                className="px-3.5 py-1.5 rounded-lg bg-white text-[#111827] text-xs font-bold shadow hover:border-[#0061FF] transition-all hover:scale-105 border border-slate-200"
                              >
                                Case Study
                              </Link>
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#0061FF] text-[#001B66] text-xs font-black shadow-[0_4px_16px_rgba(0,97,255,0.45)] hover:shadow-[0_6px_22px_rgba(0,97,255,0.6)] inline-flex items-center gap-1.5 transition-transform hover:scale-105 border border-[#66CCFF]/30"
                                >
                                  <span>Visit Website</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>

                            {/* Category Tag */}
                            <div className="absolute top-2.5 right-2.5 z-10">
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#001B66]/90 backdrop-blur-md text-[#00E5FF] border border-[#0061FF]/40 shadow-xs">
                                {project.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Card Description & Metrics */}
                        <div className="p-6 border-b border-slate-200 bg-white relative">
                          <div className="flex items-center justify-between text-xs text-[#64748B] font-mono mb-2">
                            <span className="text-[11px] uppercase tracking-wider text-[#0061FF] font-bold">
                              Deployment
                            </span>
                            <span className="text-[#0061FF] font-bold">
                              {project.metrics?.loadTime
                                ? `Load: ${project.metrics.loadTime}`
                                : "Verified Live"}
                            </span>
                          </div>

                          <h3 className="font-display text-xl font-bold text-[#111827] group-hover:text-[#0061FF] transition-colors line-clamp-1">
                            {project.title}
                          </h3>

                          <p className="text-xs text-[#64748B] mt-2 line-clamp-2 leading-relaxed">
                            {project.description}
                          </p>

                          {project.metrics && (
                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                              {Object.entries(project.metrics)
                                .slice(0, 2)
                                .map(([key, val]) => (
                                  <div key={key}>
                                    <span className="text-[#64748B] uppercase text-[10px] block font-semibold">
                                      {key}
                                    </span>
                                    <span className="text-[#111827] font-bold tabular-nums">
                                      {val}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>

                        {/* Card Bottom: Delivered Solution & Technologies */}
                        <div className="p-6 flex flex-col justify-between flex-1 space-y-5 bg-[#F5F8FF]/50">
                          <div className="space-y-3 text-xs text-[#64748B]">
                            <div>
                              <span className="font-bold text-[#111827] block mb-1">
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
                                  className="text-[11px] font-mono font-bold text-[#0033CC] bg-[#EAF5FF] px-2.5 py-0.5 rounded-md border border-[#66CCFF]/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Card Footer Links */}
                          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                            <Link
                              to={`/projects/${project.id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] group-hover:text-[#0061FF] transition-colors"
                            >
                              <span>Read Full Case Study</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#0061FF]" />
                            </Link>

                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-mono text-[#64748B] hover:text-[#0061FF] transition-colors"
                                title="Open Live Deployment"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </SpotlightCard>
                    </TiltedCard>
                  </div>
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