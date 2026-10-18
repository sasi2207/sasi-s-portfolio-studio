import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
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
  Sun,
  Moon,
  Contrast,
  Palette,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/useTheme";
import { BRAND_COLORS, BrandColor } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { BrandLogo } from "@/components/common/BrandLogo";
import { NavbarSkeleton } from "./NavbarSkeleton";

export const navServicePages = [
  {
    number: "01",
    name: "Static Website Development",
    fileName: "StaticWebService.tsx",
    headline: "Blazing-Fast Static Websites",
    path: "/services/static-web",
    badge: "Speed & SEO",
  },
  {
    number: "02",
    name: "Dynamic Web Development",
    fileName: "DynamicWebService.tsx",
    headline: "Scalable Dynamic Web Apps",
    path: "/services/dynamic-web",
    badge: "Portals & CRUD",
  },
  {
    number: "03",
    name: "E-Commerce Development",
    fileName: "EcommerceWebService.tsx",
    headline: "High-Converting E-Commerce Stores",
    path: "/services/ecommerce",
    badge: "Stores & UPI",
  },
  {
    number: "04",
    name: "Mobile Application Development",
    fileName: "AppDevelopmentService.tsx",
    headline: "Cross-Platform Mobile Apps",
    path: "/services/mobile-app",
    badge: "iOS & Android",
  },
  {
    number: "05",
    name: "Enterprise ERP Software",
    fileName: "ErpSoftwareService.tsx",
    headline: "End-to-End Enterprise ERP Platform",
    path: "/services/erp",
    badge: "Supply & Inventory",
  },
  {
    number: "06",
    name: "SRM & CRM Software",
    fileName: "SrmCrmService.tsx",
    headline: "Supplier & Customer Relationship Suite",
    path: "/services/crm",
    badge: "Lead & Vendor CRM",
  },
  {
    number: "07",
    name: "HRM & Payroll Software",
    fileName: "HrmSoftwareService.tsx",
    headline: "Human Resource & Payroll Management",
    path: "/services/hrm",
    badge: "Biometric & Tax",
  },
  {
    number: "08",
    name: "GST Billing & POS Software",
    fileName: "BillingSoftwareService.tsx",
    headline: "Ultra-Fast GST Billing & Retail POS",
    path: "/services/billing",
    badge: "Instant GST & Barcode",
  },
  {
    number: "09",
    name: "Custom ERP & Automation",
    fileName: "BusinessWebService.tsx",
    headline: "Custom ERP & Automation",
    path: "/services/business-web",
    badge: "Operations ERP",
  },
  {
    number: "10",
    name: "Cloud Infrastructure & DevOps",
    fileName: "DeploymentHostingService.tsx",
    headline: "Secure Cloud & DevOps",
    path: "/services/deployment-hosting",
    badge: "99.9% Uptime SLA",
  },
  {
    number: "11",
    name: "Digital Marketing & SEO",
    fileName: "DigitalMarketingService.tsx",
    headline: "Growth-Driven Digital Marketing & SEO",
    path: "/services/digital-marketing",
    badge: "GEO & Google Rank",
  },
  {
    number: "12",
    name: "TechSasi Academy & Mentorship",
    fileName: "ComputerCoachingServices.tsx",
    headline: "TechSasi Academy & Mentorship",
    path: "/services/coaching",
    badge: "1-on-1 Mentorship",
  },
];

const allNavLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Services", path: "/services", icon: Briefcase, hasDropdown: true, badge: "Solutions" },
  { name: "Projects", path: "/projects", icon: Layers },
  { name: "About", path: "/about", icon: Compass },
  { name: "Careers", path: "/careers", icon: GraduationCap, badge: "Hiring" },
  { name: "Contact", path: "/contact", icon: Mail },
];

export interface NavbarProps {
  isLoading?: boolean;
}

export const Navbar = ({ isLoading = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isBrandPickerOpen, setIsBrandPickerOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClientLoggedIn, setIsClientLoggedIn] = useState(false);
  
  const { theme, setTheme, brandColor, setBrandColor, brandConfig } = useTheme();
  const location = useLocation();
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const brandPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClientLoggedIn(Boolean(localStorage.getItem("token")));
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesDropdownOpen(false);
    setIsBrandPickerOpen(false);
    setIsMobileServicesExpanded(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
      if (
        brandPickerRef.current &&
        !brandPickerRef.current.contains(event.target as Node)
      ) {
        setIsBrandPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes drawers and dropdowns
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setIsServicesDropdownOpen(false);
      setIsBrandPickerOpen(false);
      setIsMobileServicesExpanded(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (isLoading) {
    return <NavbarSkeleton />;
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border py-2 sm:py-2.5 md:py-3 shadow-md"
            : "bg-transparent py-3 sm:py-4 md:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-14 sm:h-16 w-full">
            
            {/* ================= ZONE 1: BRAND LOGO (DESKTOP LEFT / MOBILE CENTERED) ================= */}
            {/* Desktop Left Logo */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/"
                className="flex-shrink-0 group flex items-center focus-visible:outline-none hover:opacity-95 transition-opacity"
                aria-label="TechSasi Home"
              >
                <BrandLogo align="left" size="sm" showColorDot={true} />
              </Link>
            </div>

            {/* Mobile View Brand Name (Strictly Centered) */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-auto z-10 flex items-center justify-center">
              <Link
                to="/"
                className="flex flex-col items-center justify-center focus-visible:outline-none hover:opacity-95 transition-opacity"
                aria-label="TechSasi Home"
              >
                <BrandLogo align="center" size="sm" showColorDot={true} />
              </Link>
            </div>

            {/* Left Spacer for lg:hidden to balance centered brand */}
            <div className="lg:hidden w-10 h-10 pointer-events-none" />

            {/* ================= ZONE 2: DESKTOP NAV LINKS ================= */}
            <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-5 mx-3">
              {allNavLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== "/" && location.pathname.startsWith(link.path));

                if (link.name === "Services") {
                  const isAnyServiceActive =
                    location.pathname.startsWith("/services") ||
                    location.pathname.startsWith("/service");

                  return (
                    <div
                      key={link.name}
                      className="relative"
                      ref={servicesDropdownRef}
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className={cn(
                          "text-xs xl:text-sm font-medium transition-colors duration-200 relative py-1.5 px-2.5 rounded-lg whitespace-nowrap min-h-[36px] flex items-center gap-1.5 cursor-pointer",
                          isAnyServiceActive || isServicesDropdownOpen
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        )}
                        aria-expanded={isServicesDropdownOpen}
                        aria-haspopup="true"
                        aria-label="Services dropdown menu"
                      >
                        <span>Services</span>
                        <ChevronDown
                          size={14}
                          className={cn(
                            "transition-transform duration-200",
                            isServicesDropdownOpen ? "rotate-180" : ""
                          )}
                          style={{ color: "var(--accent)" }}
                        />
                        {isAnyServiceActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-primary rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>

                      {/* Dropdown Menu List Showing All 8 Service Pages */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] rounded-2xl bg-card border border-border shadow-elevated p-3 z-50 space-y-2"
                          >
                            <div className="px-2.5 py-1.5 border-b border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                                  Engineering Disciplines
                                </span>
                                <span>· Select a Service</span>
                              </div>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                8 Services
                              </span>
                            </div>

                            {/* 2-Column Grid */}
                            <div className="grid grid-cols-2 gap-1.5 max-h-[360px] overflow-y-auto scrollbar-none py-1">
                              {navServicePages.map((service) => (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                  className={cn(
                                    "flex flex-col justify-between p-2.5 rounded-xl text-xs font-medium transition-all group border border-transparent",
                                    location.pathname === service.path
                                      ? "bg-primary/10 border-primary/20 text-primary font-semibold"
                                      : "text-foreground hover:bg-muted hover:border-border/60"
                                  )}
                                >
                                  <div className="space-y-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1.5">
                                      <div className="flex items-center gap-1.5 min-w-0">
                                        <span className="text-[10px] font-mono text-primary font-bold shrink-0">
                                          {service.number}.
                                        </span>
                                        <span className="font-semibold truncate group-hover:text-primary transition-colors">
                                          {service.name}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="text-[10px] text-muted-foreground flex items-center gap-1 font-mono">
                                     
                                      <span className="truncate">{service.badge}</span>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="pt-2 border-t border-border flex items-center justify-between gap-2.5 px-1">
                              <Link
                                to="/services"
                                onClick={() => setIsServicesDropdownOpen(false)}
                                className="text-[11px] font-mono text-muted-foreground hover:text-foreground flex items-center gap-1"
                              >
                                <span>View all 8 services overview</span>
                                <ArrowUpRight size={12} />
                              </Link>
                              <Link
                                to="/proposal"
                                onClick={() => setIsServicesDropdownOpen(false)}
                                className="inline-flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg text-xs font-semibold text-foreground bg-muted hover:bg-muted/80 border border-border transition-colors whitespace-nowrap"
                              >
                                <Sparkles size={13} style={{ color: "var(--accent)" }} />
                                <span>Proposal Builder</span>
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
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-xs xl:text-sm font-medium transition-colors duration-200 relative py-1.5 px-2 whitespace-nowrap min-h-[36px] flex items-center",
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-mono font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ================= ZONE 3: BRAND COLOR PICKER & CONTROLS ================= */}
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-2.5 lg:gap-3">
              
              {/* Brand Name Color Changer Popover (Desktop Only) */}
              <div className="relative hidden lg:inline-block" ref={brandPickerRef}>
                <button
                  type="button"
                  onClick={() => setIsBrandPickerOpen(!isBrandPickerOpen)}
                  className="p-2 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                  title="Change Brand Name Color"
                  aria-label="Change Brand Name Color"
                  aria-expanded={isBrandPickerOpen}
                >
                  <Palette size={15} style={{ color: "var(--accent)" }} />
                  <span className={`w-2.5 h-2.5 rounded-full ${brandConfig.dotColor} shrink-0`} />
                  <span className="hidden xl:inline text-[11px] font-mono">{brandConfig.name.split(" ")[1] || brandConfig.name}</span>
                </button>

                <AnimatePresence>
                  {isBrandPickerOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 rounded-2xl bg-card border border-border p-3 shadow-xl z-50 space-y-2"
                    >
                      <div className="pb-2 border-b border-border flex items-center justify-between text-xs font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Palette size={13} style={{ color: "var(--accent)" }} />
                          <span>Brand Name Color</span>
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">
                          {brandColor}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        {(Object.keys(BRAND_COLORS) as BrandColor[]).map((key) => {
                          const config = BRAND_COLORS[key];
                          const isSelected = brandColor === key;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => {
                                setBrandColor(key);
                                setIsBrandPickerOpen(false);
                              }}
                              className={cn(
                                "flex items-center gap-2 p-2 rounded-xl text-left text-xs transition-all cursor-pointer border",
                                isSelected
                                  ? "bg-primary/10 border-primary font-bold text-foreground"
                                  : "border-transparent hover:bg-muted text-muted-foreground hover:text-foreground"
                              )}
                            >
                              <span className={`w-3 h-3 rounded-full ${config.dotColor} shrink-0`} />
                              <span className="truncate text-[11px]">{config.name}</span>
                              {isSelected && <Check size={12} className="ml-auto text-primary shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle (Desktop Only) */}
              <div className="hidden lg:inline-flex">
                <ThemeToggle />
              </div>

              {/* Client Portal Direct Auth Button (Desktop Only) */}
              {isClientLoggedIn ? (
                <Link
                  to="/dashboard"
                  className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all min-h-[38px]"
                  title="Authenticated Session Active: Access Client Portal"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Client Portal</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-primary/10 text-primary border border-primary/25 hover:bg-primary/20 transition-all min-h-[38px]"
                  title="Sign In to Client Portal"
                >
                  <Lock className="w-3.5 h-3.5 text-primary" />
                  <span>Client Portal</span>
                </Link>
              )}

              {/* Primary Action Button (Desktop Only) */}
              <Link
                to="/proposal"
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 lg:px-4 lg:py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-primary to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap min-h-[38px]"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile / Tablet Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden min-h-[42px] min-w-[42px] flex items-center justify-center p-2.5 text-foreground hover:bg-muted/80 rounded-xl border border-border bg-card shadow-xs transition-all active:scale-95 cursor-pointer"
                aria-label="Toggle Mobile & Tablet Navigation Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE VIEW FULL REDESIGNED DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] lg:hidden"
            />

            {/* Mobile Slide-Over Drawer with Clean Responsive Center Spacing */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 32 }}
              className="fixed top-0 right-0 z-[100] h-full w-[90%] sm:w-[400px] bg-card text-foreground border-l border-border p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div className="space-y-4">
                
                {/* 1. Brand Name (Centered) & Close Button */}
                <div className="relative flex items-center justify-center pb-4 border-b border-border">
                  <div className="flex items-center justify-center">
                    <BrandLogo align="center" size="sm" showColorDot={true} />
                  </div>
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-0 top-0 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center border border-border cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                {/* 2. Brand Name Color Switcher Palette Options */}
                <div className="p-3 rounded-2xl border border-border bg-muted/40 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground flex items-center gap-1.5">
                      <Palette size={14} style={{ color: "var(--accent)" }} />
                      <span>Brand Name Color</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-primary/10 text-primary uppercase">
                      {brandConfig.name}
                    </span>
                  </div>

                  {/* 6 Color Swatches */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {(Object.keys(BRAND_COLORS) as BrandColor[]).map((key) => {
                      const config = BRAND_COLORS[key];
                      const isSelected = brandColor === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setBrandColor(key)}
                          className={cn(
                            "flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-medium border transition-all cursor-pointer",
                            isSelected
                              ? "bg-card border-primary shadow-xs font-bold text-foreground"
                              : "bg-card/50 border-border/60 hover:bg-card text-muted-foreground"
                          )}
                        >
                          <span className={`w-2.5 h-2.5 rounded-full ${config.dotColor} shrink-0`} />
                          <span className="text-[10px] truncate">{config.name.split(" ")[0]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Direct Theme Change Option Inside Mobile Menu List */}
                <div className="p-3 rounded-2xl border border-border bg-muted/40 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground flex items-center gap-1.5">
                      <span>Display Mode</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase font-bold">
                        {theme}
                      </span>
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      Theme
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-card border border-border">
                    <button
                      type="button"
                      onClick={() => setTheme("light")}
                      className={cn(
                        "flex items-center justify-center gap-1.5 py-2 px-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                        theme === "light"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <Sun size={14} className={theme === "light" ? "text-primary-foreground" : "text-amber-500"} />
                      <span>Light</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTheme("dark")}
                      className={cn(
                        "flex items-center justify-center gap-1.5 py-2 px-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                        theme === "dark"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <Moon size={14} className={theme === "dark" ? "text-primary-foreground" : "text-blue-400"} />
                      <span>Dark</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTheme("contrast")}
                      className={cn(
                        "flex items-center justify-center gap-1.5 py-2 px-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                        theme === "contrast"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <Contrast size={14} className={theme === "contrast" ? "text-primary-foreground" : "text-cyan-400"} />
                      <span>Contrast</span>
                    </button>
                  </div>
                </div>

                {/* 4. Complete Navigation Links List */}
                <div className="space-y-1">
                  <div className="px-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Menu Navigation
                  </div>

                  <nav className="space-y-1 pt-1">
                    {allNavLinks.map((link) => {
                      const isActive =
                        location.pathname === link.path ||
                        (link.path !== "/" && location.pathname.startsWith(link.path));
                      const IconComponent = link.icon;

                      if (link.name === "Services") {
                        const isAnyServiceActive =
                          location.pathname.startsWith("/services") ||
                          location.pathname.startsWith("/service");

                        return (
                          <div
                            key={link.path}
                            className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs"
                          >
                            {/* Services Accordion Header */}
                            <button
                              type="button"
                              onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                              className="w-full flex items-center justify-between p-3 text-left cursor-pointer transition-colors hover:bg-muted/60"
                              aria-expanded={isMobileServicesExpanded}
                            >
                              <div className="flex items-center gap-2.5">
                                <div className={cn(
                                  "p-1.5 rounded-lg border",
                                  isAnyServiceActive ? "bg-primary/10 border-primary/30 text-primary" : "bg-muted border-border text-muted-foreground"
                                )}>
                                  <Briefcase size={16} />
                                </div>
                                <span className={cn(
                                  "text-sm font-semibold transition-colors",
                                  isAnyServiceActive ? "text-primary" : "text-foreground"
                                )}>
                                  Services
                                </span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                                  8
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                                <span className="text-[11px]">{isMobileServicesExpanded ? "Hide" : "View"}</span>
                                <ChevronDown
                                  size={15}
                                  className={cn(
                                    "transition-transform duration-200 text-primary",
                                    isMobileServicesExpanded ? "rotate-180" : ""
                                  )}
                                />
                              </div>
                            </button>

                            {/* Expandable Services List */}
                            <AnimatePresence>
                              {isMobileServicesExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="border-t border-border bg-muted/20 p-2 space-y-1 max-h-64 overflow-y-auto scrollbar-none"
                                >
                                  {navServicePages.map((service) => (
                                    <Link
                                      key={service.path}
                                      to={service.path}
                                      onClick={() => setIsOpen(false)}
                                      className={cn(
                                        "flex items-center justify-between p-2 rounded-xl text-xs transition-colors group",
                                        location.pathname === service.path
                                          ? "bg-primary/15 text-primary font-semibold"
                                          : "text-foreground hover:bg-muted"
                                      )}
                                    >
                                      <div className="space-y-0.5 min-w-0 pr-2">
                                        <div className="flex items-center gap-1.5">
                                          <span className="text-[10px] font-mono text-primary font-bold">
                                            {service.number}.
                                          </span>
                                          <span className="font-semibold truncate group-hover:text-primary transition-colors">
                                            {service.name}
                                          </span>
                                        </div>
                                        <div className="text-[10px] text-muted-foreground truncate pl-4 font-mono">
                                          <span className="text-primary/90 font-medium">
                                            {service.fileName}
                                          </span>
                                        </div>
                                      </div>
                                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-card border border-border text-muted-foreground shrink-0">
                                        {service.badge}
                                      </span>
                                    </Link>
                                  ))}
                                  <Link
                                    to="/services"
                                    onClick={() => setIsOpen(false)}
                                    className="block p-2 text-center text-xs font-semibold text-primary hover:underline border-t border-border/40 mt-1"
                                  >
                                    View Full Services Hub &rarr;
                                  </Link>
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
                            "flex items-center justify-between p-2.5 sm:p-3 rounded-xl text-sm font-medium transition-all",
                            isActive
                              ? "bg-primary/10 text-primary font-semibold border border-primary/20 shadow-xs"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={cn(
                              "p-1.5 rounded-lg border",
                              isActive ? "bg-primary/15 border-primary/30 text-primary" : "bg-muted border-border text-muted-foreground"
                            )}>
                              <IconComponent size={16} />
                            </div>
                            <span>{link.name}</span>
                          </div>

                          {link.badge ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                              {link.badge}
                            </span>
                          ) : isActive ? (
                            <span className="w-2 h-2 rounded-full bg-primary" />
                          ) : null}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* 5. Client Portal Direct Access */}
                <div className="pt-2 border-t border-border space-y-2">
                  <div className="px-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Client Access
                  </div>

                  <Link
                    to={isClientLoggedIn ? "/dashboard" : "/login"}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border text-foreground hover:bg-muted/70 transition-colors shadow-xs"
                  >
                    <div className={cn(
                      "p-2 rounded-xl",
                      isClientLoggedIn ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
                    )}>
                      {isClientLoggedIn ? <LayoutDashboard size={18} /> : <Lock size={18} />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-foreground">Client Portal</span>
                        <span className={cn(
                          "text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold border",
                          isClientLoggedIn 
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" 
                            : "bg-primary/10 text-primary border-primary/20"
                        )}>
                          {isClientLoggedIn ? "Active Session" : "Login"}
                        </span>
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">
                        {isClientLoggedIn ? "Review proposals & deliverables" : "Authenticate to access client data"}
                      </div>
                    </div>
                  </Link>
                </div>

              </div>

              {/* 6. Mobile Drawer Footer Actions with Even Spacing */}
              <div className="pt-4 border-t border-border space-y-2.5 mt-4">
                <Link
                  to="/proposal"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-primary to-cyan-500 rounded-xl shadow-md min-h-[44px] hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <Sparkles size={15} />
                  <span>Request Custom Proposal</span>
                  <ArrowUpRight size={15} />
                </Link>

                <div className="p-3 rounded-xl bg-muted/40 border border-border flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={14} className="text-primary" />
                    <span>Support:</span>
                  </div>
                  <a
                    href="tel:+917448788879"
                    className="font-mono font-bold text-foreground hover:text-primary transition-colors"
                  >
                    +91 7448788879
                  </a>
                </div>

                <div className="text-[11px] text-muted-foreground text-center font-mono pt-1">
                  TechSasi · Salem, Tamil Nadu, India
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
