import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Smartphone, Server, Cloud, Check } from "lucide-react";

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Human Editorial Title Case */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
              <span>Core Capabilities</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">Full-Lifecycle Engineering</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight text-balance">
              Engineered for Speed, Scalability, and Market Impact.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              From corporate web presences to complex full-stack SaaS and internal workflow automation, our engineering delivers measurable commercial outcomes.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>View Full Service Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Web Application Engineering (col-span-2) */}
          <div className="md:col-span-2 rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">01. Web Application Engineering</span>
                <span className="text-xs font-mono text-slate-500">React · Next.js · Node.js</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                High-Frequency Web Applications & Modern Portals
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
                Custom web solutions engineered for maximum rendering speed and flawless responsiveness. We build single page applications, enterprise customer portals, and dynamic content-driven platforms with clean decoupled architectures.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Sub-second page loads</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Server-side rendering</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Decoupled REST/GraphQL</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-slate-100 dark:border-white/[0.06] mt-6">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Typical timeline: 1–2 weeks</span>
              <Link
                to="/services/static-web"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
              >
                <span>Explore Web Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Mobile App Development (col-span-1) */}
          <div className="rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">02. Mobile Engineering</span>
                <Smartphone className="w-4 h-4 text-slate-400" />
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                iOS & Android Native Apps
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Cross-platform mobile apps engineered with Flutter and React Native. Smooth 60fps animations, offline data sync, push notification systems, and App Store submission.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Single codebase efficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Biometric auth & local storage</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6">
              <Link
                to="/service/MobileApplication-Development"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
              >
                <span>Mobile Stack Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Enterprise ERP & CRM (col-span-1) */}
          <div className="rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">03. Business Software</span>
                <Server className="w-4 h-4 text-slate-400" />
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                Custom ERP, CRM & Billing Systems
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Custom operations software designed to automate internal workflows: inventory management, GST billing, multi-role staff access, and automated PDF invoice generation.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Role-based access security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Audit logging & reporting</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6">
              <Link
                to="/services/business-web"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
              >
                <span>Business Software Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Digital Commerce & Payment Infrastructure (col-span-2) */}
          <div className="md:col-span-2 rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">04. Commerce Architecture</span>
                <span className="text-xs font-mono text-slate-500">Stripe · Razorpay · Real-Time Stock</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                High-Conversion Digital Commerce Engines
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
                Frictionless shopping experiences tailored for Indian and international markets. Integrated with Razorpay, UPI, Stripe, automated WhatsApp notifications, and real-time inventory management.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Zero-lag checkout flow</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Automated GST invoices</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>WhatsApp order sync</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-slate-100 dark:border-white/[0.06] mt-6">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Conversion-optimized performance</span>
              <Link
                to="/services/ecommerce"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
              >
                <span>Review Commerce Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 5: Cloud Infrastructure & DevOps (col-span-1) */}
          <div className="rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">05. Cloud & DevOps</span>
                <Cloud className="w-4 h-4 text-slate-400" />
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                Cloud Deployment & Continuous Uptime
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                AWS, Azure, Docker, and Linux server management. Automated CI/CD deployments, SSL certification, domain management, and daily encrypted database backups.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6">
              <Link
                to="/services/deployment-hosting"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
              >
                <span>Infrastructure Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 6: Developer Academy & Practical Coaching (col-span-2) */}
          <div className="md:col-span-2 rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/40 p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-none">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">06. TechSasi Academy</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">1-on-1 Mentorship · Salem</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                Hands-On Full-Stack Developer Training
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
                Practical, live project coding for students, freshers, and career changers. Learn React, Node.js, Python, Java, and Cloud Deployment directly on real production codebases rather than theoretical slides.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Real GitHub PRs & code reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Resume & interview coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>Live staging server deploys</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-slate-100 dark:border-white/[0.06] mt-6">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Placement-focused curriculum</span>
              <Link
                to="/services/coaching"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
              >
                <span>View Coaching Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
