import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import projectsData from "@/data/projects.json";

export interface BreadcrumbNavItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbNavProps {
  /** Optional custom items. If omitted, items will be dynamically inferred from the current URL path. */
  items?: BreadcrumbNavItem[];
  /** Optional extra classes on the container */
  className?: string;
  /** Whether to show the Home icon alongside or instead of text */
  showHomeIcon?: boolean;
}

// Dictionary to map URL slugs to polished, human-friendly titles
const ROUTE_LABELS: Record<string, string> = {
  services: "Services",
  "static-web": "Static Website Development",
  "dynamic-web": "Dynamic Web Development",
  "business-web": "Business Web Development",
  ecommerce: "E-Commerce Development",
  "deployment-hosting": "Deployment & Cloud Hosting",
  "digital-marketing": "Digital Marketing & SEO",
  coaching: "Computer Coaching & Mentorship",
  MaintenanceSupport: "Maintenance & Support",
  "maintenancesupport": "Maintenance & Support",
  "MobileApplication-Development": "Mobile App Development",
  "mobileapplication-development": "Mobile App Development",
  "servicesapp-development": "Mobile App Development",
  projects: "Projects",
  careers: "Careers",
  apply: "Job Application",
  blog: "Blog & Insights",
  proposal: "Proposal",
  about: "About Us",
  contact: "Contact",
  offers: "Special Offers",
};

/**
 * BreadcrumbNav component tracks user path and provides hierarchical breadcrumb navigation.
 * Automatically resolves known service slugs and dynamic project slugs from projects data.
 */
export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
  items: customItems,
  className = "",
  showHomeIcon = true,
}) => {
  const location = useLocation();

  const breadcrumbs = useMemo<BreadcrumbNavItem[]>(() => {
    if (customItems && customItems.length > 0) {
      return customItems;
    }

    const segments = location.pathname.split("/").filter(Boolean);
    const list: BreadcrumbNavItem[] = [{ label: "Home", href: "/" }];

    let accumulatedPath = "";

    segments.forEach((seg, index) => {
      accumulatedPath += `/${seg}`;
      const isLast = index === segments.length - 1;

      // 1. Check if segment is in known route dictionary
      let label = ROUTE_LABELS[seg] || ROUTE_LABELS[seg.toLowerCase()];

      // 2. If inside /projects/:id, resolve actual project title from projects.json
      if (!label && (segments[index - 1] === "projects" || segments.includes("projects"))) {
        const foundProject = projectsData.projects.find(
          (p) => p.id === seg || p.id.toLowerCase() === seg.toLowerCase()
        );
        if (foundProject) {
          label = foundProject.title;
        }
      }

      // 3. Fallback: Format kebab-case or camelCase into capitalized words
      if (!label) {
        label = seg
          .replace(/[-_]/g, " ")
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .split(" ")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(" ");
      }

      list.push({
        label,
        href: isLast ? undefined : accumulatedPath,
        active: isLast,
      });
    });

    return list;
  }, [location.pathname, customItems]);

  // Construct Schema.org BreadcrumbList for rich search result snippets
  const schemaData = useMemo(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://techsasi.com";
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: item.href ? `${origin}${item.href}` : `${origin}${location.pathname}`,
      })),
    };
  }, [breadcrumbs, location.pathname]);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center text-xs font-mono tracking-wide ${className}`}
    >
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-sm">
        {breadcrumbs.map((crumb, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === breadcrumbs.length - 1;

          return (
            <li key={`${crumb.label}-${idx}`} className="inline-flex items-center gap-1.5 sm:gap-2">
              {!isFirst && (
                <ChevronRight
                  className="w-3 h-3 text-slate-500 shrink-0 select-none"
                  aria-hidden="true"
                />
              )}

              {crumb.href && !isLast ? (
                <Link
                  to={crumb.href}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400/50 rounded"
                >
                  {isFirst && showHomeIcon && (
                    <Home className="w-3.5 h-3.5 text-amber-400/80 shrink-0" aria-hidden="true" />
                  )}
                  <span className="truncate max-w-[120px] sm:max-w-none">{crumb.label}</span>
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="inline-flex items-center gap-1.5 text-amber-400 font-semibold py-0.5"
                >
                  {isFirst && showHomeIcon && (
                    <Home className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                  )}
                  <span className="truncate max-w-[180px] sm:max-w-[280px] md:max-w-none">
                    {crumb.label}
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;
