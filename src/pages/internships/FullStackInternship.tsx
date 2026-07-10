import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Terminal,
  Briefcase,
  Layers,
  Cpu,
  Globe,
  CheckCircle,
  Clock,
  MapPin,
  Building,
  BrainCircuit,
  Bot,
  Database
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";

/* ------------------------------------------------------------------
   1. ANIMATION HOOK: Elements view-la neat-ah reveal aaga
--------------------------------------------------------------------- */
const useBlurReveal = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (el: HTMLDivElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
};

/* ------------------------------------------------------------------
   2. AI FULL STACK INTERNSHIP PROFILES DATA ARRAY
--------------------------------------------------------------------- */
const aiFullStackInternships = [
  {
    phase: "01",
    levelName: "LLM Orchestration & Agentic Backends",
    roles: [
      {
        icon: BrainCircuit,
        title: "AI Engineer Intern (LangChain / LlamaIndex)",
        company: "Synthetix AI Labs",
        location: "Remote / Chennai Labs",
        duration: "3 - 6 Months",
        details: "Build advanced multi-agent workflows. Connect LLMs with private data setups using LangChain or LlamaIndex, optimize context memory allocation arrays, and handle recursive prompt schemas.",
        tag: "LangChain, LLMs"
      },
      {
        icon: Terminal,
        title: "Generative AI API Developer",
        company: "NeuralFlow Systems",
        location: "Remote (India)",
        duration: "3 Months",
        details: "Construct backend routing channels for AI pipelines. Connect securely with OpenAI/Anthropic SDK engines, set up streaming response nodes via FastAPI, and engineer fallback logic filters.",
        tag: "FastAPI, OpenAI SDK"
      }
    ]
  },
  {
    phase: "02",
    levelName: "Vector Databases & Semantic Storage",
    roles: [
      {
        icon: Database,
        title: "RAG Pipeline Systems Intern",
        company: "Cortex Knowledge Bases",
        location: "Hybrid / Bangalore",
        duration: "6 Months",
        details: "Develop high-speed Retrieval-Augmented Generation (RAG) loops. Chunk raw file matrices, convert text streams into high-dimensional vector arrays, and index assets into vector collections.",
        tag: "Pinecone, ChromaDB"
      },
      {
        icon: Layers,
        title: "Data Chunking & Embedding Specialist",
        company: "OmniData AI",
        location: "Remote",
        duration: "3 Months",
        details: "Optimize search recall scoring parameters. Structure data extraction workflows from multi-format logs, test tokenizers performance, and fine-tune semantic routing layers.",
        tag: "Embeddings, Tokenizers"
      }
    ]
  },
  {
    phase: "03",
    levelName: "AI Interfaces & UI Agent Dashboards",
    roles: [
      {
        icon: Bot,
        title: "AI Interface Frontend Intern (Next.js)",
        company: "Prism Interface Studios",
        location: "Hybrid / Coimbatore",
        duration: "6 Months",
        details: "Assemble live generative text/image chat surfaces. Code responsive client layouts using Next.js/React, manage real-time Server-Sent Events (SSE) data buffers, and design stream markers.",
        tag: "Next.js, SSE Streams"
      },
      {
        icon: Globe,
        title: "AI Agent Dashboard Developer",
        company: "Vanguard Automation Labs",
        location: "Remote / Hyderabad",
        duration: "3 Months",
        details: "Build visual tracking layout grids for autonomous agent metrics. Connect dynamic canvas monitors, wire parameter toggles, and handle continuous background data polling operations.",
        tag: "React, Websockets"
      }
    ]
  }
];

const AiFullStackInternshipsPage = () => {
  const reveal = useBlurReveal();
  const [selectedTrack, setSelectedTrack] = useState(0);

  /* ------------------------------------------------------------------
     3. SCROLL HANDLING FUNCTION (Mobile view point-ah target panna)
  --------------------------------------------------------------------- */
  const handleTrackSelection = (index: number) => {
    setSelectedTrack(index);
    
    // Mobile screen dimensions-la active track view element-ku automatic smooth scroll run pannum
    setTimeout(() => {
      const element = document.getElementById(`phase-content-block`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <PageLayout>
      {/* Studio Clean Dark Matrix Interface Wrapper */}
      <div className="bg-zinc-950 text-zinc-200 min-h-screen selection:bg-orange-500 selection:text-black font-sans antialiased">
        
        {/* ================= HERO INTRO SECTION ================= */}
        <section className="relative pt-44 pb-24 border-b border-zinc-900 bg-zinc-950">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header Box: White & Orange Typography */}
            <div ref={reveal} className="blur-reveal lg:col-span-8 space-y-6 text-left">
              <div className="text-xs font-mono uppercase tracking-widest text-orange-500 flex items-center gap-2 font-semibold">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" /> Cognitive Deployment Suite
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white leading-[1.05]">
                AI Full Stack <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Internship Console
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
                Step onto the cutting edge of cognitive product engineering. Scale semantic data routers, orchestrate agentic tool chains, and assemble fluid real-time streaming interfaces.
              </p>
            </div>

            {/* Right Strategic Action Buttons */}
            <div ref={reveal} className="blur-reveal lg:col-span-4 text-left lg:text-right space-y-4 pt-4 lg:pt-16">
              <Link
                to="/apply-general"
                className="inline-flex w-full lg:w-auto items-center justify-between lg:justify-center gap-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs px-6 py-4 rounded-lg transition duration-200 shadow-xl shadow-orange-500/10"
              >
                Submit AI Profile <ArrowUpRight size={14} className="text-zinc-950" />
              </Link>
              <p className="text-[11px] font-mono text-zinc-500 lg:text-right">
                All portfolios undergo absolute orchestration validation.
              </p>
            </div>

          </div>
        </section>

        {/* ================= DIAGNOSTIC TRACK ENGINE ROW ================= */}
        <section className="border-b border-zinc-900 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900">
              {[
                { label: "Active Nodes Open", data: "12 Strategic Pools" },
                { label: "Stipend Bounds", data: "₹25k - ₹50k/mo" },
                { label: "Pipeline Layout", data: "Remote / Hybrid" },
                { label: "Conversion Targets", data: "88% PPO Allocation" },
              ].map((kpi, index) => (
                <div key={index} ref={reveal} className="blur-reveal bg-zinc-950 py-8 px-2 text-left space-y-1">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{kpi.label}</div>
                  <div className="text-lg sm:text-xl font-mono text-orange-400 font-semibold tracking-tight">{kpi.data}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SPLIT ROADMAP MONITOR CONSOLE ================= */}
        <section className="py-24 sm:py-32 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sticky Left Tracker Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 sm:space-y-8 text-left">
              <div className="space-y-2">
                <div className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">// Model Domain Sorting</div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Internship Tracks</h2>
                <p className="text-xs text-zinc-500 block sm:hidden">Track name-ah click panna open roles keela auto scroll aagum</p>
              </div>

              {/* Dynamic Selector Buttons with mobile auto-scroll handler loop */}
              <div className="space-y-2 border-l border-zinc-900 pl-4">
                {aiFullStackInternships.map((track, index) => (
                  <button
                    key={index}
                    onClick={() => handleTrackSelection(index)}
                    className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-mono transition duration-200 block ${
                      selectedTrack === index
                        ? "text-orange-400 bg-zinc-900/60 border border-zinc-850 font-semibold"
                        : "text-zinc-500 bg-transparent border-transparent hover:text-zinc-300"
                    }`}
                  >
                    Track {track.phase} — {track.levelName}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Dynamic Column: Content Target Block with scroll margin */}
            <div id="phase-content-block" className="lg:col-span-8 text-left space-y-8 scroll-mt-28">
              <div className="pb-4 border-b border-zinc-900 flex justify-between items-center">
                <span className="text-xs font-mono text-zinc-500">Displaying AI Sub-Array ({aiFullStackInternships[selectedTrack].phase}/03)</span>
                <span className="text-xs font-semibold text-orange-400 bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded max-w-[220px] sm:max-w-none truncate">
                  {aiFullStackInternships[selectedTrack].levelName}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {aiFullStackInternships[selectedTrack].roles.map((role, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-6 bg-zinc-900/20 border border-zinc-900 hover:border-orange-500/30 rounded-xl transition duration-300 flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="text-orange-400 bg-zinc-900 p-2.5 rounded-lg border border-zinc-850 group-hover:border-orange-500/20 transition duration-300">
                          <role.icon size={16} className="stroke-[1.5]" />
                        </div>
                        <span className="text-[10px] font-mono tracking-wider bg-zinc-900 border border-zinc-900 px-2 py-0.5 rounded text-zinc-400">
                          {role.tag}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="text-white text-base font-semibold tracking-tight group-hover:text-orange-400 transition duration-200">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 font-mono">
                          <span className="flex items-center gap-1"><Building size={12} /> {role.company}</span>
                          <span className="flex items-center gap-1"><MapPin size={12} /> {role.location}</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {role.duration}</span>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                        {role.details}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Gateways Open
                      </div>
                      <Link
                        to={`/apply/${role.title.toLowerCase().replace(/ /g, "-")}`}
                        className="text-[11px] font-mono text-orange-400 hover:text-orange-300 flex items-center gap-1 group/link"
                      >
                        Apply Console <ArrowUpRight size={12} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= CALL TO ACTION FOOTER BANNER ================= */}
        <section className="py-24 bg-zinc-950 border-t border-zinc-900">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto">
            <div
              ref={reveal}
              className="blur-reveal bg-zinc-900/30 border border-zinc-900 rounded-2xl p-8 sm:p-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-2 text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Ready to lock your <span className="text-orange-500">AI Framework Credentials?</span>
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Route your orchestration repository assets straight to our automated verification system pipelines. Approved profile layers unlock immediate priority listings across corporate engineering squads.
                </p>
              </div>

              <Link
                to="/apply-general"
                className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold px-6 py-4 rounded-lg transition duration-200 shadow-xl flex-shrink-0 w-full lg:w-auto justify-center"
              >
                Launch General Registry <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default AiFullStackInternshipsPage;