import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { CenterFlow } from "@/components/ui/center-flow";
import { Cpu, Code2, Server, Users, MapPin, Workflow } from "lucide-react";

// Workflow Images
import step1WorkflowImg from "/images/workflow/step-01-discovery.png";
import step2WorkflowImg from "/images/workflow/step-02-prototyping.png";
import step3WorkflowImg from "/images/workflow/step-03-engineering.png";
import step4WorkflowImg from "/images/workflow/step-04-testing.png";
import step5WorkflowImg from "/images/workflow/step-05-deployment.png";

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
      <section className="pt-36 pb-20 bg-[var(--hero-bg)] border-b border-[var(--border-line)] relative transition-colors duration-300">
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
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold">
                <span>About TechSasi</span>
                <span aria-hidden="true">·</span>
                <span>Salem, Tamil Nadu, India</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.1] text-balance">
                Building Reliable Software. Elevating Regional Engineering.
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl pt-2">
                TechSasi is an engineering studio and tech mentorship center founded by SasiKumar. We specialize in building AI-ready websites, cloud web applications, mobile platforms, and customized business software with unmatched craftsmanship.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-subtle)]">
                <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  Kolathur, Mettur, Salem, TN
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[var(--accent)] font-semibold">Founded with Purpose</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[var(--card-bg)] p-4 border border-[var(--border-line)] shadow-xl flex items-center justify-center backdrop-blur-md">
                <div className="absolute inset-0 bg-[var(--accent)]/10 rounded-3xl blur-2xl pointer-events-none" />
                <img
                  src="/lo.png"
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
      <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl space-y-2">
            <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase">Our Philosophy</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              The Principles That Guide Our Code.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] hover:border-[var(--accent)]/50 p-6 space-y-3 transition-colors shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center text-[var(--accent)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">{pillar.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones & Journey */}
      <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-line)] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase">The Journey</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight">
              How TechSasi Was Forged.
            </h2>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              From mathematical roots to full-stack engineering and establishing a premier technology ecosystem in Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] p-6 flex flex-col justify-between space-y-4 hover:border-[var(--accent)]/50 transition-colors shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-line)] text-xs font-mono">
                    <span className="text-[var(--accent)] font-bold">0{idx + 1}.</span>
                    <span className="text-[var(--text-subtle)]">{item.period}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-line)]">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    Key Focus: {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Studio Ecosystem - Center Flow */}
      <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-6 sm:p-10 relative overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                  Interactive Ecosystem
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                  The TechSasi Operational Hub
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                  How our mathematical foundation, engineering studio, Salem academy, and cloud pipelines interlock.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 w-fit">
                <Workflow className="w-3.5 h-3.5" /> 8 Interconnected Disciplines
              </span>
            </div>

            <div className="h-[480px] w-full relative overflow-hidden flex items-center justify-center pt-2">
              <CenterFlow
                centerSize={130}
                nodeSize={72}
                pulseDuration={4}
                pulseInterval={5}
                pulseLength={0.4}
                nodeDistance={0.74}
                centerContent={
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <Cpu className="w-7 h-7 text-[var(--accent)] animate-pulse mb-1" />
                    <span className="text-[10px] font-mono font-black text-[var(--text-primary)] uppercase tracking-wider">
                      TECHSASI
                    </span>
                    <span className="text-[9px] font-mono text-[var(--accent)] font-semibold">
                      Founder Core
                    </span>
                  </div>
                }
                nodeItems={[
                  {
                    id: "discovery",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <img
                          src={step1WorkflowImg}
                          alt="Discovery & Architecture"
                          className="w-5 h-5 object-contain mb-0.5 filter drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
                        />
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">01</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Discovery</span>
                      </div>
                    ),
                  },
                  {
                    id: "prototyping",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <img
                          src={step2WorkflowImg}
                          alt="Interface Prototyping"
                          className="w-5 h-5 object-contain mb-0.5 filter drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
                        />
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">02</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Prototyping</span>
                      </div>
                    ),
                  },
                  {
                    id: "engineering",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <img
                          src={step3WorkflowImg}
                          alt="Full-Stack Engineering"
                          className="w-5 h-5 object-contain mb-0.5 filter drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
                        />
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">03</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Engineering</span>
                      </div>
                    ),
                  },
                  {
                    id: "testing",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <img
                          src={step4WorkflowImg}
                          alt="Testing & Security Audits"
                          className="w-5 h-5 object-contain mb-0.5 filter drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
                        />
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">04</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Testing & QA</span>
                      </div>
                    ),
                  },
                  {
                    id: "deployment",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <img
                          src={step5WorkflowImg}
                          alt="Cloud Launch & CI/CD"
                          className="w-5 h-5 object-contain mb-0.5 filter drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
                        />
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">05</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Cloud Launch</span>
                      </div>
                    ),
                  },
                  {
                    id: "speed",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">06</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Sub-Sec Speed</span>
                      </div>
                    ),
                  },
                  {
                    id: "security",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">07</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Zero-Trust</span>
                      </div>
                    ),
                  },
                  {
                    id: "academy",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">08</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Salem Mentorship</span>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="py-20 bg-[var(--bg-primary)] border-b border-[var(--border-line)] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase">Tech Stack &amp; Tools</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
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
                className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-line)] text-center space-y-1 hover:border-[var(--accent)]/50 transition-colors shadow-xs"
              >
                <p className="text-xs font-bold text-[var(--text-primary)] font-mono">{tech.name}</p>
                <p className="text-[10px] text-[var(--text-subtle)] font-mono">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight">
            Let’s Build Something Enduring Together.
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Have a project in mind or looking for technical partnership? Connect directly with our founding team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/proposal"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 rounded-lg shadow-md transition-transform hover:-translate-y-0.5"
            >
              Start Project Proposal
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--card-bg)] hover:bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-lg transition-colors shadow-xs"
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