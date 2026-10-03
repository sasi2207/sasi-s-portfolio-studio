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
  ShieldCheck
} from "lucide-react";

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
    primaryLink: "/service/MobileApplication-Development",
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
    <section className="py-20 md:py-28 bg-white dark:bg-[#050811] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
            <span>Tailored Solutions</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 dark:text-slate-400">Salem Digital Studio</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight text-balance">
            What Can We Build For You Today?
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Select the solution that fits your current business stage. Every engagement includes transparent milestone quotes, dedicated developer communication, and complete source code ownership.
          </p>
        </div>

        {/* 4 User-Friendly Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl bg-slate-50 dark:bg-[#090E1B] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60 group relative overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

                <div className="space-y-5">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.accentColor} flex items-center justify-center border shadow-inner`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 block">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Tagline & Audience */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.tagline}
                  </p>

                  <div className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] text-xs text-slate-600 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-slate-300 font-semibold">Best for: </span>
                    {item.targetAudience}
                  </div>

                  {/* Checklist of Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Pricing & Dual Actions */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06] mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">
                      {item.deliveryTime}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
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
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap shadow-sm"
                    >
                      <span>{item.primaryLinkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Custom Scope Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-100 to-orange-500/10 dark:from-amber-500/10 dark:via-[#0B101D] dark:to-orange-500/10 border border-slate-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-lg sm:text-xl">
              Have a unique custom requirement or complex database?
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
              We engineer custom solutions for specialized businesses. Share your requirements and get a free architecture consultation with our lead technical architect within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all hover:-translate-y-0.5"
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
