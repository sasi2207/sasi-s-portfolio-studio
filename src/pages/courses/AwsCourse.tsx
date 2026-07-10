import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Shield,
  Layers,
  Network,
  Database,
  Terminal,
  Cpu,
  Zap,
  HelpCircle,
  FileCode,
  Sliders,
  Check
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";

/* ------------------------------------------------------------------
   1. ANIMATION HOOK: Elements screen-la neat-ah reveal aaga
--------------------------------------------------------------------- */
const useBlurReveal = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (el: HTMLDivElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
};

/* ------------------------------------------------------------------
   2. AWS ROADMAP ALL SERVICES SYLLABUS DATA ARRAY
--------------------------------------------------------------------- */
const awsSyllabus = [
  {
    phase: "01",
    levelName: "Foundations, Edge Routing & Core Compute",
    modules: [
      {
        icon: Network,
        title: "Amazon VPC & Global Infrastructure Mesh",
        details: "Subnet planning (Public/Private), Route Tables, Internet Gateways (IGW), NAT Gateways, Security Groups vs NACLs, VPC Peering, and Transit Gateway architecture.",
        tag: "VPC, NAT, TGW"
      },
      {
        icon: Cpu,
        title: "Amazon EC2 & Elastic Compute Sizing",
        details: "Instance profiles, EBS Volumes (gp3, io2) & Snapshots, Elastic Load Balancing (ALB, NLB, GLB), Auto Scaling Groups (ASG) setup, and EC2 pricing models.",
        tag: "EC2, EBS, ALB"
      },
      {
        icon: Layers,
        title: "Amazon Route 53 & Global Content Edge",
        details: "DNS Routing Policies (Latency, Failover, Geolocation), Domain registration, Route 53 Health Checks, and Amazon CloudFront CDN distribution edge setup.",
        tag: "Route 53, CloudFront"
      }
    ]
  },
  {
    phase: "02",
    levelName: "Cloud Storage Tiers & Database Engines",
    modules: [
      {
        icon: Database,
        title: "Amazon S3 & Network File Systems",
        details: "Object storage matrices, Versioning, Lifecycle Configuration rule cards, S3 Bucket Policies, IAM integration, Cross-Region Replication (CRR), and Amazon EFS network files.",
        tag: "S3, EFS, Glacier"
      },
      {
        icon: Database,
        title: "Amazon RDS, Aurora & Global Caching",
        details: "Provisioning relational database instances (PostgreSQL, MySQL). Managing Multi-AZ replication failovers, Read Replicas setup, Amazon Aurora Serverless, and Amazon ElastiCache (Redis).",
        tag: "RDS, Aurora, Redis"
      },
      {
        icon: Terminal,
        title: "Amazon DynamoDB NoSQL Architecture",
        details: "Designing high-throughput NoSQL database layers. Core concepts of Partition Keys, Sort Keys, Global Secondary Indexes (GSI), Local Secondary Indexes (LSI), and DynamoDB Streams tracking.",
        tag: "DynamoDB, Indexes"
      }
    ]
  },
  {
    phase: "03",
    levelName: "Serverless Architecture & Event-Driven Stacks",
    modules: [
      {
        icon: Zap,
        title: "AWS Lambda & Serverless Compute Logic",
        details: "Configuring ephemeral code execution hooks. Lambda memory allocations, Execution time limits, Layer optimizations, and private VPC deployment runtime mappings.",
        tag: "Lambda, Serverless"
      },
      {
        icon: Sliders,
        title: "Amazon API Gateway & Microservice Routing",
        details: "Building production REST and HTTP APIs. Managing path parameters, Stage variables, CORS verification parameters, API Keys setup, and direct AWS service integration proxies.",
        tag: "API Gateway"
      },
      {
        icon: Network,
        title: "Amazon SQS, SNS & EventBridge Message Hubs",
        details: "Decoupling application message patterns. Standard vs FIFO Amazon SQS queues, Amazon SNS publish/subscribe fan-out topologies, and Amazon EventBridge scheduled cron rules.",
        tag: "SQS, SNS, EventBridge"
      }
    ]
  },
  {
    phase: "04",
    levelName: "Governance, Security & Automated DevOps Pipelines",
    modules: [
      {
        icon: Shield,
        title: "AWS IAM & Enterprise Security Controls",
        details: "Ironclad identity authorization blueprints. Crafting granular JSON policies, explicit denials, Role assumption tracking, cross-account access controls, and AWS Secrets Manager integration.",
        tag: "IAM, KMS, Secrets"
      },
      {
        icon: FileCode,
        title: "AWS CloudFormation Infrastructure as Code (IaC)",
        details: "Declaring infrastructure configurations entirely via code blocks. Managing Parameters, Mappings, Custom Resources, Stack updates, drift detection checks, and nested stacks execution loops.",
        tag: "CloudFormation, IaC"
      },
      {
        icon: Terminal,
        title: "AWS CI/CD Automation & Systems Telemetry",
        details: "Configuring automated delivery paths via AWS CodePipeline, CodeBuild, and CodeDeploy. Tracking production systems runtime using Amazon CloudWatch metrics, customized alert alarms, and AWS CloudTrail audit logs.",
        tag: "CodePipeline, CloudWatch"
      }
    ]
  }
];

const AwsCourse = () => {
  const reveal = useBlurReveal();
  const [selectedPhase, setSelectedPhase] = useState(0);

  /* ------------------------------------------------------------------
     3. SCROLL HANDLING FUNCTION (Mobile view point-ah target panna)
  --------------------------------------------------------------------- */
  const handlePhaseSelection = (index: number) => {
    setSelectedPhase(index);
    
    // Mobile screen-la auto-scroll panni card blocks content-ah neat-ah point panra function loop
    setTimeout(() => {
      const element = document.getElementById(`phase-content-block`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <PageLayout>
      {/* Studio Clean Dark Matrix Interface Wrapper */}
      <div className="bg-zinc-950 text-zinc-200 min-h-screen selection:bg-orange-500 selection:text-black font-sans antialiased">
        
        {/* ================= HERO INTRO SECTION ================= */}
        <section className="relative pt-44 pb-24 border-b border-zinc-900 bg-zinc-950">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header Box: White & Orange Typography */}
            <div ref={reveal} className="blur-reveal lg:col-span-8 space-y-6 text-left">
              <div className="text-xs font-mono uppercase tracking-widest text-orange-500 flex items-center gap-2 font-semibold">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" /> Architectural Engineering Suite
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white leading-[1.05]">
                AWS Cloud Masterclass <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Complete A to Z Syllabus
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
                Zero level-la irunthu absolute industry-production grade engineering varai. Master core networking, distributed databases, high-availability scaling compute layers, and automated DevOps configurations.
              </p>
            </div>

            {/* Right Strategic Action Buttons */}
            <div ref={reveal} className="blur-reveal lg:col-span-4 text-left lg:text-right space-y-4 pt-4 lg:pt-16">
              <Link
                to="/enroll"
                className="inline-flex w-full lg:w-auto items-center justify-between lg:justify-center gap-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs px-6 py-4 rounded-lg transition duration-200 shadow-xl shadow-orange-500/10"
              >
                Access Course Console <ArrowUpRight size={14} className="text-zinc-950" />
              </Link>
              <p className="text-[11px] font-mono text-zinc-500 lg:text-right">
                Includes AWS Certified Solutions Architect syllabus.
              </p>
            </div>

          </div>
        </section>

        {/* ================= DIAGNOSTIC TRACK ENGINE ROW ================= */}
        <section className="border-b border-zinc-900 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900">
              {[
                { label: "Total Concept Depth", data: "45+ Hours" },
                { label: "Production Sandbox Labs", data: "30 Projects" },
                { label: "Deployment Targets", data: "AWS SAA-C03" },
                { label: "Core Infrastructure Framework", data: "100% Practical" },
              ].map((kpi, index) => (
                <div key={index} ref={reveal} className="blur-reveal bg-zinc-950 py-8 px-2 text-left space-y-1">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{kpi.label}</div>
                  <div className="text-lg sm:text-xl font-mono text-orange-400 font-semibold tracking-tight">{kpi.data}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SPLIT ROADMAP MONITOR CONSOLE ================= */}
        <section className="py-24 sm:py-32 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sticky Left Tracker Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 sm:space-y-8 text-left">
              <div className="space-y-2">
                <div className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">// Curriculum Blueprint</div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Course Roadmaps</h2>
                <p className="text-xs text-zinc-500 block sm:hidden">Level name-ah click panna cards keela point aagum</p>
              </div>

              {/* Dynamic Selector Buttons with mobile auto-scroll handler */}
              <div className="space-y-2 border-l border-zinc-900 pl-4">
                {awsSyllabus.map((lvl, index) => (
                  <button
                    key={index}
                    onClick={() => handlePhaseSelection(index)}
                    className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-mono transition duration-200 block ${
                      selectedPhase === index
                        ? "text-orange-400 bg-zinc-900/60 border border-zinc-850 font-semibold"
                        : "text-zinc-500 bg-transparent border-transparent hover:text-zinc-300"
                    }`}
                  >
                    Phase {lvl.phase} — {lvl.levelName}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Dynamic Column: Content Target Block with scroll margin */}
            <div id="phase-content-block" className="lg:col-span-8 text-left space-y-8 scroll-mt-28">
              <div className="pb-4 border-b border-zinc-900 flex justify-between items-center">
                <span className="text-xs font-mono text-zinc-500">Displaying Phase Array ({awsSyllabus[selectedPhase].phase}/04)</span>
                <span className="text-xs font-semibold text-orange-400 bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded max-w-[220px] sm:max-w-none truncate">
                  {awsSyllabus[selectedPhase].levelName}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {awsSyllabus[selectedPhase].modules.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-6 bg-zinc-900/20 border border-zinc-900 hover:border-orange-500/30 rounded-xl transition duration-300 flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="text-orange-400 bg-zinc-900 p-2.5 rounded-lg border border-zinc-850 group-hover:border-orange-500/20 transition duration-300">
                          <mod.icon size={16} className="stroke-[1.5]" />
                        </div>
                        <span className="text-[10px] font-mono tracking-wider bg-zinc-900 border border-zinc-900 px-2 py-0.5 rounded text-zinc-400">
                          {mod.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-white text-base font-semibold tracking-tight group-hover:text-orange-400 transition duration-200">{mod.title}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">{mod.details}</p>
                    </div>

                    <div className="pt-4 border-t border-zinc-900/60 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                      <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" /> Architecture Deployment Lab Active
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= CALL TO ACTION FOOTER BANNER ================= */}
        <section className="py-24 bg-zinc-950 border-t border-zinc-900">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mx-auto">
            <div
              ref={reveal}
              className="blur-reveal bg-zinc-900/30 border border-zinc-900 rounded-2xl p-8 sm:p-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/[0.01] rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-2 text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Ready to lock your <span className="text-orange-500">AWS Credentials?</span>
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Join an enterprise-grade cloud workspace curriculum. Learn architecture patterns via clear code structures, multi-region failover blueprints, and direct cloud pipeline executions.
                </p>
              </div>

              <Link
                to="/enroll"
                className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold px-6 py-4 rounded-lg transition duration-200 shadow-xl flex-shrink-0 w-full lg:w-auto justify-center"
              >
                Launch Course Dashboard <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default AwsCourse;