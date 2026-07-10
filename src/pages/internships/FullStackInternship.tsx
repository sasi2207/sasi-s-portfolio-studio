import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Users, Rocket, Target, Calendar,Server, Award, Terminal, Layers, CheckCircle2, 
  PlayCircle, FileText, ArrowUpRight, Globe, ShieldCheck, Activity, Database, Box, Sliders, Cpu, HardDrive, MessageSquare, Radio
} from 'lucide-react';
import { Layout as PageLayout } from "@/components/layout/Layout";

const fullStack25Concepts = [
  { id: "html5-aria", label: "1. HTML5 & ARIA Specs", icon: Code2, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Semantic Elements & Accessibility Trees", desc: "Build standard rich semantic data elements constructing compliant accessible trees mapping reader attributes.", perks: ["Semantic SEO Document Audits", "ARIA Landmark Access Bindings", "Keyboard Accessible Traversal Tests", "Native Browser Tag Resource Allocations"] },
  { id: "css-grids", label: "2. Modern CSS Grid Systems", icon: Sliders, color: "from-amber-500 to-orange-600", bgLight: "bg-amber-50/80", textLight: "text-amber-600", headline: "Fluid Responsive Multidimensional Layouts", desc: "Form structural fractional grids system parameters aligning component blocks avoiding core cumulative layout shifts dynamically.", perks: ["Fractional Unit Multi Axis Grids Matching", "Flexbox Cross Axis Alignment Modulators", "Container Query Proximity Responsive Breaks", "Hardware Accelerated Media Transitions"] },
  { id: "tailwind-tokens", label: "3. Tailwind Theme Design", icon: Box, color: "from-sky-400 to-blue-500", bgLight: "bg-sky-50/80", textLight: "text-sky-500", headline: "Rigid Utility Theme Constraint Tokens", desc: "Enforce uniform enterprise configuration properties classes extensions preventing arbitrary styling drifts across components views.", perks: ["Tailwind Config Plugin Variant Additions", "Purge CSS Static Bundle Size Optimizations", "Dark Mode Class Toggles Interceptor Schemes", "Arbitrary Brackets Compilers Restrict Rules"] },
  { id: "js-runtime", label: "4. JS Concurrency Runtime", icon: Terminal, color: "from-yellow-500 to-amber-600", bgLight: "bg-yellow-50/80", textLight: "text-amber-600", headline: "Microtask Queue Async Event Loop Engine", desc: "Deconstruct script thread processing models tracking heap garbage collector behaviors macro task scheduler allocations rules.", perks: ["Promises Chaining Execution Microtask Priority", "Async Call Stack Bounds Heap Overrun Audits", "Closure Lexical Scope Memory Address Links", "Web Workers Background Execution Context Threads"] },
  { id: "dom-events", label: "5. DOM Native Bubbling", icon: Layers, color: "from-emerald-500 to-teal-600", bgLight: "bg-emerald-50/80", textLight: "text-emerald-600", headline: "Dynamic Event Traversal Phase Capture Chain", desc: "Configure high frequency event delegation listeners onto parent document nodes optimization execution thresholds path scopes.", perks: ["Event Bubbling Capturing Phase Controls", "StopPropagation Boundary Execution Break Links", "Dynamic Element Target References Extraction", "Passive Listener Scroll Performance Boosters"] },
  { id: "fiber-reconciliation", label: "6. Fiber Virtual DOM Math", icon: Cpu, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50/80", textLight: "text-cyan-600", headline: "Virtual Reference Lifecycle Diffing Schedulers", desc: "Trace memory tree modification tracking metrics parsing element key assignments leveraging async concurrent prioritization slices.", perks: ["Heuristic Tree Mutation Calculation Algorithms", "Automatic Render State Update Batch Enqueues", "Component Node Key Stability Position Locks", "Concurrent Suspense Transition Priority Queues"] },
  { id: "state-hooks", label: "7. React State Closures", icon: Box, color: "from-indigo-500 to-purple-600", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "Functional Component Rendering State Snapshot Hooks", desc: "Isolate complex local state management logic variables inside memory snapshots preserving accurate state mutations arrays cleanly.", perks: ["Functional Closure Value Isolation Mechanics", "Custom Hook Business Extraction Components Layers", "Lazy Initial State Value Function Evaluation", "State Updater Mutation Pipeline Enqueue Validations"] },
  { id: "app-router", label: "8. Next.js Routing Ingress", icon: Globe, color: "from-slate-800 to-slate-900", bgLight: "bg-slate-100/80", textLight: "text-slate-800", headline: "File System Folder Segment Layout Hierarchies", desc: "Architect application page routes nested structural layout files mapping tokenized path configurations query variables dynamically routes.", perks: ["Dynamic Slugs Segment Path Data Extractions", "Parallel Async View Influx Intercept Systems", "Root Shared Persistent Layout State Error Segments", "Edge Middleware Token Request Parsing Interceptors"] },
  { id: "hydration-ssr", label: "9. Hydration Rendering SSR", icon: HardDrive, color: "from-purple-600 to-fuchsia-700", bgLight: "bg-purple-50/80", textLight: "text-purple-600", headline: "Server Pre-compiled HTML Hybrid Data Streams", desc: "Accelerate initialization page delivery indices mixing Static Generation models together with continuous dynamic server generation lines.", perks: ["Server-Side Rendering (SSR) Live Document Generates", "Incremental Static Revalidation (ISR) Background Refetches", "SEO Metadata Automated Injections Header Blocks", "Streaming Suspense Chunk Delivery Components Layers"] },
  { id: "server-actions", label: "10. RPC Server Actions", icon: Target, color: "from-rose-500 to-red-600", bgLight: "bg-rose-50/80", textLight: "text-rose-600", headline: "Direct Form Component Database Mutation Pipes", desc: "Execute protected server database functions straight inside user layout forms eliminating client fetch API endpoint boilerplates.", perks: ["useActionState Server Interaction Form Status Hooks", "Optimistic Client UI Injections State Mirrors", "Server Directive Scope Access Protection Defenses", "Path Tag Revalidation Cache Refresh Invalidation Hooks"] },
  { id: "tanstack-query", label: "11. TanStack State Async Cache", icon: Radio, color: "from-indigo-600 to-violet-700", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "Remote Server Status Memory Synchronizations", desc: "Configure high availability asynchronous backend state cache tables applying dynamic refresh invalidations polling timetables maps.", perks: ["StaleTime vs CacheTime Threshold Eviction Controls", "Window Focus Re-fetch Trigger Synchronizations Loops", "Mutation Invalidation Mutation Target Query Key Refetches", "Infinite Scroll Data Accumulator Array Compilers"] },
  { id: "zod-validation", label: "12. Zod Runtime Type Guards", icon: ShieldCheck, color: "from-teal-600 to-emerald-700", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "Strict JSON Payload Data Parsing Security Layers", desc: "Erect strict data parsing gates at API boundary layers checking client input anomalies prior to executing core server logic vectors.", perks: ["SafeParse Validation Error Schema Extractions", "TypeScript Static Interface Automatic Compiler Infers", "Custom Regex Content String Format Interceptors", "Nested Object Schema Array Constraint Enforcements"] },
  { id: "postgres-db", label: "13. Relational DB Sharding", icon: Database, color: "from-blue-600 to-indigo-700", bgLight: "bg-blue-50/80", textLight: "text-indigo-600", headline: "Relational ACID Transaction Architecture Models", desc: "Design high performance data schema index configurations primary key normalization boundaries optimizing storage layout parameters.", perks: ["B-Tree Indexing Optimization Scanning Threshold Gains", "Foreign Key Referential Integrity Normalization Layouts", "Distributed Database Sharding Consistent Hash Routing", "Transaction Isolation Levels Read Stability Controls"] },
  { id: "prisma-orm", label: "14. Prisma Schema Engines", icon: Database, color: "from-violet-600 to-purple-700", bgLight: "bg-violet-50/80", textLight: "text-violet-600", headline: "Declarative Type Safe DB Migration Automation", desc: "Define structural entities relations tables layout schemes compiling automated database step version histories script track checkpoints.", perks: ["Prisma Schema DSL One to Many Mapping Profiles", "Automated SQL Migration Script Delta Log Generators", "Type-Safe Client Extension Query Generator Compilers", "Connection Pooling Timeout Allocation Metrics Optimizers"] },
  { id: "mongodb-nosql", label: "15. NoSQL Aggregations", icon: HardDrive, color: "from-emerald-600 to-green-700", bgLight: "bg-emerald-50/80", textLight: "text-emerald-600", headline: "Schemaless BSON Document Storage Pipelines", desc: "Construct flexible document search indices mapping complex multi stage matching grouping aggregations arrays querying unstructured data flows.", perks: ["Multi Stage Aggregate Pipeline Match Group Sorting", "Compound Index Search Execution Speed Optimizations", "PyMongo / Mongoose Object Layer Integration Blocks", "Replica Set Data High Availability Synchronization Loops"] },
  { id: "redis-cache", label: "16. Redis Low Latency Cache", icon: Sliders, color: "from-red-500 to-rose-600", bgLight: "bg-red-50/80", textLight: "text-red-600", headline: "Transient Memory Core Key Value Cache Barriers", desc: "Bypass disk storage bottlenecks caching frequent database query snapshots directly inside blazing fast in-memory ram tables buffers.", perks: ["Cache-Aside Cache Persistence Logic System Structures", "Automated Expiration TTL Session Eviction Schedules", "Redis Cluster Sentinels Data Replication Guard Configs", "Distributed Mutex Mutex Access Lock Concurrency Guards"] },
  { id: "rest-api", label: "17. RESTful API Architectural Design", icon: MessageSquare, color: "from-pink-500 to-rose-600", bgLight: "bg-pink-50/80", textLight: "text-pink-600", headline: "Resource Oriented Endpoint Controller Contracts", desc: "Structure predictable client server exchange networks defining consistent return statuses standardizations error structure models.", perks: ["Content Negotiation Request Media Types Classifications", "Standard JSON Error Response Schema Structuring Protocols", "Idempotent HTTP Method Mutation Operational Execution Safeguards", "HATEOAS Discoverable Action Link Mapping Architectures"] },
  { id: "graphql-engine", label: "18. GraphQL Schema Resolvers", icon: Layers, color: "from-pink-600 to-fuchsia-700", bgLight: "bg-pink-50/80", textLight: "text-fuchsia-600", headline: "Single Endpoint Target Payload Type Resolvers", desc: "Eradicate data overfetching underfetching queries compiling graph schema engines coupled alongside smart entity cache systems models.", perks: ["GraphQL Type Definition Abstract Syntax Mapping Trees", "DataLoader Batching Consolidation N+1 Query Mitigation", "Query Mutation Query Execution Segment Isolation Passes", "GraphiQL Explorer Interactive Endpoint Testing Portals"] },
  { id: "auth-jwt", label: "19. NextAuth Token Identity", icon: ShieldCheck, color: "from-teal-600 to-emerald-700", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "Asymmetric Public Cryptographic Session Interceptors", desc: "Secure multi platform router access validations decrypting token keys credentials claims within edge proxy request pipelines streams.", perks: ["Federated Identity Provider OAuth2 Handshake Bridges", "JWT Claims Callback Payload Context Ingress Extractions", "Database Adapter Session Management Table Sync Hooks", "CSRF Protection Interceptor Token Verification Firewalls"] },
  { id: "async-queues", label: "20. Async Tasks Workers", icon: Radio, color: "from-indigo-600 to-violet-700", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "Decoupled Event Message Broker Workers Clusters", desc: "Offload heavy video transcodings analytical data dumps operations completely onto background execution task processes engines pools.", perks: ["BullMQ / Celery Redis Event Broker Integration Links", "Idempotent Event Processing Consumer State Idempotency Rules", "Dead Letter Queue (DLQ) Crash Exception Redirect Maps", "Backpressure Traffic Volatility Threshold Buffering Limits"] },
  { id: "websockets", label: "21. WebSockets Stream Core", icon: Activity, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50/80", textLight: "text-cyan-600", headline: "Bi-directional Persistent TCP Connection Pipes", desc: "Establish continuous low latency live data socket stream layers broadcast signaling update ticks across live active client ports.", perks: ["HTTP Connection Upgrade Handshake Negotiation Pipelines", "Socket.io Room Multiplexing Event Isolation Boundaries", "Heartbeat Ping Pong Connection Lifespan Vital Checks", "Distributed Socket Scaling Redis Adapter State Syncs"] },
  { id: "cicd-automation", label: "22. Continuous CI/CD Pipelines", icon: Terminal, color: "from-blue-600 to-sky-700", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "Automated Static Tests Build Package Streams", desc: "Trigger automated testing runners security analyzers compression compilers uploading static assets images directly to cloud hosting tracks.", perks: ["GitHub Actions Declarative Pipeline Step Configuration Monitors", "Static Application Security Testing (SAST) Vulnerability Sweeps", "Blue-Green Zero Downtime Route Target Interchanges", "Canary Deployment Progressive Traffic Shift Trackers"] },
  { id: "bundle-splitting", label: "23. Lazy Component Loading", icon: Activity, color: "from-rose-500 to-orange-600", bgLight: "bg-rose-50/80", textLight: "text-rose-600", headline: "Incremental Chunk Bundle Size Minimization", desc: "Optimize front performance parameters loading heavy interface windows dynamically matching user view intersection trigger points.", perks: ["next/dynamic Code Splitting Chunk Segment Allocations", "Suspense View Load Threshold Component Wireframe Fallbacks", "Webpack / Turbopack Dependency Mapping Footprint Diagnoses", "Interaction to Next Paint (INP) Interaction Lag Optimization"] },
  { id: "docker-env", label: "24. Microservice Containers", icon: Server, color: "from-slate-700 to-slate-900", bgLight: "bg-slate-100/80", textLight: "text-slate-700", headline: "Immutable Standard Sandbox Application Virtualizations", desc: "Wrap software builds configurations dependencies layers into standalone runtime system packages standardizing output environments globally schemas.", perks: ["Multi-Stage Smaller Build Footprint Target Production Dockerfiles", "Image Layer Compilation Cache Run Speed Optimization Loops", "Docker Compose Virtual Sub-network Inter-container Interchanges", "Persistent Directory Data Storage Volume Mapping Attachments"] },
  { id: "edge-workers", label: "25. Edge Functions Serving", icon: Globe, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Low Latency Global Anycast Compute Points", desc: "Deploy critical route interception routines compute paths functions directly onto localized regional geo data node endpoints routers grids.", perks: ["Vercel Edge Runtime Server Middleware Intercept Configurations", "Cloudflare Workers Edge Routing Logic Intercept Execution", "Global Cache Headers Invalidation Content Deliveries Networks", "Edge Replica DB Data Source Read Location Optimizations Loops"] }
];

export const FullStack = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("html5-aria");
  const overallContainerRef = useRef(null);

  // DYNAMIC SCROLL-LINKED BLUR MATRIX TRANSFORMATIONS CONTROLLER ENGINE
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
                <Rocket size={14} className="text-indigo-400" /> Full Stack Software Academy Track
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Full Stack Web <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-orange-400">
                  25 Industrial Core Pillars
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
                Semantic layout grids, virtual fiber diffing reconciliations, server mutations, transaction sharded structures, transient caching barriers, bi-directional sockets streams matrum containerized edge deployments maps panels tracking loops.
              </p>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 text-sm">
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Duration</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Calendar size={14} className="text-indigo-400" /> 16 Weeks Tracks</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Program Mode</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Users size={14} className="text-emerald-400" /> Remote Cohorts</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scope</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Target size={14} className="text-sky-400" /> Production Scale</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outcome</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Award size={14} className="text-orange-400" /> Enterprise Specs</p></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN (SCROLLABLE) */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[760px] overflow-y-auto pr-2 custom-scrollbar">
              {fullStack25Concepts.map((item) => {
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
                {fullStack25Concepts.map((concept) => concept.id === activeConceptId && (
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