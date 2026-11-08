import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Search, TrendingUp, BarChart3, Target, Megaphone, MapPin, FileText, Link2,
  Gauge, Globe, Mail, Share2, MousePointerClick, LineChart, Users, Rocket,
  PenTool, Check, ChevronDown, ArrowRight, Clock, MessageCircle, ShieldCheck,
  Layers, X, Code2, Eye, Star, Bell, Cpu,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I need help with SEO and digital marketing for my business. Can we discuss the plan, keywords and timeline?";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const PROPOSAL_TYPE = "digital-marketing-seo";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText = "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Search, text: "Google, Maps & social growth" },
  { icon: Clock, text: "First results in 60–90 days" },
  { icon: ShieldCheck, text: "White-hat methods, monthly reports" },
];

const benefits = [
  { icon: Search, title: "Get Found On Google", desc: "Your pages rank for the words customers actually search, so people find you when they are ready to buy." },
  { icon: Target, title: "Visitors Who Buy", desc: "We target buyers, not just traffic, so more of your visitors become calls, enquiries and orders." },
  { icon: MapPin, title: "Win Your Local Area", desc: "A strong Google Business Profile puts you in the map results for \"near me\" searches in your city." },
  { icon: LineChart, title: "Numbers You Can Read", desc: "A simple monthly report shows rankings, traffic and leads, with no jargon and no vanity metrics." },
  { icon: TrendingUp, title: "Growth That Compounds", desc: "SEO work keeps paying after it is done, so your cost per lead falls as your rankings rise." },
  { icon: ShieldCheck, title: "Safe, Long-Term Methods", desc: "No bought links or shortcuts. We follow Google guidelines so one update never wipes out your results." },
];

const solutionSets = [
  {
    id: "seo",
    label: "SEO",
    full: "Search Engine Optimisation",
    summary: "Make your website easy for Google to understand and worth ranking, from the code to the content.",
    solutions: [
      { icon: Search, title: "Keyword Research", desc: "A list of the searches your customers make, ranked by volume, difficulty and buying intent." },
      { icon: Code2, title: "Technical SEO Audit", desc: "We fix crawl errors, broken links, indexing issues and duplicate pages that hold rankings back." },
      { icon: Gauge, title: "Page Speed & Core Web Vitals", desc: "Faster loading and smoother mobile pages, which help both rankings and conversions." },
      { icon: FileText, title: "On-Page Optimisation", desc: "Titles, descriptions, headings, schema and internal links set up for every key page." },
      { icon: PenTool, title: "SEO Content Writing", desc: "Blog posts and service pages written for your customers first and search engines second." },
      { icon: Link2, title: "Quality Link Building", desc: "Genuine mentions and links from relevant sites, earned through content and outreach." },
    ],
  },
  {
    id: "local",
    label: "Local & Social",
    full: "Local SEO & Social Media",
    summary: "Be visible where your customers are: Google Maps, Instagram, Facebook and YouTube.",
    solutions: [
      { icon: MapPin, title: "Google Business Profile", desc: "Complete setup, photos, posts and weekly updates to rank in the local map pack." },
      { icon: Star, title: "Reviews & Reputation", desc: "A simple system to collect more genuine reviews and reply to every one." },
      { icon: Globe, title: "Local Listings", desc: "Consistent name, address and phone across directories, so Google trusts your location." },
      { icon: Share2, title: "Social Media Management", desc: "A monthly calendar of posts, reels and stories designed and published for you." },
      { icon: Users, title: "Community & Engagement", desc: "Replies, comments and messages handled in your brand voice during business hours." },
      { icon: Eye, title: "Creative & Video", desc: "Short videos, banners and carousels made to stop the scroll and carry your offer." },
    ],
  },
  {
    id: "ads",
    label: "Paid Ads & Email",
    full: "Paid Advertising & Email Marketing",
    summary: "Get leads this week while your SEO builds, with every rupee tracked to a result.",
    solutions: [
      { icon: MousePointerClick, title: "Google Ads", desc: "Search, display and shopping campaigns set up around keywords that bring buyers." },
      { icon: Megaphone, title: "Meta Ads", desc: "Facebook and Instagram campaigns with tested creatives and clear audience targeting." },
      { icon: Target, title: "Retargeting", desc: "Bring back visitors who did not enquire, with ads that remind them of your offer." },
      { icon: Mail, title: "Email & WhatsApp Campaigns", desc: "Newsletters and automated follow-ups that turn leads into repeat customers." },
      { icon: BarChart3, title: "Conversion Tracking", desc: "GA4, Search Console and pixel setup so every call, form and sale is counted." },
      { icon: LineChart, title: "Landing Page Testing", desc: "Small changes to headlines and forms, tested to lift your conversion rate." },
    ],
  },
];

const flow = [
  { icon: Search, title: "Research", desc: "We find the keywords and competitors that matter." },
  { icon: FileText, title: "Optimise", desc: "We fix the site and publish content that targets them." },
  { icon: TrendingUp, title: "Rank", desc: "Pages climb, and traffic and enquiries grow." },
  { icon: BarChart3, title: "Report", desc: "You get a clear monthly report and next steps." },
];

const techGroups = [
  { label: "SEO Tools", icon: Search, items: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "PageSpeed Insights", "Schema Markup"] },
  { label: "Analytics & Tracking", icon: BarChart3, items: ["Google Analytics 4", "Tag Manager", "Looker Studio", "Meta Pixel", "Hotjar", "Call Tracking"] },
  { label: "Ads Platforms", icon: Megaphone, items: ["Google Ads", "Meta Ads", "YouTube Ads", "LinkedIn Ads", "Retargeting", "Shopping Ads"] },
  { label: "Content & Social", icon: PenTool, items: ["Canva", "Meta Business Suite", "Mailchimp", "WhatsApp Business", "WordPress", "Shopify"] },
];

const goodFor = [
  "Businesses whose website gets almost no visitors from Google",
  "Local shops, clinics and service providers who want more calls",
  "Online stores that depend too much on paid ads for sales",
  "Owners who want one team for SEO, social media and ads",
];

const notIdeal = [
  "A business that needs sales in 7 days and has no ad budget",
  "A brand-new idea with no website, service or product yet",
  "Anyone looking for guaranteed number 1 ranking promises",
];

const packages = [
  {
    id: "seo-starter", name: "SEO Starter", price: "₹9,999+", time: "per month",
    forWho: "Local businesses and new websites", popular: false,
    features: [
      "Website audit and keyword research",
      "On-page SEO for up to 10 pages",
      "Google Business Profile optimisation",
      "2 SEO blog posts every month",
      "Monthly ranking and traffic report",
    ],
  },
  {
    id: "growth", name: "Growth Marketing", price: "₹24,999+", time: "per month",
    forWho: "Growing businesses that want leads", popular: true,
    features: [
      "Everything in SEO Starter, plus link building",
      "Social media management, 12 posts a month",
      "Google or Meta Ads management",
      "Conversion tracking and GA4 setup",
      "Monthly strategy call",
    ],
  },
  {
    id: "performance", name: "Performance Pro", price: "₹49,999+", time: "per month",
    forWho: "Stores and brands scaling across cities", popular: false,
    features: [
      "Full-funnel SEO, ads and email marketing",
      "Weekly content and 20+ social posts",
      "Landing page and conversion testing",
      "Dedicated marketing manager",
      "Live dashboard and weekly reports",
    ],
  },
];

const steps = [
  { icon: Users, title: "Audit Your Presence", desc: "We review your website, rankings, competitors and ad accounts, then list the quickest wins." },
  { icon: PenTool, title: "Plan The Strategy", desc: "We agree on target keywords, channels, monthly goals and budget before any work begins." },
  { icon: Rocket, title: "Execute & Publish", desc: "We fix the site, write content, run campaigns and build your local and social presence." },
  { icon: BarChart3, title: "Report & Improve", desc: "You get a monthly report, and we double down on what brings leads." },
];

const included = [
  "Free website and competitor audit before you commit",
  "Your own Google, Analytics and ad accounts, with full access for you",
  "A written keyword and content plan",
  "A monthly report in plain language",
  "WhatsApp support from a real person on our team",
  "No lock-in: cancel any month with 30 days notice",
];

const faqs = [
  { q: "How long does SEO take to show results?", a: "Most websites see early movement in 60 to 90 days, and steady lead growth by month four to six. Competitive keywords take longer. Paid ads can bring leads sooner while SEO builds up." },
  { q: "Can you guarantee a number 1 ranking?", a: "No one honestly can, because Google decides rankings. We guarantee the work: a clear plan, white-hat methods and a monthly report that shows exactly what changed and what happened." },
  { q: "Do I pay for ads separately?", a: "Yes. Ad spend goes directly from your account to Google or Meta. Our fee covers strategy, setup, management and reporting. We set a budget with you first and never spend beyond it." },
  { q: "Will I own my accounts and content?", a: "Yes. Analytics, Search Console, ad accounts and Google Business Profile all stay in your name. You keep every article, design and report, even if you stop working with us." },
  { q: "Do you work with local businesses outside big cities?", a: "Yes. Local SEO works especially well for shops, clinics, schools and service providers in Tamil Nadu and across India. We target your city, area and language." },
  { q: "What do I get in the monthly report?", a: "Keyword rankings, website traffic, leads and calls, top pages, ad results and the work done that month, followed by the plan for the next month." },
];

const sampleActivity = [
  { label: "\"best dentist in Ambattur\" moved 14 → 4", tag: "Rising", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Google Business Profile optimised", tag: "Live", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "New blog post indexed by Google", tag: "Indexed", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
  { label: "Monthly report sent to client", tag: "Sent", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const DigitalMarketingSeoService: React.FC = () => {
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
                <Search size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Growth • Enterprise Service 10</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                Digital Marketing &amp; SEO That{" "}
                <span className={gradText}>Brings Customers To You.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We help your business rank on Google, grow on social media and turn clicks into calls, with clear monthly reports so you always know what your money is doing.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my free SEO audit
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

            {/* Right: SEO console */}
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
                      <span>SEO + Growth Console</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <TrendingUp size={14} />
                        <span>Organic visits</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">+186%</p>
                      <p className="text-[10px] text-slate-400">Last 6 months</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Target size={14} />
                        <span>Page 1 keywords</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">32</p>
                      <p className="text-[10px] text-slate-400">Up from 5</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Bell size={14} />
                        <span>Growth activity</span>
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
                      <span>White-hat &amp; Tracked</span>
                    </span>
                    <span className="text-cyan-400 font-bold">Your Accounts, Your Data</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>60–90 Days</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">To First Results</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Why invest in SEO and marketing</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">What steady online visibility does for your business</h2>
              <p className="mt-3 text-slate-600">More visitors, more enquiries and a lower cost for every customer.</p>
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

        {/* ============ SOLUTIONS EXPLORER ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>All services we offer</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Everything in SEO and digital marketing</h2>
              <p className="mt-3 text-slate-600">Switch between search, local and social, and paid growth. Pick what your business needs.</p>
            </div>

            <div className="mb-8 flex justify-center" data-aos="fade-up">
              <div role="tablist" aria-label="Service type" className="inline-flex flex-wrap justify-center rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
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

        {/* ============ FLOW ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Better together</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">From keyword to customer</h2>
              <p className="mt-3 text-slate-600">When SEO, content and tracking work as one system, every month builds on the last.</p>
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

        {/* ============ TOOLS ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Tools we use</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Trusted tools behind your growth</h2>
              <p className="mt-3 text-slate-600">We pick a focused set for your goals. You will not need all of these.</p>
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
              Is this the right fit for your business?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Ideal For SEO / Marketing</p>
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
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Not The Right Time</p>
                <ul className="space-y-3">
                  {notIdeal.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                      <X size={18} className="mt-0.5 shrink-0 text-slate-400" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0057ff] hover:underline">
                  Talk to our marketing team <ArrowRight size={14} />
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
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Simple monthly plans. Pick what fits your stage.</h2>
              <p className="mt-3 text-slate-600">
                Prices are monthly starting points for our service. Ad spend is paid directly to Google or Meta, and your final quote depends on your goals and competition.
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
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">From first call to first leads in 4 steps</h2>
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
              Every SEO / marketing plan includes
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
                Ready to be the first business customers find on Google?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Share your website and your goal. We will reply with a free audit, a keyword plan and a clear monthly quote.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0057ff] shadow-lg transition-all hover:bg-slate-100 active:scale-95 sm:w-auto"
                >
                  Start my growth plan <ArrowRight size={16} />
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
              Get my free SEO audit <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default DigitalMarketingSeoService;