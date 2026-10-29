import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  CreditCard,
  Package,
  Tag,
  Bell,
  BarChart3,
  Truck,
  ShieldCheck,
  MessageCircle,
  Wallet,
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  Rocket,
  PenTool,
  Users,
  X,
  Cpu,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I want to launch a high-converting e-commerce store. Can we discuss the features and timeline?";

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
  { icon: Clock, text: "Live in 2–8 weeks" },
  { icon: Wallet, text: "Starts at ₹19,999" },
  { icon: ShieldCheck, text: "Zero sales commission" },
];

const benefits = [
  {
    icon: CreditCard,
    title: "Checkout That Stays Short",
    desc: "Buyers pay on one page with UPI, Google Pay, PhonePe, cards or NetBanking. Fewer screens means fewer abandoned carts on mobile.",
  },
  {
    icon: Package,
    title: "Stock That Stays Accurate",
    desc: "Counters drop with every sale, sizes and colours carry their own prices, and low-stock warnings arrive before you oversell.",
  },
  {
    icon: Tag,
    title: "GST Invoices, Automatically",
    desc: "Tax is calculated at checkout and a PDF invoice with your GSTIN is ready for the customer to download instantly.",
  },
  {
    icon: Bell,
    title: "WhatsApp & SMS Order Updates",
    desc: "Customers hear when an order is placed, dispatched, out for delivery and delivered, so fewer of them ask where it is.",
  },
  {
    icon: BarChart3,
    title: "Sales Dashboard You'll Open Daily",
    desc: "Daily revenue, average order value, best sellers and repeat customers, all in one clear admin view.",
  },
  {
    icon: Truck,
    title: "Courier Tracking Built In",
    desc: "Connect Shiprocket, Delhivery or a local delivery partner. Tracking numbers and links are created for every order.",
  },
];

const goodFor = [
  "D2C brands, boutiques and niche product sellers",
  "Retailers and wholesalers with a growing catalogue",
  "Marketplaces with multiple vendors and commissions",
  "B2B portals with repeat orders and subscriptions",
];

const notIdeal = [
  "A simple brochure or portfolio site with nothing to sell online",
  "Internal tools or ERP with no public checkout",
  "Native mobile apps for the App Store or Play Store",
];

const packages = [
  {
    id: "starter-store",
    name: "Starter Merchant Store",
    price: "₹19,999+",
    time: "2–3 weeks",
    forWho: "Boutiques, D2C startups and niche sellers",
    popular: false,
    features: [
      "Up to 100 products with image galleries",
      "UPI, NetBanking and card payments",
      "Clean mobile cart and checkout",
      "Admin panel for products and orders",
      "Email confirmation for every order",
    ],
  },
  {
    id: "growth-store",
    name: "Growth Commerce Engine",
    price: "₹34,999+",
    time: "3–5 weeks",
    forWho: "Retail brands, wholesalers and high-volume sellers",
    popular: true,
    features: [
      "Unlimited products with multi-category filters",
      "Coupon codes and volume discounts",
      "Automatic GST invoices as PDFs",
      "WhatsApp and SMS order alerts",
      "Shiprocket or Delhivery tracking sync",
    ],
  },
  {
    id: "custom-commerce",
    name: "Enterprise Multi-Vendor",
    price: "₹65,000+",
    time: "5–8 weeks",
    forWho: "Marketplaces, multi-branch chains and B2B portals",
    popular: false,
    features: [
      "Seller accounts with split payouts",
      "Recurring billing and automatic renewals",
      "ERP and accounting sync",
      "Caching built for flash-sale traffic",
      "Launch manager and 60 days of priority support",
    ],
  },
];

const steps = [
  {
    icon: Users,
    title: "Catalogue Planning",
    desc: "We sort your categories, pricing, shipping regions and payment accounts into a clear store structure.",
  },
  {
    icon: PenTool,
    title: "Storefront Design",
    desc: "Search, product pages, cart and checkout, designed for one-handed phone use.",
  },
  {
    icon: ShieldCheck,
    title: "Payment Testing",
    desc: "We connect live keys, verify webhooks, run test orders and try the full refund flow.",
  },
  {
    icon: Rocket,
    title: "Launch & Team Training",
    desc: "We go live on cloud hosting with SSL and domain email, then show your staff how to manage products.",
  },
];

const included = [
  "Product catalogue with smart filters and instant search",
  "Payment gateway setup: Razorpay, Cashfree, Stripe or PhonePe",
  "Cart, saved addresses and order history for customers",
  "Admin panel for products, coupon codes and orders",
  "PDF tax invoices and WhatsApp or SMS order messages",
  "Mobile-first storefront that scrolls smoothly on budget phones",
];

const techStack = [
  "React.js",
  "Node.js",
  "PostgreSQL",
  "Razorpay",
  "Stripe",
  "Tailwind CSS",
  "Redis",
];

const faqs = [
  {
    q: "Which payment methods can my customers use?",
    a: "Razorpay, PhonePe, Cashfree, Paytm, Stripe and PayPal are supported. Indian customers can pay with any UPI app (GPay, PhonePe, Paytm, CRED) or a debit or credit card.",
  },
  {
    q: "Can I update products, prices and photos myself?",
    a: "Yes. The admin panel lets you add items, change prices, upload photos, mark products out of stock and view orders. No coding is needed.",
  },
  {
    q: "Do you take a commission on my sales?",
    a: "No. TechSasi charges zero sales commission. You keep your full earnings and only pay the standard processing fee your payment gateway charges.",
  },
  {
    q: "Can customers get order updates on WhatsApp?",
    a: "Yes. We connect the official WhatsApp Business API so customers receive a confirmation and a tracking link as soon as an order is confirmed.",
  },
  {
    q: "How long does a store take to build?",
    a: "Between 2 and 8 weeks. A starter store usually takes 2–3 weeks, while a multi-vendor marketplace takes 5–8 weeks. Message us on WhatsApp for a precise estimate.",
  },
];

/* Sample rows for the hero console (illustrative data) */
const sampleOrders = [
  { id: "#1042", item: "Cotton kurta, M", status: "Paid", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { id: "#1041", item: "Block-print dupatta", status: "Dispatched", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { id: "#1040", item: "Handloom saree", status: "Delivered", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const EcommerceWebService: React.FC = () => {
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
                <ShoppingCart size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Engineering • Web Service 03</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                E-Commerce Stores That{" "}
                <span className={gradText}>Turn Visitors Into Paying Customers.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Secure payments, a short checkout, live stock and GST invoices, built for fast mobile shopping. Perfect for D2C brands, retailers and multi-vendor marketplaces.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to="/proposal?type=ecommerce"
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Launch my store
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

            {/* Right Side: Store console preview */}
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
                      <span>Store Console</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <ShoppingCart size={14} />
                        <span>Orders today</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">128</p>
                      <p className="text-[10px] text-slate-400">Across UPI & cards</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <BarChart3 size={14} />
                        <span>Revenue</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">₹84,250</p>
                      <p className="text-[10px] text-slate-400">Avg. order ₹658</p>
                    </div>
                  </div>

                  {/* Recent orders */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Package size={14} />
                        <span>Recent orders</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Sample data
                      </span>
                    </div>
                    <ul className="space-y-2.5 text-[11px]">
                      {sampleOrders.map((o) => (
                        <li key={o.id} className="flex items-center justify-between gap-3">
                          <span className="flex min-w-0 items-center gap-2 text-slate-300">
                            <span className="text-slate-500">{o.id}</span>
                            <span className="truncate">{o.item}</span>
                          </span>
                          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] ${o.tone}`}>
                            {o.status}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom bar */}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>Secure Payments</span>
                    </span>
                    <span className="text-cyan-400 font-bold">0% Sales Commission</span>
                  </div>
                </div>

                {/* Floating tag */}
                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>2–8 Weeks</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    Typical Launch Time
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
                Why choose this commerce stack
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                What your store will do for your business
              </h2>
              <p className="mt-3 text-slate-600">
                Each feature removes a task you would otherwise do by hand.
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
                  Ideal For E-Commerce Stores
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
                  Better With A Static Site / Custom App
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
                Simple packages. Pick what fits your store.
              </h2>
              <p className="mt-3 text-slate-600">
                Prices are starting points. We confirm a fixed quote after one short call.
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
                    to={`/proposal?type=ecommerce&package=${pkg.id}`}
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
                From first call to live store in 4 steps
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
                Every store launch includes
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
              <h3 className="font-display text-xl font-bold">Built with a proven tech stack</h3>
              <p className="mt-2 text-sm text-slate-600">
                Popular, well-supported tools that are easy to maintain and easy to hire for as your store grows.
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
              <p className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <Smartphone size={16} className="text-[#0057ff]" />
                Designed mobile-first, because most of your buyers will shop on a phone.
              </p>
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
                Ready to start selling online?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us what you sell and roughly how many products you have. We'll reply with a clear plan and a fixed quote.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to="/proposal?type=ecommerce"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0057ff] shadow-lg transition-all hover:bg-slate-100 active:scale-95 sm:w-auto"
                >
                  Start my store <ArrowRight size={16} />
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
              to="/proposal?type=ecommerce"
              className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,87,255,0.35)] active:scale-95 ${gradBg}`}
            >
              Launch my store <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default EcommerceWebService;