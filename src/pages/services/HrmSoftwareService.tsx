import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Users,
  UserPlus,
  Fingerprint,
  CalendarDays,
  CalendarCheck,
  Wallet,
  Calculator,
  Receipt,
  Landmark,
  FileCheck,
  FileText,
  Briefcase,
  GraduationCap,
  Smartphone,
  MapPin,
  BarChart3,
  ShieldCheck,
  Layers,
  Plug,
  Bell,
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
  "Hi TechSasi, I want an HRM and Auto Payroll system for my company. Can we discuss the features, tech stack and timeline?";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* Proposal form type used by every "Get my HRM" button */
const PROPOSAL_TYPE = "hrm-payroll";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Layers, text: "HRM and payroll in one system" },
  { icon: Clock, text: "First version in 4–6 weeks" },
  { icon: ShieldCheck, text: "You own the source code" },
];

const benefits = [
  {
    icon: Users,
    title: "Every Employee In One Place",
    desc: "Personal details, documents, job history, leave balance and payslips sit on one employee record that HR can open in seconds.",
  },
  {
    icon: Fingerprint,
    title: "Attendance Without Manual Entry",
    desc: "Biometric, mobile check-in or web punch data flows straight into the system, so no one re-types attendance at month end.",
  },
  {
    icon: Calculator,
    title: "Payroll That Runs Itself",
    desc: "Salary, overtime, loss of pay, PF, ESI, professional tax and TDS are calculated automatically from attendance and leave.",
  },
  {
    icon: Receipt,
    title: "Payslips Sent Automatically",
    desc: "Payslips are generated as PDFs and delivered to each employee on WhatsApp or email as soon as payroll is approved.",
  },
  {
    icon: Landmark,
    title: "Statutory Compliance Built In",
    desc: "PF, ESI, PT and TDS returns, challans and Form 16 are prepared from the same payroll data, with due-date reminders.",
  },
  {
    icon: BarChart3,
    title: "Reports Owners Actually Use",
    desc: "Headcount, attrition, payroll cost by department and attendance trends, available on desktop or phone.",
  },
];

/* HRM and Payroll solution sets (the explorer) */
const solutionSets = [
  {
    id: "hrm",
    label: "HRM",
    full: "Human Resource Management",
    summary:
      "Manage the whole employee journey, from hiring to exit, in one system your HR team and staff both use.",
    solutions: [
      {
        icon: UserPlus,
        title: "Recruitment & Onboarding",
        desc: "Track candidates by stage, schedule interviews, send offer letters and collect joining documents online.",
      },
      {
        icon: Users,
        title: "Employee Database",
        desc: "Complete profiles with documents, job history, bank details and emergency contacts, with role-based access.",
      },
      {
        icon: Fingerprint,
        title: "Attendance & Shifts",
        desc: "Sync biometric devices, allow mobile check-in with GPS, and manage shifts, late marks and overtime.",
      },
      {
        icon: CalendarDays,
        title: "Leave Management",
        desc: "Configure leave types and holidays, let employees apply from their phone and approve in one tap.",
      },
      {
        icon: Briefcase,
        title: "Performance & Appraisals",
        desc: "Set goals, run review cycles and collect manager feedback so increments are based on records, not memory.",
      },
      {
        icon: GraduationCap,
        title: "Training & Documents",
        desc: "Assign training, track completion and store certificates, policies and acknowledgements.",
      },
      {
        icon: Wallet,
        title: "Expenses & Reimbursements",
        desc: "Employees upload bills, managers approve, and approved amounts are added to the next payroll.",
      },
      {
        icon: Smartphone,
        title: "Employee Self-Service",
        desc: "Staff view payslips, apply for leave, update details and download letters without asking HR.",
      },
    ],
  },
  {
    id: "payroll",
    label: "Auto Payroll",
    full: "Automated Payroll Processing",
    summary:
      "Run accurate payroll in minutes, with salary, deductions and compliance calculated from live attendance.",
    solutions: [
      {
        icon: Layers,
        title: "Salary Structures",
        desc: "Define basic, HRA, allowances and deductions per grade or employee, with formulas you control.",
      },
      {
        icon: CalendarCheck,
        title: "Attendance-Linked Pay",
        desc: "Loss of pay, overtime and leave encashment are picked up from attendance and leave records automatically.",
      },
      {
        icon: Calculator,
        title: "Auto Calculation",
        desc: "Gross to net salary is calculated for every employee at once, with a preview before you approve.",
      },
      {
        icon: Landmark,
        title: "PF, ESI & PT",
        desc: "Statutory deductions are calculated using current rates and slabs, and challans are ready for filing.",
      },
      {
        icon: FileCheck,
        title: "TDS & Form 16",
        desc: "Income tax is projected through the year, with investment declarations and Form 16 generated at year end.",
      },
      {
        icon: Receipt,
        title: "Payslips",
        desc: "Branded payslips are generated as PDFs and sent to each employee by WhatsApp or email.",
      },
      {
        icon: Wallet,
        title: "Bank Transfer Files",
        desc: "Export salary payment files in your bank's format so the whole payroll is paid in one upload.",
      },
      {
        icon: FileText,
        title: "Loans, Advances & F&F",
        desc: "Track advances and loan EMIs, and calculate full and final settlement when someone leaves.",
      },
    ],
  },
];

/* How HRM feeds payroll */
const flow = [
  { icon: Fingerprint, title: "Attendance", desc: "Punches and shifts are captured from device, phone or web." },
  { icon: CalendarDays, title: "Leave & Changes", desc: "Approved leave, advances and reimbursements are added." },
  { icon: Calculator, title: "Payroll Run", desc: "Salary, PF, ESI, PT and TDS are calculated automatically." },
  { icon: Receipt, title: "Payslip & Payment", desc: "Payslips go out and the bank file is ready to upload." },
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
    items: ["Biometric devices", "WhatsApp Business API", "Email / SMTP", "Tally", "Bank payment files", "Google Sheets / Excel"],
  },
];

const goodFor = [
  "Companies running attendance and salary in Excel or on paper",
  "Teams of 25+ employees with shifts, overtime or multiple branches",
  "Businesses that lose hours every month on PF, ESI and TDS calculations",
  "Companies that want HR connected to accounting, Tally or an ERP",
];

const notIdeal = [
  "A team of fewer than 10 people with a very simple salary structure",
  "A business whose payroll is standard enough for ready-made software",
  "Outsourced payroll where an external firm already handles everything",
];

const packages = [
  {
    id: "hrm-starter",
    name: "HRM Starter",
    price: "₹34,999+",
    time: "4–6 weeks",
    forWho: "Small teams moving off Excel and registers",
    popular: false,
    features: [
      "Employee database with documents",
      "Attendance with web and mobile punch",
      "Leave management with approvals",
      "Up to 50 employees with role-based access",
      "Basic HR dashboard",
    ],
  },
  {
    id: "hrm-payroll-business",
    name: "HRM + Auto Payroll",
    price: "₹74,999+",
    time: "8–12 weeks",
    forWho: "Growing companies that want payroll on autopilot",
    popular: true,
    features: [
      "Everything in HRM Starter, plus full payroll",
      "Attendance-linked salary with PF, ESI, PT and TDS",
      "Auto payslips on WhatsApp and email",
      "Bank transfer file and statutory reports",
      "60 days of post-launch support",
    ],
  },
  {
    id: "hrm-payroll-enterprise",
    name: "Enterprise HRM + Payroll",
    price: "₹1,34,999+",
    time: "12–20 weeks",
    forWho: "Multi-branch and multi-entity organisations",
    popular: false,
    features: [
      "Recruitment, appraisals, training and expenses",
      "Multi-branch, multi-entity payroll",
      "Biometric, Tally and ERP integrations",
      "Custom workflows, approvals and analytics",
      "90 days of priority support",
    ],
  },
];

const steps = [
  {
    icon: Users,
    title: "Understand Your Policies",
    desc: "We study your attendance rules, leave policy, salary structure and compliance needs, and where HR time is lost today.",
  },
  {
    icon: PenTool,
    title: "Design The Workflow",
    desc: "We design approvals, roles, salary formulas and screens, and share a clickable prototype for your feedback.",
  },
  {
    icon: Gauge,
    title: "Build, Connect & Test",
    desc: "We build the system, import employee data, connect devices and messaging, and run a parallel payroll to check every figure.",
  },
  {
    icon: Rocket,
    title: "Train & Launch",
    desc: "We train HR and managers, go live from the start of a pay cycle and stay available through your first payroll.",
  },
];

const included = [
  "Requirement workshop and written scope document",
  "Role-based access with a full audit log",
  "Import of employee data from Excel or your current software",
  "Parallel payroll run to verify results before go-live",
  "WhatsApp, email and notification setup",
  "Full source code ownership with documentation",
];

const faqs = [
  {
    q: "What is the difference between HRM and payroll?",
    a: "HRM covers the employee journey: hiring, records, attendance, leave and appraisals. Payroll turns that data into salary, deductions and payslips. Because payroll depends on attendance and leave, the two work best in one system, but you can start with HRM and add payroll later.",
  },
  {
    q: "Does it calculate PF, ESI, professional tax and TDS?",
    a: "Yes. The system calculates statutory deductions using the rates and slabs that apply to your company and state, and prepares challans and reports for filing. We confirm the rules with you during the requirement workshop, and rates can be updated whenever the rules change.",
  },
  {
    q: "Can it connect to our biometric attendance machines?",
    a: "Yes, for most common biometric and RFID devices. Employees can also punch from a mobile app with GPS or from the web. We check your device model during the first call.",
  },
  {
    q: "Can employees get payslips on WhatsApp?",
    a: "Yes. Once payroll is approved, each employee receives a PDF payslip on WhatsApp or email. They can also log in to view past payslips and download Form 16.",
  },
  {
    q: "Is employee salary data secure?",
    a: "Salary and personal data are protected with role-based access, encrypted storage and an activity log that records who viewed or changed what. You choose who can see payroll.",
  },
  {
    q: "Will you move our existing employee data in?",
    a: "Yes. We import employee records, salary details and leave balances from Excel or your current software, and check the results with you. We also run payroll in parallel with your existing method before go-live.",
  },
];

/* Sample rows for the hero console (illustrative data) */
const sampleActivity = [
  { label: "Attendance synced from device", tag: "Done", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Leave request approved", tag: "Approved", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Payroll calculated", tag: "Review", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
  { label: "Payslips sent on WhatsApp", tag: "Sent", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const HrmPayrollService: React.FC = () => {
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
                <span className={gradText}>TechSasi Engineering • Enterprise Service 07</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                HRM &amp; Auto Payroll Software That{" "}
                <span className={gradText}>Pays Your Team Right, On Time.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Manage employees, attendance and leave, then run payroll with PF, ESI, PT and TDS calculated automatically, all in one system built around your company's policies.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my HRM / Payroll
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

            {/* Right Side: HRM + Payroll console */}
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
                      <span>HRM + Payroll Console</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <CalendarCheck size={14} />
                        <span>Present today</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">112</p>
                      <p className="text-[10px] text-slate-400">HRM · of 124 employees</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Wallet size={14} />
                        <span>Payslips ready</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">124</p>
                      <p className="text-[10px] text-slate-400">Payroll · pending approval</p>
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Bell size={14} />
                        <span>Payroll activity</span>
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
                Why build a custom HRM / Payroll
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                What your system will do for your company
              </h2>
              <p className="mt-3 text-slate-600">
                Fewer payroll errors, less month-end rush and one clear record of every employee.
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

        {/* ============ SOLUTIONS EXPLORER (HRM / PAYROLL) ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                All solutions we build
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Everything in HRM and Auto Payroll
              </h2>
              <p className="mt-3 text-slate-600">
                Switch between people management and payroll. Pick the solutions you need.
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

        {/* ============ HRM → PAYROLL FLOW ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Better together
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                From attendance to payslip, automatically
              </h2>
              <p className="mt-3 text-slate-600">
                When HRM and payroll share one database, every punch and approved leave flows into salary without re-typing.
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
                Proven tools behind your HRM / Payroll
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
              Is this the right fit for your company?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Ideal For Custom HRM / Payroll
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
                  Better With Ready-Made Software
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
                Simple packages. Pick what fits your company.
              </h2>
              <p className="mt-3 text-slate-600">
                Prices are starting points. We confirm a fixed quote after understanding your policies and headcount.
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
              Every HRM / Payroll project includes
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
                Ready to run payroll without the month-end rush?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us how your team handles attendance, leave and salary today. We will reply with a solution plan, a suggested stack and a fixed quote.
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
              Get my HRM / Payroll <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default HrmPayrollService;