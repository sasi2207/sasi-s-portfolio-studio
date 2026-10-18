import React from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Layers, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  MessageCircle, 
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Workflow
} from "lucide-react";
import { CenterFlow } from "@/components/ui/center-flow";
import { PrismCarousel, PrismCarouselItem } from "@/components/ui/prism-carousel";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyText } from "@/components/ui/shiny-text";

interface SolutionItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  targetAudience: string;
  priceTag: string;
  deliveryTime: string;
  icon: React.ElementType;
  accentColor: string;
  features: string[];
  primaryLink: string;
  primaryLinkText: string;
  whatsappMessage: string;
}

const solutions: SolutionItem[] = [
  {
    id: "website",
    category: "Web Engineering",
    title: "Business & Company Websites",
    tagline: "High-speed modern websites designed to attract clients and convert visitors into paying inquiries.",
    targetAudience: "For retail shops, healthcare clinics, manufacturing firms, schools, and professional consultants.",
    priceTag: "Starting from ₹9,999",
    deliveryTime: "5–7 Days Delivery",
    icon: Globe,
    accentColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    features: [
      "Sub-second load time on all mobile devices",
      "Free SSL certificate, domain connection & cloud hosting",
      "1-Click WhatsApp chat button & lead inquiry form",
      "Full Google SEO setup & Google Business sync"
    ],
    primaryLink: "/services/static-web",
    primaryLinkText: "Explore Website Packages",
    whatsappMessage: "Hi TechSasi, I want to build a business website. Can you share details and a quote?"
  },
  {
    id: "mobile-app",
    category: "Mobile Mobility",
    title: "iOS & Android Mobile Applications",
    tagline: "Smooth, native-feeling mobile applications built for customer engagement and daily utility.",
    targetAudience: "For startups, delivery services, customer loyalty clubs, and appointment booking apps.",
    priceTag: "Milestone-Based Quotes",
    deliveryTime: "2–4 Weeks Launch",
    icon: Smartphone,
    accentColor: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    features: [
      "Single codebase for both Apple App Store and Google Play",
      "Instant push notifications & offline data caching",
      "Secure mobile OTP, Google, and password authentication",
      "Integrated payment gateways (UPI, Cards, NetBanking)"
    ],
    primaryLink: "/services/mobile-app",
    primaryLinkText: "Explore Mobile App Specs",
    whatsappMessage: "Hi TechSasi, I have an idea for an iOS/Android mobile app. Let's discuss."
  },
  {
    id: "custom-erp",
    category: "Enterprise Software",
    title: "GST Invoicing, Inventory & ERP",
    tagline: "Custom workflow automation software tailored exactly to your company's operational needs.",
    targetAudience: "For distributors, factories, agencies, and service companies outgrowing generic spreadsheets.",
    priceTag: "Modular Fixed Scope",
    deliveryTime: "Phase-by-Phase Rollout",
    icon: Layers,
    accentColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    features: [
      "Automated GST invoice generation with PDF downloads",
      "Live inventory, purchase orders & stock movement reports",
      "Multi-branch access with granular user roles",
      "Secure cloud database backups & audit trails"
    ],
    primaryLink: "/services/dynamic-web",
    primaryLinkText: "Explore Custom Software",
    whatsappMessage: "Hi TechSasi, I need custom billing/ERP software for my business operations."
  },
  {
    id: "coaching",
    category: "Skill Mentorship",
    title: "IT Coaching & Internship Training",
    tagline: "Learn modern full-stack engineering through hands-on code and real-world client project building.",
    targetAudience: "For college students, fresh graduates, and career changers looking for high-paying IT jobs.",
    priceTag: "Affordable Student Fees",
    deliveryTime: "Flexible Batches",
    icon: GraduationCap,
    accentColor: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    features: [
      "Master React, TypeScript, Node.js & Database architecture",
      "Build and deploy 3 real live projects to your portfolio",
      "Direct 1-on-1 code reviews with experienced senior engineers",
      "Verified course completion certificate and job referral support"
    ],
    primaryLink: "/services/coaching",
    primaryLinkText: "Explore Coaching Program",
    whatsappMessage: "Hi TechSasi, I want to learn more about your IT coaching and internship batches."
  }
];

export const SolutionFinder: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg-primary)] border-b border-[var(--border-line)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
            <span>Tailored Solutions</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--text-muted)]">Salem Digital Studio</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-tight text-balance">
            What Can We Build For You Today?
          </h2>

          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Select the solution that fits your current business stage. Every engagement includes transparent milestone quotes, dedicated developer communication, and complete source code ownership.
          </p>
        </div>

        {/* Interactive Center Flow: Salem Digital Engineering Hub */}
        <div className="mb-14 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-6 sm:p-8 relative overflow-hidden shadow-sm transition-colors">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-[var(--border-line)] gap-3">
            <div>
              <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider block">
                React Bits Pro · Center Flow Architecture
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                Centralized Studio Engine &amp; Service Delivery Channels
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
              <Workflow className="w-3.5 h-3.5" /> Live Signal Mesh
            </span>
          </div>

          <div className="h-[460px] w-full relative overflow-hidden flex items-center justify-center pt-2">
            <CenterFlow
              centerSize={125}
              nodeSize={68}
              pulseDuration={4.5}
              pulseInterval={5}
              pulseLength={0.42}
              nodeDistance={0.72}
              centerContent={
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <Cpu className="w-7 h-7 text-[var(--accent)] animate-pulse mb-1" />
                  <span className="text-[11px] font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    TECH SASI
                  </span>
                  <span className="text-[9px] font-mono text-[var(--accent)] font-semibold">
                    Studio Hub
                  </span>
                </div>
              }
              nodeItems={[
                {
                  id: "web",
                  content: (
                    <div className="flex flex-col items-center justify-center text-center p-1">
                      <Globe className="w-4 h-4 text-[var(--accent)] mb-0.5" />
                      <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Web Apps</span>
                    </div>
                  ),
                },
                {
                  id: "mobile",
                  content: (
                    <div className="flex flex-col items-center justify-center text-center p-1">
                      <Smartphone className="w-4 h-4 text-[var(--accent)] mb-0.5" />
                      <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Mobile Apps</span>
                    </div>
                  ),
                },
                {
                  id: "erp",
                  content: (
                    <div className="flex flex-col items-center justify-center text-center p-1">
                      <Layers className="w-4 h-4 text-[var(--accent)] mb-0.5" />
                      <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">ERP / CRM</span>
                    </div>
                  ),
                },
                {
                  id: "cloud",
                  content: (
                    <div className="flex flex-col items-center justify-center text-center p-1">
                      <Zap className="w-4 h-4 text-[var(--accent)] mb-0.5" />
                      <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Edge Cloud</span>
                    </div>
                  ),
                },
                {
                  id: "academy",
                  content: (
                    <div className="flex flex-col items-center justify-center text-center p-1">
                      <GraduationCap className="w-4 h-4 text-[var(--accent)] mb-0.5" />
                      <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">IT Academy</span>
                    </div>
                  ),
                },
                {
                  id: "security",
                  content: (
                    <div className="flex flex-col items-center justify-center text-center p-1">
                      <ShieldCheck className="w-4 h-4 text-[var(--accent)] mb-0.5" />
                      <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Cyber SLA</span>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>

        {/* =========================================================================
            PRISM CAROUSEL (React Bits Pro): Chromatic Color Sweep Coverflow
            ========================================================================= */}
        <div className="mb-14 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-4 sm:p-8 relative overflow-hidden shadow-sm transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[var(--border-line)] gap-3 mb-4">
            <div>
              <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider block">
                Interactive Showcase · React Bits Pro
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                Prism Coverflow · Solutions in Motion
              </h3>
            </div>
            <p className="text-xs font-mono text-[var(--text-muted)] max-w-xs text-right hidden md:block">
              Drag, swipe, or use controls to sweep vivid spectrum color across each architectural package.
            </p>
          </div>

          <PrismCarousel
            items={[
              {
                id: "website",
                src: "/images/services/business-web-preview.png",
                alt: "Business & Company Websites",
                title: "Business & Company Websites",
                subtitle: "High-speed modern websites designed to attract clients and convert visitors into paying inquiries.",
                tagline: "High-speed modern websites designed to attract clients and convert visitors into paying inquiries.",
                category: "Web Engineering",
                targetAudience: "For retail shops, healthcare clinics, manufacturing firms, schools, and professional consultants.",
                priceTag: "Starting from ₹9,999",
                deliveryTime: "5–7 Days Delivery",
                features: [
                  "Sub-second load time on all mobile devices",
                  "Free SSL certificate, domain connection & cloud hosting",
                  "1-Click WhatsApp chat button & lead inquiry form",
                  "Full Google SEO setup & Google Business sync"
                ],
                primaryLink: "/services/static-web",
                primaryLinkText: "Explore Website Packages",
                whatsappMessage: "Hi TechSasi, I want to build a business website. Can you share details and a quote?"
              },
              {
                id: "mobile-app",
                src: "/images/services/mobile-app-preview.png",
                alt: "iOS & Android Mobile Applications",
                title: "iOS & Android Mobile Applications",
                subtitle: "Smooth, native-feeling mobile applications built for customer engagement and daily utility.",
                tagline: "Smooth, native-feeling mobile applications built for customer engagement and daily utility.",
                category: "Mobile Mobility",
                targetAudience: "For startups, delivery services, customer loyalty clubs, and appointment booking apps.",
                priceTag: "Milestone-Based Quotes",
                deliveryTime: "2–4 Weeks Launch",
                features: [
                  "Single codebase for both Apple App Store and Google Play",
                  "Instant push notifications & offline data caching",
                  "Secure mobile OTP, Google, and password authentication",
                  "Integrated payment gateways (UPI, Cards, NetBanking)"
                ],
                primaryLink: "/services/mobile-app",
                primaryLinkText: "Explore Mobile App Specs",
                whatsappMessage: "Hi TechSasi, I have an idea for an iOS/Android mobile app. Let's discuss."
              },
              {
                id: "custom-erp",
                src: "/images/services/dynamic-web-preview.png",
                alt: "GST Invoicing, Inventory & ERP",
                title: "GST Invoicing, Inventory & ERP",
                subtitle: "Custom workflow automation software tailored exactly to your company's operational needs.",
                tagline: "Custom workflow automation software tailored exactly to your company's operational needs.",
                category: "Enterprise Software",
                targetAudience: "For distributors, factories, agencies, and service companies outgrowing generic spreadsheets.",
                priceTag: "Modular Fixed Scope",
                deliveryTime: "Phase-by-Phase Rollout",
                features: [
                  "Automated GST invoice generation with PDF downloads",
                  "Live inventory, purchase orders & stock movement reports",
                  "Multi-branch access with granular user roles",
                  "Secure cloud database backups & audit trails"
                ],
                primaryLink: "/services/dynamic-web",
                primaryLinkText: "Explore Custom Software",
                whatsappMessage: "Hi TechSasi, I need custom billing/ERP software for my business operations."
              },
              {
                id: "coaching",
                src: "/images/services/coaching-preview.png",
                alt: "IT Coaching & Internship Training",
                title: "IT Coaching & Internship Training",
                subtitle: "Learn modern full-stack engineering through hands-on code and real-world client project building.",
                tagline: "Learn modern full-stack engineering through hands-on code and real-world client project building.",
                category: "Skill Mentorship",
                targetAudience: "For college students, fresh graduates, and career changers looking for high-paying IT jobs.",
                priceTag: "Affordable Student Fees",
                deliveryTime: "Flexible Batches",
                features: [
                  "Master React, TypeScript, Node.js & Database architecture",
                  "Build and deploy 3 real live projects to your portfolio",
                  "Direct 1-on-1 code reviews with experienced senior engineers",
                  "Verified course completion certificate and job referral support"
                ],
                primaryLink: "/services/coaching",
                primaryLinkText: "Explore Coaching Program",
                whatsappMessage: "Hi TechSasi, I want to learn more about your IT coaching and internship batches."
              }
            ]}
            sweepDuration={1.1}
            sweep={1}
            dispersion={1}
            autoplay={true}
            interval={5}
            draggable={true}
            pauseOnHover={true}
            captions={true}
            controls={true}
          />
        </div>

        {/* 4 User-Friendly Cards Grid (Side-by-Side Detailed Breakdown) */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
            Detailed Service Packages &amp; Deliverables
          </h3>
          <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
            All 4 Pillars
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={item.id}
                spotlightColor="rgba(207, 128, 71, 0.18)"
                borderColor="rgba(207, 128, 71, 0.45)"
                enableTilt={true}
                tiltMaxAngle={6}
                className="p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center shadow-xs text-[var(--accent)] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-[var(--accent)] block">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Tagline & Audience */}
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {item.tagline}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[var(--surface-fill)] border border-[var(--border-line)] text-xs text-[var(--text-muted)]">
                    <span className="text-[var(--text-primary)] font-semibold">Best for: </span>
                    {item.targetAudience}
                  </div>

                  {/* Checklist of Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="leading-snug text-[var(--text-muted)]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Pricing & Dual Actions */}
                <div className="pt-6 border-t border-[var(--border-line)] mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-[var(--text-subtle)] block">
                      {item.deliveryTime}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      {item.priceTag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/917448788897?text=${encodeURIComponent(item.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-emerald-300 dark:border-emerald-500/30 hover:border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
                      title="Quick Inquiry on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <Link
                      to={item.primaryLink}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-from)] transition-colors whitespace-nowrap shadow-xs"
                    >
                      <span>{item.primaryLinkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Quick Custom Scope Banner */}
        <div className="mt-12 rounded-2xl bg-[var(--surface-fill)] border border-[var(--border-line)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-[var(--text-primary)] text-lg sm:text-xl">
              Have a unique custom requirement or complex database?
            </h4>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm max-w-2xl">
              We engineer custom solutions for specialized businesses. Share your requirements and get a free architecture consultation with our lead technical architect within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>Build Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionFinder;
