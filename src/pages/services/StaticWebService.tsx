import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Search,
  Layout,
  Globe,
  Layers,
  CheckCircle,
  Monitor,
  Smartphone,
  Tablet,
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
const staticFeatures = [
  {
    icon: Zap,
    title: "Fast Loading",
    text: "Your website loads quickly, giving visitors a smoother browsing experience.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Layout,
    title: "Mobile Friendly",
    text: "Your website will work properly across mobile phones, tablets, laptops, and desktops.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Professional Design",
    text: "We keep the design simple, modern, and focused on what your visitors actually need to see.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Layers,
    title: "Easy to Maintain",
    text: "For websites with mostly fixed content, there’s no complicated system to manage.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    text: "We build the website with a clean structure that gives search engines a better understanding of your content.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Globe,
    title: "Zero Coding Required",
    text: "You don’t need to know anything about coding. Just tell us what you need — we’ll take care of the technical side.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. STEP-BY-STEP WEBSITE UI BUILDING PROCESS DATA
--------------------------------------------------------------------- */
const uiSteps = [
  {
    step: "01",
    title: "Understanding Your Vision",
    desc: "We sit down (or chat online) to understand your business goals, target audience, preferred color scheme, and the exact content you want to display.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Wireframe & Layout Design",
    desc: "We structure the page architecture—organizing headers, service sections, galleries, testimonials, and contact forms for maximum user engagement.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Responsive Development",
    desc: "We write clean, high-performance code ensuring your UI looks visually stunning and behaves seamlessly on Mobiles, Tablets, and Desktops.",
    icon: Smartphone,
  },
  {
    step: "04",
    title: "Testing & Live Launch",
    desc: "We test loading speeds, cross-browser compatibility, and mobile touch targets before deploying your professional static website live on the cloud.",
    icon: MousePointerClick,
  },
];

/* ------------------------------------------------------------------
   4. PRICING PLANS DATA (With detailed inclusions for modal)
--------------------------------------------------------------------- */
const pricingPlans = [
  {
    id: "basic",
    title: "Basic Suite",
    price: "₹4,000+",
    description: "Single-page responsive layouts optimized for fast discovery.",
    deliveryTime: "3 - 5 Working Days",
    idealFor: "Freelancers, Personal Portfolios & Single Startups",
    features: [
      "Single-page high-converting framework",
      "Fully Mobile & Tablet responsive design",
      "Semantic Core SEO setup & Meta tags",
      "Fast Global Edge CDN deployment",
      "Direct WhatsApp contact integration"
    ],
    highlighted: false,
  },
  {
    id: "professional",
    title: "Professional Tier",
    price: "₹8,000+",
    description: "Multi-page brand architectures with customized conversion tunnels.",
    deliveryTime: "5 - 7 Working Days",
    idealFor: "Small Businesses, Agencies & Service Providers",
    features: [
      "Multi-page structured architecture (Up to 5 Pages)",
      "Advanced Orange & Black UI styling architecture",
      "Rigorous speed optimization & Image compression",
      "Analytics & Lead Form routing integrations",
      "Interactive WhatsApp & Call action buttons"
    ],
    highlighted: true,
  },
  {
    id: "premium",
    title: "Premium Architecture",
    price: "₹15,000+",
    description: "Bespoke custom UI configurations with intensive micro-interactions.",
    deliveryTime: "7 - 10 Working Days",
    idealFor: "Enterprise Brands, Institutions & Custom Web Apps",
    features: [
      "Custom web animations via GSAP / Framer Motion",
      "Advanced structural UI/UX custom wireframing",
      "Deep Content architecture & SEO optimizations",
      "Priority 1-on-1 engineering support hours",
      "Custom domain configuration & Free SSL setup"
    ],
    highlighted: false,
  },
];

const StaticWebsite = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) / Quick Message Box State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I selected the '${planTitle}' plan. I want to discuss the details and get started!`
      : `Hello TechSasi, I am interested in Static Website Development. Let's discuss!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Handle Direct Message Submit
  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here is my direct message:\n\n"${dmMessage}"`);
    
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
            linear-gradient(to right, rgba(255, 120, 0, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 120, 0, 0.07) 1px, transparent 1px);
        }
      `}</style>

      {/* Main Wrapper with Full-Page Box Grid Background */}
      <div className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-white bg-grid-box-full relative">
        
        {/* ================= HERO SECTION (Top Entry) ================= */}
        <ParallaxSection
          className="pt-40 pb-32 overflow-hidden relative"
          bgClassName="bg-black/85 border-b border-zinc-900 backdrop-blur-sm"
        >
          {/* Vibrant Orange Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Column: Heading, CTAs, and WhatsApp Direct Button */}
            <div className="blur-reveal is-visible">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
                Professional Static Solutions
              </span>
              
              <h1 className="text-5xl xl:text-6xl font-heading font-extrabold mb-6 tracking-tight text-white leading-tight">
                Static Website{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed">
                Not every business needs a complicated website. If you’re looking for a clean, professional website to showcase your business, services, portfolio, or contact details, a static website can be a great choice.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 group cursor-pointer"
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

            {/* Right Column: Mini Simulated UI Mockup Preview */}
            <div ref={reveal} className="hidden lg:block blur-reveal">
              <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-black p-[2px] border border-orange-500/40 shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5 opacity-60 group-hover:opacity-100 transition duration-500" />
                
                {/* Browser Simulation Header */}
                <div className="bg-zinc-950 rounded-t-[22px] px-4 py-3 border-b border-zinc-800 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="bg-zinc-900 text-zinc-400 text-xs px-4 py-1 rounded-md border border-zinc-800 flex items-center gap-1.5 font-mono">
                    <Globe size={12} className="text-orange-400" /> https://techsasi.com
                  </div>
                  <div className="flex gap-1 text-zinc-500">
                    <Smartphone size={14} />
                    <Tablet size={14} />
                    <Monitor size={14} className="text-orange-400" />
                  </div>
                </div>

                {/* Simulated Content Card Inside Mockup */}
                <div className="bg-black p-8 rounded-b-[22px] relative z-10 flex flex-col items-center text-center">
                  <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2">Live UI Preview Model</span>
                  <h4 className="text-2xl font-bold text-white mb-3">Your Brand, Digitally Elevated</h4>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    At <span className="text-orange-400 font-bold">TechSasi</span>, we create responsive and user-friendly static websites that look good on mobile, tablet, and desktop.
                  </p>
                  <div className="w-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 py-3 rounded-xl text-orange-300 text-sm font-semibold">
                    ✨ 100% User-Friendly Interface Design
                  </div>
                </div>
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
              A Simple Website Is Sometimes All Your Business Needs —{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                crafted with excellence by <span className="text-orange-400">TechSasi</span>.
              </span>
            </p>
          </div>
        </section>

        {/* ================= STEP-BY-STEP UI CREATION PROCESS ================= */}
        <section className="py-32 bg-black/80 border-b border-zinc-900 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 relative z-10">
            <div ref={reveal} className="blur-reveal mb-20 text-center max-w-3xl mx-auto">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Interactive Engineering Workflow
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                Step-by-Step UI Design & Development Process
              </h2>
              <p className="text-lg text-zinc-300">
                How <span className="text-orange-400 font-semibold">TechSasi</span> transforms your raw business concept into a clean, modern, user-friendly layout.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {uiSteps.map((item, idx) => (
                <div
                  key={item.step}
                  ref={reveal}
                  className="blur-reveal group relative bg-zinc-900/80 border border-zinc-800 hover:border-orange-500/50 p-8 rounded-2xl transition duration-300 flex flex-col justify-between shadow-lg backdrop-blur-sm"
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
                    <span>Phase {idx + 1} Execution</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT WE CAN BUILD SECTION ================= */}
        <section className="py-24 bg-black/80 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                What We Can Build
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Whether you’re a small business, freelancer, startup, professional, or someone who simply wants an online presence, <span className="text-orange-400 font-semibold">TechSasi</span> can create a website that fits your needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Business & Company Websites",
                "Portfolio Websites",
                "Personal Websites",
                "Landing Pages",
                "Service-Based Websites",
                "Product Showcase Websites",
                "School & Institute Websites",
                "Event & Promotional Websites"
              ].map((item) => (
                <div
                  key={item}
                  ref={reveal}
                  className="blur-reveal bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl flex items-center gap-3 text-white hover:border-orange-500/50 hover:bg-zinc-900 transition duration-300 shadow-sm backdrop-blur-sm"
                >
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={20} />
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEATURES GRID (6 Dynamic Cards) ================= */}
        <section className="py-32 bg-black/80 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Why Choose a Static Website with <span className="text-orange-400">TechSasi</span>?
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              A static website is a good option when you mainly want to present information online without complex features like user accounts, online ordering, or large databases.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticFeatures.map((f) => (
              <div
                key={f.title}
                ref={reveal}
                className={`blur-reveal group relative bg-zinc-900/60 border border-zinc-800 p-8 rounded-2xl transition duration-300 ${f.borderColor} overflow-hidden backdrop-blur-sm`}
              >
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl -z-10 ${f.glowColor}`} />
                <f.icon className="text-orange-400 mb-5 w-8 h-8 transform group-hover:scale-110 transition duration-300" />
                <h3 className="font-semibold text-xl mb-3 text-white">
                  {f.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW WE WORK SECTION ================= */}
        <section className="py-24 bg-zinc-950/90 border-t border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center">
            <div ref={reveal} className="blur-reveal">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                How We Work at <span className="text-orange-400">TechSasi</span>
              </h2>
              <p className="text-lg text-zinc-200 max-w-3xl mx-auto leading-relaxed mb-8">
                We first understand your business and what you want your website to achieve. Then we plan the pages, create the design, develop the website, test it across different devices, and finally help you get it live.
              </p>
              <div className="p-6 bg-zinc-900 border border-orange-500/30 rounded-2xl inline-block shadow-xl">
                <p className="text-orange-300 font-semibold text-base">
                  You don’t need to know anything about coding. Just tell us what you need — <span className="text-white font-bold">TechSasi</span> will take care of the technical side.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRICING SECTION ================= */}
        <section className="py-32 bg-black/80 border-t border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Transparent Engineering Pricing by <span className="text-orange-400">TechSasi</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Click any plan below to view comprehensive development inclusions and start instantly via WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  ref={reveal}
                  className={`blur-reveal flex flex-col justify-between p-8 rounded-2xl transition duration-300 relative backdrop-blur-sm ${
                    plan.highlighted
                      ? "bg-zinc-900 border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-105 z-10"
                      : "bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700"
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
                    <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
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
                    className={`w-full text-center font-semibold py-3 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold hover:from-orange-600 hover:to-amber-600 shadow-md"
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
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-orange-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3">
                  Direct Messenger (DM)
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white">
                  Send a Direct Message to <span className="text-orange-400">TechSasi</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Type your custom requirements or project questions below and send it straight to our WhatsApp DM (+91 7448788897).
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
                      placeholder="Type your message here (e.g., Hi TechSasi, I need a portfolio website for my photography business...)"
                      className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-orange-500 rounded-2xl p-4 text-white text-sm placeholder-zinc-500 focus:outline-none transition resize-none shadow-inner"
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

        {/* ================= CTA INTERACTIVE CARD ================= */}
        <section className="py-20 bg-black/95 relative backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-orange-500/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Ready to Take Your Business Online?
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Let’s create a website that represents your business professionally and makes it easy for people to find and contact you. Let’s Build Your Website with <span className="text-orange-400 font-bold">TechSasi</span>.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
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

        {/* ================= PLAN DETAILS & WHATSAPP MODAL (FULLY MOBILE RESPONSIVE LANDSCAPE FORMAT) ================= */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
            {/* Modal Box Styled in Landscape Aspect Format with Mobile Responsive Scaling & Scrollability */}
            <div className="bg-zinc-900 border border-orange-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-stretch my-auto max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded-full transition cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              {/* Left Column in Landscape Modal: Title, Pricing & Overview */}
              <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800 pb-5 md:pb-0 md:pr-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3">
                    Selected Package
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedPlan.title}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-3">{selectedPlan.price}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{selectedPlan.description}</p>
                </div>

                {/* Delivery & Ideal For Meta Box */}
                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3.5 sm:p-4 rounded-2xl border border-zinc-800">
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Clock size={12} className="text-orange-400" /> Delivery Time
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

              {/* Right Column in Landscape Modal: Full Inclusions & Actions */}
              <div className="flex-1 flex flex-col justify-between pt-2 md:pt-0">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3">
                    What's Included in this Plan:
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

                {/* Action Buttons inside Landscape Modal (Fully Stacked on Small Screens for Touch Friendliness) */}
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

export default StaticWebsite;