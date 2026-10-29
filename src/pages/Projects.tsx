import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { ExternalLink, ArrowRight, Globe, RefreshCw, Layers, Workflow, Sparkles } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/skeletons";
import { CenterFlow } from "@/components/ui/center-flow";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TiltedCard } from "@/components/ui/tilted-card";
import projectsData from "@/data/projects.json";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

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

  const getLivePagePreviewUrl = (url: string) => {
    if (!url) return null;
    return `https://api.microlink.io?url=${encodeURIComponent(
      url
    )}&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=1000`;
  };

  return (
    <Layout>
      <div className="w-full min-h-screen bg-white text-slate-900">
        {/* Hero Header */}
        <section 
          className="pt-36 pb-20 bg-white border-b border-slate-200 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Ambient Glow in Cyan & Electric Blue */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[820px] h-[380px] bg-gradient-to-b from-[#00f0ff]/25 via-[#0070f3]/15 to-transparent blur-[140px] rounded-full" 
          />
          
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

              {/* Tag / Badge */}
              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/80 border border-cyan-200 text-xs font-mono font-bold tracking-wide uppercase shadow-xs"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00a8ff]" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff] font-extrabold">
                  Engineering Portfolio
                </span>
                <span className="text-cyan-300">·</span>
                <span className="text-slate-500">Verified Deployments</span>
              </div>

              {/* Main Heading with Mixed Cyan & Electric Blue */}
              <h1 
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] text-balance"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Applications Engineered for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8e0] via-[#0080ff] to-[#0048ff] filter drop-shadow-[0_2px_12px_rgba(0,180,255,0.35)]">
                  Real-World Demands.
                </span>
              </h1>

              <p 
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl pt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Explore live client portals, custom business applications, and scalable platforms engineered by TechSasi with guaranteed sub-second speeds and 99.9% uptime SLA.
              </p>
            </div>
          </div>
        </section>

        {/* Segmented Filter Control */}
        <section 
          className="py-5 bg-white/95 border-b border-slate-200 sticky top-16 z-30 backdrop-blur-md"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleFilterChange(category)}
                    className={`relative px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-cyan-700 hover:bg-cyan-50/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectPill"
                        className="absolute inset-0 bg-gradient-to-r from-[#00d2ff] via-[#0088ff] to-[#0051ff] rounded-xl shadow-[0_4px_16px_rgba(0,168,255,0.4)] -z-10"
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

        {/* Project Grid Section */}
        <section 
          className="py-20 bg-white border-b border-slate-200"
          data-aos="fade-up"
        >
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
                  {filteredProjects.map((project, index) => {
                    const domain = project.liveUrl
                      ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                      : `${project.id}.com`;

                    const liveScreenshotUrl = getLivePagePreviewUrl(project.liveUrl);

                    return (
                      <div 
                        key={project.id}
                        data-aos="zoom-in-up"
                        data-aos-delay={100 + index * 60}
                        className="h-full"
                      >
                        <TiltedCard
                          maxAngle={6}
                          scaleOnHover={1.02}
                          showGlare={true}
                          className="h-full"
                        >
                          <SpotlightCard
                            enableTilt={false}
                            spotlightColor="rgba(0, 168, 255, 0.14)"
                            borderColor="rgba(0, 180, 255, 0.45)"
                            className="h-full flex flex-col justify-between group rounded-3xl bg-white border border-slate-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_18px_40px_-10px_rgba(0,168,255,0.25)] hover:border-cyan-400"
                          >
                            {/* Browser Shell Window */}
                            <div className="relative border-b border-slate-200 bg-slate-50 overflow-hidden select-none">
                              <div className="h-8 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between px-3.5">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                                </div>

                                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-500 max-w-[190px] truncate shadow-2xs">
                                  <Globe className="w-2.5 h-2.5 text-[#0099ff] shrink-0" />
                                  <span className="truncate text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 font-semibold">
                                    {domain}
                                  </span>
                                </div>

                                <span className="text-[9px] font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#00c8e0] to-[#0051ff] flex items-center gap-1 font-black">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] animate-pulse" />
                                  LIVE
                                </span>
                              </div>

                              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                                {liveScreenshotUrl ? (
                                  <img
                                    src={liveScreenshotUrl}
                                    alt={`${project.title} live webpage front page UI`}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-[1.02] transition-all duration-500 ease-out"
                                    loading="lazy"
                                  />
                                ) : null}

                                {!project.liveUrl && (
                                  <div className="w-full h-full p-4 flex flex-col justify-center items-center bg-slate-100 text-center">
                                    <RefreshCw className="w-6 h-6 text-[#0099ff] animate-spin mb-2" />
                                    <span className="text-xs font-mono text-slate-500">Loading Live Interface...</span>
                                  </div>
                                )}

                                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                                  <Link
                                    to={`/projects/${project.id}`}
                                    className="px-3.5 py-1.5 rounded-xl bg-white text-slate-900 border border-slate-200 text-xs font-bold shadow-md hover:bg-cyan-50 hover:text-cyan-700 transition-transform hover:scale-105"
                                  >
                                    Case Study
                                  </Link>
                                  {project.liveUrl && (
                                    <a
                                      href={project.liveUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#0088ff] to-[#0051ff] text-white text-xs font-black uppercase tracking-wider shadow-md hover:brightness-110 inline-flex items-center gap-1.5 transition-transform hover:scale-105"
                                    >
                                      <span>Visit Website</span>
                                      <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                  )}
                                </div>

                                <div className="absolute top-2.5 right-2.5 z-10">
                                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 border border-cyan-200 shadow-xs">
                                    {project.category}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Title & Metrics Header */}
                            <div className="p-6 border-b border-slate-100 bg-white">
                              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff]">
                                  Production
                                </span>
                                <span className="text-slate-500">
                                  {project.metrics?.loadTime ? `Load: ${project.metrics.loadTime}` : "Verified Live"}
                                </span>
                              </div>

                              <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-700 transition-all line-clamp-1">
                                {project.title}
                              </h3>

                              <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                                {project.description}
                              </p>

                              {project.metrics && (
                                <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-xs font-mono">
                                  {Object.entries(project.metrics).slice(0, 3).map(([k, v]) => (
                                    <div key={k}>
                                      <span className="text-[10px] text-slate-400 uppercase block truncate">{k}</span>
                                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 font-extrabold tabular-nums">{v}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Case Study Details */}
                            <div className="p-6 flex flex-col justify-between flex-1 space-y-5 bg-white">
                              <div className="space-y-3 text-xs text-slate-600">
                                {project.caseStudy && (
                                  <>
                                    <div>
                                      <span className="font-bold text-slate-900 block mb-1">
                                        Challenge & Solution:
                                      </span>
                                      <p className="line-clamp-3 leading-relaxed text-slate-600">
                                        {project.caseStudy.solution}
                                      </p>
                                    </div>

                                    <div>
                                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff] block mb-0.5">
                                        Measurable Outcome:
                                      </span>
                                      <p className="text-slate-800 line-clamp-2 leading-relaxed">
                                        {project.caseStudy.outcome}
                                      </p>
                                    </div>
                                  </>
                                )}

                                <div className="flex flex-wrap gap-1.5 pt-2">
                                  {project.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-[11px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 bg-cyan-50/70 px-2 py-0.5 rounded-md border border-cyan-200"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <Link
                                  to={`/projects/${project.id}`}
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 transition-all"
                                >
                                  <span>Full Case Study</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-[#0088ff] group-hover:translate-x-1 transition-transform" />
                                </Link>

                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff] hover:opacity-80 transition-opacity"
                                  >
                                    <span>Live Demo</span>
                                    <ExternalLink className="w-3 h-3 text-[#0051ff]" />
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

        {/* Production Delivery Pipeline */}
        <section 
          className="py-20 bg-white border-b border-slate-200 relative overflow-hidden"
          data-aos="fade-up"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-50/70 border border-slate-200 p-6 sm:p-10 relative overflow-hidden shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff]">
                    Full-Cycle Architecture
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                    The Project Delivery Pipeline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    How every system in our portfolio travels from algorithmic design to zero-downtime deployment.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-50 border border-cyan-200 w-fit">
                  <Workflow className="w-3.5 h-3.5 text-[#0099ff]" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">8 Pipeline Nodes</span>
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
                  lineColor="rgba(0, 168, 255, 0.28)"
                  pulseColor="#00b4d8"
                  centerContent={
                    <div className="flex flex-col items-center justify-center text-center p-2">
                      <Layers className="w-7 h-7 text-[#0099ff] animate-pulse mb-1" />
                      <span className="text-[10px] font-mono font-black text-slate-900 uppercase tracking-wider">
                        PROJECT
                      </span>
                      <span className="text-[9px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff]">
                        Production Core
                      </span>
                    </div>
                  }
                  nodeItems={[
                    {
                      id: "p1",
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                          <span className="text-[8px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">01</span>
                          <span className="text-[9px] font-bold text-white leading-tight">System Spec</span>
                        </div>
                      ),
                    },
                    {
                      id: "p2",
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                          <span className="text-[8px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">02</span>
                          <span className="text-[9px] font-bold text-white leading-tight">UI Prototype</span>
                        </div>
                      ),
                    },
                    {
                      id: "p3",
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                          <span className="text-[8px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">03</span>
                          <span className="text-[9px] font-bold text-white leading-tight">React Frontend</span>
                        </div>
                      ),
                    },
                    {
                      id: "p4",
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                          <span className="text-[8px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">04</span>
                          <span className="text-[9px] font-bold text-white leading-tight">REST / GraphQL</span>
                        </div>
                      ),
                    },
                    {
                      id: "p5",
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                          <span className="text-[8px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">05</span>
                          <span className="text-[9px] font-bold text-white leading-tight">Database Schema</span>
                        </div>
                      ),
                    },
                    {
                      id: "p6",
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                          <span className="text-[8px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">06</span>
                          <span className="text-[9px] font-bold text-white leading-tight">Load Testing</span>
                        </div>
                      ),
                    },
                    {
                      id: "p7",
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                          <span className="text-[8px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">07</span>
                          <span className="text-[9px] font-bold text-white leading-tight">Security Audit</span>
                        </div>
                      ),
                    },
                    {
                      id: "p8",
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                          <span className="text-[8px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">08</span>
                          <span className="text-[9px] font-bold text-white leading-tight">CDN Deployment</span>
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
        <section 
          className="py-24 bg-white"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              Ready to Deploy Your Own Application?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              From proof-of-concept MVP to high-traffic enterprise platform, TechSasi handles design, full-stack development, and cloud setup.
            </p>
            <div className="pt-2">
              <Link
                to="/proposal"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#00d2ff] via-[#0088ff] to-[#0051ff] hover:from-[#00e1ff] hover:to-[#0040e0] rounded-full shadow-[0_4px_22px_rgba(0,168,255,0.45)] hover:shadow-[0_6px_28px_rgba(0,168,255,0.65)] transition-all active:scale-95 cursor-pointer"
              >
                <span>Build Project Proposal</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;