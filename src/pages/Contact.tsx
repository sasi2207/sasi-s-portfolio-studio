import { useEffect, useState } from "react";
import AOS from "aos";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Mail, Phone, MapPin, Terminal, Cpu, ShieldCheck, ChevronDown, CheckCircle } from "lucide-react";

/* ----------------------------------
   MOCK DATA TYPES & SOURCE
----------------------------------- */
const FAQ_DATA = [
  {
    id: "faq-1",
    question: "What is your target engineering stack?",
    answer: "We develop ultra-scalable interfaces using React, TypeScript, Next.js, and Tailwind CSS. The core backend relies on robust PHP/PDO database layers and Node architectures built for absolute telemetry speed."
  },
  {
    id: "faq-2",
    question: "How do we initialize a critical project lifecycle?",
    answer: "Simply use one of our gateway communication parameters below (Email/Phone). We establish a direct link within 12 standard runtime hours to map the functional requirements of your node infrastructure."
  },
  {
    id: "faq-3",
    question: "Do you offer remote infrastructural support?",
    answer: "Yes, all systems are monitored and deployment matrix pipelines are built natively to handle distributed remote networks globally with encrypted continuous integration."
  }
];

const SYSTEM_LOGS = [
  "Initializing link handshake...",
  "Core engine version 2.4.0 status: OK",
  "Checking database replication array... Connected",
  "Establishing secure telemetry matrix...",
  "System fully loaded. Awaiting client connection data."
];

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  // Simulating live terminal boot sequence
  useEffect(() => {
    if (logIndex < SYSTEM_LOGS.length) {
      const timeout = setTimeout(() => {
        setTerminalLogs((prev) => [...prev, SYSTEM_LOGS[logIndex]]);
        setLogIndex((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [logIndex]);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black text-zinc-300 font-mono selection:bg-amber-400/20 selection:text-amber-400 relative overflow-hidden">
        
        {/* Technical Blueprint Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121214_1px,transparent_1px),linear-gradient(to_bottom,#121214_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-amber-400/[0.02] rounded-full blur-[120px] pointer-events-none" />

        {/* HERO HEADER */}
        <ParallaxSection className="pt-36 pb-12 relative z-10" bgClassName="bg-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-sm">
                <Terminal size={11} className="text-amber-400 animate-pulse" />
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
                  SECURE_COMMS // NETWORK_OVERVIEW
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white uppercase" data-aos="fade-up">
                System <span className="font-bold text-amber-400">Node Hub</span>
              </h1>
              <p className="text-xs md:text-sm text-zinc-500 font-sans max-w-xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Explore infrastructure parameters, verify system security clearances, or bypass legacy loops through direct endpoint access.
              </p>
            </div>
          </div>
        </ParallaxSection>

        {/* MAIN STRUCTURAL LAYOUT */}
        <section className="pb-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* LEFT COLUMN: TELEMETRY INFO BLOCKS */}
              <div data-aos="fade-right" className="lg:col-span-5 space-y-8">
                <div className="space-y-2 border-b border-zinc-900 pb-4">
                  <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                    Node Infrastructure
                  </h2>
                  <p className="text-xs text-zinc-500 font-sans">
                    Physical routing anchors for cross-border data packet handling and architectural coordination.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* PHONE CONNECTOR */}
                  <div className="flex gap-4 p-4 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-black border border-zinc-900 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Gateway Comms</h3>
                      <p className="text-sm text-white font-sans mt-0.5">+91 7448788879</p>
                    </div>
                  </div>

                  {/* EMAIL CONNECTOR */}
                  <div className="flex gap-4 p-4 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-black border border-zinc-900 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Direct Endpoint</h3>
                      <p className="text-sm text-white font-sans mt-0.5">techsasi22@gmail.com</p>
                    </div>
                  </div>

                  {/* LOCATION CONNECTOR */}
                  <div className="flex gap-4 p-4 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-black border border-zinc-900 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Coordinates</h3>
                      <p className="text-sm text-white font-sans mt-0.5">Mettur, Salem, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: TERMINAL & FAQ ACCORDION (REPLACED FORM) */}
              <div data-aos="fade-left" className="lg:col-span-7 space-y-8">
                
                {/* 1. INTERACTIVE TERMINAL WIDGET */}
                <div className="rounded-sm bg-zinc-950 border border-zinc-900 shadow-2xl p-4 overflow-hidden relative">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Cpu size={14} className="text-amber-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">System_Live_Console</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/40" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/40" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 min-h-[140px] text-[11px] font-mono text-zinc-400 leading-relaxed">
                    {terminalLogs.map((log, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-amber-400/70 select-none">&gt;&gt;</span>
                        <p>{log}</p>
                      </div>
                    ))}
                    {logIndex < SYSTEM_LOGS.length && (
                      <div className="w-2 h-4 bg-amber-400 animate-pulse inline-block mt-0.5" />
                    )}
                  </div>
                </div>

                {/* 2. FREQUENTLY ASKED PROTOCOLS (FAQ Accordion) */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
                    <ShieldCheck size={16} className="text-amber-400" />
                    <h2 className="text-xs font-bold text-white uppercase tracking-wider">System_FAQ_Protocols</h2>
                  </div>

                  <div className="space-y-3">
                    {FAQ_DATA.map((faq) => {
                      const isOpen = activeFaq === faq.id;
                      return (
                        <div key={faq.id} className="border border-zinc-900 rounded-sm bg-zinc-950/40 overflow-hidden transition-colors duration-200">
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-4 group"
                          >
                            <span className="text-xs text-white uppercase font-bold tracking-wide group-hover:text-amber-400 transition-colors">
                              {faq.heading || faq.question}
                            </span>
                            <ChevronDown
                              size={14}
                              className={`text-zinc-500 group-hover:text-amber-400 transition-transform duration-300 ${
                                isOpen ? "rotate-180 text-amber-400" : ""
                              }`}
                            />
                          </button>
                          
                          <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                              isOpen ? "max-h-40 border-t border-zinc-900/60" : "max-h-0"
                            }`}
                          >
                            <div className="p-4 text-xs font-sans text-zinc-400 leading-relaxed bg-zinc-950">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;