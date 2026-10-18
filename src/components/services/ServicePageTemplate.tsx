import React, { useState, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout as PageLayout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { ServiceCardIcon, ServiceIconType } from "@/components/services/ServiceCardIcon";
import { ServicePageNavigator, ServicePageBottomSwitcher } from "@/components/services/ServicePageNavigator";
import { toast } from "sonner";
import {
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Send,
  HelpCircle,
  ChevronDown,
  Layers,
  PhoneCall,
  CheckCircle2,
  X,
  Calculator,
  Maximize2,
  ExternalLink,
  Cpu,
  Workflow,
  Zap,
  Sliders,
  RotateCw,
  LayoutGrid,
} from "lucide-react";

// ReactBits UI Animation Components
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ReactBitsBentoCard } from "@/components/ui/reactbits-bento-card";
import { TiltedCard } from "@/components/ui/tilted-card";
import { GlareCard } from "@/components/ui/glare-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyText } from "@/components/ui/shiny-text";
import { DecryptedText } from "@/components/ui/decrypted-text";
import { RotatingCards } from "@/components/ui/rotating-cards";
import { CenterFlow } from "@/components/ui/center-flow";

// Workflow Step PNG Images
import step1WorkflowImg from "/images/workflow/step-01-discovery.png";
import step2WorkflowImg from "/images/workflow/step-02-prototyping.png";
import step3WorkflowImg from "/images/workflow/step-03-engineering.png";
import step4WorkflowImg from "/images/workflow/step-04-testing.png";
import step5WorkflowImg from "/images/workflow/step-05-deployment.png";

const workflowImages = [
  step1WorkflowImg,
  step2WorkflowImg,
  step3WorkflowImg,
  step4WorkflowImg,
  step5WorkflowImg,
];

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  timeline: string;
  description: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
}

export interface ServiceCapability {
  title: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePageData {
  serviceId: string;
  serviceNumber: string;
  title: string;
  headline: string;
  badgeText: string;
  description: string;
  proposalType: string;
  iconType: ServiceIconType;
  iconPng?: string;
  previewImage?: string;
  previewImageAlt?: string;
  timeline: string;
  stats: { value: string; label: string }[];
  capabilitiesTitle?: string;
  capabilitiesSubtitle?: string;
  capabilities: ServiceCapability[];
  deliverables: string[];
  techStack: string[];
  packagesTitle?: string;
  packages: ServicePackage[];
  processSteps: { number: string; title: string; description: string }[];
  faqs: ServiceFaq[];
  whatsappMessage?: string;
}

const defaultPreviewImageMap: Record<string, string> = {
  "static-web": "/images/services/static-web-preview.png",
  "dynamic-web": "/images/services/dynamic-web-preview.png",
  "ecommerce": "/images/services/ecommerce-preview.png",
  "mobile-apps": "/images/services/mobile-app-preview.png",
  "mobile-app": "/images/services/mobile-app-preview.png",
  "erp-software": "/images/services/business-web-preview.png",
  "srm-crm-software": "/images/services/business-web-preview.png",
  "hrm-software": "/images/services/business-web-preview.png",
  "billing-software": "/images/services/ecommerce-preview.png",
  "custom-erp": "/images/services/business-web-preview.png",
  "business-web": "/images/services/business-web-preview.png",
  "cloud-devops": "/images/services/deployment-hosting-preview.png",
  "deployment-hosting": "/images/services/deployment-hosting-preview.png",
  "digital-marketing": "/images/services/digital-marketing-preview.png",
  "academy": "/images/services/coaching-preview.png",
  "coaching": "/images/services/coaching-preview.png",
  "academy-mentorship": "/images/services/coaching-preview.png",
};

const addonOptions = [
  { id: "Cloud Edge Deployment & SSL", label: "Cloud Hosting & Auto-Renewing SSL", price: 2999 },
  { id: "WhatsApp Instant Notification Bot", label: "WhatsApp Alerts & Lead Dispatch Bot", price: 3499 },
  { id: "Multi-Role RBAC & Audit Trails", label: "Granular RBAC Staff Permissions", price: 4999 },
  { id: "Mobile PWA / Tablet Optimized Terminal", label: "Mobile Tablet UI / Offline PWA Sync", price: 5999 },
  { id: "Priority 24/7 SLA Engineering", label: "Priority 4-Hour Response SLA", price: 4499 },
];

export const ServicePageTemplate: React.FC<{ data: ServicePageData }> = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "3d">("grid");

  const activePreviewImg =
    data.previewImage ||
    defaultPreviewImageMap[data.serviceId] ||
    defaultPreviewImageMap[data.proposalType] ||
    "/images/services/static-web-preview.png";

  // Real-Time Scope Estimator State
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "Cloud Edge Deployment & SSL",
    "WhatsApp Instant Notification Bot",
  ]);

  const currentTier = data.packages[selectedTierIndex] || data.packages[0];

  const basePriceNum = useMemo(() => {
    if (!currentTier) return 10000;
    const cleanStr = currentTier.price.replace(/[^0-9]/g, "");
    return cleanStr ? parseInt(cleanStr, 10) : 10000;
  }, [currentTier]);

  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((acc, curr) => {
      const match = addonOptions.find((a) => a.id === curr);
      return acc + (match ? match.price : 0);
    }, 0);
  }, [selectedAddons]);

  const totalCalculatedEstimate = basePriceNum + addonsTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Direct Message Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    selectedPackage: data.packages[0]?.name || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const defaultWhatsappMsg = encodeURIComponent(
    data.whatsappMessage ||
      `Hello TechSasi, I am interested in ${data.title}. Please share details and a customized quote.`
  );

  const handleWhatsAppClick = (packageName?: string, customScopeMsg?: string) => {
    let text = defaultWhatsappMsg;
    if (customScopeMsg) {
      text = encodeURIComponent(customScopeMsg);
    } else if (packageName) {
      text = encodeURIComponent(
        `Hello TechSasi, I am interested in the "${packageName}" plan for ${data.title}. Let's discuss requirements.`
      );
    }
    const url = `https://wa.me/917448788879?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Inquiry received! Our engineering team will reach out within 4 hours.");
      try {
        const raw = localStorage.getItem("techsasi_service_inquiries");
        const list = raw ? JSON.parse(raw) : [];
        list.unshift({
          id: Date.now(),
          service: data.title,
          ...formData,
          created_at: new Date().toISOString(),
        });
        localStorage.setItem("techsasi_service_inquiries", JSON.stringify(list));
      } catch (err) {
        void err;
      }
    }, 500);
  };

  return (
    <PageLayout>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen transition-colors duration-300">
        
        {/* ================= 1. HERO SECTION WITH REACTBITS SHINY TEXT & MOTION ================= */}
        <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 border-b border-[var(--border-line)] bg-[var(--hero-bg)] relative overflow-hidden transition-colors duration-300">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[var(--accent)]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              {/* Top Service Page Navigator & Dropdown Selector */}
              <div className="pb-2">
                <ServicePageNavigator
                  currentPath={location.pathname}
                  currentTitle={data.title}
                />
              </div>

              {/* Service Meta Kicker with ReactBits ShinyText */}
              <div className="inline-flex items-center gap-2 text-xs font-mono bg-[var(--surface-fill)] border border-[var(--border-line)] px-3.5 py-1.5 rounded-full shadow-xs">
                <span className="font-bold text-[var(--accent)]">Service {data.serviceNumber}</span>
                <span aria-hidden="true" className="text-[var(--text-muted)]">·</span>
                <ShinyText text={data.badgeText} speed={2.5} className="font-bold" />
                <span aria-hidden="true" className="text-[var(--text-muted)]">·</span>
                <span className="text-[var(--text-muted)]">Est. {data.timeline}</span>
              </div>

              {/* Icon & Display Headline */}
              <div className="flex flex-col items-center gap-4">
                <ServiceCardIcon
                  type={data.iconType}
                  imageSrc={data.iconPng}
                  className="shadow-2xl"
                />
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.1] text-balance">
                  {data.headline}
                </h1>
              </div>

              {/* Decrypted Technical Sub-spec & Lead Paragraph */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)] bg-[var(--surface-fill-subtle)] px-3 py-1 rounded-lg border border-[var(--border-line)]">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>ARCHITECTURE SPEC: </span>
                  <DecryptedText
                    text={`TECHSASI_${data.serviceId.toUpperCase()}_PRODUCTION_STACK`}
                    speed={30}
                    animateOn="view"
                    className="font-bold tracking-wider"
                  />
                </div>

                <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#scope-estimator-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Configure Scope &amp; Estimate</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleWhatsAppClick()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[var(--text-primary)] bg-[var(--card-bg)] border border-[var(--border-line)] hover:bg-[var(--surface-fill)] transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* ================= HERO SHOWCASE PREVIEW WITH TILTED CARD & BORDER BEAM ================= */}
              <div className="pt-10 sm:pt-14 max-w-5xl mx-auto">
                <TiltedCard
                  maxAngle={6}
                  scaleOnHover={1.015}
                  containerClassName="w-full"
                  className="rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-[var(--surface-fill)] border border-[var(--border-line)] shadow-2xl relative group overflow-hidden"
                >
                  <BorderBeam size={280} duration={10} colorFrom="var(--accent)" colorTo="var(--accent-from)" />

                  {/* Window Chrome Header Bar */}
                  <div className="relative px-3 sm:px-4 py-2.5 bg-[var(--surface-ink)] rounded-t-xl sm:rounded-t-2xl flex items-center justify-between text-xs text-[var(--text-muted)] border-b border-[var(--border-line)]">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <span className="hidden sm:inline-block font-mono text-[11px] text-[var(--text-muted)] pl-2">
                        https://techsasi.com/services/{data.serviceId}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Production Blueprint
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsZoomOpen(true)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[var(--surface-fill)] hover:bg-[var(--surface-fill-subtle)] text-[var(--text-primary)] border border-[var(--border-line)] transition-colors cursor-pointer"
                        title="Zoom Architecture Spec"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Inspect Fullscreen</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Image Container */}
                  <div
                    onClick={() => setIsZoomOpen(true)}
                    className="relative rounded-b-xl sm:rounded-b-2xl overflow-hidden cursor-zoom-in bg-[var(--surface-ink)] aspect-[16/9]"
                  >
                    <img
                      src={activePreviewImg}
                      alt={`${data.title} Architecture & Production Preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover sm:object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Floating Interactive Glass Chips on the image */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-none">
                      <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold flex items-center gap-2 shadow-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Commercial Grade Certified</span>
                      </div>
                      <div className="hidden sm:flex px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-slate-200 text-[11px] sm:text-xs font-mono items-center gap-1.5 shadow-lg">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Full Source Code Handover</span>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-3 py-1.5 rounded-xl bg-[var(--accent)] text-white font-bold text-xs flex items-center gap-1.5 shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>
                </TiltedCard>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 2. VALUE PROOF KPI COUNTER STRIP ================= */}
        <section className="py-10 bg-[var(--card-bg)] border-b border-[var(--border-line)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 p-3 rounded-xl hover:bg-[var(--surface-fill)] transition-colors">
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--accent)] font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. ARCHITECTURAL CAPABILITIES (SPOTLIGHT & 3D ROTATING CARDS) ================= */}
        <section className="py-20 sm:py-24 bg-[var(--surface-fill)] border-b border-[var(--border-line)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Engineering Capabilities</span>
                  <span aria-hidden="true">·</span>
                  <span>ReactBits Pro Animation</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                  {data.capabilitiesTitle || "What We Build & Deliver"}
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {data.capabilitiesSubtitle ||
                    "Engineered with clean separation of concerns, high-velocity performance, and zero technical debt."}
                </p>
              </div>

              {/* View Switcher: Interactive Grid vs 3D Spatial Ring */}
              <div className="flex items-center gap-1 p-1 bg-[var(--card-bg)] border border-[var(--border-line)] rounded-xl shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-[var(--accent)] text-white shadow-xs"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Spotlight Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("3d")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === "3d"
                      ? "bg-[var(--accent)] text-white shadow-xs"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>3D Spatial Ring</span>
                </button>
              </div>
            </div>

            {/* View Mode: 3D Spatial Ring */}
            {viewMode === "3d" ? (
              <div className="overflow-hidden rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-6 sm:p-10 relative flex flex-col items-center justify-center shadow-lg transition-colors">
                <div className="text-center max-w-xl mx-auto mb-6 space-y-2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    React Bits Pro · 3D Rotating Cards
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
                    Interactive 3D Architectural Ring
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                    Drag, spin, and interact with the 3D ring of core pillars. Hover to inspect individual performance characteristics.
                  </p>
                </div>

                <div className="w-full flex items-center justify-center py-6 overflow-x-auto overflow-y-visible scrollbar-none">
                  <div className="scale-90 sm:scale-100 transition-transform">
                    <RotatingCards
                      cards={data.capabilities.map((cap, idx) => {
                        const CapIcon = cap.icon;
                        return {
                          id: `rot-cap-${idx}`,
                          title: cap.title,
                          description: cap.description,
                          badge: cap.badge,
                          content: (
                            <div className="flex flex-col h-full justify-between select-none text-left p-1">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 font-bold">
                                  {cap.badge || `0${idx + 1}`}
                                </span>
                                <div className="w-8 h-8 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center text-[var(--accent)]">
                                  <CapIcon className="w-4 h-4" />
                                </div>
                              </div>
                              <div className="space-y-1.5 pt-4">
                                <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-tight leading-snug line-clamp-2">
                                  {cap.title}
                                </h4>
                                <p className="text-[11px] text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                                  {cap.description}
                                </p>
                              </div>
                              <div className="pt-2 flex items-center gap-1 text-[10px] font-mono font-semibold text-[var(--accent)]">
                                <span>Verified Pillar</span>
                                <ArrowRight className="w-3 h-3" />
                              </div>
                            </div>
                          ),
                        };
                      })}
                      radius={240}
                      duration={26}
                      cardWidth={195}
                      cardHeight={225}
                      draggable={true}
                      pauseOnHover={true}
                      autoPlay={true}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* View Mode: ReactBits Spotlight Grid with Dynamic Tilt & Radial Light */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {data.capabilities.map((cap, idx) => {
                  const IconComponent = cap.icon;
                  return (
                    <SpotlightCard
                      key={idx}
                      enableTilt={true}
                      tiltMaxAngle={6}
                      spotlightColor="rgba(var(--primary-glow), 0.18)"
                      borderColor="rgba(var(--primary-glow), 0.4)"
                      className="p-8 flex flex-col justify-between group h-full shadow-md"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform shadow-xs">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <h3 className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {cap.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                          {cap.description}
                        </p>
                      </div>

                      {cap.badge && (
                        <div className="pt-5 border-t border-[var(--border-line)] mt-6 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-[var(--accent)] font-semibold">
                            {cap.badge}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">
                            0{idx + 1}
                          </span>
                        </div>
                      )}
                    </SpotlightCard>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* ================= 4. INTERACTIVE REACTBITS SCOPE & PRICING ESTIMATOR FORM ================= */}
        <section id="scope-estimator-section" className="py-20 sm:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-line)] transition-colors duration-300 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                <Sliders className="w-3.5 h-3.5" />
                Live Scope &amp; Cost Estimator
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Calculate Your Custom {data.title} Scope
              </h2>
              <p className="text-sm text-[var(--text-muted)]">
                Select your base scale and optional modules below. Receive instant transparent timeline and price estimations in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
              {/* Left Column: Scope Configurator */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Base Tier Selector */}
                <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                      Step 1: Select Foundation Scale
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {data.packages.length} Tiers Available
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {data.packages.map((pkg, idx) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedTierIndex(idx)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          selectedTierIndex === idx
                            ? "bg-[var(--surface-fill)] border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]"
                            : "bg-[var(--card-bg)] border-[var(--border-line)] hover:border-[var(--accent)]/40"
                        }`}
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase text-[var(--accent)]">
                            Tier 0{idx + 1}
                          </span>
                          <div className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">
                            {pkg.name}
                          </div>
                        </div>
                        <div className="pt-2 font-display text-sm font-extrabold text-[var(--accent)]">
                          {pkg.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Optional Production Addons */}
                <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                      Step 2: Add-on Modules &amp; Integrations
                    </span>
                    <span className="text-[11px] font-mono text-[var(--accent)] font-semibold">
                      +{selectedAddons.length} Selected
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {addonOptions.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? "bg-[var(--surface-fill)] border-[var(--accent)]/60 shadow-xs"
                              : "bg-[var(--card-bg)] border-[var(--border-line)] hover:border-[var(--accent)]/30"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                                isChecked
                                  ? "bg-[var(--accent)] text-white"
                                  : "border border-[var(--border-line)] bg-[var(--surface-fill)]"
                              }`}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className="text-xs font-semibold text-[var(--text-primary)]">
                              {addon.label}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[var(--accent)] shrink-0">
                            +₹{addon.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Live Scope Summary Card with GlareCard */}
              <div className="lg:col-span-5">
                <GlareCard className="p-6 sm:p-8 rounded-2xl border border-[var(--border-line)] bg-[var(--card-bg)] shadow-xl space-y-6 relative">
                  <div className="space-y-1 pb-4 border-b border-[var(--border-line)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase text-[var(--accent)]">
                        Real-Time Architectural Estimate
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                        Live Calculator
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                      {currentTier.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      Customized scope for {data.title}
                    </p>
                  </div>

                  {/* Calculated Price Display */}
                  <div className="space-y-1">
                    <span className="text-xs text-[var(--text-muted)] font-medium">Estimated Project Cost</span>
                    <div className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--accent)] flex items-baseline gap-1">
                      <span>₹{totalCalculatedEstimate.toLocaleString("en-IN")}</span>
                      <span className="text-xs font-mono text-[var(--text-muted)] font-normal">est.</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] pt-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>Estimated Timeline: ~{currentTier.timeline}</span>
                    </div>
                  </div>

                  {/* Inclusions breakdown */}
                  <div className="space-y-2 pt-2 border-t border-[var(--border-line)] text-xs">
                    <span className="font-mono font-bold uppercase text-[var(--text-primary)]">
                      Included in this Scope:
                    </span>
                    <ul className="space-y-1.5 text-[var(--text-muted)]">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>Base Platform: {currentTier.name} ({currentTier.price})</span>
                      </li>
                      {selectedAddons.map((ad, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[var(--text-primary)]">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ad}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp Pre-Filled Confirmation Button */}
                  <div className="space-y-3 pt-4 border-t border-[var(--border-line)]">
                    <button
                      type="button"
                      onClick={() =>
                        handleWhatsAppClick(
                          currentTier.name,
                          `Hello TechSasi, I customized a scope for ${data.title} (${currentTier.name} + ${selectedAddons.length} addons, Est ₹${totalCalculatedEstimate.toLocaleString("en-IN")}). Please review and share formal quotation.`
                        )
                      }
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-300" />
                      <span>Lock In Scope via WhatsApp</span>
                    </button>

                    <Link
                      to={`/proposal?type=${data.proposalType}`}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--surface-fill)] border border-[var(--border-line)] transition-colors cursor-pointer flex items-center justify-center gap-1.5 text-center"
                    >
                      <Calculator className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>Open in Detailed Proposal Generator</span>
                    </Link>
                  </div>
                </GlareCard>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 5. DELIVERABLES & PRODUCTION TECH STACK (REACTBITS BENTO CARDS) ================= */}
        <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              
              {/* Deliverables Column wrapped in ReactBitsBentoCard */}
              <ReactBitsBentoCard className="p-8 shadow-sm">
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-wider">
                    Full Project Inclusions
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                    Deliverables Included in Every Engagement
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    Transparent handover standards. We ensure zero surprise costs and complete technical readiness.
                  </p>
                </div>

                <ul className="space-y-3">
                  {data.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-start gap-3 shadow-xs"
                    >
                      <Check className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </ReactBitsBentoCard>

              {/* Technologies & Process Column */}
              <div className="space-y-8">
                {/* Tech Stack Box */}
                <div className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Production Technology Stack</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-[var(--text-primary)]">
                    Modern, Enterprise-Grade Frameworks
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    Every codebase is engineered with industry-standard frameworks, automated type checking, and modern cloud deployment configurations.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {data.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono font-semibold text-[var(--text-primary)] bg-[var(--surface-fill)] px-3 py-1.5 rounded-lg border border-[var(--border-line)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4-Step Agile Delivery Workflow */}
                <div className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] space-y-6 shadow-sm">
                  <span className="text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-wider">
                    Deployment Roadmap
                  </span>
                  <h4 className="font-display text-xl font-bold text-[var(--text-primary)]">
                    How We Execute &amp; Launch
                  </h4>

                  <div className="space-y-3">
                    {data.processSteps.map((step, idx) => {
                      const stepImg = workflowImages[idx % workflowImages.length];
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-3.5 p-3 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] shadow-xs hover:border-[var(--accent)]/50 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-[var(--card-bg)] border border-[var(--border-line)] p-1.5 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:border-[var(--accent)] transition-all">
                            <img
                              src={stepImg}
                              alt={step.title}
                              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                            />
                          </div>
                          <div className="space-y-0.5 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--card-bg)] px-1.5 py-0.2 rounded border border-[var(--border-line)]">
                                {step.number}
                              </span>
                              <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                                {step.title}
                              </div>
                            </div>
                            <div className="text-xs text-[var(--text-muted)] leading-relaxed pt-0.5">
                              {step.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= 6. ARCHITECTURAL CENTER FLOW (REACT BITS PRO) ================= */}
        <section className="py-20 bg-[var(--card-bg)] border-b border-[var(--border-line)] transition-colors duration-300 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                <Workflow className="w-3.5 h-3.5" />
                Live Architecture Mesh
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {data.title} Engine &amp; Connected Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Central engineering hub dispatching real-time pulses across client integration nodes, caching layers, and production checkpoints.
              </p>
            </div>

            <div className="h-[480px] rounded-3xl bg-[var(--surface-fill)] border border-[var(--border-line)] relative overflow-hidden flex items-center justify-center p-4 shadow-sm">
              <CenterFlow
                centerSize={130}
                nodeSize={72}
                pulseDuration={4}
                pulseInterval={6}
                pulseLength={0.4}
                nodeDistance={0.72}
                centerContent={
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <Cpu className="w-7 h-7 text-[var(--accent)] animate-pulse mb-1" />
                    <span className="text-[10px] font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
                      TechSasi
                    </span>
                    <span className="text-[9px] font-mono text-[var(--accent)] font-semibold truncate max-w-[80px]">
                      {data.serviceId}
                    </span>
                  </div>
                }
                nodeItems={
                  data.processSteps.map((step, sIdx) => {
                    const nodeImg = workflowImages[sIdx % workflowImages.length];
                    return {
                      id: sIdx,
                      content: (
                        <div className="flex flex-col items-center justify-center text-center p-1">
                          <img
                            src={nodeImg}
                            alt={step.title}
                            className="w-5 h-5 object-contain mb-0.5 filter drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
                          />
                          <span className="text-[8px] font-mono font-bold text-[var(--accent)] leading-none">
                            {step.number}
                          </span>
                          <span className="text-[9px] font-bold text-[var(--text-primary)] line-clamp-1 leading-tight max-w-[64px]">
                            {step.title}
                          </span>
                        </div>
                      ),
                    };
                  })
                }
              />
            </div>
          </div>
        </section>

        {/* ================= 7. TRANSPARENT PACKAGES & TIERS WITH BORDER BEAM ================= */}
        <section id="packages-section" className="py-20 sm:py-24 bg-[var(--surface-fill)] border-b border-[var(--border-line)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
              <span className="text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-wider">
                Transparent Engagement Models
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {data.packagesTitle || "Curated Packages & Implementation Tiers"}
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)]">
                Clear pricing, structured deliverables, and zero hidden maintenance surcharges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {data.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    pkg.popular
                      ? "bg-[var(--card-bg)] border-2 border-[var(--accent)] shadow-2xl -translate-y-2"
                      : "bg-[var(--card-bg)] border border-[var(--border-line)] hover:border-[var(--accent)]/40 shadow-xs"
                  }`}
                >
                  {pkg.popular && (
                    <>
                      <BorderBeam size={220} duration={8} colorFrom="var(--accent)" colorTo="var(--accent-from)" />
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md z-20">
                        Most Selected Tier
                      </div>
                    </>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-[var(--accent)] font-semibold uppercase">
                        {pkg.idealFor}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                        {pkg.name}
                      </h3>
                    </div>

                    <div className="pb-4 border-b border-[var(--border-line)] space-y-1">
                      <div className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--accent)]">
                        {pkg.price}
                      </div>
                      <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Timeline: ~{pkg.timeline}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                        Package Inclusions:
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                            <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[var(--border-line)] mt-8 space-y-3">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppClick(pkg.name)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] text-white shadow-md hover:opacity-95"
                          : "bg-[var(--surface-fill)] hover:bg-[var(--surface-fill-subtle)] text-[var(--text-primary)] border border-[var(--border-line)]"
                      }`}
                    >
                      <span>Choose {pkg.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPackage(pkg)}
                      className="w-full text-center text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] py-1 cursor-pointer font-medium"
                    >
                      View Detailed Breakdown &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= 8. DIRECT ENGINEERING INQUIRY MOTION FORM ================= */}
        <section id="inquiry-form-section" className="py-20 sm:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-line)] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <BorderBeam size={200} duration={14} colorFrom="var(--accent)" colorTo="var(--accent-from)" />

              <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
                <span className="text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-wider">
                  Direct Engineering Inquiry
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                  Discuss Your {data.title} Project
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  Fill in your project context below. We will analyze your requirements and provide an architectural proposal within 4 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-emerald-800 dark:text-emerald-300">
                    Inquiry Successfully Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto">
                    Thank you, {formData.name}. Our technical lead will review your requirements for {data.title} and connect with you at {formData.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", message: "", selectedPackage: data.packages[0]?.name || "" });
                    }}
                    className="text-xs font-semibold text-[var(--accent)] hover:underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sasi Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 74487 88879"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                        Target Package / Tier
                      </label>
                      <select
                        value={formData.selectedPackage}
                        onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
                      >
                        {data.packages.map((pkg) => (
                          <option key={pkg.id} value={pkg.name}>
                            {pkg.name} ({pkg.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                      Project Requirements &amp; Target Features
                    </label>
                    <textarea
                      rows={4}
                      placeholder={`Briefly outline what you need for your ${data.title} (e.g. key workflows, timeline, reference websites)...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Zero spam. Strict client confidentiality guaranteed.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Project Inquiry"}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </section>

        {/* ================= 9. FREQUENTLY ASKED QUESTIONS ================= */}
        <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-wider">
                Clear Answers
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] overflow-hidden transition-colors shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[var(--accent)]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-line)]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= 10. EXPLORE ALL SOFTWARE ENGINEERING DISCIPLINES ================= */}
        <ServicePageBottomSwitcher currentPath={location.pathname} />

        {/* ================= 11. BOTTOM CONVERSION CTA ANCHOR ================= */}
        <section className="py-20 bg-[var(--bg-primary)] transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] text-balance">
              Ready to Kick Off Your {data.title}?
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              Generate a custom interactive proposal with dynamic timeline and pricing estimates in under 2 minutes.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={`/proposal?type=${data.proposalType}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Build Proposal in Calculator</span>
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)] bg-[var(--card-bg)] border border-[var(--border-line)] hover:bg-[var(--surface-fill)] rounded-xl transition-colors shadow-xs"
              >
                <span>Browse All Services</span>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* ================= PACKAGE DETAILS MODAL ================= */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[var(--card-bg)] rounded-2xl border border-[var(--border-line)] p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-fill)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase">
                {selectedPackage.idealFor}
              </span>
              <h4 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                {selectedPackage.name}
              </h4>
              <div className="font-display text-3xl font-extrabold text-[var(--accent)] pt-1">
                {selectedPackage.price}
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Sprint Duration: ~{selectedPackage.timeline}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {selectedPackage.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-[var(--text-primary)]">
                Detailed Inclusions:
              </span>
              <ul className="space-y-2">
                {selectedPackage.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-primary)]">
                    <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-line)] flex gap-3">
              <button
                type="button"
                onClick={() => {
                  handleWhatsAppClick(selectedPackage.name);
                  setSelectedPackage(null);
                }}
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-all cursor-pointer"
              >
                Confirm via WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--surface-fill)] border border-[var(--border-line)] hover:bg-[var(--surface-fill-subtle)] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Architecture & Spec Zoom Modal */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-display font-bold text-sm text-white">
                  {data.title} — Production Spec &amp; Blueprint
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image viewer */}
            <div className="p-2 sm:p-4 overflow-auto flex items-center justify-center bg-slate-950">
              <img
                src={activePreviewImg}
                alt={`${data.title} Blueprint`}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
            </div>

            {/* Footer with actions */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                <span>Engineered by TechSasi · Salem, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleWhatsAppClick()}
                  className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 transition-opacity flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Discuss Requirements</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="px-3.5 py-2 rounded-lg font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ServicePageTemplate;
