import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Terminal,
  ShieldCheck,
  Zap,
  CloudLightning,
  RefreshCw,
  ArrowRight,
  Activity,
  MessageCircle,
  X,
  FileText,
  Clock,
  HelpCircle,
  Send,
  Layers,
  CheckCircle,
  Database,
  Lock,
  Mail,
  HardDrive,
  Cpu,
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
   2. DEPLOYMENT & HOSTING SERVICES MATRIX
--------------------------------------------------------------------- */
const deploymentServicesData = [
  {
    icon: Globe,
    title: "Website & Web App Deployment",
    text: "Seamlessly push your production-ready sites and dynamic web applications live with zero downtime configuration.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Server,
    title: "Cloud Hosting & Server Setup",
    text: "Provisioning high-performance cloud environments tailored precisely to your application traffic and scaling limits.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Lock,
    title: "Domain & SSL Certificate Setup",
    text: "Secure your domain name, configure DNS records, and install trusted SSL certificates for encrypted HTTPS security.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Database,
    title: "Database & Backend Configuration",
    text: "Securely set up production databases, connection strings, environment variables, and persistent storage layers.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Mail,
    title: "Professional Email & DNS Records",
    text: "Configure custom domain email routing, MX records, SPF, DKIM, and DMARC settings for flawless deliverability.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: HardDrive,
    title: "Automated Backup & Recovery",
    text: "Establish automated scheduled database and file backups so your business data is always safe and restorable.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    text: "Speed up load times using asset compression, caching headers, CDN integration, and optimized server configurations.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Basic Security & Firewall Hardening",
    text: "Protect your infrastructure against common web vulnerabilities, brute-force attempts, and unauthorized access.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. DEPLOYMENT PROCESS STEPS
--------------------------------------------------------------------- */
const deploymentProcessSteps = [
  {
    step: "01",
    title: "Build",
    desc: "We review, package, and prepare your website or web application code for production readiness.",
    icon: Terminal,
  },
  {
    step: "02",
    title: "Configure",
    desc: "We set up the secure cloud hosting environment, domain names, SSL certificates, and database services.",
    icon: Server,
  },
  {
    step: "03",
    title: "Deploy",
    desc: "We seamlessly transfer your project to the live server and make it globally accessible to your users.",
    icon: CloudLightning,
  },
  {
    step: "04",
    title: "Test",
    desc: "We thoroughly test the live application and verify that all key features work smoothly in production.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Maintain",
    desc: "We provide ongoing support for application updates, backups, security patches, and future scaling.",
    icon: RefreshCw,
  },
];

/* ------------------------------------------------------------------
   4. PRICING PACKAGES (Hosting & Deployment Tiers)
--------------------------------------------------------------------- */
const deploymentPricingPlans = [
  {
    id: "standard-deploy",
    title: "Standard Website Setup & Hosting",
    price: "₹7,500+",
    description: "Ideal for static business websites, portfolios, and landing pages needing a fast, secure launch.",
    deliveryTime: "1 - 3 Working Days",
    idealFor: "Business Websites, Portfolios & Landing Pages",
    features: [
      "Website & Static Asset Deployment",
      "Domain connection & DNS configuration",
      "SSL Certificate setup (HTTPS)",
      "Basic SEO & Performance Optimization",
      "1 Month Free Support & Maintenance"
    ],
    highlighted: false,
  },
  {
    id: "app-deploy",
    title: "Full Web Application Deployment",
    price: "₹18,000+",
    description: "Comprehensive cloud server configuration for dynamic web apps requiring backend databases and APIs.",
    deliveryTime: "3 - 5 Working Days",
    idealFor: "SaaS Apps, E-Commerce Stores & Dynamic Portals",
    features: [
      "Full Web Application & Database Deployment",
      "Cloud Server Setup (AWS, DigitalOcean, Vercel, etc.)",
      "Environment Variables & Secret Key Management",
      "Automated Database Backups Setup",
      "Security hardening & firewall configuration"
    ],
    highlighted: true,
  },
  {
    id: "migration-package",
    title: "Website & Server Migration",
    price: "₹12,000+",
    description: "Zero-downtime migration moving your existing website and database to a new hosting provider.",
    deliveryTime: "2 - 4 Working Days",
    idealFor: "Existing Websites Changing Hosting Providers",
    features: [
      "Complete Website & File Migration",
      "Database transfer & connection re-mapping",
      "Domain DNS point-over with minimal downtime",
      "SSL re-issuance and verification",
      "Post-migration integrity testing & audit"
    ],
    highlighted: false,
  },
];

const DeploymentHostingService = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) Form State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I selected the '${planTitle}' plan for Deployment & Hosting. Let's get my project live!`
      : `Hello TechSasi, I need help deploying and hosting my website or application. Let's discuss!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here are my hosting and deployment requirements:\n\n"${dmMessage}"`);
    
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
                Next-Gen Edge Hosting & Infrastructure
              </span>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black uppercase mb-6 tracking-tight leading-tight text-white">
                Get Your Website Live Without the{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Technical Headache
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Building your website or application is only one part of the process. We handle the technical setup, cloud hosting, domain configuration, and server deployment so you can focus entirely on your business.
              </p>

              <div className="flex flex-wrap justify-center gap-4 items-center">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 group cursor-pointer"
                >
                  Deploy My Website <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
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
              At TechSasi, whether you have a newly built website ready to launch or an existing application requiring better hosting,{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                we take care of the entire deployment process from development to live production.
              </span>
            </p>
          </div>
        </section>

        {/* ================= WHAT WE HELP YOU GO LIVE WITH ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Infrastructure Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              We Help You Go Live
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Complete technical management covering everything your web project needs to run reliably online.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentServicesData.map((sol) => (
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

        {/* ================= HOSTING THAT FITS YOUR PROJECT & SECURE SETUP ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              
              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    Tailored Environments
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Hosting That Fits Your Project
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Every website doesn't need the same type of hosting. We help you choose a suitable hosting environment based on your website traffic, application requirements, expected growth, and budget.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300">
                  Whether it's a simple business website or a high-traffic dynamic application, we select an architecture that makes sense for your project.
                </div>
              </div>

              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    High Availability
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Secure & Reliable Setup
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Your website needs to be available whenever your customers need it. We take care of vital technical foundations such as SSL certificates, DNS routing, server parameters, backups, and security hardening.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300 flex items-center gap-3">
                  <ShieldCheck className="text-orange-400 flex-shrink-0" size={20} />
                  <span>Robust protection against downtime and unauthorized server intrusion.</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= STEP-BY-STEP PROCESS ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 relative z-10">
            <div ref={reveal} className="blur-reveal mb-20 text-center max-w-3xl mx-auto">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Deployment Lifecycle
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                From Development to Live
              </h2>
              <p className="text-lg text-zinc-300">
                You don't have to worry about complicated deployment steps. <span className="text-orange-400 font-semibold">TechSasi</span> handles the technical heavy lifting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {deploymentProcessSteps.map((item, idx) => (
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
                    <span>Phase {idx + 1} Stage</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= NEED TO MOVE AN EXISTING WEBSITE? (MIGRATION) ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center">
            <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-10 md:p-14 rounded-3xl shadow-xl">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Seamless Migration
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Need to Move an Existing Website?
              </h2>
              <p className="text-zinc-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Already have a website but want to move it to a better hosting provider? We handle website migration, database migration, domain configuration, SSL setup, and seamless deployment work while keeping downtime to an absolute minimum.
              </p>
              <button
                onClick={() => {
                  const dmSection = document.getElementById("direct-message-section");
                  dmSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3.5 rounded-xl hover:bg-orange-500 transition duration-200 text-sm cursor-pointer shadow-md"
              >
                Request Website Migration <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= PRICING PACKAGES SECTION ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Deployment & Hosting <span className="text-orange-400">Pricing Packages</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Transparent setup tiers designed for static sites, dynamic web applications, and server migrations. Click any package to review details and connect via WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {deploymentPricingPlans.map((plan) => (
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
                    className={`w-full text-center font-semibold py-3.5 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold hover:from-orange-600 hover:to-amber-600 shadow-md"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                    }`}
                  >
                    <FileText size={16} /> Select Package & DM
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
                  Ready to Go Live? Tell <span className="text-orange-400">TechSasi</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Send your deployment and hosting requirements directly to our WhatsApp DM (+91 7448788897) and let's get your project online.
                </p>
              </div>

              {isSent ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 p-6 rounded-2xl text-center font-semibold animate-pulse">
                  ✅ Deployment specs formatted successfully! Redirecting directly to WhatsApp DM...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Describe what you are building, where you want to host it, and your domain/server needs..."
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
                Let's Take Your Project from "Ready" to "Live"
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                You shouldn't have to become a server expert just to run your website. Tell us what you're building — <span className="text-orange-400 font-bold">TechSasi</span> will help you get it online.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Deploy My Website <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl cursor-pointer"
                >
                  <MessageCircle size={20} />
                  Talk to Our Team: 7448788897
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
                    Selected Package
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedPlan.title}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-3">{selectedPlan.price}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{selectedPlan.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3.5 sm:p-4 rounded-2xl border border-zinc-800">
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Clock size={12} className="text-orange-400" /> Setup Time
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

export default DeploymentHostingService;