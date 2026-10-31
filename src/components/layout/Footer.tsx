"use client";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  MessageSquareCode, 
  ChevronRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer className="relative bg-[#131b2e]  text-slate-300 border-t border-slate-800/80 overflow-hidden font-sans">
      {/* Background Subtle Electric Cyan Mesh & Ambient Deep Navy Illumination */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 left-1/4 w-[600px] h-[380px] bg-gradient-to-t from-cyan-500/10 via-blue-600/10 to-transparent blur-[150px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 right-10 w-[500px] h-[320px] bg-sky-500/8 blur-[140px] rounded-full" 
      />

      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-12 z-10">
        
        {/* Top Pre-Footer Quick Action Callout */}
        <div 
          data-aos="fade-up"
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-blue-950/70 border border-cyan-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_-10px_rgba(6,182,212,0.15)]"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Direct Engineering Access</span>
              <span className="text-cyan-600">/</span>
              <span className="text-slate-400">Rapid Response Protocol</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Have a project specification or architecture question?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Talk directly with our lead developer on WhatsApp for instantaneous milestone scoping and quotes.
            </p>
          </div>

          <a
            href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20have%20an%20engineering%20inquiry%20regarding%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_8px_25px_rgba(6,182,212,0.35)] hover:shadow-[0_12px_32px_rgba(6,182,212,0.5)] transition-all whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <MessageSquareCode className="w-4 h-4 text-slate-950" />
            <span>Sync on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* 5-Column Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-slate-800" data-aos="fade-up" data-aos-delay="100">
          
          {/* Brand & Identity (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group focus-visible:outline-none" aria-label="TechSasi Home">
              <BrandLogo  align="left" size="sm" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              High-performance web applications, cross-platform mobile apps, cloud architectures, and custom enterprise software engineered in Salem, Tamil Nadu.
            </p>

            {/* Live Operational Status Capsule */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 max-w-sm shadow-inner">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-slate-200 font-semibold">Available for Q4 Client Deployments</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>100% Code Ownership · 30-Day Free Tech Warranty</span>
              </div>
            </div>
          </div>

          {/* Engineering Services (Col 3) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Engineering</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { title: "GST Billing Software (1 Mo Free)", path: "/services/billing" },
                { title: "Web Apps (React & Next.js)", path: "/services/static-web" },
                { title: "Mobile App Development", path: "/services/mobile-app" },
                { title: "E-Commerce & Payments", path: "/services/ecommerce" },
                { title: "Custom ERP & CRM Systems", path: "/services/business-web" },
                { title: "Cloud Deployment & DevOps", path: "/services/deployment-hosting" },
              ].map((item) => (
                <li key={item.title}>
                  <Link 
                    to={item.path} 
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Company (Col 4) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { title: "About TechSasi", path: "/about" },
                { title: "Deployments & Portfolio", path: "/projects" },
                { title: "Project Cost Calculator", path: "/proposal" },
                { title: "Careers & Internships", path: "/careers" },
                { title: "Developer Training Tracks", path: "/services/coaching" },
                { title: "Support & SLA Plans", path: "/services/maintenance-support" }
              ].map((item) => (
                <li key={item.title}>
                  <Link 
                    to={item.path} 
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Coordinates & HQ (Col 5) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Coordinates</span>
            </h4>
            
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href="tel:+917448788879"
                className="group flex items-center gap-3 p-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all shadow-xs"
              >
                <div className="p-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors tabular-nums font-semibold">
                  +91 7448788879
                </span>
              </a>

              <a
                href="https://wa.me/917448788897"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all shadow-xs"
              >
                <div className="p-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                  <MessageSquareCode className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors tabular-nums font-semibold">
                  +91 7448788897 (WA)
                </span>
              </a>

              <a
                href="mailto:info@techsasi.com"
                className="group flex items-center gap-3 p-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all shadow-xs"
              >
                <div className="p-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  info@techsasi.com
                </span>
              </a>

              <div className="flex items-start gap-2.5 p-2 text-slate-400 text-[11px] leading-relaxed">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Kolathur, Mettur, Salem, Tamil Nadu 636303, India</span>
              </div>
            </div>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-1"
            >
              <span>Instant Proposal Estimator</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Legal & System Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} TechSasi. Built with precision in Tamil Nadu.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("techsasi:replay-loader"))}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer py-1 px-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 hover:border-cyan-500/60"
              title="Experience the TechSasi Loading Screen animation again"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Replay Intro Animation</span>
            </button>
            <span className="text-slate-700 hidden sm:inline" aria-hidden="true">/</span>
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700" aria-hidden="true">/</span>
            <Link to="/terms-service" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-700" aria-hidden="true">/</span>
            <Link to="/projects" className="hover:text-cyan-400 transition-colors">
              Deployments
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;