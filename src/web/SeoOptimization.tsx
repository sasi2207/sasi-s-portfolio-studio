import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Gauge,
  Globe,
  ShieldCheck,
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
   SEO FEATURES
----------------------------------- */
const seoFeatures = [
  {
    icon: Search,
    title: "Technical SEO",
    text: "Optimize site structure, crawlability, indexing, and schema markup.",
    color: "card-au-violet",
  },
  {
    icon: TrendingUp,
    title: "On-Page Optimization",
    text: "Keyword research, content optimization, and internal linking.",
    color: "card-au-amber",
  },
  {
    icon: Gauge,
    title: "Performance SEO",
    text: "Improve Core Web Vitals, speed, and user experience.",
    color: "card-au-violet",
  },
  {
    icon: Globe,
    title: "Local & Global SEO",
    text: "Rank locally or expand internationally with scalable SEO strategies.",
    color: "card-au-amber",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Ethical SEO",
    text: "White-hat techniques with zero risk of Google penalties.",
    color: "card-au-violet",
  },
  {
    icon: Layers,
    title: "Content Strategy",
    text: "SEO-driven content that attracts traffic and converts leads.",
    color: "card-au-amber",
  },
];

const SeoOptimization = () => {
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
              SEO{" "}
              <span className="text-au-gradient">Optimization</span>
            </h1>

            <p className="text-xl text-au-body mb-10 max-w-xl">
              Data-driven SEO strategies designed to increase visibility,
              organic traffic, and long-term business growth.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Request SEO Proposal <ArrowRight size={18} />
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
            SEO is not about tricks —
            <span className="text-au-gradient font-semibold">
              {" "}it’s about building trust, relevance, and authority.
            </span>
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {seoFeatures.map((f) => (
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

      {/* ================= SEO PROCESS ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-12">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              Our SEO Process
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              A transparent and measurable approach to sustainable SEO success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "SEO Audit & Research",
              "Keyword & Competitor Analysis",
              "Optimization & Content",
              "Tracking & Continuous Growth",
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

      {/* ================= WHO IS SEO FOR ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-14">
          <div ref={reveal} className="blur-reveal">
            <h2 className="text-3xl font-heading font-bold mb-6 text-au-heading">
              Who Needs SEO?
            </h2>
            <p className="text-lg text-au-muted max-w-lg">
              SEO is essential for businesses that want consistent traffic
              without relying only on paid ads.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Business & corporate websites",
              "E-commerce stores",
              "Startups & SaaS platforms",
              "Local service providers",
              "Content & blog websites",
              "Personal brands",
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
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-10">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              SEO Pricing
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              Pricing depends on competition, keywords, and website size.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter SEO",
                price: "₹6,000 / month",
                features: [
                  "Basic audit",
                  "On-page SEO",
                  "Keyword optimization",
                  "Monthly report",
                ],
              },
              {
                title: "Growth SEO",
                price: "₹12,000 / month",
                features: [
                  "Advanced audit",
                  "Content optimization",
                  "Technical SEO",
                  "Competitor analysis",
                ],
              },
              {
                title: "Advanced SEO",
                price: "₹25,000 / month",
                features: [
                  "Full SEO strategy",
                  "High-competition keywords",
                  "Link building",
                  "Continuous optimization",
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
              Rank Higher. Grow Faster.
            </h2>

            <p className="mb-6 text-slate-700">
              Let’s build an SEO strategy that delivers real results.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-violet-800 transition"
            >
              Get SEO Proposal <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SeoOptimization;
