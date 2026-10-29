import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  LayoutDashboard,
  Sparkles,
  Briefcase,
  Compass,
  Mail,
  Lock,
  Home,
  Layers,
  GraduationCap,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Building2,
  Users,
  Receipt,
  Server,
  TrendingUp,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/common/BrandLogo";
import { NavbarSkeleton } from "./NavbarSkeleton";

type DropdownCategoryKey = "web_mobile" | "enterprise_cloud" | "growth_academy";

interface ServiceItem {
  number: string;
  name: string;
  headline: string;
  desc: string;
  path: string;
  badge: string;
  turnaround: string;
  icon: React.ElementType;
}

const dropdownCategories: Record<
  DropdownCategoryKey,
  {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    services: ServiceItem[];
  }
> = {
  web_mobile: {
    title: "Web & Mobile Ecosystems",
    subtitle: "High-velocity web apps, stores, and cross-platform native builds",
    icon: Globe,
    services: [
      {
        number: "01",
        name: "Static Web Development",
        headline: "Blazing 100/100 PageSpeed",
        desc: "Ultra-fast modern landing pages and corporate presence with zero bloat.",
        path: "/services/static-web",
        badge: "Speed & SEO",
        turnaround: "5-7 Days",
        icon: Globe,
      },
      {
        number: "02",
        name: "Dynamic Web Applications",
        headline: "Scalable SaaS & Portals",
        desc: "Custom interactive dashboards, authenticated client portals, and APIs.",
        path: "/services/dynamic-web",
        badge: "React & Next.js",
        turnaround: "2-3 Weeks",
        icon: Cpu,
      },
      {
        number: "03",
        name: "E-Commerce Stores",
        headline: "High-Conversion Checkout",
        desc: "Razorpay/UPI integration, inventory sync, and multi-currency support.",
        path: "/services/ecommerce",
        badge: "UPI & Cart",
        turnaround: "10-14 Days",
        icon: ShoppingCart,
      },
      {
        number: "04",
        name: "Mobile App Development",
        headline: "Cross-Platform iOS & Android",
        desc: "Unified codebases with native responsiveness and offline cache support.",
        path: "/services/mobile-app",
        badge: "iOS & Android",
        turnaround: "3-4 Weeks",
        icon: Smartphone,
      },
    ],
  },
  enterprise_cloud: {
    title: "Enterprise ERP & Cloud",
    subtitle: "Internal business automation, databases, POS, and DevOps uptime",
    icon: Database,
    services: [
      {
        number: "05",
        name: "Enterprise ERP Software",
        headline: "Centralized Supply & Inventory",
        desc: "End-to-end multi-warehouse tracking, role permissions, and audits.",
        path: "/services/erp",
        badge: "Core ERP",
        turnaround: "3-5 Weeks",
        icon: Database,
      },
      {
        number: "06",
        name: "SRM & CRM Solutions",
        headline: "Vendor & Client Lifecycle",
        desc: "Lead pipeline tracking, purchase order flows, and quotation engines.",
        path: "/services/crm",
        badge: "Pipelines",
        turnaround: "2-3 Weeks",
        icon: Users,
      },
      {
        number: "07",
        name: "HRM & Automated Payroll",
        headline: "Biometric & Salary Engine",
        desc: "One-click payslips, attendance hooks, leave approvals, and tax splits.",
        path: "/services/hrm",
        badge: "Payroll SLA",
        turnaround: "2 Weeks",
        icon: Building2,
      },
      {
        number: "08",
        name: "GST Billing & POS Hardware",
        headline: "Sub-Second Barcode Print",
        desc: "Offline-ready desktop retail billing with thermal printing support.",
        path: "/services/billing",
        badge: "GST Compliant",
        turnaround: "7-10 Days",
        icon: Receipt,
      },
    ],
  },
  growth_academy: {
    title: "Growth, Cloud & Academy",
    subtitle: "Deployments, digital visibility, and real-world tech mentorship",
    icon: Zap,
    services: [
      {
        number: "09",
        name: "Cloud Hosting & DevOps",
        headline: "99.9% Production SLA",
        desc: "Automated GitHub Actions, CDN caching, SSL certs, and backup mirrors.",
        path: "/services/deployment-hosting",
        badge: "DevOps",
        turnaround: "Instant/48 Hrs",
        icon: Server,
      },
      {
        number: "10",
        name: "Custom Workflow ERP",
        headline: "Bespoke Automation",
        desc: "Tailor-made backend logic built to replace complex manual spreadsheets.",
        path: "/services/business-web",
        badge: "Custom Logic",
        turnaround: "Milestone-based",
        icon: Layers,
      },
      {
        number: "11",
        name: "Digital Marketing & SEO",
        headline: "High Intent Rank & GEO",
        desc: "Search engine dominance for regional and nationwide search intent.",
        path: "/services/digital-marketing",
        badge: "Growth Engine",
        turnaround: "Monthly SLA",
        icon: TrendingUp,
      },
      {
        number: "12",
        name: "TechSasi Academy Mentorship",
        headline: "1-on-1 Practical Training",
        desc: "Production-level full-stack training in React, Next.js, and backend APIs.",
        path: "/services/coaching",
        badge: "Mentorship",
        turnaround: "Cohort-based",
        icon: GraduationCap,
      },
    ],
  },
};

const allNavLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Services", path: "/services", icon: Briefcase, hasDropdown: true },
  { name: "Projects", path: "/projects", icon: Layers },
  { name: "About", path: "/about", icon: Compass },
  { name: "Careers", path: "/careers", icon: GraduationCap, badge: "Hiring" },
  { name: "Contact", path: "/contact", icon: Mail },
];

export interface NavbarProps {
  isLoading?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isLoading = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<DropdownCategoryKey>("web_mobile");
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClientLoggedIn, setIsClientLoggedIn] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClientLoggedIn(Boolean(localStorage.getItem("token")));
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setIsServicesDropdownOpen(false);
      setIsMobileServicesExpanded(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  if (isLoading) {
    return <NavbarSkeleton />;
  }

  const isAnyServiceActive =
    location.pathname.startsWith("/services") || location.pathname.startsWith("/service");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-7xl mx-auto transition-all duration-300 rounded-2xl lg:rounded-full bg-white/95 border backdrop-blur-xl px-4 sm:px-6 py-2.5 sm:py-3",
            scrolled
              ? "border-cyan-400 shadow-[0_12px_36px_-6px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/20"
              : "border-slate-200 shadow-[0_4px_24px_-4px_rgba(6,182,212,0.1)]"
          )}
        >
          <nav className="relative flex items-center justify-between w-full h-11 sm:h-12">
            
            {/* Left Brand Identity */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="group flex items-center focus-visible:outline-none hover:opacity-90 transition-opacity"
                aria-label="TechSasi Home"
              >
                <BrandLogo align="left" size="sm" showColorDot={true} techTextColor="text-black" />
              </Link>
            </div>

            {/* Desktop Center Navigation Island */}
            <div className="hidden lg:flex items-center gap-1 bg-gradient-to-r from-cyan-50/70 via-white to-blue-50/70 p-1.5 rounded-full border border-cyan-200/90 shadow-inner">
              {allNavLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== "/" && location.pathname.startsWith(link.path));

                if (link.name === "Services") {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className={cn(
                          "text-xs xl:text-sm font-bold transition-all duration-200 relative py-2 px-4 rounded-full flex items-center gap-1.5 cursor-pointer outline-none",
                          isAnyServiceActive || isServicesDropdownOpen
                            ? "bg-white text-cyan-600 shadow-[0_2px_12px_rgba(6,182,212,0.25)] border border-cyan-400"
                            : "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50/80"
                        )}
                        aria-expanded={isServicesDropdownOpen}
                      >
                        <span>Services</span>
                        <ChevronDown
                          size={13}
                          className={cn(
                            "transition-transform duration-200 text-cyan-500",
                            isServicesDropdownOpen ? "rotate-180 text-blue-600" : ""
                          )}
                        />
                      </button>

                      {/* Interactive Megamenu with Vivid Electric Cyan & Electric Blue */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[880px] rounded-3xl bg-white border-2 border-cyan-400/90 p-5 z-50 shadow-[0_25px_65px_-12px_rgba(6,182,212,0.35)] overflow-hidden"
                          >
                            <div className="grid grid-cols-12 gap-5">
                              
                              {/* Left Vertical Category Nav with Cyan / Blue Highlights */}
                              <div className="col-span-4 space-y-2 border-r border-cyan-100 pr-4">
                                <div className="px-3 py-1.5 text-[10px] font-mono font-extrabold uppercase tracking-widest text-cyan-800 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                                  <span>Core Engineering Tracks</span>
                                </div>

                                {(Object.keys(dropdownCategories) as DropdownCategoryKey[]).map((key) => {
                                  const cat = dropdownCategories[key];
                                  const isSelected = activeTab === key;
                                  const Icon = cat.icon;

                                  return (
                                    <button
                                      key={key}
                                      type="button"
                                      onMouseEnter={() => setActiveTab(key)}
                                      onClick={() => setActiveTab(key)}
                                      className={cn(
                                        "w-full text-left p-3 rounded-2xl transition-all cursor-pointer flex items-center justify-between border",
                                        isSelected
                                          ? "bg-gradient-to-r from-cyan-100/70 via-sky-100/50 to-blue-100/70 border-cyan-400 text-slate-950 shadow-[0_4px_16px_rgba(6,182,212,0.2)]"
                                          : "border-transparent text-slate-600 hover:bg-cyan-50/60 hover:text-cyan-900"
                                      )}
                                    >
                                      <div className="flex items-center gap-3 min-w-0">
                                        <div
                                          className={cn(
                                            "p-2 rounded-xl border transition-all shrink-0",
                                            isSelected
                                              ? "bg-gradient-to-br from-cyan-400 to-blue-600 text-white border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                                              : "bg-slate-100 border-slate-200 text-slate-500"
                                          )}
                                        >
                                          <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0">
                                          <div className={cn("text-xs font-bold truncate", isSelected ? "text-cyan-950" : "text-slate-800")}>
                                            {cat.title}
                                          </div>
                                          <div className="text-[10px] text-cyan-700 font-mono truncate">
                                            {cat.services.length} Specialized Tracks
                                          </div>
                                        </div>
                                      </div>

                                      <ArrowRight
                                        className={cn(
                                          "w-3.5 h-3.5 transition-transform",
                                          isSelected ? "text-blue-600 translate-x-1" : "text-slate-300"
                                        )}
                                      />
                                    </button>
                                  );
                                })}

                                {/* Quick Assurance Badge with Cyan Lighting */}
                                <div className="p-3 mt-3 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 space-y-1">
                                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-cyan-900">
                                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                                    <span>100% IP & Full Git Repos</span>
                                  </div>
                                  <p className="text-[10px] text-slate-600 leading-relaxed">
                                    You own all production builds, credentials, and Git commits upon project handover.
                                  </p>
                                </div>
                              </div>

                              {/* Right Interactive Service Bento Cards with Electric Borders */}
                              <div className="col-span-8 flex flex-col justify-between pl-1">
                                <div>
                                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-100">
                                    <div>
                                      <h4 className="text-sm font-extrabold text-slate-900">
                                        {dropdownCategories[activeTab].title}
                                      </h4>
                                      <p className="text-[11px] text-slate-500">
                                        {dropdownCategories[activeTab].subtitle}
                                      </p>
                                    </div>
                                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_2px_10px_rgba(6,182,212,0.35)]">
                                      Guaranteed Turnaround
                                    </span>
                                  </div>

                                  <div className="grid grid-cols-2 gap-3">
                                    {dropdownCategories[activeTab].services.map((item) => {
                                      const ItemIcon = item.icon;
                                      return (
                                        <Link
                                          key={item.path}
                                          to={item.path}
                                          onClick={() => setIsServicesDropdownOpen(false)}
                                          className="group p-3 rounded-2xl border border-slate-200/80 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-50/70 hover:to-blue-50/50 transition-all flex flex-col justify-between h-[112px] shadow-2xs hover:shadow-[0_4px_16px_rgba(6,182,212,0.18)]"
                                        >
                                          <div className="flex items-start justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                              <div className="p-1.5 rounded-lg bg-cyan-100/70 border border-cyan-200 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400 transition-colors text-cyan-800">
                                                <ItemIcon className="w-3.5 h-3.5" />
                                              </div>
                                              <span className="text-xs font-bold text-slate-900 group-hover:text-cyan-700 transition-colors truncate">
                                                {item.name}
                                              </span>
                                            </div>
                                            <span className="text-[10px] font-mono text-cyan-600 font-extrabold shrink-0 px-1.5 py-0.5 rounded bg-cyan-50 border border-cyan-200">
                                              {item.number}
                                            </span>
                                          </div>

                                          <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                                            {item.desc}
                                          </p>

                                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1.5 border-t border-cyan-100">
                                            <span className="text-blue-700 font-bold">{item.badge}</span>
                                            <span className="text-slate-400 font-semibold">{item.turnaround}</span>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>

                                {/* Megamenu Sub-bar with Electric Blue CTA */}
                                <div className="pt-3.5 mt-3 border-t border-cyan-100 flex items-center justify-between text-xs font-mono">
                                  <Link
                                    to="/services"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                    className="text-slate-700 hover:text-cyan-700 flex items-center gap-1 font-bold transition-colors"
                                  >
                                    <span>Browse all 12 services</span>
                                    <ArrowUpRight size={13} className="text-cyan-500" />
                                  </Link>

                                  <Link
                                    to="/proposal"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-[11px] font-extrabold uppercase tracking-wider shadow-[0_4px_16px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_22px_rgba(6,182,212,0.6)] transition-all cursor-pointer active:scale-95"
                                  >
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>Calculate Project Cost</span>
                                  </Link>
                                </div>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-xs xl:text-sm font-bold transition-all duration-200 relative py-2 px-4 rounded-full flex items-center gap-1.5",
                      isActive
                        ? "bg-white text-cyan-600 shadow-[0_2px_12px_rgba(6,182,212,0.25)] border border-cyan-400"
                        : "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50/80"
                    )}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-cyan-100 text-cyan-800 border border-cyan-300">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Quick Action Dock with Electric Blue Gradient Pill */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to={isClientLoggedIn ? "/dashboard" : "/login"}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full border border-cyan-200 bg-cyan-50/60 text-cyan-900 hover:border-cyan-400 hover:bg-cyan-100 hover:text-cyan-950 transition-all shadow-xs"
              >
                {isClientLoggedIn ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    <LayoutDashboard className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Dashboard</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Portal</span>
                  </>
                )}
              </Link>

              <Link
                to="/proposal"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 rounded-full shadow-[0_4px_20px_rgba(6,182,212,0.45)] hover:shadow-[0_6px_28px_rgba(6,182,212,0.65)] transition-all active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full text-slate-800 hover:bg-cyan-50 hover:text-cyan-700 border border-cyan-200 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5 text-cyan-600" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer with Electric Cyan Accentuation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-[90] lg:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="fixed top-0 right-0 z-[100] h-full w-[88%] sm:w-[380px] bg-white text-slate-800 border-l-2 border-cyan-400/80 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-cyan-100">
                  <BrandLogo align="left" size="sm" showColorDot={true} techTextColor="text-black" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full border border-cyan-200 text-slate-500 hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-cyan-800 px-1">
                    Navigation
                  </div>

                  <nav className="space-y-1">
                    {allNavLinks.map((link) => {
                      const isActive =
                        location.pathname === link.path ||
                        (link.path !== "/" && location.pathname.startsWith(link.path));
                      const IconComponent = link.icon;

                      if (link.name === "Services") {
                        return (
                          <div
                            key={link.path}
                            className="rounded-2xl border border-cyan-200 bg-cyan-50/40 overflow-hidden"
                          >
                            <button
                              type="button"
                              onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                              className="w-full flex items-center justify-between p-3 text-left font-bold text-sm"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded-lg bg-white border border-cyan-300 text-cyan-600 shadow-xs">
                                  <Briefcase size={15} />
                                </div>
                                <span className="text-cyan-950">Services</span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-200/80 text-cyan-900 font-extrabold">
                                  12
                                </span>
                              </div>
                              <ChevronDown
                                size={15}
                                className={cn(
                                  "transition-transform text-cyan-600",
                                  isMobileServicesExpanded ? "rotate-180 text-blue-600" : ""
                                )}
                              />
                            </button>

                            <AnimatePresence>
                              {isMobileServicesExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="border-t border-cyan-100 bg-white p-2 space-y-3 max-h-64 overflow-y-auto"
                                >
                                  {(Object.keys(dropdownCategories) as DropdownCategoryKey[]).map((key) => {
                                    const cat = dropdownCategories[key];
                                    return (
                                      <div key={key} className="space-y-1">
                                        <div className="text-[10px] font-mono font-bold uppercase text-cyan-700 px-2 pt-1">
                                          {cat.title}
                                        </div>
                                        {cat.services.map((service) => (
                                          <Link
                                            key={service.path}
                                            to={service.path}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                              "flex items-center justify-between p-2 rounded-xl text-xs transition-colors",
                                              location.pathname === service.path
                                                ? "bg-cyan-100/70 text-cyan-900 font-bold"
                                                : "text-slate-700 hover:bg-cyan-50"
                                            )}
                                          >
                                            <span>{service.name}</span>
                                            <span className="text-[10px] font-mono text-cyan-600 font-bold">
                                              {service.number}
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    );
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center justify-between p-3 rounded-2xl text-sm font-bold transition-all",
                            isActive
                              ? "bg-cyan-100/70 text-cyan-900 border border-cyan-300 shadow-xs"
                              : "text-slate-700 hover:bg-cyan-50/60"
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            <IconComponent size={16} className={isActive ? "text-cyan-600" : "text-slate-400"} />
                            <span>{link.name}</span>
                          </div>
                          {link.badge && (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-bold border border-cyan-200">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Client Portal Section */}
                <div className="pt-2 border-t border-cyan-100">
                  <Link
                    to={isClientLoggedIn ? "/dashboard" : "/login"}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-slate-800 shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <LayoutDashboard className="w-4 h-4 text-cyan-600" />
                      <span className="text-xs font-bold text-cyan-950">Client Portal</span>
                    </div>
                    <span className="text-[10px] font-mono font-extrabold text-blue-700 uppercase">
                      {isClientLoggedIn ? "Active" : "Sign In"}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Mobile Drawer Footer CTA */}
              <div className="pt-4 border-t border-cyan-100 space-y-3">
                <Link
                  to="/proposal"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-2xl shadow-[0_4px_20px_rgba(6,182,212,0.45)]"
                >
                  <Sparkles size={14} />
                  <span>Request Custom Proposal</span>
                  <ArrowUpRight size={14} />
                </Link>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-xs font-mono">
                  <span className="text-slate-500">Direct Line:</span>
                  <a href="tel:+917448788879" className="font-bold text-cyan-900 hover:text-blue-600">
                    +91 7448788879
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;