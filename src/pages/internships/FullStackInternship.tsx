import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Database,
  Cpu,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  X,
  Clock,
  Send,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  Server
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
   2. AI FULL-STACK INTERNSHIP CURRICULUM & SKILLS MATRIX
--------------------------------------------------------------------- */
const aiFullStackInternshipData = [
  {
    icon: Globe,
    title: "Frontend Development",
    text: "Master HTML, CSS, JavaScript, React, responsive web design, UI components, and API integration.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Server,
    title: "Backend Development",
    text: "Build robust server-side logic, REST APIs, authentication, authorization using Python or Node.js.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Database,
    title: "Database Integration",
    text: "Work with SQL basics, database design, CRUD operations, and efficient application data management.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Sparkles,
    title: "AI & Generative AI Integration",
    text: "Connect AI APIs, master prompt engineering, build chatbots, and integrate smart text & data features.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Layers,
    title: "Full-Stack Architecture",
    text: "Connect Frontend, Backend, Database, APIs, and AI layers into a seamless, unified web app.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Code,
    title: "Version Control & Workflow",
    text: "Manage code repositories, track changes, collaborate efficiently, and debug production issues.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Cpu,
    title: "Deployment & Production",
    text: "Learn the fundamentals of taking your complete AI full-stack application from local dev to a live environment.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Award,
    title: "Problem Solving & Portfolio",
    text: "Translate business requirements into working AI features and build an impressive portfolio.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. TARGET AUDIENCE TRACKS
--------------------------------------------------------------------- */
const aiFullStackTargetAudiences = [
  {
    icon: BookOpen,
    title: "College & CS Students",
    desc: "Bridge academic computer science theory with modern full-stack web and generative AI technologies.",
  },
  {
    icon: Award,
    title: "Fresh Graduates",
    desc: "Build standout AI-powered web applications to showcase cutting-edge technical skills on your resume.",
  },
  {
    icon: Code,
    title: "Web Dev Beginners",
    desc: "Transition from basic programming to building complete, modern web apps enhanced with smart AI tools.",
  },
  {
    icon: Sparkles,
    title: "Aspiring AI Developers",
    desc: "Learn how to connect powerful AI models and APIs directly into full-stack backend and frontend systems.",
  },
];

/* ------------------------------------------------------------------
   4. INTERNSHIP PLANS & PRICING
--------------------------------------------------------------------- */
const aiFullStackPricingPlans = [
  {
    id: "ai-fullstack-starter",
    title: "AI Full-Stack Starter",
    price: "₹8,999 / program",
    description: "Foundational training in frontend, backend APIs, basic databases, and simple AI chatbot integration.",
    duration: "4 Weeks Program",
    level: "Beginner Friendly",
    features: [
      "HTML, CSS, JavaScript & React fundamentals",
      "Node.js / Python REST API backend setup",
      "SQL database design & CRUD operations",
      "Build an AI FAQ or simple chatbot app",
      "Trainer guidance & completion certificate"
    ],
    highlighted: false,
  },
  {
    id: "ai-fullstack-pro",
    title: "AI Full-Stack Pro Developer",
    price: "₹14,999 / program",
    description: "Comprehensive AI full-stack internship covering advanced AI APIs, prompt engineering, and complete SaaS projects.",
    duration: "6 Weeks Program",
    level: "Intermediate Level",
    features: [
      "Full stack pipeline: Frontend to Database to AI",
      "Advanced GenAI integration & prompt engineering",
      "AI Customer Support & Content Generator apps",
      "Deployment fundamentals to live environments",
      "Code reviews & professional portfolio building"
    ],
    highlighted: true,
  },
  {
    id: "ai-fullstack-mentorship",
    title: "1-on-1 AI Full-Stack Mentorship",
    price: "₹3,499 / week",
    description: "Personalized 1-on-1 coaching on full-stack architecture and AI API integration tailored to your pace.",
    duration: "Flexible Schedule",
    level: "Customized",
    features: [
      "Dedicated 1-on-1 expert AI/Full-Stack mentor",
      "Custom project roadmap & code reviews",
      "Live doubt clearing & bug debugging",
      "Software & AI engineering interview preparation",
      "Flexible scheduling options"
    ],
    highlighted: false,
  },
];

const AiFullStackInternshipServices = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) Form State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I am interested in joining the '${planTitle}' AI Full-Stack Internship program. Let's build the future! 🚀`
      : `Hello TechSasi, I want to join the AI Full-Stack Internship program and learn how to build AI-powered web applications. Let's discuss details!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here are my AI Full-Stack internship goals and current background:\n\n"${dmMessage}"`);
    
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
                Next-Gen AI Full-Stack Training
              </span>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black uppercase mb-6 tracking-tight leading-tight text-white">
                Learn to Build Modern Applications <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">with AI</span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Want to learn how modern web applications are built and understand how AI can be added to them? Learn full-stack development and AI integration through practical coding and real-world projects.
              </p>

              <div className="flex flex-wrap justify-center gap-4 items-center">
                <button
                  onClick={() => {
                    const internshipSection = document.getElementById("internship-programs");
                    internshipSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 group cursor-pointer"
                >
                  Join AI Full-Stack Internship <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-7 py-4 rounded-xl transition duration-300 shadow-xl group cursor-pointer"
                >
                  <MessageCircle size={20} className="text-emerald-400 group-hover:text-white transition-colors" />
                  Talk to Our Trainer: 7448788897
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
              At TechSasi, our AI Full-Stack Internship helps students and beginners master full-stack web development and generative AI integration.{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                You'll learn how a complete application works — from the user interface and backend to databases, APIs, deployment, and AI-powered features.
              </span>
            </p>
          </div>
        </section>

        {/* ================= WHAT YOU'LL LEARN MATRIX ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Comprehensive Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What You'll Learn in the Internship
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              From frontend interfaces and backend servers to databases and state-of-the-art AI API integrations.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFullStackInternshipData.map((item) => (
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

        {/* ================= BUILD FULL-STACK AI APPLICATIONS PIPELINE ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              
              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    End-to-End Pipeline
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Connect the Complete Stack
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Learning individual technologies is useful, but understanding how everything works together is even more important. You'll learn how to connect Frontend to Backend, Database to APIs, and integrate AI models right into live deployment pipelines.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-orange-300 font-mono tracking-wider flex items-center justify-center gap-2 text-center">
                  Frontend $\rightarrow$ Backend $\rightarrow$ Database $\rightarrow$ APIs $\rightarrow$ AI $\rightarrow$ Deployment
                </div>
              </div>

              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    Practical Projects
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Build AI-Powered Applications
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Work on practical projects combining full-stack development with AI features, including AI Chatbot Applications, Customer Support Systems, Content Generators, Business Dashboards, AI Resume Builders, and Smart Recommendation apps.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300">
                  AI Chatbots, Content Generators, Business Dashboards & E-Commerce Apps.
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
              Who Can Join This Internship?
            </h2>
            <p className="text-lg text-zinc-300 max-w-xl mx-auto">
              You don't need to know everything before joining. Basic programming knowledge is helpful, but we can guide you step by step as you learn.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFullStackTargetAudiences.map((aud) => (
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
                  { title: "Full-Stack Experience", desc: "Understand how frontend, backend, databases, and APIs work in sync." },
                  { title: "AI Integration Skills", desc: "Learn how generative AI services and APIs can be connected to real applications." },
                  { title: "Deployment Experience", desc: "Understand the basics of taking your application from development to a live environment." },
                  { title: "Career Confidence", desc: "Build a stronger foundation for future opportunities in web development and AI." }
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
                Learn $\rightarrow$ Practice $\rightarrow$ Build $\rightarrow$ Integrate AI $\rightarrow$ Deploy
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS / PRICING SECTION ================= */}
        <section id="internship-programs" className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Internship Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                AI Full-Stack Internship <span className="text-orange-400">Tiers & Pricing</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Choose an internship plan that fits your career goals. Click any program to review details and connect via WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {aiFullStackPricingPlans.map((plan) => (
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
                  Start Your <span className="text-orange-400">AI Full-Stack Journey</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  AI is changing software development. Send us a quick message via WhatsApp DM (+91 7448788897) to build AI-powered applications with TechSasi.
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
                      placeholder="Share your background, your coding experience, and why you want to join the AI Full-Stack internship..."
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
                Learn Full-Stack. Build with AI. Create the Future.
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Join <span className="text-orange-400 font-bold">TechSasi</span> and start building cutting-edge AI-powered applications with confidence.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const internshipSection = document.getElementById("internship-programs");
                    internshipSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Join AI Full-Stack Internship <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl cursor-pointer"
                >
                  <MessageCircle size={20} />
                  Talk to Our Trainer: 7448788897
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
                    Selected Internship Program
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
                    <MessageCircle size={18} /> Apply via WhatsApp DM
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

export default AiFullStackInternshipServices;