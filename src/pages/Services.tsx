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
  Workflow,
  Cpu,
} from "lucide-react";
import { CenterFlow } from "@/components/ui/center-flow";

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
    name: "Enterprise ERP Software",
    file: "ErpSoftwareService.tsx",
    path: "/services/erp",
    headline: "End-to-End Enterprise ERP Platform",
    badge: "Supply & Inventory",
  },
  {
    number: "06",
    name: "SRM & CRM Software",
    file: "SrmCrmService.tsx",
    path: "/services/crm",
    headline: "Supplier & Customer Relationship Suite",
    badge: "Lead & Vendor CRM",
  },
  {
    number: "07",
    name: "HRM & Payroll Software",
    file: "HrmSoftwareService.tsx",
    path: "/services/hrm",
    headline: "Human Resource & Payroll Management",
    badge: "Biometric & Tax",
  },
  {
    number: "08",
    name: "GST Billing & POS Software",
    file: "BillingSoftwareService.tsx",
    path: "/services/billing",
    headline: "Ultra-Fast GST Billing & Retail POS",
    badge: "Instant GST & Barcode",
  },
  {
    number: "09",
    name: "Custom ERP & Business Automation",
    file: "BusinessWebService.tsx",
    path: "/services/business-web",
    headline: "Custom ERP & Business Automation",
    badge: "Operations ERP",
  },
  {
    number: "10",
    name: "Cloud Infrastructure & DevOps",
    file: "DeploymentHostingService.tsx",
    path: "/services/deployment-hosting",
    headline: "Secure Cloud & DevOps",
    badge: "99.9% Uptime",
  },
  {
    number: "11",
    name: "Digital Marketing & SEO",
    file: "DigitalMarketingService.tsx",
    path: "/services/digital-marketing",
    headline: "Growth-Driven Digital Marketing & SEO",
    badge: "GEO & Google Rank",
  },
  {
    number: "12",
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
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 bg-[var(--hero-bg)] border-b border-[var(--border-line)] transition-colors duration-300">
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

            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
              <span className="font-semibold uppercase tracking-wider">Engineering Disciplines</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-muted)]">{servicePagesList.length} Core Capabilities</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.1] text-balance">
              Engineered for Maximum User Engagement &amp; Commercial Conversion.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl pt-1">
              Explore our {servicePagesList.length} modern software services. Every solution is built with production-grade architectures, high-performance UI/UX, and transparent implementation deliverables.
            </p>

            {/* Value Highlights Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-medium text-[var(--text-primary)]">60fps Responsive UI/UX</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-medium text-[var(--text-primary)]">Direct Developer Communication</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-medium text-[var(--text-primary)]">Turnkey Production Deployment</span>
              </div>
            </div>

            {/* Quick Jump Dropdown Menu */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Direct Pages:
              </span>
              <ServiceDropdownSelector
                variant="pill"
                align="left"
                label={`Select Service Page (${servicePagesList.length} Pages)`}
                showFileName={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="py-4 bg-[var(--card-bg)]/95 border-b border-[var(--border-line)] sticky top-16 z-30 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Interactive Category Segmented Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {[
                { id: "all", label: `All ${servicePagesList.length} Services` },
                { id: "web-mobile", label: "Web & Mobile" },
                { id: "enterprise-cloud", label: "Enterprise Software & Cloud" },
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
                        ? "text-white font-bold"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill)]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceTabPill"
                        className="absolute inset-0 bg-[var(--accent)] rounded-lg shadow-sm -z-10"
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
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter by keyword or stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 transition-all min-h-[34px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 8 SERVICES GRID WITH CARD HOVER EFFECTS, BREATHING SPACING & HIGH CONTRAST */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--surface-fill)] border-b border-[var(--border-line)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Interactive Center Flow: 8 Services Architecture Mesh */}
          <div className="mb-14 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-6 sm:p-8 relative overflow-hidden shadow-sm transition-colors">
            <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-[var(--border-line)] gap-3">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider block">
                  React Bits Pro · Center Flow Mesh
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  Central Architecture &amp; Service Nodes
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                <Workflow className="w-3.5 h-3.5" /> 8 Active Nodes
              </span>
            </div>

            <div className="h-[480px] w-full relative overflow-hidden flex items-center justify-center pt-2">
              <CenterFlow
                centerSize={130}
                nodeSize={70}
                pulseDuration={4}
                pulseInterval={5}
                pulseLength={0.4}
                nodeDistance={0.74}
                centerContent={
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <Cpu className="w-7 h-7 text-[var(--accent)] animate-pulse mb-1" />
                    <span className="text-[10px] font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
                      TECH SASI
                    </span>
                    <span className="text-[9px] font-mono text-[var(--accent)] font-semibold">
                      Engineering Hub
                    </span>
                  </div>
                }
                nodeItems={servicePagesList.map((svc) => ({
                  id: svc.number,
                  content: (
                    <Link
                      to={svc.path}
                      className="flex flex-col items-center justify-center text-center p-1 w-full h-full hover:scale-105 transition-transform"
                    >
                      <span className="text-[9px] font-mono font-bold text-[var(--accent)]">
                        {svc.number}
                      </span>
                      <span className="text-[9px] font-bold text-[var(--text-primary)] line-clamp-2 leading-tight">
                        {svc.name.replace(" Development", "").replace(" Service", "")}
                      </span>
                    </Link>
                  ),
                }))}
              />
            </div>
          </div>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 space-y-3 bg-[var(--card-bg)] rounded-2xl border border-[var(--border-line)] p-8">
              <p className="text-sm text-[var(--text-muted)]">
                No engineering discipline matches "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-xs font-semibold text-[var(--accent)] hover:underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {filteredServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="group relative rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] hover:border-[var(--accent)]/50 p-8 sm:p-9 md:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
                >
                  {/* Top Meta: Editorial Number & Timeline */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-[var(--border-line)] text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="text-[var(--accent)] font-bold text-sm">
                          {service.serviceNumber}.
                        </span>
                        <span className="text-[var(--text-muted)] font-medium">
                          {service.title}
                        </span>
                      </div>
                      <span className="text-[var(--text-subtle)] bg-[var(--surface-fill)] px-2.5 py-1 rounded-md border border-[var(--border-line)]">
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
                        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                          {service.headline}
                        </h2>
                        <p className="text-xs font-medium text-[var(--text-muted)] font-mono">
                          TechSasi Solution Matrix
                        </p>
                      </div>
                    </div>

                    {/* High-Contrast Description with Generous Breathing Space */}
                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pt-1">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist with High-Contrast Text */}
                    <div className="pt-2 space-y-2.5">
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                        Key Deliverables & Specifications:
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-primary)]">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack Tags */}
                    <div className="pt-2">
                      <p className="text-[11px] font-mono text-[var(--text-muted)] mb-2">
                        Production Technologies:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono text-[var(--text-primary)] bg-[var(--surface-fill)] px-2.5 py-1 rounded border border-[var(--border-line)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer with Primary Actionable CTA */}
                  <div className="pt-6 border-t border-[var(--border-line)] mt-6 flex items-center justify-start">
                    <button
                      type="button"
                      onClick={() => handleCtaClick(service)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-all duration-200 cursor-pointer transform active:scale-98 whitespace-nowrap"
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
      <section className="py-20 bg-[var(--bg-primary)] border-b border-[var(--border-line)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Box 1 */}
            <div className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center text-[var(--accent)]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                Ultra-Fast Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                From initial scoping call to production delivery in 1 to 6 weeks. No bloated management hierarchies or stalled handoffs.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center text-[var(--accent)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                100% Code Ownership
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Full repository ownership, documentation, environment secrets, and intellectual property handed over upon delivery.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center text-[var(--accent)]">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                Direct Engineering Lead
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Collaborate directly with the engineers building your code. Direct WhatsApp, phone, and Slack communication channels.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BLOCK: CONCRETE ACTION */}
      <section className="py-20 bg-[var(--surface-fill)] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
            <span>Tailored Proposals</span>
            <span aria-hidden="true">·</span>
            <span>Salem & Worldwide</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] text-balance">
            Ready to Build a High-Performance Digital Product?
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Get an instant custom estimate and breakdown for your project. Choose features, calculate timelines, and generate a transparent proposal in under 2 minutes.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/proposal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Build Custom Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)] bg-[var(--card-bg)] border border-[var(--border-line)] hover:bg-[var(--surface-fill-subtle)] rounded-xl transition-colors shadow-xs"
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
