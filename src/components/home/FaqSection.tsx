import React, { useState, useMemo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  MessageSquareCode, 
  Code2, 
  Timer, 
  ShieldCheck, 
  Sliders, 
  Headset, 
  Globe2,
  ChevronRight,
  Terminal
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface FaqItem {
  id: string;
  category: "Pricing" | "Timeline" | "Ownership" | "Management" | "Support" | "Collaboration";
  icon: React.ElementType;
  tag: string;
  question: string;
  summary: string;
  answer: string;
  colSpan?: string;
}

const faqs: FaqItem[] = [
  {
    id: "pricing",
    category: "Pricing",
    icon: Code2,
    tag: "Packages from ₹9,999",
    question: "How much does a typical website or mobile app cost?",
    summary: "Predictable milestone-based pricing with full domain, SSL, and hosting setup included.",
    answer: "Our basic business website packages start from ₹9,999 with domain, SSL, mobile responsiveness, and hosting setup included. Full-featured dynamic web applications, e-commerce stores, and cross-platform mobile apps are scoped with clear milestone pricing based on exact features. We provide a transparent, itemized proposal before starting so you never encounter unexpected hidden fees.",
    colSpan: "lg:col-span-7"
  },
  {
    id: "timeline",
    category: "Timeline",
    icon: Timer,
    tag: "5 to 10 Working Days",
    question: "How long from kick-off to live launch?",
    summary: "Rapid staging cycles with clear milestone delivery deadlines.",
    answer: "A standard business website is typically completed and deployed within 5 to 10 working days. Custom web portals and mobile applications usually take 2 to 4 weeks depending on the complexity of database models and third-party integrations (like payment gateways, SMS, or maps). We provide a guaranteed milestone delivery schedule.",
    colSpan: "lg:col-span-5"
  },
  {
    id: "ownership",
    category: "Ownership",
    icon: ShieldCheck,
    tag: "100% IP Handover",
    question: "Do I get full ownership of code & accounts?",
    summary: "Complete Git repository transfer, cloud keys, and zero vendor lock-in.",
    answer: "Yes, absolutely! At TechSasi, you retain 100% full intellectual property (IP) and source code ownership. Upon completion and final handover, we deliver all Git repositories, production builds, and admin credentials. You are never locked into proprietary platforms or held hostage.",
    colSpan: "lg:col-span-5"
  },
  {
    id: "management",
    category: "Management",
    icon: Sliders,
    tag: "Visual CMS & Control",
    question: "Can I update text, images, and content later?",
    summary: "Intuitive admin dashboard with zero coding required and free walkthrough training.",
    answer: "Yes. Every website or application comes with an intuitive, clean administrative control dashboard or CMS. You can add new blog posts, edit service offerings, upload product photos, and check customer inquiries without writing a single line of code. We also provide free video walkthrough training during handover.",
    colSpan: "lg:col-span-7"
  },
  {
    id: "support",
    category: "Support",
    icon: Headset,
    tag: "30-Day Free SLA",
    question: "What technical support is included post-launch?",
    summary: "Complimentary uptime monitoring, bug remediation, and SLA backup plans.",
    answer: "Every single deployment includes a complimentary 30-day post-launch technical warranty. During this period, our team monitors server health, uptime, SSL renewals, and resolves any bugs at zero additional charge. We also offer affordable monthly SLA maintenance plans for ongoing backups, security patches, and feature updates.",
    colSpan: "lg:col-span-6"
  },
  {
    id: "collaboration",
    category: "Collaboration",
    icon: Globe2,
    tag: "60%+ Remote Clients",
    question: "Located outside Salem or abroad? How we work:",
    summary: "Structured private staging links, WhatsApp channels, and Google Meet syncs.",
    answer: "Over 60% of our clients collaborate with us remotely. We manage projects via structured WhatsApp groups, Google Meet video reviews, and live private staging links. You can test and inspect your live website or app at each milestone from your phone or laptop anywhere in the world.",
    colSpan: "lg:col-span-6"
  }
];

export const FaqSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>("pricing");
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // Trigger animations only once on scroll
      easing: "ease-out-cubic",
    });
  }, []);

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const q = searchQuery.toLowerCase();
    return faqs.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <section 
      className="relative py-24 md:py-32 bg-[#040711] text-slate-100 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Background High-Voltage Mesh Grid */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[780px] h-[360px] bg-gradient-to-b from-cyan-400/20 via-blue-600/10 to-transparent blur-[120px] rounded-full" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Search Bar */}
        <div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Answers</span>
              <span className="text-cyan-800">/</span>
              <span className="text-slate-400">Zero Ambiguity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Technical & Commercial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                FAQs
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Click any module to inspect detailed deliverables, milestones, and architectural policies.
            </p>
          </div>

          {/* Quick Filter Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080d1a] border border-cyan-900/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Bento Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredFaqs.map((faq, index) => {
            const isExpanded = selectedId === faq.id;
            const Icon = faq.icon;

            return (
              <div 
                key={faq.id} 
                className={`${faq.colSpan || "lg:col-span-6"}`}
                data-aos="zoom-in-up"
                data-aos-delay={150 + index * 70}
              >
                <SpotlightCard
                  enableTilt={false}
                  spotlightColor="rgba(0, 240, 255, 0.14)"
                  borderColor={isExpanded ? "rgba(0, 240, 255, 0.55)" : "rgba(12, 30, 56, 0.6)"}
                  className={`transition-all duration-300 rounded-3xl bg-[#070c18]/90 border backdrop-blur-md overflow-hidden cursor-pointer h-full ${
                    isExpanded
                      ? "ring-1 ring-cyan-400/40 shadow-[0_0_35px_-8px_rgba(0,240,255,0.25)] bg-[#091122]"
                      : "hover:border-cyan-900/60"
                  }`}
                >
                  <div 
                    onClick={() => setSelectedId(isExpanded ? null : faq.id)}
                    className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-4"
                  >
                    {/* Card Header & Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-xl border transition-colors ${
                          isExpanded 
                            ? "bg-cyan-400 text-slate-950 border-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]" 
                            : "bg-cyan-950/40 text-cyan-400 border-cyan-800/40"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-300 font-semibold px-2 py-0.5 rounded-md bg-cyan-950/50 border border-cyan-800/40">
                          {faq.tag}
                        </span>
                      </div>

                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? "rotate-90 bg-cyan-400 text-slate-950" : "bg-slate-800/60 text-slate-400"
                      }`}>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Question & Teaser */}
                    <div className="space-y-1.5">
                      <h3 className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isExpanded ? "text-cyan-300" : "text-white"
                      }`}>
                        {faq.question}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {faq.summary}
                      </p>
                    </div>

                    {/* Expandable Comprehensive Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0 pt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-3 border-t border-cyan-950/60 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-2">
                          <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                            <Terminal className="w-3 h-3" />
                            <span>Details & SLA Delivery</span>
                          </div>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Engineer WhatsApp Banner */}
        <div 
          className="mt-14 p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#080e1e] via-[#0b162f] to-[#080e1e] relative overflow-hidden backdrop-blur-xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>DIRECT FOUNDER / DEVELOPER DESK</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Have a bespoke feature requirement or database scope?
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                Get immediate pricing, tech stack recommendations, or a live demo directly on WhatsApp.
              </p>
            </div>

            <a
              href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20have%20a%20question%20about%20starting%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <MessageSquareCode className="w-4 h-4 fill-slate-950/20" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;