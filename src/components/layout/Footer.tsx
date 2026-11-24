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
  Sparkles,
} from "lucide-react";

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
    <footer className="relative bg-[#001B66] text-[#EAF5FF] border-t border-[#0033CC]/60 overflow-hidden font-sans">
      {/* Background Subtle Neon Cyan Mesh & Ambient Deep Navy Illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 w-[600px] h-[380px] bg-gradient-to-t from-[#0061FF]/20 via-[#00E5FF]/10 to-transparent blur-[150px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-10 w-[500px] h-[320px] bg-[#0033CC]/20 blur-[140px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-12 z-10">
        {/* Top Pre-Footer Quick Action Callout */}
        <div
          data-aos="fade-up"
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#00144D] via-[#001B66] to-[#00144D] border border-[#0061FF]/40 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_-10px_rgba(0,97,255,0.25)]"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#00E5FF] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>Direct Engineering Access</span>
              <span className="text-[#0033CC]">/</span>
              <span className="text-[#EAF5FF]/70">Rapid Response Protocol</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Have a project specification or architecture question?
            </h3>
            <p className="text-xs sm:text-sm text-[#EAF5FF]/70 max-w-xl">
              Talk directly with our lead developer on WhatsApp for instantaneous milestone scoping and quotes.
            </p>
          </div>

          <a
            href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20have%20an%20engineering%20inquiry%20regarding%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider text-[#001B66] bg-gradient-to-r from-[#00E5FF] to-[#0061FF] hover:opacity-95 shadow-[0_8px_25px_rgba(0,97,255,0.35)] transition-all whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <MessageSquareCode className="w-4 h-4 text-[#001B66]" />
            <span>Sync on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* 5-Column Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#0033CC]/60"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Brand & Identity (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center shrink-0">
              <Link
                to="/"
                className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001B66] rounded-lg transition-transform active:scale-95"
                aria-label="TechSasi Web & App Solutions Home Page"
              >
                <svg
                  viewBox="0 0 400 76"
                  className="h-10 sm:h-12 w-auto select-none overflow-visible text-white"
                  role="img"
                  aria-label="TECHSASI Web & App Solutions"
                >
                  <defs>
                    {/* SASI blue-cyan gradient for dark footer */}
                    <linearGradient id="footerSasiBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" />
                      <stop offset="45%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>

                    {/* Cyan accent (E bar + A triangle) */}
                    <linearGradient id="footerCyanAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="60%" stopColor="#00E5FF" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>

                    {/* Tapered side lines */}
                    <linearGradient id="footerLeftWingGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#00E5FF" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="footerRightWingGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.15" />
                    </linearGradient>

                    {/* T mark gradients */}
                    <linearGradient id="footerTRibbonGrad" x1="0" y1="0" x2="1" y2="0.3">
                      <stop offset="0" stopColor="#00f5ff" />
                      <stop offset="0.5" stopColor="#1486ff" />
                      <stop offset="1" stopColor="#2a1fe8" />
                    </linearGradient>
                    <linearGradient id="footerTStemGrad" x1="0.35" y1="0" x2="0.5" y2="1">
                      <stop offset="0" stopColor="currentColor" />
                      <stop offset="0.35" stopColor="#1d4ed8" />
                      <stop offset="1" stopColor="#1a8bff" />
                    </linearGradient>
                    <linearGradient id="footerTFoldGrad" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0" stopColor="#00f5ff" />
                      <stop offset="1" stopColor="#1a74ff" />
                    </linearGradient>

                    {/* Clip for the cyan middle bar of the E */}
                    <clipPath id="footerEMiddleBarClip">
                      <rect x="62" y="21" width="38" height="10" />
                    </clipPath>
                  </defs>

                  {/* ───────── T MARK (left) ───────── */}
                  <g transform="translate(0,6) scale(0.1716) translate(-541,-100)">
                    <polygon points="541,245 636,138 878,138 800,245" fill="currentColor" />
                    <path
                      d="M840,142 C925,134 1050,134 1120,100 C1092,170 1052,214 1005,243 L758,243 C780,200 800,160 840,142 Z"
                      fill="url(#footerTRibbonGrad)"
                    />
                    <path d="M758,243 L896,243 L852,392 L662,473 L728,287 Z" fill="url(#footerTStemGrad)" />
                    <path d="M662,473 L835,395 L866,338 C800,365 745,395 700,430 Z" fill="url(#footerTFoldGrad)" />
                    <path d="M728,287 C760,262 800,250 896,243 L758,243 Z" fill="#00f5ff" opacity="0.9" />
                  </g>

                  {/* ───────── TECHSASI + SLOGAN (right) ───────── */}
                  <g transform="translate(72,0)">
                    <text
                      x="180"
                      y="44"
                      textAnchor="middle"
                      fontFamily="'Montserrat', 'Orbitron', 'Segoe UI', system-ui, sans-serif"
                      fontWeight="900"
                      fontStyle="italic"
                      fontSize="44"
                      letterSpacing="1.5"
                    >
                      <tspan fill="currentColor">TECH</tspan>
                      <tspan fill="url(#footerSasiBlueGrad)">SASI</tspan>
                    </text>

                    {/* Cyan bar on the E */}
                    <text
                      x="180"
                      y="44"
                      textAnchor="middle"
                      fontFamily="'Montserrat', 'Orbitron', 'Segoe UI', system-ui, sans-serif"
                      fontWeight="900"
                      fontStyle="italic"
                      fontSize="44"
                      letterSpacing="1.5"
                      fill="url(#footerCyanAccentGrad)"
                      clipPath="url(#footerEMiddleBarClip)"
                    >
                      TECHSASI
                    </text>

                    {/* Triangle inside the A */}
                    <polygon points="247,42 255,31 261,42" fill="#00E5FF" opacity="0.95" />

                    {/* Slogan */}
                    <g transform="translate(0, 63)">
                      <polygon points="34,0 68,-2.5 68,2.5" fill="url(#footerLeftWingGrad)" />
                      <text
                        x="180"
                        y="3.5"
                        textAnchor="middle"
                        fontFamily="'Montserrat', 'Inter', system-ui, sans-serif"
                        fontWeight="700"
                        fontSize="11.5"
                        letterSpacing="3.8"
                        fill="#EAF5FF"
                      >
                        WEB &amp; APP SOLUTIONS
                      </text>
                      <polygon points="326,0 292,-2.5 292,2.5" fill="url(#footerRightWingGrad)" />
                    </g>
                  </g>
                </svg>
              </Link>
            </div>

            <p className="text-sm text-[#EAF5FF]/70 leading-relaxed max-w-sm">
              High-performance web applications, cross-platform mobile apps, cloud architectures, and custom enterprise software engineered in Salem, Tamil Nadu.
            </p>

            {/* Live Operational Status Capsule */}
            <div className="p-4 rounded-2xl bg-[#00144D] border border-[#0033CC] space-y-2 max-w-sm shadow-inner">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                <span className="text-white font-semibold">Available for Q4 Client Deployments</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#EAF5FF]/70">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>100% Code Ownership · 30-Day Free Tech Warranty</span>
              </div>
            </div>
          </div>

          {/* Engineering Services (Col 3) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0061FF]" />
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
                    className="group inline-flex items-center gap-1.5 text-[#EAF5FF]/70 hover:text-[#00E5FF] transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#0061FF] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Company (Col 4) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { title: "About TechSasi", path: "/about" },
                { title: "Deployments & Portfolio", path: "/projects" },
                { title: "Project Cost Calculator", path: "/proposal" },
                { title: "Careers & Internships", path: "/careers" },
                { title: "Developer Training Tracks", path: "/services/coaching" },
                { title: "Support & SLA Plans", path: "/services/maintenance-support" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-1.5 text-[#EAF5FF]/70 hover:text-[#00E5FF] transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#0061FF] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Coordinates & HQ (Col 5) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              <span>Coordinates</span>
            </h4>

            <div className="space-y-2.5 text-xs font-mono">
              <a
                href="tel:+917448788879"
                className="group flex items-center gap-3 p-2.5 rounded-2xl bg-[#00144D] border border-[#0033CC] hover:border-[#0061FF] transition-all shadow-xs"
              >
                <div className="p-1.5 rounded-xl bg-[#001B66] border border-[#0033CC] text-[#00E5FF] group-hover:bg-[#0061FF] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#EAF5FF] group-hover:text-white transition-colors tabular-nums font-semibold">
                  +91 7448788879
                </span>
              </a>

              <a
                href="https://wa.me/917448788897"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2.5 rounded-2xl bg-[#00144D] border border-[#0033CC] hover:border-[#0061FF] transition-all shadow-xs"
              >
                <div className="p-1.5 rounded-xl bg-[#001B66] border border-[#0033CC] text-[#00E5FF] group-hover:bg-[#0061FF] group-hover:text-white transition-colors">
                  <MessageSquareCode className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#EAF5FF] group-hover:text-white transition-colors tabular-nums font-semibold">
                  +91 7448788897 (WA)
                </span>
              </a>

              <a
                href="mailto:info@techsasi.com"
                className="group flex items-center gap-3 p-2.5 rounded-2xl bg-[#00144D] border border-[#0033CC] hover:border-[#0061FF] transition-all shadow-xs"
              >
                <div className="p-1.5 rounded-xl bg-[#001B66] border border-[#0033CC] text-[#00E5FF] group-hover:bg-[#0061FF] group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#EAF5FF] group-hover:text-white transition-colors">
                  info@techsasi.com
                </span>
              </a>

              <div className="flex items-start gap-2.5 p-2 text-[#EAF5FF]/70 text-[11px] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>Kolathur, Mettur, Salem, Tamil Nadu 636303, India</span>
              </div>
            </div>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00E5FF] hover:text-[#66CCFF] transition-colors pt-1"
            >
              <span>Instant Proposal Estimator</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Legal & System Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#EAF5FF]/60">
          <p>© {currentYear} TechSasi Web Solutions. Built with precision in Tamil Nadu.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("techsasi:replay-loader"))}
              className="inline-flex items-center gap-1.5 text-[#00E5FF] hover:text-[#66CCFF] transition-colors cursor-pointer py-1 px-2.5 rounded-lg bg-[#00144D] border border-[#0033CC] hover:border-[#0061FF]"
              title="Experience the TechSasi Loading Screen animation again"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
              <span>Replay Intro Animation</span>
            </button>
            <span className="text-[#0033CC] hidden sm:inline" aria-hidden="true">/</span>
            <Link to="/privacy-policy" className="hover:text-[#00E5FF] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#0033CC]" aria-hidden="true">/</span>
            <Link to="/terms-service" className="hover:text-[#00E5FF] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#0033CC]" aria-hidden="true">/</span>
            <Link to="/projects" className="hover:text-[#00E5FF] transition-colors">
              Deployments
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;