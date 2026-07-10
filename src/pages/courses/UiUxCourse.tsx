import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Figma,
  Compass,
  Layers,
  Cpu,
  Globe,
  PenTool,
  Eye,
  Monitor,
  Check,
  Zap,
  Sparkles
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";

/* ------------------------------------------------------------------
   1. ANIMATION HOOK: Elements screen-la neat-ah reveal aaga
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
   2. UI/UX DESIGN STRATEGY SYLLABUS DATA ARRAY
--------------------------------------------------------------------- */
const uiuxSyllabus = [
  {
    phase: "01",
    levelName: "UX Research & Structural Wireframing",
    modules: [
      {
        icon: Compass,
        title: "User Research & Information Architecture",
        details: "Conducting user interviews, mapping user personas, creating comprehensive empathy maps, and structuring absolute user flow charts.",
        tag: "UX Strategy"
      },
      {
        icon: Layers,
        title: "Low-Fidelity & High-Fidelity Wireframes",
        details: "Translating loose layout ideas into structural digital grids. Low-fi sketching rules, layout positioning parameters, and information hierarchies.",
        tag: "Wireframing"
      }
    ]
  },
  {
    phase: "02",
    levelName: "Figma Mechanics & Design Systems",
    modules: [
      {
        icon: Figma,
        title: "Advanced Figma Vector Workspaces",
        details: "Mastering Figma pen tools, boolean operations, auto-layout 5.0 systems, constraint properties, and modular responsive element behaviors.",
        tag: "Figma Core"
      },
      {
        icon: Sparkles,
        title: "Scalable Design Systems & UI Tokens",
        details: "Creating atomic design structures. Mapping global color typography matrices, component variants, custom properties, and variable design modes.",
        tag: "Design Systems"
      }
    ]
  },
  {
    phase: "03",
    levelName: "Visual Design Core & Micro-Interactions",
    modules: [
      {
        icon: Eye,
        title: "Visual Hierarchy & Typography Rules",
        details: "Applying standard grid principles, layout alignments, psychological color balances, spatial management ratios, and extreme text scale pairings.",
        tag: "UI Aesthetics"
      },
      {
        icon: Zap,
        title: "Advanced Smart Animate & Prototyping",
        details: "Building fluid interaction loops. Custom component transitions, interactive hover loops, overlay triggers, and high-fidelity prototype flows.",
        tag: "Prototyping"
      }
    ]
  },
  {
    phase: "04",
    levelName: "Usability Audits & Developer Handoff",
    modules: [
      {
        icon: Monitor,
        title: "Usability Testing & Conversion Audits",
        details: "Setting up recursive A/B testing matrix profiles, analyzing maze telemetry reports, and locating friction patterns across interface views.",
        tag: "UX Auditing"
      },
      {
        icon: PenTool,
        title: "Design Handoff, Specs & Documentation",
        details: "Exporting clean layouts, structuring documentation specs, spacing rules, and communicating asset packages perfectly to frontend developers.",
        tag: "Dev Handoff"
      }
    ]
  }
];

const UiUxCourse = () => {
  const reveal = useBlurReveal();
  const [selectedPhase, setSelectedPhase] = useState(0);

  /* ------------------------------------------------------------------
     3. SCROLL HANDLING FUNCTION (Mobile view point-ah target panna)
  --------------------------------------------------------------------- */
  const handlePhaseSelection = (index: number) => {
    setSelectedPhase(index);
    
    // Mobile screen-la auto-scroll panni target canvas card viewport-ah point panra function
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
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" /> Product Interface Suite
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white leading-[1.05]">
                UI/UX Product Design <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Masterclass Ecosystem
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
                Zero sketch mechanics-la irunthu scalable variable design tokens varai. Master raw information architecture, pixel-perfect layouts, responsive system components, and fluid prototyping models.
              </p>
            </div>

            {/* Right Strategic Action Buttons */}
            <div ref={reveal} className="blur-reveal lg:col-span-4 text-left lg:text-right space-y-4 pt-4 lg:pt-16">
              <Link
                to="/enroll"
                className="inline-flex w-full lg:w-auto items-center justify-between lg:justify-center gap-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs px-6 py-4 rounded-lg transition duration-200 shadow-xl shadow-orange-500/10"
              >
                Launch Design Studio <ArrowUpRight size={14} className="text-zinc-950" />
              </Link>
              <p className="text-[11px] font-mono text-zinc-500 lg:text-right">
                Includes industrial Figma workspaces and product handoff files.
              </p>
            </div>

          </div>
        </section>

        {/* ================= DIAGNOSTIC TRACK ENGINE ROW ================= */}
        <section className="border-b border-zinc-900 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900">
              {[
                { label: "Studio Concept Labs", data: "45+ Hours" },
                { label: "Verified Case Studies", data: "6 Projects" },
                { label: "Core Canvas Engine", data: "Figma Advanced" },
                { label: "Portfolio Metrics", data: "100% Practical" },
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
                <div className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">// Interface Curriculum Blueprint</div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Course Roadmaps</h2>
                <p className="text-xs text-zinc-500 block sm:hidden">Level name-ah click panna cards keela point aagum</p>
              </div>

              {/* Dynamic Selector Buttons with mobile auto-scroll handler loop */}
              <div className="space-y-2 border-l border-zinc-900 pl-4">
                {uiuxSyllabus.map((lvl, index) => (
                  <button
                    key={index}
                    onClick={() => handlePhaseSelection(index)}
                    className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-mono transition duration-200 block ${
                      selectedPhase === index
                        ? "text-orange-400 bg-zinc-900/60 border border-zinc-850 font-semibold"
                        : "text-zinc-500 bg-transparent border-transparent hover:text-zinc-300"
                    }`}
                  >
                    Phase {lvl.phase} — {lvl.levelName}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Dynamic Column: Content Target Block with scroll margin */}
            <div id="phase-content-block" className="lg:col-span-8 text-left space-y-8 scroll-mt-28">
              <div className="pb-4 border-b border-zinc-900 flex justify-between items-center">
                <span className="text-xs font-mono text-zinc-500">Displaying Phase Array ({uiuxSyllabus[selectedPhase].phase}/04)</span>
                <span className="text-xs font-semibold text-orange-400 bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded max-w-[220px] sm:max-w-none truncate">
                  {uiuxSyllabus[selectedPhase].levelName}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {uiuxSyllabus[selectedPhase].modules.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-6 bg-zinc-900/20 border border-zinc-900 hover:border-orange-500/30 rounded-xl transition duration-300 flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="text-orange-400 bg-zinc-900 p-2.5 rounded-lg border border-zinc-850 group-hover:border-orange-500/20 transition duration-300">
                          <mod.icon size={16} className="stroke-[1.5]" />
                        </div>
                        <span className="text-[10px] font-mono tracking-wider bg-zinc-900 border border-zinc-900 px-2 py-0.5 rounded text-zinc-400">
                          {mod.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-white text-base font-semibold tracking-tight group-hover:text-orange-400 transition duration-200">{mod.title}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">{mod.details}</p>
                    </div>

                    <div className="pt-4 border-t border-zinc-900/60 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                      <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" /> Visual UI Sandbox Framework Active
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
                  Ready to deploy high-end <span className="text-orange-500">Product Layouts?</span>
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Join an active collaborative design workspace. Wireframe structured layout flows, compile comprehensive digital tokens variables setups, and pass over design parameters seamlessly to development lines.
                </p>
              </div>

              <Link
                to="/enroll"
                className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold px-6 py-4 rounded-lg transition duration-200 shadow-xl flex-shrink-0 w-full lg:w-auto justify-center"
              >
                Access Design Console <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default UiUxCourse;