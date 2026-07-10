import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Search,
  Layout,
  Globe,
  Layers,
  CheckCircle,
  Sparkles,
  Terminal
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

/* ------------------------------------------------------------------
   1. ANIMATION HOOK: Scroll pannumpoothu components-ah neat-ah reveal panna
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
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (el: HTMLDivElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
};

/* ----------------------------------
   2. FEATURES DATA
----------------------------------- */
const staticFeatures = [
  {
    icon: Zap,
    title: "Ultra-Fast Performance",
    text: "Pre-rendered HTML files direct-ah load aagum, so database delays irukathu.",
    borderColor: "hover:border-indigo-500/40",
    glowColor: "group-hover:bg-indigo-500/5",
  },
  {
    icon: ShieldCheck,
    title: "Serverless Security",
    text: "Backend/Database illathathaala SQL injection or hacking threats zero level.",
    borderColor: "hover:border-emerald-500/40",
    glowColor: "group-hover:bg-emerald-500/5",
  },
  {
    icon: Search,
    title: "Advanced Jamstack SEO",
    text: "Lightweight clean structure rendering, search engine bots-ku romba pudikum.",
    borderColor: "hover:border-indigo-500/40",
    glowColor: "group-hover:bg-indigo-500/5",
  },
  {
    icon: Layout,
    title: "Next-Gen Responsiveness",
    text: "Mobile, Tablet, Desktop-nu ella screen size-kum automatic-ah adapt aagum.",
    borderColor: "hover:border-emerald-500/40",
    glowColor: "group-hover:bg-emerald-500/5",
  },
  {
    icon: Globe,
    title: "Edge CDN Deployment",
    text: "Vercel, Netlify, or AWS Edge Cloud-la deploy panuvom. Global-ah fast-ah irukum.",
    borderColor: "hover:border-indigo-500/40",
    glowColor: "group-hover:bg-indigo-500/5",
  },
  {
    icon: Layers,
    title: "Near-Zero Upkeep Cost",
    text: "Heavy hosting dynamic servers thevaiyillai. Monthly maintenance expense illa.",
    borderColor: "hover:border-emerald-500/40",
    glowColor: "group-hover:bg-emerald-500/5",
  },
];

const StaticWebsite = () => {
  const reveal = useBlurReveal();

  return (
    <PageLayout>
      {/* Premium Deep Obsidian Wrapper with Emerald & Indigo accents */}
      <div className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-emerald-500 selection:text-black">
        
        {/* ================= NEW & UPGRADED HERO SECTION ================= */}
        <section className="relative pt-44 pb-36 overflow-hidden border-b border-zinc-900 bg-zinc-950">
          {/* Studio Ambient Gradient Lights behind background */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-20 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none" />

          {/* Grid Decorative Overlay Patterns */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left Side: Advanced Headings & Typography */}
            <div className="lg:col-span-7 text-left blur-reveal is-visible">
              {/* Glowing Tagline Info Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-850 text-xs font-semibold text-emerald-400 mb-8 shadow-inner">
                <Sparkles size={12} className="animate-pulse text-emerald-400" />
                <span>Next-Gen Web Architecture</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-black mb-6 tracking-tight text-white leading-[1.05]">
                Blazing Fast <br />
                <span className="bg-gradient-to-r from-indigo-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Static Websites
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed font-light">
                We design lightweight Jamstack solutions engineered for ultra-fast performance, elite SEO visibility, and absolute zero server maintenance costs.
              </p>

              {/* Action Trigger Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/proposal"
                  className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-emerald-500/10 group"
                >
                  Start Web Project
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform text-zinc-950" />
                </Link>
                
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-850 text-zinc-300 border border-zinc-800 px-8 py-4 rounded-xl transition duration-300 backdrop-blur-sm"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right Side: Advanced Dark Code Window Graphic Interface */}
            <div className="lg:col-span-5 blur-reveal is-visible">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-zinc-900/40 p-4 border border-zinc-850 shadow-2xl backdrop-blur-md overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-emerald-500/5 opacity-100 group-hover:scale-105 transition duration-500 -z-10" />
                
                {/* Mockup Window Top Navigation Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-850 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-zinc-800" />
                    <span className="w-3 h-3 rounded-full bg-zinc-800" />
                    <span className="w-3 h-3 rounded-full bg-zinc-800" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-900">
                    <Terminal size={10} className="text-indigo-400" /> edge-server.js
                  </div>
                </div>

                {/* Mockup Display Box Content */}
                <div className="space-y-3 font-mono text-xs text-left p-2 overflow-x-auto text-zinc-400 leading-relaxed select-none">
                  <p className="text-zinc-600">// Performance Score Engine</p>
                  <p><span className="text-indigo-400">const</span> siteMetrics = <span className="text-emerald-400">new Jamstack</span>();</p>
                  <p>siteMetrics.<span className="text-teal-400">loadTime</span> = <span className="text-amber-400">"0.2s"</span>;</p>
                  <p>siteMetrics.<span className="text-teal-400">databaseQueries</span> = <span className="text-rose-400">0</span>;</p>
                  <p>siteMetrics.<span className="text-teal-400">globalSecurity</span> = <span className="text-emerald-400">true</span>;</p>
                  <p className="pt-2 text-zinc-500">
                    &gt; Deploying static build to 250+ Global Edge CDN locations... 
                    <span className="text-emerald-400 animate-pulse"> Success ✓</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= VALUE STATEMENT ================= */}
        <section className="py-20 bg-zinc-900/20 border-b border-zinc-900">
          <div ref={reveal} className="container-custom max-w-6xl px-6 lg:px-12 blur-reveal text-center">
            <p className="text-xl md:text-2xl font-normal leading-relaxed text-zinc-400">
              We engineer zero-overhead platforms tailored completely for{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                speed, extreme reliability, and seamless discoverability.
              </span>
            </p>
          </div>
        </section>

        {/* ================= FEATURES GRID ================= */}
        <section className="py-32 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticFeatures.map((f, idx) => (
              <div
                key={idx}
                ref={reveal}
                className={`blur-reveal group relative bg-zinc-900/20 border border-zinc-900 p-8 rounded-xl transition duration-300 ${f.borderColor} overflow-hidden`}
              >
                {/* Background Card Hover Subtle Glows */}
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl rounded-xl -z-10 ${f.glowColor}`} />
                
                <f.icon className="text-emerald-400 mb-6 w-7 h-7 transform group-hover:scale-110 transition duration-300" />
                <h3 className="font-semibold text-lg mb-3 text-white tracking-tight">
                  {f.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING PLANS ================= */}
        <section className="py-32 bg-zinc-950 border-t border-zinc-900">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-20 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Transparent Engineering Pricing
              </h2>
              <p className="text-base text-zinc-400 max-w-xl mx-auto">
                Flexible structures designed for growing startups and established products.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  title: "Essential Care",
                  price: "₹9,999",
                  description: "High conversion single-page landing models optimized for target marketing.",
                  features: ["Single-page architectural framework", "Fully fluid mobile responsive UI", "Semantic SEO foundational layer", "Global Edge CDN deployment infrastructure"],
                  highlighted: false,
                },
                {
                  title: "Growth Tier",
                  price: "₹18,500",
                  description: "Multi-page company showcases featuring structured optimization tunnels.",
                  features: ["Up to 5 custom architectural pages", "Premium modernized component UI styling", "Intense multi-device performance audit", "Integrated contact systems & analytics"],
                  highlighted: true,
                },
                {
                  title: "Enterprise Custom",
                  price: "₹32,000+",
                  description: "Full-scale customized layouts backed by production-level fluid animations.",
                  features: ["Unlimited bespoke section assets", "Custom interactions via Framer/GSAP", "Advanced copy & media optimization tunnels", "Direct SLA developer priority support"],
                  highlighted: false,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  ref={reveal}
                  className={`blur-reveal flex flex-col justify-between p-8 rounded-2xl transition duration-300 relative ${
                    plan.highlighted
                      ? "bg-zinc-900 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/5 scale-105 z-10"
                      : "bg-zinc-900/30 border border-zinc-850 hover:border-zinc-800"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      Most Selected
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-white">{plan.title}</h3>
                    <p className="text-zinc-400 text-xs mb-6 leading-relaxed">{plan.description}</p>
                    <div className="text-4xl font-bold text-emerald-400 mb-6">{plan.price}</div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex gap-3 text-zinc-300 text-sm items-start">
                          <CheckCircle className="text-indigo-400 mt-0.5 flex-shrink-0" size={16} />
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/proposal"
                    className={`w-full text-center font-bold py-3.5 rounded-xl transition duration-200 text-sm ${
                      plan.highlighted
                        ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/10"
                        : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                    }`}
                  >
                    Select Strategy
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="py-28 bg-zinc-950 relative">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-850 rounded-2xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white tracking-tight">
                Let's Build Something Exceptional
              </h2>
              <p className="mb-10 text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
                Connect with our system architects to configure your custom web deployment.
              </p>
              <Link
                to="/proposal"
                className="inline-flex items-center gap-3 bg-white text-zinc-950 font-bold px-8 py-4 rounded-xl hover:bg-zinc-200 transition duration-200 shadow-xl"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default StaticWebsite;