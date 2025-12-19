import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Smartphone,
  Apple,
  ShieldCheck,
  Wrench,
  Layers,
  Gauge,
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
   SERVICES
----------------------------------- */
const mobileServices = [
  {
    icon: Smartphone,
    title: "Android App Development",
    text: "High-performance Android apps built using modern frameworks and best practices.",
    color: "card-au-violet",
  },
  {
    icon: Apple,
    title: "iOS App Development",
    text: "Secure, scalable iOS applications designed for smooth Apple ecosystem integration.",
    color: "card-au-amber",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    text: "Authentication, data protection, and secure API communication.",
    color: "card-au-violet",
  },
  {
    icon: Gauge,
    title: "Performance Optimized",
    text: "Fast loading, smooth animations, and responsive UI experiences.",
    color: "card-au-amber",
  },
  {
    icon: Wrench,
    title: "App Maintenance & Support",
    text: "Bug fixes, updates, OS compatibility, and performance monitoring.",
    color: "card-au-violet",
  },
  {
    icon: Layers,
    title: "Scalable App Architecture",
    text: "Apps designed to scale as your business and user base grows.",
    color: "card-au-amber",
  },
];

const MobileApplicationDevelopment = () => {
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
              Mobile Application{" "}
              <span className="text-au-gradient">Development</span>
            </h1>

            <p className="text-xl text-au-body mb-10 max-w-xl">
              We design, develop, and maintain mobile applications that deliver
              exceptional user experiences and real business value.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Request App Proposal <ArrowRight size={18} />
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
            A mobile app is not just software —
            <span className="text-au-gradient font-semibold">
              {" "}it’s a direct connection between your business and users.
            </span>
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mobileServices.map((s) => (
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

      {/* ================= DEVELOPMENT ROADMAP ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-12">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              Mobile App Roadmap
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              A clear, structured roadmap from idea to app store launch.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Requirement Analysis & Planning",
              "UI/UX Design & Prototyping",
              "Development & Testing",
              "Deployment & Store Launch",
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
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-10">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              Mobile App Pricing
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              Flexible pricing based on app complexity and features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic App",
                price: "₹40,000+",
                features: [
                  "Single platform (Android / iOS)",
                  "Basic UI",
                  "API integration",
                  "Deployment support",
                ],
              },
              {
                title: "Business App",
                price: "₹80,000+",
                features: [
                  "Android & iOS",
                  "Advanced UI/UX",
                  "Authentication",
                  "Admin panel integration",
                ],
              },
              {
                title: "Enterprise App",
                price: "₹1,50,000+",
                features: [
                  "Custom architecture",
                  "Scalable backend",
                  "Advanced security",
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
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div
            ref={reveal}
            className="blur-reveal bg-gradient-to-r from-violet-700 via-white to-amber-600 rounded-3xl p-16 text-slate-900 text-center shadow-xl"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Launch Your Mobile App with Confidence
            </h2>

            <p className="mb-6 text-slate-700">
              From idea to app store — we handle everything.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-violet-800 transition"
            >
              Get Mobile App Proposal <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MobileApplicationDevelopment;
