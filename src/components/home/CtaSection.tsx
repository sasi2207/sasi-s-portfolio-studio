import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MessageCircle, Calendar } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#05070D] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
      {/* Background illumination */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-amber-500/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 dark:bg-[#090D17] border border-slate-200 dark:border-white/[0.1] p-8 sm:p-12 md:p-16 text-center space-y-8 shadow-xl dark:shadow-2xl transition-colors">
          
          <div className="space-y-3">
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
              Let's Build Together
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight text-balance">
              Ready to Turn Your Idea Into a Working Product?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you need a new business website, a cross-platform mobile app, or custom software for your company — we are here to help. Get an instant quote or chat with our team today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/proposal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Calculate Project Cost</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20want%20to%20discuss%20a%20new%20project%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/[0.1] rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              <span>Schedule Call</span>
            </Link>
          </div>

          {/* Quick Contact Coordinates */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-500 dark:text-slate-400">
            <a
              href="tel:+917448788879"
              className="flex items-center gap-2 hover:text-amber-500 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
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
              className="flex items-center gap-2 hover:text-amber-500 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-500" />
              <span>info@techsasi.com</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
