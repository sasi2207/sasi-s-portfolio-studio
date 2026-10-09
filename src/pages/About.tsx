import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { ArrowRight, CheckCircle2, Award, Code2, Server, Globe, Cpu, Users, Sparkles, MapPin } from "lucide-react";

export const About = () => {
  const milestones = [
    {
      period: "Foundational Phase",
      title: "Analytical & Mathematical Logic",
      desc: "Rooted in pure Mathematics (B.Sc.) and early computer science studies in Tamil Nadu. Developed an obsessive focus on algorithm optimization, logical structure, and problem decomposition.",
      badge: "Core Logic"
    },
    {
      period: "Engineering Sprint",
      title: "Full-Stack Web & Systems Mastery",
      desc: "Immersed in modern full-stack web architectures — React, Node.js, Express, and distributed databases. Learned that true engineering is not merely typing syntax, but architecting sustainable solutions to human and commercial problems.",
      badge: "Full-Stack Development"
    },
    {
      period: "Resilience & Expansion",
      title: "Overcoming Industry Barriers",
      desc: "Faced the conventional barriers experienced by non-metro engineering talent. Transformed challenges into fuel by building tangible, live production software rather than waiting for conventional credentials.",
      badge: "Demonstrable Proof"
    },
    {
      period: "Polyglot Systems",
      title: "Enterprise Multi-Stack Architecture",
      desc: "Deepened expertise across Java enterprise architectures, Python data automations, PHP backend legacy bridges, and AWS cloud containerization.",
      badge: "Cross-Platform"
    },
    {
      period: "The Genesis",
      title: "TechSasi Founded in Salem",
      desc: "Established TechSasi in Kolathur, Mettur, Salem with a dual mission: deliver world-class digital systems for enterprises, while empowering local students and developers through real-world, production-level engineering coaching.",
      badge: "Company Launch"
    },
    {
      period: "Present & Future",
      title: "Scale, Reliability & Global Delivery",
      desc: "Serving startups, SMEs, and institutions with AI-ready web platforms, mobile apps, and robust ERP software with 99.9% uptime architectures.",
      badge: "Continuous Innovation"
    }
  ];

  const pillars = [
    {
      icon: Cpu,
      title: "Speed as a Feature",
      desc: "We engineer lean, high-velocity codebases with sub-second core web vitals and zero unnecessary dependencies."
    },
    {
      icon: Code2,
      title: "100% Code Ownership",
      desc: "Clients own every line of source code, database architecture, and deployment pipeline without vendor lock-in."
    },
    {
      icon: Server,
      title: "Resilient Architectures",
      desc: "Fail-safe cloud setups on AWS, Docker, and modern CDNs built for high concurrency and zero unplanned downtime."
    },
    {
      icon: Users,
      title: "Grassroots Talent Empowerment",
      desc: "Bridging the gap between academic theory and high-paying tech careers for aspiring engineers in Tamil Nadu."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-slate-50 dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "About", active: true },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                <span>About TechSasi</span>
                <span aria-hidden="true">·</span>
                <span>Salem, Tamil Nadu, India</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
                Building Reliable Software. Elevating Regional Engineering.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-2">
                TechSasi is an engineering studio and tech mentorship center founded by SasiKumar. We specialize in building AI-ready websites, cloud web applications, mobile platforms, and customized business software with unmatched craftsmanship.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  Kolathur, Mettur, Salem, TN
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-600 dark:text-amber-400 font-semibold">Founded with Purpose</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white dark:bg-gradient-to-tr dark:from-amber-500/20 dark:via-blue-500/20 dark:to-purple-500/20 p-4 border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center backdrop-blur-md">
                <div className="absolute inset-0 bg-amber-400/10 rounded-3xl blur-2xl pointer-events-none" />
                <img
                  src="/tech.png"
                  alt="TechSasi Official Emblem"
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-md"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/lo.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="py-20 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl space-y-2">
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase">Our Philosophy</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              The Principles That Guide Our Code.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] hover:border-amber-400/40 p-6 space-y-3 transition-colors shadow-sm dark:shadow-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones & Journey */}
      <section className="py-24 bg-white dark:bg-[#05070D] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase">The Journey</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              How TechSasi Was Forged.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              From mathematical roots to full-stack engineering and establishing a premier technology ecosystem in Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 dark:bg-[#090D17] border border-slate-200 dark:border-white/[0.08] p-6 flex flex-col justify-between space-y-4 hover:border-amber-400/40 transition-colors shadow-sm dark:shadow-none"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06] text-xs font-mono">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">0{idx + 1}.</span>
                    <span className="text-slate-500">{item.period}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/[0.04]">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-300">
                    Key Focus: {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="py-20 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase">Tech Stack & Tools</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Production Technologies We Rely On.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: "React.js / Next.js", category: "Frontend" },
              { name: "TypeScript", category: "Language" },
              { name: "Node.js / Express", category: "Backend" },
              { name: "Tailwind CSS", category: "Styling" },
              { name: "PostgreSQL & Mongo", category: "Databases" },
              { name: "Flutter & React Native", category: "Mobile" },
              { name: "AWS & Docker", category: "DevOps" },
              { name: "Python Automation", category: "Scripting" },
              { name: "Java & Spring Boot", category: "Enterprise" },
              { name: "REST & GraphQL", category: "API Design" },
              { name: "Razorpay & Stripe", category: "Payments" },
              { name: "Git & CI/CD", category: "Workflows" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.06] text-center space-y-1 hover:border-amber-400/30 transition-colors shadow-sm dark:shadow-none"
              >
                <p className="text-xs font-bold text-slate-900 dark:text-white font-mono">{tech.name}</p>
                <p className="text-[10px] text-slate-500 font-mono">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-slate-100 dark:bg-[#05070D] transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Let’s Build Something Enduring Together.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or looking for technical partnership? Connect directly with our founding team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/proposal"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md transition-transform hover:-translate-y-0.5"
            >
              Start Project Proposal
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/[0.1] rounded-lg transition-colors shadow-sm"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
