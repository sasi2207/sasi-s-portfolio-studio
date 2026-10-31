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
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Users,
  Receipt,
  Server,
  TrendingUp,
  Cpu,
  ArrowRight,
  Phone,
  GraduationCap,
  Layers,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/common/BrandLogo";
import { NavbarSkeleton } from "./NavbarSkeleton";
import { GlobalAnnouncementBanner } from "@/components/common/GlobalAnnouncementBanner";

// User-friendly curated services grouped into 2 intuitive columns
const primaryEngineeringServices = [
  {
    name: "Websites & Landing Pages",
    desc: "Fast, modern websites built for high Google search ranking.",
    path: "/services/static-web",
    icon: Globe,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "Custom Web Applications",
    desc: "Interactive dashboards, client portals, and SaaS platforms.",
    path: "/services/dynamic-web",
    icon: Cpu,
    color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "E-Commerce Online Stores",
    desc: "Seamless shopping cart, Razorpay & UPI payment integration.",
    path: "/services/ecommerce",
    icon: ShoppingCart,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    name: "Mobile App Development",
    desc: "High-performance iOS and Android apps for mobile users.",
    path: "/services/mobile-app",
    icon: Smartphone,
    color: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  },
];

const enterpriseCloudServices = [
  {
    name: "Enterprise ERP Software",
    desc: "Multi-branch stock, inventory control & company operations.",
    path: "/services/erp",
    icon: Database,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  {
    name: "CRM & Sales Pipelines",
    desc: "Track client inquiries, quotations, and deal follow-ups.",
    path: "/services/crm",
    icon: Users,
    color: "text-sky-500 bg-sky-500/10 border-sky-500/20",
  },
  {
    name: "GST Billing & POS Hardware",
    desc: "Try 1 month free at billing.techsasi.com · Instant GST & POS.",
    path: "/services/billing",
    badge: "1 Mo Free",
    icon: Receipt,
    color: "text-teal-500 bg-teal-500/10 border-teal-500/20",
  },
  {
    name: "Cloud Hosting & DevOps",
    desc: "Reliable 99.9% cloud uptime, SSL security & automated backups.",
    path: "/services/deployment-hosting",
    icon: Server,
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
];

const additionalQuickServices = [
  {
    name: "HRM & Payroll",
    path: "/services/hrm",
  },
  {
    name: "Custom Workflow ERP",
    path: "/services/business-web",
  },
  {
    name: "Digital Marketing & SEO",
    path: "/services/digital-marketing",
    icon: TrendingUp,
  },
  {
    name: "TechSasi Academy Coding",
    path: "/services/coaching",
    icon: GraduationCap,
  },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers", badge: "Hiring" },
  { name: "Contact", path: "/contact" },
];

export interface NavbarProps {
  isLoading?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isLoading = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClientLoggedIn, setIsClientLoggedIn] = useState(false);
  const location = useLocation();

  // Accessibility & Keyboard navigation refs
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLElement>(null);
  const dropdownItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClientLoggedIn(Boolean(localStorage.getItem("token")));
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileServicesExpanded(false);
  }, [location.pathname]);

  // Lock body scroll on mobile drawer & handle focus
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
      // Focus first focusable item in mobile drawer
      const timer = setTimeout(() => {
        const firstFocusable = mobileDrawerRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ESC key accessibility & returning focus
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
          triggerButtonRef.current?.focus();
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
      }
    },
    [isDropdownOpen, isMobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Keyboard navigation within the dropdown list (Arrow keys)
  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (!isDropdownOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsDropdownOpen(true);
        setTimeout(() => {
          dropdownItemsRef.current[0]?.focus();
        }, 50);
      }
      return;
    }

    const items = dropdownItemsRef.current.filter(Boolean) as HTMLAnchorElement[];
    const currentIndex = items.findIndex((item) => item === document.activeElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      items[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIndex <= 0) {
        triggerButtonRef.current?.focus();
      } else {
        items[currentIndex - 1]?.focus();
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
    } else if (e.key === "Tab" && !e.shiftKey && currentIndex === items.length - 1) {
      // Tab away from last item closes dropdown
      setIsDropdownOpen(false);
    }
  };

  const handleMouseEnterDropdown = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  // Close dropdown when focus leaves its boundaries
  const handleDropdownBlur = (e: React.FocusEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  if (isLoading) {
    return <NavbarSkeleton />;
  }

  const isServicesActive =
    location.pathname.startsWith("/services") || location.pathname.startsWith("/service");

  const totalPrimaryServices = [...primaryEngineeringServices, ...enterpriseCloudServices];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full">
      {/* Global Billing Software Announcement Banner */}
      <GlobalAnnouncementBanner />

      {/* Floating Glass Navbar */}
      <div className="w-full pt-2 sm:pt-3 px-3 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3",
            "border backdrop-blur-xl",
            scrolled
              ? "bg-[var(--card-bg)]/92 border-[var(--border-line)] shadow-[0_12px_36px_rgba(0,0,0,0.12)] ring-1 ring-[var(--accent)]/15"
              : "bg-[var(--card-bg)]/80 border-[var(--border-line)]/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          )}
        >
        <nav
          className="relative flex items-center justify-between w-full h-11 sm:h-12"
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded-lg transition-transform active:scale-95"
              aria-label="TechSasi Home Page"
            >
              <BrandLogo align="left" size="sm" showColorDot={false} />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2" role="menubar">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                    onBlur={handleDropdownBlur}
                  >
                    <button
                      ref={triggerButtonRef}
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      onKeyDown={handleDropdownKeyDown}
                      className={cn(
                        "text-xs xl:text-sm font-medium tracking-tight transition-all duration-150 py-2 px-3.5 rounded-xl flex items-center gap-1.5 cursor-pointer select-none",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
                        isServicesActive || isDropdownOpen
                          ? "text-[var(--text-primary)] font-semibold bg-[var(--surface-fill-subtle)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill-subtle)]/60"
                      )}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      aria-controls="services-dropdown-panel"
                      id="services-menu-button"
                    >
                      <span className="whitespace-nowrap shrink-0">Services</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 text-[var(--text-subtle)]",
                          isDropdownOpen && "rotate-180 text-[var(--accent)]"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {/* USER-FRIENDLY ACCESSIBLE DROPDOWN MENU */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          id="services-dropdown-panel"
                          role="region"
                          aria-labelledby="services-menu-button"
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          onKeyDown={handleDropdownKeyDown}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[580px] rounded-2xl bg-[var(--card-bg)]/98 border border-[var(--border-line)] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.35)] backdrop-blur-2xl z-50 overflow-hidden before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4"
                        >
                          {/* 2-Column Service Body */}
                          <div className="p-4 grid grid-cols-2 gap-3">
                            {/* Column 1: Core Apps & Websites */}
                            <div className="space-y-1" role="group" aria-label="Web & Mobile Platforms">
                              <div className="px-2.5 py-1 text-[11px] font-semibold text-[var(--text-subtle)] uppercase tracking-wider">
                                Web &amp; Apps
                              </div>

                              {primaryEngineeringServices.map((service, index) => {
                                const IconComponent = service.icon;
                                return (
                                  <Link
                                    key={service.path}
                                    ref={(el) => (dropdownItemsRef.current[index] = el)}
                                    to={service.path}
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[var(--surface-fill-subtle)] transition-colors duration-150 text-left border border-transparent hover:border-[var(--border-line)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                                  >
                                    <div
                                      className={cn(
                                        "p-2 rounded-lg border shrink-0 transition-transform group-hover:scale-105",
                                        service.color
                                      )}
                                      aria-hidden="true"
                                    >
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-primary)] flex items-center justify-between">
                                        <span className="truncate">{service.name}</span>
                                        <ArrowRight className="w-3 h-3 text-[var(--text-subtle)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 ml-1" aria-hidden="true" />
                                      </div>
                                      <p className="text-[11px] text-[var(--text-muted)] line-clamp-2 leading-relaxed mt-0.5">
                                        {service.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Column 2: Business & Enterprise Systems */}
                            <div className="space-y-1" role="group" aria-label="Business & Cloud Systems">
                              <div className="px-2.5 py-1 text-[11px] font-semibold text-[var(--text-subtle)] uppercase tracking-wider">
                                Business &amp; Cloud
                              </div>

                              {enterpriseCloudServices.map((service, idx) => {
                                const itemIndex = primaryEngineeringServices.length + idx;
                                const IconComponent = service.icon;
                                return (
                                  <Link
                                    key={service.path}
                                    ref={(el) => (dropdownItemsRef.current[itemIndex] = el)}
                                    to={service.path}
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[var(--surface-fill-subtle)] transition-colors duration-150 text-left border border-transparent hover:border-[var(--border-line)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                                  >
                                    <div
                                      className={cn(
                                        "p-2 rounded-lg border shrink-0 transition-transform group-hover:scale-105",
                                        service.color
                                      )}
                                      aria-hidden="true"
                                    >
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-primary)] flex items-center justify-between">
                                        <span className="truncate">{service.name}</span>
                                        <ArrowRight className="w-3 h-3 text-[var(--text-subtle)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 ml-1" aria-hidden="true" />
                                      </div>
                                      <p className="text-[11px] text-[var(--text-muted)] line-clamp-2 leading-relaxed mt-0.5">
                                        {service.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Quick Secondary Links & Footer Strip */}
                          <div className="px-4 py-3 bg-[var(--surface-fill-subtle)]/60 border-t border-[var(--border-line)] flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 overflow-hidden text-[11px]">
                              <span className="text-[var(--text-subtle)] font-medium shrink-0">
                                Also:
                              </span>
                              {additionalQuickServices.map((item, qIdx) => (
                                <Link
                                  key={item.path}
                                  ref={(el) => (dropdownItemsRef.current[totalPrimaryServices.length + qIdx] = el)}
                                  to={item.path}
                                  onClick={() => setIsDropdownOpen(false)}
                                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:underline whitespace-nowrap truncate focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>

                            <Link
                              ref={(el) =>
                                (dropdownItemsRef.current[
                                  totalPrimaryServices.length + additionalQuickServices.length
                                ] = el)
                              }
                              to="/services"
                              onClick={() => setIsDropdownOpen(false)}
                              className="font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] inline-flex items-center gap-1 shrink-0 ml-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg px-1.5 py-0.5"
                            >
                              <span>All Services</span>
                              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-xs xl:text-sm font-medium tracking-tight transition-all duration-150 py-2 px-3.5 rounded-xl whitespace-nowrap shrink-0 flex items-center gap-1.5",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
                    isActive
                      ? "text-[var(--text-primary)] font-semibold bg-[var(--surface-fill-subtle)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill-subtle)]/60"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded text-[var(--text-subtle)] border border-[var(--border-line)]">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Zone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Portal Link */}
            <Link
              to={isClientLoggedIn ? "/dashboard" : "/login"}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border border-[var(--border-line)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill-subtle)] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              aria-label={isClientLoggedIn ? "Go to Client Dashboard" : "Sign In to Client Portal"}
            >
              {isClientLoggedIn ? (
                <>
                  <LayoutDashboard className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Dashboard</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Portal</span>
                </>
              )}
            </Link>

            {/* Try Billing Software Free Pill */}
            <a
              href="https://billing.techsasi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-cyan-500/10 border border-cyan-400/50 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all active:scale-95 whitespace-nowrap shadow-xs"
              title="Try TechSasi Billing Software 1 Month Free at billing.techsasi.com"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
              <span>Try Billing Free</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-200 font-bold">1 Mo</span>
            </a>

            {/* Primary Action Button */}
            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 transition-all duration-150 active:scale-95 whitespace-nowrap shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              aria-label="Request a Custom Project Proposal"
            >
              <span>Request Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[var(--text-primary)] hover:bg-[var(--surface-fill-subtle)] border border-[var(--border-line)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>

      {/* Accessible Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[90] lg:hidden"
              aria-hidden="true"
            />

            <motion.aside
              id="mobile-navigation-drawer"
              ref={mobileDrawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="fixed top-0 right-0 z-[100] h-full w-[88%] sm:w-[380px] bg-[var(--card-bg)] text-[var(--text-primary)] border-l border-[var(--border-line)] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div className="space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border-line)]">
                  <BrandLogo align="left" size="sm" showColorDot={false} />
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      mobileMenuButtonRef.current?.focus();
                    }}
                    className="p-2 rounded-xl border border-[var(--border-line)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill-subtle)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-[var(--text-subtle)] uppercase px-2 mb-2">
                    Menu
                  </div>

                  <nav className="space-y-1" aria-label="Mobile Menu Navigation">
                    {navItems.map((item) => {
                      const isActive =
                        item.path === "/"
                          ? location.pathname === "/"
                          : location.pathname.startsWith(item.path);

                      if (item.hasDropdown) {
                        return (
                          <div
                            key={item.path}
                            className="rounded-xl border border-[var(--border-line)] bg-[var(--surface-fill-subtle)]/40 overflow-hidden"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setIsMobileServicesExpanded(!isMobileServicesExpanded)
                              }
                              className="w-full flex items-center justify-between p-3 text-left font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                              aria-expanded={isMobileServicesExpanded}
                              aria-controls="mobile-services-accordion"
                            >
                              <div className="flex items-center gap-2.5">
                                <Briefcase className="w-4 h-4 text-[var(--text-muted)]" aria-hidden="true" />
                                <span>Services</span>
                              </div>
                              <ChevronDown
                                className={cn(
                                  "w-4 h-4 transition-transform duration-200 text-[var(--text-subtle)]",
                                  isMobileServicesExpanded && "rotate-180"
                                )}
                                aria-hidden="true"
                              />
                            </button>

                            <AnimatePresence>
                              {isMobileServicesExpanded && (
                                <motion.div
                                  id="mobile-services-accordion"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="border-t border-[var(--border-line)] bg-[var(--card-bg)] p-2 space-y-1 max-h-72 overflow-y-auto"
                                >
                                  <div className="text-[10px] font-mono text-[var(--text-subtle)] uppercase px-2 py-1 font-semibold">
                                    Web &amp; Apps
                                  </div>
                                  {primaryEngineeringServices.map((service) => (
                                    <Link
                                      key={service.path}
                                      to={service.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={cn(
                                        "flex items-center justify-between p-2 rounded-lg text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]",
                                        location.pathname === service.path
                                          ? "bg-[var(--surface-fill-subtle)] text-[var(--text-primary)] font-semibold"
                                          : "text-[var(--text-muted)] hover:bg-[var(--surface-fill-subtle)] hover:text-[var(--text-primary)]"
                                      )}
                                    >
                                      <span>{service.name}</span>
                                      <ArrowRight className="w-3 h-3 text-[var(--text-subtle)]" aria-hidden="true" />
                                    </Link>
                                  ))}

                                  <div className="text-[10px] font-mono text-[var(--text-subtle)] uppercase px-2 pt-2 pb-1 font-semibold border-t border-[var(--border-line)]/50 mt-1">
                                    Business &amp; Cloud
                                  </div>
                                  {enterpriseCloudServices.map((service) => (
                                    <Link
                                      key={service.path}
                                      to={service.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={cn(
                                        "flex items-center justify-between p-2 rounded-lg text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]",
                                        location.pathname === service.path
                                          ? "bg-[var(--surface-fill-subtle)] text-[var(--text-primary)] font-semibold"
                                          : "text-[var(--text-muted)] hover:bg-[var(--surface-fill-subtle)] hover:text-[var(--text-primary)]"
                                      )}
                                    >
                                      <span>{service.name}</span>
                                      <ArrowRight className="w-3 h-3 text-[var(--text-subtle)]" aria-hidden="true" />
                                    </Link>
                                  ))}

                                  <div className="pt-2 border-t border-[var(--border-line)]/50">
                                    <Link
                                      to="/services"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block p-2 text-center text-xs font-semibold text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded"
                                    >
                                      View All 12 Services →
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                            isActive
                              ? "bg-[var(--surface-fill-subtle)] text-[var(--text-primary)] font-semibold"
                              : "text-[var(--text-muted)] hover:bg-[var(--surface-fill-subtle)] hover:text-[var(--text-primary)]"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-[var(--text-subtle)] border border-[var(--border-line)]">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Portal & Client Controls */}
                <div className="pt-4 border-t border-[var(--border-line)] space-y-2">
                  <Link
                    to={isClientLoggedIn ? "/dashboard" : "/login"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-[var(--border-line)] text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label={isClientLoggedIn ? "Go to Client Dashboard" : "Sign In to Client Portal"}
                  >
                    <div className="flex items-center gap-2">
                      <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
                      <span>Client Dashboard</span>
                    </div>
                    <span className="text-xs text-[var(--text-subtle)] font-mono">
                      {isClientLoggedIn ? "Active" : "Sign In"}
                    </span>
                  </Link>
                </div>

                {/* Billing Software Free Trial & Purchase Highlight Card */}
                <div className="mt-4 p-3.5 rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-slate-950 via-[#03153d] to-[#012572] text-white space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      billing.techsasi.com
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 font-bold font-mono">
                      1 Mo Free
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white leading-tight">
                    GST Billing &amp; POS Software
                  </p>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Try 1 month free before you purchase! Test at your shop counter with zero risk.
                  </p>
                  <div className="flex gap-2 pt-1">
                    <a
                      href="https://billing.techsasi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors"
                    >
                      <span>Try 1 Mo Free</span>
                      <ArrowUpRight size={13} />
                    </a>
                    <Link
                      to="/proposal?type=billing-software"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-colors"
                    >
                      <span>Purchase</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-4 border-t border-[var(--border-line)] space-y-3">
                <Link
                  to="/proposal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 transition-all active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  aria-label="Request a Custom Project Proposal"
                >
                  <Sparkles size={14} aria-hidden="true" />
                  <span>Request Custom Proposal</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--surface-fill-subtle)] text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Direct Call:</span>
                  </span>
                  <a
                    href="tel:+917448788879"
                    className="font-medium text-[var(--text-primary)] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded"
                    aria-label="Call TechSasi directly at +91 7448788879"
                  >
                    +91 7448788879
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;