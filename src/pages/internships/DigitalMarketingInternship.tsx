import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  TrendingUp,
  Search,
  BarChart2,
  Share2,
  Mail,
  Layers,
  Clock,
  MapPin,
  Building,
  Target,
  Sparkles
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
   2. DIGITAL MARKETING INTERNSHIP PROFILES DATA ARRAY
--------------------------------------------------------------------- */
const marketingInternships = [
  {
    phase: "01",
    levelName: "Performance Marketing & Paid Acquisition",
    roles: [
      {
        icon: Target,
        title: "Performance Marketing Intern (Meta & Google Ads)",
        company: "GrowthX Media Labs",
        location: "Remote / Chennai Labs",
        duration: "3 Months",
        details: "Manage active ad spend matrices. Set up precise target audience pixels, draft high-converting ad copy angles, execute A/B test split variations, and audit daily cost-per-click metrics.",
        tag: "Paid Ads, ROAS"
      },
      {
        icon: BarChart2,
        title: "Growth Marketing & Analytics Associate",
        company: "Velocity SaaS Corp",
        location: "Remote (India)",
        duration: "3 - 6 Months",
        details: "Track user acquisition funnels. Configure custom Google Analytics 4 event loops, map drop-off parameters across conversion tracks, and build weekly performance data arrays.",
        tag: "GA4, GTM, Looker Studio"
      }
    ]
  },
  {
    phase: "02",
    levelName: "Search Engine Optimization (SEO) & Content Strategy",
    roles: [
      {
        icon: Search,
        title: "SEO Specialists & Technical Optimization Intern",
        company: "RankPulse Core",
        location: "Hybrid / Bangalore",
        duration: "6 Months",
        details: "Audit search engine data matrices. Run detailed keyword intent clustering algorithms, fix technical indexing errors, optimize page-speed metadata, and execute semantic backlink logic.",
        tag: "Semrush, Ahrefs, Technical SEO"
      },
      {
        icon: Sparkles,
        title: "Inbound Content Strategy Intern",
        company: "Craft & Copy Studios",
        location: "Remote",
        duration: "3 Months",
        details: "Design data-backed organic content blueprints. Write search-optimized landing pages, architect high-value lead magnet loops, and scale semantic content funnels.",
        tag: "Copywriting, Content Silos"
      }
    ]
  },
  {
    phase: "03",
    levelName: "Social Media Engineering & Automation Hub",
    roles: [
      {
        icon: Share2,
        title: "Social Media Growth Hack Intern (LinkedIn / IG)",
        company: "BrandMatrix Network",
        location: "Hybrid / Coimbatore",
        duration: "3 Months",
        details: "Scale brand footprint layers across organic channels. Engineer dynamic multimedia hook layouts, track algorithm updates, analyze engagement retention loops, and automate video distributions.",
        tag: "Organic Growth, CapCut"
      },
      {
        icon: Mail,
        title: "Retention Marketing & CRM Automation Intern",
        company: "OmniSend E-Comm Solutions",
        location: "Remote / Hyderabad",
        duration: "6 Months",
        details: "Maintain consumer retention loops. Build automated email drip triggers inside Klaviyo/HubSpot, segment subscriber lists by user interactions, and test conversion rates metrics.",
        tag: "Klaviyo, HubSpot, Lifecycle"
      }
    ]
  }
];

const DigitalMarketingInternshipsPage = () => {
  const reveal = useBlurReveal();
  const [selectedTrack, setSelectedTrack] = useState(0);

  /* ------------------------------------------------------------------
     3. SCROLL HANDLING FUNCTION (Mobile view point-ah target panna)
  --------------------------------------------------------------------- */
  const handleTrackSelection = (index: number) => {
    setSelectedTrack(index);
    
    // Mobile viewport-la domain selection maarumpothu exact active block-ku focus scroll aagum
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
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" /> Revenue & Growth Operations Suite
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white leading-[1.05]">
                Digital Marketing <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Growth Internships
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
                Step into live user acquisition war-rooms. Drive measurable business growth by managing high-converting ad budgets, optimizing search data crawls, and structuring automated conversion pipelines.
              </p>
            </div>

            {/* Right Strategic Action Buttons */}
            <div ref={reveal} className="blur-reveal lg:col-span-4 text-left lg:text-right space-y-4 pt-4 lg:pt-16">
              <Link
                to="/apply-general"
                className="inline-flex w-full lg:w-auto items-center justify-between lg:justify-center gap-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs px-6 py-4 rounded-lg transition duration-200 shadow-xl shadow-orange-500/10"
              >
                Submit Growth Profile <ArrowUpRight size={14} className="text-zinc-950" />
              </Link>
              <p className="text-[11px] font-mono text-zinc-500 lg:text-right">
                All portfolios undergo comprehensive conversion-case metrics evaluation.
              </p>
            </div>

          </div>
        </section>

        {/* ================= DIAGNOSTIC TRACK ENGINE ROW ================= */}
        <section className="border-b border-zinc-900 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900">
              {[
                { label: "Active Pools Open", data: "22 Open Openings" },
                { label: "Stipend Matrices", data: "₹12k - ₹28k/mo" },
                { label: "Channel Focus", data: "Omnichannel Growth" },
                { label: "Target Outcome", data: "Direct Metric PPO" },
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
                <div className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">// Domain Filter Matrices</div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Marketing Domains</h2>
                <p className="text-xs text-zinc-500 block sm:hidden">Track name-ah click panna openings keela direct-ah zoom aagum</p>
              </div>

              {/* Dynamic Selector Buttons with mobile auto-scroll handler loop */}
              <div className="space-y-2 border-l border-zinc-900 pl-4">
                {marketingInternships.map((track, index) => (
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
                <span className="text-xs font-mono text-zinc-500">Displaying Marketing Array ({marketingInternships[selectedTrack].phase}/03)</span>
                <span className="text-xs font-semibold text-orange-400 bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded max-w-[220px] sm:max-w-none truncate">
                  {marketingInternships[selectedTrack].levelName}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {marketingInternships[selectedTrack].roles.map((role, rIdx) => (
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
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open for Evaluation
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
                  Want your marketing datasets <span className="text-orange-500">vouched for by top brands?</span>
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Route your growth blueprints, ad account case architectures, or SEO campaign audits straight to our core panel networks. Shortlisted application registries unlock direct evaluation calls with brand performance managers.
                </p>
              </div>

              <Link
                to="/apply-general"
                className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold px-6 py-4 rounded-lg transition duration-200 shadow-xl flex-shrink-0 w-full lg:w-auto justify-center"
              >
                Launch Growth Registry <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default DigitalMarketingInternshipsPage;