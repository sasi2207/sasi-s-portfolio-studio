import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Check,
  Search,
  ExternalLink,
  Code2,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ServiceCardIcon, ServiceIconType } from "./ServiceCardIcon";

export interface ServicePageOption {
  number: string;
  title: string;
  fileName: string;
  path: string;
  headline: string;
  badge: string;
  iconType: ServiceIconType;
}

export const ALL_8_SERVICE_PAGES: ServicePageOption[] = [
  {
    number: "01",
    title: "Static Website Development",
    fileName: "StaticWebService.tsx",
    path: "/services/static-web",
    headline: "Blazing-Fast Static Websites",
    badge: "Speed & SEO",
    iconType: "static-web",
  },
  {
    number: "02",
    title: "Dynamic Web Development",
    fileName: "DynamicWebService.tsx",
    path: "/services/dynamic-web",
    headline: "Scalable Dynamic Web Apps",
    badge: "Portals & CRUD",
    iconType: "dynamic-web",
  },
  {
    number: "03",
    title: "E-Commerce Development",
    fileName: "EcommerceWebService.tsx",
    path: "/services/ecommerce",
    headline: "High-Converting E-Commerce Stores",
    badge: "Store & UPI",
    iconType: "ecommerce",
  },
  {
    number: "04",
    title: "Mobile Application Development",
    fileName: "AppDevelopmentService.tsx",
    path: "/services/mobile-app",
    headline: "Cross-Platform Mobile Apps",
    badge: "iOS & Android",
    iconType: "mobile-apps",
  },
  {
    number: "05",
    title: "Custom ERP & Business Automation",
    fileName: "BusinessWebService.tsx",
    path: "/services/business-web",
    headline: "Custom ERP & Business Automation",
    badge: "Operations ERP",
    iconType: "custom-erp",
  },
  {
    number: "06",
    title: "Cloud Infrastructure & DevOps",
    fileName: "DeploymentHostingService.tsx",
    path: "/services/deployment-hosting",
    headline: "Secure Cloud & DevOps",
    badge: "99.9% Uptime",
    iconType: "cloud-devops",
  },
  {
    number: "07",
    title: "Digital Marketing & SEO",
    fileName: "DigitalMarketingService.tsx",
    path: "/services/digital-marketing",
    headline: "Growth-Driven Digital Marketing & SEO",
    badge: "GEO & Google Rank",
    iconType: "digital-marketing",
  },
  {
    number: "08",
    title: "TechSasi Academy & Mentorship",
    fileName: "ComputerCoachingServices.tsx",
    path: "/services/coaching",
    headline: "TechSasi Academy & Mentorship",
    badge: "1-on-1 Mentorship",
    iconType: "academy-mentorship",
  },
];

interface ServiceDropdownSelectorProps {
  currentPath?: string;
  variant?: "pill" | "button" | "bar" | "compact";
  align?: "left" | "right" | "center";
  label?: string;
  showFileName?: boolean;
  className?: string;
}

export const ServiceDropdownSelector: React.FC<ServiceDropdownSelectorProps> = ({
  currentPath,
  variant = "button",
  align = "left",
  label = "Select Service Page",
  showFileName = true,
  className = "",
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activePath = currentPath || location.pathname;

  // Find currently active service
  const currentService = ALL_8_SERVICE_PAGES.find(
    (s) => s.path === activePath || (s.path === "/services/mobile-app" && activePath.includes("mobile"))
  );

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    if (!isOpen) {
      setFilterQuery("");
    }
  }, [isOpen]);

  const filteredPages = ALL_8_SERVICE_PAGES.filter((page) => {
    const q = filterQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      page.title.toLowerCase().includes(q) ||
      page.fileName.toLowerCase().includes(q) ||
      page.headline.toLowerCase().includes(q) ||
      page.number.includes(q) ||
      page.badge.toLowerCase().includes(q)
    );
  });

  const handleSelect = (page: ServicePageOption) => {
    setIsOpen(false);
    navigate(page.path);
  };

  const alignmentClass =
    align === "right"
      ? "right-0"
      : align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "left-0";

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`group inline-flex items-center justify-between gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
          variant === "pill"
            ? "bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 shadow-sm"
            : variant === "compact"
            ? "bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.1] text-slate-700 dark:text-slate-200 hover:border-amber-500/50 py-1.5 px-3"
            : "bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.1] text-slate-800 dark:text-slate-100 shadow-md hover:border-amber-500/60 hover:shadow-lg"
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-amber-600 dark:text-amber-400 leading-tight">
              {currentService ? `Service ${currentService.number}` : label}
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[180px] sm:max-w-[240px]">
              {currentService ? currentService.title : "Jump to Service Page"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 pl-1">
          {showFileName && currentService && (
            <span className="hidden md:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/[0.08] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
              {currentService.fileName}
            </span>
          )}
          <ChevronDown
            className={`w-4 h-4 text-amber-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Dropdown Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute ${alignmentClass} top-full mt-2 w-[320px] sm:w-[380px] rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.12] shadow-2xl p-2.5 z-50`}
            role="listbox"
          >
            {/* Header info */}
            <div className="px-3 py-2 border-b border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  8 Service Pages
                </span>
              </div>
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                Interactive Switcher
              </span>
            </div>

            {/* Quick Filter Input */}
            <div className="p-2 border-b border-slate-100 dark:border-white/[0.06]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search service name or .tsx file..."
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* List of 8 service pages */}
            <div className="max-h-[340px] overflow-y-auto scrollbar-none py-1 space-y-1">
              {filteredPages.length === 0 ? (
                <div className="py-6 text-center text-xs text-slate-500">
                  No service page found matching "{filterQuery}"
                </div>
              ) : (
                filteredPages.map((page) => {
                  const isCurrent =
                    page.path === activePath ||
                    (page.path === "/services/mobile-app" && activePath.includes("mobile"));

                  return (
                    <button
                      key={page.path}
                      type="button"
                      onClick={() => handleSelect(page)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group cursor-pointer ${
                        isCurrent
                          ? "bg-amber-500/15 border border-amber-500/30 text-amber-950 dark:text-amber-100"
                          : "hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-800 dark:text-slate-200"
                      }`}
                      role="option"
                      aria-selected={isCurrent}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        {/* Mini Service PNG Icon */}
                        <div
                          className={`relative w-8 h-8 rounded-lg overflow-hidden shrink-0 mt-0.5 border p-1 flex items-center justify-center transition-all ${
                            isCurrent
                              ? "bg-amber-500/20 border-amber-500 shadow-sm"
                              : "bg-slate-900/40 dark:bg-white/[0.05] border-slate-200 dark:border-white/[0.1] group-hover:border-amber-500/50"
                          }`}
                        >
                          <img
                            src={`/images/services/icons/${
                              page.iconType === "mobile-apps"
                                ? "mobile-app"
                                : page.iconType === "custom-erp"
                                ? "business-web"
                                : page.iconType === "cloud-devops"
                                ? "deployment-hosting"
                                : page.iconType === "academy-mentorship"
                                ? "coaching"
                                : page.iconType
                            }.png`}
                            alt={page.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform"
                          />
                        </div>

                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span
                              className={`text-xs font-bold leading-tight truncate ${
                                isCurrent
                                  ? "text-amber-600 dark:text-amber-300"
                                  : "text-slate-900 dark:text-white group-hover:text-amber-500"
                              }`}
                            >
                              {page.title}
                            </span>
                            {isCurrent && (
                              <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 uppercase">
                                Current
                              </span>
                            )}
                          </div>

                          {/* File Name Tag */}
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            <Code2 className="w-3 h-3 text-amber-500 shrink-0" />
                            <span className="text-amber-600 dark:text-amber-400/90 font-medium truncate">
                              {page.fileName}
                            </span>
                            <span>·</span>
                            <span className="truncate">{page.badge}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Action Icon */}
                      <div className="shrink-0 flex items-center pl-1">
                        {isCurrent ? (
                          <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-2 mt-1 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500 px-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/services");
                }}
                className="text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View All on /services</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <span>8 Modular Pages</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
