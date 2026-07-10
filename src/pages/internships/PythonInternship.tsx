import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Terminal, Server, Cpu, Database, Radio, ShieldCheck, Box, Sliders,
  Activity, Globe, MessageSquare, HardDrive, Layers, CheckCircle2, PlayCircle, FileText, ArrowUpRight, ChevronRight, Calendar, Users, Target, Award
} from 'lucide-react';
import { Layout as PageLayout } from "@/components/layout/Layout";

const python15Concepts = [
  { id: "core-structures", label: "1. Advanced Data Structures", icon: Cpu, color: "from-yellow-400 to-amber-500", bgLight: "bg-yellow-50/80", textLight: "text-amber-600", headline: "Memory Optimized Structural Data Types", desc: "Master list comprehensions internals, dictionary hash maps, memory tracking tuple generators and collection modules scaling properties.", perks: ["Generator Memory Pointer Yield Optimizations", "Time Complexity O(1) Hash Map Operations", "Collections Module Specialized Containers", "Deep vs Shallow Memory Address Referencing"] },
  { id: "python-oop", label: "2. Enterprise Python OOP", icon: Layers, color: "from-amber-500 to-orange-600", bgLight: "bg-amber-50/80", textLight: "text-amber-600", headline: "Encapsulated Domain Business Models", desc: "Build enterprise class structures utilizing advanced magic dunder methods, solid principles abstractions and meta class creation configurations.", perks: ["Dunder Methods Custom Class Overrides", "Abstract Base Classes (ABC) Contracts Enforcement", "Multiple Inheritance Method Resolution Order (MRO)", "Property Getters Setters Encapsulation Wraps"] },
  { id: "asyncio", label: "3. Asyncio Concurrency Engine", icon: Terminal, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Non-Blocking Asynchronous Event Loops", desc: "Orchestrate high-concurrency microservice I/O threads without processor blockings utilizing native async/await coroutines loops pipelines.", perks: ["Event Loop Context Allocation Lifecycles", "Task Gathering Concurrency Execution Pipelines", "Future Object State Completion Triggers", "Non-Blocking Network Socket Operations Management"] },
  { id: "fastapi", label: "4. FastAPI ASGI Routing", icon: Globe, color: "from-teal-500 to-emerald-600", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "High-Performance Type Hinted Async APIs", desc: "Compile automated OpenAPI document maps utilizing raw Starlette engine performances combined with strict Pydantic parsing validations.", perks: ["Uvicorn Production Serving Thread Configurations", "Pydantic v2 Structural Request Constraints Validations", "Dependency Injection Request Extraction Contexts", "Automated OpenAPI JSON Document Generators"] },
  { id: "django-mvc", icon: Server, label: "5. Django Monolithic MVC", color: "from-emerald-600 to-green-700", bgLight: "bg-emerald-50/80", textLight: "text-emerald-600", headline: "Batteries Included Architecture Pipelines", desc: "Deploy ultra secure admin layers route managers custom middlewares executing request isolation loops enterprise standard configurations.", perks: ["WSGI Pipeline Request Response Processing Chains", "Custom Middleware Event Hook Route Interceptors", "Decoupled Application Signal Automation Triggers", "Generic Class-Based Views (CBV) Method Overrides"] },
  { id: "sqlalchemy", label: "6. SQLAlchemy Data Mapping", icon: Database, color: "from-blue-500 to-indigo-600", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "Object Relational Work Transaction Sessions", desc: "Map memory data instances straight onto transactional enterprise engines abstracting connections pools saturation optimization layers.", perks: ["Data Mapper Pattern Architectural Decoupling Maps", "Unit of Work Session Isolation State Tracks", "N+1 Query Defenses Eager vs Lazy Loading", "Connection Pool Saturation Metric Limit Modulators"] },
  { id: "mongodb", label: "7. NoSQL Document Modeling", icon: HardDrive, color: "from-green-500 to-emerald-600", bgLight: "bg-green-50/80", textLight: "text-green-600", headline: "Unstructured Schemaless BSON Storage Pools", desc: "Ingest flexible data document structures compiling optimized multi stage pipeline queries parsing dynamic schema patterns records.", perks: ["Aggregation Pipeline Multi Stage Matching Arrays", "Compound Multi Key Index Optimizations Layouts", "Mongoose / PyMongo Async Connection Multiplexing", "Horizontal Replica Set Data Sharding Matrices"] },
  { id: "celery-tasks", label: "8. Celery Distributed Workers", icon: Radio, color: "from-purple-500 to-indigo-600", bgLight: "bg-purple-50/80", textLight: "text-purple-600", headline: "Decoupled Asynchronous Background Task Queues", desc: "Offload compute heavy analytics automation scripts media processing lines onto separate distributed message queue architectures.", perks: ["Redis / RabbitMQ Broker Event Integration Locks", "Task Payload JSON Serialization Contract Protocols", "Idempotent Task Consumer Execution Resiliency Rules", "Celery Beat Scheduled Automation Cron Managers"] },
  { id: "redis-cache", label: "9. Redis In-Memory Caching", icon: Sliders, color: "from-red-500 to-rose-600", bgLight: "bg-red-50/80", textLight: "text-rose-600", headline: "Ultra Low Latency Transient Storage Barriers", desc: "Bypass slow disk persistence paths caching frequent operational database elements directly into fast in-memory key-value data structures.", perks: ["Cache-Aside Operational Storage Strategy Integrations", "Automated Expiration TTL Threshold Eviction Management", "Redis Sentinel Cluster Data Replication Controls", "Distributed Memory Locking Concurrency Isolation Guards"] },
  { id: "pandas", label: "10. Pandas Data Wrangling", icon: Layers, color: "from-indigo-600 to-violet-700", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "High Performance Tabular Memory Vector Data", desc: "Clean parse morph complex tabular file sets using C-backed in-memory vector alignments executing heavy analytics operations maps.", perks: ["DataFrame Vectorized Expressions Transformations", "Missing Entity Imputation Data Normalization Cleans", "Multi Index Pivot Table Cluster Transformations Loops", "Large Dataset Chunking Memory Map Data Ingestions"] },
  { id: "numpy-arrays", label: "11. NumPy Numerical Analytics", icon: Cpu, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50/80", textLight: "text-cyan-600", headline: "GPU Ready Contiguous Memory Tensor Blocks", desc: "Execute heavy matrix mathematics structures linear algebra computation sets maps maximizing raw computation performance curves fields.", perks: ["Contiguous Memory Array Matrix Allocations Block", "Vector Broadcasting Shape Matching Conversions Rules", "Optimized Linear Algebra Solver Invocations Routines", "C-API Bound Extension Processing Velocities Hooks"] },
  { id: "pytest", label: "12. PyTest System Asserters", icon: Box, color: "from-rose-500 to-orange-600", bgLight: "bg-rose-50/80", textLight: "text-rose-600", headline: "Strict Automated Function Test Infrastructures", desc: "Construct parameterized script test validations tracking system outputs isolation parameters using decoupled resource generation fixtures.", perks: ["Reusable Yield Mock Fixture Dependency Boundaries Scopes", "Monkeypatch Middleware Server Connection Emulators Maps", "Async Route Call Coroutine Loop Assertions Verification", "Test Coverage Saturation Report Analysis Diagnostics"] },
  { id: "poetry-lock", label: "13. Poetry Package Control", icon: Sliders, color: "from-slate-700 to-slate-900", bgLight: "bg-slate-100/80", textLight: "text-slate-700", headline: "Deterministic Library Dependency Resolution Trees", desc: "Eradicate package dependency breakings mapping pyproject.toml layouts lock profiles generating clean build environments tracks.", perks: ["Virtualenv Sandbox Isolation Automation Environments", "Lockfile Generation Deterministic Transitive Tree Fixes", "Custom Artifact Repository Push Validations Rules", "Wheel Format Compiled Binary Distribution Packaging"] },
  { id: "docker", label: "14. Containerized Microservices", icon: Server, color: "from-blue-600 to-sky-700", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "Immutable Linux Package Virtualizations Containers", desc: "Isolate enterprise backend python environments inside mini operating layer spaces standardizing code delivery parameters globally paths.", perks: ["Multi-Stage Dockerfile Size Compression Strippings", "Layer Cache Execution Fast Image Build Operations", "Docker Network Bridge Microservice Link Formations", "Persistent Volume Mount Folder Sync Implementations"] },
  { id: "deploy-gunicorn", label: "15. Gunicorn Production Server", icon: ShieldCheck, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Load Balanced Pre-Fork Worker Process Managers", desc: "Deploy master worker configuration layouts backend application instances balancing client request tracks via cloud cluster architectures.", perks: ["Pre-Fork Master Controller Multi Worker Process Tuning", "Reverse Proxy Nginx Incoming Route Buffering Links", "AWS ECS Fargate Container Target Groups Deployments", "CI/CD Pipeline Compression Artifact Flow Pipelines Actions"] }
];

export const PythonInternship = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("core-structures");
  const overallContainerRef = useRef(null);

  // SCROLL-LINKED BLUR MATRIX TRANSFORMATIONS CONTROLLER
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(65px)", "blur(40px)", "blur(12px)"]);
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
                <Terminal size={14} className="text-yellow-400" /> Enterprise Python Academy Track
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Python Development <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-400">
                  15 Industrial Core Syllabus
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
                Memory optimized data loops, asynchronous event coroutines, transactional session filters, tabular analytics wrangling, containerized task pipelines matrum pre-fork server infrastructure blueprints.
              </p>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 text-sm">
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Duration</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Calendar size={14} className="text-amber-400" /> 12 Weeks Tracks</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Program Mode</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Users size={14} className="text-emerald-400" /> Remote Interactive</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scope</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Target size={14} className="text-sky-400" /> Backend Systems</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outcome</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Award size={14} className="text-orange-400" /> Industry Credentials</p></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN (SCROLLABLE) */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[760px] overflow-y-auto pr-2 custom-scrollbar">
              {python15Concepts.map((item) => {
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
                {python15Concepts.map((concept) => concept.id === activeConceptId && (
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