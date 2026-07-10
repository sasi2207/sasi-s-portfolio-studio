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
  ShieldCheck,
  Server
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
   2. JAVA INTERNSHIP PROFILES DATA ARRAY
--------------------------------------------------------------------- */
const javaInternships = [
  {
    phase: "01",
    levelName: "Enterprise Spring Boot Engineering",
    roles: [
      {
        icon: Server,
        title: "Junior Java Spring Boot Intern",
        company: "Innova Enterprise Systems",
        location: "Remote / Chennai Labs",
        duration: "3 - 6 Months",
        details: "Work on scalable backend APIs. Design dependency injection components, wire MVC controllers, build dynamic request routing maps, and isolate exceptions using structural global handling parameters.",
        tag: "Spring Boot, Maven"
      },
      {
        icon: Cpu,
        title: "Java REST Endpoint Developer Intern",
        company: "Vanguard Finserv Labs",
        location: "Remote (India)",
        duration: "3 Months",
        details: "Construct high-throughput database endpoints. Set up structural transactional boundaries using Spring Data JPA, configure query parameters, and handle precise object mappings.",
        tag: "REST API, JPA, Hibernate"
      }
    ]
  },
  {
    phase: "02",
    levelName: "Core Java Logic & Multi-Threading",
    roles: [
      {
        icon: Terminal,
        title: "Java Core Systems Scripting Intern",
        company: "Alpha Logic Networks",
        location: "Hybrid / Bangalore",
        duration: "6 Months",
        details: "Optimize high-performance internal logic. Build customized collection wrappers, debug execution deadlocks inside multi-threaded structures, and stream text assets using Java I/O APIs.",
        tag: "Collections, Threads"
      },
      {
        icon: Layers,
        title: "Data Microservices Pipeline Intern",
        company: "Infinitum Analytics",
        location: "Remote",
        duration: "3 Months",
        details: "Manage large functional data workflows. Leverage Java Streams API and Lambda expressions to filter data matrix rows, and connect channels with distributed relational setups.",
        tag: "Java Streams, SQL"
      }
    ]
  },
  {
    phase: "03",
    levelName: "Cloud Microservices & Enterprise Security",
    roles: [
      {
        icon: ShieldCheck,
        title: "Backend Security & Auth Intern",
        company: "CipherLock Systems",
        location: "Hybrid / Coimbatore",
        duration: "6 Months",
        details: "Implement bulletproof access restrictions across microservice meshes. Configure stateless security filters via Spring Security, manage claims parameters, and intercept JWT validation loops.",
        tag: "Spring Security, JWT"
      },
      {
        icon: Globe,
        title: "Cloud Microservices Associate",
        company: "OmniCloud Stacks",
        location: "Remote / Hyderabad",
        duration: "3 Months",
        details: "Deploy enterprise service routes. Integrate Spring Cloud components, hook up service discovery nodes, manage config profiles, and monitor execution paths using Docker containers.",
        tag: "Spring Cloud, Docker"
      }
    ]
  }
];

const JavaInternshipsPage = () => {
  const reveal = useBlurReveal();
  const [selectedTrack, setSelectedTrack] = useState(0);

  /* ------------------------------------------------------------------
     3. SCROLL HANDLING FUNCTION (Mobile view point-ah target panna)
  --------------------------------------------------------------------- */
  const handleTrackSelection = (index: number) => {
    setSelectedTrack(index);
    
    // Mobile viewport-la index change aagumpothu target content block-ku automatically scroll panna routine loop
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
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" /> Enterprise Placement Architecture
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white leading-[1.05]">
                Java Backend <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Internship Openings
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
                Step directly into production-grade infrastructure arrays. Launch your backend enterprise career by managing Spring frameworks, structuring thread logic, and deploying secure microservice ecosystems.
              </p>
            </div>

            {/* Right Strategic Action Buttons */}
            <div ref={reveal} className="blur-reveal lg:col-span-4 text-left lg:text-right space-y-4 pt-4 lg:pt-16">
              <Link
                to="/apply-general"
                className="inline-flex w-full lg:w-auto items-center justify-between lg:justify-center gap-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs px-6 py-4 rounded-lg transition duration-200 shadow-xl shadow-orange-500/10"
              >
                Submit Engineering Profile <ArrowUpRight size={14} className="text-zinc-950" />
              </Link>
              <p className="text-[11px] font-mono text-zinc-500 lg:text-right">
                All portfolios undergo architectural evaluation metrics.
              </p>
            </div>

          </div>
        </section>

        {/* ================= DIAGNOSTIC TRACK ENGINE ROW ================= */}
        <section className="border-b border-zinc-900 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900">
              {[
                { label: "Active Roles Available", data: "15 Open Pools" },
                { label: "Stipend Bounds", data: "₹18k - ₹40k/mo" },
                { label: "Worksite Framework", data: "Remote / Hybrid" },
                { label: "Conversion Targets", data: "85% PPO Pipeline" },
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
                <div className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">// Enterprise Track Sorting</div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Internship Tracks</h2>
                <p className="text-xs text-zinc-500 block sm:hidden">Track name-ah click panna open roles keela auto scroll aagum</p>
              </div>

              {/* Dynamic Selector Buttons with mobile auto-scroll handler loop */}
              <div className="space-y-2 border-l border-zinc-900 pl-4">
                {javaInternships.map((track, index) => (
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
                <span className="text-xs font-mono text-zinc-500">Displaying Systems Array ({javaInternships[selectedTrack].phase}/03)</span>
                <span className="text-xs font-semibold text-orange-400 bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded max-w-[220px] sm:max-w-none truncate">
                  {javaInternships[selectedTrack].levelName}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {javaInternships[selectedTrack].roles.map((role, rIdx) => (
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
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Submittals Active
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
                  Want your backend skills <span className="text-orange-500">vouched for by enterprise firms?</span>
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Submit your engineering profile code files directly into our core review system pipelines. Selected portfolios secure immediate routing options straight to technical hiring managers.
                </p>
              </div>

              <Link
                to="/apply-general"
                className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold px-6 py-4 rounded-lg transition duration-200 shadow-xl flex-shrink-0 w-full lg:w-auto justify-center"
              >
                Access General Registry <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default JavaInternshipsPage;