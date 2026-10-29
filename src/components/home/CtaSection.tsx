import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MessageSquareCode, 
  Calendar,
  CheckCircle2
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagnetButton } from "@/components/ui/magnet-button";

export const CtaSection: React.FC = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // Trigger animations only once on scroll
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section 
      className="relative py-24 md:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-200"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Background Subtle Electric Cyan & Blue Ambient Illumination on White */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.12]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-cyan-400/15 via-blue-500/10 to-transparent rounded-full blur-[140px]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <SpotlightCard
          enableTilt={true}
          tiltMaxAngle={3.5}
          spotlightColor="rgba(6, 182, 212, 0.12)"
          borderColor="rgba(6, 182, 212, 0.3)"
          className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 text-center space-y-10 rounded-3xl bg-white/95 border border-slate-200/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(6,182,212,0.12)] relative overflow-hidden"
        >
          {/* Electric Cyan & Blue Border Beam Perimeter Animation */}
          <BorderBeam 
            size={260} 
            duration={10} 
            colorFrom="#00f0ff" 
            colorTo="#0070f3" 
            borderWidth={1.5} 
          />

          {/* Heading & Live Status Pill */}
          <div 
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono uppercase tracking-widest shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>Engineering Capacity Available</span>
              <span className="text-cyan-300">/</span>
              <span className="text-slate-500">Salem & Remote</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Ready to Turn Your Idea Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">
                Working Product?
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you need a modern business platform, a cross-platform mobile app, or tailored enterprise backend architecture — we build it right with guaranteed milestones and 100% source code ownership.
            </p>
          </div>

          {/* Value Badges */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-slate-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>100% Code Ownership</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>30-Day Tech Warranty</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>Transparent Milestones</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <MagnetButton strength={0.3}>
              <Link
                to="/proposal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-2xl shadow-[0_10px_25px_rgba(6,182,212,0.35)] hover:shadow-[0_14px_30px_rgba(6,182,212,0.5)] transition-all whitespace-nowrap cursor-pointer active:scale-95"
              >
                <span>Calculate Project Cost</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </MagnetButton>

            <MagnetButton strength={0.3}>
              <a
                href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20want%20to%20discuss%20a%20new%20project%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-bold uppercase tracking-wider text-cyan-800 hover:text-cyan-900 bg-cyan-50 hover:bg-cyan-100 border border-cyan-300 rounded-2xl transition-all whitespace-nowrap shadow-xs cursor-pointer active:scale-95"
              >
                <MessageSquareCode className="w-4 h-4 text-cyan-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </MagnetButton>

            <MagnetButton strength={0.25}>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-colors whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>Schedule Call</span>
              </Link>
            </MagnetButton>
          </div>

          {/* Quick Direct Telemetry Coordinates */}
          <div 
            className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-600"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="tel:+917448788879"
              className="group flex items-center gap-2 hover:text-cyan-700 transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200 group-hover:border-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-600" />
              </div>
              <span>+91 7448788879</span>
            </a>

            <a
              href="https://wa.me/917448788897"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-cyan-700 transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200 group-hover:border-cyan-400 transition-colors">
                <MessageSquareCode className="w-3.5 h-3.5 text-cyan-600" />
              </div>
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="mailto:info@techsasi.com"
              className="group flex items-center gap-2 hover:text-cyan-700 transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-cyan-50 border border-cyan-200 group-hover:border-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-600" />
              </div>
              <span>info@techsasi.com</span>
            </a>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default CtaSection;