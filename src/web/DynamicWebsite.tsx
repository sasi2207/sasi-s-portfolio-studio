import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Layout,
  Users,
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

/* ----------------------------------
   FEATURES
----------------------------------- */
const dynamicFeatures = [
  {
    icon: Database,
    title: "Database Driven Content",
    text: "Dynamic websites powered by databases for real-time content updates.",
    color: "card-au-violet",
  },
  {
    icon: Users,
    title: "User Management",
    text: "Login systems, roles, permissions, and user dashboards.",
    color: "card-au-amber",
  },
  {
    icon: Layout,
    title: "Admin Panel",
    text: "Easy-to-use admin panels to manage content and users.",
    color: "card-au-violet",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    text: "Authentication, authorization, and data protection best practices.",
    color: "card-au-amber",
  },
  {
    icon: Gauge,
    title: "High Performance",
    text: "Optimized backend APIs and caching for fast load times.",
    color: "card-au-violet",
  },
  {
    icon: Globe,
    title: "Scalable Systems",
    text: "Built to scale as your traffic and business grow.",
    color: "card-au-amber",
  },
];

const DynamicWebsite = () => {
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
              Dynamic{" "}
              <span className="text-au-gradient">Website</span>
            </h1>

            <p className="text-xl text-au-body mb-10 max-w-xl">
              Powerful, database-driven websites that adapt, scale, and grow
              with your business needs.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Request Proposal <ArrowRight size={18} />
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
            Dynamic websites go beyond static pages —
            <span className="text-au-gradient font-semibold">
              {" "}they enable interaction, automation, and growth.
            </span>
          </p>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dynamicFeatures.map((f) => (
            <div
              key={f.title}
              ref={reveal}
              className={`blur-reveal hover-lift ${f.color} border border-white/40 p-8 rounded-2xl`}
            >
              <f.icon className="text-violet-700 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-au-heading">
                {f.title}
              </h3>
              <p className="text-au-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-14">
          <div ref={reveal} className="blur-reveal">
            <h2 className="text-3xl font-heading font-bold mb-6 text-au-heading">
              Ideal Use Cases
            </h2>
            <p className="text-lg text-au-muted max-w-lg">
              Dynamic websites are ideal when content, users, or data must
              change frequently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Business websites with admin panels",
              "User login & membership systems",
              "CMS-driven content websites",
              "Booking & appointment systems",
              "Internal dashboards",
              "Custom business applications",
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

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-12">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              Dynamic Website Development Process
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              A structured approach for scalable and secure development.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Requirement Analysis",
              "System & Database Design",
              "Development & Testing",
              "Deployment & Maintenance",
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

      {/* ================= PRICING ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-10">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              Dynamic Website Pricing
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              Pricing depends on features, complexity, and integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "₹15,000+",
                features: [
                  "Dynamic pages",
                  "Basic admin panel",
                  "Database integration",
                  "Deployment support",
                ],
              },
              {
                title: "Business",
                price: "₹35,000+",
                features: [
                  "Advanced admin panel",
                  "User management",
                  "API integration",
                  "Security optimization",
                ],
              },
              {
                title: "Enterprise",
                price: "₹70,000+",
                features: [
                  "Custom workflows",
                  "Advanced security",
                  "Scalable architecture",
                  "Ongoing support",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.title}
                ref={reveal}
                className="blur-reveal hover-lift bg-white border border-slate-200 p-8 rounded-2xl"
              >
                <h3 className="font-semibold text-xl mb-2 text-au-heading">
                  {plan.title}
                </h3>
                <div className="text-3xl font-bold text-violet-700 mb-4">
                  {plan.price}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-au-body">
                      <CheckCircle className="text-amber-500 mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div
            ref={reveal}
            className="blur-reveal bg-gradient-to-r from-violet-700 via-white to-amber-600 rounded-3xl p-16 text-slate-900 text-center shadow-xl"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Build a Dynamic Website That Grows With You
            </h2>

            <p className="mb-6 text-slate-700">
              Let’s create a powerful dynamic website tailored to your
              business needs.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-violet-800 transition"
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DynamicWebsite;
