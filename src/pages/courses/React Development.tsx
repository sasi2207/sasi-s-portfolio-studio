import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  X,
  Clock,
  Send,
  BookOpen,
  Award,
  Terminal,
  Cpu,
  RefreshCw,
  Globe
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
   2. REACT COURSE CURRICULUM & SKILLS MATRIX
--------------------------------------------------------------------- */
const reactCourseData = [
  {
    icon: Code,
    title: "React Fundamentals & JSX",
    text: "Master JavaScript basics for React, JSX syntax, components, props, state, and event handling.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: RefreshCw,
    title: "Hooks & State Management",
    text: "Learn useState, useEffect, custom hooks, and manage complex application lifecycles efficiently.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Globe,
    title: "React Router & Navigation",
    text: "Build multi-page single-page applications (SPAs) with dynamic routing and navigation controls.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Terminal,
    title: "API Integration & Async",
    text: "Connect React apps to external backend services, handle JSON responses, and process data securely.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Layers,
    title: "Forms & Validation",
    text: "Build dynamic forms, handle user input states, validate fields, and ensure smooth user interactions.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Cpu,
    title: "Reusable Components & UI",
    text: "Design scalable component architectures, conditional rendering, lists, and responsive layouts.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Award,
    title: "Error Handling & Robustness",
    text: "Implement robust error boundaries, graceful fallbacks, and resilient application logic.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: BookOpen,
    title: "Deployment & Production",
    text: "Prepare your React application code for production build optimization and live web deployment.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. TARGET AUDIENCE TRACKS
--------------------------------------------------------------------- */
const reactTargetAudiences = [
  {
    icon: BookOpen,
    title: "College & CS Students",
    desc: "Upgrade your academic web development skills with industry-standard React framework training.",
  },
  {
    icon: Award,
    title: "Fresh Graduates",
    desc: "Build professional frontend React applications to display exceptional portfolio projects to recruiters.",
  },
  {
    icon: Code,
    title: "Beginner Web Developers",
    desc: "Transition smoothly from basic HTML, CSS, and JavaScript into advanced modern component-based UI engineering.",
  },
  {
    icon: Cpu,
    title: "Aspiring Frontend Devs",
    desc: "Master modern hooks, state management, and API architectures with personalized mentorship.",
  },
];

/* ------------------------------------------------------------------
   4. COURSE PLANS & PRICING
--------------------------------------------------------------------- */
const reactPricingPlans = [
  {
    id: "react-starter-course",
    title: "React Starter Track",
    price: "₹5,999 / program",
    description: "Foundational React training covering JSX, components, props, state, hooks, and basic UI apps.",
    duration: "4 Weeks Program",
    level: "Beginner Friendly",
    features: [
      "JavaScript basics for React & JSX syntax",
      "Components, Props, State & Event handling",
      "Introduction to useState & useEffect hooks",
      "Build a To-Do or Weather application project",
      "Trainer guidance & completion certificate"
    ],
    highlighted: false,
  },
  {
    id: "react-pro-course",
    title: "React Pro Developer Bootcamp",
    price: "₹9,999 / program",
    description: "Comprehensive React bootcamp featuring custom hooks, React Router, API integration, and full e-commerce frontend apps.",
    duration: "6 Weeks Program",
    level: "Intermediate Level",
    features: [
      "Advanced hooks & custom hook creation",
      "React Router for multi-page SPA navigation",
      "REST API integration & form validations",
      "Admin Dashboard & E-Commerce Frontend apps",
      "Portfolio project reviews & career guidance"
    ],
    highlighted: true,
  },
  {
    id: "react-custom-mentorship",
    title: "1-on-1 React Mentorship",
    price: "₹1,999 / week",
    description: "Personalized 1-on-1 React coaching and component debugging tailored to your personal learning speed.",
    duration: "Flexible Schedule",
    level: "Customized",
    features: [
      "Dedicated 1-on-1 expert React mentor",
      "Custom coding challenges & code refactoring",
      "Live doubt clearing & component debugging",
      "Frontend developer interview preparation",
      "Flexible schedule timing options"
    ],
    highlighted: false,
  },
];

const ReactCourseServices = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) Form State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I am interested in joining the '${planTitle}' React Course program. Let's start building modern apps! ⚛️`
      : `Hello TechSasi, I want to join the React Course program and build modern interactive web applications. Let's discuss details!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here are my React course goals and current background:\n\n"${dmMessage}"`);
    
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
        
        {/* ================= REBUILT HERO SECTION ================= */}
        <ParallaxSection
          className="pt-44 pb-32 relative overflow-hidden"
          bgClassName="bg-black/95 border-b border-zinc-900 backdrop-blur-md"
        >
          {/* Subtle Dynamic Glowing Backdrop Elements */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-orange-600/20 via-amber-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="container-custom max-w-6xl px-6 lg:px-12 relative z-10 mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headlines & CTA */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  Practical Frontend Training
                </div>

                <h1 className="text-4xl sm:text-6xl font-heading font-black uppercase mb-6 tracking-tight leading-[1.1] text-white">
                  Learn React & Start Building <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Modern Web Apps</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Want to learn React and build interactive websites? At TechSasi, our React Course helps students and beginners master UI development through practical coding and project work.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
                  <button
                    onClick={() => {
                      const courseSection = document.getElementById("course-programs");
                      courseSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 group cursor-pointer"
                  >
                    Join React Course <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppClick()}
                    className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-7 py-4 rounded-xl transition duration-300 shadow-xl group cursor-pointer"
                  >
                    <MessageCircle size={20} className="text-emerald-400 group-hover:text-white transition-colors" />
                    Talk to Trainer: 7448788897
                  </button>
                </div>
              </motion.div>

              {/* Right Column: Code Editor Mockup Aesthetic */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
                  
                  {/* Window Bar */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">App.jsx — TechSasi React</span>
                  </div>

                  {/* Code Snippet */}
                  <div className="font-mono text-xs sm:text-sm text-zinc-300 space-y-2 leading-relaxed overflow-x-auto">
                    <p><span className="text-purple-400">import</span> React, &#123; <span className="text-amber-300">useState</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'react'</span>;</p>
                    <p className="text-zinc-500">// Build real applications step by step</p>
                    <p><span className="text-blue-400">export default function</span> <span className="text-yellow-400">TechSasiApp</span>() &#123;</p>
                    <p className="pl-4"><span className="text-purple-400">const</span> [isReady, setIsReady] = <span className="text-yellow-300">useState</span>(<span className="text-orange-400">true</span>);</p>
                    <p className="pl-4 text-purple-400">return (</p>
                    <p className="pl-8">&lt;<span className="text-red-400">div</span> className=<span className="text-emerald-400">"react-course"</span>&gt;</p>
                    <p className="pl-12">&lt;<span className="text-red-400">h1</span>&gt;Learn React & Build Apps&lt;/<span className="text-red-400">h1</span>&gt;</p>
                    <p className="pl-8">&lt;/<span className="text-red-400">div</span>&gt;</p>
                    <p className="pl-4">);</p>
                    <p>&#125;</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Compiler Active
                    </span>
                    <span>JSX + Hooks Ready</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </ParallaxSection>

        {/* ================= VALUE STATEMENT ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 relative backdrop-blur-md">
          <div
            ref={reveal}
            className="container-custom max-w-6xl px-6 lg:px-12 blur-reveal text-center"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-200">
              At TechSasi, our React Course is designed for students, beginners, and aspiring frontend developers who want to learn React in a practical and easy-to-understand way.{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                We don't want you to simply watch tutorials and memorize concepts. You'll learn by writing code, practicing each concept, and building projects step by step.
              </span>
            </p>
          </div>
        </section>

        {/* ================= WHAT YOU'LL LEARN MATRIX ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              React Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What You'll Learn in the Course
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              From JavaScript fundamentals for React and JSX to hooks, routers, API integrations, and production deployment.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reactCourseData.map((item) => (
              <div
                key={item.title}
                ref={reveal}
                className={`blur-reveal group relative bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl transition duration-300 ${item.borderColor} overflow-hidden backdrop-blur-sm shadow-md`}
              >
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl -z-10 ${item.glowColor}`} />
                <item.icon className="text-orange-400 mb-5 w-8 h-8 transform group-hover:scale-110 transition duration-300" />
                <h3 className="font-semibold text-xl mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STEP-BY-STEP & PROJECTS ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              
              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    Learn React Step by Step
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Clear Guided Practice
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    You don't have to be an expert programmer before starting. We explain each concept in a simple way and give you time to practice it. As you become comfortable with the basics, you'll gradually move towards advanced concepts and complete applications.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-orange-300 font-mono tracking-wider flex items-center justify-center gap-2 text-center">
                  Learn the concept $\rightarrow$ Write code $\rightarrow$ Practice $\rightarrow$ Build feature
                </div>
              </div>

              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    Build Real Projects
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Practical Application Portfolio
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Projects are an essential part of our React training. During the course, you'll work on Personal Portfolios, Business Websites, To-Do Apps, Weather Apps, Product Listing Apps, Admin Dashboards, E-Commerce Frontends, and API-Based Web Applications.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300">
                  Portfolios, To-Do Apps, Weather Apps, Dashboards & E-Commerce Frontends.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= WHO CAN JOIN? ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Eligibility & Audience
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Who Can Join This Course?
            </h2>
            <p className="text-lg text-zinc-300 max-w-xl mx-auto">
              Basic knowledge of HTML, CSS, and JavaScript is recommended. If you're still learning JavaScript, we can help you understand the required concepts along the way.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reactTargetAudiences.map((aud) => (
              <div
                key={aud.title}
                ref={reveal}
                className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                    <aud.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{aud.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{aud.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHAT YOU'LL GAIN & LEARNING CYCLE ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center">
            <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-10 md:p-14 rounded-3xl shadow-xl">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Career Outcomes
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                What You'll Gain From TechSasi
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
                {[
                  { title: "Strong React Fundamentals", desc: "Understand component lifecycles, props, state, and application structuring." },
                  { title: "Practical Coding Skills", desc: "Write React code and build features instead of relying only on theory." },
                  { title: "API Integration Experience", desc: "Learn how React applications communicate with backend services and APIs." },
                  { title: "Problem-Solving Confidence", desc: "Learn how to break down UI requirements into smaller reusable components." }
                ].map((gain, i) => (
                  <div key={i} className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="text-orange-400 flex-shrink-0" size={18} />
                      <h4 className="text-sm font-bold text-white">{gain.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{gain.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-300 text-xs font-semibold uppercase tracking-wider">
                Understand $\rightarrow$ Practice $\rightarrow$ Code $\rightarrow$ Build Projects $\rightarrow$ Grow
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS / PRICING SECTION ================= */}
        <section id="course-programs" className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Course Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                React Course <span className="text-orange-400">Tiers & Pricing</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Choose a course plan that fits your learning pace. Click any program to review details and connect via WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {reactPricingPlans.map((plan) => (
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
                    <BookOpen size={16} /> View Program & DM Trainer
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
                  Start Learning <span className="text-orange-400">React Today</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Ready to move beyond basic HTML & CSS and build modern web apps? Send us a quick message via WhatsApp DM (+91 7448788897) to get started.
                </p>
              </div>

              {isSent ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 p-6 rounded-2xl text-center font-semibold animate-pulse">
                  ✅ Application details formatted successfully! Redirecting directly to WhatsApp Trainer...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Share your background, your JavaScript experience, and why you want to join the React course..."
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
                Learn React. Build Projects. Become a Better Developer.
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Join <span className="text-orange-400 font-bold">TechSasi</span> and start building modern interactive web applications with confidence.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const courseSection = document.getElementById("course-programs");
                    courseSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Join React Course <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl cursor-pointer"
                >
                  <MessageCircle size={20} />
                  Talk to Trainer: 7448788897
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROGRAM DETAILS & WHATSAPP MODAL ================= */}
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
                    Selected Course Program
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedPlan.title}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-3">{selectedPlan.price}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{selectedPlan.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3.5 sm:p-4 rounded-2xl border border-zinc-800">
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Clock size={12} className="text-orange-400" /> Duration
                    </span>
                    <span className="text-white text-xs font-semibold">{selectedPlan.duration}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Award size={12} className="text-orange-400" /> Level
                    </span>
                    <span className="text-white text-[11px] sm:text-xs font-medium">{selectedPlan.level}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between pt-2 md:pt-0">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3">
                    What You Will Learn & Build:
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
                    <MessageCircle size={18} /> Enroll via WhatsApp DM
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

export default ReactCourseServices;