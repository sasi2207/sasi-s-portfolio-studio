import React, { useState } from "react";
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
} from "lucide-react";

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
  "custom-erp": "/images/services/business-web-preview.png",
  "business-web": "/images/services/business-web-preview.png",
  "cloud-devops": "/images/services/deployment-hosting-preview.png",
  "deployment-hosting": "/images/services/deployment-hosting-preview.png",
  "digital-marketing": "/images/services/digital-marketing-preview.png",
  "academy": "/images/services/coaching-preview.png",
  "coaching": "/images/services/coaching-preview.png",
  "academy-mentorship": "/images/services/coaching-preview.png",
};

export const ServicePageTemplate: React.FC<{ data: ServicePageData }> = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const activePreviewImg =
    data.previewImage ||
    defaultPreviewImageMap[data.serviceId] ||
    defaultPreviewImageMap[data.proposalType] ||
    "/images/services/static-web-preview.png";

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

  const handleWhatsAppClick = (packageName?: string) => {
    const text = packageName
      ? encodeURIComponent(
          `Hello TechSasi, I am interested in the "${packageName}" plan for ${data.title}. Let's discuss requirements.`
        )
      : defaultWhatsappMsg;
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
      // Also log proposal or lead in localStorage for consistency
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
    }, 600);
  };

  return (
    <PageLayout>
      <div className="bg-[#F8FAFC] dark:bg-[#06090F] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 border-b border-slate-200 dark:border-white/[0.08] relative overflow-hidden">
          {/* Subtle Accent Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              {/* Top Service Page Navigator & Dropdown Selector */}
              <div className="pb-2">
                <ServicePageNavigator
                  currentPath={location.pathname}
                  currentTitle={data.title}
                />
              </div>

              {/* Service Meta Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
                <span className="font-bold">Service {data.serviceNumber}</span>
                <span aria-hidden="true">·</span>
                <span>{data.badgeText}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-700 dark:text-slate-300">Est. {data.timeline}</span>
              </div>

              {/* Icon & Display Headline */}
              <div className="flex flex-col items-center gap-4">
                <ServiceCardIcon
                  type={data.iconType}
                  imageSrc={data.iconPng}
                  className="shadow-xl"
                />
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
                  {data.headline}
                </h1>
              </div>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {data.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={`/proposal?type=${data.proposalType}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Get Instant Scope Estimate</span>
                </Link>

                <button
                  type="button"
                  onClick={() => handleWhatsAppClick()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] hover:bg-slate-100 dark:hover:bg-white/[0.1] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* ================= HERO SHOWCASE PREVIEW (PNG IMAGE & INTERACTIVE BADGES) ================= */}
              <div className="pt-10 sm:pt-14 max-w-5xl mx-auto">
                <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-slate-200/80 via-slate-100/50 to-slate-200/80 dark:from-white/10 dark:via-white/[0.04] dark:to-white/10 border border-slate-300 dark:border-white/15 shadow-2xl overflow-hidden group">
                  {/* Subtle ambient lighting */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-blue-500/10 opacity-70 pointer-events-none" />

                  {/* Window Chrome Header Bar */}
                  <div className="relative px-3 sm:px-4 py-2.5 bg-slate-900/90 dark:bg-slate-950/90 rounded-t-xl sm:rounded-t-2xl flex items-center justify-between text-xs text-slate-300 border-b border-slate-700/60">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400 pl-2">
                        https://techsasi.com/services/{data.serviceId}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Production Blueprint
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsZoomOpen(true)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
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
                    className="relative rounded-b-xl sm:rounded-b-2xl overflow-hidden cursor-zoom-in bg-slate-950 aspect-[16/9]"
                  >
                    <img
                      src={activePreviewImg}
                      alt={`${data.title} Architecture & Production Preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover sm:object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Floating Interactive Glass Chips on the image */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-none">
                      <div className="px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold flex items-center gap-2 shadow-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                        <span>Verified Commercial Grade</span>
                      </div>
                      <div className="hidden sm:flex px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-slate-300 text-[11px] sm:text-xs font-mono items-center gap-1.5 shadow-lg">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Full Source Code Handover</span>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 2. KPI / VALUE PROOF STRIP ================= */}
        <section className="py-10 bg-white dark:bg-[#0B101D] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. ARCHITECTURAL CAPABILITIES (BENTO GRID) ================= */}
        <section className="py-20 sm:py-24 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-14 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
                <span>Engineering Capabilities</span>
                <span aria-hidden="true">·</span>
                <span>Production Architecture</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {data.capabilitiesTitle || "What We Build & Deliver"}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {data.capabilitiesSubtitle ||
                  "Engineered with clean separation of concerns, high-velocity performance, and zero technical debt."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.capabilities.map((cap, idx) => {
                const IconComponent = cap.icon;
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/50 dark:hover:border-amber-500/40 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {cap.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    {cap.badge && (
                      <div className="pt-4 border-t border-slate-100 dark:border-white/[0.05] mt-4">
                        <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
                          {cap.badge}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= 4. DELIVERABLES & PRODUCTION TECH STACK ================= */}
        <section className="py-20 bg-white dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Deliverables Column */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                    Full Project Inclusions
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    Deliverables Included in Every Engagement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Transparent handover standards. We ensure zero surprise costs and complete technical readiness.
                  </p>
                </div>

                <ul className="space-y-3">
                  {data.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.06] flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Process Column */}
              <div className="space-y-8">
                {/* Tech Stack Box */}
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Production Technology Stack</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    Modern, Enterprise-Grade Frameworks
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Every codebase is engineered with industry-standard frameworks, automated type checking, and modern cloud deployment configurations.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {data.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/[0.06] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4-Step Agile Delivery Workflow */}
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] space-y-6">
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                    Deployment Roadmap
                  </span>
                  <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    How We Execute & Launch
                  </h4>

                  <div className="space-y-4">
                    {data.processSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {step.number}
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-sm font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {step.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= 5. TRANSPARENT PACKAGES & TIERS ================= */}
        <section id="packages-section" className="py-20 sm:py-24 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                Transparent Engagement Models
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {data.packagesTitle || "Curated Packages & Implementation Tiers"}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Clear pricing, structured deliverables, and zero hidden maintenance surcharges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {data.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    pkg.popular
                      ? "bg-white dark:bg-[#0C1222] border-2 border-amber-500 shadow-2xl shadow-amber-500/10 -translate-y-2"
                      : "bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 shadow-sm"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      Most Selected Tier
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">
                        {pkg.idealFor}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                        {pkg.name}
                      </h3>
                    </div>

                    <div className="pb-4 border-b border-slate-100 dark:border-white/[0.06] space-y-1">
                      <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400">
                        {pkg.price}
                      </div>
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Timeline: ~{pkg.timeline}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                        Package Inclusions:
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                            <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 dark:border-white/[0.06] mt-8 space-y-3">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppClick(pkg.name)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-md shadow-amber-500/20"
                          : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/10 dark:hover:bg-white/15 dark:text-white"
                      }`}
                    >
                      <span>Choose {pkg.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPackage(pkg)}
                      className="w-full text-center text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white py-1 cursor-pointer font-medium"
                    >
                      View Detailed Breakdown &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= 6. DIRECT INQUIRY & CONTACT FORM ================= */}
        <section id="inquiry-form-section" className="py-20 sm:py-24 bg-white dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] p-8 sm:p-12 shadow-xl">
              
              <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                  Direct Engineering Inquiry
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Discuss Your {data.title} Project
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
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
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Our technical lead will review your requirements for {data.title} and connect with you at {formData.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", message: "", selectedPackage: data.packages[0]?.name || "" });
                    }}
                    className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sasi Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 74487 88879"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                        Target Package / Tier
                      </label>
                      <select
                        value={formData.selectedPackage}
                        onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
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
                    <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                      Project Requirements & Target Features
                    </label>
                    <textarea
                      rows={4}
                      placeholder={`Briefly outline what you need for your ${data.title} (e.g. key workflows, timeline, reference websites)...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Zero spam. Strict client privacy guaranteed.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer disabled:opacity-50"
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

        {/* ================= 7. FREQUENTLY ASKED QUESTIONS ================= */}
        <section className="py-20 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                Clear Answers
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-amber-500" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/[0.04]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= 8. EXPLORE OTHER 7 SERVICE PAGES ================= */}
        <ServicePageBottomSwitcher currentPath={location.pathname} />

        {/* ================= 9. BOTTOM CONVERSION CTA ANCHOR ================= */}
        <section className="py-20 bg-white dark:bg-[#06090F] transition-colors duration-200">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white text-balance">
              Ready to Kick Off Your {data.title}?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Generate a custom interactive proposal with dynamic timeline and pricing estimates in under 2 minutes.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={`/proposal?type=${data.proposalType}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-300 hover:to-orange-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Build Proposal in Calculator</span>
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.1] rounded-xl transition-colors"
              >
                <span>Browse All 8 Services</span>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* ================= PACKAGE DETAILS MODAL ================= */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#0C111E] rounded-2xl border border-slate-200 dark:border-white/[0.1] p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">
                {selectedPackage.idealFor}
              </span>
              <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                {selectedPackage.name}
              </h4>
              <div className="font-display text-3xl font-extrabold text-amber-600 dark:text-amber-400 pt-1">
                {selectedPackage.price}
              </div>
              <div className="text-xs font-mono text-slate-500 flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Sprint Duration: ~{selectedPackage.timeline}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {selectedPackage.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-slate-200">
                Detailed Inclusions:
              </span>
              <ul className="space-y-2">
                {selectedPackage.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex gap-3">
              <button
                type="button"
                onClick={() => {
                  handleWhatsAppClick(selectedPackage.name);
                  setSelectedPackage(null);
                }}
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all cursor-pointer"
              >
                Confirm via WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors cursor-pointer"
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
                  {data.title} — Production Spec & Blueprint
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
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Engineered by TechSasi · Salem, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleWhatsAppClick()}
                  className="px-4 py-2 rounded-lg font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-800" />
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
