import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { ServiceGridSkeleton } from "@/components/skeletons";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Server, 
  Cloud, 
  TrendingUp, 
  GraduationCap, 
  LifeBuoy, 
  Cpu
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: "web" | "mobile" | "enterprise" | "cloud" | "training";
  title: string;
  tagline: string;
  description: string;
  timeline: string;
  stack: string[];
  deliverables: string[];
  path: string;
}

const servicesCatalog: ServiceItem[] = [
  {
    id: "static-web",
    category: "web",
    title: "Static & Modern Marketing Websites",
    tagline: "High-speed portfolio, corporate, and landing pages with 98+ Core Web Vitals.",
    description: "Designed for businesses and startups that require lightning-fast loading speeds, clean responsive layouts, and technical SEO structure to convert incoming visitors into qualified leads.",
    timeline: "1–2 Weeks",
    stack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    deliverables: [
      "Mobile-first responsive architecture",
      "Technical SEO & OpenGraph card setup",
      "Interactive lead capture forms",
      "Google Analytics & Search Console integration",
      "SSL & domain configuration"
    ],
    path: "/services/static-web"
  },
  {
    id: "dynamic-web",
    category: "web",
    title: "Dynamic Web Applications & Portals",
    tagline: "Database-backed custom portals with real-time dashboards and authentication.",
    description: "Scalable web software with decoupled frontends and robust backends. Includes role-based authentication, user account portals, database management, and automated report generation.",
    timeline: "3–6 Weeks",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB"],
    deliverables: [
      "Role-based access control (Admin, Staff, Client)",
      "Dynamic CRUD management interfaces",
      "Secure JWT authentication & session handling",
      "Optimized database indexing & schema setup",
      "Automated PDF & Excel report exports"
    ],
    path: "/services/dynamic-web"
  },
  {
    id: "ecommerce",
    category: "enterprise",
    title: "Digital Commerce & Payment Platforms",
    tagline: "High-conversion online stores with zero-friction checkout and automated billing.",
    description: "Full-scale eCommerce engines built for peak sales loads. Integrated with Indian payment gateways (Razorpay, PhonePe, UPI) and international solutions (Stripe, PayPal) with real-time stock sync.",
    timeline: "3–5 Weeks",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Razorpay"],
    deliverables: [
      "Product catalog with smart multi-filtering",
      "Instant checkout flow with UPI & card payments",
      "Automated GST invoice generation",
      "WhatsApp & SMS order confirmation alerts",
      "Comprehensive inventory & order management panel"
    ],
    path: "/services/ecommerce"
  },
  {
    id: "mobile-apps",
    category: "mobile",
    title: "Mobile Application Development",
    tagline: "Cross-platform iOS and Android apps with 60fps smooth native performance.",
    description: "Built with Flutter and React Native to provide a unified experience across Android and iOS devices from a single codebase, drastically cutting time-to-market and maintenance costs.",
    timeline: "4–8 Weeks",
    stack: ["Flutter", "React Native", "Firebase", "REST APIs"],
    deliverables: [
      "Native device feature integration (Camera, GPS, Biometrics)",
      "Push notification systems (FCM)",
      "Offline data synchronization & caching",
      "App Store & Google Play Store release management",
      "Post-launch telemetry & crash monitoring"
    ],
    path: "/service/MobileApplication-Development"
  },
  {
    id: "enterprise-erp",
    category: "enterprise",
    title: "Custom ERP, CRM & Business Automation",
    tagline: "Tailored operations systems that eliminate manual spreadsheet chaos.",
    description: "Replace disconnected software with a unified operational backbone: purchase order management, supplier tracking, staff attendance, customer relationship pipelines, and accounting.",
    timeline: "4–10 Weeks",
    stack: ["React", "Python / Node", "PostgreSQL", "Docker"],
    deliverables: [
      "Custom workflow pipeline automation",
      "Multi-branch & inventory stock management",
      "Staff permission matrix & audit logging",
      "Automated billing, invoicing & GST reporting",
      "Secure daily cloud backup routines"
    ],
    path: "/services/business-web"
  },
  {
    id: "cloud-devops",
    category: "cloud",
    title: "Cloud Infrastructure & DevOps",
    tagline: "Resilient server deployment, containerization, and 99.9% uptime architecture.",
    description: "Migrating on-premise systems to cloud environments (AWS, Azure, DigitalOcean). We configure automated CI/CD deployment pipelines, load balancing, SSL, and server health monitoring.",
    timeline: "1–3 Weeks",
    stack: ["AWS", "Docker", "Linux Nginx", "Cloudflare"],
    deliverables: [
      "Containerized Docker container setup",
      "Automated GitHub Actions CI/CD pipelines",
      "Cloudflare CDN & DDoS defense caching",
      "SSL certificates & domain DNS routing",
      "Server resource & uptime monitoring"
    ],
    path: "/services/deployment-hosting"
  },
  {
    id: "seo-growth",
    category: "web",
    title: "Technical SEO & Performance Optimization",
    tagline: "Core Web Vitals acceleration, search indexing, and Generative Engine Optimization.",
    description: "Auditing and re-engineering web codebases to score 95+ in Google Lighthouse, achieve Google Core Web Vitals compliance, and structure JSON-LD schema for search and AI engine grounding.",
    timeline: "1–2 Weeks",
    stack: ["Schema.org", "Google Search Console", "Lighthouse", "Edge Caching"],
    deliverables: [
      "Core Web Vitals code audit & asset compression",
      "Structured JSON-LD schema implementation",
      "Sitemap XML & robots.txt search engine indexing",
      "Local SEO citations & business profile optimization",
      "Monthly search performance tracking"
    ],
    path: "/services/digital-marketing"
  },
  {
    id: "academy",
    category: "training",
    title: "TechSasi Developer Academy & Mentorship",
    tagline: "Production-focused coding coaching in React, Node, Python, and Java.",
    description: "Real-world engineering coaching for students and professionals. Students work on actual production codebases with pull requests, architecture design, and direct 1-on-1 placement mentoring.",
    timeline: "8–16 Weeks",
    stack: ["React", "TypeScript", "Node.js", "Java", "Python"],
    deliverables: [
      "1-on-1 code mentorship & doubt clearance",
      "Live pull requests & code review standards",
      "Production deployment to live staging servers",
      "Portfolio projects with verifiable GitHub history",
      "Interview prep & placement guidance"
    ],
    path: "/courses"
  }
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial load skeleton simulation (0.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (catId: string) => {
    if (catId === activeCategory) return;
    setIsLoading(true);
    setActiveCategory(catId);
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  };

  const filtered = activeCategory === "all"
    ? servicesCatalog
    : servicesCatalog.filter((s) => s.category === activeCategory);

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-slate-50 dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="pb-1">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", active: true },
                ]}
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
              <span>Capabilities Matrix</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">Full-Stack & Cloud Architecture</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
              Services Built to Accelerate Commercial Growth.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-2">
              Explore our full catalog of software engineering disciplines. Transparent scope definitions, realistic timelines, and production-tested architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Category Segmented Tabs with Navigate Animation */}
      <section className="py-6 bg-white/90 dark:bg-[#07090E]/90 border-b border-slate-200 dark:border-white/[0.06] sticky top-16 z-30 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "web", label: "WebApplication" },
              { id: "mobile", label: "MobileApps" },
              { id: "enterprise", label: "Enterprise & Commerce" },
              { id: "cloud", label: "DevOps & Cloud" },
              { id: "training", label: "Academy & Coaching" },
            ].map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`relative px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "text-slate-950 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceCategoryPill"
                      className="absolute inset-0 bg-amber-400 rounded-lg shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid with Skeleton Loader & Navigate Animation */}
      <section className="py-20 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <ServiceGridSkeleton count={4} />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filtered.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-8 flex flex-col justify-between transition-all duration-300 group shadow-sm dark:shadow-none"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06] text-xs font-mono">
                        <span className="text-amber-600 dark:text-amber-400 font-bold">0{idx + 1}.</span>
                        <span className="text-slate-500 dark:text-slate-400">Timeline: {service.timeline}</span>
                      </div>

                      <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {service.tagline}
                      </p>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-3 space-y-2">
                        <p className="text-xs font-mono text-slate-800 dark:text-slate-300 font-semibold">Included Deliverables:</p>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 flex flex-wrap gap-1.5">
                        {service.stack.map((item) => (
                          <span
                            key={item}
                            className="text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-slate-200 dark:border-white/[0.05]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6 flex items-center justify-between">
                      <Link
                        to="/proposal"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
                      >
                        <span>Request Proposal for This</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={service.path}
                        className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        Details &rarr;
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white dark:bg-[#05070D] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
            Have a Specific Architectural Need?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            We can architect hybrid bespoke solutions combining web, mobile, custom APIs, and AI integrations tailored precisely to your operational workflows.
          </p>
          <div className="pt-2">
            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow transition-transform hover:-translate-y-0.5"
            >
              <span>Build Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
