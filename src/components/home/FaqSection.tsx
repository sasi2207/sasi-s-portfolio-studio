import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle, HelpCircle, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyText } from "@/components/ui/shiny-text";

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
    <section className="py-20 md:py-28 bg-[var(--surface-fill)] border-b border-[var(--border-line)] relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
            <span className="font-semibold uppercase tracking-wider">Got Questions?</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--text-muted)]">Clear Answers</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-tight text-balance">
            Frequently Asked{" "}
            <ShinyText text="Questions." speed={4} className="font-black" />
          </h2>

          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Everything you need to know about working with TechSasi. Honest answers to help you make an informed decision for your business.
          </p>
        </div>

        {/* FAQ Accordion List with ReactBits SpotlightCards */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <SpotlightCard
                key={index}
                enableTilt={false}
                spotlightColor="rgba(207, 128, 71, 0.12)"
                borderColor={isOpen ? "rgba(207, 128, 71, 0.5)" : "rgba(207, 128, 71, 0.2)"}
                className={`transition-all duration-200 overflow-hidden ${
                  isOpen ? "shadow-lg border-[var(--accent)]/50" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[var(--accent)] text-white rotate-180"
                        : "bg-[var(--surface-fill)] text-[var(--text-muted)]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-[var(--text-muted)] text-sm leading-relaxed border-t border-[var(--border-line)]">
                    <p className="max-w-3xl">{faq.answer}</p>
                  </div>
                )}
              </SpotlightCard>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <SpotlightCard
          enableTilt={true}
          tiltMaxAngle={4}
          spotlightColor="rgba(16, 185, 129, 0.15)"
          borderColor="rgba(16, 185, 129, 0.35)"
          className="mt-12 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left transition-colors"
        >
          <div className="space-y-1">
            <h4 className="font-display font-bold text-[var(--text-primary)] text-base sm:text-lg flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Still have a specific question about your project?</span>
            </h4>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm">
              Our lead developer is ready to answer any technical or pricing inquiry directly via WhatsApp or phone.
            </p>
          </div>

          <a
            href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20have%20a%20question%20about%20starting%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default FaqSection;
