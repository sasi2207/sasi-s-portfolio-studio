import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { CenterFlow } from "@/components/ui/center-flow";
import {
  Cpu,
  Code2,
  Server,
  Users,
  MapPin,
  Workflow,
  Sparkles,
  Terminal,
  ShieldCheck,
} from "lucide-react";

// Production Tech Stack Icons
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiFlutter,
  SiDocker,
  SiPython,
  SiGraphql,
  SiGit,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

// Workflow Images (served from /public — use plain paths, don't import them)
const step1WorkflowImg = "/images/workflow/step-01-discovery.png";
const step2WorkflowImg = "/images/workflow/step-02-prototyping.png";
const step3WorkflowImg = "/images/workflow/step-03-engineering.png";
const step4WorkflowImg = "/images/workflow/step-04-testing.png";
const step5WorkflowImg = "/images/workflow/step-05-deployment.png";

/* Dual color system: Cyan (#00f0ff) + Electric Blue (#0057ff) */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradSoft =
  "bg-gradient-to-br from-[#00f0ff]/15 to-[#0057ff]/15";

export const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
      duration: 800,
      offset: 100,
    });
  }, []);

  const milestones = [
    {
      period: "Foundational Phase",
      title: "Analytical & Mathematical Logic",
      desc: "Rooted in pure Mathematics (B.Sc.) and early computer science studies in Tamil Nadu. Developed an obsessive focus on algorithm optimization, logical structure, and problem decomposition.",
      badge: "Core Logic",
    },
    {
      period: "Engineering Sprint",
      title: "Full-Stack Web & Systems Mastery",
      desc: "Immersed in modern full-stack web architectures — React, Node.js, Express, and distributed databases. Learned that true engineering is not merely typing syntax, but architecting sustainable solutions.",
      badge: "Full-Stack Development",
    },
    {
      period: "Resilience & Expansion",
      title: "Overcoming Industry Barriers",
      desc: "Faced conventional barriers in non-metro engineering. Transformed challenges into fuel by building tangible, live production software rather than waiting for conventional credentials.",
      badge: "Demonstrable Proof",
    },
    {
      period: "Polyglot Systems",
      title: "Enterprise Multi-Stack Architecture",
      desc: "Deepened expertise across Java enterprise architectures, Python data automations, PHP backend legacy bridges, and AWS cloud containerization.",
      badge: "Cross-Platform",
    },
    {
      period: "The Genesis",
      title: "TechSasi Founded in Salem",
      desc: "Established TechSasi in Kolathur, Mettur, Salem with a dual mission: deliver world-class digital systems for enterprises, while empowering local students and developers through real-world mentorship.",
      badge: "Company Launch",
    },
    {
      period: "Present & Future",
      title: "Scale, Reliability & Global Delivery",
      desc: "Serving startups, SMEs, and institutions with AI-ready web platforms, mobile apps, and robust ERP software with 99.9% uptime architectures.",
      badge: "Continuous Innovation",
    },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: "Speed as a Feature",
      desc: "We engineer lean, high-velocity codebases with sub-second core web vitals and zero unnecessary dependencies.",
    },
    {
      icon: Code2,
      title: "100% Code Ownership",
      desc: "Clients own every line of source code, database architecture, and deployment pipeline without vendor lock-in.",
    },
    {
      icon: Server,
      title: "Resilient Architectures",
      desc: "Fail-safe cloud setups on AWS, Docker, and modern CDNs built for high concurrency and zero unplanned downtime.",
    },
    {
      icon: Users,
      title: "Grassroots Talent Empowerment",
      desc: "Bridging the gap between academic theory and high-paying tech careers for aspiring engineers in Tamil Nadu.",
    },
  ];

  const technologies = [
    { name: "React.js / Next.js", category: "Frontend", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", category: "Language", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js / Express", category: "Backend", icon: SiNodedotjs, color: "#339933" },
    { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "PostgreSQL & Mongo", category: "Databases", icon: SiPostgresql, color: "#4169E1" },
    { name: "Flutter & Mobile", category: "Mobile", icon: SiFlutter, color: "#02569B" },
    { name: "AWS & Cloud", category: "DevOps", icon: FaAws, color: "#FF9900" },
    { name: "Docker", category: "Containerization", icon: SiDocker, color: "#2496ED" },
    { name: "Python", category: "Scripting & AI", icon: SiPython, color: "#3776AB" },
    { name: "Java & Spring Boot", category: "Enterprise", icon: FaJava, color: "#007396" },
    { name: "GraphQL & REST", category: "API Architecture", icon: SiGraphql, color: "#E10098" },
    { name: "Git & CI/CD", category: "Workflows", icon: SiGit, color: "#F05032" },
  ];

  return (
    <Layout>
      {/* Background Dual-Tone Mesh Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] z-0"
      />

      {/* Hero Section */}
      <section
        className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 bg-white text-slate-900 border-b border-slate-200 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[90%] sm:w-[850px] h-[360px] bg-gradient-to-r from-[#00f0ff]/25 via-[#0057ff]/15 to-[#0057ff]/10 blur-[130px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6 sm:mb-8" data-aos="fade-down" data-aos-delay="100">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "About", active: true },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div
              className="lg:col-span-8 space-y-5 sm:space-y-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 border border-[#00f0ff]/50 text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0057ff]" />
                <span className={gradText}>About TechSasi</span>
                <span className="text-[#00f0ff]">/</span>
                <span className="text-slate-600">Salem, Tamil Nadu</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] text-balance">
                Building Reliable Software. Elevating{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]">
                  Regional Engineering.
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl pt-1">
                TechSasi is an engineering studio and tech mentorship center founded by SasiKumar. We
                specialize in building AI-ready websites, cloud web applications, mobile
                platforms, and customized business software with unmatched craftsmanship.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-slate-600">
                <span className="flex items-center gap-2 text-slate-800 font-medium px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  Kolathur, Mettur, Salem, TN
                </span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#0057ff] shrink-0" />
                  <span className={gradText}>Founded with Purpose</span>
                </span>
              </div>
            </div>

            <div
              className="lg:col-span-4 flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-slate-50 dark:bg-zinc-900 p-4 border border-[#00f0ff]/40 shadow-[0_10px_40px_rgba(0,87,255,0.15)] flex items-center justify-center backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/15 to-[#0057ff]/15 rounded-3xl blur-2xl pointer-events-none" />
                <img
                  src="/lo.png"
                  alt="TechSasi Official Emblem"
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-md"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.visibility = "hidden";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section
        className="py-20 sm:py-24 bg-slate-50/80 border-b border-slate-200 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 sm:mb-14 max-w-2xl space-y-3" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold">
              <Terminal className="w-3.5 h-3.5 text-[#0057ff]" />
              <span className={gradText}>Our Philosophy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]">
                  Principles
                </span> That Guide Our Code.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                  className="rounded-3xl bg-white border border-slate-200 hover:border-[#0057ff] p-6 sm:p-7 space-y-4 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,87,255,0.22)] group"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${gradSoft} border border-[#00f0ff]/40 flex items-center justify-center text-[#0057ff] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#00f0ff] group-hover:to-[#0057ff] group-hover:text-white transition-all shadow-xs`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#0057ff] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones & Journey */}
      <section
        className="py-20 sm:py-28 bg-white border-b border-slate-200 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-3" data-aos="fade-up">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${gradText}`}>
              The Journey
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              How   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]">
                  TechSasi
                </span> Was Forged.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From mathematical roots to full-stack engineering and establishing a premier
              technology ecosystem in Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={item.title}
                data-aos="zoom-in-up"
                data-aos-delay={80 * idx}
                className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#0057ff]/70 p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 shadow-xs hover:shadow-[0_10px_30px_rgba(0,87,255,0.15)] group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono">
                    <span className={`font-black text-sm tracking-wider ${gradText}`}>
                      0{idx + 1}.
                    </span>
                    <span className="text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#0057ff] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-bold ${gradText}`}>
                    {item.badge}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${gradBg} group-hover:animate-ping transition-all`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Technologies We Rely On */}
      <section
        className="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 space-y-2" data-aos="fade-up">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${gradText}`}>
              Tech Stack &amp; Tools
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Production  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]">
                  Technologies
                </span>  We Rely On.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {technologies.map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={tech.name}
                  data-aos="flip-left"
                  data-aos-delay={40 * index}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0057ff] text-center flex flex-col items-center justify-center space-y-3 transition-all duration-300 shadow-xs hover:shadow-[0_10px_28px_rgba(0,87,255,0.2)] hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#00f0ff]/30 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                    <TechIcon
                      className="w-5 h-5 transition-colors"
                      style={{ color: tech.color }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 font-mono group-hover:text-[#0057ff] transition-colors">
                      {tech.name}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono font-medium mt-0.5">
                      {tech.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Box */}
      <section
        className="py-24 sm:py-28 bg-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 border border-[#00f0ff]/50 text-xs font-mono uppercase tracking-widest shadow-xs">
            <span className={`w-2 h-2 rounded-full ${gradBg} animate-ping`} />
            <span className={gradText}>Ready for Partnership</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Let’s Build Something{" "}
            <span className={gradText}>Enduring Together.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or looking for technical partnership? Connect directly with our
            founding team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/proposal"
              className="w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#00f0ff] to-[#0057ff] hover:from-[#00d4e0] hover:to-[#0044cc] rounded-2xl shadow-[0_4px_22px_rgba(0,87,255,0.4)] hover:shadow-[0_6px_28px_rgba(0,240,255,0.55)] transition-all cursor-pointer active:scale-95"
            >
              Start Project Proposal
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-4 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-50 hover:bg-slate-100 border border-[#00f0ff]/50 hover:border-[#0057ff] rounded-2xl transition-all cursor-pointer shadow-xs"
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