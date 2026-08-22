import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code2,
  Globe2,
  Smartphone,
  Cpu,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Target,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <Layout>
      {/* ==============================
          HERO SECTION
      =============================== */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-900">
        <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-6">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" /> The TechSasi Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Not a Big Corporate. <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Built on Passion, Purpose & Practical Value.
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            TechSasi started with a simple idea: to build useful software solutions and help businesses use technology in a simple and practical way.
          </p>
        </div>
      </section>

      {/* ==============================
          VISION & MISSION CARDS
      =============================== */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div 
              data-aos="fade-right"
              className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800/80 hover:border-amber-500/30 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                To simplify how businesses interact with technology and empower the next generation of developers through hands-on, practical learning experiences that create absolute real-world value.
              </p>
            </div>

            {/* Mission Card */}
            <div 
              data-aos="fade-left"
              className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800/80 hover:border-orange-500/30 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                To engineer reliable websites, applications, and custom software systems while bridging the skill gap for students by merging core software engineering workflows with real project execution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================
          THE STORY / EVOLUTION TIMELINE SECTION
      =============================== */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 space-y-3" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              How The Journey Evolved
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              Every challenge, milestone, and project shaped TechSasi into what it is today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Phase 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-400/10 px-3 py-1 rounded-full">
                  Phase 01
                </span>
                <h3 className="text-lg font-bold text-white">Roots & Basics</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Started by learning coding and website development. Worked on small projects, explored technologies, and transformed every challenge into a stepping stone to improve.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider bg-orange-400/10 px-3 py-1 rounded-full">
                  Phase 02
                </span>
                <h3 className="text-lg font-bold text-white">Expansion & Solutions</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Interest grew beyond standard websites into robust web apps, ERP & CRM systems, e-commerce networks, mobile apps, automation, and AI-driven solutions.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-rose-400 text-xs font-bold uppercase tracking-wider bg-rose-400/10 px-3 py-1 rounded-full">
                  Phase 03
                </span>
                <h3 className="text-lg font-bold text-white">Training & Growth</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Expanded focus toward software development training to guide students and beginners through practical, industry-standard project environments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================
          CORE PHILOSOPHY HIGHLIGHT
      =============================== */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div 
            data-aos="zoom-in"
            className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                Core Philosophy
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
                "Technology is not just about writing code. It is about understanding a real problem and finding a simple solution for it."
              </h2>
              <p className="text-slate-300 text-sm md:text-base font-medium max-w-2xl mx-auto pt-2">
                Technology should not make things complicated. It should make business easier, learning practical, and above all, create real value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          WHAT TECHSASI DOES TODAY (SERVICES & TRAINING)
      =============================== */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-3" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              What TechSasi Focuses On Today
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              Delivering specialized development services alongside practical software mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe2,
                title: "Web & Mobile Platforms",
                desc: "High-performance websites, dynamic web apps, custom e-commerce engines, and cross-platform mobile solutions.",
              },
              {
                icon: Cpu,
                title: "Business Software & AI",
                desc: "Enterprise ERP & CRM systems, workflow automation layers, and cutting-edge AI-based software solutions.",
              },
              {
                icon: GraduationCap,
                title: "Development & Training",
                desc: "Structured training programs designed to help students and aspiring developers understand real-world code and project workflows.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800">
                  <item.icon className="text-amber-400" size={20} />
                </div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          GROWING TOGETHER & CTA SECTION
      =============================== */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold">
            <HeartHandshake size={14} className="text-amber-400" /> Growing Together
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Ready to Build or Learn With Us?
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Every project, client requirement, challenge, and mistake gives us another opportunity to improve. TechSasi is about learning, building, and solving problems together.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;