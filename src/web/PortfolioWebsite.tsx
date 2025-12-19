import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  User,
  Briefcase,
  Layout,
  Image,
  Search,
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
   FEATURES
----------------------------------- */
const portfolioFeatures = [
  {
    icon: User,
    title: "Personal Branding",
    text: "Showcase your skills, story, and achievements professionally.",
    color: "card-au-violet",
  },
  {
    icon: Briefcase,
    title: "Project Showcase",
    text: "Highlight real projects with case studies and outcomes.",
    color: "card-au-amber",
  },
  {
    icon: Layout,
    title: "Modern UI Design",
    text: "Clean layouts with premium animations and smooth navigation.",
    color: "card-au-violet",
  },
  {
    icon: Image,
    title: "Visual Portfolio",
    text: "Optimized galleries for images, videos, and design work.",
    color: "card-au-amber",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    text: "Structured content to rank your name and work on Google.",
    color: "card-au-violet",
  },
  {
    icon: ShieldCheck,
    title: "Fast & Secure",
    text: "Static or lightweight builds for speed and security.",
    color: "card-au-amber",
  },
];

const PortfolioWebsite = () => {
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
              Portfolio{" "}
              <span className="text-au-gradient">Website</span>
            </h1>

            <p className="text-xl text-au-body mb-10 max-w-xl">
              A professional portfolio website that builds credibility,
              highlights your expertise, and attracts opportunities.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Request Portfolio Proposal <ArrowRight size={18} />
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
            Your portfolio is your digital identity —
            <span className="text-au-gradient font-semibold">
              {" "}make it memorable, credible, and impactful.
            </span>
          </p>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioFeatures.map((f) => (
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

      {/* ================= WHO IS IT FOR ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-14">
          <div ref={reveal} className="blur-reveal">
            <h2 className="text-3xl font-heading font-bold mb-6 text-au-heading">
              Who Needs a Portfolio Website?
            </h2>
            <p className="text-lg text-au-muted max-w-lg">
              Portfolio websites are ideal for professionals who want to stand
              out and present their work effectively.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Developers & software engineers",
              "Designers & creative professionals",
              "Freelancers & consultants",
              "Photographers & videographers",
              "Startup founders",
              "Agencies & studios",
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

      {/* ================= PROCESS ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-12">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              Portfolio Website Process
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              A simple, transparent process to launch your portfolio quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Content & Requirement Gathering",
              "UI/UX Design",
              "Development & Review",
              "Deployment & Launch",
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
              Portfolio Website Pricing
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              Simple pricing based on design complexity and content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                price: "₹5,000+",
                features: [
                  "Single-page portfolio",
                  "Responsive design",
                  "Contact form",
                  "Deployment",
                ],
              },
              {
                title: "Professional",
                price: "₹10,000+",
                features: [
                  "Multi-page layout",
                  "Project showcase",
                  "SEO optimization",
                  "Performance optimization",
                ],
              },
              {
                title: "Premium",
                price: "₹20,000+",
                features: [
                  "Custom animations",
                  "Advanced UI/UX",
                  "Blog / CMS integration",
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
              Build a Portfolio That Stands Out
            </h2>

            <p className="mb-6 text-slate-700">
              Let’s create a portfolio website that represents you perfectly.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-violet-800 transition"
            >
              Get Portfolio Proposal <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioWebsite;
