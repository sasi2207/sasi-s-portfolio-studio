import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyText } from "@/components/ui/shiny-text";
import { MagnetButton } from "@/components/ui/magnet-button";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden border-t border-[var(--border-line)] transition-colors duration-300">
      {/* Background illumination */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-[var(--accent)]/15 via-[var(--accent-from)]/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SpotlightCard
          enableTilt={true}
          tiltMaxAngle={4}
          spotlightColor="rgba(207, 128, 71, 0.2)"
          borderColor="rgba(207, 128, 71, 0.45)"
          className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 text-center space-y-8 shadow-2xl relative"
        >
          {/* ReactBits Perimeter BorderBeam Animation */}
          <BorderBeam size={220} duration={12} colorFrom="#cf8047" colorTo="#ff9d5c" borderWidth={1.5} />

          <div className="space-y-3">
            <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
              Let's Build Together
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] leading-tight text-balance">
              Ready to Turn Your Idea Into a{" "}
              <ShinyText text="Working Product?" speed={3.5} className="font-black" />
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you need a new business website, a cross-platform mobile app, or custom software for your company — we are here to help. Get an instant quote or chat with our team today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagnetButton strength={0.3}>
              <Link
                to="/proposal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 rounded-xl shadow-lg hover:shadow-[var(--accent)]/30 transition-all whitespace-nowrap"
              >
                <span>Calculate Project Cost</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagnetButton>

            <MagnetButton strength={0.3}>
              <a
                href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20want%20to%20discuss%20a%20new%20project%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 rounded-xl transition-colors whitespace-nowrap shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </MagnetButton>

            <MagnetButton strength={0.25}>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--card-bg)] hover:bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-xl transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Schedule Call</span>
              </Link>
            </MagnetButton>
          </div>

          {/* Quick Contact Coordinates */}
          <div className="pt-8 border-t border-[var(--border-line)] flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[var(--text-muted)]">
            <a
              href="tel:+917448788879"
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--accent)]" />
              <span>+91 7448788879</span>
            </a>

            <a
              href="https://wa.me/917448788897"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="mailto:info@techsasi.com"
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="w-4 h-4 text-[var(--accent-from)]" />
              <span>info@techsasi.com</span>
            </a>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default CtaSection;
