import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  Mail,
  Target,
  BarChart3,
  MousePointerClick,
  ArrowRight,
  Sparkles,
  Users,
  MessageCircle,
  X,
  FileText,
  Clock,
  HelpCircle,
  Send,
  CheckCircle,
  Share2,
  Globe,
  Megaphone,
  Layers,
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
   2. DIGITAL MARKETING SOLUTIONS DATA
--------------------------------------------------------------------- */
const marketingSolutions = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    text: "Instagram, Facebook, and targeted social campaigns to build awareness and keep your audience active.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Target,
    title: "Google Ads & Social Ads",
    text: "Reach customers faster with highly targeted paid advertising campaigns across Google, Meta, and more.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    text: "Improve website visibility in search engines through practical SEO, keyword targeting, and structural optimizations.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Users,
    title: "Lead Generation",
    text: "Create conversion-focused campaigns to connect potential customers via forms, WhatsApp, calls, and landing pages.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    text: "Produce content that communicates your business clearly and speaks naturally to your target audience.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Megaphone,
    title: "Brand Promotion",
    text: "Establish brand recognition and ensure your business stays top-of-mind within your target market.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Marketing",
    text: "Direct messaging strategies and automated engagement setups to drive high-intent enquiries.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: BarChart3,
    title: "Social Media Management",
    text: "Full content planning, creative posting, scheduling, and community engagement handled for you.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. WORK PROCESS DATA
--------------------------------------------------------------------- */
const marketingProcessSteps = [
  {
    step: "01",
    title: "Understand Your Business",
    desc: "We learn about your products, services, target customers, and business goals first.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Create a Strategy",
    desc: "We choose the right platforms and digital marketing approach tailored specifically for your business.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Create & Launch",
    desc: "We prepare high-impact content, advertisements, campaigns, and other marketing activities.",
    icon: Target,
  },
  {
    step: "04",
    title: "Track & Improve",
    desc: "We monitor performance metrics continuously and make adjustments based on what delivers results.",
    icon: TrendingUp,
  },
];

/* ------------------------------------------------------------------
   4. DIGITAL MARKETING PRICING PACKAGES (Pricing / Project Tiers)
--------------------------------------------------------------------- */
const marketingPricingPlans = [
  {
    id: "starter-social",
    title: "Starter Social & Brand Growth",
    price: "₹15,000 / mo",
    description: "Essential social media management and brand presence building for emerging businesses.",
    deliveryTime: "Monthly Continuous Retainer",
    idealFor: "Local Businesses & New Brands",
    features: [
      "Instagram & Facebook content planning",
      "Creative graphic posts & captions (12 posts/mo)",
      "Basic audience engagement & monitoring",
      "WhatsApp integration support",
      "Monthly growth performance report"
    ],
    highlighted: false,
  },
  {
    id: "growth-leads",
    title: "Performance & Lead Generation",
    price: "₹35,000 / mo",
    description: "Results-driven campaign management combining Meta/Google Ads and high-converting funnels.",
    deliveryTime: "Monthly Continuous Retainer",
    idealFor: "E-Commerce, Services & Growth Startups",
    features: [
      "Targeted Google Ads & Instagram/FB Paid Ads",
      "High-converting landing page optimization",
      "Lead generation forms & WhatsApp funnels",
      "Continuous A/B testing on ad creatives",
      "Advanced ROI and conversion tracking dashboard"
    ],
    highlighted: true,
  },
  {
    id: "enterprise-omnichannel",
    title: "Omnichannel Growth Engine",
    price: "₹75,000 / mo",
    description: "Comprehensive digital marketing suite including full SEO, paid acquisition, and brand scaling.",
    deliveryTime: "Monthly Continuous Retainer",
    idealFor: "Established Companies & Scale-ups",
    features: [
      "Full SEO strategy & keyword optimization",
      "Multi-channel Paid Ads (Google, Meta, LinkedIn)",
      "Automated Lifecycle email/WhatsApp marketing",
      "Dedicated senior growth strategist & team",
      "Weekly analytics reviews & real-time scaling"
    ],
    highlighted: false,
  },
];

const DigitalMarketing = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) Form State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I selected the '${planTitle}' plan for Digital Marketing. Let's discuss growing my business online!`
      : `Hello TechSasi, I want to get my business in front of the right people with digital marketing. Let's discuss!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here are my business and marketing goals:\n\n"${dmMessage}"`);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setDmMessage("");
    }, 4000);
  };

  return (
    <PageLayout>
      {/* CSS for Full Page Box Grid Background Lines with Orange Accent */}
      <style>{`
        .bg-grid-box-full {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(249, 115, 22, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.08) 1px, transparent 1px);
        }
      `}</style>

      {/* Main Wrapper with Black Background & Box Grid Lines */}
      <div className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-black bg-grid-box-full relative overflow-x-hidden">
        
        {/* ================= HERO SECTION ================= */}
        <ParallaxSection
          className="pt-40 pb-32 relative overflow-hidden"
          bgClassName="bg-black/90 border-b border-zinc-900 backdrop-blur-md"
        >
          {/* Glowing Ambient Backdrop */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-600/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center relative z-10 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
                Targeted Audience Acquisition & Growth
              </span>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black uppercase mb-6 tracking-tight leading-tight text-white">
                Get Your Business In Front of the{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Right People
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Having a great product is only the beginning — people need to know your business exists. At TechSasi, we help you build an online presence, reach target audiences, and generate qualified enquiries.
              </p>

              <div className="flex flex-wrap justify-center gap-4 items-center">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 group cursor-pointer"
                >
                  Start Your Marketing Journey <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-7 py-4 rounded-xl transition duration-300 shadow-xl group cursor-pointer"
                >
                  <MessageCircle size={20} className="text-emerald-400 group-hover:text-white transition-colors" />
                  WhatsApp: 7448788897
                </button>
              </div>
            </motion.div>
          </div>
        </ParallaxSection>

        {/* ================= VALUE STATEMENT ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 relative backdrop-blur-md">
          <div
            ref={reveal}
            className="container-custom max-w-6xl px-6 lg:px-12 blur-reveal text-center"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-200">
              We don't believe in simply posting content every day —{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                we focus on understanding your business, customers, and goals first, then create a strategy that makes sense.
              </span>
            </p>
          </div>
        </section>

        {/* ================= WHAT WE CAN HELP WITH ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Comprehensive Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What We Can Help With
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              We provide digital marketing solutions based strictly on what your business actually needs to grow.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingSolutions.map((sol) => (
              <div
                key={sol.title}
                ref={reveal}
                className={`blur-reveal group relative bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl transition duration-300 ${sol.borderColor} overflow-hidden backdrop-blur-sm shadow-md`}
              >
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl -z-10 ${sol.glowColor}`} />
                <sol.icon className="text-orange-400 mb-5 w-8 h-8 transform group-hover:scale-110 transition duration-300" />
                <h3 className="font-semibold text-xl mb-3 text-white">
                  {sol.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{sol.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HIGHLIGHTED CAPABILITIES ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Core Growth Channels
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Engineered for Real Enquiries
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Likes and followers are good, but your business needs real customers and tangible revenue growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Get More Leads & Sales",
                  desc: "We create campaigns focused on generating relevant enquiries and connecting potential clients with your business through forms, WhatsApp, calls, and dedicated landing pages.",
                },
                {
                  icon: TrendingUp,
                  title: "Google & Social Media Ads",
                  desc: "Want to reach customers faster? We plan and manage targeted ad campaigns on Google, Instagram, and Facebook, focusing strictly on high-intent buyer demographics.",
                },
                {
                  icon: Search,
                  title: "Search Engine Optimization",
                  desc: "A website is most useful when people can find it organically. We enhance your visibility using practical SEO techniques, content structuring, and keyword targeting.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  ref={reveal}
                  className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/50 transition duration-300 flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STEP-BY-STEP PROCESS ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 relative z-10">
            <div ref={reveal} className="blur-reveal mb-20 text-center max-w-3xl mx-auto">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                How We Work
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                Our Marketing Workflow
              </h2>
              <p className="text-lg text-zinc-300">
                A streamlined process designed by <span className="text-orange-400 font-semibold">TechSasi</span> to deliver sustainable online growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {marketingProcessSteps.map((item, idx) => (
                <div
                  key={item.step}
                  ref={reveal}
                  className="blur-reveal group relative bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/50 p-8 rounded-2xl transition duration-300 flex flex-col justify-between shadow-lg backdrop-blur-sm"
                >
                  <div className="absolute top-6 right-6 text-3xl font-black text-zinc-800 group-hover:text-orange-500/20 transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-semibold text-orange-400">
                    <span>Phase {idx + 1} Strategy</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRICING PLANS SECTION ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Digital Marketing <span className="text-orange-400">Pricing Packages</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Transparent retainer packages built for local businesses, lead-generation startups, and omnichannel enterprises. Click any plan to review and initiate direct WhatsApp messaging.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {marketingPricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  ref={reveal}
                  className={`blur-reveal flex flex-col justify-between p-8 rounded-2xl transition duration-300 relative backdrop-blur-sm ${
                    plan.highlighted
                      ? "bg-zinc-900 border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-105 z-10"
                      : "bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-white">{plan.title}</h3>
                    <p className="text-zinc-300 text-sm mb-6">{plan.description}</p>
                    <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-3 text-zinc-200 text-sm items-start">
                          <CheckCircle className="text-orange-400 mt-0.5 flex-shrink-0" size={16} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full text-center font-semibold py-3.5 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold hover:from-orange-600 hover:to-amber-600 shadow-md"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                    }`}
                  >
                    <FileText size={16} /> Select Plan & DM
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DIRECT MESSAGE (DM) SECTION ================= */}
        <section id="direct-message-section" className="py-24 bg-black/95 relative backdrop-blur-md">
          <div className="container-custom max-w-4xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-orange-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3">
                  Direct Messenger (DM)
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white">
                  Let's Grow Your Business Online With <span className="text-orange-400">TechSasi</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  You don't need to be everywhere online — just in the right places with the right message. Send your business details directly to our WhatsApp DM (+91 7448788897).
                </p>
              </div>

              {isSent ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 p-6 rounded-2xl text-center font-semibold animate-pulse">
                  ✅ Marketing brief formatted successfully! Redirecting directly to WhatsApp DM...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Describe your business and marketing goals here (e.g., Hi TechSasi, I run a clothing brand and want more Instagram sales...)"
                      className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-orange-500 rounded-2xl p-4 text-white text-sm placeholder-zinc-500 focus:outline-none transition resize-none shadow-inner"
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
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-xl shadow-orange-500/20 cursor-pointer"
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

        {/* ================= CTA FINAL SECTION ================= */}
        <section className="py-20 bg-black/95 relative backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-orange-500/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Ready to Scale Your Business Online?
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Tell us about your business, and let <span className="text-orange-400 font-bold">TechSasi</span> create a digital marketing strategy that works for you.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Start Your Marketing Journey <ArrowRight size={18} />
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
            <div className="bg-zinc-900 border border-orange-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-stretch my-auto max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded-full transition cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800 pb-5 md:pb-0 md:pr-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3">
                    Selected Retainer Package
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedPlan.title}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-3">{selectedPlan.price}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{selectedPlan.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3.5 sm:p-4 rounded-2xl border border-zinc-800">
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Clock size={12} className="text-orange-400" /> Terms
                    </span>
                    <span className="text-white text-xs font-semibold">{selectedPlan.deliveryTime}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <HelpCircle size={12} className="text-orange-400" /> Ideal For
                    </span>
                    <span className="text-white text-[11px] sm:text-xs font-medium">{selectedPlan.idealFor}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between pt-2 md:pt-0">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3">
                    What's Included in this Package:
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3 mb-6">
                    {selectedPlan.features.map((feat: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-zinc-200 text-xs sm:text-sm">
                        <CheckCircle className="text-orange-400 mt-0.5 flex-shrink-0" size={16} />
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
                    <MessageCircle size={18} /> Confirm via WhatsApp DM
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

export default DigitalMarketing;