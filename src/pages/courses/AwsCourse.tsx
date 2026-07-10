import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Cloud, Cpu, Database, HardDrive, ShieldCheck, Server, Terminal,
  Globe, Radio, MessageSquare, Activity, CheckCircle2, ChevronDown, PlayCircle, FileText, ArrowUpRight
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

const aws14Concepts = [
  { id: "ec2", label: "1. EC2 Compute Instances", icon: Cpu, color: "from-orange-500 to-amber-600", bg: "bg-orange-50/80", text: "text-orange-600", headline: "On-Demand Virtual Server Nodes", desc: "Provision virtual machines configurations mapping custom CPU bounds.", topics: ["AMI Machine Images Configurations", "Instance Types Allocation Profiles", "Spot & Reserved Instancing Optimization", "Elastic IP Management Layers"] },
  { id: "lambda", label: "2. AWS Lambda Execution", icon: Terminal, color: "from-amber-500 to-yellow-600", bg: "bg-amber-50/80", text: "text-amber-600", headline: "Serverless Event-Driven Runtime Engine", desc: "Run individual processing scripts logic loops triggered on-demand without infrastructure costs.", topics: ["Cold Start Latency Optimizations", "Event Source Routing Triggers", "Concurrency Limit Threshold Bounds", "Serverless Layers Shared Packages"] },
  { id: "containers", label: "3. ECS & EKS Clusters", icon: Server, color: "from-blue-500 to-indigo-600", bg: "bg-blue-50/80", text: "text-blue-600", headline: "Microservice Container Orchestration", desc: "Scale Dockerized task definitions and automated Kubernetes configurations across distributed nodes.", topics: ["Fargate Serverless Task Management", "Kubernetes Pod Allocation Engines", "Service Mesh Communication Channels", "Container Image Registry (ECR) Pipelines"] },
  { id: "s3", label: "4. Amazon S3 Buckets", icon: HardDrive, color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50/80", text: "text-emerald-600", headline: "Highly Available Global Object Store", desc: "Store images, database archival files, logs and video artifacts safely with absolute durability.", topics: ["Bucket Access Control Lists Policies", "Intelligent Lifecycle Archival Tiering", "Static Website Asset Hosting Protocols", "Object Versioning Recovery Trees"] },
  { id: "ebs", label: "5. EBS Block Volumes", icon: Database, color: "from-cyan-500 to-blue-600", bg: "bg-cyan-50/80", text: "text-cyan-600", headline: "Persistent High-IOPS EC2 Storage Blocks", desc: "Attach high-performance elastic network drives to active computational engines for local storage operations.", topics: ["SSD General Purpose vs Provisioned IOPS", "Snapshot Backups Point-In-Time Restoration", "Volume Encryption Using AWS KMS Keys", "Dynamic Size Expansion Pipelines"] },
  { id: "rds", label: "6. RDS Managed DB Engines", icon: Database, color: "from-indigo-600 to-purple-700", bg: "bg-indigo-50/80", text: "text-indigo-600", headline: "Relational Enterprise Database Multi-AZ Pools", desc: "Automate engine provisioning, storage patches and recovery schedules for Postgres/MySQL infrastructure.", topics: ["Multi-AZ Real-Time Failure Failover Routing", "Read Replicating Cluster Scaling Pipelines", "Automated Automated Maintenance Windows", "Storage Auto-Sizing Scaling Allocator"] },
  { id: "dynamodb", label: "7. NoSQL DynamoDB Engine", icon: Terminal, color: "from-rose-500 to-red-600", bg: "bg-rose-50/80", text: "text-rose-600", headline: "Sub-Millisecond Document Transaction Store", desc: "Fully managed schema-less NoSQL storage built to process billions of high-throughput transactional requests seamlessly.", topics: ["Partition vs Sort Key Design Models", "Global Secondary Index (GSI) Optimizations", "DynamoDB Streams Change Pipeline Logs", "On-Demand Capacity Scaling Mode Setups"] },
  { id: "vpc", label: "8. VPC Virtual Subnets", icon: ShieldCheck, color: "from-purple-600 to-violet-700", bg: "bg-purple-50/80", text: "text-purple-700", headline: "Isolated Perimeter Cloud Networks", desc: "Design logical virtual firewalled subnets mapping internet gateways or internal data layers.", topics: ["Public vs Private Subnet Route Maps", "NAT Gateways Asymmetric Outbound Traffic", "Network Access Control Lists (NACL) Rules", "VPC Peering Inter-Network Integration Mesh"] },
  { id: "iam", label: "9. AWS IAM Entitlements", icon: ShieldCheck, color: "from-slate-600 to-slate-800", bg: "bg-slate-100/80", text: "text-slate-700", headline: "Granular Identity & Access Governance", desc: "Control precise service access matrices across enterprise roles, user endpoints and active tracking processes.", topics: ["Least Privilege Policy JSON Contracts", "Cross-Account IAM AssumeRole Execution", "Multi-Factor Authentication (MFA) Enforcements", "Service Control Policies (SCP) Organizations"] },
  { id: "cloudfront", label: "10. CloudFront CDN Network", icon: Globe, color: "from-sky-500 to-blue-600", bg: "bg-sky-50/80", text: "text-sky-600", headline: "Edge-Cached Global Content Distribution", desc: "Accelerate web platform load speed by caching high-frequency user data at edge routing facilities internationally.", topics: ["Origin Shield Architecture Integration", "Cache Behavioral Condition Configurations", "SSL/TLS Custom Domain Extensions Binding", "Lambda@Edge Request Dynamic Interceptions"] },
  { id: "route53", label: "11. Route 53 Resilient DNS", icon: Radio, color: "from-pink-500 to-rose-600", bg: "bg-pink-50/80", text: "text-pink-600", headline: "Global Anycast Domain Name Router", desc: "Manage domain endpoint structures utilizing automated load failover and geo-proximity latency controls.", topics: ["Weighted Round-Robin Route Traffic Maps", "Active Health Check Automatic Endpoint Drop", "Latency-Based Routing Latency Optimization", "Private DNS Zones Internal VPC Layouts"] },
  { id: "apigateway", label: "12. API Gateway Routers", icon: Globe, color: "from-teal-500 to-emerald-600", bg: "bg-teal-50/80", text: "text-teal-600", headline: "Centralized Microservices Entry Interface", desc: "Construct, publish and defend robust HTTP/WebSocket API gateways scaling request traffic paths gracefully.", topics: ["Throttling Burst Limit Access Controls", "Cognito Authorizer User Token Decryptors", "CORS Preflight Configurations Parameters", "Stage Mocking Variables Deployments Environments"] },
  { id: "sqs-sns", label: "13. SQS & SNS Messaging Assemblies", icon: MessageSquare, color: "from-lime-600 to-green-700", bg: "bg-lime-50/80", text: "text-lime-700", headline: "Decoupled Asynchronous Pub-Sub Systems", desc: "Broadcast event streams or sequence payload data structures across multi-tier backend processing frameworks reliably.", topics: ["FIFO Guaranteed Sequential Processing Queues", "Dead Letter Queues (DLQ) Fallback Analysis", "SNS Topic Fan-Out Microservices Distribution", "Message Retain TTL Configuration Windows"] },
  { id: "cloudwatch", label: "14. CloudWatch Observability Suite", icon: Activity, color: "from-fuchsia-600 to-purple-700", bg: "bg-fuchsia-50/80", text: "text-fuchsia-600", headline: "Full Infrastructure Real-Time Telemetry Logs", desc: "Collect performance metric curves, aggregation logs, and deploy active alert alerts to guarantee platform infrastructure uptime.", topics: ["Custom Metrics CloudWatch Dashboards Plots", "Metric Alarms Slack Auto Notification Triggers", "Log Insights Fast Query Log Aggregators", "EventBridge Infrastructure State Event Processors"] }
];

export const Aws14ConceptsHub = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("ec2");
  const overallContainerRef = useRef(null);

  // DYNAMIC COMPONENT TRANSFORMATION METRICS ON SCROLL TIMELINE
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(60px)", "blur(40px)", "blur(10px)"]);
  const adaptiveScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (

    <PageLayout>
    <div ref={overallContainerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-orange-500 selection:text-white">
      
      {/* 🌪️ INTERACTIVE SCROLL-LINKED BLUR AMBIENT ATMOSPHERE MESH */}
      <motion.div style={{ filter: scrollLinkBlur }} className="absolute inset-0 pointer-events-none z-0 transition-all duration-300">
        <div className="absolute top-[-5%] left-[-8%] w-[650px] h-[650px] bg-orange-100/30 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-indigo-100/30 rounded-full mix-blend-multiply blur-3xl" />
        <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-emerald-100/20 rounded-full mix-blend-multiply blur-2xl" />
      </motion.div>

      {/* TOP HERO ANCHOR BLOCK */}
      <motion.section style={{ scale: adaptiveScale }} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="max-w-4xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 text-orange-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-orange-500/30 backdrop-blur-xs">
              <Cloud size={14} className="text-orange-400" /> Enterprise AWS Roadmap
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Cloud Architecture <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-indigo-400">
                14 Core Pillars Blueprint
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              Production scale environment systems-a direct-a engineer panna thevaiyana complete infrastructure blocks layout mapping panels. Real-time labs processing data-va breakdown panni kathinga.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN (SCROLLABLE ON HIGH RESOLUTION DESKTOPS) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar">
            {aws14Concepts.map((item) => {
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
              {aws14Concepts.map((concept) => concept.id === activeConceptId && (
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
                        AWS Technical Specs Architecture
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
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operational Pipeline Target Labs:</h4>
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
                      <PlayCircle size={16} /> Open AWS Cloud Sandbox Lab
                    </button>
                    <button className="px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100/70 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                      <FileText size={16} className="text-slate-400" /> Infrastructure Code Template
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