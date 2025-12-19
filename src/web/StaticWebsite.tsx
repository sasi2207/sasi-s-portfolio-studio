import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Search,
  Layout,
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
const staticFeatures = [
  {
    icon: Zap,
    title: "Ultra-Fast Performance",
    text: "Static pages load instantly with no server or database delays.",
    color: "card-au-violet",
  },
  {
    icon: ShieldCheck,
    title: "High Security",
    text: "No backend means fewer vulnerabilities and better protection.",
    color: "card-au-amber",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    text: "Clean HTML structure that search engines love.",
    color: "card-au-violet",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    text: "Optimized layouts for mobile, tablet, and desktop devices.",
    color: "card-au-amber",
  },
  {
    icon: Globe,
    title: "Global CDN Ready",
    text: "Deploy on CDN platforms for worldwide fast delivery.",
    color: "card-au-violet",
  },
  {
    icon: Layers,
    title: "Low Cost & Maintenance",
    text: "Minimal hosting cost with almost zero maintenance.",
    color: "card-au-amber",
  },
];

const StaticWebsite = () => {
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
              Static Website{" "}
              <span className="text-au-gradient">Development</span>
            </h1>

            <p className="text-xl text-au-body mb-10 max-w-xl">
              Lightweight, fast-loading static websites designed to build trust,
              improve SEO, and deliver a smooth user experience.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Request Quote <ArrowRight size={18} />
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
            Static websites focus on what matters most —
            <span className="text-au-gradient font-semibold">
              {" "}speed, reliability, and simplicity.
            </span>
          </p>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {staticFeatures.map((f) => (
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
              Static websites are perfect for businesses that need speed,
              clarity, and reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Company profile websites",
              "Personal & portfolio sites",
              "Landing pages",
              "Startup presentation websites",
              "Service-based business sites",
              "SEO-focused informational sites",
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

      {/* ================= PRICING ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-10">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              Static Website Pricing
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              Affordable pricing based on pages and design complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                price: "₹4,000+",
                features: [
                  "Single-page website",
                  "Responsive design",
                  "Basic SEO setup",
                  "Deployment",
                ],
              },
              {
                title: "Professional",
                price: "₹8,000+",
                features: [
                  "Multi-page website",
                  "Modern UI design",
                  "SEO optimization",
                  "Performance optimization",
                ],
              },
              {
                title: "Premium",
                price: "₹15,000+",
                features: [
                  "Custom animations",
                  "Advanced UI/UX",
                  "Content optimization",
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
              Launch Your Static Website Today
            </h2>

            <p className="mb-6 text-slate-700">
              Get a fast, secure, and SEO-ready website built professionally.
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

export default StaticWebsite;
