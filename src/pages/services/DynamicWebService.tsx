import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Users,
  Layers,
  Database,
  FileText,
  Lock,
  Smartphone,
  MessageCircle,
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  Rocket,
  PenTool,
  ClipboardList,
  ShieldCheck,
  CalendarCheck,
  Receipt,
  ListChecks,
  UserCog,
  UserRound,
  Crown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG — change this value                                         */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // <-- your number with country code, no + or spaces
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I need a custom web application for my business. Can we discuss?";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT (plain, easy language)                                     */
/* ------------------------------------------------------------------ */
const needIf = [
  "Your customers or staff need to log in",
  "You want to manage orders, bookings or records online",
  "You create bills and reports again and again",
  "Different people should see different information",
  "You want to take payments online",
];

const features = [
  {
    icon: Users,
    title: "Login for customers and staff",
    desc: "Each person gets their own safe account and sees only what belongs to them.",
  },
  {
    icon: Layers,
    title: "Easy admin dashboard",
    desc: "Add, edit, search and filter your records yourself. No technical skills needed.",
  },
  {
    icon: Database,
    title: "Your data, safely stored",
    desc: "A strong database keeps everything organised, quick to find, and backed up daily.",
  },
  {
    icon: FileText,
    title: "Bills and reports in one click",
    desc: "Download invoices as PDF and reports as Excel. Save hours of manual work every week.",
  },
  {
    icon: Lock,
    title: "Safe and protected",
    desc: "Passwords are encrypted and every important action is recorded, so you always know who did what.",
  },
  {
    icon: Smartphone,
    title: "Works on any phone",
    desc: "Your team can use it from a mobile, tablet or computer, whichever is handy.",
  },
];

const examples = [
  {
    icon: CalendarCheck,
    title: "Booking portal",
    desc: "Clients pick a date and time, you confirm, and everyone gets an email. No more phone calls and notebooks.",
  },
  {
    icon: Receipt,
    title: "Billing and invoice system",
    desc: "Create bills, track payments and send monthly statements to customers in seconds.",
  },
  {
    icon: ListChecks,
    title: "Staff and task manager",
    desc: "Assign work, track progress and see attendance, all from one screen.",
  },
];

const roles = [
  {
    icon: Crown,
    name: "Admin / Owner",
    sees: "Everything: users, money, settings and reports.",
  },
  {
    icon: UserCog,
    name: "Manager / Staff",
    sees: "Only the tasks and records given to them.",
  },
  {
    icon: UserRound,
    name: "Customer",
    sees: "Only their own orders, bills and status.",
  },
];

const packages = [
  {
    id: "starter-app",
    name: "Starter Portal",
    price: "₹18,000",
    time: "2–3 weeks",
    forWho: "Booking, service portals and member directories",
    popular: false,
    features: [
      "Sign up, login and forgot password",
      "Customer dashboard showing live status",
      "Admin panel to manage users and requests",
      "Database set up for your records",
      "Email alert for every new submission",
    ],
  },
  {
    id: "pro-app",
    name: "Business App",
    price: "₹28,000",
    time: "3–5 weeks",
    forWho: "Startups, B2B businesses and multi-user portals",
    popular: true,
    features: [
      "Admin, Staff and Customer roles",
      "Search and filter records easily",
      "Razorpay / Stripe online payments",
      "PDF invoices and Excel statements",
      "Automatic cloud backups",
    ],
  },
  {
    id: "enterprise-app",
    name: "Enterprise Platform",
    price: "₹50,000",
    time: "5–8 weeks",
    forWho: "Large platforms and multi-branch businesses",
    popular: false,
    features: [
      "Custom approval workflows",
      "Live notifications and data sync",
      "Strong servers built for 99.9% uptime",
      "Full documentation for your developers",
      "60 days of dedicated support",
    ],
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Plan",
    desc: "We understand your business and decide who uses the app, what they see and how data flows.",
  },
  {
    icon: PenTool,
    title: "Build the engine",
    desc: "We build the secure back-end, database and login system that run everything.",
  },
  {
    icon: Layers,
    title: "Design the screens",
    desc: "We create clean, easy dashboards and forms. You review them as we go.",
  },
  {
    icon: Rocket,
    title: "Test and launch",
    desc: "We test for speed and safety, then put it live on a secure cloud server.",
  },
];

const included = [
  "Login system with Admin, Manager, Customer and Staff roles",
  "Admin panel with search, filters and page-by-page lists",
  "Database design, setup and regular backups",
  "Secure back-end service for your app",
  "PDF invoice and Excel report downloads",
  "Live deployment on AWS / DigitalOcean with SSL and monitoring",
];

const techStack = [
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "JWT",
];

const faqs = [
  {
    q: "What's the difference between a normal website and a web app?",
    a: "A normal website shows fixed information, like a brochure. A web app remembers data, lets people log in, and does work for you, like taking bookings, creating bills or tracking orders.",
  },
  {
    q: "Can different people see different information?",
    a: "Yes. Customers see only their own orders, staff see the tasks given to them, and owners see everything, including settings and revenue.",
  },
  {
    q: "What if my data gets lost?",
    a: "We set up automatic daily backups saved safely in the cloud. If anything goes wrong, your data can be restored.",
  },
  {
    q: "Will it work on mobile phones?",
    a: "Yes. Every screen is designed to work smoothly on phones, tablets and computers.",
  },
  {
    q: "Why do the prices say 'starting from'?",
    a: "Every business is different. The price depends on how many features you need. After a short chat, we give you a clear final quote before we start.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export const DynamicWebServices: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic", offset: 60 });
  }, []);

  return (
    <Layout>
      <main className="relative bg-white pb-24 text-slate-900 lg:pb-0">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 sm:pb-24 sm:pt-36">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-[340px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00f0ff]/25 to-[#0057ff]/15 blur-[120px] sm:w-[850px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-7" data-aos="fade-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Database size={13} className="text-[#0057ff]" />
                <span className={gradText}>Web App Service 02</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Run your business from{" "}
                <span className={gradText}>one smart web app.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Customer logins, admin dashboards, bills, reports and online
                payments. We build the custom web app your business needs,
                so you spend less time on paperwork.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/proposal?type=dynamic-web"
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get a free quote
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00f0ff]/50 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition-all hover:border-[#0057ff] hover:text-[#0057ff]"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-medium text-slate-700">
                {[
                  { icon: Clock, t: "Ready in 2–8 weeks" },
                  { icon: ShieldCheck, t: "Secure by design" },
                  { icon: Check, t: "You own the code" },
                ].map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${gradBg}`}>
                      <Icon size={14} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock dashboard */}
            <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="150">
              <div className="relative mx-auto max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#00f0ff]/40 to-[#0057ff]/40 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-[#00f0ff]/40 bg-white shadow-[0_20px_60px_rgba(0,87,255,0.2)]">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-3 rounded-md bg-white px-3 py-1 text-[11px] font-mono text-slate-500">
                      app.yourbusiness.in
                    </span>
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { v: "248", l: "Orders" },
                        { v: "₹1.2L", l: "Revenue" },
                        { v: "36", l: "Customers" },
                      ].map((s) => (
                        <div key={s.l} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                          <p className={`text-lg font-black ${gradText}`}>{s.v}</p>
                          <p className="text-[10px] font-medium text-slate-500">{s.l}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex h-24 items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
                      {[40, 65, 50, 80, 60, 92, 75].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="flex-1 rounded-md bg-gradient-to-t from-[#0057ff] to-[#00f0ff]"
                        />
                      ))}
                    </div>

                    <div className="space-y-2">
                      {["Invoice #1042 paid", "New booking received", "Report ready to download"].map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600"
                        >
                          <span className={`h-2 w-2 rounded-full ${gradBg}`} />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6">
                  <p className={`text-xl font-black ${gradText}`}>3 roles</p>
                  <p className="text-[11px] font-medium text-slate-500">Admin · Staff · Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DO YOU NEED THIS ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#00f0ff]/40 bg-gradient-to-br from-[#00f0ff]/5 to-[#0057ff]/5 p-6 sm:p-10" data-aos="fade-up">
              <h2 className="font-display text-2xl font-black tracking-tight sm:text-3xl">
                You need a web app if…
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {needIf.map((t, i) => (
                  <li
                    key={t}
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm shadow-xs sm:text-base"
                  >
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
                      <Check size={12} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                Just need to show your business online? A{" "}
                <Link to="/services/static-website" className="font-bold text-[#0057ff] hover:underline">
                  simple static website
                </Link>{" "}
                is cheaper and faster.
              </p>
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>What you get</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Everything your team needs in one place
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={(i % 3) * 80}
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

        {/* ============ REAL-LIFE EXAMPLES ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Real examples</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                What can we build for you?
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {examples.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  data-aos="zoom-in-up"
                  data-aos-delay={i * 100}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-[#0057ff]/25 ${gradBg}`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ROLES ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">
                The right people see the right things
              </h2>
              <p className="mt-3 text-slate-600">Everyone logs in to their own view.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {roles.map(({ icon: Icon, name, sees }, i) => (
                <div
                  key={name}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#00f0ff]/50 bg-gradient-to-br from-[#00f0ff]/15 to-[#0057ff]/15 text-[#0057ff]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{name}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{sees}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section id="pricing" className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Pricing</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Choose a starting point
              </h2>
              <p className="mt-3 text-slate-600">
                Prices are starting prices. We confirm your final quote after a short chat.
              </p>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {packages.map((pkg, i) => (
                <div
                  key={pkg.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className={`relative flex flex-col rounded-3xl bg-white p-6 transition-all sm:p-8 ${
                    pkg.popular
                      ? "border-2 border-[#0057ff] shadow-[0_16px_48px_rgba(0,87,255,0.25)] lg:-translate-y-3"
                      : "border border-slate-200 hover:border-[#0057ff]/60 hover:shadow-lg"
                  }`}
                >
                  {pkg.popular && (
                    <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white ${gradBg}`}>
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{pkg.forWho}</p>

                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Starting from</p>
                    <div className="flex items-end gap-2">
                      <span className={`font-display text-4xl font-black ${gradText}`}>{pkg.price}</span>
                      <span className="mb-1 flex items-center gap-1 text-xs text-slate-500">
                        <Clock size={12} /> {pkg.time}
                      </span>
                    </div>
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
                    to={`/proposal?type=dynamic-web&package=${pkg.id}`}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all active:scale-95 ${
                      pkg.popular
                        ? `text-white shadow-[0_6px_22px_rgba(0,87,255,0.35)] hover:brightness-105 ${gradBg}`
                        : "border border-[#00f0ff]/60 text-slate-800 hover:border-[#0057ff] hover:text-[#0057ff]"
                    }`}
                  >
                    Get quote for {pkg.name}
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
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>How it works</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Our simple 4-step process
              </h2>
            </div>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
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

        {/* ============ INCLUDED + TECH ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div data-aos="fade-right">
              <h2 className="mb-6 font-display text-2xl font-black tracking-tight sm:text-3xl">
                Every project includes
              </h2>
              <ul className="space-y-3">
                {included.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
                      <Check size={12} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8" data-aos="fade-left">
              <h3 className="font-display text-xl font-bold">Built with trusted technology</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reliable, popular tools that any developer can maintain later. You are never locked in.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold text-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Questions people ask us
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
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#020b24] via-[#04215f] to-[#0057ff] px-6 py-14 text-center text-white sm:px-12"
            data-aos="zoom-in"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#00f0ff]/30 blur-[90px]" />
            <div className="relative space-y-5">
              <h2 className="font-display text-3xl font-black tracking-tight text-balance sm:text-4xl">
                Have an idea for your business app?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us what you want to manage. We'll reply with a clear plan, timeline and price.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to="/proposal?type=dynamic-web"
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
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
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
              to="/proposal?type=dynamic-web"
              className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,87,255,0.35)] active:scale-95 ${gradBg}`}
            >
              Get a free quote <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default DynamicWebServices;