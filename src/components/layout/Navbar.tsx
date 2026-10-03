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
  FileText,
  Mail,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { BrandLogo } from "@/components/common/BrandLogo";
import { NavbarSkeleton } from "./NavbarSkeleton";

// Primary Navigation Links
const primaryNavLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

// Additional Links (Accessible via "More" on tablet, inline on desktop xl)
const secondaryNavLinks = [
  { name: "Careers", path: "/careers", badge: "Hiring" },
  { name: "Contact", path: "/contact" },
  { name: "Offers", path: "/Offers", badge: "New" },
  { name: "Client Portal", path: "/dashboard", badge: "Auth" },
];

const allNavLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers", badge: "Hiring" },
  { name: "Contact", path: "/contact" },
];

export interface NavbarProps {
  isLoading?: boolean;
}

export const Navbar = ({ isLoading = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTabletMoreOpen, setIsTabletMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsTabletMoreOpen(false);
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

  // Close more dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTabletMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes drawers and dropdowns
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setIsTabletMoreOpen(false);
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
            ? "bg-background/90 backdrop-blur-md border-b border-border py-2.5 sm:py-3 md:py-3.5 shadow-md"
            : "bg-transparent py-3 sm:py-4 md:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-12 w-full">
            
            {/* ================= ZONE 1: BRAND LOGO ================= */}
            <Link
              to="/"
              className="flex-shrink-0 group flex items-center focus-visible:outline-none hover:opacity-95 transition-opacity"
              aria-label="TechSasi Home"
            >
              <BrandLogo align="left" size="sm" />
            </Link>

            {/* ================= ZONE 2: RESPONSIVE NAV LINKS ================= */}
            
            {/* 1. DESKTOP VIEW (>= 1024px / lg+): Complete Inline Nav */}
            <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-7 mx-4">
              {allNavLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== "/" && location.pathname.startsWith(link.path));
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
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* 2. TABLET ADAPTIVE INLINE BAR (768px <= width < 1024px / md to lg) */}
            {/* Displays Core 4 links + "More" Dropdown to prevent overcrowding on iPad/Tablets */}
            <div className="hidden md:flex lg:hidden items-center justify-center gap-2 md:gap-3 mx-2">
              {primaryNavLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== "/" && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-xs md:text-[13px] font-medium transition-colors duration-200 relative py-2 px-2.5 rounded-lg whitespace-nowrap min-h-[40px] flex items-center",
                      isActive
                        ? "text-foreground font-semibold bg-muted/60"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTabletIndicator"
                        className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-amber-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Tablet "More" Interactive Dropdown */}
              <div className="relative" ref={moreDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsTabletMoreOpen(!isTabletMoreOpen)}
                  className={cn(
                    "text-xs md:text-[13px] font-medium flex items-center gap-1 py-2 px-2.5 rounded-lg transition-colors min-h-[40px] cursor-pointer",
                    isTabletMoreOpen ||
                      location.pathname.startsWith("/careers") ||
                      location.pathname.startsWith("/contact") ||
                      location.pathname.startsWith("/dashboard")
                      ? "text-foreground bg-muted font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  )}
                  aria-expanded={isTabletMoreOpen}
                  aria-label="More tablet navigation options"
                >
                  <span>More</span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      isTabletMoreOpen ? "rotate-180 text-amber-500" : ""
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isTabletMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-52 rounded-xl bg-card border border-border shadow-elevated p-2 z-50 space-y-1"
                    >
                      {secondaryNavLinks.map((subLink) => {
                        const isSubActive = location.pathname === subLink.path;
                        return (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            onClick={() => setIsTabletMoreOpen(false)}
                            className={cn(
                              "flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors min-h-[38px]",
                              isSubActive
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-foreground hover:bg-muted"
                            )}
                          >
                            <span>{subLink.name}</span>
                            {subLink.badge && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 font-semibold">
                                {subLink.badge}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ================= ZONE 3: ACTIONS & RESPONSIVE TOGGLES ================= */}
            <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Desktop Phone Contact */}
              <a
                href="tel:+917448788879"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-amber-500 transition-colors py-2 px-3 rounded-lg border border-border hover:border-amber-400/30 min-h-[38px]"
                title="Direct Phone Support"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span className="tabular-nums font-mono">+91 7448788879</span>
              </a>

              {/* Primary Action Button (Optimized for Mobile, Tablet, and Desktop) */}
              <Link
                to="/proposal"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 md:px-3.5 md:py-2 lg:px-4 lg:py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap min-h-[38px]"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Responsive Menu Hamburger Toggle (Visible on Mobile & Tablet < 1024px) */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden min-h-[42px] min-w-[42px] flex items-center justify-center p-2 text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-xl border border-border/80 transition-colors active:scale-95"
                aria-label="Toggle Navigation Drawer"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE & TABLET RESPONSIVE SLIDE-OVER DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[90] lg:hidden"
            />

            {/* Tablet-Tailored Drawer Sheet */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 z-[100] h-full w-[85%] sm:w-[420px] md:w-[440px] bg-card text-card-foreground border-l border-border p-6 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Tablet and Mobile Navigation Menu"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-border">
                  <BrandLogo align="left" size="sm" />
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                      aria-label="Close navigation drawer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Tablet Quick Directory Tag */}
                <div className="pt-4 pb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Navigation Directory
                  </span>
                </div>

                {/* Navigation Links Grid (2 columns on Tablet md: 768px+, 1 column on Mobile) */}
                <nav className="py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1.5">
                  {allNavLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-3.5 py-3 rounded-xl text-xs md:text-sm font-medium transition-all min-h-[44px]",
                          isActive
                            ? "bg-amber-400/10 text-amber-500 font-semibold border border-amber-400/20"
                            : "text-foreground hover:bg-muted/80"
                        )}
                      >
                        <span>{link.name}</span>
                        {link.badge ? (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-amber-500/15 text-amber-500">
                            {link.badge}
                          </span>
                        ) : isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        ) : null}
                      </Link>
                    );
                  })}
                </nav>

                {/* Tablet Portal & Workflow Cards */}
                <div className="mt-4 pt-4 border-t border-border space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                    Portal & Proposals
                  </span>

                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-border text-foreground transition-colors min-h-[44px]"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <LayoutDashboard size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Client Dashboard</div>
                      <div className="text-[11px] text-muted-foreground">View proposals, projects & SLA</div>
                    </div>
                  </Link>

                  <Link
                    to="/proposal"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-border text-foreground transition-colors min-h-[44px]"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Interactive Proposal Builder</div>
                      <div className="text-[11px] text-muted-foreground">Get an instant software price estimate</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Drawer Footer & Direct Contacts */}
              <div className="pt-6 border-t border-border space-y-3 mt-6">
                <Link
                  to="/proposal"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow min-h-[44px] hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <span>Request Full Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="p-3 rounded-xl bg-muted/40 border border-border flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={14} className="text-amber-500" />
                    <span>Direct Call:</span>
                  </div>
                  <a
                    href="tel:+917448788879"
                    className="font-mono font-bold text-foreground hover:text-amber-500 transition-colors"
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
