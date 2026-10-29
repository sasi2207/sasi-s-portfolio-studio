import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Workflow, Boxes, Package, Users, Wallet, FileText, BarChart3, ShieldCheck,
  KeyRound, Bell, Smartphone, Plug, Database, RefreshCw, ClipboardCheck,
  Factory, Truck, ShoppingCart, Receipt, UserCog, Layers, Clock, Check, X,
  ChevronDown, ArrowRight, MessageCircle, Rocket, PenTool, Gauge, Cpu, Code2,
  Cloud, LifeBuoy, Eye,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I need a custom workflow ERP for my business. Can we discuss the modules, approvals and timeline?";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const PROPOSAL_TYPE = "custom-workflow-erp";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText = "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Workflow, text: "Built around your process" },
  { icon: Clock, text: "First module live in 4–6 weeks" },
  { icon: ShieldCheck, text: "You own the code and the data" },
];

const benefits = [
  { icon: Workflow, title: "Fits How You Work", desc: "Your approvals, stages and rules are built into the system, so your team stops bending to a generic tool." },
  { icon: ClipboardCheck, title: "Fewer Manual Steps", desc: "Orders, invoices and approvals move on their own, so people stop copying data between Excel sheets and WhatsApp groups." },
  { icon: Eye, title: "One Live View", desc: "Stock, sales, payments and tasks sit in one place, so owners see the real position without calling anyone." },
  { icon: KeyRound, title: "Right Access For Each Role", desc: "Every person sees and edits only what their role allows, with a full record of who changed what." },
  { icon: Layers, title: "Grows Module By Module", desc: "Start with the one process that hurts most, then add inventory, HR or accounts when you are ready." },
  { icon: Wallet, title: "No Per-User Licence Fees", desc: "You pay once to build it. Adding staff, branches or customers does not raise a monthly licence bill." },
];

const solutionSets = [
  {
    id: "core",
    label: "Core Modules",
    full: "Sales, Inventory & Accounts",
    summary: "The everyday business modules, configured to your products, pricing and paperwork.",
    solutions: [
      { icon: ShoppingCart, title: "Sales & Orders", desc: "Quotes, orders, delivery and customer history in one flow, with status visible to everyone involved." },
      { icon: Package, title: "Inventory & Stock", desc: "Multi-location stock, batch and serial tracking, low-stock alerts and stock transfers." },
      { icon: Truck, title: "Purchase & Vendors", desc: "Purchase requests, vendor quotes, approvals, goods receipt and payment tracking." },
      { icon: Receipt, title: "Billing & GST Invoices", desc: "GST-ready invoices, credit notes, payment reminders and customer ledgers." },
      { icon: Wallet, title: "Accounts & Payments", desc: "Expenses, receivables and payables with exports to Tally or your accountant." },
      { icon: Factory, title: "Production & Jobs", desc: "Work orders, bill of materials and stage tracking from raw material to finished goods." },
    ],
  },
  {
    id: "people",
    label: "People & Approvals",
    full: "HR, Tasks & Approval Workflows",
    summary: "Control how work and decisions move through your team, branch by branch.",
    solutions: [
      { icon: Workflow, title: "Custom Approval Flows", desc: "Multi-level approvals for leave, purchases, discounts or expenses, with limits you set." },
      { icon: UserCog, title: "HR & Attendance", desc: "Employee records, attendance, leave and payroll inputs, with mobile check-in if needed." },
      { icon: ClipboardCheck, title: "Task & Job Tracking", desc: "Assign work, set deadlines, track progress and escalate anything that is stuck." },
      { icon: Users, title: "Customer & Lead CRM", desc: "Leads, follow-ups, visits and customer records linked to orders and payments." },
      { icon: Bell, title: "Alerts & Reminders", desc: "WhatsApp, email and in-app alerts for pending approvals, due dates and low stock." },
      { icon: KeyRound, title: "Roles & Audit Trail", desc: "Role-based permissions and a full history of every edit, approval and deletion." },
    ],
  },
  {
    id: "insight",
    label: "Reports & Integrations",
    full: "Dashboards, Reports & Connections",
    summary: "See what is happening today, and connect the ERP to the tools you already use.",
    solutions: [
      { icon: BarChart3, title: "Owner Dashboards", desc: "Sales, stock, cash and pending work on one screen, updated live and ready on your phone." },
      { icon: FileText, title: "Custom Reports", desc: "The exact reports your team asks for, with filters and one-click export to Excel or PDF." },
      { icon: Plug, title: "Integrations & APIs", desc: "Connect payment gateways, WhatsApp, Tally, courier services, biometric devices and your website." },
      { icon: Database, title: "Data Migration", desc: "Clean your Excel sheets and old software data and move it into the new system safely." },
      { icon: Smartphone, title: "Mobile & Web Access", desc: "Use it on desktop, tablet or phone, for office staff, field teams and branch managers." },
      { icon: LifeBuoy, title: "Training & Support", desc: "Hands-on training for each team, user guides and monthly support after go-live." },
    ],
  },
];

const flow = [
  { icon: ClipboardCheck, title: "Request", desc: "A staff member raises an order, purchase or leave request." },
  { icon: Workflow, title: "Approve", desc: "The right managers approve it, based on your rules." },
  { icon: Package, title: "Process", desc: "Stock, billing and accounts update automatically." },
  { icon: BarChart3, title: "Track", desc: "Owners see status and reports live, with a full audit trail." },
];

const techGroups = [
  { label: "Frontend & Mobile", icon: Smartphone, items: ["React", "TypeScript", "Tailwind CSS", "React Native", "PWA"] },
  { label: "Backend & APIs", icon: Code2, items: ["Node.js", "NestJS", "Python / Django", "REST APIs", "Webhooks"] },
  { label: "Database & Storage", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "S3 Storage"] },
  { label: "Cloud & Security", icon: Cloud, items: ["AWS", "Docker", "Role-based Access", "Daily Backups", "SSL / Encryption"] },
];

const goodFor = [
  "Businesses running on Excel, paper registers and WhatsApp groups",
  "Teams where off-the-shelf ERP is too costly, too complex or does not fit",
  "Manufacturers, distributors, clinics and service companies with their own process",
  "Owners with several branches who want one live view of the business",
];

const notIdeal = [
  "A very small business whose needs are met by simple billing software",
  "A company happy with a ready ERP that already fits its process",
  "A team with no one to own the process or approve the requirements",
];

const packages = [
  {
    id: "erp-starter", name: "Workflow Starter", price: "₹59,999+", time: "4–6 weeks",
    forWho: "Small teams replacing Excel for one process", popular: false,
    features: [
      "1 to 2 modules, such as orders and inventory",
      "Up to 10 users with role-based access",
      "One approval workflow",
      "Basic dashboard and Excel/PDF reports",
      "30 days of post-launch support",
    ],
  },
  {
    id: "erp-business", name: "Business ERP", price: "₹1,49,999+", time: "8–12 weeks",
    forWho: "Growing companies running several departments", popular: true,
    features: [
      "4 to 6 connected modules",
      "Custom multi-level approval workflows",
      "GST billing, accounts and Tally export",
      "WhatsApp and email alerts, mobile access",
      "90 days of support and team training",
    ],
  },
  {
    id: "erp-enterprise", name: "Enterprise ERP", price: "₹3,99,999+", time: "4–6 months",
    forWho: "Multi-branch operations with complex needs", popular: false,
    features: [
      "Full custom suite across all departments",
      "Multi-branch, multi-warehouse and multi-company",
      "API integrations and data migration",
      "Advanced reports, audit trail and permissions",
      "6 months of priority support",
    ],
  },
];

const steps = [
  { icon: Users, title: "Map Your Process", desc: "We sit with your team, follow how work really moves today, and note every approval, sheet and delay." },
  { icon: PenTool, title: "Design The Workflow", desc: "We share screens, roles, approval rules and a fixed scope, and you sign off before we build." },
  { icon: Gauge, title: "Build, Migrate & Test", desc: "We build module by module, move your existing data, and your team tests each release." },
  { icon: Rocket, title: "Train & Go Live", desc: "We train every team, run both systems side by side for a short time, then cut over with support." },
];

const included = [
  "Process study and written requirements document",
  "Source code and database, owned by you",
  "Role-based access and a full audit trail",
  "Migration of your existing Excel or software data",
  "Training for every team and user guides",
  "Hosting setup with daily automated backups",
];

const faqs = [
  { q: "Why build a custom ERP instead of buying a ready one?", a: "A ready ERP is a good choice when your process matches it. A custom ERP is better when your approvals, pricing or production steps are unique, or when per-user licence fees and unused features cost you more than a one-time build." },
  { q: "Can we start small and add modules later?", a: "Yes, and we recommend it. We usually begin with the process that causes the most delay or loss, launch it in a few weeks, and add the next module once your team is comfortable." },
  { q: "Will I own the source code and the data?", a: "Yes. The code, database and hosting account belong to you. You are never locked in to us, and any developer can continue the work using the documentation we provide." },
  { q: "Can you move our existing Excel and Tally data?", a: "Yes. We clean and map your customers, items, opening stock and balances, test the import with you, and load the final data before go-live. Tally export is also supported." },
  { q: "How do you handle staff who resist a new system?", a: "We involve key users from the start, train each team on their own screens, and run old and new systems side by side briefly. Simple screens and mobile access also make adoption easier." },
  { q: "What happens after go-live?", a: "Every package includes a support period for fixes and questions. After that you can take a monthly support plan for updates, new reports and new modules, or manage it with your own developer." },
];

const sampleActivity = [
  { label: "PO #1042 approved by Finance", tag: "Approved", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Invoice INV-2381 sent to customer", tag: "Sent", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Stock low: Item A-204 at Chennai", tag: "Alert", tone: "text-amber-300 bg-amber-500/10 border-amber-500/20" },
  { label: "Leave request waiting for manager", tag: "Pending", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const CustomWorkflowErpService: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [setId, setSetId] = useState<string>(solutionSets[0].id);
  const activeSet = solutionSets.find((s) => s.id === setId) ?? solutionSets[0];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <Layout>
      <main className="relative bg-white text-slate-900 pb-24 lg:pb-0">

        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden border-b border-slate-200 pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#0057ff]/15 blur-[140px] sm:w-[900px]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-7" data-aos="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Workflow size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Engineering • Enterprise Service 11</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                Custom Workflow ERP Built{" "}
                <span className={gradText}>Around Your Business.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We turn your Excel sheets, paper registers and WhatsApp approvals into one ERP that follows your own process, so your team works faster and you see everything live.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my ERP plan
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
                  <li key={text} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${gradBg}`}>
                      <Icon size={14} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: ERP console */}
            <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="150">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div aria-hidden="true" className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#00f0ff]/30 via-[#0057ff]/20 to-transparent blur-3xl pointer-events-none" />

                <div className="relative rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 text-white shadow-[0_25px_70px_rgba(0,87,255,0.25)] backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-cyan-400">
                      <Cpu size={12} />
                      <span>Workflow ERP Console</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <ClipboardCheck size={14} />
                        <span>Open approvals</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">12</p>
                      <p className="text-[10px] text-slate-400">3 need action today</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Boxes size={14} />
                        <span>Modules live</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">6</p>
                      <p className="text-[10px] text-slate-400">Sales · Stock · HR · Accounts</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Bell size={14} />
                        <span>Workflow activity</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Sample data
                      </span>
                    </div>
                    <ul className="space-y-2.5 text-[11px]">
                      {sampleActivity.map((a) => (
                        <li key={a.label} className="flex items-center justify-between gap-3">
                          <span className="text-slate-300">{a.label}</span>
                          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] ${a.tone}`}>{a.tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>Role-based &amp; Audited</span>
                    </span>
                    <span className="text-cyan-400 font-bold">Your Code, Your Data</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>4 Weeks–6 Months</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Depending On Scope</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Why build a custom ERP</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">What a system built for you changes</h2>
              <p className="mt-3 text-slate-600">Less manual work, fewer mistakes and a clear view of your whole business.</p>
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
                  <h3 className="mb-1.5 font-display text-lg font-bold group-hover:text-[#0057ff]">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ MODULE EXPLORER ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>All modules we build</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Everything your ERP can include</h2>
              <p className="mt-3 text-slate-600">Switch between business, people and reporting modules. Pick only what you need.</p>
            </div>

            <div className="mb-8 flex justify-center" data-aos="fade-up">
              <div role="tablist" aria-label="Module type" className="inline-flex flex-wrap justify-center rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
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
                        active ? `text-white shadow-[0_4px_16px_rgba(0,87,255,0.3)] ${gradBg}` : "text-slate-700 hover:text-[#0057ff]"
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

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeSet.solutions.map(({ icon: Icon, title, desc }) => (
                  <div key={`${activeSet.id}-${title}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-[#0057ff]/60 hover:bg-white hover:shadow-md">
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

        {/* ============ WORKFLOW FLOW ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Better together</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">From request to live report</h2>
              <p className="mt-3 text-slate-600">When modules share one database, every action updates the rest automatically.</p>
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
                    <ArrowRight aria-hidden="true" size={18} className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white text-[#0057ff] lg:block" />
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
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Technology we use</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Proven tools behind your ERP</h2>
              <p className="mt-3 text-slate-600">We choose a stack your future developers can easily maintain.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {techGroups.map(({ label, icon: Icon, items }, i) => (
                <div key={label} data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                      <Icon size={19} />
                    </span>
                    <h3 className="font-display text-lg font-bold">{label}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span key={t} className="rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold text-slate-800 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FIT ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Is a custom ERP the right fit for you?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Ideal For Custom ERP</p>
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
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Better With Ready Software</p>
                <ul className="space-y-3">
                  {notIdeal.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                      <X size={18} className="mt-0.5 shrink-0 text-slate-400" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0057ff] hover:underline">
                  Consult with our engineers <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section id="pricing" className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Transparent Investment</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Simple packages. Pick what fits your stage.</h2>
              <p className="mt-3 text-slate-600">
                Prices are one-time starting points for build. Final quote depends on modules and integrations. Hosting is billed to you directly, and monthly support is optional.
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
                    <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white ${gradBg}`}>
                      Most popular choice
                    </span>
                  )}

                  <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{pkg.forWho}</p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className={`font-display text-4xl font-black ${gradText}`}>{pkg.price}</span>
                    <span className="mb-1 flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={12} /> {pkg.time}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
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

        {/* ============ HOW IT WORKS ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Execution Workflow</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">From first call to go-live in 4 steps</h2>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={i * 75}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <span className={`absolute right-5 top-4 font-display text-4xl font-black opacity-30 ${gradText}`}>0{i + 1}</span>
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
            <h2 className="mb-8 text-center font-display text-2xl font-black tracking-tight sm:text-3xl" data-aos="fade-up">
              Every custom ERP project includes
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

        {/* ============ FAQ ============ */}
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
                      <ChevronDown size={18} className={`shrink-0 text-[#0057ff] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div
            data-aos="zoom-in"
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#020b24] via-[#04215f] to-[#0057ff] px-6 py-14 text-center text-white sm:px-12 shadow-2xl"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#00f0ff]/30 blur-[90px]" />
            <div className="relative space-y-5">
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl text-balance">
                Ready to replace Excel and WhatsApp with one system?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us how your business runs today and where it slows down. We will reply with a module plan, a workflow map and a fixed quote.
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
              Get my ERP plan <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default CustomWorkflowErpService;