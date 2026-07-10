import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Cpu, Database, ShieldCheck, Server, Terminal, Layers,Cloud,
  Globe, Radio, MessageSquare, Activity, CheckCircle2, ChevronDown, PlayCircle, FileText, ArrowUpRight
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

const java14Concepts = [
  { id: "java-core", label: "1. Core Java & Loom Threads", icon: Cpu, color: "from-red-600 to-orange-700", bg: "bg-red-50/80", text: "text-red-600", headline: "Advanced Java 21+ Virtual Concurrency", desc: "Master memory allocation optimizations, garbage collection management logs, and lightweight project loom structural concurrent thread scaling.", topics: ["Virtual Threads Execution Engines", "Functional Lambdas & Stream Streams API", "JVM Memory Management & GC Tuning", "Advanced Reflection & Pattern Logic"] },
  { id: "spring-core", label: "2. Spring IoC & Core Framework", icon: Layers, color: "from-green-600 to-emerald-700", bg: "bg-green-50/80", text: "text-green-600", headline: "Dependency Injection & Inversion of Control", desc: "Configure application context bounds dynamically decoupling complex cross-dependencies using automated declarative component scans.", topics: ["ApplicationContext Lifecycle Scopes Hooks", "Custom Bean Initializers Profiles Configuration", "Spring Expression Language (SpEL) Evaluation", "Constructor vs Setter Dependancy Injections"] },
  { id: "spring-boot", label: "3. Spring Boot 3.x Auto-Config", icon: Server, color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50/80", text: "text-emerald-600", headline: "Opinionated Embedded Application Servers", desc: "Accelerate development using intelligent runtime auto-configuration matrices bundled alongside reactive production ready servers.", topics: ["Custom Auto-Configuration Conditionals", "Embedded Tomcat / Netty Engine Interchanges", "Spring Boot Starter Dependency Graphs", "Externalized Configurations App YAML Profiles"] },
  { id: "spring-mvc", label: "4. Spring Web REST Controllers", icon: Globe, color: "from-blue-500 to-indigo-600", bg: "bg-blue-50/80", text: "text-blue-600", headline: "Asynchronous RESTful REST Endpoint Contracts", desc: "Expose enterprise-grade API data layers maps structuring input validation filter pipelines dynamically.", topics: ["Async DeferredResult Processing Pools", "Content Negotiation Request Parameter Controllers", "Global Cross-Cutting Exception Handler Advices", "HATEOAS Hypermedia API Structuring Engines"] },
  { id: "hibernate", label: "5. Hibernate ORM & JPA Data", icon: Database, color: "from-indigo-600 to-purple-700", bg: "bg-indigo-50/80", text: "text-indigo-600", headline: "Object-Relational Entity Schema Pipelines", desc: "Map memory resident Java object schemas directly inside database tables using abstract query translation mapping blocks.", topics: ["First & Second Level Caching Management", "N+1 Selective Loading Lazy Load Fixes", "Criteria API Programmatic Complex Queries", "Entity Transaction State Synchronization Loops"] },
  { id: "spring-data", label: "6. Spring Data Repository Stacks", icon: Database, color: "from-purple-500 to-fuchsia-600", bg: "bg-purple-50/80", text: "text-purple-600", headline: "Abstracted Database Transaction Interfaces", desc: "Generate multi-tenant transactional boilerplate code access layouts automatically compiling method name derivations.", topics: ["Dynamic Pagination & Result Set Sorting Elements", "Query Annotation Native Database Executions", "Auditing Entity State Modification Logs", "Custom Interface Base Repositories Extensions"] },
  { id: "spring-security", label: "7. Spring Security & OAuth2", icon: ShieldCheck, color: "from-slate-700 to-slate-900", bg: "bg-slate-100/80", text: "text-slate-700", headline: "Granular Enterprise Access Filter Interceptors", desc: "Defend application routers intercepting authorization tokens using secure decentralized JWT token validations.", topics: ["Security Filter Chain Pipeline Precedences", "OAuth2 Resource Server JWT Configuration Decoding", "Method Level Authorization Role Level Checks", "CORS Routing & CSRF Token Protections"] },
  { id: "microservices", label: "8. Distributed Spring Cloud", icon: Server, color: "from-sky-500 to-blue-600", bg: "bg-sky-50/80", text: "text-sky-600", headline: "Decentralized Fault-Tolerant Microservices Mesh", desc: "Orchestrate structural cloud configurations service clusters discovery routes using load-balancing network routers.", topics: ["Eureka Service Registration Server Links", "Spring Cloud Gateway Dynamic Router Topologies", "Resilience4j Automated Circuit Breaker Implementations", "Feign Client Programmatic Inter-Service Rest Exchanges"] },
  { id: "kafka", label: "9. Apache Kafka Event-Streams", icon: Radio, color: "from-amber-600 to-orange-700", bg: "bg-amber-50/80", text: "text-amber-600", headline: "Asynchronous Distributed Broker Event Pipelines", desc: "Build loosely coupled data streams handling highly durable message offset tracking points between distributed microservices.", topics: ["Producer Partition Routing Acknowledgement Policies", "Consumer Group Offset Commit Sync Mechanics", "Kafka Streams Complex Aggregations Pipelines", "Dead Letter Topic Failover Exception Redirects"] },
  { id: "redis", label: "10. Distributed Redis Caching", icon: Activity, color: "from-rose-500 to-red-600", bg: "bg-rose-50/80", text: "text-rose-600", headline: "Sub-Millisecond High Availability Memory Cache", desc: "Mitigate direct database performance saturation layers caching heavy computational payloads inside memory stores.", topics: ["Cache-Aside Allocation Pattern Strategies", "TTL Expiration Eviction Policy Definitions", "Redis Pub-Sub Fast Alert Messaging Hooks", "Cluster Replication Sharding High Availability Sets"] },
  { id: "testing", label: "11. JUnit 5 & Mockito Suites", icon: Terminal, color: "from-teal-600 to-green-700", bg: "bg-teal-50/80", text: "text-teal-600", headline: "Isolated Code Unit Performance Assurance", desc: "Validate enterprise data layer transactions utilizing mocked service mock injections guaranteeing strict integration behavior metrics.", topics: ["MockMvc Endpoint Pipeline Route Simulators", "DataJpaTest Transactional Rolling DB Injections", "Mockito Argument Captor Behavioral Analysis Extensions", "Parameterized Specialized Dynamic Matrix Test Pipelines"] },
  { id: "actuator", label: "12. Spring Actuator Monitoring", icon: Activity, color: "from-fuchsia-600 to-pink-700", bg: "bg-fuchsia-50/80", text: "text-fuchsia-600", headline: "Application Telemetry & Health Observability", desc: "Expose real-time engine processing configurations tracking thread dumps metrics and execution logs health statistics.", topics: ["Micrometer Integration Prometheus Targets Export", "Custom Endpoint Health Check Diagnostics Scripts", "Thread Dump Performance Saturation Auditing Profiles", "Loggers Levels Runtime Hot Adjustments Switches"] },
  { id: "docker", label: "13. Containerization (Docker)", icon: Layers, color: "from-cyan-500 to-blue-600", bg: "bg-cyan-50/80", text: "text-cyan-600", headline: "Immutable Containerized Application Bundles", desc: "Package enterprise jar distributions with exact platform dependencies eliminating localized cross environment differences completely.", topics: ["Multi-Stage Optimized Small Footprint Dockerfiles", "Layer Caching Strategies Fast Build Runs", "Docker Compose Multi Service Networking Layouts", "Volume Persistence Host Storage Mount Mapping"] },
  { id: "cicd", label: "14. Cloud Jenkins & K8s Pipeline", icon: Cloud, color: "from-orange-500 to-red-600", bg: "bg-orange-50/80", text: "text-orange-600", headline: "Automated Distributed Infrastructure Deployment", desc: "Compile code artifacts run integration profiles push container registries and host onto AWS Kubernetes engine setups dynamically.", topics: ["Declarative Groovy Script Jenkinsfile Multi Pipelines", "Helm Chart Microservices Declarative Management Configs", "AWS EKS Pod Autoscaling Node Deployments", "ArgoCD GitOps Automated Server Configuration Syncs"] }
];

export const JavaFullStackMasterHub = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("java-core");
  const overallContainerRef = useRef(null);

  // SCROLL-LINKED BLUR TRANSFORMATIONS ENGINE CONTROL
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(60px)", "blur(40px)", "blur(10px)"]);
  const adaptiveScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (

    <PageLayout>
    <div ref={overallContainerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-red-500 selection:text-white">
      
      {/* 🌪️ INTERACTIVE SCROLL-LINKED BLUR AMBIENT ATMOSPHERE MESH */}
      <motion.div style={{ filter: scrollLinkBlur }} className="absolute inset-0 pointer-events-none z-0 transition-all duration-300">
        <div className="absolute top-[-5%] left-[-8%] w-[650px] h-[650px] bg-red-100/30 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-emerald-100/20 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full mix-blend-multiply blur-2xl" />
      </motion.div>

      {/* TOP HERO ANCHOR BLOCK */}
      <motion.section style={{ scale: adaptiveScale }} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="max-w-4xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 text-red-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-red-500/30 backdrop-blur-xs">
              <Server size={14} className="text-red-400" /> Enterprise Java Track
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Java Full Stack <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400">
                14 Blueprint Architecture
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              High throughput reactive messaging distributed frameworks, transactional entity layers, automation deployments matrum system designs-a conceptualize panni expert-a maarunga.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar">
            {java14Concepts.map((item) => {
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
              {java14Concepts.map((concept) => concept.id === activeConceptId && (
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
                        Java Production System Target Ecosystem
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
                      <PlayCircle size={16} /> Run Local Boot Dev Sandbox
                    </button>
                    <button className="px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100/70 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                      <FileText size={16} className="text-slate-400" /> Infrastructure Architecture Specs
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