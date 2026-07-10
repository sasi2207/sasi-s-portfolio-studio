import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Terminal, Server, Cpu, Database, Radio, ShieldCheck, Box, Sliders,
  Activity, Globe, MessageSquare, HardDrive, Layers, CheckCircle2,Rocket, PlayCircle, FileText, ArrowUpRight, ChevronRight, Calendar, Users, Target, Award
} from 'lucide-react';
import { Layout as PageLayout } from "@/components/layout/Layout";

const java20Concepts = [
  { id: "jvm-internals", label: "1. JVM Architecture", icon: Cpu, color: "from-amber-600 to-red-700", bgLight: "bg-amber-50/80", textLight: "text-amber-700", headline: "JIT Compilation & Class Loading Internals", desc: "Master bytecode compilation execution phases, method area registries and dynamic loader subsystem validation constraints maps.", perks: ["Bootstrap / Extension Class Loading Links", "Just-In-Time (JIT) Native Code Optimizer", "Execution Engine Interpreter Profiling Loops", "Bytecode Verification Security Boundary Audits"] },
  { id: "garbage-collection", label: "2. Advanced GC Tuning", icon: HardDrive, color: "from-red-500 to-rose-600", bgLight: "bg-red-50/80", textLight: "text-red-600", headline: "Generational Heap Memory Reclamations", desc: "Deep dive into Eden, Survivor spaces memory allocation tuning utilizing low pause G1GC or ZGC algorithms parameters performance.", perks: ["Stop-The-World (STW) Pause Reductions Math", "Mark-Sweep-Compact Memory Fragment Defrags", "Garbage-First (G1GC) Region Allocation Matrices", "Memory Leak Diagnostic Heap Dump Analytics"] },
  { id: "java-memory-model", label: "3. Java Memory Model", icon: Box, color: "from-rose-600 to-orange-700", bgLight: "bg-rose-50/80", textLight: "text-rose-700", headline: "Thread Local Stacks vs Shared Heap Blocks", desc: "Enforce multi core field visibility instructions caching parameters configurations using memory barrier visibility laws cleanly pipelines.", perks: ["Volatile Keyword Hardware Cache Flushes Link", "Happens-Before Consistency Logic Formations", "Thread Stack Frame Local Allocation Bounds", "Instruction Reordering CPU Memory Fence Guards"] },
  { id: "multithreading", label: "4. Multi-Threading Concurrency", icon: Activity, color: "from-orange-500 to-amber-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Native Operating OS Thread Pool Allocators", desc: "Structure high efficiency transaction concurrency worker grids mapping ThreadPoolExecutor saturation parameters limits thresholds.", perks: ["Fixed / Cached Worker Queue Balancing Schemas", "Thread Lifecycle State Transition Mapping Tracks", "Runnable vs Callable Future Result Extractions", "ThreadLocal Context Variable Isolation Barriers"] },
  { id: "virtual-threads", label: "5. Loom Virtual Threads", icon: Radio, color: "from-amber-500 to-yellow-600", bgLight: "bg-amber-50/80", textLight: "text-amber-600", headline: "Lightweight Million Carrier Thread Clusters", desc: "Deploy Project Loom virtual structures executing high throughput I/O operations scales bypassing heavy OS kernel thread allocation overheads.", perks: ["Carrier Thread Task Mount/Unmount Operations", "Continuations Execution State Suspension Points", "Blocking I/O Automated Interceptor Redirect Loops", "High Concurrency Server Scaling Matrix Maps"] },
  { id: "locks-sync", label: "6. Synchronizations Locks", icon: ShieldCheck, color: "from-yellow-600 to-emerald-700", bgLight: "bg-yellow-50/80", textLight: "text-emerald-700", headline: "Reentrant Mutual Exclusion Thread Safeties", desc: "Prevent race condition state corruptions applying high speed conditional spin locks explicit lock implementations properties structures.", perks: ["ReentrantLock Fairness Scheduling Allocation Settings", "Condition Variable Thread Signal Await Pipelines", "Optimistic Read Invocations StampedLock Tuning", "Deadlock Prevention Structural Ordering Enforcement"] },
  { id: "collections-deep", label: "7. Collections Internal Math", icon: Sliders, color: "from-emerald-500 to-teal-600", bgLight: "bg-emerald-50/80", textLight: "text-emerald-600", headline: "HashMap O(1) Custom Collision Bucket Solvers", desc: "Analyze runtime storage data container performance behaviors mapping hashing nodes, concurrent lists trees trees balancing systems layouts.", perks: ["HashMap Node Linked List Treeify Threshold Rules", "ConcurrentHashMap CAS (Compare-And-Swap) Locks Segment", "CopyOnWriteArrayList Thread Safe Snapshot Arrays", "Fail-Fast vs Fail-Safe Iterator Mutation Guards"] },
  { id: "streams-api", label: "8. Functional Streams API", icon: Terminal, color: "from-teal-600 to-cyan-700", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "Declarative Lazy Processing Mutation Pipes", desc: "Process huge sequence arrays optimization pipelines leveraging functional map filter reductions pipeline short circuit computations pipelines.", perks: ["Intermediate Lazy Evaluation Pipeline Structural Maps", "Terminal Collector Aggregate Reduction Invocations", "Parallel Stream ForkJoinPool Spliterator Computations", "Primitive Stream Optimization IntStream Allocation Gains"] },
  { id: "reflection-annotations", label: "9. Reflection Bytecode Hooks", icon: Layers, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50/80", textLight: "text-cyan-600", headline: "Runtime Metadata Injection Class Analyzers", desc: "Inspect structural runtime dynamic field values parameters injecting custom behaviors attributes moolama code meta structures profiles.", perks: ["Dynamic Proxy Class Bytecode Instantiations", "Annotation Processing Stage Abstract Syntax Trees", "Field Access Level Privilege Override Injections", "Performance Overhead Mitigation Cache Registries"] },
  { id: "spring-ioc", label: "10. Spring Core IoC Engine", icon: Box, color: "from-blue-600 to-indigo-700", bgLight: "bg-blue-50/80", textLight: "text-indigo-600", headline: "Decoupled Bean Dependency Inversion Containers", desc: "Manage component instance dependency chains lifecycle states parameters cleanly utilizing core spring application context managers pools.", perks: ["Singleton vs Prototype Bean Lifecycle Scopes Maps", "Dependency Injection Constructor Resolution Paths", "BeanFactoryPostProcessor Dynamic Variable Loading Hooks", "Custom Bean Initialization Predestroy Lifecycle Triggers"] },
  { id: "spring-boot-starters", label: "11. Spring Boot Starter Boot", icon: Rocket, color: "from-indigo-500 to-purple-600", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "Opinionated Auto Configuration Bootstrapping", desc: "Accelerate development setups bypassing heavy XML files layouts utilizing structural declarative runtime condition starters parameters injection.", perks: ["@ConditionalOnProperty Configuration Load Triggers", "AutoConfigurationImportSelector Dynamic Class Filters", "Embedded Tomcat / Jetty Serving Engine Thread Setups", "Application Properties Profile Hierarchy Layering Schemes"] },
  { id: "spring-aop", label: "12. Aspect Oriented Design", icon: Layers, color: "from-purple-600 to-fuchsia-700", bgLight: "bg-purple-50/80", textLight: "text-purple-600", headline: "Cross Cutting Decoupled Proxy Interceptors", desc: "Intercept transactional business logic functions execution paths modularly applying tracking validation controls auditing scopes parameters.", perks: ["Pointcut Expression Language Signature Matching Patterns", "Around Advice Execution Flow Interception Controls", "CGLIB vs JDK Dynamic Proxy Generation Routines", "Transactional Aspect Propagation Boundary State Hooks"] },
  { id: "hibernate-orm", label: "13. Hibernate Session Caching", icon: Database, color: "from-fuchsia-500 to-pink-600", bgLight: "bg-fuchsia-50/80", textLight: "text-fuchsia-600", headline: "Relational Persistence Entity Mapping Frameworks", desc: "Optimize enterprise storage latency curves installing smart entity caching buffers avoiding frequent underlying query database saturations.", perks: ["First-Level Persistence Session State Context Buffers", "Second-Level Shared Region Cache Provider Links", "Dirty Checking State Auto Mutation Database Flushes", "LazyInitializationException Proxy Fetch Isolation Fixes"] },
  { id: "spring-data-jpa", label: "14. Spring Data JPA Repos", icon: Target, color: "from-pink-600 to-rose-700", bgLight: "bg-pink-50/80", textLight: "text-pink-600", headline: "Declarative Metadata Abstract Query Resolvers", desc: "Generate secure transaction database queries matching method signatures attributes bypassing raw sql statement strings creation boilerplate.", perks: ["Dynamic Query Method Signature Parsing Translation", "JPQL / Native SQL Statement Injection Guards", "Criteria API Dynamic Abstract Query Formations", "Pageable / Sort Offset Cache Chunk Data Accumulators"] },
  { id: "spring-security", label: "15. OAuth2 Filter Guards", icon: ShieldCheck, color: "from-rose-500 to-red-600", bgLight: "bg-rose-50/80", textLight: "text-rose-600", headline: "Cryptographic Federated Identity Token Interceptors", desc: "Erect absolute application edge protection firewalls intercepting client servlet requests verifying asymmetric token keys payload structures.", perks: ["SecurityFilterChain Authentication Provider Intercept Routes", "JWT Claims Decoder Key Validation Filters Checks", "Method Level PreAuthorize Role Access Privilege Guards", "CORS / CSRF Mitigation Interceptor Policy Configurations"] },
  { id: "junit5-testing", label: "16. JUnit 5 Testing Grids", icon: Box, color: "from-teal-600 to-emerald-700", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "Mocked Isolated Integration Assert Structures", desc: "Verify application response criteria structures processing test flows isolating backend component targets leveraging strict mock injections.", perks: ["Mockito @Mock / @Spy Instance Boundary Interchanges", "Parameterized Test Input Vector Array Execution Slices", "Spring BootTest ApplicationContext Cache Replication Runs", "AssertThrows Runtime Exception Flow Validation Checks"] },
  { id: "maven-gradle", label: "17. Build Artifact Systems", icon: Sliders, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50/80", textLight: "text-cyan-600", headline: "Transitive Dependency Dependency Tree Resolution Managers", desc: "Build standardized archive files packages resolving compile level classpath collision breakings using declarative artifact mapping logs architectures.", perks: ["POM XML / Gradle DSL Scope Hierarchy Definitions", "Transitive Version Exclusion Conflict Strategy Resolution Rules", "Multi Module Parent Sub Project Archetype Compilations", "Custom Lifecycle Phase Build Plugin Interception Hooks"] },
  { id: "microservices-rpc", label: "18. Distributed RPC (gRPC)", icon: Globe, color: "from-blue-600 to-sky-700", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "High Performance Inter Service Protocol Exchanges", desc: "Architect low latency service to service network communications mapping protocol buffer layouts schemas bypassing slow json translation overheads.", perks: ["Protocol Buffer Structural Message Serialization Codecs", "HTTP/2 Multiplexed Persistent Connection Stream Links", "OpenFeign Dynamic REST Client Declarative Interfaces", "Distributed Correlation ID Span Tracking Injections Logs"] },
  { id: "resilience4j", label: "19. Fault Tolerant Circuit", icon: Radio, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Cascading Downstream Failure Trip Interceptors", desc: "Protect distributed app health boundaries isolation exceptions implementing smart sliding window crash tracking ratio trip metrics.", perks: ["Open/Closed/Half-Open Automated State Machine Mutations", "Sliding Window Execution Success Failure Analytics Evaluators", "Static Response Fallback Recovery Pipeline Execution Injections", "RateLimiter / Bulkhead Thread Pool Isolation Guards Metrics"] },
  { id: "docker-java", label: "20. Micro JRE Containerization", icon: Server, color: "from-slate-700 to-slate-900", bgLight: "bg-slate-100/80", textLight: "text-slate-700", headline: "Minimal Base Virtual Linux Package Images", desc: "Package spring boot fat jar files safely inside stripped down multi-stage target deployment containers normalizing environment profiles universally maps.", perks: ["Multi-Stage Small JRE Footprint Size Base Dockerfiles", "Layered Jar Extraction Optimization Fast Compilation Caches", "JVM Ergonomics Memory Resource Constraints Settings Maps", "Kubernetes Pod Health Check Endpoint Probe Integrations"] }
];

export const JavaInternship = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("jvm-internals");
  const overallContainerRef = useRef(null);

  // DYNAMIC SCROLL-LINKED BLUR MATRIX TRANSFORMATIONS ENGINE
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(65px)", "blur(40px)", "blur(12px)"]);
  const adaptiveScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <PageLayout>
      <div ref={overallContainerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-amber-600 selection:text-white">
        
        {/* 🌪️ INTERACTIVE SCROLL-LINKED BLUR AMBIENT ATMOSPHERE MESH */}
        <motion.div style={{ filter: scrollLinkBlur }} className="absolute inset-0 pointer-events-none z-0 transition-all duration-300">
          <div className="absolute top-[-5%] left-[-8%] w-[650px] h-[650px] bg-amber-100/40 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-red-100/20 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full mix-blend-multiply blur-2xl" />
        </motion.div>

        {/* TOP HERO ANCHOR BLOCK */}
        <motion.section style={{ scale: adaptiveScale }} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
            
            <div className="max-w-4xl space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-amber-500/30 backdrop-blur-xs">
                <Terminal size={14} className="text-amber-400" /> Enterprise Java Cloud Architecture Track
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Java Systems <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400">
                  20 Industrial Core Pillars
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
                JVM runtime structures, generational GC memory algorithms, Loom virtual thread concurrency, spring aspect interceptors, transactional entity filters matrum multi-stage containerized microservices deployments blueprints panel tracks.
              </p>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 text-sm">
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Duration</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Calendar size={14} className="text-amber-400" /> 12 Weeks Tracks</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Program Mode</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Users size={14} className="text-emerald-400" /> Remote Interactive</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scope</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Target size={14} className="text-rose-400" /> Cloud Scale Backend</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outcome</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Award size={14} className="text-indigo-400" /> Core Specs</p></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN (SCROLLABLE) */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[760px] overflow-y-auto pr-2 custom-scrollbar">
              {java20Concepts.map((item) => {
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
                {java20Concepts.map((concept) => concept.id === activeConceptId && (
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