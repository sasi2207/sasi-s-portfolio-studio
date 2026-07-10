import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  ShieldAlert,
  Clock,
  RefreshCw,
  Gauge,
  LifeBuoy,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";

/* ----------------------------------
   INTERSECTION REVEAL HOOK
----------------------------------- */
const useBlurReveal = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (el: HTMLDivElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
};

/* ----------------------------------
   DATA OBJECTS
----------------------------------- */
const coreServices = [
  {
    icon: RefreshCw,
    title: "Regular Updates & Patches",
    text: "Keep your platform seamless. Continuous core framework updates, plugin management, and dependency monitoring.",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    icon: ShieldAlert,
    title: "Security Auditing & Backups",
    text: "Automated daily/weekly offsite backups and continuous malware monitoring to keep your data bulletproof.",
    accent: "from-amber-500/20 to-transparent",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    text: "Database cleaning, script optimization, and server caching configurations to secure blazing fast load speeds.",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    icon: Clock,
    title: "24/7 SLA Support",
    text: "Dedicated ticketing channels and emergency hotlines matching your operational critical demands.",
    accent: "from-amber-500/20 to-transparent",
  },
];

const faqs = [
  {
    question: "What counts as a maintenance request?",
    answer: "Maintenance requests cover content edits, bug fixes, software updates, visual adjustments, script optimizations, and technical server administration tasks.",
  },
  {
    question: "Can I upgrade or downgrade my support tier at any time?",
    answer: "Yes, our contracts are flexible. You can adjust your maintenance structure on a month-to-month billing basis as your application requirements shift.",
  },
  {
    question: "How fast do you respond to critical downtime updates?",
    answer: "Critical system crashes or hosting failures receive instant responses within 15–30 minutes under our Professional and Premium Service Level Agreements (SLAs).",
  },
];

const MaintenanceSupport = () => {
  const reveal = useBlurReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <div className="bg-black text-zinc-100 min-h-screen selection:bg-amber-500 selection:text-black">
        
        {/* ================= HERO SECTIONS ================= */}
        <section className="pt-40 pb-24 overflow-hidden relative border-b border-zinc-900">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-6">
              <Wrench size={14} className="animate-spin-slow" /> Elite Technical Maintenance
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-bold mb-6 tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
              Zero Downtime.{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                Absolute Performance.
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert long-term management, server upkeep, vulnerability patching, and code enhancements for your enterprise applications and websites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-lg shadow-violet-600/20"
              >
                Secure a Plan <ArrowRight size={18} />
              </Link>
              <a
                href="tel:#"
                className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-semibold px-8 py-4 rounded-xl transition duration-300"
              >
                <PhoneCall size={18} className="text-amber-400" /> Urgent Support
              </a>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUE SERVICES ================= */}
        <section className="py-32 bg-zinc-950">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Proactive Management Ecosystem
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-base">
                We monitor your platforms relentlessly, solving performance bottlenecks before they affect your audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreServices.map((service, idx) => (
                <div
                  key={idx}
                  ref={reveal}
                  className="blur-reveal group relative bg-zinc-900/30 border border-zinc-850 p-8 rounded-2xl hover:border-zinc-700 transition duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition duration-500`} />
                  <div className="relative z-10 flex gap-5 items-start">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-violet-400 group-hover:text-amber-400 transition duration-300">
                      <service.icon size={26} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-white">
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        {service.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TIERS / SERVICE SPECS ================= */}
        <section className="py-32 bg-black border-t border-b border-zinc-900">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Support & Maintenance Tiers
              </h2>
              <p className="text-lg text-zinc-400 max-w-xl">
                Choose the coverage alignment that matches your live operational dependencies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  title: "Standard Care",
                  price: "₹5,000/mo",
                  desc: "Ideal for basic transactional business websites.",
                  features: ["5 Dedicated Development Hours", "Weekly Offsite Backups", "Core Security Patching", "Email & Ticket Helpdesk"],
                  highlight: false,
                },
                {
                  title: "Professional Plan",
                  price: "₹12,500/mo",
                  desc: "Perfect for active corporate web applications.",
                  features: ["15 Dedicated Development Hours", "Daily Cloud Backups", "Advanced Security + Firewall", "2-Hour SLA Response Time"],
                  highlight: true,
                },
                {
                  title: "Enterprise Custom",
                  price: "Custom Pricing",
                  desc: "Built for complex SaaS ecosystem arrays.",
                  features: ["Custom Resource Allocation", "Real-Time DB Mirroring", "Dedicated Support Slack Channel", "15-Min Instant SLA Critical Care"],
                  highlight: false,
                },
              ].map((tier, index) => (
                <div
                  key={index}
                  ref={reveal}
                  className={`blur-reveal flex flex-col justify-between p-8 rounded-2xl transition duration-300 relative ${
                    tier.highlight
                      ? "bg-zinc-900 border-2 border-violet-500 shadow-xl shadow-violet-500/5 scale-105 z-10"
                      : "bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800"
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Highly Recommended
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-2xl text-white mb-1">{tier.title}</h3>
                    <p className="text-xs text-zinc-400 mb-6">{tier.desc}</p>
                    <div className="text-3xl font-bold text-amber-400 mb-6">{tier.price}</div>
                    
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-3 text-zinc-300 text-sm items-start">
                          <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full text-center font-semibold py-3 rounded-xl transition duration-200 text-sm ${
                      tier.highlight
                        ? "bg-violet-600 text-white hover:bg-violet-500 shadow-md shadow-violet-600/10"
                        : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                    }`}
                  >
                    Select Coverage
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-32 bg-zinc-950">
          <div className="container-custom max-w-4xl px-6 mx-auto">
            <div ref={reveal} className="blur-reveal mb-12 text-center">
              <LifeBuoy className="text-amber-400 mx-auto mb-4" size={32} />
              <h2 className="text-3xl font-heading font-bold text-white">Frequently Shared Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    ref={reveal}
                    className="blur-reveal bg-zinc-900/50 border border-zinc-850 rounded-xl transition-all duration-200 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                      <span className="font-semibold text-lg text-white pr-4">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`text-zinc-400 transform transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-amber-400" : ""}`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-40 border-t border-zinc-850/50 opacity-100 p-6" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE CTA BANNER ================= */}
        <section className="py-24 bg-black">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Protect and Streamline Your App Lifecycle
              </h2>
              <p className="mb-8 text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
                Entrust your technological health assets to certified systems architects. Request a customized architecture analysis today.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-zinc-200 transition duration-200 shadow-xl"
              >
                Get Started Setup <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default MaintenanceSupport;