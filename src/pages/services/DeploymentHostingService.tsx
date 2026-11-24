import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Cloud,
  CloudCog,
  Server,
  GitBranch,
  Container,
  Terminal,
  Workflow,
  Activity,
  Eye,
  Siren,
  Lock,
  KeyRound,
  ShieldCheck,
  HardDrive,
  Network,
  RefreshCw,
  Boxes,
  Wallet,
  Gauge,
  LifeBuoy,
  Users,
  Layers,
  Plug,
  Bell,
  Cpu,
  Code2,
  Database,
  MessageCircle,
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  Rocket,
  PenTool,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I need help with cloud infrastructure and DevOps for my product. Can we discuss the setup, tools and timeline?";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* Proposal form type used by every "Get my cloud setup" button */
const PROPOSAL_TYPE = "cloud-devops";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Layers, text: "AWS, Azure or Google Cloud" },
  { icon: Clock, text: "Pipeline live in 2–4 weeks" },
  { icon: ShieldCheck, text: "You own every account and config" },
];

const benefits = [
  {
    icon: Rocket,
    title: "Release Without Fear",
    desc: "Every code change is built, tested and deployed by a pipeline, so releases become a routine click instead of a late-night event.",
  },
  {
    icon: Gauge,
    title: "Scales When Traffic Grows",
    desc: "Servers are added automatically during a sale or a launch and removed afterwards, so the site stays fast without paying for idle capacity.",
  },
  {
    icon: Wallet,
    title: "Cloud Bills You Can Predict",
    desc: "We right-size servers, remove unused resources and set budget alerts, so the monthly bill does not come as a surprise.",
  },
  {
    icon: Activity,
    title: "Know Before Customers Do",
    desc: "Dashboards and alerts tell your team about slow pages, errors and full disks before users start complaining.",
  },
  {
    icon: Lock,
    title: "Secure By Default",
    desc: "Private networks, least-privilege access, encrypted data and managed secrets are part of the setup from day one.",
  },
  {
    icon: RefreshCw,
    title: "Backups And Recovery That Work",
    desc: "Automated backups with restore tests, so a failure or a mistake costs you minutes, not days.",
  },
];

/* Solution sets (the explorer) */
const solutionSets = [
  {
    id: "cloud",
    label: "Cloud Infrastructure",
    full: "Cloud Infrastructure & Migration",
    summary:
      "A well-designed cloud foundation for your product, whether you are moving from a single server or starting fresh.",
    solutions: [
      {
        icon: CloudCog,
        title: "Cloud Architecture Design",
        desc: "A clear design for servers, databases, storage and networking, sized for your traffic and budget.",
      },
      {
        icon: Cloud,
        title: "Cloud Migration",
        desc: "Move your application from shared hosting, a VPS or on-premise servers to the cloud with minimal downtime.",
      },
      {
        icon: Network,
        title: "Networking & Domains",
        desc: "Private networks, load balancers, DNS, CDN and SSL certificates configured and renewed automatically.",
      },
      {
        icon: Terminal,
        title: "Infrastructure as Code",
        desc: "Your whole setup is written as code with Terraform, so it can be reviewed, repeated and rebuilt in minutes.",
      },
      {
        icon: Container,
        title: "Docker & Kubernetes",
        desc: "Containerise your application and run it on Kubernetes or a managed container service when your scale needs it.",
      },
      {
        icon: HardDrive,
        title: "Storage & Databases",
        desc: "Managed databases, object storage and caching, with replicas and automated maintenance.",
      },
      {
        icon: Boxes,
        title: "Environments",
        desc: "Separate development, staging and production environments, so changes are tested before customers see them.",
      },
      {
        icon: Wallet,
        title: "Cost Optimisation",
        desc: "A review of your current cloud bill, with unused resources removed and servers right-sized.",
      },
    ],
  },
  {
    id: "devops",
    label: "DevOps & CI/CD",
    full: "DevOps Automation & CI/CD",
    summary:
      "Automate how code goes from a developer's laptop to production, safely and repeatably.",
    solutions: [
      {
        icon: GitBranch,
        title: "CI/CD Pipelines",
        desc: "Automatic build, test and deploy on every commit, using GitHub Actions, GitLab CI or Jenkins.",
      },
      {
        icon: Workflow,
        title: "Automated Testing Gates",
        desc: "Code is released only when tests, linting and security checks pass, so broken builds never reach production.",
      },
      {
        icon: Rocket,
        title: "Zero-Downtime Deployments",
        desc: "Rolling, blue-green or canary releases keep your site running while a new version goes live.",
      },
      {
        icon: RefreshCw,
        title: "One-Click Rollback",
        desc: "If a release misbehaves, return to the last good version in seconds.",
      },
      {
        icon: KeyRound,
        title: "Secrets & Config Management",
        desc: "Passwords, API keys and settings are stored in a secure vault and never sit inside the code.",
      },
      {
        icon: Terminal,
        title: "Server Automation",
        desc: "Ansible and scripts handle setup, patching and repeat tasks, so no one configures servers by hand.",
      },
      {
        icon: Boxes,
        title: "Preview Environments",
        desc: "Every pull request gets a temporary live copy, so reviewers and clients can test changes before merge.",
      },
      {
        icon: Users,
        title: "Team Handover & Training",
        desc: "Runbooks and a working session for your developers, so the team can operate the pipeline confidently.",
      },
    ],
  },
  {
    id: "ops",
    label: "Monitoring & Security",
    full: "Monitoring, Security & Managed Support",
    summary:
      "Keep your product fast, safe and available, with a team watching it when yours is not.",
    solutions: [
      {
        icon: Activity,
        title: "Monitoring & Dashboards",
        desc: "Server, application and database metrics on live dashboards using Grafana, Prometheus or cloud-native tools.",
      },
      {
        icon: Eye,
        title: "Logs & Tracing",
        desc: "Centralised logs and traces, so finding the cause of an error takes minutes instead of hours.",
      },
      {
        icon: Siren,
        title: "Alerts & On-Call",
        desc: "Alerts reach the right person on WhatsApp, email or phone, with clear steps for what to do next.",
      },
      {
        icon: ShieldCheck,
        title: "Security Hardening",
        desc: "Firewalls, access policies, vulnerability scans and patching based on recognised cloud security practices.",
      },
      {
        icon: Lock,
        title: "Access & Identity",
        desc: "Role-based access, multi-factor login and audit trails, so you always know who changed what.",
      },
      {
        icon: HardDrive,
        title: "Backup & Disaster Recovery",
        desc: "Scheduled backups, cross-region copies and recovery drills so you know a restore works before you need one.",
      },
      {
        icon: Gauge,
        title: "Performance Tuning",
        desc: "Caching, database tuning and load testing to keep response times low as usage grows.",
      },
      {
        icon: LifeBuoy,
        title: "Managed DevOps Support",
        desc: "Monthly support from our engineers for monitoring, updates, incidents and improvements.",
      },
    ],
  },
];

/* Delivery flow */
const flow = [
  { icon: GitBranch, title: "Code", desc: "A developer pushes a change to the repository." },
  { icon: Workflow, title: "Build & Test", desc: "The pipeline builds, tests and scans it automatically." },
  { icon: Rocket, title: "Deploy", desc: "The release goes live with no downtime." },
  { icon: Activity, title: "Monitor", desc: "Dashboards and alerts watch it, with rollback ready." },
];

const techGroups = [
  {
    label: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean", "Cloudflare", "On-premise / hybrid"],
  },
  {
    label: "Containers & IaC",
    icon: Container,
    items: ["Docker", "Kubernetes", "Helm", "Terraform", "Ansible", "AWS CloudFormation"],
  },
  {
    label: "CI/CD & Code",
    icon: Code2,
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "SonarQube", "Trivy"],
  },
  {
    label: "Monitoring & Data",
    icon: Database,
    items: ["Prometheus", "Grafana", "ELK / Loki", "CloudWatch", "PostgreSQL / MySQL", "Redis"],
  },
];

const goodFor = [
  "Teams deploying by hand over FTP, SSH or copy and paste",
  "Products that slow down or go offline when traffic spikes",
  "Startups and companies with a growing or unpredictable cloud bill",
  "Businesses that need backups, security and monitoring but have no DevOps engineer",
];

const notIdeal = [
  "A small brochure website that works fine on ordinary hosting",
  "A product with very low traffic and no plans to grow",
  "A team that already has an experienced in-house DevOps engineer",
];

const packages = [
  {
    id: "cloud-setup",
    name: "Cloud Setup",
    price: "₹24,999+",
    time: "2–3 weeks",
    forWho: "Teams moving to the cloud or fixing a messy setup",
    popular: false,
    features: [
      "Cloud architecture on AWS, Azure or Google Cloud",
      "Server, database, storage and SSL setup",
      "Basic CI/CD pipeline for one application",
      "Automated daily backups",
      "Documentation and a handover session",
    ],
  },
  {
    id: "devops-business",
    name: "DevOps Business",
    price: "₹59,999+",
    time: "4–6 weeks",
    forWho: "Growing products that release often",
    popular: true,
    features: [
      "Everything in Cloud Setup, plus full DevOps",
      "Docker, staging and production environments",
      "Zero-downtime deploys with rollback",
      "Monitoring, alerts and security hardening",
      "60 days of post-launch support",
    ],
  },
  {
    id: "devops-enterprise",
    name: "Enterprise DevOps",
    price: "₹1,19,999+",
    time: "8–12 weeks",
    forWho: "Multi-service platforms with high availability needs",
    popular: false,
    features: [
      "Kubernetes, Terraform and multi-environment setup",
      "Auto-scaling, multi-region and disaster recovery",
      "Security audit, access policies and compliance controls",
      "Centralised logging, tracing and on-call alerts",
      "90 days of priority support",
    ],
  },
];

const steps = [
  {
    icon: Users,
    title: "Audit Your Setup",
    desc: "We review your servers, code flow, costs and risks today, and list what to fix first.",
  },
  {
    icon: PenTool,
    title: "Design The Architecture",
    desc: "We propose the cloud design, tools and cost estimate, and agree on it with you before building.",
  },
  {
    icon: Gauge,
    title: "Build, Migrate & Test",
    desc: "We build the infrastructure as code, set up pipelines, migrate your application and test failure and recovery.",
  },
  {
    icon: Rocket,
    title: "Handover & Support",
    desc: "We train your team, cut over with a rollback plan and stay available through the first weeks.",
  },
];

const included = [
  "Infrastructure audit and written architecture document",
  "Everything in your own cloud account, with admin access for you",
  "Infrastructure as code stored in your repository",
  "Monitoring dashboards and alerts to your phone or email",
  "Runbooks and a training session for your developers",
  "Estimated monthly cloud cost before we build",
];

const faqs = [
  {
    q: "Which cloud platform should I choose: AWS, Azure or Google Cloud?",
    a: "All three can run most products well. We recommend one based on your team's skills, your existing tools, data location needs and cost. We also work with simpler providers like DigitalOcean when a full hyperscaler would be more than you need.",
  },
  {
    q: "Will I own the cloud account and the setup?",
    a: "Yes. Everything is created in your own account, and the infrastructure code lives in your repository. We work with limited access that you can revoke at any time, so you are never locked in to us.",
  },
  {
    q: "Who pays the cloud provider's bill?",
    a: "You do, directly to the provider, based on what you use. Our fee is for design, setup and support. We give you an estimated monthly cost before we build, and we set budget alerts so the bill stays within the range you expect.",
  },
  {
    q: "Can you move our live application without downtime?",
    a: "In most cases, yes. We build the new environment alongside the old one, test it, and switch traffic over with a rollback plan ready. If your application needs a short maintenance window, we plan it for your quietest hours.",
  },
  {
    q: "Do we need Kubernetes?",
    a: "Not always. Many products run well on managed containers or simple servers. We recommend Kubernetes only when you have several services or scaling needs that justify the extra complexity.",
  },
  {
    q: "Do you offer ongoing support after setup?",
    a: "Yes. Every package includes post-launch support, and you can continue with monthly managed DevOps support for monitoring, updates, incident response and cost reviews.",
  },
];

/* Sample rows for the hero console (illustrative data) */
const sampleActivity = [
  { label: "Build #482 passed all tests", tag: "Passed", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Deployed v2.14 to production", tag: "Live", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Auto-scaled web servers 2 → 4", tag: "Scaled", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
  { label: "Nightly backup verified", tag: "Healthy", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const CloudDevopsService: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [setId, setSetId] = useState<string>(solutionSets[0].id);
  const activeSet = solutionSets.find((s) => s.id === setId) ?? solutionSets[0];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Layout>
      <main className="relative bg-white text-slate-900 pb-24 lg:pb-0">

        {/* ============ HERO SECTION ============ */}
        <section className="relative overflow-hidden border-b border-slate-200 pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#0057ff]/15 blur-[140px] sm:w-[900px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">

            {/* Left Content */}
            <div className="space-y-6 lg:col-span-7" data-aos="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Cloud size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Engineering • Enterprise Service 09</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                Cloud Infrastructure &amp; DevOps That{" "}
                <span className={gradText}>Ships Fast And Stays Up.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We design your cloud, automate your releases and watch your systems, so your team spends its time building features instead of fixing servers.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my cloud setup
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00f0ff]/60 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition-all hover:border-[#0057ff] hover:text-[#0057ff] shadow-xs"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-3">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${gradBg}`}
                    >
                      <Icon size={14} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Pipeline console */}
            <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="150">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#00f0ff]/30 via-[#0057ff]/20 to-transparent blur-3xl pointer-events-none"
                />

                <div className="relative rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 text-white shadow-[0_25px_70px_rgba(0,87,255,0.25)] backdrop-blur-xl">

                  {/* Window header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-cyan-400">
                      <Cpu size={12} />
                      <span>Cloud + DevOps Console</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <Rocket size={14} />
                        <span>Deploys today</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">9</p>
                      <p className="text-[10px] text-slate-400">Pipeline · all green</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Server size={14} />
                        <span>Servers</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">4</p>
                      <p className="text-[10px] text-slate-400">Cloud · auto-scaling on</p>
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Bell size={14} />
                        <span>Pipeline activity</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Sample data
                      </span>
                    </div>
                    <ul className="space-y-2.5 text-[11px]">
                      {sampleActivity.map((a) => (
                        <li key={a.label} className="flex items-center justify-between gap-3">
                          <span className="text-slate-300">{a.label}</span>
                          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] ${a.tone}`}>
                            {a.tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom bar */}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>Encrypted &amp; Monitored</span>
                    </span>
                    <span className="text-cyan-400 font-bold">Your Account, Your Code</span>
                  </div>
                </div>

                {/* Floating tag */}
                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>2–12 Weeks</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    Depending On Scope
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ============ BENEFITS SECTION ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Why invest in cloud and DevOps
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                What a solid foundation does for your product
              </h2>
              <p className="mt-3 text-slate-600">
                Faster releases, fewer outages and a cloud bill that makes sense.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 60}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0057ff] hover:shadow-[0_12px_32px_rgba(0,87,255,0.18)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00f0ff]/40 bg-gradient-to-br from-[#00f0ff]/15 to-[#0057ff]/15 text-[#0057ff] transition-all group-hover:scale-110 group-hover:from-[#00f0ff] group-hover:to-[#0057ff] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-1.5 font-display text-lg font-bold group-hover:text-[#0057ff]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SOLUTIONS EXPLORER ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                All solutions we build
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Everything in cloud and DevOps
              </h2>
              <p className="mt-3 text-slate-600">
                Switch between infrastructure, automation and operations. Pick the solutions you need.
              </p>
            </div>

            <div className="mb-8 flex justify-center" data-aos="fade-up">
              <div
                role="tablist"
                aria-label="Solution type"
                className="inline-flex flex-wrap justify-center rounded-2xl border border-slate-200 bg-slate-50 p-1.5"
              >
                {solutionSets.map((s) => {
                  const active = s.id === setId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSetId(s.id)}
                      className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all active:scale-95 sm:px-6 ${
                        active
                          ? `text-white shadow-[0_4px_16px_rgba(0,87,255,0.3)] ${gradBg}`
                          : "text-slate-700 hover:text-[#0057ff]"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div role="tabpanel">
              <div className="mx-auto mb-8 max-w-2xl text-center">
                <h3 className="font-display text-xl font-bold">{activeSet.full}</h3>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">{activeSet.summary}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {activeSet.solutions.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={`${activeSet.id}-${title}`}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-[#0057ff]/60 hover:bg-white hover:shadow-md"
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                      <Icon size={19} />
                    </div>
                    <h4 className="font-display text-base font-bold">{title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ DELIVERY FLOW ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Better together
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                From code commit to live monitoring
              </h2>
              <p className="mt-3 text-slate-600">
                Once cloud and pipeline are designed together, every change moves to production the same safe way.
              </p>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="flip-up"
                  data-aos-delay={i * 100}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white ${gradBg}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                  {i < flow.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      size={18}
                      className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white text-[#0057ff] lg:block"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ TECHNOLOGY ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Technology we use
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Proven tools behind your infrastructure
              </h2>
              <p className="mt-3 text-slate-600">
                We recommend a focused stack for your project. You will not need all of these.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {techGroups.map(({ label, icon: Icon, items }, i) => (
                <div
                  key={label}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                      <Icon size={19} />
                    </span>
                    <h3 className="font-display text-lg font-bold">{label}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold text-slate-800 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ IS THIS FOR YOU SECTION ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Is this the right fit for your product?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Ideal For Cloud / DevOps Services
                </p>
                <ul className="space-y-3">
                  {goodFor.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium">
                      <Check size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" data-aos="fade-left">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Better With Simple Hosting
                </p>
                <ul className="space-y-3">
                  {notIdeal.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                      <X size={18} className="mt-0.5 shrink-0 text-slate-400" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0057ff] hover:underline"
                >
                  Consult with our engineers <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING PACKAGES ============ */}
        <section id="pricing" className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Transparent Investment
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Simple packages. Pick what fits your stage.
              </h2>
              <p className="mt-3 text-slate-600">
                Prices are one-time starting points for setup. Cloud provider usage is billed to you directly, and optional monthly support is quoted separately.
              </p>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {packages.map((pkg, idx) => (
                <div
                  key={pkg.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className={`relative flex flex-col rounded-3xl bg-white p-6 sm:p-8 transition-all ${
                    pkg.popular
                      ? "border-2 border-[#0057ff] shadow-[0_16px_48px_rgba(0,87,255,0.25)] lg:-translate-y-3"
                      : "border border-slate-200 hover:border-[#0057ff]/60 hover:shadow-lg"
                  }`}
                >
                  {pkg.popular && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white ${gradBg}`}
                    >
                      Most popular choice
                    </span>
                  )}

                  <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{pkg.forWho}</p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className={`font-display text-4xl font-black ${gradText}`}>
                      {pkg.price}
                    </span>
                    <span className="mb-1 flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={12} /> {pkg.time}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}
                        >
                          <Check size={12} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/proposal?type=${PROPOSAL_TYPE}&package=${pkg.id}`}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all active:scale-95 ${
                      pkg.popular
                        ? `text-white shadow-[0_6px_22px_rgba(0,87,255,0.35)] hover:brightness-105 ${gradBg}`
                        : "border border-[#00f0ff]/60 text-slate-800 hover:border-[#0057ff] hover:text-[#0057ff]"
                    }`}
                  >
                    Choose {pkg.name}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS SECTION ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Execution Workflow
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                From first call to production in 4 steps
              </h2>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={i * 75}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <span className={`absolute right-5 top-4 font-display text-4xl font-black opacity-30 ${gradText}`}>
                    0{i + 1}
                  </span>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white ${gradBg}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-1.5 font-display text-lg font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ INCLUDED ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2
              className="mb-8 text-center font-display text-2xl font-black tracking-tight sm:text-3xl"
              data-aos="fade-up"
            >
              Every cloud / DevOps project includes
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {included.map((t, i) => (
                <li
                  key={t}
                  data-aos="fade-up"
                  data-aos-delay={(i % 2) * 80}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
                >
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
                    <Check size={12} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ FAQ SECTION ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen ? "border-[#0057ff]/60 bg-white shadow-md" : "border-slate-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-bold sm:text-base">{f.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#0057ff] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA SECTION ============ */}
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div
            data-aos="zoom-in"
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#020b24] via-[#04215f] to-[#0057ff] px-6 py-14 text-center text-white sm:px-12 shadow-2xl"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#00f0ff]/30 blur-[90px]" />
            <div className="relative space-y-5">
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl text-balance">
                Ready to stop worrying about servers and releases?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us what you run today and where it hurts. We will reply with an audit summary, a suggested architecture and a fixed quote.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0057ff] shadow-lg transition-all hover:bg-slate-100 active:scale-95 sm:w-auto"
                >
                  Start my project <ArrowRight size={16} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur transition-all hover:bg-white/20 sm:w-auto"
                >
                  <MessageCircle size={16} /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MOBILE STICKY BAR ============ */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden shadow-lg">
          <div className="mx-auto flex max-w-md items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00f0ff]/60 text-[#0057ff]"
            >
              <MessageCircle size={20} />
            </a>
            <Link
              to={`/proposal?type=${PROPOSAL_TYPE}`}
              className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,87,255,0.35)] active:scale-95 ${gradBg}`}
            >
              Get my cloud setup <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default CloudDevopsService;