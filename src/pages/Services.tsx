import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { ServiceCardIcon, ServiceIconType } from "@/components/services/ServiceCardIcon";
import { ServiceDropdownSelector } from "@/components/services/ServiceDropdownSelector";
import servicesData from "@/data/services.json";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Search,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  PhoneCall,
  ChevronRight,
  ChevronDown,
  Layers,
  ExternalLink,
} from "lucide-react";

export const servicePagesList = [
  {
    number: "01",
    name: "Static Website Development",
    file: "StaticWebService.tsx",
    path: "/services/static-web",
    headline: "Blazing-Fast Static Websites",
    badge: "Speed & SEO",
  },
  {
    number: "02",
    name: "Dynamic Web Development",
    file: "DynamicWebService.tsx",
    path: "/services/dynamic-web",
    headline: "Scalable Dynamic Web Apps",
    badge: "Portals & CRUD",
  },
  {
    number: "03",
    name: "E-Commerce Development",
    file: "EcommerceWebService.tsx",
    path: "/services/ecommerce",
    headline: "High-Converting E-Commerce Stores",
    badge: "Store & Payments",
  },
  {
    number: "04",
    name: "Mobile Application Development",
    file: "AppDevelopmentService.tsx",
    path: "/services/mobile-app",
    headline: "Cross-Platform Mobile Apps",
    badge: "iOS & Android",
  },
  {
    number: "05",
    name: "Custom ERP & Business Automation",
    file: "BusinessWebService.tsx",
    path: "/services/business-web",
    headline: "Custom ERP & Business Automation",
    badge: "Operations ERP",
  },
  {
    number: "06",
    name: "Cloud Infrastructure & DevOps",
    file: "DeploymentHostingService.tsx",
    path: "/services/deployment-hosting",
    headline: "Secure Cloud & DevOps",
    badge: "99.9% Uptime",
  },
  {
    number: "07",
    name: "Digital Marketing & SEO",
    file: "DigitalMarketingService.tsx",
    path: "/services/digital-marketing",
    headline: "Growth-Driven Digital Marketing & SEO",
    badge: "GEO & Google Rank",
  },
  {
    number: "08",
    name: "TechSasi Academy & Mentorship",
    file: "ComputerCoachingServices.tsx",
    path: "/services/coaching",
    headline: "TechSasi Academy & Mentorship",
    badge: "1-on-1 Coaching",
  },
];

interface ServiceItem {
  id: string;
  iconType: ServiceIconType;
  serviceNumber: string;
  title: string;
  headline: string;
  description: string;
  actionableCta: string;
  path: string;
  proposalType: string;
  category: string;
  timeline: string;
  features: string[];
  techStack: string[];
}

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allServices: ServiceItem[] = servicesData.services as ServiceItem[];

  // Filter services by category and search
  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesCategory =
        activeCategory === "all" ||
        (activeCategory === "web-mobile" && (service.category === "web" || service.category === "mobile")) ||
        (activeCategory === "enterprise-cloud" && (service.category === "enterprise" || service.category === "cloud")) ||
        (activeCategory === "growth-training" && (service.category === "growth" || service.category === "training"));

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.headline.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [allServices, activeCategory, searchQuery]);

  const handleCtaClick = (service: ServiceItem) => {
    if (service.id === "academy-mentorship") {
      navigate("/services/coaching");
    } else {
      navigate(`/proposal?type=${service.proposalType}`);
    }
  };

  return (
    <Layout>
      {/* 1. HERO SECTION: Clean Proposition & Value Anchor */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 bg-slate-50 dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="pb-1">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", active: true },
                ]}
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
              <span className="font-semibold uppercase tracking-wider">Engineering Disciplines</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600 dark:text-slate-400">8 Core Capabilities</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
              Engineered for Maximum User Engagement & Commercial Conversion.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl pt-1">
              Explore our 8 restructured software services. Every solution is built with production-grade architectures, high-performance UI/UX, and transparent implementation deliverables.
            </p>

            {/* Value Highlights Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500" />
                <span className="font-medium">60fps Responsive UI/UX</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500" />
                <span className="font-medium">Direct Developer Communication</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500" />
                <span className="font-medium">Turnkey Production Deployment</span>
              </div>
            </div>

            {/* Quick Jump Dropdown Menu */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Direct Pages:
              </span>
              <ServiceDropdownSelector
                variant="pill"
                align="left"
                label="Select Service Page (8 Pages)"
                showFileName={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="py-4 bg-white/95 dark:bg-[#07090E]/95 border-b border-slate-200 dark:border-white/[0.06] sticky top-16 z-30 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Interactive Category Segmented Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {[
                { id: "all", label: "All 8 Services" },
                { id: "web-mobile", label: "Web & Mobile" },
                { id: "enterprise-cloud", label: "Enterprise & Cloud" },
                { id: "growth-training", label: "Growth & Academy" },
              ].map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? "text-slate-950 font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceTabPill"
                        className="absolute inset-0 bg-amber-400 rounded-lg shadow-sm -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Field & Interactive Service Pages Dropdown */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Interactive Service Pages Dropdown List */}
              <ServiceDropdownSelector
                variant="button"
                align="left"
                label="Select Service Page"
                showFileName={true}
              />

              {/* Quick Search Field */}
              <div className="relative w-full sm:w-56 shrink-0">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter by keyword or stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all min-h-[34px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 8 SERVICES GRID WITH CARD HOVER EFFECTS, BREATHING SPACING & HIGH CONTRAST */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 space-y-3 bg-white dark:bg-[#0B101D] rounded-2xl border border-slate-200 dark:border-white/[0.08] p-8">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No engineering discipline matches "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {filteredServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="group relative rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/50 dark:hover:border-amber-500/40 p-8 sm:p-9 md:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5 hover:-translate-y-1.5"
                >
                  {/* Top Meta: Editorial Number & Timeline */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.06] text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">
                          {service.serviceNumber}.
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                          {service.title}
                        </span>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-white/[0.05]">
                        Est. {service.timeline}
                      </span>
                    </div>

                    {/* Icon & Headline Lockup */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-1">
                      {/* Interactive Hover Zoom on Icon Container */}
                      <ServiceCardIcon
                        type={service.iconType}
                        className="shrink-0"
                      />
                      
                      <div className="space-y-1">
                        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors leading-tight">
                          {service.headline}
                        </h2>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 font-mono">
                          TechSasi Solution Matrix
                        </p>
                      </div>
                    </div>

                    {/* High-Contrast Description with Generous Breathing Space */}
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist with High-Contrast Text */}
                    <div className="pt-2 space-y-2.5">
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                        Key Deliverables & Specifications:
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack Tags */}
                    <div className="pt-2">
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2">
                        Production Technologies:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1 rounded border border-slate-200 dark:border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer with Primary Actionable CTA */}
                  <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6 flex items-center justify-start">
                    <button
                      type="button"
                      onClick={() => handleCtaClick(service)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-300 hover:to-orange-400 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 cursor-pointer transform active:scale-98 whitespace-nowrap"
                    >
                      <span>{service.actionableCta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. CLAIM-TO-PROOF & PROCESS SUB-SECTION */}
      <section className="py-20 bg-white dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Box 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.06] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Ultra-Fast Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                From initial scoping call to production delivery in 1 to 6 weeks. No bloated management hierarchies or stalled handoffs.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.06] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                100% Code Ownership
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Full repository ownership, documentation, environment secrets, and intellectual property handed over upon delivery.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.06] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Direct Engineering Lead
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Collaborate directly with the engineers building your code. Direct WhatsApp, phone, and Slack communication channels.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BLOCK: CONCRETE ACTION */}
      <section className="py-20 bg-slate-50 dark:bg-[#05070D] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
            <span>Tailored Proposals</span>
            <span aria-hidden="true">·</span>
            <span>Salem & Worldwide</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white text-balance">
            Ready to Build a High-Performance Digital Product?
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Get an instant custom estimate and breakdown for your project. Choose features, calculate timelines, and generate a transparent proposal in under 2 minutes.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/proposal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-300 hover:to-orange-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Build Custom Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.1] rounded-xl transition-colors"
            >
              <span>Speak with Engineering Team</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
