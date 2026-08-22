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
      {/* Custom Inline Grid Pattern Styles */}
      <style>{`
        .tech-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
        }
      `}</style>

      {/* ==============================
          HERO SECTION
      =============================== */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-black border-b border-slate-900 tech-grid-pattern">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-6">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" /> The TechSasi Narrative
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Engineering Digital Ecosystems <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              with Practical Intelligence.
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            TechSasi wasn’t started as a big company. It began with a single, powerful idea: to build useful software solutions and help businesses leverage technology in a simple, practical way.
          </p>
        </div>
      </section>

      {/* ==============================
          VISION & MISSION STATEMENTS
      =============================== */}
      <section className="py-24 bg-black relative overflow-hidden tech-grid-pattern">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Vision Card */}
            <div 
              data-aos="fade-right"
              className="bg-black/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden transition-all hover:border-amber-500/30"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-400 border border-slate-800">
                  <Compass size={28} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Our Vision</h3>
              </div>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed pl-1">
                To simplify the digital landscape for businesses and cultivate the next wave of engineering talent through mentorship built on real-world execution and unwavering practical value.
              </p>
            </div>

            {/* Mission Card */}
            <div 
              data-aos="fade-left"
              className="bg-black/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden transition-all hover:border-orange-500/30"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-orange-400 border border-slate-800">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Our Mission</h3>
              </div>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed pl-1">
                To deliver resilient, custom software solutions—from high-performance web applications to complex ERP and AI automation systems—while empowering beginners with the practical experience needed to thrive in technology.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================
          THE EVOLUTION TIMELINE SECTION
      =============================== */}
      <section className="py-24 bg-black border-t border-slate-900 relative tech-grid-pattern">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16 space-y-3" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Our Growth Story
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              From humble beginnings to a multifaceted development and training hub.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Phase 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-black/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden hover:border-slate-700 transition">
              <Layers className="absolute -bottom-6 -right-6 w-24 h-24 text-slate-800/30" />
              <div className="space-y-4 relative z-10">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Foundation
                </span>
                <h3 className="text-xl font-bold text-white">The Beginning</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I started by learning coding and website development. Working on small projects allowed me to explore different technologies, learning crucial lessons from every single line of code. Every challenge provided an opportunity to improve and try something better.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-black/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden hover:border-slate-700 transition">
              <Code2 className="absolute -bottom-6 -right-6 w-24 h-24 text-slate-800/30" />
              <div className="space-y-4 relative z-10">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/20">
                  Expansion
                </span>
                <h3 className="text-xl font-bold text-white">Beyond Websites</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  As the journey continued, my interest expanded far beyond basic web development. I began working with complex web applications, business software, ERP and CRM systems, e-commerce platforms, mobile applications, automation, and sophisticated AI-based solutions.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-black/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden hover:border-slate-700 transition">
              <GraduationCap className="absolute -bottom-6 -right-6 w-24 h-24 text-slate-800/30" />
              <div className="space-y-4 relative z-10">
                <span className="text-rose-400 text-xs font-bold uppercase tracking-wider bg-rose-400/10 px-3 py-1 rounded-full border border-rose-400/20">
                  Giving Back
                </span>
                <h3 className="text-xl font-bold text-white">Training & Mentorship</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Alongside development, I wanted to help students and beginners learn technology through practical experience. This led to the launch of TechSasi Software Development and Training, with the goal of helping learners understand real-world technologies and project lifecycles.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================
          CORE PHILOSOPHY HIGHLIGHT
      =============================== */}
      <section className="py-24 bg-black border-t border-slate-900 relative tech-grid-pattern">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div 
            data-aos="zoom-in"
            className="bg-black/90 backdrop-blur-sm border border-slate-800 rounded-3xl p-10 md:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <Sparkles size={40} className="mx-auto text-amber-400 opacity-70" />

            <blockquote className="text-xl md:text-3xl font-medium text-white leading-tight italic tracking-tight">
              "For me, technology is not just about writing code. It is about understanding a real problem and finding a simple technology-based solution for it."
            </blockquote>

            <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium pt-4">
              Our goal is simple: Technology should not make things complicated. It should make business easier, learning practical, and most importantly, it should create real value.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================
          WHAT WE DO TODAY (SERVICES GRID)
      =============================== */}
      <section className="py-24 bg-black border-t border-slate-900 relative overflow-hidden tech-grid-pattern">
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-3" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              TechSasi Capabilities Today
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              Leveraging deep technical expertise to solve complex business challenges and mentor new developers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Globe2,
                title: "Web & E-commerce",
                desc: "Custom websites, dynamic web applications, and secure e-commerce platforms built for growth.",
              },
              {
                icon: Smartphone,
                title: "Mobile Applications",
                desc: "Cross-platform mobile solutions designed for performance and intuitive user experiences.",
              },
              {
                icon: Cpu,
                title: "Business Software & AI",
                desc: "Scalable ERP/CRM systems, workflow automation, and intelligent AI-driven software implementations.",
              },
              {
                icon: GraduationCap,
                title: "Practical Training",
                desc: "Mentorship programs focused on real-world technologies, agile workflows, and project delivery.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-black/80 backdrop-blur-sm border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <item.icon className="text-amber-400" size={22} />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed pt-1">
                      {item.desc}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          GROWING TOGETHER & CTA SECTION
      =============================== */}
      <section className="py-24 bg-black border-t border-slate-900 tech-grid-pattern relative">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8 relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-black/80 border border-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <HeartHandshake size={14} className="text-amber-400" /> Growing Together
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Let's Build Your Future.
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The TechSasi journey is still growing. There is a lot more to learn, build, and explore together. Every project, client requirement, challenge, mistake, and new technology gives us another opportunity to improve.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition shadow-lg hover:shadow-amber-500/20"
            >
              <span>Initiate Project</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;