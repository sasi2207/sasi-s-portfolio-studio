import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  ArrowRight,
  Code2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  ServiceDropdownSelector,
  ALL_8_SERVICE_PAGES,
  ServicePageOption,
} from "./ServiceDropdownSelector";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";

interface ServicePageNavigatorProps {
  currentPath: string;
  currentTitle: string;
  className?: string;
}

export const ServicePageNavigator: React.FC<ServicePageNavigatorProps> = ({
  currentPath,
  currentTitle,
  className = "",
}) => {
  const navigate = useNavigate();

  // Find index of current service
  const currentIndex = ALL_8_SERVICE_PAGES.findIndex(
    (s) =>
      s.path === currentPath ||
      (s.path === "/services/mobile-app" && currentPath.includes("mobile"))
  );

  const prevService =
    currentIndex > 0
      ? ALL_8_SERVICE_PAGES[currentIndex - 1]
      : ALL_8_SERVICE_PAGES[ALL_8_SERVICE_PAGES.length - 1];

  const nextService =
    currentIndex < ALL_8_SERVICE_PAGES.length - 1
      ? ALL_8_SERVICE_PAGES[currentIndex + 1]
      : ALL_8_SERVICE_PAGES[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Top Bar: Breadcrumb + Dropdown Switcher + Prev/Next Controls */}
      <div className="bg-white/80 dark:bg-[#070B14]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Breadcrumbs */}
        <div className="flex items-center min-w-0 w-full md:w-auto">
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
              { label: currentTitle, active: true },
            ]}
          />
        </div>

        {/* Center/Right: Dropdown List & Prev/Next Quick Navigation */}
        <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
          {/* Dropdown List showcasing all 8 service pages */}
          <div className="flex items-center gap-2">
            <span className="hidden lg:inline text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              Switch Page:
            </span>
            <ServiceDropdownSelector
              currentPath={currentPath}
              variant="button"
              align="right"
              label="Select Service Page"
              showFileName={true}
            />
          </div>

          {/* Quick Prev / Next Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            {prevService && (
              <button
                type="button"
                onClick={() => navigate(prevService.path)}
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer"
                title={`Go to ${prevService.title} (${prevService.fileName})`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px] font-mono">{prevService.number}</span>
              </button>
            )}

            {nextService && (
              <button
                type="button"
                onClick={() => navigate(nextService.path)}
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer"
                title={`Go to ${nextService.title} (${nextService.fileName})`}
              >
                <span className="hidden sm:inline text-[11px] font-mono">{nextService.number}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export const ServicePageBottomSwitcher: React.FC<{
  currentPath: string;
}> = ({ currentPath }) => {
  const otherPages = ALL_8_SERVICE_PAGES.filter(
    (p) =>
      p.path !== currentPath &&
      !(p.path === "/services/mobile-app" && currentPath.includes("mobile"))
  );

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-[#060A12] border-t border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>All 8 Software Engineering Disciplines</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Explore Our Other Service Pages
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Quickly jump between our 8 production service pages using the interactive dropdown or direct links below.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ServiceDropdownSelector
              currentPath={currentPath}
              variant="pill"
              align="right"
              label="Select Service Page (8 Pages)"
              showFileName={true}
            />
          </div>
        </div>

        {/* Grid of other service pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {otherPages.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group p-5 rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/50 dark:hover:border-amber-500/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.06] px-2 py-0.5 rounded border border-slate-200 dark:border-white/[0.04] truncate max-w-[140px]">
                    {service.fileName}
                  </span>
                </div>

                <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {service.headline}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-medium text-amber-600 dark:text-amber-400">
                <span>View Full Spec</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
