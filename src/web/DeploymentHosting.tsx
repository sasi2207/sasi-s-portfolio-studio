import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Server,
  ShieldCheck,
  Gauge,
  Globe,
  Layers,
  CheckCircle,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

/* ----------------------------------
   INTERSECTION BLUR HOOK
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
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (el: HTMLDivElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
};

const hostingServices = [
  {
    icon: Cloud,
    title: "Cloud Deployment",
    text: "Deploy applications on reliable cloud platforms with scalability and performance.",
    color: "card-au-violet",
  },
  {
    icon: Server,
    title: "Server Configuration",
    text: "Secure server setup with optimized resources and best practices.",
    color: "card-au-amber",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    text: "Fast load times, caching strategies, and uptime monitoring.",
    color: "card-au-violet",
  },
  {
    icon: ShieldCheck,
    title: "Security & SSL",
    text: "HTTPS, firewalls, backups, and protection against vulnerabilities.",
    color: "card-au-amber",
  },
  {
    icon: Globe,
    title: "Global CDN Setup",
    text: "Worldwide content delivery for faster access across regions.",
    color: "card-au-violet",
  },
  {
    icon: Layers,
    title: "Maintenance & Monitoring",
    text: "Ongoing support, updates, and server health monitoring.",
    color: "card-au-amber",
  },
];

const DeploymentHosting = () => {
  const reveal = useBlurReveal();

  return (
    <PageLayout>
      {/* ================= HERO ================= */}
      <ParallaxSection
        className="pt-36 pb-32"
        bgClassName="bg-gradient-to-br from-violet-50 via-white to-amber-50"
      >
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="blur-reveal is-visible">
            <h1 className="text-5xl xl:text-6xl font-heading font-bold mb-6 text-au-heading">
              Deployment &{" "}
              <span className="text-au-gradient">
                Hosting
              </span>
            </h1>

            <p className="text-xl text-au-body mb-10 max-w-xl">
              Reliable deployment and hosting solutions designed for performance,
              security, and long-term scalability.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Request Deployment Setup <ArrowRight size={18} />
            </Link>
          </div>

          <div ref={reveal} className="hidden lg:block blur-reveal">
            <div className="h-[420px] rounded-3xl bg-gradient-to-br from-violet-100 via-white to-amber-100 shadow-inner" />
          </div>
        </div>
      </ParallaxSection>

      {/* ================= VALUE ================= */}
      <section className="section-padding bg-white">
        <div
          ref={reveal}
          className="container-custom max-w-6xl px-6 lg:px-12 blur-reveal text-center"
        >
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-au-body">
            Deployment is not just about going live —
            <span className="text-au-gradient font-semibold">
              {" "}it’s about stability, security, and confidence.
            </span>
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {hostingServices.map((s) => (
            <div
              key={s.title}
              ref={reveal}
              className={`blur-reveal hover-lift ${s.color} border border-white/40 p-8 rounded-2xl`}
            >
              <s.icon className="text-violet-700 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-au-heading">
                {s.title}
              </h3>
              <p className="text-au-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DEPLOYMENT PROCESS ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-12">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              Our Deployment Process
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              A structured approach to ensure smooth and secure deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Infrastructure Planning",
              "Server & Environment Setup",
              "Deployment & Testing",
              "Monitoring & Optimization",
            ].map((step, i) => (
              <div
                key={step}
                ref={reveal}
                className="blur-reveal bg-white border border-slate-200 p-6 rounded-xl shadow-sm"
              >
                <div className="text-violet-700 font-bold mb-2">
                  Step {i + 1}
                </div>
                <div className="font-medium text-au-body">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-14">
          <div ref={reveal} className="blur-reveal">
            <h2 className="text-3xl font-heading font-bold mb-6 text-au-heading">
              Who Needs Deployment & Hosting?
            </h2>
            <p className="text-lg text-au-muted max-w-lg">
              Ideal for businesses that want reliable infrastructure without
              managing servers themselves.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Business & corporate websites",
              "SaaS & startup platforms",
              "E-commerce applications",
              "Portfolio & personal sites",
              "Internal tools & dashboards",
              "High-traffic landing pages",
            ].map((item) => (
              <div
                key={item}
                ref={reveal}
                className="blur-reveal flex gap-3"
              >
                <CheckCircle className="text-amber-500 mt-1" />
                <span className="text-lg text-au-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div
            ref={reveal}
            className="blur-reveal bg-gradient-to-r from-violet-700 via-white to-amber-600 rounded-3xl p-16 text-slate-900 text-center shadow-xl"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Deploy with Confidence
            </h2>

            <p className="mb-6 text-slate-700">
              Let us handle your deployment and hosting so you can focus on
              growing your business.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-violet-800 transition"
            >
              Get Deployment Proposal <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DeploymentHosting;
