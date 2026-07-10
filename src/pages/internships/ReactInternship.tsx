import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Users, Rocket, Target, Calendar, Award, Terminal, 
  Layers, CheckCircle2, PlayCircle, FileText, ArrowUpRight, ChevronRight,
  Globe, ShieldCheck,Radio,Server, Activity, Database, Box, Sliders, Cpu, HardDrive, MessageSquare
} from 'lucide-react';
import { Layout as PageLayout } from "@/components/layout/Layout";

const react15Concepts = [
  { id: "jsx-dom", label: "1. Semantic JSX & Layouts", icon: Code2, color: "from-blue-500 to-sky-600", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "Semantic UI Structure & Layout Specifications", desc: "Master crafting clean structural semantic elements mapping native nodes attributes maximizing indexing speed optimization loops.", perks: ["Semantic Document Object Model Tree Audits", "Native Element Attribute Layout Mappings", "Cross Browser Compilations Rendering Tests", "Keyboard Accessible Traversal Configurations"] },
  { id: "tailwind-matrix", label: "2. Tailwind Token Styling", icon: Sliders, color: "from-sky-400 to-teal-500", bgLight: "bg-sky-50/80", textLight: "text-sky-500", headline: "Corporate Theme Constraint Design Grids", desc: "Build industry grade complex styling layouts mapping custom configurations extensions avoiding arbitrary layout shift calculations parameters.", perks: ["Flexible Multi Device Layout Grids Systems", "Theme Extension Multi Profile Config Schemes", "Optimized Purge Build Bundle Minimizations", "Hardware Accelerated CSS Transition Filters"] },
  { id: "fiber-engine", label: "3. Fiber Reconciliation", icon: Cpu, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50/80", textLight: "text-cyan-600", headline: "Virtual DOM Tree Node Diffing Architectures", desc: "Deep dive onto virtual reference changes allocations tracing transactional tree adjustments utilizing batch scheduler frameworks algorithms.", perks: ["Heuristic Diff Tree Mutation Allocation Math", "State Queue Render Batching Schedulers", "Component Node Keys Structural Stability Rules", "Concurrent Mode Priority Processing Slices"] },
  { id: "state-lifecycle", label: "4. State Lifecycle Loops", icon: Box, color: "from-indigo-500 to-purple-600", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "Functional Component Render Execution Flows", desc: "Isolate atomic state blocks parameters inside processing memory closures capturing continuous layout state update cycles uniformly.", perks: ["Functional Component Closure State Snapshot Scopes", "Batch State Dispatch Enqueue Pipeline Validations", "Custom Functional Hook Abstract Business Logic", "Initial State Computations Lazy Load Wraps"] },
  { id: "effects-sync", label: "5. Side-Effect Interceptors", icon: Activity, color: "from-purple-600 to-fuchsia-700", bgLight: "bg-purple-50/80", textLight: "text-purple-600", headline: "External Synchronizations Data Stream Hooks", desc: "Manage memory leak boundaries cleaning open data listeners sockets pipelines using strict hook lifecycle execution arrays.", perks: ["Dependency Equality Array Match Validations Check", "Listener Garbage Collection Memory Allocation Cleanup", "Asynchronous Operations Execution Flow Handlers Blocks", "Strict Mode Double Invocation Mount Controls"] },
  { id: "refs-pointers", label: "6. Persistent Ref Handles", icon: Terminal, color: "from-slate-700 to-slate-900", bgLight: "bg-slate-100/80", textLight: "text-slate-700", headline: "Direct DOM Instance Pointer Access Bridges", desc: "Persist underlying element values across continuous rendering iterations safely skipping layout computation triggers entirely.", perks: ["Render Pass Bypass Value Preservation Metrics", "Direct HTML Node Manual Element Focus Handlers", "Previous State Snapshot Values Cache Registries", "ForwardRef Subcomponent Element Link Transmissions"] },
  { id: "perf-cache", label: "7. Performance Optimization", icon: Sliders, color: "from-amber-500 to-orange-600", bgLight: "bg-amber-50/80", textLight: "text-amber-600", headline: "Computation Value Memory Preservation Layers", desc: "Protect execution metrics avoiding heavy loop recalculations intercepting variable instances caching allocation functions contexts.", perks: ["useMemo High Overhead Array Computations Cache", "useCallback Function Reference Referential Equality", "React.memo Pure Component Re-render Suppressions", "Render Loop Microsecond Saturation Diagnostic Audits"] },
  { id: "context-propagation", label: "8. Global State Context", icon: Layers, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Unidirectional Global Broadcaster Networks", desc: "Bypass multi tier component drilling trails distributing enterprise data properties snapshots straight to child subscriber blocks channels.", perks: ["Context Tree Splitting Render Explosion Defense", "Provider Consumer State Value Payload Updates", "Zustand Core Memory State Matrix Integrations", "Immutability State Modification Actions Contracts"] },
  { id: "app-router", label: "9. Next.js Routing Ingress", icon: Globe, color: "from-emerald-600 to-teal-700", bgLight: "bg-emerald-50/80", textLight: "text-emerald-600", headline: "Nested Layout File System Route Frameworks", desc: "Structure complex layout architectures managing path segmentation variables while keeping cross page view instances completely state persistent.", perks: ["Dynamic Slugs Route Token URL Query Extractions", "Parallel Async Loading Views Ingress Intercepts", "Shared Root Common Layout Error Handling Blocks", "Route Guard Middleware Request Session Check Decodes"] },
  { id: "hydration-modes", label: "10. Hydration Engines (SSR)", icon: HardDrive, color: "from-teal-500 to-cyan-600", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "Server HTML Pre-rendering Hydration Lifecycles", desc: "Maximize core web vital score indices implementing intelligent hybrid streaming compilation delivery methods directly onto user viewports.", perks: ["Server-Side Rendering (SSR) Live Pipeline Generates", "Static Site Generation (SSG) Pre-compiled Build Loops", "Incremental Static Revalidation (ISR) Re-fetch Routines", "Streaming Document Chunk Suspense Component Loads"] },
  { id: "server-actions", label: "11. React Server Actions", icon: Target, color: "from-rose-500 to-red-600", bgLight: "bg-rose-50/80", textLight: "text-rose-600", headline: "Direct RPC Database Mutation Channels", desc: "Eliminate repetitive backend fetch API controllers handling asynchronous form submissions leveraging direct secure server directives execution hooks.", perks: ["useActionState Dynamic Server Action Form Reducers", "Optimistic State Injections Client UI Emulators", "Server Directives Cryptographic Access Border Blocks", "Target Path Invalidation Router Tag Refresh Triggers"] },
  { id: "tanstack-query", label: "12. Async Server State Cache", icon: Radio, color: "from-indigo-600 to-violet-700", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "Asynchronous Server Response Memory Stores", desc: "Synchronize local front states with deep cluster DB records configuring automated background revalidations cache invalidations schedules.", perks: ["StaleTime vs CacheTime Entry Eviction Pipeline Configurations", "Window Focus Fetch Trigger Auto Synchronization Loops", "Mutation Mutation Optimistic Payload Query Key Invalidates", "Pagination Cache Buffer Accumulator State Transformers"] },
  { id: "bundle-splitting", label: "13. Code Splitting Chunking", icon: Activity, color: "from-pink-500 to-rose-600", bgLight: "bg-pink-50/80", textLight: "text-pink-600", headline: "Dynamic Incremental Compilation Bundle Extraction", desc: "Reduce initial application bundle size payload weight distributing heavy interactive screens onto separate network request paths.", perks: ["next/dynamic Component Code Separation Lazy Wraps", "Suspense Content Intersection View Loading Fallbacks", "Bundle Analyzer Dependency Tree Footprint Diagnoses", "Interaction to Next Paint (INP) Speed Optimization Maps"] },
  { id: "auth-security", label: "14. NextAuth Token Security", icon: ShieldCheck, color: "from-teal-600 to-emerald-700", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "Cryptographic Client Route Access Guards", desc: "Deploy rigid multi tenant cross origin identification rules validation systems decrypting secure asymmetric token payload structures data fields.", perks: ["Federated Identity Handshake Token Sign In Configurations", "JWT Callback Authorization Claim Profile Decodes", "Session Adaptation Database Sync Lifecycle Channels", "CSRF Protection Interceptor Cryptographic State Handlers"] },
  { id: "docker-deploy", label: "15. Containerized Deployments", icon: Server, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Immutable Sandbox Application Bundle Images", desc: "Wrap production frontend build bundles inside lightweight virtualization operating layers ensuring standard environment outputs cloud native configurations.", perks: ["Multi-Stage Minimal Static Image Compression Dockerfiles", "Layer Caching Build Engine Acceleration Runs", "Docker Network Routing Configuration Interchanges Links", "GitHub Actions CI/CD Automated Target Image Compiles"] }
];

export const ReactInternship = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("jsx-dom");
  const overallContainerRef = useRef(null);

  // DYNAMIC SCROLL-LINKED BLUR MATRIX CONTROL SYSTEM
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(65px)", "blur(40px)", "blur(12px)"]);
  const adaptiveScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <PageLayout>
      <div ref={overallContainerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-blue-600 selection:text-white">
        
        {/* 🌪️ INTERACTIVE SCROLL-LINKED BLUR AMBIENT ATMOSPHERE MESH */}
        <motion.div style={{ filter: scrollLinkBlur }} className="absolute inset-0 pointer-events-none z-0 transition-all duration-300">
          <div className="absolute top-[-5%] left-[-8%] w-[650px] h-[650px] bg-blue-100/40 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-cyan-100/20 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-teal-100/30 rounded-full mix-blend-multiply blur-2xl" />
        </motion.div>

        {/* TOP HERO ANCHOR BLOCK */}
        <motion.section style={{ scale: adaptiveScale }} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
            
            <div className="max-w-4xl space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-500/30 backdrop-blur-xs">
                <Rocket size={14} className="text-blue-400" /> React Enterprise Academy Track
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                React Development <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                  15 Industrial Core Syllabus
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
                Semantic rendering trees, fiber virtual reconciliation loops, dynamic closures lifecycles, memory cache calculations, automated server data syncs matrum containerized production deployment blueprints tracker panels.
              </p>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 text-sm">
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Duration</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Calendar size={14} className="text-blue-400" /> 12 Weeks Tracks</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Program Mode</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Users size={14} className="text-emerald-400" /> Remote Cohorts</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scope</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Target size={14} className="text-cyan-400" /> Frontend Engineering</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outcome</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Award size={14} className="text-teal-400" /> Industry Specs</p></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN (SCROLLABLE) */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[760px] overflow-y-auto pr-2 custom-scrollbar">
              {react15Concepts.map((item) => {
                const CurrentIcon = item.icon;
                const activeFlag = activeConceptId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveConceptId(item.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between shadow-xs ${
                      activeFlag 
                        ? 'bg-white border-slate-900 ring-1 ring-slate-900 shadow-xs' 
                        : 'bg-white/70 border-slate-200/50 backdrop-blur-xs hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-lg ${item.bgLight} ${item.textLight}`}>
                        <CurrentIcon size={18} />
                      </div>
                      <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">{item.label}</span>
                    </div>
                    <ArrowUpRight size={16} className={`${activeFlag ? 'text-slate-900' : 'text-slate-300'} transition-colors`} />
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT DETAILED BLUEPRINT SHOWCASE DISPLAY WINDOW */}
            <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xs relative min-h-[550px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {react15Concepts.map((concept) => concept.id === activeConceptId && (
                  <motion.div
                    key={concept.id}
                    initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(5px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <span className={`px-3 py-1 bg-gradient-to-r ${concept.color} text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-xs`}>
                          Track Syllabus Blueprint Matrix Spec
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight sm:text-3xl">
                          {concept.headline}
                        </h2>
                        <p className="text-slate-500 font-light text-base leading-relaxed">
                          {concept.desc}
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-6 space-y-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">What you will engineering deploy:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {concept.perks.map((topic, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.04 }}
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
                      <button className="flex-1 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-xs">
                        <PlayCircle size={16} /> Submit Application For This Track
                      </button>
                      <button className="px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100/70 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                        <FileText size={16} className="text-slate-400" /> Syllabus Specs Blueprint
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