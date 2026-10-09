import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { 
  ArrowLeft, 
  ExternalLink, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  Server, 
  Code2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import projectsData from "@/data/projects.json";

export const CaseStudy = () => {
  const { id } = useParams();
  const project = projectsData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-[#06090F] text-white">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold font-display">Case Study Not Found</h1>
            <p className="text-sm text-slate-400">The requested deployment record could not be found in our directory.</p>
            <Link to="/projects" className="inline-flex items-center gap-2 text-amber-400 hover:underline text-sm font-semibold">
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Projects Directory</span>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-[#06090F] border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-1">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Projects", href: "/projects" },
                  { label: project.title, active: true },
                ]}
              />
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Projects</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 pt-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Production Case Study</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] text-balance">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow transition-transform hover:-translate-y-0.5"
                >
                  <span>Launch Live Deployment</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <Link
                to="/proposal"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-white/[0.08] transition-colors"
              >
                <span>Request Similar System</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      {project.metrics && (
        <section className="py-8 bg-[#07090E] border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Object.entries(project.metrics).map(([key, val]) => (
                <div key={key} className="space-y-1">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    {key}
                  </span>
                  <span className="font-display text-2xl font-bold text-white tabular-nums">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Details Body */}
      <section className="py-20 bg-[#07090E] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* The Problem */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">The Challenge</span>
                <h2 className="font-display text-2xl font-bold text-white">
                  Client Problem & Constraints
                </h2>
                <div className="p-6 rounded-2xl bg-[#0C111E] border border-white/[0.08] text-sm text-slate-300 leading-relaxed">
                  {project.caseStudy?.problem || "The client required a scalable, high-performance web platform to resolve operational latency and provide a streamlined digital touchpoint for end users."}
                </div>
              </div>

              {/* The Solution */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">The Engineering</span>
                <h2 className="font-display text-2xl font-bold text-white">
                  Architectural Solution
                </h2>
                <div className="p-6 rounded-2xl bg-[#0C111E] border border-white/[0.08] text-sm text-slate-300 leading-relaxed">
                  {project.caseStudy?.solution || "We architected a clean, decoupled system with React on the frontend and an optimized data backend. Deployed on modern cloud infrastructure with automated caching layers."}
                </div>
              </div>

              {/* Measurable Outcome */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">Commercial Impact</span>
                <h2 className="font-display text-2xl font-bold text-white">
                  Outcome & Measurable Performance
                </h2>
                <div className="p-6 rounded-2xl bg-[#0C111E] border border-white/[0.08] text-sm text-slate-300 leading-relaxed border-l-4 border-l-emerald-400">
                  {project.caseStudy?.outcome || "Delivered sub-second page loads, zero downtime during high volume traffic, and a 100% responsive experience across mobile and desktop devices."}
                </div>
              </div>

            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl bg-[#0C111E] border border-white/[0.08] p-6 space-y-6">
                <h3 className="font-display text-lg font-bold text-white pb-3 border-b border-white/[0.08]">
                  Technical Metadata
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block mb-1">Architecture Category:</span>
                    <span className="text-white font-semibold">{project.category}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-2">Technology Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span key={t} className="bg-black/50 border border-white/[0.08] px-2.5 py-1 rounded text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-1">Code Quality Standard:</span>
                    <span className="text-emerald-400 font-semibold">100% Core Web Vitals Pass</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-1">Deployment Target:</span>
                    <span className="text-white">Edge CDN & Cloud Infrastructure</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <Link
                    to="/proposal"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-colors"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
