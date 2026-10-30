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
    title: "Enterprise ERP Software",
    fileName: "ErpSoftwareService.tsx",
    path: "/services/erp",
    headline: "End-to-End Enterprise ERP Platform",
    badge: "Supply & Inventory",
    iconType: "erp",
  },
  {
    number: "06",
    title: "SRM & CRM Software",
    fileName: "SrmCrmService.tsx",
    path: "/services/crm",
    headline: "Supplier & Customer Relationship Suite",
    badge: "Lead & Vendor CRM",
    iconType: "crm",
  },
  {
    number: "07",
    title: "HRM & Payroll Software",
    fileName: "HrmSoftwareService.tsx",
    path: "/services/hrm",
    headline: "Human Resource & Payroll Management",
    badge: "Biometric & Tax",
    iconType: "hrm",
  },
  {
    number: "08",
    title: "Billing & POS Software",
    fileName: "BillingSoftwareService.tsx",
    path: "/services/billing",
    headline: "Fast GST Billing & Retail POS Software",
    badge: "Instant GST & Barcode",
    iconType: "billing",
  },
  {
    number: "09",
    title: "Custom ERP & Automation",
    fileName: "BusinessWebService.tsx",
    path: "/services/business-web",
    headline: "Custom Business Automation",
    badge: "Operations ERP",
    iconType: "custom-erp",
  },
  {
    number: "10",
    title: "Cloud Infrastructure & DevOps",
    fileName: "DeploymentHostingService.tsx",
    path: "/services/deployment-hosting",
    headline: "Secure Cloud & DevOps",
    badge: "99.9% Uptime",
    iconType: "cloud-devops",
  },
  {
    number: "11",
    title: "Digital Marketing & SEO",
    fileName: "DigitalMarketingService.tsx",
    path: "/services/digital-marketing",
    headline: "Growth-Driven Digital Marketing & SEO",
    badge: "GEO & Google Rank",
    iconType: "digital-marketing",
  },
  {
    number: "12",
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

  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(-1);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setFilterQuery("");
      setFocusedIndex(-1);
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
    triggerButtonRef.current?.focus();
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (filteredPages.length > 0) {
        setFocusedIndex(0);
        optionsRef.current[0]?.focus();
      }
    } else if (e.key === "Enter" && filteredPages.length > 0) {
      e.preventDefault();
      handleSelect(filteredPages[0]);
    }
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = index < filteredPages.length - 1 ? index + 1 : 0;
      setFocusedIndex(nextIdx);
      optionsRef.current[nextIdx]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (index === 0) {
        searchInputRef.current?.focus();
        setFocusedIndex(-1);
      } else {
        const prevIdx = index - 1;
        setFocusedIndex(prevIdx);
        optionsRef.current[prevIdx]?.focus();
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      setFocusedIndex(0);
      optionsRef.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const lastIdx = filteredPages.length - 1;
      setFocusedIndex(lastIdx);
      optionsRef.current[lastIdx]?.focus();
    }
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
        ref={triggerButtonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleTriggerKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="service-dropdown-listbox"
        className={`group inline-flex items-center justify-between gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${
          variant === "pill"
            ? "bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--accent)] hover:bg-[var(--surface-fill-subtle)] shadow-xs"
            : variant === "compact"
            ? "bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] hover:border-[var(--accent)]/50 py-1.5 px-3"
            : "bg-[var(--card-bg)] border border-[var(--border-line)] text-[var(--text-primary)] shadow-md hover:border-[var(--accent)]/60 hover:shadow-lg"
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-[var(--surface-fill)] text-[var(--accent)] flex items-center justify-center shrink-0 border border-[var(--border-line)]" aria-hidden="true">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[var(--accent)] leading-tight">
              {currentService ? `Service ${currentService.number}` : label}
            </span>
            <span className="text-xs font-bold text-[var(--text-primary)] truncate max-w-[180px] sm:max-w-[240px]">
              {currentService ? currentService.title : "Jump to Service Page"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 pl-1">
          {showFileName && currentService && (
            <span className="hidden md:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-fill)] text-[var(--text-muted)] border border-[var(--border-line)]">
              {currentService.fileName}
            </span>
          )}
          <ChevronDown
            className={`w-4 h-4 text-[var(--accent)] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
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
            className={`absolute ${alignmentClass} top-full mt-2 w-[320px] sm:w-[380px] rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] shadow-2xl p-2.5 z-50`}
            id="service-dropdown-listbox"
            role="listbox"
            aria-label="Service solutions list"
          >
            {/* Header info */}
            <div className="px-3 py-2 border-b border-[var(--border-line)] flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                {ALL_8_SERVICE_PAGES.length} Service Solutions
              </span>
              <span className="text-[10px] font-mono text-[var(--text-subtle)] bg-[var(--surface-fill)] px-2 py-0.5 rounded-md border border-[var(--border-line)]">
                Interactive Switcher
              </span>
            </div>

            {/* Quick Filter Input */}
            <div className="p-2 border-b border-[var(--border-line)]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search service name or .tsx file..."
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  aria-label="Filter service solutions"
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>
            </div>

            {/* List of service pages */}
            <div className="max-h-[340px] overflow-y-auto scrollbar-none py-1 space-y-1">
              {filteredPages.length === 0 ? (
                <div className="py-6 text-center text-xs text-[var(--text-muted)]" role="status">
                  No service page found matching "{filterQuery}"
                </div>
              ) : (
                filteredPages.map((page, idx) => {
                  const isCurrent =
                    page.path === activePath ||
                    (page.path === "/services/mobile-app" && activePath.includes("mobile"));

                  return (
                    <button
                      key={page.path}
                      ref={(el) => (optionsRef.current[idx] = el)}
                      type="button"
                      onClick={() => handleSelect(page)}
                      onKeyDown={(e) => handleOptionKeyDown(e, idx)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                        isCurrent
                          ? "bg-[var(--surface-fill)] border border-[var(--accent)]/40 text-[var(--text-primary)] font-semibold"
                          : "hover:bg-[var(--surface-fill)] text-[var(--text-primary)]"
                      }`}
                      role="option"
                      aria-selected={isCurrent}
                      tabIndex={focusedIndex === idx ? 0 : -1}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        {/* Mini Service PNG Icon */}
                        <div
                          className={`relative w-8 h-8 rounded-lg overflow-hidden shrink-0 mt-0.5 border p-1 flex items-center justify-center transition-all ${
                            isCurrent
                              ? "bg-[var(--card-bg)] border-[var(--accent)] shadow-xs"
                              : "bg-[var(--surface-fill)] border-[var(--border-line)] group-hover:border-[var(--accent)]/50"
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
                                  ? "text-[var(--accent)]"
                                  : "text-[var(--text-primary)] group-hover:text-[var(--accent)]"
                              }`}
                            >
                              {page.title}
                            </span>
                            {isCurrent && (
                              <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[var(--accent)] text-white uppercase">
                                Current
                              </span>
                            )}
                          </div>

                          {/* File Name Tag */}
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)]">
                            <Code2 className="w-3 h-3 text-[var(--accent)] shrink-0" />
                            <span className="text-[var(--accent)] font-medium truncate">
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
                          <div className="w-5 h-5 rounded-full bg-[var(--surface-fill)] text-[var(--accent)] border border-[var(--border-line)] flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-2 mt-1 border-t border-[var(--border-line)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] px-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/services");
                }}
                className="text-[var(--accent)] hover:underline flex items-center gap-1"
              >
                <span>View All on /services</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <span>{ALL_8_SERVICE_PAGES.length} Modular Pages</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
