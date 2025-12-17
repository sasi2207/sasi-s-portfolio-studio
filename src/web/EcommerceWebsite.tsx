import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  ShieldCheck,
  Search,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

const EcommerceWebsite = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <PageLayout>
      {/* ==============================
          HERO SECTION
      =============================== */}
      <ParallaxSection
        className="pt-32 pb-24"
        bgClassName="bg-gradient-to-b from-emerald-50 via-teal-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              E-Commerce Website{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              High-performance online stores with secure payments, product
              management, and seamless customer experience.
            </p>

            <Link
              to="/proposal"
              data-aos="zoom-in"
              data-aos-delay="200"
              className="inline-flex items-center gap-2
                         bg-emerald-600 hover:bg-emerald-700
                         text-white font-semibold px-7 py-3 rounded-xl transition
                         hover:gap-3"
            >
              Get Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* ==============================
          WHAT IS E-COMMERCE
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-emerald-700">
              What is an E-Commerce Website?
            </h2>

            <p className="text-muted-foreground mb-6">
              An e-commerce website allows businesses to sell products or
              services online with catalogs, carts, payments, and order
              management.
            </p>

            <ul className="space-y-4">
              {[
                "Sell products 24/7 online",
                "Accept secure digital payments",
                "Manage orders & inventory",
                "Reach customers globally",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <ShoppingCart className="text-emerald-500 animate-pulse" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-2xl bg-white shadow-xl h-64 hover:shadow-2xl transition"
          />
        </div>
      </section>

      {/* ==============================
          PAYMENTS & CHECKOUT
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64 hover:scale-[1.02] transition"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-teal-700">
              Secure Payments & Checkout
            </h2>

            <p className="text-muted-foreground mb-6">
              Customers can pay using UPI, cards, net banking, or wallets through
              a fast and secure checkout experience.
            </p>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <CreditCard className="text-teal-500" />
                <p className="text-muted-foreground">
                  Razorpay / Stripe / PayPal integration.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4">
                <ShieldCheck className="text-teal-500" />
                <p className="text-muted-foreground">
                  SSL-secured and PCI-compliant payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          PRODUCTS & INVENTORY
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-emerald-700">
              Product & Inventory Management
            </h2>

            <p className="text-muted-foreground mb-6">
              Easily manage products, pricing, stock levels, categories, and
              discounts from an admin dashboard.
            </p>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <Package className="text-emerald-500" />
                <p className="text-muted-foreground">
                  Add, edit, and manage unlimited products.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4">
                <BarChart3 className="text-emerald-500" />
                <p className="text-muted-foreground">
                  Track sales, orders, and inventory in real time.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-2xl bg-white shadow-xl h-64"
          />
        </div>
      </section>

      {/* ==============================
          SEO & GROWTH
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-teal-700">
              SEO Optimized for Sales Growth
            </h2>

            <ul className="space-y-4">
              {[
                "SEO-friendly product pages",
                "Fast loading & mobile optimized",
                "Google Shopping ready",
                "High conversion product layouts",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Search className="text-teal-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==============================
          PRICING & CTA
      =============================== */}
      <section className="section-padding">
        <div className="container-custom" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              E-Commerce Website Package
            </h2>

            <p className="text-white/90 mb-6">
              Perfect for startups, retailers, and growing online businesses.
            </p>

            <div className="text-4xl font-bold mb-6">
              Starting at ₹45,000
            </div>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-2
                         bg-white text-emerald-700
                         font-semibold px-7 py-3 rounded-xl
                         hover:gap-3 hover:bg-emerald-50 transition"
            >
              Get Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EcommerceWebsite;
