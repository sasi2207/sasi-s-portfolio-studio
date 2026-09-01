import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Layout,
  ShieldCheck,
  Search,
  Gauge,
  Globe,
  CheckCircle,
  Smartphone,
  Tablet,
  Monitor,
  MousePointerClick,
  Sparkles,
  MessageCircle,
  X,
  FileText,
  Clock,
  HelpCircle,
  Send,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

/* ------------------------------------------------------------------
   1. ANIMATION HOOK: Smooth scroll reveal
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
   2. FEATURES DATA
--------------------------------------------------------------------- */
const businessFeatures = [
  {
    icon: Briefcase,
    title: "Professional Brand Presence",
    text: "Establish credibility with a clean, modern business website that builds trust.",
    borderColor: "hover:border-violet-500/60",
    glowColor: "group-hover:bg-violet-500/10",
  },
  {
    icon: Layout,
    title: "Custom Business Design",
    text: "Layouts tailored to your industry, target audience, and business goals.",
    borderColor: "hover:border-violet-500/60",
    glowColor: "group-hover:bg-violet-500/10",
  },
  {
    icon: Search,
    title: "SEO Optimized Structure",
    text: "Built with clean code and semantic tags to rank your services on search engines.",
    borderColor: "hover:border-violet-500/60",
    glowColor: "group-hover:bg-violet-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    text: "SSL security, best practices, and secure deployment included for peace of mind.",
    borderColor: "hover:border-violet-500/60",
    glowColor: "group-hover:bg-violet-500/10",
  },
  {
    icon: Gauge,
    title: "Fast Performance",
    text: "Optimized assets and high-speed infrastructure for lightning-fast loading speeds.",
    borderColor: "hover:border-violet-500/60",
    glowColor: "group-hover:bg-violet-500/10",
  },
  {
    icon: Globe,
    title: "Scalable for Growth",
    text: "Designed to expand smoothly with new pages, services, and features as you grow.",
    borderColor: "hover:border-violet-500/60",
    glowColor: "group-hover:bg-violet-500/10",
  },
];

/* ------------------------------------------------------------------
   3. STEP-BY-STEP WEBSITE UI BUILDING PROCESS DATA
--------------------------------------------------------------------- */
const uiSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "We learn about your business, services, target customers, and core online goals.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Plan",
    desc: "We decide the exact pages, content, features, and structure your business needs.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Design",
    desc: "We create a clean, modern design that matches your brand and communicates clearly.",
    icon: Smartphone,
  },
  {
    step: "04",
    title: "Develop & Launch",
    desc: "We turn the design into a responsive website, testing across all devices before deployment.",
    icon: MousePointerClick,
  },
];

/* ------------------------------------------------------------------
   4. PRICING PLANS DATA (With detailed inclusions for modal)
--------------------------------------------------------------------- */
const pricingPlans = [
  {
    id: "starter",
    title: "Starter",
    price: "₹6,000+",
    description: "Essential multi-page business layout optimized for fast discovery.",
    deliveryTime: "3 - 5 Working Days",
    idealFor: "New Ventures, Startups & Small Businesses",
    features: [
      "Up to 5 professionally structured pages",
      "Fully Mobile & Tablet responsive design",
      "Basic SEO setup & Meta tags",
      "Fast Global Edge CDN deployment",
      "Direct WhatsApp & Contact Form integration"
    ],
    highlighted: false,
  },
  {
    id: "professional",
    title: "Professional",
    price: "₹15,000+",
    description: "Custom multi-page brand architectures with advanced conversion layouts.",
    deliveryTime: "5 - 7 Working Days",
    idealFor: "Established Companies, Agencies & Service Providers",
    features: [
      "Custom multi-page brand architecture (Up to 10 Pages)",
      "Advanced UI/UX styling tailored to your industry",
      "Rigorous speed optimization & Image compression",
      "Analytics & Lead Form routing integration",
      "Interactive WhatsApp, Call, & Map integrations"
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "₹30,000+",
    description: "Bespoke custom UI configurations with highly scalable architecture.",
    deliveryTime: "7 - 10 Working Days",
    idealFor: "Large Enterprises, Corporations & B2B Firms",
    features: [
      "Advanced custom UI/UX animations & components",
      "Comprehensive structural wireframing",
      "Deep content architecture & SEO tuning",
      "Priority 1-on-1 engineering support hours",
      "Custom domain configuration & Free SSL setup"
    ],
    highlighted: false,
  },
];

const BusinessWebsite = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) / Quick Message Box State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I selected the '${planTitle}' plan for Business Website Development. Let's discuss!`
      : `Hello TechSasi, I am interested in Business Website Development. Let's discuss!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Handle Direct Message Submit
  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here is my business website message:\n\n"${dmMessage}"`);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setDmMessage("");
    }, 4000);
  };

  return (
    <PageLayout>
      {/* CSS for Grid Box Background Lines spanning the Full Page */}
      <style>{`
        .bg-grid-box-full {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(124, 58, 237, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.07) 1px, transparent 1px);
        }
      `}</style>

      {/* Main Wrapper with Full-Page Box Grid Background */}
      <div className="bg-black text-white min-h-screen selection:bg-violet-500 selection:text-white bg-grid-box-full relative">
        
        {/* ================= HERO SECTION (Centered Design) ================= */}
        <ParallaxSection
          className="pt-40 pb-32 overflow-hidden relative"
          bgClassName="bg-black/85 border-b border-zinc-900 backdrop-blur-sm"
        >
          {/* Vibrant Violet Ambient Glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center relative z-10 mx-auto">
            <div className="blur-reveal is-visible flex flex-col items-center">
              
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
                Professional Business Solutions
              </span>
              
              <h1 className="text-4xl sm:text-5xl xl:text-7xl font-heading font-extrabold mb-6 tracking-tight text-white leading-tight">
                Business Website{" "}
                <span className="bg-gradient-to-r from-violet-400 via-amber-400 to-violet-500 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Today, most customers search online before choosing a business. We create modern and professional business websites that represent your brand and make it easy for your customers to connect with you.
              </p>

              <div className="flex flex-wrap justify-center gap-4 items-center">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-amber-500 hover:from-violet-700 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 group cursor-pointer"
                >
                  Send Direct Message{" "}
                  <MessageCircle size={18} className="transform group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-7 py-4 rounded-xl transition duration-300 shadow-xl group cursor-pointer"
                >
                  <MessageCircle size={20} className="text-emerald-400 group-hover:text-white transition-colors" />
                  WhatsApp: 7448788897
                </button>
              </div>

            </div>
          </div>
        </ParallaxSection>

        {/* ================= VALUE STATEMENT ================= */}
        <section className="py-24 bg-zinc-950/90 border-b border-zinc-900 relative backdrop-blur-md">
          <div
            ref={reveal}
            className="container-custom max-w-6xl px-6 lg:px-12 blur-reveal text-center"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-200">
              Your website is often your first impression —{" "}
              <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent font-bold">
                make it professional, clear, and conversion-focused with TechSasi.
              </span>
            </p>
          </div>
        </section>

        {/* ================= WHAT WE BUILD SECTION ================= */}
        <section className="py-24 bg-black/80 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center">
              <span className="text-violet-400 font-bold text-xs uppercase tracking-widest bg-violet-500/10 border border-violet-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Comprehensive Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                What We Build
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                We can create a complete business website with everything your customers need to know about you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Home Page",
                "About Your Business",
                "Services & Products",
                "Portfolio / Gallery",
                "Customer Reviews",
                "Contact & Enquiry Forms",
                "Google Maps Integration",
                "WhatsApp Contact",
                "Social Media Integration",
                "Mobile & Tablet Responsive Design",
                "Basic SEO Setup"
              ].map((item) => (
                <div
                  key={item}
                  ref={reveal}
                  className="blur-reveal bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl flex items-center gap-3 text-white hover:border-violet-500/50 hover:bg-zinc-900 transition duration-300 shadow-sm backdrop-blur-sm"
                >
                  <CheckCircle className="text-violet-400 flex-shrink-0" size={20} />
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY YOUR BUSINESS NEEDS A WEBSITE ================= */}
        <section className="py-32 bg-black/80 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Why Your Business Needs a Website
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Designed around your business needs to build credibility and drive continuous growth.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessFeatures.map((f) => (
              <div
                key={f.title}
                ref={reveal}
                className={`blur-reveal group relative bg-zinc-900/60 border border-zinc-800 p-8 rounded-2xl transition duration-300 ${f.borderColor} overflow-hidden backdrop-blur-sm`}
              >
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl -z-10 ${f.glowColor}`} />
                <f.icon className="text-violet-400 mb-5 w-8 h-8 transform group-hover:scale-110 transition duration-300" />
                <h3 className="font-semibold text-xl mb-3 text-white">
                  {f.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= USE CASES / WHO NEEDS A BUSINESS WEBSITE ================= */}
        <section className="py-24 bg-zinc-950/90 border-t border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
            <div ref={reveal} className="blur-reveal">
              <span className="text-violet-400 font-bold text-xs uppercase tracking-widest bg-violet-500/10 border border-violet-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Target Audience
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
                Who Needs a Business Website?
              </h2>
              <p className="text-lg text-zinc-300 max-w-lg leading-relaxed">
                Business websites are essential for organizations that want credibility, regional visibility, and trusted customer relationships.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Small & medium businesses",
                "Service-based companies",
                "Startups & new ventures",
                "Consultants & agencies",
                "Manufacturing & B2B firms",
                "Local businesses",
              ].map((item) => (
                <div
                  key={item}
                  ref={reveal}
                  className="blur-reveal bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl flex items-center gap-3 text-white hover:border-violet-500/50 transition duration-300"
                >
                  <CheckCircle className="text-amber-400 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STEP-BY-STEP UI CREATION PROCESS ================= */}
        <section className="py-32 bg-black/80 border-t border-zinc-900 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 relative z-10">
            <div ref={reveal} className="blur-reveal mb-20 text-center max-w-3xl mx-auto">
              <span className="text-violet-400 font-bold text-xs uppercase tracking-widest bg-violet-500/10 border border-violet-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Interactive Engineering Workflow
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-lg text-zinc-300">
                A structured process designed by <span className="text-violet-400 font-semibold">TechSasi</span> to deliver reliable business websites.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {uiSteps.map((item, idx) => (
                <div
                  key={item.step}
                  ref={reveal}
                  className="blur-reveal group relative bg-zinc-900/80 border border-zinc-800 hover:border-violet-500/50 p-8 rounded-2xl transition duration-300 flex flex-col justify-between shadow-lg backdrop-blur-sm"
                >
                  <div className="absolute top-6 right-6 text-3xl font-black text-zinc-800 group-hover:text-violet-500/20 transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-semibold text-violet-400">
                    <span>Phase {idx + 1} Execution</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRICING SECTION ================= */}
        <section className="py-32 bg-black/80 border-t border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Business Website <span className="text-violet-400">Pricing</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Pricing based on pages, custom design, and specific business requirements. Click any plan below to view inclusions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  ref={reveal}
                  className={`blur-reveal flex flex-col justify-between p-8 rounded-2xl transition duration-300 relative backdrop-blur-sm ${
                    plan.highlighted
                      ? "bg-zinc-900 border-2 border-violet-500 shadow-xl shadow-violet-500/10 scale-105 z-10"
                      : "bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-white">{plan.title}</h3>
                    <p className="text-zinc-300 text-sm mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-3 text-zinc-200 text-sm items-start">
                          <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full text-center font-semibold py-3 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-violet-600 to-amber-500 text-white font-bold hover:from-violet-700 hover:to-amber-600 shadow-md"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                    }`}
                  >
                    <FileText size={16} /> Select & View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DIRECT MESSAGE (DM) SECTION ================= */}
        <section id="direct-message-section" className="py-24 bg-black/90 relative backdrop-blur-md border-t border-zinc-900">
          <div className="container-custom max-w-4xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-violet-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 right-0 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-violet-400 font-bold bg-violet-500/10 border border-violet-500/30 px-3 py-1 rounded-full inline-block mb-3">
                  Direct Messenger (DM)
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white">
                  Send a Direct Message to <span className="text-violet-400">TechSasi</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Type your business requirements below and send it straight to our WhatsApp DM (+91 7448788897).
                </p>
              </div>

              {isSent ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 p-6 rounded-2xl text-center font-semibold animate-pulse">
                  ✅ Message formatted successfully! Redirecting directly to WhatsApp DM...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Type your business requirements here (e.g., Hi TechSasi, I need a business website for my consultancy firm...)"
                      className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-violet-500 rounded-2xl p-4 text-white text-sm placeholder-zinc-500 focus:outline-none transition resize-none shadow-inner"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Direct WhatsApp Line: 7448788897
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-amber-500 hover:from-violet-700 hover:to-amber-600 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-xl shadow-violet-500/20 cursor-pointer"
                      >
                        <Send size={16} /> Send WhatsApp DM
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ================= CTA INTERACTIVE CARD ================= */}
        <section className="py-20 bg-black/95 relative backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-violet-500/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-violet-500/15 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Build a Website That Represents Your Business
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Let’s create a professional business website that drives growth. You focus on your business. <span className="text-violet-400 font-bold">TechSasi</span> will take care of your website.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-amber-500 hover:from-violet-700 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-violet-500/20 cursor-pointer"
                >
                  Send Direct Message <MessageCircle size={18} />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl cursor-pointer"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp: 7448788897
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PLAN DETAILS & WHATSAPP MODAL ================= */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
            <div className="bg-zinc-900 border border-violet-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-stretch my-auto max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded-full transition cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800 pb-5 md:pb-0 md:pr-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-violet-400 font-bold bg-violet-500/10 border border-violet-500/30 px-3 py-1 rounded-full inline-block mb-3">
                    Selected Package
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedPlan.title}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 mb-3">{selectedPlan.price}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{selectedPlan.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3.5 sm:p-4 rounded-2xl border border-zinc-800">
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Clock size={12} className="text-violet-400" /> Delivery Time
                    </span>
                    <span className="text-white text-xs font-semibold">{selectedPlan.deliveryTime}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <HelpCircle size={12} className="text-violet-400" /> Ideal For
                    </span>
                    <span className="text-white text-[11px] sm:text-xs font-medium">{selectedPlan.idealFor}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between pt-2 md:pt-0">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3">
                    What's Included in this Plan:
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3 mb-6">
                    {selectedPlan.features.map((feat: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-zinc-200 text-xs sm:text-sm">
                        <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => handleWhatsAppClick(selectedPlan.title)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 sm:px-5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer text-xs sm:text-sm"
                  >
                    <MessageCircle size={18} /> Confirm via WhatsApp
                  </button>
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3.5 px-4 sm:px-5 rounded-xl transition cursor-pointer text-xs sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </PageLayout>
  );
};

export default BusinessWebsite;