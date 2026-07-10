import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Database, 
  Server, 
  Cpu, 
  Globe, 
  ChevronDown, 
  HelpCircle,
  PlayCircle,
  FileText,
  CheckCircle2,
  Terminal,
  Layers,
  ArrowUpRight
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

const mernCoreCourses = [
  {
    id: "m-db",
    tech: "MongoDB",
    icon: Database,
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50/80",
    textLight: "text-emerald-600",
    headline: "NoSQL Database Platform",
    desc: "Enterprise level data storing using highly scalable and flexible BSON document pipelines.",
    topics: ["BSON Document Modeling & Schemas", "Mongoose ODM Deep Validation", "Aggregation Framework Pipelines", "Indexing Strategies & Query Performance"]
  },
  {
    id: "e-js",
    tech: "Express.js",
    icon: Server,
    color: "from-slate-700 to-slate-900",
    bgLight: "bg-slate-100/80",
    textLight: "text-slate-700",
    headline: "Backend REST API Framework",
    desc: "Minimalist and fast server architecture overlay written directly for Node.js environments.",
    topics: ["Routing Architecture & MVC Setups", "Custom Middleware Engineering", "Error Interception & Handling Layers", "Token-Based Security (JWT Auth)"]
  },
  {
    id: "r-js",
    tech: "React.js",
    icon: Cpu,
    color: "from-sky-500 to-indigo-600",
    bgLight: "bg-sky-50/80",
    textLight: "text-sky-600",
    headline: "Frontend UI Dynamic Engine",
    desc: "Declarative, component-driven interface rendering optimized via state mutation architectures.",
    topics: ["Virtual DOM Optimization Hooks", "Advanced State (Redux Toolkit / Context)", "Protected Routing Implementations", "Data Fetching with React Query / Axios"]
  },
  {
    id: "n-js",
    tech: "Node.js",
    icon: Globe,
    color: "from-lime-600 to-green-700",
    bgLight: "bg-lime-50/80",
    textLight: "text-lime-700",
    headline: "V8 JavaScript Runtime Engine",
    desc: "Event-driven asynchronous server environments engineered for massive distributed traffic throughput.",
    topics: ["Event Loop Threads & EventEmitters", "File Streams & Buffer Protocols", "Real-Time Interchanges (Socket.io)", "Cluster Node Clustering & Performance"]
  }
];

export const MernExplanationHub = () => {
  const [activeCourse, setActiveCourse] = useState<string | null>("m-db");
  const containerRef = useRef(null);
  
  // SCROLL-LINKED BLUR ENGINE (Neenga scroll panna panna elements focus aagum!)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamic values tracked over scroll timelines
  const bgBlurValue = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(30px)", "blur(60px)", "blur(10px)"]);
  const layerScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <PageLayout>
    <div ref={containerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* 🌪️ DYNAMIC AMBIENT SCROLL BLUR BACKGROUND LAYER */}
      <motion.div 
        style={{ filter: bgBlurValue }}
        className="absolute inset-0 pointer-events-none z-0 transition-all duration-300"
      >
        <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full mix-blend-multiply blur-2xl" />
        <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] bg-emerald-100/30 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-[550px] h-[550px] bg-amber-100/40 rounded-full mix-blend-multiply blur-2xl" />
      </motion.div>

      {/* HERO HERO TITLE HEADER */}
      <motion.section 
        style={{ scale: layerScale }}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 relative z-10"
      >
        <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-indigo-500/30 backdrop-blur-xs">
              <Layers size={14} className="text-indigo-400" /> Full Stack Ecosystem
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              MERN Stack <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500">
                Core Architectures
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed">
              MERN stack la irukura ella single course path-aiyum complete-a breakdown panni, adhan functional mechanics-a inge kathinga.
            </p>
          </div>
        </div>
      </motion.section>

      {/* INTERACTIVE COURSES TRACK EXPLORER */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SELECTOR CARDS: GRID REVEALS VIA IN-VIEW SCROLL */}
          <div className="lg:col-span-5 space-y-4">
            {mernCoreCourses.map((course) => {
              const IconComponent = course.icon;
              const isSelected = activeCourse === course.id;

              return (
                <motion.div
                  key={course.id}
                  whileHover={{ x: 6 }}
                  onClick={() => setActiveCourse(course.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between shadow-xs ${
                    isSelected 
                      ? 'bg-white border-slate-900 ring-1 ring-slate-900' 
                      : 'bg-white/80 border-slate-200/60 backdrop-blur-xs hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${course.bgLight} ${course.textLight}`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 tracking-tight text-lg">{course.tech}</h3>
                      <p className="text-slate-400 text-xs font-light tracking-wide">{course.headline}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className={`${isSelected ? 'text-slate-900' : 'text-slate-300'} transition-colors`} />
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT PANELS DESCRIPTION DESK - RUNNING SYLLABUS ANIME */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xs relative min-h-[460px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {mernCoreCourses.map((course) => course.id === activeCourse && (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${course.color} text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-xs`}>
                        {course.tech} Suite
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight sm:text-3xl">
                        {course.headline}
                      </h2>
                      <p className="text-slate-500 font-light text-base leading-relaxed">
                        {course.desc}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-6 space-y-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">What you will master:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {course.topics.map((topic, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-2.5 text-sm text-slate-600"
                          >
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-light leading-tight">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100/80 flex flex-wrap gap-3">
                    <button className="flex-1 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                      <PlayCircle size={16} /> Course Preview
                    </button>
                    <button className="px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100/70 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                      <FileText size={16} className="text-slate-400" /> Full Syllabus
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>

    </PageLayout>
  );
};