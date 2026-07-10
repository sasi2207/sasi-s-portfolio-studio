
import { Layout as PageLayout } from "@/components/layout/Layout";
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Cpu, Layers, Globe, Server, Terminal, ShieldCheck, Activity, Radio, 
  MessageSquare, HardDrive, Database, Box, Sliders, CheckCircle2, PlayCircle, FileText, ArrowUpRight
} from 'lucide-react';

const react14Concepts = [
  { id: "vdom", label: "1. Virtual DOM & Diffing", icon: Cpu, color: "from-sky-500 to-blue-600", bg: "bg-sky-50/80", text: "text-sky-600", headline: "Fiber Reconciliation Engine Mechanics", desc: "Understand how React creates a lightweight memory representation of the real DOM, executing batch updates using the heuristic O(n) diffing algorithm.", topics: ["Fiber Tree Node Allocation States", "Batching Mutation Event Updates Loops", "Heuristic Tree Traversal Diffing Rules", "Keys Optimization Element Stability Identification"] },
  { id: "state", label: "2. State & Prop Mutators", icon: Sliders, color: "from-blue-600 to-indigo-700", bg: "bg-blue-50/80", text: "text-blue-600", headline: "Unidirectional Declarative Data Flows", desc: "Manage component transactional snapshot allocations safely tracking functional renders lifecycle triggers when local boundaries mutate.", topics: ["Asynchronous State Setter Batch Enqueues", "Immutability Maintenance Spread Operations", "Props Drilling Bounds Isolation Patterns", "Functional State Functional Updater Closures"] },
  { id: "hooks", label: "3. Advanced Core Hooks", icon: Terminal, color: "from-indigo-500 to-purple-600", bg: "bg-indigo-50/80", text: "text-indigo-600", headline: "Functional Lifecycle Interception Hooks", desc: "Orchestrate structural component mounts, updates setup cleanup workflows, and dynamic instance references across render iterations.", topics: ["useEffect Dependency Array Cache Triggers", "useRef Persistent Memory Addresses Safe Storing", "useLayoutEffect Synchronous Screen Paint Execution", "useImperativeHandle Controlled Child Method Exposures"] },
  { id: "memo", label: "4. Render Memoization Engine", icon: Layers, color: "from-purple-600 to-fuchsia-700", bg: "bg-purple-50/80", text: "text-purple-600", headline: "Preventing Unnecessary Render Propagations", desc: "Cache compute-heavy functions results arrays and prevent downstream layout re-evaluation triggers via strict reference checks.", topics: ["React.memo Shallow Prop Reference Evaluations", "useMemo Heavy Mathematical Computation Caching", "useCallback Referential Referential Function Safeguards", "Profiling Component Render Saturation Spikes"] },
  { id: "context", label: "5. Context Global Storage", icon: Box, color: "from-pink-500 to-rose-600", bg: "bg-pink-50/80", text: "text-pink-600", headline: "Native Multi-Tier Component Data Broadcast", desc: "Construct native state broadcast infrastructure providers eliminating continuous prop tree distribution loops globally.", topics: ["Provider / Consumer Architecture Scopes Mapping", "Context Splitting Performance Isolation Fixes", "Dynamic Object State Multi-Provider Trees", "Custom Consumers Execution Encapsulations Modules"] },
  { id: "redux", label: "6. Redux Toolkit Architecture", icon: Database, color: "from-violet-600 to-purple-800", bg: "bg-violet-50/80", text: "text-violet-600", headline: "Predictable Deterministic Global State Stores", desc: "Orchestrate large-scale immutable transactional central stores using unified modern action slicing configurations mechanics.", topics: ["ConfigureStore Middleware Pipeline Injections", "Slice Reducers Actions Auto Generation Maps", "Immer Library Abstract Mutator Conversions", "Async Thunk API Interface Data Fetch Pipelines"] },
  { id: "routing", label: "7. React Router Protected Nodes", icon: Globe, color: "from-emerald-600 to-teal-700", bg: "bg-emerald-50/80", text: "text-emerald-600", headline: "Dynamic Client-Side History Router Engines", desc: "Architect client route trees, search query states parsing engines, and protected authentication gate wraps validation protocols.", topics: ["Data Router Actions Loaders Data Fetching Sync", "Nested Layout Routing Outlet View Renders", "Protected Token Gate Wrap Access Interceptors", "Dynamic Path Tokens Parameter State Synchronizers"] },
  { id: "query", label: "8. TanStack Query Caching", icon: Radio, color: "from-amber-500 to-orange-600", bg: "bg-amber-50/80", text: "text-amber-600", headline: "Asynchronous Server-State Cache Aggregation", desc: "Eliminate manual fetch useEffects caching server side parameters dynamically using staled asset revalidation hooks tracking metrics.", topics: ["StaleTime vs CacheTime Eviction Matrices Config", "Automated Background Query Poll Revalidation Actions", "Optimistic Updates Client Immediate Layout Changes", "Infinite Scroll Pagination Data Aggregator Query Buffers"] },
  { id: "forms", label: "9. React Hook Form Validators", icon: ShieldCheck, color: "from-teal-500 to-emerald-600", bg: "bg-teal-50/80", text: "text-teal-600", headline: "Uncontrolled Highly Performant Form Handlers", desc: "Mitigate keypress component render loops subscribing input references using automated json schema constraint validation bindings.", topics: ["Ref Register Elements Node Event Hooks Injections", "Zod Schema Validation Engine Integrations Profiles", "FormState Tracking Dirty Touched Element Validation Logs", "Dynamic Field Array Allocation Append Append Matrices"] },
  { id: "perf", label: "10. Suspense & Code Splitting", icon: Activity, color: "from-rose-500 to-red-600", bg: "bg-rose-50/80", text: "text-rose-600", headline: "Dynamic Incremental Bundle Chunk Lazy Loading", desc: "Optimize bundle overhead allocations lazy loading view routes chunk separations falling back onto custom visual indicator layouts.", topics: ["React.lazy Programmatic Dynamic Import Extractions", "Suspense Boundary Boundary Component Wrapper Wraps", "Concurrent Transition useTransition Priority Queue Sets", "Network Chunk Pre-fetching Optimization Triggers Execution"] },
  { id: "error", label: "11. React Error Boundaries", icon: ShieldCheck, color: "from-red-600 to-orange-700", bg: "bg-red-50/80", text: "text-red-600", headline: "Declarative Component Crash Containment Barriers", desc: "Catch runtime client execution loop errors gracefully rendering localized fallback elements preventing complete screen wipeouts.", topics: ["getDerivedStateFromError Static Safety State Flags", "componentDidCatch Remote Telemetry Crash Logging Profiles", "Localized Crash Container Scope Partition Blocks", "Dynamic Error Recovery State Reset Reset Handlers"] },
  { id: "custom", label: "12. Custom Hook Factories", icon: Terminal, color: "from-slate-700 to-slate-900", bg: "bg-slate-100/80", text: "text-slate-700", headline: "Reusable Cross-Cutting Logic Synthesizers", desc: "Encapsulate clean browser network tracking mutations or event stream interactions compiling reusable custom code blueprints frameworks.", topics: ["Composable Stateful Logic Flow Extractions Hooks", "Event Listener Subscriptions Document Node Wraps", "Custom Fetch Timeout Interceptor Wrappers Patterns", "Shared Context Use State Mutation Abstractions"] },
  { id: "css", label: "13. Tailwind & Framer Motion", icon: Server, color: "from-cyan-500 to-blue-600", bg: "bg-cyan-50/80", text: "text-cyan-600", headline: "Declarative GPU Accelerated UI Animation Layouts", desc: "Build enterprise class design templates managing layout state frame shifts utilizing utility parameters bindings.", topics: ["AnimatePresence Exit State Lifecycle Trackings", "Layout Id Fluid Layout Component Transformations Maps", "Dynamic Arbitrary Tailwind Utility Themes Customizations", "GPU Accelerated Hardware Transform Tween Timelines"] },
  { id: "build", label: "14. Vite Bundler & CI/CD Push", icon: Box, color: "from-orange-500 to-red-600", bg: "bg-orange-50/80", text: "text-orange-600", headline: "Modern Lightning-Fast ESM HMR Bundling Setup", desc: "Compile client builds optimize trees shaking unnecessary elements deploy production bundles globally across static hosting platforms.", topics: ["Rollup Code Chunk Asset Tree Shaking Configurations", "Vite Config Alias Modules Multi Routing Configs", "GitHub Actions Build Compression Asset Check Pipelines", "Vercel Edge Distribution Static Hydration Provisionings"] }
];

export const ReactFullStackMasterHub = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("vdom");
  const overallContainerRef = useRef(null);

  // DYNAMIC SCROLL-LINKED BLUR MATRIX CONTROL
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(60px)", "blur(40px)", "blur(10px)"]);
  const adaptiveScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (

    <PageLayout>
    <div ref={overallContainerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-sky-500 selection:text-white">
      
      {/* 🌪️ INTERACTIVE SCROLL-LINKED BLUR AMBIENT ATMOSPHERE MESH */}
      <motion.div style={{ filter: scrollLinkBlur }} className="absolute inset-0 pointer-events-none z-0 transition-all duration-300">
        <div className="absolute top-[-5%] left-[-8%] w-[650px] h-[650px] bg-sky-100/40 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-indigo-100/20 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-purple-100/30 rounded-full mix-blend-multiply blur-2xl" />
      </motion.div>

      {/* TOP HERO ANCHOR BLOCK */}
      <motion.section style={{ scale: adaptiveScale }} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="max-w-4xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/10 text-sky-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-sky-500/30 backdrop-blur-xs">
              <Cpu size={14} className="text-sky-400" /> Enterprise UI Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              React.js Advanced <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                14 Architecture Pillars
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              High performance client side view layers, virtual tree optimizations, complex deterministic store synchronization loops, code splitting automation matrum bundle deployments layout master maps.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar">
            {react14Concepts.map((item) => {
              const CurrentIcon = item.icon;
              const activeFlag = activeConceptId === item.id;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 5 }}
                  onClick={() => setActiveConceptId(item.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between shadow-xs ${
                    activeFlag 
                      ? 'bg-white border-slate-900 ring-1 ring-slate-900' 
                      : 'bg-white/70 border-slate-200/50 backdrop-blur-xs hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-lg ${item.bg} ${item.text}`}>
                      <CurrentIcon size={20} />
                    </div>
                    <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">{item.label}</span>
                  </div>
                  <ArrowUpRight size={16} className={`${activeFlag ? 'text-slate-900' : 'text-slate-300'} transition-colors`} />
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT DETAILED BLUEPRINT SHOWCASE DISPLAY WINDOW */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xs relative min-h-[520px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {react14Concepts.map((concept) => concept.id === activeConceptId && (
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
                        React Core System Target Specs
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
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Engineering Deep Dive Spec:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {concept.topics.map((topic, index) => (
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
                    <button className="flex-1 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                      <PlayCircle size={16} /> Mount Sandbox Environment
                    </button>
                    <button className="px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100/70 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                      <FileText size={16} className="text-slate-400" /> Component Core Blueprint
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