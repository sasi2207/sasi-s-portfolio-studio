import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  RefreshCw,
  ShieldCheck,
  Sliders,
  Sparkles,
  Terminal,
  Activity,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  X,
  FileText,
  Clock,
  HelpCircle,
  Send,
  Layers,
  ShoppingBag,
  Calendar,
  Users,
  Briefcase,
  BookOpen,
  Server,
  Code2,
  CheckCircle,
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
   2. WEB APPLICATION SOLUTIONS DATA
--------------------------------------------------------------------- */
const webAppSolutions = [
  {
    icon: ShoppingBag,
    title: "E-Commerce Websites",
    text: "Feature-rich online stores equipped with secure payment gateways, cart flows, and product catalog management.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Calendar,
    title: "Online Booking Systems",
    text: "Seamless reservation engines allowing users to book slots, appointments, or services instantly.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Briefcase,
    title: "Business Management Applications",
    text: "Custom internal dashboards and operational tools designed around your unique workflow processes.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Users,
    title: "Customer & Employee Portals",
    text: "Secure accounts where users or staff can manage profiles, track status, and access role-based modules.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: BookOpen,
    title: "Learning Management Systems",
    text: "Interactive educational platforms for course delivery, student tracking, and digital resource hosting.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Database,
    title: "Inventory & CRM Applications",
    text: "Powerful systems to track stock levels, client interactions, leads, and automated business updates.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Server,
    title: "Marketplace & Service Platforms",
    text: "Multi-vendor systems or service platforms connecting buyers and providers with integrated admin controls.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Code2,
    title: "Custom Dynamic Web Applications",
    text: "Tailor-made web solutions built from scratch to turn complex business requirements into reality.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. WEB APP FEATURES LIST
--------------------------------------------------------------------- */
const webAppFeaturesList = [
  "User Registration & Login",
  "Role-Based Access Control",
  "Admin Dashboard Panel",
  "Customer Account Dashboard",
  "Product & Service Management",
  "Order & Request Tracking",
  "Booking & Appointment Management",
  "Online Payment Gateway Integration",
  "Search, Filters & Sorting",
  "Real-time Notifications",
  "Reports & Analytics Export",
  "File & Image Cloud Uploads",
  "WhatsApp & Email Integration",
  "Secure API & Database Management",
];

/* ------------------------------------------------------------------
   4. DEVELOPMENT PROCESS DATA
--------------------------------------------------------------------- */
const webAppProcessSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "We discuss your idea, business process, users, and overall technical requirements.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Plan",
    desc: "We define the features, pages, user roles, database architecture, and application flow.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Design",
    desc: "We create a clean, responsive UI/UX interface tailored for both customers and admins.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Develop",
    desc: "Our engineering team builds the complete web application with robust functionality.",
    icon: Terminal,
  },
  {
    step: "05",
    title: "Test",
    desc: "We test across browsers and devices, fixing issues to ensure optimal performance.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch & Support",
    desc: "We help deploy your application live and provide continuous support for future enhancements.",
    icon: RefreshCw,
  },
];

/* ------------------------------------------------------------------
   5. PRICING PACKAGES (Project Tiers with DM Routing)
--------------------------------------------------------------------- */
const webAppPricingPlans = [
  {
    id: "dynamic-mvp",
    title: "Dynamic Web MVP",
    price: "₹30,000+",
    description: "Essential dynamic web application with user accounts, database connectivity, and core modules.",
    deliveryTime: "10 - 14 Working Days",
    idealFor: "Startups, MVPs & Portals",
    features: [
      "Responsive Custom Frontend UI/UX",
      "User Registration & Login Authentication",
      "Database & Dynamic API Integration",
      "Basic Admin Management Panel",
      "Deployment setup and configuration"
    ],
    highlighted: false,
  },
  {
    id: "business-webapp",
    title: "Full Business Web Application",
    price: "₹65,000+",
    description: "Advanced application featuring comprehensive admin control, payment gateways, and role access.",
    deliveryTime: "15 - 25 Working Days",
    idealFor: "E-Commerce, Booking Systems & CRMs",
    features: [
      "Multi-role access (Admin, Customer, Staff)",
      "Secure Online Payment Gateway integration",
      "Advanced Admin Dashboard & Analytics",
      "Automated email / WhatsApp notifications",
      "High-performance caching and security"
    ],
    highlighted: true,
  },
  {
    id: "enterprise-platform",
    title: "Enterprise Custom Solution",
    price: "₹1,20,000+",
    description: "High-scale custom web architecture built for complex logic, multi-vendor systems, or heavy workloads.",
    deliveryTime: "30+ Working Days",
    idealFor: "Large Scale Platforms & Marketplaces",
    features: [
      "Bespoke microservices & cloud infrastructure",
      "Advanced database management & security",
      "Third-party API and ERP sync pipelines",
      "Dedicated engineering team & priority SLA",
      "Continuous optimization and ongoing maintenance"
    ],
    highlighted: false,
  },
];

const DynamicWebServices = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) Form State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I selected the '${planTitle}' plan for Dynamic Web Application Development. Let's discuss my project!`
      : `Hello TechSasi, I want to build a custom dynamic web application for my business. Let's discuss!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here is my web application project idea:\n\n"${dmMessage}"`);
    
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
                Next-Gen Dynamic Web Architecture
              </span>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black uppercase mb-6 tracking-tight leading-tight text-white">
                More Than Just a Website — Build a Web App That{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Works For Your Business
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Some businesses need more than a basic website. If you want user accounts, bookings, orders, or profile management, a custom web app gives you the flexibility you need.
              </p>

              <div className="flex flex-wrap justify-center gap-4 items-center">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 group cursor-pointer"
                >
                  Start Your Web Application <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
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
              At TechSasi, we build custom dynamic web applications designed around how your business actually works —{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                easy to use, scalable, and ready to grow with your enterprise.
              </span>
            </p>
          </div>
        </section>

        {/* ================= WHAT WE CAN BUILD ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Custom Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What We Can Build
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Every business has unique workflows. We create tailor-made web applications based precisely on your idea.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {webAppSolutions.map((sol) => (
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

        {/* ================= WEBSITES THAT WORK DYNAMICALLY ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Interactive Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Websites That Work Dynamically
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Unlike simple static pages, dynamic web applications interact with users in real-time based on their actions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-orange-400" /> What Your Customers Can Do:
                </h3>
                <ul className="space-y-3 text-zinc-300 text-sm">
                  {[
                    "Create secure user accounts and log in",
                    "Update personal profiles and preferences",
                    "Browse live products or service offerings",
                    "Place orders and complete online payments",
                    "Make and manage service bookings or reservations",
                    "Submit enquiries and track request statuses",
                    "Receive real-time notifications and updates"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu className="text-orange-400" /> Powerful Admin Panel:
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  Managing your web platform shouldn't require a developer every time you want to make an update.
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  We build an intuitive admin dashboard where you can oversee business info, monitor products, manage customers, review orders, verify bookings, and export analytics from one central hub.
                </p>
                <div className="pt-2 border-t border-zinc-800 text-xs font-semibold text-orange-400">
                  Total control over your backend operations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES WE CAN ADD ================= */}
        <section className="py-24 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Modular Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Features We Can Add
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Equip your web application with the precise functional modules your business requires.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {webAppFeaturesList.map((feat) => (
                <div
                  key={feat}
                  ref={reveal}
                  className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl flex items-center gap-3 text-white hover:border-orange-500/50 hover:bg-zinc-900 transition duration-300 shadow-sm backdrop-blur-sm"
                >
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={20} />
                  <span className="font-medium text-sm">{feat}</span>
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
                From Idea to Working Application
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                Our Development Lifecycle
              </h2>
              <p className="text-lg text-zinc-300">
                A structured engineering framework designed by <span className="text-orange-400 font-semibold">TechSasi</span> to bring your web platform to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {webAppProcessSteps.map((item, idx) => (
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
                    <span>Phase {idx + 1} Pipeline</span>
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
                Web Application <span className="text-orange-400">Pricing Packages</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Transparent project tiers scaled for MVPs, business management systems, and enterprise platforms. Click any plan to review specifications and initiate direct WhatsApp messaging.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {webAppPricingPlans.map((plan) => (
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
                  Have a Bigger Idea? Tell <span className="text-orange-400">TechSasi</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Whether you need a customer portal, e-commerce system, CRM, or a custom web app, send your project requirements directly to our WhatsApp DM (+91 7448788897).
                </p>
              </div>

              {isSent ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 p-6 rounded-2xl text-center font-semibold animate-pulse">
                  ✅ Web app blueprint formatted successfully! Redirecting directly to WhatsApp DM...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Describe your web application concept here (e.g., Hi TechSasi, I need an online booking portal with admin dashboard...)"
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
                Ready to Build Your Web Application?
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Tell us what you want to build. <span className="text-orange-400 font-bold">TechSasi</span> will help you figure out the best way to engineer it.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Start Your Web Application <ArrowRight size={18} />
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
                    Selected Package
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedPlan.title}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-3">{selectedPlan.price}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{selectedPlan.description}</p>
                </div>

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

export default DynamicWebServices;