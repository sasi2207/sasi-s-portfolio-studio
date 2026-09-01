import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  CreditCard,
  ShieldCheck,
  Zap,
  BarChart3,
  Truck,
  ArrowRight,
  Sparkles,
  Smartphone,
  MessageCircle,
  X,
  FileText,
  Clock,
  HelpCircle,
  Send,
  Layers,
  CheckCircle,
  Package,
  Tag,
  Users,
  Store,
  Layers3,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

/* ------------------------------------------------------------------
   1. ANIMATION HOOK: Smooth scroll reveal
--------------------------------------------------------------------- */
const useBlurReveal = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (el: HTMLDivElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
};

/* ------------------------------------------------------------------
   2. E-COMMERCE INDUSTRY SOLUTIONS DATA
--------------------------------------------------------------------- */
const ecommerceSolutions = [
  {
    icon: ShoppingBag,
    title: "Fashion & Clothing Stores",
    text: "Style-focused storefronts with size/color variations, high-resolution galleries, and smooth category filtering.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Smartphone,
    title: "Electronics & Gadgets Stores",
    text: "Technical specification grids, comparison tools, warranty add-ons, and secure high-value checkout flows.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Package,
    title: "Grocery & Food Stores",
    text: "Rapid catalog browsing, slot-based delivery management, recurring orders, and localized inventory tracking.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Zap,
    title: "Sports & Fitness Stores",
    text: "Performance gear catalogs with filter-by-activity parameters, inventory alerts, and loyalty rewards.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Sparkles,
    title: "Beauty & Personal Care Stores",
    text: "Aesthetic product displays, ingredient highlights, bundle offers, and sample management integrations.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Store,
    title: "Furniture & Home Stores",
    text: "Dimension guides, freight shipping fee calculators, room visualizer embeds, and multi-angle zoom features.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Jewellery & Luxury Stores",
    text: "High-security certificate verification links, insurance integration options, and bespoke appointment bookings.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Layers3,
    title: "B2B, Wholesale & Custom Stores",
    text: "Tiered wholesale pricing, bulk order forms, client-specific approval workflows, and multi-vendor models.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. E-COMMERCE FEATURES LIST
--------------------------------------------------------------------- */
const ecommerceFeaturesList = [
  "Advanced Product Management (Sizes, Colors, Stock)",
  "Seamless Cart & One-Page Secure Checkout",
  "Customer Accounts & Order History Tracking",
  "Secure Online Payment Gateway Integration",
  "Dynamic Search, Filters & Category Sorting",
  "Coupons, Discounts & Promotional Banners",
  "WhatsApp Direct Enquiry & Customer Support",
  "Powerful Real-Time Admin Dashboard Panel",
  "Automated Low-Stock & Order Notifications",
  "Reports & Sales Analytics Export",
  "Multi-Currency & Regional Tax Calculations",
  "Cloud Image Storage & High-Speed CDN",
];

/* ------------------------------------------------------------------
   4. DEVELOPMENT PROCESS DATA
--------------------------------------------------------------------- */
const ecommerceProcessSteps = [
  {
    step: "01",
    title: "Understand Your Business",
    desc: "We learn about your products, target customers, delivery logistics, and sales goals.",
    icon: Users,
  },
  {
    step: "02",
    title: "Plan Your Store",
    desc: "We define page architecture, product categories, feature sets, and the customer checkout journey.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Design",
    desc: "We create a clean, high-conversion shopping interface that matches your unique brand identity.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Develop",
    desc: "We build your online store, admin dashboard, cart pipeline, and required secure integrations.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Test",
    desc: "We test payment gateways, responsiveness, and overall shopping flows across all devices.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch & Support",
    desc: "We help deploy your store live to the world and provide continuous support for future growth.",
    icon: Truck,
  },
];

/* ------------------------------------------------------------------
   5. PRICING PACKAGES (Store Tiers with DM Routing)
--------------------------------------------------------------------- */
const ecommercePricingPlans = [
  {
    id: "starter-store",
    title: "Starter Online Store",
    price: "₹35,000+",
    description: "Professional e-commerce website designed for small businesses taking their catalog online.",
    deliveryTime: "10 - 14 Working Days",
    idealFor: "New Brands, Boutiques & Single Vendors",
    features: [
      "Custom responsive storefront design",
      "Up to 100 products setup & category management",
      "Secure Online Payment Gateway Integration",
      "Customer accounts & order tracking",
      "Standard Admin Dashboard Panel"
    ],
    highlighted: false,
  },
  {
    id: "growth-store",
    title: "Growth E-Commerce Platform",
    price: "₹70,000+",
    description: "Advanced high-performance store featuring automated inventory, coupons, and WhatsApp integration.",
    deliveryTime: "15 - 25 Working Days",
    idealFor: "Growing Retail Brands & Multi-Category Stores",
    features: [
      "Unlimited product listings & advanced filters",
      "Coupons, discounts & promotional banners engine",
      "WhatsApp direct enquiry & instant support widgets",
      "Advanced Admin Dashboard & Sales Analytics",
      "Speed optimized with high-performance CDN"
    ],
    highlighted: true,
  },
  {
    id: "enterprise-store",
    title: "Enterprise Multi-Vendor Store",
    price: "₹1,30,000+",
    description: "Fully custom scale-out store with multi-vendor architecture, ERP sync, and custom logistics.",
    deliveryTime: "30+ Working Days",
    idealFor: "Large Scale Marketplaces & Wholesale Hubs",
    features: [
      "Multi-vendor seller portals & commission tracking",
      "Custom third-party ERP & inventory API sync",
      "Advanced tax calculation & multi-currency engine",
      "Dedicated developer support & priority SLA",
      "Bespoke security guardrails & high-concurrency scaling"
    ],
    highlighted: false,
  },
];

const EcommerceWebService = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) Form State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I selected the '${planTitle}' plan for E-Commerce Website Development. Let's build my online store!`
      : `Hello TechSasi, I want to build a high-conversion e-commerce website for my business. Let's discuss!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here are my e-commerce store requirements:\n\n"${dmMessage}"`);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setDmMessage("");
    }, 4000);
  };

  return (
    <PageLayout>
      {/* CSS for Full Page Box Grid Background Lines with Orange Accent */}
      <style>{`
        .bg-grid-box-full {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(249, 115, 22, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.08) 1px, transparent 1px);
        }
      `}</style>

      {/* Main Wrapper with Black Background & Box Grid Lines */}
      <div className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-black bg-grid-box-full relative overflow-x-hidden">
        
        {/* ================= HERO SECTION ================= */}
        <ParallaxSection
          className="pt-40 pb-32 relative overflow-hidden"
          bgClassName="bg-black/90 border-b border-zinc-900 backdrop-blur-md"
        >
          {/* Glowing Ambient Backdrop */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-600/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center relative z-10 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
                E-Commerce Architecture & Engineering
              </span>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black uppercase mb-6 tracking-tight leading-tight text-white">
                Take Your Products Online and{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Start Selling
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Want to sell your products online? We build modern, high-conversion e-commerce websites that make it effortless for customers to discover items, place orders, and complete secure purchases.
              </p>

              <div className="flex flex-wrap justify-center gap-4 items-center">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 group cursor-pointer"
                >
                  Build My E-Commerce Website <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-7 py-4 rounded-xl transition duration-300 shadow-xl group cursor-pointer"
                >
                  <MessageCircle size={20} className="text-emerald-400 group-hover:text-white transition-colors" />
                  WhatsApp: 7448788897
                </button>
              </div>
            </motion.div>
          </div>
        </ParallaxSection>

        {/* ================= VALUE STATEMENT ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 relative backdrop-blur-md">
          <div
            ref={reveal}
            className="container-custom max-w-6xl px-6 lg:px-12 blur-reveal text-center"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-200">
              At <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">TechSasi</span>, we create modern and user-friendly e-commerce websites built around your products. Whether you are starting a new digital store or moving an established business online,{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                we build everything you need to manage your store and serve your customers.
              </span>
            </p>
          </div>
        </section>

        {/* ================= WHAT WE CAN BUILD (INDUSTRIES) ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Industry Verticals
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What We Can Build
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Every business sells differently. We engineer custom online stores tailored for your specific industry.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceSolutions.map((sol) => (
              <div
                key={sol.title}
                ref={reveal}
                className={`blur-reveal group relative bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl transition duration-300 ${sol.borderColor} overflow-hidden backdrop-blur-sm shadow-md`}
              >
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl -z-10 ${sol.glowColor}`} />
                <sol.icon className="text-orange-400 mb-5 w-8 h-8 transform group-hover:scale-110 transition duration-300" />
                <h3 className="font-semibold text-xl mb-3 text-white">
                  {sol.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{sol.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= YOUR ONLINE STORE, YOUR WAY ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Store Customization
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Your Online Store, Your Way
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Showcase your inventory with stunning images, descriptions, dynamic pricing, special offers, size/color variations, and stock tracking — all in one centralized platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <ShoppingBag className="text-orange-400" /> Smooth Shopping Experience
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  Give your customers an intuitive storefront where they can effortlessly browse products, apply search filters, add items to their cart, and complete orders in seconds.
                </p>
                <ul className="space-y-2.5 text-zinc-300 text-sm">
                  {[
                    "Instant category sorting and lightning-fast search",
                    "Frictionless guest or account checkout pipelines",
                    "Mobile-optimized touch layouts for seamless shopping on phones"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="text-orange-400" /> Powerful Admin Panel
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  Managing your digital store should be simple. With our easy-to-use admin dashboard, you retain total control over your business operations:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                  {["Products & Categories", "Orders & Delivery", "Inventory Tracking", "Coupons & Discounts", "Customer Management", "Reports & Analytics"].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-zinc-950 p-2.5 rounded-xl border border-zinc-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES YOUR STORE CAN HAVE ================= */}
        <section className="py-24 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Feature Matrix
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Features Your Store Can Have
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                Equip your e-commerce platform with the exact tools needed to maximize sales and customer satisfaction.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecommerceFeaturesList.map((feat) => (
                <div
                  key={feat}
                  ref={reveal}
                  className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl flex items-center gap-3 text-white hover:border-orange-500/50 hover:bg-zinc-900 transition duration-300 shadow-sm backdrop-blur-sm"
                >
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={20} />
                  <span className="font-medium text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STEP-BY-STEP PROCESS ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 relative z-10">
            <div ref={reveal} className="blur-reveal mb-20 text-center max-w-3xl mx-auto">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Store Development Lifecycle
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                How We Build Your Store
              </h2>
              <p className="text-lg text-zinc-300">
                A structured engineering framework designed by <span className="text-orange-400 font-semibold">TechSasi</span> to take your retail business online successfully.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {ecommerceProcessSteps.map((item, idx) => (
                <div
                  key={item.step}
                  ref={reveal}
                  className="blur-reveal group relative bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/50 p-8 rounded-2xl transition duration-300 flex flex-col justify-between shadow-lg backdrop-blur-sm"
                >
                  <div className="absolute top-6 right-6 text-3xl font-black text-zinc-800 group-hover:text-orange-500/20 transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-semibold text-orange-400">
                    <span>Phase {idx + 1} Milestone</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRICING PACKAGES SECTION ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                E-Commerce Store <span className="text-orange-400">Pricing Packages</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Transparent store development tiers built for startups, growing brands, and enterprise multi-vendor marketplaces. Click any plan to review specifications and initiate direct WhatsApp messaging.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {ecommercePricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  ref={reveal}
                  className={`blur-reveal flex flex-col justify-between p-8 rounded-2xl transition duration-300 relative backdrop-blur-sm ${
                    plan.highlighted
                      ? "bg-zinc-900 border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-105 z-10"
                      : "bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-white">{plan.title}</h3>
                    <p className="text-zinc-300 text-sm mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-3 text-zinc-200 text-sm items-start">
                          <CheckCircle className="text-orange-400 mt-0.5 flex-shrink-0" size={16} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full text-center font-semibold py-3.5 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold hover:from-orange-600 hover:to-amber-600 shadow-md"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                    }`}
                  >
                    <FileText size={16} /> Select Plan & DM
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DIRECT MESSAGE (DM) SECTION ================= */}
        <section id="direct-message-section" className="py-24 bg-black/95 relative backdrop-blur-md">
          <div className="container-custom max-w-4xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-orange-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3">
                  Direct Messenger (DM)
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white">
                  Ready to Start Selling Online? Tell <span className="text-orange-400">TechSasi</span>
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Your customers are already online. Send your e-commerce store requirements directly to our WhatsApp DM (+91 7448788897) and let's build your store.
                </p>
              </div>

              {isSent ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 p-6 rounded-2xl text-center font-semibold animate-pulse">
                  ✅ Store requirements formatted successfully! Redirecting directly to WhatsApp DM...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Describe your online store concept here (e.g., Hi TechSasi, I want to sell clothing online with payment gateway and admin panel...)"
                      className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-orange-500 rounded-2xl p-4 text-white text-sm placeholder-zinc-500 focus:outline-none transition resize-none shadow-inner"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Direct WhatsApp Line: 7448788897
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-xl shadow-orange-500/20 cursor-pointer"
                      >
                        <Send size={16} /> Send WhatsApp DM
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ================= CTA FINAL SECTION ================= */}
        <section className="py-20 bg-black/95 relative backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-orange-500/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Ready to Build Your Online Store?
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Tell us what you want to sell. <span className="text-orange-400 font-bold">TechSasi</span> will help you build an e-commerce website that works for your business.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const dmSection = document.getElementById("direct-message-section");
                    dmSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Build My E-Commerce Website <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl cursor-pointer"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp: 7448788897
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PLAN DETAILS & WHATSAPP MODAL ================= */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
            <div className="bg-zinc-900 border border-orange-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-stretch my-auto max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded-full transition cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800 pb-5 md:pb-0 md:pr-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3">
                    Selected Package
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedPlan.title}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-3">{selectedPlan.price}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{selectedPlan.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3.5 sm:p-4 rounded-2xl border border-zinc-800">
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Clock size={12} className="text-orange-400" /> Delivery Time
                    </span>
                    <span className="text-white text-xs font-semibold">{selectedPlan.deliveryTime}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <HelpCircle size={12} className="text-orange-400" /> Ideal For
                    </span>
                    <span className="text-white text-[11px] sm:text-xs font-medium">{selectedPlan.idealFor}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between pt-2 md:pt-0">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3">
                    What's Included in this Plan:
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3 mb-6">
                    {selectedPlan.features.map((feat: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-zinc-200 text-xs sm:text-sm">
                        <CheckCircle className="text-orange-400 mt-0.5 flex-shrink-0" size={16} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => handleWhatsAppClick(selectedPlan.title)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 sm:px-5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer text-xs sm:text-sm"
                  >
                    <MessageCircle size={18} /> Confirm via WhatsApp DM
                  </button>
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3.5 px-4 sm:px-5 rounded-xl transition cursor-pointer text-xs sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </PageLayout>
  );
};

export default EcommerceWebService;