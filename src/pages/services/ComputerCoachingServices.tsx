import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  FileText,
  BarChart2,
  Presentation,
  Globe,
  Mail,
  Keyboard,
  Cpu,
  Code,
  Users,
  GraduationCap,
  Briefcase,
  UserCheck,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  X,
  Clock,
  HelpCircle,
  Send,
  BookOpen,
  Award
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
   2. COMPUTER COACHING & SKILLS MATRIX
--------------------------------------------------------------------- */
const computerCoachingData = [
  {
    icon: Monitor,
    title: "Basic Computer Skills",
    text: "Master operating systems, file management, software installation, and everyday system navigation.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: FileText,
    title: "Microsoft Word",
    text: "Learn professional document creation, formatting, tables, mail merge, and official report design.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: BarChart2,
    title: "Microsoft Excel",
    text: "From basic spreadsheets to advanced formulas, VLOOKUP, pivot tables, charts, and data analysis.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Presentation,
    title: "Microsoft PowerPoint",
    text: "Design impactful, professional presentations, business pitches, and academic slide decks.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Globe,
    title: "Internet, Email & Browsing",
    text: "Learn secure web browsing, cloud storage, professional email etiquette, and online collaboration.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Mail,
    title: "Google Workspace Tools",
    text: "Hands-on training with Google Docs, Sheets, Slides, Drive, and Gmail for productivity.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Keyboard,
    title: "Typing & Documentation",
    text: "Improve typing speed, accuracy, data entry speed, and formal office documentation.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
  {
    icon: Code,
    title: "Basic Programming & Web Dev",
    text: "Step-by-step introduction to coding, HTML/CSS web development, and software tools.",
    borderColor: "hover:border-orange-500/60",
    glowColor: "group-hover:bg-orange-500/10",
  },
];

/* ------------------------------------------------------------------
   3. TARGET AUDIENCE TRACKS
--------------------------------------------------------------------- */
const targetAudiences = [
  {
    icon: Users,
    title: "For Beginners",
    desc: "Start from absolute zero. Learn how to comfortably operate a computer, browse the web, send emails, and use everyday software.",
  },
  {
    icon: GraduationCap,
    title: "For Students",
    desc: "Build essential software and digital skills that support your school or college studies and prepare you for future career opportunities.",
  },
  {
    icon: Briefcase,
    title: "For Job Seekers",
    desc: "Gain practical, resume-ready computer skills that boost your confidence when applying for jobs and attending interviews.",
  },
  {
    icon: UserCheck,
    title: "For Working Professionals",
    desc: "Upgrade your existing workflow, master advanced Excel & office tools, and work significantly faster and more efficiently.",
  },
];

/* ------------------------------------------------------------------
   4. TRAINING PACKAGES & COURSES
--------------------------------------------------------------------- */
const coachingPricingPlans = [
  {
    id: "beginner-foundation",
    title: "Beginner Computer Foundation",
    price: "₹2,500 / course",
    description: "Ideal for absolute beginners looking to master basic computer operations, internet use, and typing.",
    duration: "4 Weeks Training",
    level: "Beginner Level",
    features: [
      "Basics of Windows & File Management",
      "Internet browsing & email setup",
      "Basic typing & keyboard mastery",
      "Introduction to MS Word & Notepad",
      "Practical exercises & trainer support"
    ],
    highlighted: false,
  },
  {
    id: "office-productivity-pro",
    title: "Office Productivity & Excel Pro",
    price: "₹4,500 / course",
    description: "Comprehensive training in MS Word, Excel, PowerPoint, and Google Workspace for jobs and careers.",
    duration: "6 Weeks Training",
    level: "All Levels / Job Seekers",
    features: [
      "Advanced MS Word & Report Formatting",
      "MS Excel (Formulas, VLOOKUP, Pivot Tables)",
      "MS PowerPoint Professional Slide Design",
      "Google Workspace & Cloud collaboration",
      "Real-world office tasks & certification"
    ],
    highlighted: true,
  },
  {
    id: "custom-1on1-coaching",
    title: "Custom 1-on-1 Coaching",
    price: "₹1,500 / week",
    description: "Personalized coaching tailored specifically to your learning goals, school syllabus, or job requirement.",
    duration: "Flexible Schedule",
    level: "Customized",
    features: [
      "1-on-1 personal trainer attention",
      "Customized syllabus based on your goals",
      "Flexible timings (Morning / Evening)",
      "Instant doubt clearing & live practice",
      "Project-based practical learning"
    ],
    highlighted: false,
  },
];

const ComputerCoachingServices = () => {
  const reveal = useBlurReveal();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  
  // Direct Message (DM) Form State
  const [dmMessage, setDmMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppClick = (planTitle?: string) => {
    const phoneNumber = "7448788897";
    const messageText = planTitle 
      ? `Hello TechSasi, I am interested in joining the '${planTitle}' computer coaching program. Let's start my learning journey!`
      : `Hello TechSasi, I want to learn computers and improve my skills. Let's discuss suitable coaching options!`;
    
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleDmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmMessage.trim()) return;

    const phoneNumber = "7448788897";
    const encodedMsg = encodeURIComponent(`Hello TechSasi, here are my computer coaching requirements / goals:\n\n"${dmMessage}"`);
    
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
        .bg-grid-box-full {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(249, 115, 22, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.08) 1px, transparent 1px);
        }
      `}</style>

      {/* Main Wrapper with Black Background & Box Grid Lines */}
      <div className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-black bg-grid-box-full relative overflow-x-hidden">
        
        {/* ================= HERO SECTION ================= */}
        <ParallaxSection
          className="pt-40 pb-32 relative overflow-hidden"
          bgClassName="bg-black/90 border-b border-zinc-900 backdrop-blur-md"
        >
          {/* Glowing Ambient Backdrop */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-600/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center relative z-10 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
                Practical Skill-Based Training
              </span>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black uppercase mb-6 tracking-tight leading-tight text-white">
                Learn Computers <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">With Confidence</span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Want to learn computers but don't know where to start? Or looking to improve your skills for studies, work, or your career? We guide you step by step based on your level.
              </p>

              <div className="flex flex-wrap justify-center gap-4 items-center">
                <button
                  onClick={() => {
                    const coursesSection = document.getElementById("courses-section");
                    coursesSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-orange-500/25 group cursor-pointer"
                >
                  Explore Our Courses <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-7 py-4 rounded-xl transition duration-300 shadow-xl group cursor-pointer"
                >
                  <MessageCircle size={20} className="text-emerald-400 group-hover:text-white transition-colors" />
                  Talk to a Trainer: 7448788897
                </button>
              </div>
            </motion.div>
          </div>
        </ParallaxSection>

        {/* ================= VALUE STATEMENT ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 relative backdrop-blur-md">
          <div
            ref={reveal}
            className="container-custom max-w-6xl px-6 lg:px-12 blur-reveal text-center"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-200">
              At TechSasi, our focus is simple —{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold">
                learn the technology, practice it hands-on, and use it confidently in real life.
              </span>{" "}
              You don't need to be an expert before you start.
            </p>
          </div>
        </section>

        {/* ================= WHAT YOU CAN LEARN ================= */}
        <section className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Essential Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What You Can Learn With Us
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Practical software and computer skills tailored for everyday use, education, and professional growth.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {computerCoachingData.map((item) => (
              <div
                key={item.title}
                ref={reveal}
                className={`blur-reveal group relative bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl transition duration-300 ${item.borderColor} overflow-hidden backdrop-blur-sm shadow-md`}
              >
                <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl -z-10 ${item.glowColor}`} />
                <item.icon className="text-orange-400 mb-5 w-8 h-8 transform group-hover:scale-110 transition duration-300" />
                <h3 className="font-semibold text-xl mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TRAINING FOR EVERYONE ================= */}
        <section className="py-32 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12 mb-16 text-center">
            <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Personalized Learning Paths
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Training Designed for Everyone
            </h2>
            <p className="text-lg text-zinc-300 max-w-xl mx-auto">
              Whether you are starting from scratch or leveling up your professional career, we have a path for you.
            </p>
          </div>

          <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudiences.map((aud) => (
              <div
                key={aud.title}
                ref={reveal}
                className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                    <aud.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{aud.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{aud.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRACTICAL LEARNING & CUSTOM LEVEL ================= */}
        <section className="py-24 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              
              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    Learn By Doing
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Practical Learning, Not Just Theory
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    We believe the best way to master computers is by doing. Instead of only explaining concepts, we encourage practical exercises and real-world tasks. You'll get hands-on opportunities to practice what you learn.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300 flex items-center gap-3">
                  <CheckCircle className="text-orange-400 flex-shrink-0" size={20} />
                  <span>Real-world assignments that build genuine operational confidence.</span>
                </div>
              </div>

              <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                    At Your Own Pace
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Learn at Your Own Level
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Everyone learns differently. Whether you are using a computer for the very first time or already have some experience, we help you choose the right learning path based on your current skills and personal goals.
                  </p>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300">
                  Customized guidance ensuring you never feel rushed or left behind.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= WHY LEARN WITH TECHSASI ================= */}
        <section className="py-24 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-5xl px-6 lg:px-12 text-center">
            <div ref={reveal} className="blur-reveal bg-zinc-900/80 border border-zinc-800 p-10 md:p-14 rounded-3xl shadow-xl">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The TechSasi Advantage
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                Why Learn With TechSasi?
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
                {[
                  "Beginner-Friendly Training",
                  "Practical Learning Approach",
                  "Step-by-Step Guidance",
                  "Real-World Examples",
                  "Friendly Learning Environment",
                  "Skill-Based Training",
                  "Career-Focused Learning",
                  "Full Support During Journey"
                ].map((perk, i) => (
                  <div key={i} className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center gap-3">
                    <CheckCircle className="text-orange-400 flex-shrink-0" size={16} />
                    <span className="text-xs font-semibold text-zinc-200">{perk}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const coursesSection = document.getElementById("courses-section");
                  coursesSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3.5 rounded-xl hover:bg-orange-500 transition duration-200 text-sm cursor-pointer shadow-md"
              >
                Explore Training Courses <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= COURSES / PACKAGES SECTION ================= */}
        <section id="courses-section" className="py-32 bg-black/90 border-b border-zinc-900 backdrop-blur-md">
          <div className="container-custom max-w-7xl px-6 lg:px-12">
            <div ref={reveal} className="blur-reveal mb-16 text-center lg:text-left">
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Structured Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Computer Coaching <span className="text-orange-400">Programs & Pricing</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-xl">
                Choose a course that fits your current skill level and goals. Click any program to review details and connect with a trainer via WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {coachingPricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  ref={reveal}
                  className={`blur-reveal flex flex-col justify-between p-8 rounded-2xl transition duration-300 relative backdrop-blur-sm ${
                    plan.highlighted
                      ? "bg-zinc-900 border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-105 z-10"
                      : "bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-white">{plan.title}</h3>
                    <p className="text-zinc-300 text-sm mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-3 text-zinc-200 text-sm items-start">
                          <CheckCircle className="text-orange-400 mt-0.5 flex-shrink-0" size={16} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full text-center font-semibold py-3.5 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold hover:from-orange-600 hover:to-amber-600 shadow-md"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                    }`}
                  >
                    <BookOpen size={16} /> View Course & DM Trainer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DIRECT MESSAGE (DM) SECTION ================= */}
        <section id="direct-message-section" className="py-24 bg-black/95 relative backdrop-blur-md">
          <div className="container-custom max-w-4xl px-6 lg:px-12">
            <div
              ref={reveal}
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-orange-500/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3">
                  Direct Messenger (DM)
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white">
                  Start With What You Want to Learn
                </h2>
                <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                  Tell us what you want to learn, why you want to learn it, and your current skill level. We'll help you find a suitable training path via WhatsApp (+91 7448788897).
                </p>
              </div>

              {isSent ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 p-6 rounded-2xl text-center font-semibold animate-pulse">
                  ✅ Learning requirements sent successfully! Redirecting directly to WhatsApp Trainer...
                </div>
              ) : (
                <form onSubmit={handleDmSubmit} className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={dmMessage}
                      onChange={(e) => setDmMessage(e.target.value)}
                      placeholder="Share your current skill level, what computer skills you want to learn (e.g. Excel, Basics, Word), and your goals..."
                      className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-orange-500 rounded-2xl p-4 text-white text-sm placeholder-zinc-500 focus:outline-none transition resize-none shadow-inner"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Direct Trainer WhatsApp: 7448788897
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-xl shadow-orange-500/20 cursor-pointer"
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
              className="blur-reveal bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-orange-500/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Ready to Improve Your Computer Skills?
              </h2>
              <p className="mb-10 text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Learn today. Practice tomorrow. Use your skills with confidence. Start your learning journey with <span className="text-orange-400 font-bold">TechSasi</span>.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const coursesSection = document.getElementById("courses-section");
                    coursesSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold px-8 py-4 rounded-xl transition duration-200 shadow-xl shadow-orange-500/20 cursor-pointer"
                >
                  Explore Our Courses <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-zinc-900 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl cursor-pointer"
                >
                  <MessageCircle size={20} />
                  Talk to a Trainer: 7448788897
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COURSE DETAILS & WHATSAPP MODAL ================= */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
            <div className="bg-zinc-900 border border-orange-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 relative shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-stretch my-auto max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded-full transition cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800 pb-5 md:pb-0 md:pr-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-3">
                    Selected Program
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedPlan.title}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-3">{selectedPlan.price}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{selectedPlan.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3.5 sm:p-4 rounded-2xl border border-zinc-800">
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Clock size={12} className="text-orange-400" /> Duration
                    </span>
                    <span className="text-white text-xs font-semibold">{selectedPlan.duration}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                      <Award size={12} className="text-orange-400" /> Level
                    </span>
                    <span className="text-white text-[11px] sm:text-xs font-medium">{selectedPlan.level}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between pt-2 md:pt-0">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3">
                    What You Will Learn:
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3 mb-6">
                    {selectedPlan.features.map((feat: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-zinc-200 text-xs sm:text-sm">
                        <CheckCircle className="text-orange-400 mt-0.5 flex-shrink-0" size={16} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => handleWhatsAppClick(selectedPlan.title)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 sm:px-5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer text-xs sm:text-sm"
                  >
                    <MessageCircle size={18} /> Join via WhatsApp DM
                  </button>
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3.5 px-4 sm:px-5 rounded-xl transition cursor-pointer text-xs sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </PageLayout>
  );
};

export default ComputerCoachingServices;