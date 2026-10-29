import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  LifeBuoy, Wrench, ShieldCheck, Activity, Bell, HardDrive, RefreshCw, Gauge,
  Bug, Code2, Cloud, Server, Database, Lock, KeyRound, FileText, BarChart3,
  Users, Headphones, MessageCircle, Clock, Check, X, ChevronDown, ArrowRight,
  Rocket, PenTool, Cpu, Eye, Layers, Globe, Smartphone, ClipboardCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I need a maintenance and support plan for my website/software. Can we discuss the plan, response time and cost?";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const PROPOSAL_TYPE = "maintenance-support";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText = "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Headphones, text: "A real engineer answers your request" },
  { icon: Clock, text: "Clear response time for every plan" },
  { icon: ShieldCheck, text: "Monthly health report, no surprises" },
];

const benefits = [
  { icon: Activity, title: "Problems Found Early", desc: "We watch uptime, speed and errors around the clock, so we usually spot an issue before your customers do." },
  { icon: Bug, title: "Bugs Fixed Fast", desc: "Report a problem on WhatsApp or email and an engineer picks it up, finds the cause and fixes it." },
  { icon: Lock, title: "Always Up To Date And Safe", desc: "Frameworks, plugins and servers are patched on a schedule, which closes the gaps attackers look for." },
  { icon: HardDrive, title: "Backups That Are Tested", desc: "Daily backups with regular restore checks, so a mistake or failure costs you minutes, not days." },
  { icon: Gauge, title: "Stays Fast As You Grow", desc: "We tune slow pages, queries and servers before heavier traffic turns them into complaints." },
  { icon: Users, title: "One Team That Knows Your System", desc: "No explaining your setup again and again. The same engineers learn your product and look after it." },
];

const solutionSets = [
  {
    id: "app",
    label: "Website & App Care",
    full: "Website, Web App & Mobile App Maintenance",
    summary: "Keep your product working, current and quick, with changes handled for you each month.",
    solutions: [
      { icon: Bug, title: "Bug Fixing", desc: "Broken forms, layout issues, failed payments and logic errors found, fixed and tested." },
      { icon: RefreshCw, title: "Updates & Upgrades", desc: "Framework, library, plugin and CMS updates applied safely, with testing before they go live." },
      { icon: Code2, title: "Small Changes & Content", desc: "New sections, text and image updates, pricing changes and minor features, done within your plan hours." },
      { icon: Gauge, title: "Speed Optimisation", desc: "Image, code and database tuning to keep pages quick and Core Web Vitals healthy." },
      { icon: Smartphone, title: "App Store Support", desc: "Release updates, fix store rejections and keep your app compatible with new Android and iOS versions." },
      { icon: Globe, title: "Domain, SSL & Email", desc: "Renewals, DNS and certificates tracked, so nothing expires and takes your site offline." },
    ],
  },
  {
    id: "infra",
    label: "Cloud & Security",
    full: "Server, Cloud & Security Management",
    summary: "Your servers and data kept healthy, patched and protected, without needing an in-house DevOps team.",
    solutions: [
      { icon: Server, title: "Server Management", desc: "Linux and cloud servers monitored, patched and tuned, with disk and memory kept under control." },
      { icon: HardDrive, title: "Backup & Restore", desc: "Automated backups stored safely off the server, with restore tests and recovery steps written down." },
      { icon: ShieldCheck, title: "Security Patching", desc: "Regular patching, malware scans and firewall rules, reviewed against common cloud security practice." },
      { icon: Database, title: "Database Care", desc: "Index tuning, slow-query checks, cleanup and safe upgrades for PostgreSQL and MySQL." },
      { icon: Cloud, title: "Cost Review", desc: "A look at your cloud bill each month, removing unused resources and right-sizing servers." },
      { icon: KeyRound, title: "Access & Secrets", desc: "Review who has access, rotate keys and passwords, and remove accounts that are no longer needed." },
    ],
  },
  {
    id: "desk",
    label: "Monitoring & Support Desk",
    full: "Monitoring, Incident Response & Reporting",
    summary: "Be told when something breaks, know who is fixing it, and see the full story every month.",
    solutions: [
      { icon: Activity, title: "Uptime & Performance Monitoring", desc: "Checks every minute on your site, APIs and key pages, with dashboards you can open any time." },
      { icon: Bell, title: "Alerts To Your Phone", desc: "Alerts reach the right person on WhatsApp, email or phone, with clear steps on what happens next." },
      { icon: Headphones, title: "Support Desk", desc: "Raise requests by WhatsApp, email or a ticket, and track each one until it is closed." },
      { icon: Eye, title: "Logs & Error Tracking", desc: "Centralised logs and error reports, so finding the cause takes minutes instead of hours." },
      { icon: FileText, title: "Incident Reports", desc: "After any outage, a short written report: what happened, why, and what we changed to prevent it." },
      { icon: BarChart3, title: "Monthly Health Report", desc: "Uptime, speed, fixes done, hours used and recommendations, written in plain language." },
    ],
  },
];

const flow = [
  { icon: Bell, title: "Detect", desc: "Monitoring or your message tells us something is wrong." },
  { icon: ClipboardCheck, title: "Triage", desc: "An engineer confirms the issue and sets its priority." },
  { icon: Wrench, title: "Fix", desc: "We fix and test it, with a rollback ready if needed." },
  { icon: FileText, title: "Report", desc: "You get a clear note on the cause and the next step." },
];

const techGroups = [
  { label: "Monitoring & Alerts", icon: Activity, items: ["UptimeRobot", "Grafana", "Prometheus", "Sentry", "CloudWatch"] },
  { label: "Servers & Cloud", icon: Cloud, items: ["AWS", "DigitalOcean", "Linux", "Nginx", "Cloudflare"] },
  { label: "Code & Release", icon: Code2, items: ["GitHub", "GitHub Actions", "Docker", "Staging Sites", "Rollback"] },
  { label: "Data & Security", icon: Lock, items: ["PostgreSQL", "MySQL", "Redis", "SSL / TLS", "Automated Backups"] },
];

const goodFor = [
  "Businesses whose website or app was built by someone who is no longer available",
  "Owners who worry about downtime, hacks or an expired domain or SSL",
  "Teams with no in-house developer or DevOps engineer",
  "Companies that need small changes every month without hiring full-time",
];

const notIdeal = [
  "A static website that rarely changes and has no business impact if it goes down",
  "A team that already has engineers covering monitoring and support",
  "A product that is still in early design and has nothing live yet",
];

const packages = [
  {
    id: "basic-care", name: "Basic Care", price: "₹4,999", time: "per month",
    forWho: "Websites and small apps that need to stay safe", popular: false,
    features: [
      "Uptime monitoring with alerts",
      "Weekly backups and monthly restore check",
      "Security and software updates",
      "2 hours of fixes or changes a month",
      "Support by email, replies within 1 business day",
    ],
  },
  {
    id: "business-care", name: "Business Care", price: "₹12,999", time: "per month",
    forWho: "Growing products where downtime costs money", popular: true,
    features: [
      "Everything in Basic Care, plus daily backups",
      "Performance tuning and monthly cost review",
      "8 hours of fixes or changes a month",
      "Monthly health report and a review call",
      "WhatsApp support, first reply within 4 business hours",
    ],
  },
  {
    id: "enterprise-care", name: "Enterprise Care", price: "₹29,999", time: "per month",
    forWho: "Critical systems that need fast response", popular: false,
    features: [
      "Everything in Business Care, plus 24/7 alerting",
      "20 hours of engineering time a month",
      "Priority incident response and written reports",
      "Quarterly security and disaster recovery review",
      "Named engineer and a support line for urgent issues",
    ],
  },
];

const steps = [
  { icon: Users, title: "System Audit", desc: "We review your code, servers, backups, access and risks, then list what needs attention first." },
  { icon: PenTool, title: "Set Up Monitoring", desc: "We add uptime checks, alerts, backups and a support channel, and agree on response times with you." },
  { icon: Wrench, title: "Fix & Stabilise", desc: "We clear the urgent issues, apply pending updates and tune anything that is slow or fragile." },
  { icon: Rocket, title: "Ongoing Care", desc: "We monitor, fix, update and report every month, and suggest improvements as you grow." },
];

const included = [
  "Free system health check before you subscribe",
  "A support channel on WhatsApp, email or ticket",
  "Monitoring with alerts to your phone or email",
  "Backup and restore tests, written down for your team",
  "A plain-language monthly report",
  "Cancel any time with 30 days notice",
];

const faqs = [
  { q: "Can you support a website or app that someone else built?", a: "Yes. We start with a health check of the code, servers and access, tell you the risks, and then take over. Many of our clients come to us after their original developer became unavailable." },
  { q: "What counts as an urgent issue, and how fast do you respond?", a: "Anything that takes your site or a key feature offline is urgent. Each plan lists a first-response target. These are targets for starting work, not a promise of when everything will be fixed, because the cause decides the time." },
  { q: "What happens if I use more than my monthly hours?", a: "We tell you before we go over. You can approve extra hours at a fixed hourly rate, move to a higher plan, or leave the task for next month. We never bill extra hours without your approval." },
  { q: "Do unused hours carry over to next month?", a: "Unused hours roll over for one month on Business Care and Enterprise Care. Basic Care hours reset each month." },
  { q: "Will I keep access to my code, servers and accounts?", a: "Yes. Everything stays in your accounts, and we work with access that you can remove at any time. You can leave whenever you want with the documentation we have kept." },
  { q: "Is hosting or cloud usage included in the price?", a: "No. Hosting and cloud usage are billed to you directly by the provider. Our plans cover monitoring, maintenance, fixes and support, and we review your hosting bill each month to keep it sensible." },
];

const sampleActivity = [
  { label: "SSL certificate renewed automatically", tag: "Done", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Checkout error fixed and released", tag: "Fixed", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Disk usage at 85% on app server", tag: "Alert", tone: "text-amber-300 bg-amber-500/10 border-amber-500/20" },
  { label: "Nightly backup restore test passed", tag: "Healthy", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const MaintenanceSupportService: React.FC = () => {
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
                <LifeBuoy size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Engineering • Enterprise Service 12</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                Maintenance &amp; Support That{" "}
                <span className={gradText}>Keeps You Online.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We monitor your website or software, fix problems, apply updates and send a clear monthly report, so you can run your business without worrying about what is happening behind the screen.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my free health check
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

            {/* Right: support console */}
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
                      <span>Support Desk Console</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <Activity size={14} />
                        <span>Uptime (30 days)</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">99.9%</p>
                      <p className="text-[10px] text-slate-400">All services running</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <ClipboardCheck size={14} />
                        <span>Requests closed</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">14</p>
                      <p className="text-[10px] text-slate-400">This month · 1 open</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Bell size={14} />
                        <span>Support activity</span>
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
                      <span>Patched &amp; Monitored</span>
                    </span>
                    <span className="text-cyan-400 font-bold">Your Accounts, Your Access</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>Free Check</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Before You Subscribe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Why invest in maintenance</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">What steady care does for your product</h2>
              <p className="mt-3 text-slate-600">Fewer outages, faster fixes and no nasty surprises at the worst time.</p>
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

        {/* ============ SERVICES EXPLORER ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Everything we look after</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">What your support plan covers</h2>
              <p className="mt-3 text-slate-600">Switch between app care, cloud and security, and the support desk. Your plan picks the right mix.</p>
            </div>

            <div className="mb-8 flex justify-center" data-aos="fade-up">
              <div role="tablist" aria-label="Support type" className="inline-flex flex-wrap justify-center rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
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

        {/* ============ INCIDENT FLOW ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>When something goes wrong</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">From alert to written report</h2>
              <p className="mt-3 text-slate-600">Every issue follows the same clear path, so you always know who is on it.</p>
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
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Tools we use</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Proven tools behind your uptime</h2>
              <p className="mt-3 text-slate-600">We use what fits your setup. You will not need all of these.</p>
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
              Is a support plan the right fit for you?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Ideal For Maintenance Plans</p>
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
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Probably Not Needed</p>
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
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Simple monthly plans. Pick what fits your risk.</h2>
              <p className="mt-3 text-slate-600">
                Prices are monthly starting points. Hosting and cloud usage are billed to you directly, and the final price depends on the size of your system.
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
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Onboarding Workflow</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">From first call to full care in 4 steps</h2>
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
              Every support plan includes
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
                Ready to stop worrying about downtime and bugs?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us what you run and where it hurts. We will reply with a free health check summary, a suggested plan and a clear monthly price.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0057ff] shadow-lg transition-all hover:bg-slate-100 active:scale-95 sm:w-auto"
                >
                  Start my support plan <ArrowRight size={16} />
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
              Get my free health check <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default MaintenanceSupportService;