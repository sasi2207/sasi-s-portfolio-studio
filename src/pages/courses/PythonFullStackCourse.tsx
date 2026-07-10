

import { Layout as PageLayout } from "@/components/layout/Layout";
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Cpu, Layers, Globe, Server, Terminal, ShieldCheck, Activity, Radio, 
  MessageSquare, HardDrive, Database, Box, Sliders, CheckCircle2, PlayCircle, FileText, ArrowUpRight
} from 'lucide-react';

const python14Concepts = [
  { id: "asyncio", label: "1. Advanced Asyncio Engine", icon: Cpu, color: "from-yellow-500 to-amber-600", bg: "bg-yellow-50/80", text: "text-amber-600", headline: "Asynchronous Event Loop Co-routines", desc: "Master Python's non-blocking I/O event loops model, task concurrency architectures, and execution contexts avoiding thread performance blocks.", topics: ["Event Loop Context Implementations", "Coroutines async/await Lifecycle Pools", "Task Gathering & Future Allocation Maps", "Non-Blocking Network Socket Operations"] },
  { id: "fastapi", label: "2. FastAPI ASGI Architecture", icon: Terminal, color: "from-teal-500 to-emerald-600", bg: "bg-teal-50/80", text: "text-teal-600", headline: "High-Performance Type-Hinted Async APIs", desc: "Build ultra-fast API endpoints utilizing raw Starlette performance maps and automatic Pydantic data deserialization validations frameworks.", topics: ["Uvicorn / Hypercorn ASGI Serving Loops", "Pydantic v2 Schema Constraints Validation", "Dependency Injection Context Providers", "Automated OpenAPI Documentation Trees Generation"] },
  { id: "django", label: "3. Django Enterprise MVC", icon: Server, color: "from-emerald-700 to-green-900", bg: "bg-emerald-50/80", text: "text-emerald-700", headline: "Batteries-Included Monolithic Core Models", desc: "Architect large secure data applications leveraging automated ORM middleware routing layout engines, admin layers control maps.", topics: ["WSGI Server Processing Pipeline Lifecycles", "Django Custom Middleware Request Chains", "Signals Interceptors Decoupled Application Triggers", "Class-Based View (CBV) Generic Overrides"] },
  { id: "sqlalchemy", label: "4. SQLAlchemy Core & ORM", icon: Database, color: "from-blue-500 to-indigo-600", bg: "bg-blue-50/80", text: "text-blue-600", headline: "Object-Relational Data Mapping Engines", desc: "Map object memory structures to SQL relations utilizing advanced unit-of-work state patterns and connection pool limits configurations.", topics: ["Data Mapper vs Active Record Topologies", "Session Transaction State Isolation Levels", "Lazy vs Eager Joins N+1 Query Defenses", "Connection Pooling Saturation Mechanics Tuning"] },
  { id: "celery", label: "5. Celery Distributed Workers", icon: Radio, color: "from-green-500 to-teal-600", bg: "bg-green-50/80", text: "text-green-600", headline: "Asynchronous Task Processing Pipelines Network", desc: "Decouple time-heavy processing loads, transactional emails, or media conversion scripts onto distributed message queue brokers frames.", topics: ["Redis / RabbitMQ Message Broker Brokers Binding", "Task Serialization JSON Contract Handlers", "Idempotent Worker Task Execution Guarantees", "Celery Beat Periodic Automation Event Triggers"] },
  { id: "security", label: "6. Python JWT Auth & OAuth2", icon: ShieldCheck, color: "from-slate-700 to-slate-900", bg: "bg-slate-100/80", text: "text-slate-700", headline: "Cryptographic Access Tokens Verification Barriers", desc: "Deploy secure password hashing mechanisms (Bcrypt/Argon2) and intercept route requests using signed authorization tokens.", topics: ["Passlib Cryptographic Hashing Configurations Modules", "JWT State Verification Strategy Decodes", "OAuth2 Scopes Authorization Rights Delegations", "CORS Guard Protections & Rate Limit Enforcements"] },
  { id: "pytest", label: "7. PyTest & Mocking Engines", icon: Box, color: "from-red-500 to-orange-600", bg: "bg-red-50/80", text: "text-red-600", headline: "Strict Deterministic Code Testing Infrastructures", desc: "Construct parameterized functional assertions and manage isolated database test states utilizing advanced test fixture setups.", topics: ["Reusable Yield Fixture Dependency Scopes", "Monkeypatch Client Server Interaction Mocking", "Async Testing Handler Endpoint Loop Simulators", "Coverage Metrics Performance Profile Audits"] },
  { id: "pandas", label: "8. Pandas Data Wrangling", icon: Layers, color: "from-indigo-600 to-purple-700", bg: "bg-indigo-50/80", text: "text-indigo-600", headline: "High-Performance Structural Vector Data Frames", desc: "Ingest, clean and morph multi-million record tabular datasets arrays efficiently using optimized C-backed in-memory computation matrices.", topics: ["DataFrame Vectorized Operations Vectorizations", "Missing Value Imputation Strategic Transformations", "Multi-Index Aggregations & Pivot Groupings Loops", "Memory Optimization Memory Mapping Large Files Loads"] },
  { id: "numpy", label: "9. NumPy Multi-Dim Arrays", icon: Sliders, color: "from-sky-500 to-blue-600", bg: "bg-sky-50/80", text: "text-sky-600", headline: "GPU-Ready Homogeneous Numerical Tensor Grids", desc: "Execute complex mathematical analytics algorithms over dense matrix configurations processing high-dimensional data fields.", topics: ["Contiguous Memory Array Allocation Blocks", "Broadcasting Vector Layout Shapes Normalization", "Linear Algebra Matrix Multiplications Solvers", "C-API Extensions Vector Processing Accelerations"] },
  { id: "docker", label: "10. Python Container Optimizations", icon: HardDrive, color: "from-blue-400 to-sky-600", bg: "bg-blue-50/80", text: "text-blue-500", headline: "Lightweight Isolated Application Deployment Bundles", desc: "Package enterprise python applications inside tiny multi-stage virtual system environments eliminating environment layer differences.", topics: ["Alpine / Slim Base Distroless Container Selections", "Virtualenv Isolation Inside Containers Systems", "Pip Cache Multi-Stage Layering Optimization Runs", "Docker-Compose Microservice Network Bridge Definitions"] },
  { id: "logging", label: "11. Loguru & Monitoring Telemetry", icon: Activity, color: "from-fuchsia-600 to-pink-700", bg: "bg-fuchsia-50/80", text: "text-fuchsia-600", headline: "Structured JSON Application Logging Telemetry", desc: "Integrate continuous logging streams and send processing statistics curves straight to data telemetry aggregation analytical hubs.", topics: ["Asynchronous Thread Safe Non-Blocking Logging Filters", "Log Rotation Lifecycle File Management Policies", "Prometheus Client Metrics Collection Instrumentation", "Sentry Interceptor Central Crash Tracking Hooks"] },
  { id: "poetry", label: "12. Dependency Lock Operations", icon: Box, color: "from-purple-500 to-indigo-600", bg: "bg-purple-50/80", text: "text-purple-600", headline: "Deterministic Package Version Control Factories", desc: "Eradicate continuous library version mismatches completely configuring strict pyproject.toml locks mapping build systems rules.", topics: ["Poetry Virtual Environment Lifecycle Resolution Handles", "Lockfile Deterministic Transitive Tree Generation", "Custom Private Artifactory Repository Configurations", "Wheel Distribution Asset Compilation Packaging"] },
  { id: "graphql", label: "13. Strawberry GraphQL Engine", icon: MessageSquare, color: "from-pink-500 to-rose-600", bg: "bg-pink-50/80", text: "text-pink-600", headline: "Type-Safe Single Endpoint Data Query Layer", desc: "Expose dynamic backend system resources mapping declarative query nodes resolving multiple cross-entity requests efficiently.", topics: ["Type-Hinted Python Schema Definition Resolvers", "Async Async DataLoader N+1 Query Aggregation Fixes", "Custom Mutation Payload Inputs Executions Configurations", "Subscription Event Streaming Channel Implementations"] },
  { id: "deploy", label: "14. Gunicorn & AWS Cloud Deploy", icon: Globe, color: "from-orange-500 to-red-600", bg: "bg-orange-50/80", text: "text-orange-600", headline: "Production Load Balanced Process Orchestrations", desc: "Deploy application images inside production setups executing auto-scaling process managers routing incoming request fields safely.", topics: ["Pre-Fork Master-Worker Performance Process Tuning", "Reverse Proxy Nginx Event Load Balancer Hooks", "AWS ECS Fargate Task Container Allocations", "CI/CD Deployment Automation Infrastructure Pipelines"] }
];

export const PythonFullStackMasterHub = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("asyncio");
  const overallContainerRef = useRef(null);

  // SCROLL-LINKED BLUR MATRIX CONTROL
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(60px)", "blur(40px)", "blur(10px)"]);
  const adaptiveScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (

    <PageLayout>
    <div ref={overallContainerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-amber-500 selection:text-slate-900">
      
      {/* 🌪️ INTERACTIVE SCROLL-LINKED BLUR AMBIENT ATMOSPHERE MESH */}
      <motion.div style={{ filter: scrollLinkBlur }} className="absolute inset-0 pointer-events-none z-0 transition-all duration-300">
        <div className="absolute top-[-5%] left-[-8%] w-[650px] h-[650px] bg-yellow-100/40 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-emerald-100/20 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full mix-blend-multiply blur-2xl" />
      </motion.div>

      {/* TOP HERO ANCHOR BLOCK */}
      <motion.section style={{ scale: adaptiveScale }} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="max-w-4xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 text-yellow-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-yellow-500/30 backdrop-blur-xs">
              <Server size={14} className="text-yellow-400" /> Enterprise Python Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Python Advanced <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-400">
                14 Architecture Pillars
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              High performance async services, distributed asynchronous computation engines, relational session maps, robust multi dimensional analysis operations matrum bundle cloud deployments master blueprint.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar">
            {python14Concepts.map((item) => {
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
              {python14Concepts.map((concept) => concept.id === activeConceptId && (
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
                      <span className={`px-3 py-1 bg-gradient-to-r ${concept.color} text-slate-900 text-xs font-bold uppercase tracking-widest rounded-md shadow-xs`}>
                        Python Core System Target Specs
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
                      <PlayCircle size={16} /> Sprout Dev Sandbox
                    </button>
                    <button className="px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100/70 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                      <FileText size={16} className="text-slate-400" /> System Infrastructure Spec Map
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