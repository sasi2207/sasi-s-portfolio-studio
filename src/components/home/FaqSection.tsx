import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle, ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    question: "How much does a typical website or mobile application cost?",
    answer: "Our basic business website packages start from ₹9,999 with domain, SSL, mobile responsiveness, and hosting setup included. Full-featured dynamic web applications, e-commerce stores, and cross-platform mobile apps are scoped with clear milestone pricing based on exact features. We provide a transparent, itemized proposal before starting so you never encounter unexpected hidden fees.",
    category: "Pricing"
  },
  {
    question: "How long does it take from start to live launch?",
    answer: "A standard business website is typically completed and deployed within 5 to 10 working days. Custom web portals and mobile applications usually take 2 to 4 weeks depending on the complexity of database models and third-party integrations (like payment gateways, SMS, or maps). We provide a guaranteed milestone delivery schedule.",
    category: "Timeline"
  },
  {
    question: "Do I get 100% full ownership of the source code and accounts?",
    answer: "Yes, absolutely! At TechSasi, you retain 100% full intellectual property (IP) and source code ownership. Upon completion and final handover, we deliver all Git repositories, production builds, and admin credentials. You are never locked into proprietary platforms or held hostage.",
    category: "Ownership"
  },
  {
    question: "Can I easily update text, images, and products myself later?",
    answer: "Yes. Every website or application comes with an intuitive, clean administrative control dashboard or CMS. You can add new blog posts, edit service offerings, upload product photos, and check customer inquiries without writing a single line of code. We also provide free video walkthrough training during handover.",
    category: "Management"
  },
  {
    question: "What technical support and maintenance is included after launch?",
    answer: "Every single deployment includes a complimentary 30-day post-launch technical warranty. During this period, our team monitors server health, uptime, SSL renewals, and resolves any bugs at zero additional charge. We also offer affordable monthly SLA maintenance plans for ongoing backups, security patches, and feature updates.",
    category: "Support"
  },
  {
    question: "We are located outside Salem or in another state/country. How do we work together?",
    answer: "Over 60% of our clients collaborate with us remotely. We manage projects via structured WhatsApp groups, Google Meet video reviews, and live private staging links. You can test and inspect your live website or app at each milestone from your phone or laptop anywhere in the world.",
    category: "Collaboration"
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#060910] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 dark:text-slate-400">Clear Answers</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight text-balance">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about working with TechSasi. Honest answers to help you make an informed decision for your business.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-[#0B101D] border-amber-500/50 shadow-md dark:shadow-lg dark:shadow-black/40"
                    : "bg-white/80 dark:bg-[#090D18]/80 border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.15]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-amber-400 text-slate-950 rotate-180"
                        : "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-white/[0.04]">
                    <p className="max-w-3xl">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-slate-100 to-amber-500/10 dark:from-emerald-500/10 dark:via-[#0A101C] dark:to-amber-500/10 border border-slate-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left transition-colors">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              <span>Still have a specific question about your project?</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Our lead developer is ready to answer any technical or pricing inquiry directly via WhatsApp or phone.
            </p>
          </div>

          <a
            href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20have%20a%20question%20about%20starting%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 transition-colors whitespace-nowrap shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
