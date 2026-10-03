import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#05070D] text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden transition-colors duration-200">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/[0.04] dark:bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/[0.04] dark:bg-amber-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-slate-200 dark:border-white/[0.08]">
          {/* Brand & Mission (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group focus-visible:outline-none hover:opacity-95 transition-opacity" aria-label="TechSasi Home">
              <BrandLogo align="left" size="sm" />
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              AI-ready website development, mobile application engineering, custom enterprise ERP/CRM platforms, and real-world technology training based in Salem, Tamil Nadu.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground font-medium">Available for new client projects & consultations</span>
              </div>
              <p className="text-slate-500 dark:text-slate-500">ISO-grade software standards · High performance architecture</p>
            </div>
          </div>

          {/* Engineering Services (Col 3) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">
              Engineering Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/services/static-web" className="hover:text-amber-500 transition-colors">
                  Web Applications (React & Next.js)
                </Link>
              </li>
              <li>
                <Link to="/service/MobileApplication-Development" className="hover:text-amber-500 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="hover:text-amber-500 transition-colors">
                  E-Commerce & Payment Systems
                </Link>
              </li>
              <li>
                <Link to="/services/business-web" className="hover:text-amber-500 transition-colors">
                  Custom ERP & CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/deployment-hosting" className="hover:text-amber-500 transition-colors">
                  Cloud Deployment & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-amber-500 transition-colors">
                  SEO & Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Company (Col 4) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">
              Company & Learning
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors">
                  About TechSasi
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-500 transition-colors">
                  Case Studies & Deployments
                </Link>
              </li>
              <li>
                <Link to="/proposal" className="hover:text-amber-500 transition-colors">
                  Project Estimate Calculator
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-amber-500 transition-colors">
                  Careers & Hiring
                </Link>
              </li>
              <li>
                <Link to="/services/coaching" className="hover:text-amber-500 transition-colors">
                  Developer Training Tracks
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance-support" className="hover:text-amber-500 transition-colors">
                  Support & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact (Col 5) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <a
                href="tel:+917448788879"
                className="flex items-center gap-2.5 hover:text-amber-500 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono text-xs tabular-nums font-semibold text-foreground group-hover:text-amber-500 transition-colors">+91 7448788879</span>
              </a>

              <a
                href="https://wa.me/917448788897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-mono text-xs tabular-nums font-semibold text-foreground group-hover:text-emerald-500 transition-colors">+91 7448788897 (WhatsApp)</span>
              </a>

              <a
                href="mailto:info@techsasi.com"
                className="flex items-center gap-2.5 hover:text-amber-500 transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-xs font-mono text-foreground group-hover:text-amber-500 transition-colors">info@techsasi.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Kolathur, Mettur, Salem, Tamil Nadu 636303, India</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/proposal"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} TechSasi. All rights reserved. Built with precision in Tamil Nadu.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Terms of Engagement
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/projects" className="hover:text-foreground transition-colors">
              Client Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
