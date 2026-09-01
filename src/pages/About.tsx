import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  Cpu,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Layers,
  BookOpen,
  Award,
  Send,
  Compass,
  Briefcase,
  Lightbulb,
  CpuIcon,
  Flame,
  Globe
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

/* ------------------------------------------------------------------
   1. ANIMATION HOOK: Smooth scroll reveal
--------------------------------------------------------------------- */
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
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (el: HTMLDivElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
};

/* ------------------------------------------------------------------
   2. MORPHISM & GLASS HUD JOURNEY CARDS (VERAMATHIRI 2.0)
--------------------------------------------------------------------- */
const morphismStoryCards = [
  {
    phase: "01",
    title: "Oru Simple Start",
    subtitle: "School Days & Curiosity",
    desc: "10th standard (82%) & 12th standard (61%) with Computer Science. Appove computer use panradhu, technology eppadi work aagudhu nu therinjukka oru curiosity vandhuchu.",
    highlight: "Computer Science Foundation",
  },
  {
    phase: "02",
    title: "Logical Thinking",
    subtitle: "B.Sc. Mathematics (74%)",
    desc: "Degree Mathematics-a irundhalum, problem solving and logical thinking develop panna romba useful-a irundhuchu. Software mela irundha interest continue aayichu.",
    highlight: "Analytical Mindset",
  },
  {
    phase: "03",
    title: "First Code & Reality",
    subtitle: "MERN Stack Learning",
    desc: "Frontend, Backend, Database, API. Starting-la neraya concepts difficult-a irundhuchu. Code work aagala, error puriyala. Coding-na code write panradhu illa, problem solve panradhu nu purinjadhu.",
    highlight: "Problem Solving Mastery",
  },
  {
    phase: "04",
    title: "Job Search Hurdles",
    subtitle: "Rejections & Barriers",
    desc: "2022-la job search-la freshers face panra real challenges: 'Experience irukka?', 'Reference irukka?', non-IT degree barriers. But naan stop pannala, innum learn pannanum nu decide pannen.",
    highlight: "Resilience & Growth",
  },
  {
    phase: "05",
    title: "Skill Expansion",
    subtitle: "Java, Python, PHP, AWS",
    desc: "Different technologies explore pannen. Java moolama programming, Python moolama possibilities, PHP moolama web dev, AWS moolama cloud computing understand pannen.",
    highlight: "Multi-Stack Versatility",
  },
  {
    phase: "06",
    title: "TechSasi Born",
    subtitle: "Learning + Development Platform",
    desc: "Practical training for students + digital solutions for businesses. TechSasi oru training institute mattum illa — idhu enoda learning journey-oda next step.",
    highlight: "The Vision Realized",
  },
];

const TechSasiMorphismAbout = () => {
  const reveal = useBlurReveal();
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (topic?: string) => {
    const phoneNumber = "7448788897";
    const messageText = topic 
      ? `Hello TechSasi, I want to explore ${topic}. Let's discuss details! 🚀`
      : `Hello TechSasi, I read your morphi-styled story and want to connect with your training or software development services. Let's talk!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here is my inquiry:\n\n"${dmMessage}"`);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setDmMessage("");
    }, 4000);
  };

  return (
    <PageLayout>
      {/* CSS for Full Page Box Grid Background Lines with Orange Accent */}
      <style>{`
        .bg-grid-box-full-morphism {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(249, 115, 22, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.08) 1px, transparent 1px);
        }
        .glass-morphism-card {
          background: rgba(18, 18, 20, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(249, 115, 22, 0.2);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        .glass-morphism-card:hover {
          border-color: rgba(249, 115, 22, 0.6);
          box-shadow: 0 25px 60px rgba(249, 115, 22, 0.15), inset 0 1px 0 rgba(249, 115, 22, 0.3);
        }
      `}</style>

      {/* Main Wrapper with Black Background, Orange Accents & White Text */}
      <div className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-black bg-grid-box-full-morphism relative overflow-x-hidden font-sans">
        
        {/* ================= HERO SECTION (GLASS MORPHISM HUD STYLE) ================= */}
        <ParallaxSection
          className="pt-40 pb-28 relative overflow-hidden"
          bgClassName="bg-black/95 border-b border-zinc-900 backdrop-blur-md"
        >
          {/* Dynamic Glowing Backdrop Elements */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-orange-600/25 via-amber-500/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

          <div className="container-custom max-w-7xl px-6 lg:px-12 relative z-10 mx-auto text-center">
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono font-semibold text-xs tracking-widest uppercase mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Oru Small Idea... Oru Big Journey
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black uppercase mb-6 tracking-tight leading-[1.08] text-white">
                Morphing Skills Into Reality <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                  This Is TechSasi
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              TechSasi oru naal-la create aana company illa. School computer science curiosity, B.Sc Mathematics logic, job search rejections, and continuous technology learning mela irundha passion-oda result dhaan.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 items-center mb-16"
            >
              <button
                onClick={() => {
                  const journeySection = document.getElementById("morphism-story-grid");
                  journeySection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-extrabold text-sm md:text-base px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 cursor-pointer group"
              >
                Explore Morphi Journey <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleWhatsAppClick("TechSasi Training & Services")}
                className="inline-flex items-center gap-3 bg-zinc-900 border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-600 font-extrabold text-sm md:text-base px-7 py-4 rounded-xl transition duration-300 shadow-xl group cursor-pointer"
              >
                <MessageCircle size={20} className="text-orange-400 group-hover:text-white transition-colors" />
                Talk to Founder: <span className="font-mono tracking-wider">7448788897</span>
              </button>
            </motion.div>

            {/* Glass HUD Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left"
            >
              {[
                { title: "Software Solutions", desc: "Custom web & app building" },
                { title: "Practical Training", desc: "Learn by building projects" },
                { title: "Non-IT to Tech", desc: "Zero barrier entry for coding" },
                { title: "Continuous Growth", desc: "Adapt, practice & evolve daily" },
              ].map((badge, idx) => (
                <div key={idx} className="glass-morphism-card p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">{badge.title}</h4>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-snug font-medium">{badge.desc}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </ParallaxSection>

        {/* ================= THE REALIZATION QUOTE (GLASS HUD) ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 relative backdrop-blur-md">
          <div
            ref={reveal}
            className="container-custom max-w-5xl px-6 lg:px-12 blur-reveal text-center"
          >
            <div className="glass-morphism-card p-10 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] pointer-events-none" />
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-zinc-100 tracking-tight">
                "Certificate mattum oru career build aana pothathu. Technology learn pannanum, adha practice pannanum, projects build pannanum, problems solve pannanum."{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold block mt-3">
                  Most importantly: Continuous-a learn pannite irukkanum. Idhu dhaan enoda biggest learning.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ================= MORPHISM JOURNEY TIMELINE GRID ================= */}
        <section id="morphism-story-grid" className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-mono font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Glass Morphism Evolution
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
              The <span className="text-orange-400">TechSasi</span> Story Chapters
            </h2>
            <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto font-normal">
              From school computer lab curiosity to building a full-fledged software and training institute.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {morphismStoryCards.map((item, idx) => (
              <div
                key={idx}
                ref={reveal}
                className="blur-reveal glass-morphism-card p-8 rounded-3xl transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-orange-400 drop-shadow-sm">{item.phase}</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-500/10 border border-orange-500/30 text-orange-300 px-3 py-1 rounded-full">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-1 tracking-wide">{item.title}</h3>
                  <h4 className="text-xs font-mono font-semibold text-orange-400 mb-4 uppercase tracking-wider">{item.subtitle}</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed font-normal">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="tracking-wide">TechSasi Origin</span>
                  <span className="text-orange-400 font-bold">Phase {item.phase}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHAT WE DO AT TECHSASI (GLASS CARDS) ================= */}
        <section className="py-32 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-mono font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Dual Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
              What We Do at <span className="text-orange-400">TechSasi</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-300 max-w-xl mx-auto font-normal">
              Bridging real software solutions for businesses and practical training for aspiring developers.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid md:grid-cols-2 gap-8 items-stretch">
            
            <div ref={reveal} className="blur-reveal glass-morphism-card p-8 md:p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                  <Briefcase size={24} />
                </div>
                <span className="text-xs uppercase font-mono font-bold text-orange-400 tracking-wider">For Businesses</span>
                <h3 className="text-2xl font-extrabold text-white mb-4 mt-1">Software Development</h3>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
                  Businesses-ku their ideas-ai real digital products-a convert panna help panrom. We build business websites, dynamic web applications, e-commerce stores, mobile apps, custom software, and CRM solutions.
                </p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl border border-orange-500/20 text-xs font-mono font-medium text-orange-300 text-center">
                Technology should fit the business — not vice versa.
              </div>
            </div>

            <div ref={reveal} className="blur-reveal glass-morphism-card p-8 md:p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                  <BookOpen size={24} />
                </div>
                <span className="text-xs uppercase font-mono font-bold text-orange-400 tracking-wider">For Students & Beginners</span>
                <h3 className="text-2xl font-extrabold text-white mb-4 mt-1">Practical Technology Training</h3>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
                  Students, freshers, and professionals-ku practical technology training in Python, Java, React, MERN Stack, AWS, UI/UX, and AI development. Learn → Practice → Build → Improve.
                </p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl border border-orange-500/20 text-xs font-mono font-medium text-zinc-300 text-center">
                Real confidence comes from building projects yourself.
              </div>
            </div>

          </div>
        </section>

        {/* ================= FOUNDER'S PROMISE GLASS BANNER ================= */}
        <section className="py-24 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center">
            <div ref={reveal} className="blur-reveal glass-morphism-card p-10 md:p-14 rounded-3xl">
              <span className="text-orange-400 font-mono font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Founder's Promise
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                Oru student-ku starting point important illa.
              </h2>
              <p className="text-zinc-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
                Even if you feel "enakku coding theriyadhu", "experience illa", or "degree non-IT-ah irukku", at TechSasi you will gain the confidence to learn, build, and grow continuously.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-4 text-xs font-mono font-semibold text-orange-300">
                <span className="bg-black/60 px-4 py-2 rounded-xl border border-orange-500/20 tracking-wider">Learn Today</span>
                <span className="bg-black/60 px-4 py-2 rounded-xl border border-orange-500/20 tracking-wider">Build Tomorrow</span>
                <span className="bg-black/60 px-4 py-2 rounded-xl border border-orange-500/20 tracking-wider">Grow Continuously</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DIRECT MESSAGE (DM) SECTION ================= */}
        <section id="direct-message-section" className="py-24 bg-zinc-950/95 relative backdrop-blur-md">
          <div className="container-custom max-w-4xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal glass-morphism-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 right-0 w-72 h-72 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="text-center mb-8">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 rounded-full inline-block mb-3">
                  Direct Messenger (DM)
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white tracking-tight">
                  Let's Build Something <span className="text-orange-400">Together</span>
                </h2>
                <p className="text-zinc-300 text-sm md:text-base max-w-lg mx-auto font-normal">
                  Want to learn technology or turn your business idea into a digital solution? Send us a message via WhatsApp DM (<span className="font-mono text-orange-400 font-bold">+91 7448788897</span>).
                </p>
              </div>

              {isSent ? (
                <div className="bg-orange-500/10 border border-orange-500/40 text-orange-400 p-6 rounded-2xl text-center font-mono font-semibold animate-pulse text-sm">
                  ✅ Message formatted successfully! Redirecting directly to WhatsApp Founder...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Share your learning goals or business idea / project requirement..."
                      className="w-full bg-black/80 border border-orange-500/30 focus:border-orange-500 rounded-2xl p-4 text-white text-sm md:text-base placeholder-zinc-500 focus:outline-none transition resize-none shadow-inner font-normal"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                      Direct WhatsApp Line: <span className="text-orange-300 font-bold tracking-wider">7448788897</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-extrabold px-8 py-3.5 rounded-xl transition duration-300 shadow-xl shadow-orange-500/20 cursor-pointer text-sm"
                      >
                        <Send size={16} /> Send WhatsApp DM
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ================= CTA FINAL SECTION ================= */}
        <section className="py-20 bg-black/95 relative backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal glass-morphism-card p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-heading font-black mb-4 text-white tracking-tight">
                From Learning to Building. From Ideas to Technology.
              </h2>
              <p className="mb-10 text-zinc-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal">
                This Is Just the Beginning. <span className="text-orange-400 font-bold">Learn. Build. Grow with TechSasi.</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => handleWhatsAppClick("TechSasi Courses & Services")}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-extrabold text-sm md:text-base px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Explore Courses & Services <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-600 font-extrabold text-sm md:text-base px-8 py-4 rounded-xl transition duration-300 shadow-xl cursor-pointer"
                >
                  <MessageCircle size={20} />
                  Talk to TechSasi: <span className="font-mono tracking-wider">7448788897</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default TechSasiMorphismAbout;