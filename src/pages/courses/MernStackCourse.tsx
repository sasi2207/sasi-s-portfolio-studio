import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Globe,
  Terminal,
  Cpu,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  X,
  Clock,
  Send,
  BookOpen,
  Award,
  Layers
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
   2. MERN STACK COURSE CURRICULUM & SKILLS MATRIX
--------------------------------------------------------------------- */
const mernCourseData = [
  {
    icon: Globe,
    title: "Frontend – React",
    text: "Master HTML5, CSS3, modern JavaScript, React fundamentals, JSX, components, hooks, routing, forms & validation, and API integration.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Server,
    title: "Backend – Node.js & Express.js",
    text: "Build scalable server-side logic with Node.js, Express.js REST APIs, routing, middleware, authentication, authorization, and error handling.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Database,
    title: "Database – MongoDB",
    text: "Learn MongoDB fundamentals, collections, documents, data modeling, CRUD operations, and seamless database integration from Node.js.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Code,
    title: "Development Tools",
    text: "Streamline your workflow with Git & GitHub, API testing, debugging, environment variables, and basic application deployment.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Cpu,
    title: "Full Stack Integration",
    text: "Understand how React $\rightarrow$ REST API $\rightarrow$ Node.js/Express $\rightarrow$ MongoDB connect together to form full-fledged web applications.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Terminal,
    title: "Real Project Building",
    text: "Build complete applications including Admin Dashboards, E-Commerce platforms, Blogs, Portfolios, and Custom Management Systems.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. TARGET AUDIENCE TRACKS
--------------------------------------------------------------------- */
const mernTargetAudiences = [
  {
    icon: BookOpen,
    title: "College & CS/IT Students",
    desc: "Bridge academic coursework with practical JavaScript stack development and production-ready portfolio projects.",
  },
  {
    icon: Award,
    title: "Beginner Web Developers",
    desc: "Strengthen your foundational JavaScript skills and transition smoothly into full-stack web engineering.",
  },
  {
    icon: Terminal,
    title: "JavaScript Developers",
    desc: "Master Node.js, Express, React, and MongoDB to build end-to-end modern web applications.",
  },
  {
    icon: Layers,
    title: "Working Professionals",
    desc: "Upskill to the MERN stack to pivot into high-demand frontend, backend, or full-stack roles.",
  },
];

/* ------------------------------------------------------------------
   4. COURSE PLANS & PRICING
--------------------------------------------------------------------- */
const mernPricingPlans = [
  {
    id: "mern-js-foundation",
    title: "JavaScript & React Fundamentals",
    price: "₹6,499 / program",
    description: "Master modern ES6+ JavaScript, DOM manipulation, React fundamentals, hooks, and responsive frontend UI creation.",
    duration: "4 Weeks Program",
    level: "Beginner Friendly",
    features: [
      "Modern ES6+ JavaScript mastery",
      "React fundamentals, JSX & components",
      "State, props, hooks & form validation",
      "React Router & API integration",
      "Trainer guidance & project certificate"
    ],
    highlighted: false,
  },
  {
    id: "mern-fullstack-bootcamp",
    title: "Complete MERN Stack Bootcamp",
    price: "₹13,999 / program",
    description: "Comprehensive end-to-end MERN program covering React, Node.js, Express.js, MongoDB, REST APIs, and real project deployment.",
    duration: "12 Weeks Program",
    level: "Comprehensive",
    features: [
      "Full React frontend architecture",
      "Node.js & Express.js REST API backend",
      "MongoDB database design & CRUD operations",
      "Build 5+ real apps (E-Commerce, Dashboards)",
      "Git, deployment & career placement prep"
    ],
    highlighted: true,
  },
  {
    id: "mern-custom-mentorship",
    title: "1-on-1 MERN Project Mentorship",
    price: "₹2,799 / week",
    description: "Personalized 1-on-1 coding mentorship, code reviews, and debugging sessions tailored to your pace.",
    duration: "Flexible Schedule",
    level: "Customized",
    features: [
      "Dedicated 1-on-1 expert JavaScript mentor",
      "Code review & backend debugging assistance",
      "Custom full-stack project building guidance",
      "Interview prep & resume review",
      "Flexible timing options"
    ],
    highlighted: false,
  },
];

const MernStackCourseServices = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) Form State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I am interested in joining the '${planTitle}' MERN Stack Course program. Let's start building! 🚀`
      : `Hello TechSasi, I want to join the MERN Stack Course program and become a full stack developer. Let's discuss details!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here is my JavaScript experience and MERN stack goals:\n\n"${dmMessage}"`);
    
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
        .bg-grid-box-full-mern {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(249, 115, 22, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.08) 1px, transparent 1px);
        }
      `}</style>

      {/* Main Wrapper with Black Background & Box Grid Lines */}
      <div className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-black bg-grid-box-full-mern relative overflow-x-hidden">
        
        {/* ================= HERO SECTION ================= */}
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
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  JavaScript Full Stack Masterclass
                </div>

                <h1 className="text-4xl sm:text-6xl font-heading font-black uppercase mb-6 tracking-tight leading-[1.1] text-white">
                  Learn MERN Stack and Build <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">Modern Web Apps</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Want to become a Full Stack Developer using JavaScript? At TechSasi, our MERN Stack Course helps students, beginners, and aspiring developers build complete web apps using MongoDB, Express.js, React, and Node.js.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
                  <button
                    onClick={() => {
                      const courseSection = document.getElementById("course-programs");
                      courseSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 group cursor-pointer"
                  >
                    Join MERN Stack Course <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppClick()}
                    className="inline-flex items-center gap-3 bg-zinc-900 border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-600 font-bold px-7 py-4 rounded-xl transition duration-300 shadow-xl group cursor-pointer"
                  >
                    <MessageCircle size={20} className="text-orange-400 group-hover:text-white transition-colors" />
                    Talk to Trainer: 7448788897
                  </button>
                </div>
              </motion.div>

              {/* Right Column: Code Terminal Aesthetic */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
                  
                  {/* Window Bar */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-orange-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">server.js (Node / Express)</span>
                  </div>

                  {/* Code Snippet Box */}
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 font-mono text-xs space-y-2 text-zinc-300">
                    <div className="text-orange-400">const express = require('express');</div>
                    <div className="text-amber-300">const app = express();</div>
                    <div className="text-zinc-400">app.use(express.json());</div>
                    <div className="text-orange-300">app.get('/api/v1/mern', (req, res) =&gt; &#123;</div>
                    <div className="pl-4 text-zinc-200">res.json(&#123; message: "TechSasi MERN Stack Active!" &#125;);</div>
                    <div className="text-orange-300">&#125;);</div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5 text-orange-400">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" /> MongoDB Connected
                    </span>
                    <span>React / Node.js</span>
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
              You’ll learn how the frontend and backend work together, how data is stored and managed, how APIs are created, and how to turn an idea into a working web application.{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                Build production-ready apps entirely using JavaScript across the client and server.
              </span>
            </p>
          </div>
        </section>

        {/* ================= WHAT YOU'LL LEARN MATRIX ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Complete MERN Syllabus
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What You'll Learn in the MERN Course
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Our course takes you through the complete development journey from React interfaces to Node APIs and MongoDB databases.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mernCourseData.map((item) => (
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

        {/* ================= HOW EVERYTHING CONNECTS & PROJECTS ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              
              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    Architecture Flow
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Understand How a Full Stack App Works
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    You'll understand how a user interacts with the frontend, how the request reaches the backend, and how data is stored and retrieved from the database.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-orange-300 font-mono tracking-wider flex items-center justify-center gap-2 text-center">
                  React $\rightarrow$ API $\rightarrow$ Node.js / Express $\rightarrow$ MongoDB
                </div>
              </div>

              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    Practical Projects
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Build Real-World Applications
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Work on practical projects such as Personal Portfolios, Business Management Apps, Student Management Systems, E-Commerce Websites, Online Bookings, Admin Dashboards, and full-stack web applications.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300">
                  E-Commerce, Admin Dashboards, CRM & Portfolios.
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
              Basic knowledge of HTML, CSS, and JavaScript is recommended. If you're still developing your JS skills, we'll help you master required concepts.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mernTargetAudiences.map((aud) => (
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
                  { title: "JavaScript Proficiency", desc: "Build a strong foundation in modern ES6+ JavaScript and use it across the entire stack." },
                  { title: "React Frontend Skills", desc: "Create interactive, responsive, and dynamic user interfaces using React components and hooks." },
                  { title: "Node & Express Backend", desc: "Build secure RESTful APIs and robust application logic using Node.js and Express." },
                  { title: "MongoDB Database Skills", desc: "Understand how to model, store, and manage application data using MongoDB." }
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
                Learn $\rightarrow$ Practice $\rightarrow$ Build $\rightarrow$ Connect $\rightarrow$ Test $\rightarrow$ Deploy
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
                MERN Stack Course <span className="text-orange-400">Tiers & Pricing</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Choose a course plan that fits your learning journey. Click any program to review details and connect via WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {mernPricingPlans.map((plan) => (
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
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
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
                  Start Your <span className="text-orange-400">MERN Journey</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Ready to learn MERN, build real applications, and grow your JavaScript skills? Send us a quick message via WhatsApp DM (+91 7448788897).
                </p>
              </div>

              {isSent ? (
                <div className="bg-orange-500/10 border border-orange-500/40 text-orange-400 p-6 rounded-2xl text-center font-semibold animate-pulse">
                  ✅ Developer profile formatted successfully! Redirecting directly to WhatsApp Trainer...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Share your current JavaScript experience and why you want to join the MERN Stack Course..."
                      className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-orange-500 rounded-2xl p-4 text-white text-sm placeholder-zinc-500 focus:outline-none transition resize-none shadow-inner"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
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
                Learn MERN. Build Real Applications. Grow Your Development Skills.
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Start your MERN journey with <span className="text-orange-400 font-bold">TechSasi</span> today.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const courseSection = document.getElementById("course-programs");
                    courseSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Join MERN Stack Course <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-600 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl cursor-pointer"
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
                    className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 px-4 sm:px-5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 cursor-pointer text-xs sm:text-sm"
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

export default MernStackCourseServices;