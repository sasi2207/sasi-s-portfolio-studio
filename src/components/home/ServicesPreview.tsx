import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ServiceCardIcon, ServiceIconType } from "@/components/services/ServiceCardIcon";
import servicesData from "@/data/services.json";

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
  timeline: string;
  features: string[];
  techStack: string[];
}

export const ServicesPreview: React.FC = () => {
  const navigate = useNavigate();
  const services: ServiceItem[] = servicesData.services.slice(0, 6) as ServiceItem[];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Clean Human Editorial Styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
              <span className="font-semibold uppercase tracking-wider">Engineering Disciplines</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600 dark:text-slate-400">8 Core Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight text-balance">
              Restructured for Maximum Conversion & Rapid Execution.
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Every service is engineered with production-ready architectures, interactive UI/UX, and clear business outcomes.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>View All 8 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Featured Services Grid with Interactive Hover Effects & Generous Breathing Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/50 dark:hover:border-amber-500/40 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5 hover:-translate-y-1.5"
            >
              <div className="space-y-5">
                {/* Header Meta: Number and Category */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06] text-xs font-mono">
                  <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">
                    {service.serviceNumber}.
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    {service.timeline}
                  </span>
                </div>

                {/* Icon with smooth zoom on card hover */}
                <div className="pt-1">
                  <ServiceCardIcon
                    type={service.iconType}
                    className="shrink-0"
                  />
                </div>

                {/* Headlines with High-Contrast Typography */}
                <div className="space-y-1.5">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    {service.headline}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {service.title}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables Highlights */}
                <div className="space-y-1.5 pt-1 text-xs text-slate-700 dark:text-slate-300">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6 flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => navigate(`/proposal?type=${service.proposalType}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors cursor-pointer"
                >
                  <span>{service.actionableCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Prompt Footer Strip */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.1] transition-colors"
          >
            <span>Explore All 8 Services with Complete Deliverables & Specifications</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
