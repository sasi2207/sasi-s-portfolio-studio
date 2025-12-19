import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  CreditCard,
  ShieldCheck,
  Gauge,
  Layers,
  Globe,
  Truck,
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
const ecommerceFeatures = [
  {
    icon: ShoppingCart,
    title: "Product & Cart Management",
    text: "Easy product listing, categories, cart, and checkout flow.",
    color: "card-au-violet",
  },
  {
    icon: CreditCard,
    title: "Secure Payment Integration",
    text: "UPI, cards, net banking, wallets, and payment gateways.",
    color: "card-au-amber",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    text: "SSL, secure authentication, and data protection standards.",
    color: "card-au-violet",
  },
  {
    icon: Truck,
    title: "Order & Delivery Management",
    text: "Order tracking, shipping integration, and status updates.",
    color: "card-au-amber",
  },
  {
    icon: Gauge,
    title: "High Performance",
    text: "Fast loading pages optimized for conversions.",
    color: "card-au-violet",
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    text: "Built to handle traffic growth and business expansion.",
    color: "card-au-amber",
  },
];

const EcommerceWebsite = () => {
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
              E-commerce{" "}
              <span className="text-au-gradient">Website</span>
            </h1>

            <p className="text-xl text-au-body mb-10 max-w-xl">
              We build secure, scalable, and conversion-optimized e-commerce
              websites that turn visitors into paying customers.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Request E-commerce Proposal <ArrowRight size={18} />
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
            A great e-commerce website is not just a store —
            <span className="text-au-gradient font-semibold">
              {" "}it’s a complete sales engine.
            </span>
          </p>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ecommerceFeatures.map((f) => (
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

      {/* ================= DEVELOPMENT ROADMAP ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl px-6 lg:px-12">
          <div ref={reveal} className="blur-reveal mb-12">
            <h2 className="text-3xl font-heading font-bold text-au-heading">
              E-commerce Development Roadmap
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              A structured process to launch a high-performing online store.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Requirement & Business Analysis",
              "UI/UX & Store Design",
              "Development & Integration",
              "Testing, Deployment & Go-Live",
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
              E-commerce Website Pricing
            </h2>
            <p className="text-lg text-au-muted max-w-xl">
              Pricing varies based on features, scale, and integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter Store",
                price: "₹25,000+",
                features: [
                  "Up to 20 products",
                  "Basic checkout",
                  "Payment gateway",
                  "Mobile responsive",
                ],
              },
              {
                title: "Business Store",
                price: "₹60,000+",
                features: [
                  "Unlimited products",
                  "Advanced checkout",
                  "Order & inventory management",
                  "SEO optimized",
                ],
              },
              {
                title: "Enterprise Store",
                price: "₹1,20,000+",
                features: [
                  "Custom features",
                  "Multi-vendor / multi-store",
                  "High-traffic optimization",
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
              Start Selling Online with Confidence
            </h2>

            <p className="mb-6 text-slate-700">
              Let’s build an e-commerce website that grows your revenue.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-3 bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-violet-800 transition"
            >
              Get E-commerce Proposal <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EcommerceWebsite;
