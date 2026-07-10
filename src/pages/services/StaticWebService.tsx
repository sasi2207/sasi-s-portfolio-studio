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
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

/* ------------------------------------------------------------------
   1. ANIMATION HOOK: Scroll pannumpoothu smooth-ah reveal aagurathuku
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

/* ------------------------------------------------------------------
   2. FEATURES DATA: Grid-la kaamikira advanced features list
--------------------------------------------------------------------- */
const staticFeatures = [
  {
    icon: Zap,
    title: "Ultra-Fast Performance",
    text: "Pre-rendered HTML files direct-ah load aagum, so database delays irukathu.",
    borderColor: "hover:border-violet-500/50",
    glowColor: "group-hover:bg-violet-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Serverless Security",
    text: "Backend/Database illathathaala SQL injection or hacking threats zero level.",
    borderColor: "hover:border-amber-500/50",
    glowColor: "group-hover:bg-amber-500/10",
  },
  {
    icon: Search,
    title: "Advanced Jamstack SEO",
    text: "Lightweight clean structure rendering, search engine bots-ku romba pudikum.",
    borderColor: "hover:border-violet-500/50",
    glowColor: "group-hover:bg-violet-500/10",
  },
  {
    icon: Layout,
    title: "Next-Gen Responsiveness",
    text: "Mobile, Tablet, Desktop-nu ella screen size-kum automatic-ah adapt aagum.",
    borderColor: "hover:border-amber-500/50",
    glowColor: "group-hover:bg-amber-500/10",
  },
  {
    icon: Globe,
    title: "Edge CDN Deployment",
    text: "Vercel, Netlify, or AWS Edge Cloud-la deploy panuvom. Global-ah fast-ah irukum.",
    borderColor: "hover:border-violet-500/50",
    glowColor: "group-hover:bg-violet-500/10",
  },
  {
    icon: Layers,
    title: "Near-Zero Upkeep Cost",
    text: "Heavy hosting dynamic servers thevaiyillai. Monthly maintenance expense illa.",
    borderColor: "hover:border-amber-500/50",
    glowColor: "group-hover:bg-amber-500/10",
  },
];

const StaticWebsite = () => {
  const reveal = useBlurReveal();

  return (
    <PageLayout>
      {/* Black Theme Wrapper with Glow Accents */}
      <div className="bg-black text-zinc-100 min-h-screen selection:bg-violet-500 selection:text-white">
        
        {/* ================= HERO SECTION (Top Entry) ================= */}
        <ParallaxSection
          className="pt-40 pb-32 overflow-hidden relative"
          bgClassName="bg-black border-b border-zinc-800"
        >
          {/* Advanced Visual Neon Glows Behind Content */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="blur-reveal is-visible">
              <h1 className="text-5xl xl:text-6xl font-heading font-bold mb-6 tracking-tight text-white">
                Static Website{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
                Speed, extreme security, and top-tier SEO outcomes. Modern web applications 
                built using advanced static pre-rendering architectures.
              </p>

              <Link
                to="/proposal"
                className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-lg shadow-violet-600/20 hover:shadow-violet-600/30 group"
              >
                Request Quote{" "}
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Column: Premium Graphical Box Design */}
            <div ref={reveal} className="hidden lg:block blur-reveal">
              <div className="h-[420px] rounded-3xl bg-gradient-to-br from-zinc-900 to-black p-[1px] border border-zinc-800 shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-amber-500/10 opacity-50 group-hover:opacity-100 transition duration-500" />
                <div className="w-full h-full bg-zinc-950 rounded-[23px]" />
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* ================= VALUE STATEMENT (Simple Catchy Quote) ================= */}
        <section className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
          <div
            ref={reveal}
            className="container-custom max-w-6xl px-6 lg:px-12 blur-reveal text-center"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-300">
              We focus on what builds business conversions —{" "}
              <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent font-semibold">
                speed, unmatched reliability, and core simplicity.
              </span>
            </p>
          </div>
        </section>

        {/* ================= FEATURES GRID (6 Dynamic Cards) ================= */}
        <section className="py-32 bg-black">
          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticFeatures.map((f) => (
              <div
                key={f.title}
                ref={reveal}
                className={`blur-reveal group relative bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl transition duration-300 ${f.borderColor} overflow-hidden`}
              >
                {/* Advanced Neon Hover Effect */}
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl -z-10 ${f.glowColor}`} />
                
                <f.icon className="text-violet-400 mb-5 w-8 h-8 transform group-hover:scale-110 transition duration-300" />
                <h3 className="font-semibold text-xl mb-3 text-white">
                  {f.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING SECTION (Standard Data Mapping) ================= */}
        <section className="py-32 bg-black border-t border-zinc-900">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Transparent Engineering Pricing
              </h2>
              <p className="text-lg text-zinc-400 max-w-xl">
                Affordable, high-end plans adapted around your scaling complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  title: "Basic Suite",
                  price: "₹4,000+",
                  description: "Single-page responsive layouts optimized for fast discovery.",
                  features: ["Single-page framework", "Mobile responsive design", "Semantic Core SEO setup", "Edge CDN deployment"],
                  highlighted: false,
                },
                {
                  title: "Professional Tier",
                  price: "₹8,000+",
                  description: "Multi-page brand architectures with customized conversion tunnels.",
                  features: ["Multi-page infrastructure", "Advanced UI styling architecture", "Rigorous speed optimization", "Analytics & Form routing integrations"],
                  highlighted: true,
                },
                {
                  title: "Premium Architecture",
                  price: "₹15,000+",
                  description: "Bespoke custom UI configurations with intensive micro-interactions.",
                  features: ["Custom web animations via GSAP/Framer", "Advanced structural UX setups", "Content architecture optimizations", "Priority engineering support hours"],
                  highlighted: false,
                },
              ].map((plan) => (
                <div
                  key={plan.title}
                  ref={reveal}
                  className={`blur-reveal flex flex-col justify-between p-8 rounded-2xl transition duration-300 relative ${
                    plan.highlighted
                      ? "bg-zinc-900 border-2 border-violet-500 shadow-xl shadow-violet-500/5 scale-105 z-10"
                      : "bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {/* Popular tag highlighted card-ku mattum display aagum */}
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-white">{plan.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-3 text-zinc-300 text-sm items-start">
                          <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/proposal"
                    className={`w-full text-center font-semibold py-3 rounded-xl transition duration-200 ${
                      plan.highlighted
                        ? "bg-violet-600 text-white hover:bg-violet-500"
                        : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA INTERACTIVE CARD ================= */}
        <section className="py-24 bg-black relative">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Ready to Launch Your High-Performance Site?
              </h2>
              <p className="mb-10 text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Unlock industry-leading load times and robust cloud architectures. Let's engineer your platform today.
              </p>
              <Link
                to="/proposal"
                className="inline-flex items-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-zinc-200 transition duration-200 shadow-xl"
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