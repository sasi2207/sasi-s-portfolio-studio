import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Zap,
  Smartphone,
  Search,
  ShieldCheck,
  MessageCircle,
  Wallet,
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  Rocket,
  PenTool,
  Gauge,
  Users,
  X,
  Code2,
  Cpu,
  Layers,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I want a high-performance static website for my business. Can we discuss the architecture and timeline?";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Clock, text: "Ready in 3–10 days" },
  { icon: Wallet, text: "Starts at ₹5,999" },
  { icon: ShieldCheck, text: "Free SSL & Secure Architecture" },
];

const benefits = [
  {
    icon: Zap,
    title: "Blazing Sub-Second Speed",
    desc: "Optimized React & Next.js static builds load instantaneously, eliminating bounce rates and maximizing conversions.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive UI",
    desc: "Engineered with Tailwind CSS to deliver an immaculate, fluid experience across smartphones, tablets, and desktops.",
  },
  {
    icon: MessageCircle,
    title: "Instant Lead Conversion",
    desc: "Integrated one-tap WhatsApp dispatch, direct dial links, and database-synced inquiry forms straight to your phone.",
  },
  {
    icon: Search,
    title: "Advanced SEO & GEO Schema",
    desc: "Built-in structured data and meta optimizations so Google and AI search engines index your business instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Vulnerability Surface",
    desc: "Static compilation means no backend database holes or vulnerable plugins to hack. Maximum enterprise safety.",
  },
  {
    icon: Wallet,
    title: "Zero Recurring Overhead",
    desc: "Host on high-speed edge networks for pennies. You retain 100% full source code ownership with zero vendor lock-in.",
  },
];

const goodFor = [
  "Professional portfolio or personal brand",
  "Local business, clinic, salon or consulting studio",
  "Freelancers, agencies, and regional service providers",
  "High-impact product launch or promotional event page",
];

const notIdeal = [
  "Large online store with shopping carts and payment gateways",
  "Complex user login portals, dashboards, or SaaS apps",
  "Dynamic platforms requiring hourly live database edits",
];

const packages = [
  {
    id: "basic",
    name: "Starter Blueprint",
    price: "₹5,999",
    time: "3–5 days",
    forWho: "Freelancers and personal portfolios",
    popular: false,
    features: [
      "1 high-impact page with all key sections",
      "Fully responsive mobile & desktop UI",
      "SEO-friendly meta setup and social share cards",
      "Lightning-fast edge hosting with free SSL",
      "Direct WhatsApp chat integration button",
    ],
  },
  {
    id: "professional",
    name: "Business Suite",
    price: "₹9,999",
    time: "5–7 days",
    forWho: "Small businesses and growing shops",
    popular: true,
    features: [
      "Up to 5 pages (Home, About, Services, Gallery, Contact)",
      "Custom color palette & typography matched to your brand",
      "Working inquiry form + WhatsApp quick-connect",
      "Embedded Google Maps business location",
      "Compressed, high-performance optimized assets",
    ],
  },
  {
    id: "premium",
    name: "Enterprise Static",
    price: "₹15,999",
    time: "7–10 days",
    forWho: "Established companies and major launches",
    popular: false,
    features: [
      "Up to 10 pages with detailed service breakdowns",
      "Smooth Framer-style animations and interactive components",
      "Multi-channel lead routing (WhatsApp, SMS, Email)",
      "Advanced Google Search Console & Analytics wiring",
      "30 days of priority post-launch engineering support",
    ],
  },
];

const steps = [
  {
    icon: Users,
    title: "Requirement Discovery",
    desc: "Share your brand assets, logo, and core offerings. We map out the optimal UX blueprint.",
  },
  {
    icon: PenTool,
    title: "Architecture & Code",
    desc: "We build your site using React and Tailwind CSS, keeping performance and aesthetics paramount.",
  },
  {
    icon: Gauge,
    title: "Rigorous QA & Speed Audit",
    desc: "We stress-test mobile responsiveness, SSL security protocols, and Google PageSpeed scores.",
  },
  {
    icon: Rocket,
    title: "Production Deployment",
    desc: "We connect your custom domain, activate live security headers, and hand over complete git repository ownership.",
  },
];

const included = [
  "Custom UI/UX designed around your brand identity",
  "Search engine optimization (SEO) & OpenGraph preview cards",
  "Direct WhatsApp chat widget & functional contact forms",
  "Google Analytics & Search Console setup configuration",
  "Free SSL certificate, DNS domain routing & fast edge hosting",
  "100% Source code ownership with comprehensive documentation",
];

const techStack = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Vercel Edge",
  "Cloudflare DNS",
];

const faqs = [
  {
    q: "What exactly is a static website?",
    a: "It's an ultra-fast website where every page is pre-rendered for instant delivery. Because there is no sluggish backend database querying on every click, pages load in milliseconds and remain invulnerable to common database exploits.",
  },
  {
    q: "Can I connect my own custom domain (e.g., .com or .in)?",
    a: "Yes! We seamlessly link your domain from GoDaddy, Hostinger, Namecheap, or any registrar, complete with an enterprise-grade SSL certificate.",
  },
  {
    q: "How do prospective clients get in touch with me?",
    a: "Visitors can reach you instantly via a one-tap floating WhatsApp button, direct telephone links, or a clean contact form that routes submissions straight to your inbox.",
  },
  {
    q: "What kind of maintenance does a static website need?",
    a: "Very little. Static architectures have virtually zero runtime vulnerabilities, meaning ongoing maintenance costs are practically nonexistent compared to WordPress or bloated CMS platforms.",
  },
  {
    q: "How do I choose the right package?",
    a: "If you need a single impactful introduction, go with Starter. If you represent an active business requiring multiple service pages, Business is ideal. Feel free to message us on WhatsApp for a custom recommendation.",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const StaticWebsite: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

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
                <Zap size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Engineering • Web Service 01</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                High-Performance Static Websites That{" "}
                <span className={gradText}>Convert Visitors Into Customers.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Engineered for speed, security, and search dominance. Perfect for professional portfolios, local enterprises, and product landing pages built with React & Next.js.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to="/proposal?type=static-web"
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my website
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

            {/* Right Side: Related Technical Architecture & Live Preview Graphic */}
            <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="150">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow Backdrop */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#00f0ff]/30 via-[#0057ff]/20 to-transparent blur-3xl pointer-events-none"
                />

                {/* Main Glass Card Container */}
                <div className="relative rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 text-white shadow-[0_25px_70px_rgba(0,87,255,0.25)] backdrop-blur-xl">
                  
                  {/* Top Bar / Window Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-cyan-400">
                      <Cpu size={12} />
                      <span>TechSasi Edge Cluster</span>
                    </div>
                  </div>

                  {/* Architecture Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <Gauge size={14} />
                        <span>PageSpeed</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">99 / 100</p>
                      <p className="text-[10px] text-slate-400">Optimized Core Vitals</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Zap size={14} />
                        <span>TTFB Latency</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">&lt; 45ms</p>
                      <p className="text-[10px] text-slate-400">Global Edge Delivery</p>
                    </div>
                  </div>

                  {/* Live Code Stack Preview Box */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Code2 size={14} />
                        <span>static-config.ts</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Production Ready
                      </span>
                    </div>
                    <div className="text-slate-300 space-y-1 text-[11px]">
                      <p className="text-purple-400">import <span className="text-white">&#123; renderStaticPage &#125;</span> from <span className="text-emerald-400">'@techsasi/core'</span>;</p>
                      <p className="text-slate-400">// Zero database overhead, instant edge cache</p>
                      <p className="text-blue-400">export const <span className="text-white">config</span> = &#123;</p>
                      <p className="pl-4 text-slate-300">ssl: <span className="text-emerald-400">true</span>,</p>
                      <p className="pl-4 text-slate-300">compression: <span className="text-emerald-400">'brotli'</span>,</p>
                      <p className="pl-4 text-slate-300">framework: <span className="text-amber-300">'React / Next.js'</span></p>
                      <p className="text-blue-400">&#125;;</p>
                    </div>
                  </div>

                  {/* Floating Badge Bottom */}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>Free SSL Active</span>
                    </span>
                    <span className="text-cyan-400 font-bold">100% Code Ownership</span>
                  </div>

                </div>

                {/* Absolute Floating Decorative Tag */}
                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>3–10 Days</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    Average Delivery Time
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
                Why choose this architecture
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                What your website will do for your business
              </h2>
              <p className="mt-3 text-slate-600">
                Designed for high-speed engagement and effortless maintenance.
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

        {/* ============ IS THIS FOR YOU SECTION ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Is this the right fit for your project?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Ideal For Static Websites
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
                  Better With Custom Web Apps / ERP
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
                Simple packages. Pick what fits your goals.
              </h2>
              <p className="mt-3 text-slate-600">
                Every tier includes our signature speed guarantee and full source code handover.
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
                    to={`/proposal?type=static-web&package=${pkg.id}`}
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
                From concept to live production in 4 steps
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

        {/* ============ INCLUDED & TECH STACK ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div data-aos="fade-right">
              <h2 className="mb-6 font-display text-2xl font-black tracking-tight sm:text-3xl">
                Every project deployment includes
              </h2>
              <ul className="space-y-3">
                {included.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
                      <Check size={12} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" data-aos="fade-left">
              <h3 className="font-display text-xl font-bold">Built with enterprise tech stack</h3>
              <p className="mt-2 text-sm text-slate-600">
                The exact modern tools utilized by top engineering teams, ensuring lightning speed and infinite scalability.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold text-slate-800 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
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
                Ready to deploy your high-performance website?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us about your business. We'll reply with a clear technical roadmap and timeline.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to="/proposal?type=static-web"
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
              to="/proposal?type=static-web"
              className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,87,255,0.35)] active:scale-95 ${gradBg}`}
            >
              Get my website <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
}; 

export default StaticWebsite;