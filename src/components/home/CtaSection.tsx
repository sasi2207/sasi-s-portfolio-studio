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
      className="relative py-24 md:py-32 bg-white text-[#111827] overflow-hidden border-t border-slate-200"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Background Subtle Electric Cyan & Blue Ambient Illumination on White */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0061FF_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#00E5FF]/15 via-[#0061FF]/10 to-transparent rounded-full blur-[140px]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <SpotlightCard
          enableTilt={true}
          tiltMaxAngle={3.5}
          spotlightColor="rgba(0, 229, 255, 0.12)"
          borderColor="rgba(0, 97, 255, 0.3)"
          className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 text-center space-y-10 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,97,255,0.08)] relative overflow-hidden"
        >
          {/* Neon Cyan & Primary Blue Border Beam */}
          <BorderBeam 
            size={260} 
            duration={10} 
            colorFrom="#00E5FF" 
            colorTo="#0061FF" 
            borderWidth={1.5} 
          />

          {/* Heading & Live Status Pill */}
          <div 
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#66CCFF]/40 text-[#0061FF] text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>Engineering Capacity Available</span>
              <span className="text-[#66CCFF]">/</span>
              <span className="text-[#64748B]">Salem &amp; Remote</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111827] leading-tight">
              Ready to Turn Your Idea Into a{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">
                Working Product?
              </span>
            </h2>

            <p className="text-[#64748B] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you need a modern business platform, a cross-platform mobile app, or tailored enterprise backend architecture — we build it right with guaranteed milestones and 100% source code ownership.
            </p>
          </div>

          {/* Value Badges */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono font-bold text-[#111827]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0061FF]" />
              <span>100% Code Ownership</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0061FF]" />
              <span>30-Day Tech Warranty</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0061FF]" />
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-black uppercase tracking-wider text-white bg-[#0061FF] hover:bg-[#0033CC] rounded-2xl shadow-[0_10px_25px_rgba(0,97,255,0.35)] transition-all whitespace-nowrap cursor-pointer active:scale-95"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#0033CC] hover:text-[#001B66] bg-[#EAF5FF] hover:bg-[#EAF5FF]/80 border border-[#66CCFF]/40 rounded-2xl transition-all whitespace-nowrap shadow-xs cursor-pointer active:scale-95"
              >
                <MessageSquareCode className="w-4 h-4 text-[#0061FF]" />
                <span>Chat on WhatsApp</span>
              </a>
            </MagnetButton>

            <MagnetButton strength={0.25}>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#0061FF] bg-[#F5F8FF] hover:bg-[#EAF5FF] border border-slate-200 rounded-2xl transition-colors whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#64748B]" />
                <span>Schedule Call</span>
              </Link>
            </MagnetButton>
          </div>

          {/* Quick Direct Coordinates */}
          <div 
            className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[#64748B]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="tel:+917448788879"
              className="group flex items-center gap-2 hover:text-[#0061FF] transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-[#EAF5FF] border border-[#66CCFF]/30 group-hover:border-[#0061FF] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#0061FF]" />
              </div>
              <span className="font-semibold text-[#111827] group-hover:text-[#0061FF]">+91 7448788879</span>
            </a>

            <a
              href="https://wa.me/917448788897"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-[#0061FF] transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-[#EAF5FF] border border-[#66CCFF]/30 group-hover:border-[#0061FF] transition-colors">
                <MessageSquareCode className="w-3.5 h-3.5 text-[#0061FF]" />
              </div>
              <span className="font-semibold text-[#111827] group-hover:text-[#0061FF]">WhatsApp Direct</span>
            </a>

            <a
              href="mailto:info@techsasi.com"
              className="group flex items-center gap-2 hover:text-[#0061FF] transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-[#EAF5FF] border border-[#66CCFF]/30 group-hover:border-[#0061FF] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#0061FF]" />
              </div>
              <span className="font-semibold text-[#111827] group-hover:text-[#0061FF]">info@techsasi.com</span>
            </a>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default CtaSection;