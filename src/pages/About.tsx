import { useEffect } from "react";
import AOS from "aos";
import {
  Code2,
  Globe2,
  Rocket,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ServerCrash
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
      <section className="pt-36 pb-24 relative overflow-hidden bg-slate-950 border-b border-slate-900">
        {/* Modern Ambient Structural Glows */}
        <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> The Mind Behind The Code
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
              Engineering Digital <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                Ecosystems
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl font-medium leading-relaxed pt-2">
              I’m Sasi Kumar — a freelance full-stack developer helping startups,
              scale-ups, and modern enterprises build lightning-fast, highly secure, 
              and robust software infrastructures.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================
          WHO I AM & VALUE PROPOSITION
      =============================== */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          
          <div data-aos="fade-right" className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
              Architecting solutions from inception to production deployment.
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              I’m a passionate freelance software engineer and the creator of{" "}
              <span className="text-amber-400 font-bold">TechSasi</span>. I build modern custom software, high-frequency APIs, and highly scalable cloud backend systems tailored to concrete business logic.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Leveraging deep architectural expertise across React, Node.js, Java, Spring Boot, and 
              automated DevOps pipelines, I transform high-level concepts into fluid user experiences.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all group"
              >
                <span>Initiate Deployment</span>
                <ArrowRight size={16} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Minimal High-Contrast Core Pillars Grid */}
          <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
            {[
              { icon: Code2, label: "Clean Architecture", desc: "Maintainable systems" },
              { icon: Globe2, label: "Global Protocols", desc: "Cross-border products" },
              { icon: Rocket, label: "Optimized Velocity", desc: "Fast time-to-market" },
              { icon: Award, label: "Enterprise Grade", desc: "Zero compromise safety" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-900/40 border border-slate-900 hover:border-amber-500/20 rounded-2xl p-5 shadow-2xl transition-all duration-300 group"
              >
                <item.icon className="text-slate-500 group-hover:text-amber-400 transition-colors duration-200 mb-3" size={24} />
                <h4 className="text-sm font-bold text-slate-200 mb-1">{item.label}</h4>
                <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==============================
          SERVICES ARRAY
      =============================== */}
      <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Operational Matrix
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              Technical core competencies and execution vectors handled under TechSasi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Globe2,
                title: "Web Platform Development",
                desc: "High-performance marketing platforms, localized portals, e-commerce engines, and premium custom web applications built for retention.",
              },
              {
                icon: Code2,
                title: "Custom Cloud Applications",
                desc: "Secure administrative back-offices, modular SaaS environments, CRM hooks, and complete enterprise application integration layers.",
              },
              {
                icon: ServerCrash,
                title: "Cloud Infrastructure & CI/CD",
                desc: "Production deployments on AWS, automated build pipelines, containerized orchestration, secure VPS mapping, and active system uptime engineering.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-slate-900/20 border border-slate-900 hover:border-slate-800/80 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 mb-4">
                    <item.icon className="text-amber-400" size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          WHY CHOOSE ME / CTA SECTION
      =============================== */}
      <section className="py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          
          <div data-aos="fade-right" className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
              Why Engineers & Founders Choose TechSasi
            </h2>

            <ul className="space-y-3.5">
              {[
                "Direct single-point developer ownership with no agency layers",
                "Strict adherence to robust architectural guidelines and system performance",
                "Production-ready clean codebases explicitly formatted for handoff",
                "Completely transparent sprint tracking and daily staging builds",
                "Committed long-term cloud updates and system maintenance windows",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-sm md:text-base text-slate-300 font-medium">
                  <CheckCircle2 className="text-amber-500 mt-1 shrink-0" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Call to Action Container Panel */}
          <div
            data-aos="fade-left"
            className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 rounded-3xl p-8 md:p-10 text-left relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <Users size={32} className="text-amber-400 mb-4" />
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">
              Let’s Build Something Absolute
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
              Accelerate your engineering schedule. Bring clear parameters and we will formulate a clean, production-ready implementation timeline.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition shadow-lg"
            >
              <span>Request Structural Blueprint</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default About;