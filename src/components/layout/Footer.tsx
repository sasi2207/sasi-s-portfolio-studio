import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-fill)] text-[var(--text-muted)] border-t border-[var(--border-line)] relative overflow-hidden transition-colors duration-300">
      {/* Subtle Lumora atmospheric warmth */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent)]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-from)]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[var(--border-line)]">
          {/* Brand & Mission (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group focus-visible:outline-none hover:opacity-95 transition-opacity" aria-label="TechSasi Home">
              <BrandLogo align="left" size="sm" />
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              AI-ready website development, mobile application engineering, custom enterprise ERP/CRM platforms, and real-world technology training based in Salem, Tamil Nadu.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs font-mono text-[var(--text-subtle)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[var(--text-primary)] font-medium">Available for new client projects &amp; consultations</span>
              </div>
              <p className="text-[var(--text-subtle)]">ISO-grade software standards · High performance architecture</p>
            </div>
          </div>

          {/* Engineering Services (Col 3) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] font-mono">
              Engineering Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
              <li>
                <Link to="/services/static-web" className="hover:text-[var(--accent)] transition-colors">
                  Web Applications (React &amp; Next.js)
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app" className="hover:text-[var(--accent)] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="hover:text-[var(--accent)] transition-colors">
                  E-Commerce &amp; Payment Systems
                </Link>
              </li>
              <li>
                <Link to="/services/business-web" className="hover:text-[var(--accent)] transition-colors">
                  Custom ERP &amp; CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/deployment-hosting" className="hover:text-[var(--accent)] transition-colors">
                  Cloud Deployment &amp; DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-[var(--accent)] transition-colors">
                  SEO &amp; Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Company (Col 4) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] font-mono">
              Company &amp; Learning
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
              <li>
                <Link to="/about" className="hover:text-[var(--accent)] transition-colors">
                  About TechSasi
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[var(--accent)] transition-colors">
                  Case Studies &amp; Deployments
                </Link>
              </li>
              <li>
                <Link to="/proposal" className="hover:text-[var(--accent)] transition-colors">
                  Project Estimate Calculator
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[var(--accent)] transition-colors">
                  Careers &amp; Hiring
                </Link>
              </li>
              <li>
                <Link to="/services/coaching" className="hover:text-[var(--accent)] transition-colors">
                  Developer Training Tracks
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance-support" className="hover:text-[var(--accent)] transition-colors">
                  Support &amp; Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact (Col 5) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] font-mono">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-[var(--text-muted)]">
              <a
                href="tel:+917448788879"
                className="flex items-center gap-2.5 hover:text-[var(--accent)] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span className="font-mono text-xs tabular-nums font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">+91 7448788879</span>
              </a>

              <a
                href="https://wa.me/917448788897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-mono text-xs tabular-nums font-semibold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">+91 7448788897 (WhatsApp)</span>
              </a>

              <a
                href="mailto:info@techsasi.com"
                className="flex items-center gap-2.5 hover:text-[var(--accent)] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[var(--accent-from)] shrink-0" />
                <span className="text-xs font-mono text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">info@techsasi.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-[var(--text-subtle)] pt-1">
                <MapPin className="w-4 h-4 text-[var(--accent-to)] shrink-0 mt-0.5" />
                <span>Kolathur, Mettur, Salem, Tamil Nadu 636303, India</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/proposal"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-from)] transition-colors"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-subtle)]">
          <p>© {currentYear} TechSasi. All rights reserved. Built with precision in Tamil Nadu.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[var(--text-primary)] transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/contact" className="hover:text-[var(--text-primary)] transition-colors">
              Terms of Engagement
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/projects" className="hover:text-[var(--text-primary)] transition-colors">
              Client Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
