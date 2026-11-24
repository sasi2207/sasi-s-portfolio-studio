import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Package,
  Wallet,
  Users,
  FileText,
  BarChart3,
  Truck,
  Settings,
  Layers,
  ShieldCheck,
  Plug,
  Database,
  Server,
  Cloud,
  Code2,
  Cpu,
  MessageCircle,
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  Rocket,
  PenTool,
  Gauge,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I want a custom ERP system for my business. Can we discuss the modules, tech stack and timeline?";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* Proposal form type used by every "Get my ERP" button */
const PROPOSAL_TYPE = "erp";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Layers, text: "Modular: pay only for what you need" },
  { icon: Clock, text: "First module live in 6–8 weeks" },
  { icon: ShieldCheck, text: "You own the source code" },
];

const benefits = [
  {
    icon: Settings,
    title: "Built Around Your Process",
    desc: "We map how your team actually works, then build screens and rules to match, instead of forcing you into a fixed template.",
  },
  {
    icon: Layers,
    title: "One System, Every Department",
    desc: "Sales, stock, purchase, accounts and HR share one database, so nobody re-types data or reconciles spreadsheets.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access & Audit Trail",
    desc: "Each person sees only what their role allows, and every change is logged with who made it and when.",
  },
  {
    icon: FileText,
    title: "GST-Ready Invoicing & Reports",
    desc: "CGST, SGST and IGST are handled in billing, with returns-ready reports your accountant can use directly.",
  },
  {
    icon: Plug,
    title: "Connects To Your Existing Tools",
    desc: "Link payment gateways, Tally, WhatsApp, SMS, email and courier services so data flows without manual work.",
  },
  {
    icon: BarChart3,
    title: "Live Dashboards For Owners",
    desc: "Sales, stock levels, pending payments and team performance in one view, on desktop or phone.",
  },
];

const modules = [
  {
    icon: Package,
    title: "Inventory & Warehouse",
    desc: "Multi-location stock, batch and serial tracking, reorder alerts and stock transfers.",
  },
  {
    icon: FileText,
    title: "Sales & Billing",
    desc: "Quotations, orders, GST invoices, credit notes and payment tracking.",
  },
  {
    icon: Truck,
    title: "Purchase & Vendors",
    desc: "Purchase orders, goods receipts, vendor ledgers and payment schedules.",
  },
  {
    icon: Wallet,
    title: "Accounts & Finance",
    desc: "Ledgers, expenses, receivables, payables and profit and loss summaries.",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    desc: "Employee records, attendance, leave, salary slips and statutory deductions.",
  },
  {
    icon: Users,
    title: "CRM & Customer Portal",
    desc: "Leads, follow-ups, customer history and a portal where clients view orders and invoices.",
  },
  {
    icon: Settings,
    title: "Production & Job Work",
    desc: "Bills of materials, work orders, material consumption and finished-goods entry.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Custom reports, scheduled email summaries and exports to Excel and PDF.",
  },
];

/* Full technology stack, grouped by layer */
const techGroups = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    summary: "The screens your team uses every day: fast tables, forms and dashboards.",
    items: [
      { name: "React.js", note: "Component-based dashboards" },
      { name: "Next.js", note: "Server rendering and routing" },
      { name: "Angular", note: "Large, structured enterprise apps" },
      { name: "Vue.js", note: "Lightweight, quick-to-build UIs" },
      { name: "TypeScript", note: "Safer, easier-to-maintain code" },
      { name: "Tailwind CSS", note: "Consistent, responsive styling" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    summary: "The business logic and APIs. We choose the language that fits your team and workload.",
    items: [
      { name: "Node.js", note: "Express · NestJS" },
      { name: "Python", note: "Django · FastAPI" },
      { name: "Java", note: "Spring Boot" },
      { name: ".NET", note: "ASP.NET Core · C#" },
      { name: "PHP", note: "Laravel" },
      { name: "Ruby", note: "Ruby on Rails" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    summary: "Reliable storage for transactions, plus fast caching and search where it helps.",
    items: [
      { name: "PostgreSQL", note: "Primary relational database" },
      { name: "MySQL", note: "Widely hosted relational option" },
      { name: "SQL Server", note: "For Microsoft-based setups" },
      { name: "MongoDB", note: "Flexible document data" },
      { name: "Redis", note: "Caching and queues" },
      { name: "Elasticsearch", note: "Fast search across records" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    summary: "Secure hosting, automated releases and backups so the system stays available.",
    items: [
      { name: "AWS", note: "Hosting, storage, backups" },
      { name: "Microsoft Azure", note: "Hosting and identity" },
      { name: "Google Cloud", note: "Hosting and analytics" },
      { name: "Docker", note: "Consistent deployments" },
      { name: "Kubernetes", note: "Scaling for larger setups" },
      { name: "GitHub Actions", note: "Automated build and release" },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: Plug,
    summary: "Connections to the services your business already depends on.",
    items: [
      { name: "Razorpay", note: "Online payments" },
      { name: "Stripe", note: "International payments" },
      { name: "Tally", note: "Accounting data sync" },
      { name: "GST API partners", note: "E-invoice and e-way bill" },
      { name: "WhatsApp Business API", note: "Customer and staff alerts" },
      { name: "Shiprocket / Delhivery", note: "Courier and tracking" },
    ],
  },
  {
    id: "security",
    label: "Security & Reports",
    icon: ShieldCheck,
    summary: "Protecting your data and turning it into reports people can act on.",
    items: [
      { name: "JWT / OAuth 2.0", note: "Secure login and sessions" },
      { name: "Role-Based Access", note: "Per-role permissions" },
      { name: "TLS Encryption", note: "Data protected in transit" },
      { name: "Automated Backups", note: "Scheduled and restorable" },
      { name: "Metabase / Power BI", note: "Dashboards and analysis" },
      { name: "PDF & Excel Export", note: "Reports your team can share" },
    ],
  },
];

const goodFor = [
  "Manufacturers, distributors and wholesalers managing stock and orders",
  "Growing retail and trading businesses with multiple branches",
  "Service companies that need billing, projects and HR in one place",
  "Businesses outgrowing spreadsheets, Tally exports or disconnected apps",
];

const notIdeal = [
  "A business that only needs simple billing (ready-made software costs less)",
  "A public website or online store with no internal operations to manage",
  "A one-person business with a handful of transactions a month",
];

const packages = [
  {
    id: "erp-starter",
    name: "ERP Starter",
    price: "₹59,999+",
    time: "6–8 weeks",
    forWho: "Small teams replacing spreadsheets",
    popular: false,
    features: [
      "2 core modules (for example Inventory + Billing)",
      "Up to 10 users with role-based access",
      "GST invoicing and basic reports",
      "Cloud hosting setup and daily backups",
      "Staff training session",
    ],
  },
  {
    id: "erp-business",
    name: "ERP Business",
    price: "₹1,29,999+",
    time: "10–14 weeks",
    forWho: "Growing companies with several departments",
    popular: true,
    features: [
      "Up to 5 modules, including HR or Accounts",
      "Custom workflows and approval steps",
      "Payment gateway, WhatsApp and Tally integrations",
      "Owner dashboard with scheduled reports",
      "60 days of post-launch support",
    ],
  },
  {
    id: "erp-enterprise",
    name: "ERP Enterprise",
    price: "₹2,49,999+",
    time: "16–24 weeks",
    forWho: "Multi-branch and multi-company operations",
    popular: false,
    features: [
      "Unlimited modules and custom features",
      "Multi-branch and multi-company support",
      "Data migration from your existing systems",
      "Scalable cloud setup with monitoring",
      "90 days of priority support",
    ],
  },
];

const steps = [
  {
    icon: Users,
    title: "Process Mapping",
    desc: "We sit with your team, map how work flows today and agree which problems the ERP must solve first.",
  },
  {
    icon: PenTool,
    title: "Design & Data Model",
    desc: "We design the screens, roles and database, and share a clickable prototype for your approval.",
  },
  {
    icon: Gauge,
    title: "Build, Integrate & Test",
    desc: "We build module by module, connect your tools, migrate existing data and test with your real scenarios.",
  },
  {
    icon: Rocket,
    title: "Training & Go-Live",
    desc: "We train your staff, launch in stages so work never stops, and support you through the first weeks.",
  },
];

const included = [
  "Requirement workshop and written scope document",
  "Role-based access and a full audit trail",
  "GST-ready billing, reports and PDF or Excel exports",
  "Data migration from Excel, Tally or your old software",
  "Secure cloud deployment with automated backups",
  "Full source code ownership with technical documentation",
];

const faqs = [
  {
    q: "Why build a custom ERP instead of buying ready-made software?",
    a: "Ready-made tools work well when your process is standard. A custom ERP makes sense when your workflow, approvals or reports are unusual, when you pay for many unused features, or when you need to connect tools that off-the-shelf software doesn't support. If a ready-made product fits you, we will say so.",
  },
  {
    q: "Can we start with one module and add more later?",
    a: "Yes. Most clients start with the department that hurts most, such as inventory or billing, and add modules over time. Everything shares one database, so new modules connect to the existing data.",
  },
  {
    q: "Will it handle GST?",
    a: "Yes. Billing supports CGST, SGST and IGST with HSN codes and GST-ready reports. E-invoicing and e-way bill generation can be connected through GST API partners.",
  },
  {
    q: "Can you move our existing data into the new system?",
    a: "Yes. We import customers, products, stock balances and open invoices from Excel, Tally exports or your current software, and check the totals with you before go-live.",
  },
  {
    q: "Which technology will you use for my ERP?",
    a: "It depends on your team, budget and scale. For example, React with Node.js or Python and PostgreSQL suits most businesses, Java or .NET suits companies already on those platforms, and Laravel is a cost-effective choice. We recommend a stack in the scope document.",
  },
  {
    q: "Do I own the software, and who hosts it?",
    a: "You own the source code and the data. We can host it on AWS, Azure or Google Cloud under your account, or on your own server, and we offer a maintenance plan after the support period ends.",
  },
];

/* Sample rows for the hero console (illustrative data) */
const sampleSync = [
  { module: "Inventory", status: "Synced", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { module: "Sales & Billing", status: "Synced", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { module: "Payroll", status: "Scheduled", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { module: "Tally export", status: "Ready", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const ErpSoftwareService: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [techId, setTechId] = useState<string>(techGroups[0].id);
  const activeTech = techGroups.find((g) => g.id === techId) ?? techGroups[0];

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
                <Layers size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Engineering • Enterprise Service 05</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                Custom ERP Software That{" "}
                <span className={gradText}>Runs Your Whole Business In One Place.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Inventory, billing, purchase, accounts and HR in one connected system, built around your process and your team. Start with one module and grow from there.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my ERP
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

            {/* Right Side: ERP control center */}
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
                      <span>ERP Control Center</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <FileText size={14} />
                        <span>Invoices today</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">46</p>
                      <p className="text-[10px] text-slate-400">GST-ready, auto-numbered</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Package size={14} />
                        <span>Stock alerts</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">12</p>
                      <p className="text-[10px] text-slate-400">Items below reorder level</p>
                    </div>
                  </div>

                  {/* Module status */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Layers size={14} />
                        <span>Module status</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Sample data
                      </span>
                    </div>
                    <ul className="space-y-2.5 text-[11px]">
                      {sampleSync.map((s) => (
                        <li key={s.module} className="flex items-center justify-between gap-3">
                          <span className="text-slate-300">{s.module}</span>
                          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] ${s.tone}`}>
                            {s.status}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom bar */}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>Role-Based Access</span>
                    </span>
                    <span className="text-cyan-400 font-bold">100% Code Ownership</span>
                  </div>
                </div>

                {/* Floating tag */}
                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>6–24 Weeks</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    Depending On Modules
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
                Why build a custom ERP
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                What your ERP will do for your business
              </h2>
              <p className="mt-3 text-slate-600">
                Less re-typing, fewer mistakes and one clear picture of the business.
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

        {/* ============ MODULES SECTION ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                ERP modules
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Choose the modules you need
              </h2>
              <p className="mt-3 text-slate-600">
                Start with one or two, then add more as your business grows. All modules share the same data.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {modules.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  data-aos="zoom-in"
                  data-aos-delay={(i % 4) * 80}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-[#0057ff]/60 hover:bg-white hover:shadow-md"
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                    <Icon size={19} />
                  </div>
                  <h3 className="font-display text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TECHNOLOGY EXPLORER ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Technology we use
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                The full stack behind your ERP
              </h2>
              <p className="mt-3 text-slate-600">
                We pick the right tool for each layer. Select a layer to see what we work with.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6" data-aos="fade-up">
              <div role="tablist" aria-label="Technology layers" className="flex flex-wrap gap-2">
                {techGroups.map(({ id, label, icon: Icon }) => {
                  const active = id === techId;
                  return (
                    <button
                      key={id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setTechId(id)}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all active:scale-95 ${
                        active
                          ? `text-white shadow-[0_4px_16px_rgba(0,87,255,0.3)] ${gradBg}`
                          : "border border-slate-200 bg-white text-slate-700 hover:border-[#0057ff] hover:text-[#0057ff]"
                      }`}
                    >
                      <Icon size={15} />
                      {label}
                    </button>
                  );
                })}
              </div>

              <div role="tabpanel" className="mt-6">
                <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {activeTech.summary}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {activeTech.items.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-[#0057ff]/60"
                    >
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
                        <Check size={12} />
                      </span>
                      <div>
                        <p className="font-mono text-sm font-bold text-slate-900">{t.name}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{t.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500" data-aos="fade-up">
              You will not need all of these. We recommend a focused stack in your scope document.
            </p>
          </div>
        </section>

        {/* ============ IS THIS FOR YOU SECTION ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Is this the right fit for your project?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Ideal For Custom ERP
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
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8" data-aos="fade-left">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Better With Ready-Made Or A Website
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
        <section id="pricing" className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Transparent Investment
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Simple packages. Pick what fits your business.
              </h2>
              <p className="mt-3 text-slate-600">
                Prices are starting points. We confirm a fixed quote after the requirement workshop.
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
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Execution Workflow
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                From first workshop to go-live in 4 steps
              </h2>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={i * 75}
                  className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-[#0057ff]/60 hover:shadow-md"
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
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2
              className="mb-8 text-center font-display text-2xl font-black tracking-tight sm:text-3xl"
              data-aos="fade-up"
            >
              Every ERP project includes
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {included.map((t, i) => (
                <li
                  key={t}
                  data-aos="fade-up"
                  data-aos-delay={(i % 2) * 80}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
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
        <section className="border-b border-slate-200 py-16 sm:py-24">
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
                      isOpen ? "border-[#0057ff]/60 bg-white shadow-md" : "border-slate-200 bg-slate-50"
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
                Ready to bring your business onto one system?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us which departments and tools you use today. We will reply with a module plan, a suggested stack and a fixed quote.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0057ff] shadow-lg transition-all hover:bg-slate-100 active:scale-95 sm:w-auto"
                >
                  Start my ERP <ArrowRight size={16} />
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
              Get my ERP <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default ErpSoftwareService;