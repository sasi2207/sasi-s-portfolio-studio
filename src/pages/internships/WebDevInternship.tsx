import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Users, Rocket, Target, Calendar, Award, Terminal, 
  Layers, CheckCircle2, PlayCircle, FileText, ArrowUpRight, ChevronRight,Radio,Cpu,MessageSquare,HardDrive,
  Globe, ShieldCheck, Activity, Database, Box, Sliders
} from 'lucide-react';
import { Layout as PageLayout } from "@/components/layout/Layout";

const webDev15Concepts = [
  { id: "html5-dom", label: "1. HTML5 & Semantic DOM", icon: Code2, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Semantic Layout Document Object Models", desc: "Master structuring accessible layout trees configuring native node attributes tracking cross-browser document optimizations patterns.", perks: ["Semantic SEO Accessibility Audits", "DOM Tree Node Traversal Mechanics", "Shadow DOM Core Context Isolations", "Dynamic Event Bubbling Capturing Chains"] },
  { id: "tailwind", label: "2. Tailwind CSS Utilities", icon: Sliders, color: "from-sky-400 to-blue-500", bgLight: "bg-sky-50/80", textLight: "text-sky-500", headline: "Fluid Responsive Modern Utility Grids", desc: "Build industry-standard component design layouts applying utility compiler constraints and hardware accelerated dynamic style classes.", perks: ["Flexbox / CSS Grid Layout Engines", "Custom Theme Configuration Multi Overrides", "Arbitrary Variants Interceptor Style Tweaks", "Dynamic Hardware Transform Fluid Layout Changes"] },
  { id: "js-concurrency", label: "3. JavaScript Event Loops", icon: Terminal, color: "from-yellow-500 to-amber-600", bgLight: "bg-yellow-50/80", textLight: "text-amber-600", headline: "Non-Blocking Async Event Runtime Matrix", desc: "Deep dive into microtask queues scheduling executions, call stack bounds management and asynchronous event loops parsing pipelines.", perks: ["Promises Chaining Execution Microtask Priority", "Async / Await Non-Blocking Event Intercepts", "Clousures Scope Memory Heap Garbage Collections", "Web Workers Multithread Background Context Runs"] },
  { id: "vdom", label: "4. React Fiber Reconciliation", icon: Cpu, color: "from-blue-500 to-indigo-600", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "Virtual DOM Batching Diffing Algorithms", desc: "Understand component reference updates allocations mapping memory tree nodes leveraging heuristic diffing mechanics execution loops.", perks: ["Fiber Tree Lifecycle Node State Mutations", "Automatic Render Batch Enqueues Scheduling", "Key Identifiers Stability Layout Computations", "Concurrent Rendering Priority Queue Transitions"] },
  { id: "state", label: "5. State Topology Context", icon: Box, color: "from-purple-500 to-fuchsia-600", bgLight: "bg-purple-50/80", textLight: "text-purple-600", headline: "Unidirectional State Broadcast Distribution", desc: "Manage multi-tier corporate state distribution paths cleanly bypassing deep prop tree drillings using global state providers architectures.", perks: ["Context Splitting Performance Isolation Fixes", "Redux Toolkit Slices Immutable Action Maps", "Immer State Proxy Automated Mutator Mutates", "State Batch Enqueues Pipeline Validations Logs"] },
  { id: "app-router", label: "6. Next.js App Routing", icon: Globe, color: "from-slate-800 to-slate-900", bgLight: "bg-slate-100/80", textLight: "text-slate-800", headline: "File-Based Nested Shared Layout Trees", desc: "Architect modern Next application route parameters tracking folder segments layouts nested display segments routes nodes mapping frameworks.", perks: ["Dynamic Slugs Route Token Parameters Parsing", "Parallel & Intercepting Advanced Routing Schemas", "Shared Persistent Root Layout Segment Boundaries", "Route Middleware Pipeline Request Token Decodes"] },
  { id: "hydration", label: "7. Hydration Strategies (SSR)", icon: Layers, color: "from-emerald-500 to-teal-600", bgLight: "bg-emerald-50/80", textLight: "text-emerald-600", headline: "Server Pre-rendering Client Side Hydrations", desc: "Optimize metrics loading curves interleaving Static Site Generation (SSG) alongside Incremental Web Data Revalidation loops pipelines.", perks: ["Dynamic Runtime Server Side Rendering (SSR)", "Incremental Static Revalidation (ISR) Trigger Paths", "SEO Document Header Metadata Automations Injector", "Streaming Suspense Content Chunk Pipeline Transfers"] },
  { id: "server-actions", label: "8. Next.js Server Actions", icon: Target, color: "from-rose-500 to-red-600", bgLight: "bg-rose-50/80", textLight: "text-rose-600", headline: "RPC Protocol Backend Data Mutations Interceptor", desc: "Eliminate API boilerplate configurations calling secure database functions straight inside forms elements via declarative boundary directives.", perks: ["useActionState Dynamic Form Feedback Tracking", "Optimistic UI Updates State Mirror Computations", "Server Side Security Access Guard Injection Blocks", "Automated Path Revalidation Tags Revalidation Hooks"] },
  { id: "tanstack-query", label: "9. TanStack Async Caching", icon: Radio, color: "from-amber-500 to-orange-600", bgLight: "bg-amber-50/80", textLight: "text-amber-600", headline: "Asynchronous Server State Cache Management", desc: "Synchronize remote data parameters maps utilizing automated cache invalidations staled entry tracking points dynamically.", perks: ["StaleTime vs CacheTime Eviction Expiration Lifecycles", "Automated Background Focus Fetch Poll Triggers", "Mutation Invalidation Global Query Key Re-triggers", "Infinite Scroll Pagination Buffer Data Accumulators"] },
  { id: "prisma", label: "10. Prisma ORM Data Modeling", icon: Database, color: "from-indigo-600 to-violet-700", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "Type-Safe Relational Schema Persistence Pipelines", desc: "Define structural application schemas databases entities tables relationships auto compiling migrations version histories control setups.", perks: ["Prisma Schema Declarative Relation Maps Modeling", "Automated DB Migration Script Logs Generation", "Type-Safe Auto Compiled Query Client Extensions", "Connection Pooling Saturation Latency Optimizations Tuning"] },
  { id: "api-design", label: "11. REST vs GraphQL Systems", icon: MessageSquare, color: "from-pink-500 to-rose-600", bgLight: "bg-pink-50/80", textLight: "text-pink-600", headline: "Dynamic Resource Endpoint Contracts Exchanges", desc: "Architect application data route networks comparing payload payload efficiency filters avoiding overfetching resource data pools blocks.", perks: ["Content Negotiation Request Status Code Structuring", "GraphQL Schema Resolvers Data Loader N+1 Aggregators", "Zod JSON Body Serialization Guard Protections", "HATEOAS Hypermedia Driven Discoverable API Setups"] },
  { id: "auth", label: "12. NextAuth Federated Security", icon: ShieldCheck, color: "from-teal-600 to-green-700", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "Asymmetric Cryptographic Session Interceptors", desc: "Protect client route nodes decode dynamic authorization cookies tokens maintaining secure decentral pass validation frameworks profiles.", perks: ["OAuth2 Federated Identity Provider Handshake Integrations", "JWT Callback Claims Payload Context Extractions", "Database Session Adapters Storage Synchronization Schemes", "CSRF State Anti-Forgery Verification Guard Token Verification"] },
  { id: "perf-splitting", label: "13. Code Splitting & Chunking", icon: Activity, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50/80", textLight: "text-cyan-600", headline: "Dynamic Incremental Asset Bundle Loading Optimization", desc: "Optimize critical page performance metrics splitting compilation assets dynamically using deferred chunk imports setups parameters.", perks: ["next/dynamic Deferred Component Lazy Load Wraps", "Suspense View Load Threshold Skeleton Fallbacks", "Bundle Analyzer Webpack / Turbopack Resource Audits", "Core Web Vitals LCP / INP Metrics Optimizations Profiles"] },
  { id: "docker", label: "14. Containerized Environments", icon: HardDrive, color: "from-blue-600 to-sky-700", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "Immutable Standard Sandbox Application Enclosures", desc: "Package enterprise javascript web artifacts inside isolated virtualization container scopes eliminating environment differences completely.", perks: ["Multi-Stage Optimized Tiny Asset Size Dockerfiles", "Layer Caching Strategies Fast Pipeline Rebuilds", "Docker Compose Multi Network Environment Orchestrations", "Host Directory Data Mount Volumes Persistence Links"] },
  { id: "edge", label: "15. Edge Routing Distribution", icon: Globe, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Low Latency Global Anycast Serving Frameworks", desc: "Deploy computing assets functions straight onto distributed geographic data edge clusters minimizing browser frame loading speeds paths.", perks: ["Vercel Edge Runtime Server Middleware Conversions", "Cloudflare Workers Geo Proximity Logic Routes Intercept", "Global Cache Headers Invalidation Content Deliveries", "Edge Data Replica Read Session Optimizations Configurations"] }
];

export const WebDevInternship = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("html5-dom");
  const overallContainerRef = useRef(null);

  // DYNAMIC SCROLL-LINKED BLUR MATRIX TRANSFORMATIONS ENGINE CONTROL
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(65px)", "blur(40px)", "blur(12px)"]);
  const adaptiveScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <PageLayout>
      <div ref={overallContainerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-indigo-600 selection:text-white">
        
        {/* 🌪️ INTERACTIVE SCROLL-LINKED BLUR AMBIENT ATMOSPHERE MESH */}
        <motion.div style={{ filter: scrollLinkBlur }} className="absolute inset-0 pointer-events-none z-0 transition-all duration-300">
          <div className="absolute top-[-5%] left-[-8%] w-[650px] h-[650px] bg-indigo-100/40 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-sky-100/20 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-orange-100/30 rounded-full mix-blend-multiply blur-2xl" />
        </motion.div>

        {/* TOP HERO ANCHOR BLOCK */}
        <motion.section style={{ scale: adaptiveScale }} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
            
            <div className="max-w-4xl space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-indigo-500/30 backdrop-blur-xs">
                <Rocket size={14} className="text-indigo-400" /> Web Engineering Academy Track
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Web Development <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-orange-400">
                  15 Industrial Core Syllabus
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
                Semantic layout structures, virtual reconciliation loops, dynamic server mutations, server state async caches, data schemas mappings matrum containerized production deployment blueprints tracker panels.
              </p>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 text-sm">
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Duration</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Calendar size={14} className="text-indigo-400" /> 12 Weeks Tracks</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Program Mode</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Users size={14} className="text-emerald-400" /> Remote Cohorts</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scope</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Target size={14} className="text-sky-400" /> Production Scale</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outcome</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Award size={14} className="text-orange-400" /> Industry Specs</p></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN (SCROLLABLE) */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[760px] overflow-y-auto pr-2 custom-scrollbar">
              {webDev15Concepts.map((item) => {
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
                {webDev15Concepts.map((concept) => concept.id === activeConceptId && (
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