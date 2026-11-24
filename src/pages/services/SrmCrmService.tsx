import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Users,
  Target,
  Megaphone,
  FileText,
  Headphones,
  BarChart3,
  Truck,
  ClipboardList,
  Star,
  ShieldCheck,
  Package,
  Wallet,
  Layers,
  Plug,
  Bell,
  Repeat,
  Cpu,
  Code2,
  Server,
  Database,
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
  "Hi TechSasi, I want a CRM / SRM system for my business. Can we discuss the solutions, tech stack and timeline?";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* Proposal form type used by every "Get my CRM" button */
const PROPOSAL_TYPE = "crm-srm";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Layers, text: "CRM, SRM or both in one system" },
  { icon: Clock, text: "First version in 4–6 weeks" },
  { icon: ShieldCheck, text: "You own the source code" },
];

const benefits = [
  {
    icon: Users,
    title: "Every Customer In One Place",
    desc: "Calls, chats, quotes, orders and payments sit on one customer record, so anyone on your team can pick up where the last person stopped.",
  },
  {
    icon: Target,
    title: "No Lead Gets Forgotten",
    desc: "Leads are assigned automatically, follow-ups are scheduled, and reminders reach your team before a prospect goes cold.",
  },
  {
    icon: Truck,
    title: "Suppliers Managed, Not Chased",
    desc: "Quotations, purchase orders, deliveries and payments for each supplier are tracked in one view instead of scattered across chats and emails.",
  },
  {
    icon: Star,
    title: "Know Who Performs",
    desc: "Scorecards show which salespeople close deals and which suppliers deliver on time and at the agreed quality.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp, Email & Call Ready",
    desc: "Send quotes, reminders and updates on WhatsApp or email from inside the system, and keep every message on record.",
  },
  {
    icon: BarChart3,
    title: "Dashboards That Answer Questions",
    desc: "Pipeline value, conversion rate, pending purchase orders and supplier delays, visible to owners on desktop or phone.",
  },
];

/* CRM and SRM solution sets (the explorer) */
const solutionSets = [
  {
    id: "crm",
    label: "CRM",
    full: "Customer Relationship Management",
    summary:
      "Win more customers and keep them longer, with one system for everyone who talks to your customers.",
    solutions: [
      {
        icon: Target,
        title: "Lead Management",
        desc: "Capture leads from your website, forms, WhatsApp and calls, then assign them to the right person automatically.",
      },
      {
        icon: BarChart3,
        title: "Sales Pipeline",
        desc: "Drag deals across stages, see expected value and spot stuck deals before they are lost.",
      },
      {
        icon: Users,
        title: "Contacts & Accounts",
        desc: "Complete customer profiles with history, notes, documents and every conversation in one timeline.",
      },
      {
        icon: FileText,
        title: "Quotations & Invoices",
        desc: "Create branded quotes with GST, send them for approval and convert accepted quotes into invoices.",
      },
      {
        icon: Megaphone,
        title: "Campaigns & Follow-ups",
        desc: "Send WhatsApp and email campaigns to segments, schedule follow-ups and track who responded.",
      },
      {
        icon: Headphones,
        title: "Support & Service Tickets",
        desc: "Log complaints and requests as tickets, assign them, set response targets and track resolution.",
      },
      {
        icon: Repeat,
        title: "Renewals & Repeat Orders",
        desc: "Automatic reminders for renewals, AMC dates and re-orders so repeat revenue is not missed.",
      },
      {
        icon: Package,
        title: "Customer Portal",
        desc: "Let customers log in to view quotes, orders, invoices and raise support requests themselves.",
      },
    ],
  },
  {
    id: "srm",
    label: "SRM",
    full: "Supplier Relationship Management",
    summary:
      "Buy better and avoid delays, with one system for every supplier, order and payment.",
    solutions: [
      {
        icon: Users,
        title: "Supplier Onboarding",
        desc: "Collect supplier details, GST and bank information, and documents through one approval flow.",
      },
      {
        icon: ClipboardList,
        title: "RFQ & Quote Comparison",
        desc: "Send a request to several suppliers and compare their prices, terms and delivery times side by side.",
      },
      {
        icon: FileText,
        title: "Purchase Orders",
        desc: "Raise purchase orders with approval levels, send them to suppliers and track confirmation.",
      },
      {
        icon: Truck,
        title: "Delivery & Goods Receipt",
        desc: "Track expected delivery dates, record goods received and flag shortages or damaged items.",
      },
      {
        icon: Star,
        title: "Supplier Scorecards",
        desc: "Rate suppliers on on-time delivery, quality and pricing so you know who deserves more business.",
      },
      {
        icon: Wallet,
        title: "Invoice Matching & Payments",
        desc: "Match supplier invoices to orders and receipts, then schedule payments by due date.",
      },
      {
        icon: ShieldCheck,
        title: "Contracts & Compliance",
        desc: "Store contracts and certificates, with expiry alerts so nothing lapses without notice.",
      },
      {
        icon: Package,
        title: "Supplier Portal",
        desc: "Suppliers log in to view orders, confirm deliveries, upload invoices and check payment status.",
      },
    ],
  },
];

/* How CRM and SRM connect */
const flow = [
  { icon: Target, title: "Lead", desc: "A customer enquires and is assigned to your team." },
  { icon: FileText, title: "Quotation", desc: "You send a quote and the customer accepts." },
  { icon: Package, title: "Purchase", desc: "Stock or materials needed are ordered from suppliers." },
  { icon: Truck, title: "Delivery", desc: "Supplier delivers, and the customer is updated." },
];

const techGroups = [
  {
    label: "Frontend",
    icon: Code2,
    items: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Node.js", "Python (Django / FastAPI)", "Java (Spring Boot)", ".NET Core", "PHP (Laravel)", "Ruby on Rails"],
  },
  {
    label: "Database & Cloud",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS / Azure / Google Cloud", "Docker"],
  },
  {
    label: "Integrations",
    icon: Plug,
    items: ["WhatsApp Business API", "Email / SMTP", "Call & IVR providers", "Razorpay / Stripe", "Tally", "Google Sheets / Excel"],
  },
];

const goodFor = [
  "Sales teams tracking leads in Excel, WhatsApp chats or notebooks",
  "Businesses with many suppliers and frequent purchase orders",
  "Distributors, manufacturers and service companies with repeat customers",
  "Teams that want sales and purchasing connected to billing or ERP",
];

const notIdeal = [
  "A very small business with fewer than a handful of customers and suppliers",
  "A business whose process is standard enough for ready-made CRM software",
  "A public website or online store with no internal team to manage",
];

const packages = [
  {
    id: "crm-starter",
    name: "CRM Starter",
    price: "₹29,999+",
    time: "4–6 weeks",
    forWho: "Small sales teams moving off spreadsheets",
    popular: false,
    features: [
      "Lead, contact and sales pipeline management",
      "Quotations with GST and PDF export",
      "Follow-up reminders and activity history",
      "Up to 5 users with role-based access",
      "Basic sales dashboard",
    ],
  },
  {
    id: "crm-srm-business",
    name: "CRM + SRM Business",
    price: "₹64,999+",
    time: "8–12 weeks",
    forWho: "Growing businesses that sell and buy daily",
    popular: true,
    features: [
      "Everything in CRM Starter, plus full SRM",
      "RFQ, purchase orders and goods receipt",
      "Supplier scorecards and approval workflows",
      "WhatsApp and email integration",
      "60 days of post-launch support",
    ],
  },
  {
    id: "crm-srm-enterprise",
    name: "Enterprise CRM + SRM",
    price: "₹1,24,999+",
    time: "12–20 weeks",
    forWho: "Multi-team and multi-branch operations",
    popular: false,
    features: [
      "Customer and supplier portals",
      "Custom workflows, approvals and automation",
      "ERP, Tally and accounting integrations",
      "Advanced reports and scheduled summaries",
      "90 days of priority support",
    ],
  },
];

const steps = [
  {
    icon: Users,
    title: "Understand Your Process",
    desc: "We learn how your team handles leads, customers and suppliers today and where time is lost.",
  },
  {
    icon: PenTool,
    title: "Design The Workflow",
    desc: "We design stages, roles, approvals and screens, and share a clickable prototype for your feedback.",
  },
  {
    icon: Gauge,
    title: "Build, Connect & Test",
    desc: "We build the system, import your existing contacts and suppliers, connect WhatsApp and email, and test with real cases.",
  },
  {
    icon: Rocket,
    title: "Train & Launch",
    desc: "We train your team, go live in stages and stay available while everyone gets comfortable.",
  },
];

const included = [
  "Requirement workshop and written scope document",
  "Role-based access with a full activity log",
  "Import of your existing contacts, leads and suppliers",
  "WhatsApp, email and notification setup",
  "Dashboards and Excel or PDF report exports",
  "Full source code ownership with documentation",
];

const faqs = [
  {
    q: "What is the difference between CRM and SRM?",
    a: "CRM (Customer Relationship Management) manages everything on the selling side: leads, customers, quotations and support. SRM (Supplier Relationship Management) manages the buying side: suppliers, purchase orders, deliveries and payments. You can build either one on its own or both together.",
  },
  {
    q: "Do I need both CRM and SRM?",
    a: "Not necessarily. Many businesses start with CRM to organise sales, and add SRM once purchasing becomes hard to track. Because both share the same database, adding the second one later is simple.",
  },
  {
    q: "Can customers and suppliers log in themselves?",
    a: "Yes. The Enterprise package includes a customer portal and a supplier portal. Customers can check quotes, orders and invoices, and suppliers can confirm orders, upload invoices and see payment status.",
  },
  {
    q: "Can it send WhatsApp messages and emails?",
    a: "Yes. We connect the WhatsApp Business API and email so you can send quotes, reminders and order updates from inside the system. The messages are saved on the customer or supplier record.",
  },
  {
    q: "Can you connect it to our billing, Tally or ERP?",
    a: "Yes. We can sync customers, invoices and purchase data with Tally, an ERP or other accounting tools so nothing needs to be typed twice.",
  },
  {
    q: "Will you move our existing data in?",
    a: "Yes. We import contacts, leads and supplier lists from Excel, Google Sheets or your current software, and check the results with you before go-live.",
  },
];

/* Sample rows for the hero console (illustrative data) */
const sampleActivity = [
  { label: "New lead assigned", tag: "Hot", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Quotation sent to customer", tag: "Sent", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Purchase order confirmed", tag: "Supplier", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
  { label: "Delivery received", tag: "On time", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const CrmSrmService: React.FC = () => {
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
                <Users size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Engineering • Enterprise Service 06</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                CRM &amp; SRM Software That{" "}
                <span className={gradText}>Connects Your Customers And Suppliers.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Manage leads, quotes and support on the selling side, and suppliers, purchase orders and payments on the buying side, all in one system built around how your team works.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my CRM / SRM
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

            {/* Right Side: CRM + SRM console */}
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
                      <span>CRM + SRM Console</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <Target size={14} />
                        <span>Open leads</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">38</p>
                      <p className="text-[10px] text-slate-400">CRM · follow-ups due today</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Truck size={14} />
                        <span>Open POs</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">14</p>
                      <p className="text-[10px] text-slate-400">SRM · awaiting delivery</p>
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Bell size={14} />
                        <span>Today&apos;s activity</span>
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
                      <span>Role-Based Access</span>
                    </span>
                    <span className="text-cyan-400 font-bold">100% Code Ownership</span>
                  </div>
                </div>

                {/* Floating tag */}
                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>4–20 Weeks</p>
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
                Why build a custom CRM / SRM
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                What your system will do for your business
              </h2>
              <p className="mt-3 text-slate-600">
                Fewer missed follow-ups, fewer late deliveries and one clear picture of both sides of your business.
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

        {/* ============ SOLUTIONS EXPLORER (CRM / SRM) ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                All solutions we build
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Everything in CRM and SRM
              </h2>
              <p className="mt-3 text-slate-600">
                Switch between the selling side and the buying side. Pick the solutions you need.
              </p>
            </div>

            <div className="mb-8 flex justify-center" data-aos="fade-up">
              <div
                role="tablist"
                aria-label="Solution type"
                className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1.5"
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
                      className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all active:scale-95 ${
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

        {/* ============ CRM + SRM FLOW ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Better together
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                From customer enquiry to supplier delivery
              </h2>
              <p className="mt-3 text-slate-600">
                When CRM and SRM share one database, a sale automatically triggers the purchase it needs.
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
                Proven tools behind your CRM / SRM
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
              Is this the right fit for your project?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Ideal For Custom CRM / SRM
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
        <section id="pricing" className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Transparent Investment
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Simple packages. Pick what fits your team.
              </h2>
              <p className="mt-3 text-slate-600">
                Prices are starting points. We confirm a fixed quote after understanding your process.
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
                From first call to go-live in 4 steps
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
              Every CRM / SRM project includes
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
                Ready to organise your customers and suppliers?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us how your team handles leads and purchasing today. We will reply with a solution plan, a suggested stack and a fixed quote.
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
              Get my CRM / SRM <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default CrmSrmService;